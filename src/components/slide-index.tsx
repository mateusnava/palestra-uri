import Image from "next/image";
import Link from "next/link";
import { slides, type Slide } from "@/data/slides";

function heading(slide: Slide) {
  return slide.lines.join(" ");
}

function thumb(slide: Slide) {
  if (slide.image) return slide.image;
  if (slide.figure) return slide.figure;
  return slide.gallery?.[0];
}

function tone(slide: Slide) {
  if (slide.image) return "bg-[#05070a] text-[var(--cream)]";
  if (slide.variant === "milestone") return "bg-[#6e2c12] text-[var(--cream)]";
  if (slide.variant === "ai") return "bg-[#02030a] text-[#f4f7ff]";
  if (slide.variant === "emphasis") return "bg-[var(--cream)] text-[var(--ink)]";
  if (slide.variant === "desktop") return "bg-[#2a6fa3] text-white";
  return "bg-[var(--ink)] text-[var(--cream)]";
}

export function SlideIndex() {
  return (
    <main className="relative min-h-dvh bg-[var(--ink)] text-[var(--cream)]">
      <div className="grain" aria-hidden />
      <div className="relative z-10 mx-auto max-w-6xl px-[6vw] pb-24 pt-16">
        <header className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="kicker mb-5">Palestra</p>
            <h1 className="display text-[clamp(2.8rem,7vw,5.4rem)] text-[var(--sand)]">
              Slides
            </h1>
            <p className="mt-5 max-w-xl text-[1.05rem] text-[var(--muted)]">
              {slides.length} slides. Um clique abre o deck naquele ponto.
            </p>
          </div>
          <Link
            href="/"
            className="kicker shrink-0 text-[var(--copper)] underline-offset-4 hover:underline"
          >
            Abrir o deck
          </Link>
        </header>

        <ol className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {slides.map((slide, index) => {
            const src = thumb(slide);
            const number = String(index + 1).padStart(2, "0");

            return (
              <li key={`${number}-${heading(slide)}`}>
                <Link
                  href={`/?n=${index + 1}`}
                  className={`group block overflow-hidden rounded-sm ring-1 ring-white/10 transition duration-300 hover:-translate-y-0.5 hover:ring-[var(--copper)] ${tone(slide)}`}
                >
                  {src ? (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={src}
                        alt={slide.figureAlt ?? slide.imageAlt ?? ""}
                        fill
                        unoptimized
                        sizes="(min-width: 1280px) 22rem, (min-width: 640px) 40vw, 90vw"
                        className={
                          slide.figureShape === "circle"
                            ? "object-contain p-6"
                            : "object-cover transition duration-500 group-hover:scale-[1.03]"
                        }
                      />
                    </div>
                  ) : null}
                  <div className="px-5 py-5">
                    <p
                      className={`mb-3 font-sans text-[0.68rem] tracking-[0.28em] uppercase ${
                        slide.variant === "emphasis"
                          ? "text-[var(--copper)]"
                          : "text-current/55"
                      }`}
                    >
                      {number}
                      {slide.year ? ` · ${slide.year}` : ""}
                    </p>
                    <h2 className="display text-[1.35rem] leading-snug">
                      {heading(slide)}
                    </h2>
                    {slide.sub ? (
                      <p className="mt-3 line-clamp-2 text-[0.95rem] leading-snug text-current/60">
                        {slide.sub}
                      </p>
                    ) : null}
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </main>
  );
}
