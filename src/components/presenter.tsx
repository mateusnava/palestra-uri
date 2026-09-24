"use client";

import { useState } from "react";
import { slides } from "@/data/slides";
import { useDeckSync } from "@/components/use-deck-sync";

function clampIndex(value: number) {
  return Math.min(Math.max(value, 0), slides.length - 1);
}

export function Presenter({ syncEnabled = false }: { syncEnabled?: boolean }) {
  const [index, setIndex] = useState(0);
  useDeckSync(index, setIndex, undefined, syncEnabled);

  const slide = slides[index];
  const upcoming = slides[index + 1];

  return (
    <main className="flex min-h-dvh flex-col bg-[var(--ink)] text-[var(--cream)]">
      <header className="flex items-end justify-between gap-6 px-5 pt-[max(1.25rem,env(safe-area-inset-top))]">
        <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-[var(--copper)]">
          Notas
        </p>
        <p className="font-sans text-[0.68rem] tracking-[0.22em] text-[var(--muted)]">
          {String(index + 1).padStart(2, "0")}
          <span className="mx-2 opacity-40">/</span>
          {String(slides.length).padStart(2, "0")}
        </p>
      </header>

      <h1 className="display px-5 pt-4 text-[clamp(1.6rem,7vw,2.2rem)]">
        {slide.lines.join(" ")}
      </h1>

      <article className="min-h-0 flex-1 overflow-y-auto px-5 py-6">
        <p className="text-[1.2rem] leading-relaxed">{slide.notes}</p>
        {upcoming ? (
          <p className="mt-8 text-[0.95rem] leading-snug text-[var(--muted)]">
            Próximo: {upcoming.lines.join(" ")}
          </p>
        ) : null}
      </article>

      <footer className="grid grid-cols-[1fr_auto_1fr] gap-3 px-5 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <button
          type="button"
          className="rounded-full border border-[var(--line)] px-4 py-4 text-[1rem]"
          onClick={() => setIndex((current) => clampIndex(current - 1))}
        >
          Anterior
        </button>
        <span className="self-center font-sans text-[0.72rem] tracking-[0.18em] text-[var(--muted)]">
          {slide.year ?? ""}
        </span>
        <button
          type="button"
          className="rounded-full bg-[var(--cream)] px-4 py-4 text-[1rem] text-[var(--ink)]"
          onClick={() => setIndex((current) => clampIndex(current + 1))}
        >
          Próximo
        </button>
      </footer>
    </main>
  );
}
