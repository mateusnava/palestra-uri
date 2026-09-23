"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { slides } from "@/data/slides";
import { EraTimeline } from "@/components/era-timeline";
import { SlideView } from "@/components/slide-view";
import { useDeckSync } from "@/components/use-deck-sync";

function clampIndex(value: number) {
  return Math.min(Math.max(value, 0), slides.length - 1);
}

export function Deck({ startIndex }: { startIndex?: number }) {
  const [index, setIndex] = useState(() =>
    startIndex != null ? clampIndex(startIndex) : 0,
  );
  const [notesOpen, setNotesOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [touchX, setTouchX] = useState<number | null>(null);

  const go = useCallback((next: number) => {
    setIndex((current) => clampIndex(typeof next === "number" ? next : current));
  }, []);

  useDeckSync(index, setIndex, startIndex);

  const next = useCallback(() => {
    setIndex((current) => clampIndex(current + 1));
  }, []);

  const prev = useCallback(() => {
    setIndex((current) => clampIndex(current - 1));
  }, []);

  useEffect(() => {
    if (startIndex != null) return;
    const fromHash = Number.parseInt(window.location.hash.replace("#", ""), 10);
    if (Number.isFinite(fromHash)) {
      setIndex(clampIndex(fromHash - 1));
    }
  }, [startIndex]);

  useEffect(() => {
    window.history.replaceState(null, "", `/#${index + 1}`);
  }, [index]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        return;
      }

      if (event.key === "?" || (event.key === "/" && event.shiftKey)) {
        event.preventDefault();
        setHelpOpen((open) => !open);
        return;
      }

      if (event.key === "n" || event.key === "N") {
        event.preventDefault();
        setNotesOpen((open) => !open);
        return;
      }

      if (event.key === "f" || event.key === "F") {
        event.preventDefault();
        if (document.fullscreenElement) {
          void document.exitFullscreen();
        } else {
          void document.documentElement.requestFullscreen();
        }
        return;
      }

      if (event.key === "Escape") {
        setHelpOpen(false);
        setNotesOpen(false);
        return;
      }

      if (["ArrowRight", "PageDown", " ", "j"].includes(event.key)) {
        event.preventDefault();
        next();
      }
      if (["ArrowLeft", "PageUp", "Backspace", "k"].includes(event.key)) {
        event.preventDefault();
        prev();
      }
      if (event.key === "Home") {
        event.preventDefault();
        go(0);
      }
      if (event.key === "End") {
        event.preventDefault();
        go(slides.length - 1);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, next, prev]);

  const slide = slides[index];
  const theme = slide.image
    ? "photo"
    : slide.variant === "ai"
      ? "ai"
      : slide.variant === "finale"
        ? "finale"
        : slide.variant === "emphasis"
        ? "light"
        : slide.variant === "title"
          ? "dark title"
          : slide.variant === "milestone"
            ? "milestone"
            : slide.variant === "desktop"
              ? "desktop"
              : "dark";

  return (
    <main
      className={`deck relative flex min-h-dvh flex-col overflow-hidden ${theme}`}
      onClick={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        if (x < rect.width * 0.28) prev();
        else next();
      }}
      onTouchStart={(event) => setTouchX(event.changedTouches[0]?.clientX ?? null)}
      onTouchEnd={(event) => {
        const end = event.changedTouches[0]?.clientX;
        if (touchX == null || end == null) return;
        const delta = end - touchX;
        if (Math.abs(delta) > 48) {
          if (delta < 0) next();
          else prev();
        }
        setTouchX(null);
      }}
    >
      <div className="grain" aria-hidden />

      {slide.image ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={slide.image}
            alt={slide.imageAlt ?? ""}
            fill
            priority
            unoptimized
            className={`object-cover ${slide.imageFocus ?? "object-center"}`}
          />
          <div
            className={`absolute inset-0 ${slide.imageOverlay ?? "bg-black/45"}`}
          />
        </div>
      ) : null}

      <div className="relative z-10 flex min-h-dvh flex-col px-[8vw] pb-16 pt-[9vh]">
        <EraTimeline index={index} onGo={go} />
        <SlideView key={slide.lines.join("|")} slide={slide} />
      </div>

      <footer className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-between px-[8vw] pb-6">
        <p className="font-sans text-[0.68rem] tracking-[0.28em] uppercase text-[var(--muted)]">
          {slide.variant === "intro" && !slide.year ? "URI" : "Mateus"}
        </p>
        <p className="font-sans text-[0.68rem] tracking-[0.22em] text-[var(--muted)]">
          {String(index + 1).padStart(2, "0")}
          <span className="mx-2 opacity-40">/</span>
          {String(slides.length).padStart(2, "0")}
        </p>
      </footer>

      <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-[var(--line)]">
        <div
          className="h-px bg-[var(--copper)] transition-[width] duration-500 ease-out"
          style={{ width: `${((index + 1) / slides.length) * 100}%` }}
        />
      </div>

      {notesOpen ? (
        <aside
          className="notes-panel absolute inset-x-0 bottom-0 z-30 border-t border-[var(--line)] px-[8vw] py-6"
          onClick={(event) => event.stopPropagation()}
        >
          <p className="mb-2 font-sans text-[0.68rem] tracking-[0.22em] uppercase text-[var(--copper)]">
            Nota
          </p>
          <p className="max-w-3xl text-[0.98rem] leading-relaxed text-[var(--cream)]">
            {slide.notes}
          </p>
        </aside>
      ) : null}

      {helpOpen ? (
        <aside
          className="notes-panel absolute inset-x-0 bottom-0 z-30 border-t border-[var(--line)] px-[8vw] py-6"
          onClick={(event) => event.stopPropagation()}
        >
          <p className="mb-3 font-sans text-[0.68rem] tracking-[0.22em] uppercase text-[var(--copper)]">
            Atalhos
          </p>
          <ul className="grid max-w-xl gap-2 text-[0.95rem] text-[var(--cream)] sm:grid-cols-2">
            <li>← → espaço — avançar</li>
            <li>N — notas de fala</li>
            <li>F — tela cheia</li>
            <li>? — esta ajuda</li>
            <li>/notas — celular, sincronizado</li>
          </ul>
        </aside>
      ) : null}
    </main>
  );
}
