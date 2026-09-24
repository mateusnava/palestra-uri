import Image from "next/image";
import { AiFlow } from "@/components/ai-flow";
import { AcqChain } from "@/components/acq-chain";
import { CraftShift } from "@/components/craft-shift";
import { DevShift } from "@/components/dev-shift";
import { DelphiWindow } from "@/components/delphi-window";
import type { Slide } from "@/data/slides";

type SlideViewProps = {
  slide: Slide;
};

export function SlideView({ slide }: SlideViewProps) {
  const heading = slide.lines.map((line, index) => (
    <span key={line} className="block">
      {line}
      {index < slide.lines.length - 1 ? " " : null}
    </span>
  ));

  if (slide.variant === "title") {
    return (
      <div className="flex min-h-0 flex-1 flex-col justify-end pb-[4vh]">
        {slide.kicker ? (
          <p className="kicker mb-8 after:mt-5 after:block after:h-px after:w-16 after:bg-[var(--copper)] after:content-['']">
            {slide.kicker}
          </p>
        ) : null}
        <h1 className="display max-w-5xl text-[clamp(3rem,7.4vw,6.8rem)] text-[var(--sand)]">
          {heading}
        </h1>
        {slide.sub ? (
          <p className="mt-10 text-[clamp(1.05rem,2vw,1.35rem)] tracking-wide text-[var(--muted)]">
            {slide.sub}
          </p>
        ) : null}
        {slide.footer ? (
          <p className="mt-10 font-sans text-[0.78rem] tracking-[0.18em] text-[var(--muted)]">
            {slide.footer}
          </p>
        ) : null}
      </div>
    );
  }

  if (slide.variant === "intro") {
    return (
      <div className="flex min-h-0 flex-1 flex-col justify-center gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <h1 className="display text-[clamp(2.8rem,6vw,5.2rem)]">{heading}</h1>
          {slide.items ? (
            <ul className="mt-7 max-w-xl list-disc space-y-2.5 pl-6 marker:text-[var(--copper)]">
              {slide.items.map((item) => (
                <li
                  key={item}
                  className="pl-1 text-[clamp(1.05rem,1.8vw,1.3rem)] leading-snug text-[var(--cream)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        {slide.figure ? (
          <div className="relative aspect-[4/3] w-[min(48vw,30rem)] shrink-0 overflow-hidden rounded-sm shadow-[0_18px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
            <Image
              src={slide.figure}
              alt={slide.figureAlt ?? ""}
              fill
              priority
              unoptimized
              sizes="30rem"
              className="object-cover object-[center_70%]"
            />
          </div>
        ) : null}
      </div>
    );
  }

  if (slide.variant === "milestone") {
    return (
      <div className="flex min-h-0 flex-1 flex-col justify-end gap-10 pb-[5vh] lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0">
          <p className="display text-[clamp(5.4rem,15vw,11.5rem)] leading-[0.86] tracking-[-0.04em] text-[var(--sand)]">
            {slide.year}
          </p>
          <div className="mt-10 h-px w-16 bg-[var(--sand)]/40" />
          <h1 className="display mt-8 max-w-xl text-[clamp(1.7rem,3.8vw,3rem)] text-[var(--cream)]">
            {heading}
          </h1>
          {slide.sub ? (
            <p className="mt-6 max-w-xl text-[clamp(1.1rem,2vw,1.45rem)] leading-snug text-[var(--sand)]/80">
              {slide.sub}
            </p>
          ) : null}
        </div>
        {slide.figure ? (
          <div
            className={`relative shrink-0 ${
              slide.figureWide
                ? "aspect-[16/9] w-[min(50vw,34rem)] overflow-hidden rounded-sm ring-1 ring-black/20 shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
                : "aspect-square w-[min(46vw,28rem)]"
            }`}
          >
            <Image
              src={slide.figure}
              alt={slide.figureAlt ?? ""}
              fill
              priority
              unoptimized
              sizes="34rem"
              className={
                slide.figureShape === "plain"
                  ? "object-contain"
                  : "rounded-full object-cover"
              }
            />
          </div>
        ) : null}
      </div>
    );
  }

  if (slide.variant === "ai") {
    return (
      <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center text-center">
        <div className="ai-field" aria-hidden>
          <span className="ai-bloom" />
        </div>
        <h1 className="ai-title display relative z-10 max-w-[18ch] text-[clamp(3.4rem,9.2vw,8rem)]">
          {heading}
        </h1>
        <span className="ai-slit relative z-10 mt-10" aria-hidden />
        {slide.sub ? (
          <p className="relative z-10 mt-10 max-w-xl text-[clamp(1.15rem,2.2vw,1.7rem)] leading-snug text-[var(--muted)]">
            {slide.sub}
          </p>
        ) : null}
      </div>
    );
  }

  if (slide.variant === "emphasis") {
    return (
      <div className="flex min-h-0 flex-1 flex-col justify-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className={slide.diagram === "dev-shift" ? "shrink-0" : "min-w-0"}>
          {slide.kicker ? <p className="kicker mb-8">{slide.kicker}</p> : null}
          <h1
            className={`display ${
              slide.diagram === "dev-shift"
                ? "[&>span]:whitespace-nowrap text-[clamp(2.2rem,5vw,4.4rem)]"
                : "max-w-4xl text-[clamp(2.8rem,7vw,6.2rem)]"
            }`}
          >
            {heading}
          </h1>
          {slide.sub ? (
            <p className="mt-10 max-w-2xl text-[clamp(1.15rem,2.2vw,1.65rem)] leading-snug text-[var(--muted)]">
              {slide.sub}
            </p>
          ) : null}
        </div>
        {slide.diagram === "dev-shift" ? (
          <DevShift />
        ) : slide.diagram === "acq-chain" ? (
          <AcqChain />
        ) : slide.figure ? (
          <div
            className={`relative shrink-0 ${
              slide.figureWide
                ? "w-[min(42vw,26rem)]"
                : "aspect-square w-[min(38vw,20rem)]"
            }`}
          >
            <Image
              src={slide.figure}
              alt={slide.figureAlt ?? ""}
              width={720}
              height={400}
              unoptimized
              className="h-auto w-full object-contain"
            />
          </div>
        ) : null}
      </div>
    );
  }

  if (slide.variant === "list") {
    return (
      <div className="flex min-h-0 flex-1 flex-col justify-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          {slide.kicker ? <p className="kicker mb-8">{slide.kicker}</p> : null}
          <h1 className="display text-[clamp(2.1rem,4.6vw,4rem)]">{heading}</h1>
        </div>
        <div className="max-w-lg flex-1">
          {slide.items ? (
            <ol className="space-y-5">
              {slide.items.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-5 text-[clamp(1.2rem,2.3vw,1.85rem)] leading-snug"
                >
                  <span className="mt-1 font-sans text-[0.72rem] tracking-[0.22em] text-[var(--copper)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-[1.05em] font-normal">{item}</span>
                </li>
              ))}
            </ol>
          ) : null}
          {slide.footer ? (
            <p className="mt-10 text-[1.05rem] text-[var(--muted)]">{slide.footer}</p>
          ) : null}
        </div>
      </div>
    );
  }

  if (slide.variant === "timeline") {
    return (
      <div className="flex min-h-0 flex-1 flex-col justify-between gap-10 lg:flex-row">
        <div className="max-w-sm">
          {slide.kicker ? <p className="kicker mb-8">{slide.kicker}</p> : null}
          {slide.lines.length > 0 ? (
            <h1 className="display text-[clamp(2.4rem,5vw,4.4rem)]">{heading}</h1>
          ) : null}
        </div>
        <ol className="flex max-w-xl flex-1 flex-col justify-center">
          {slide.timeline?.map((row) => (
            <li
              key={`${row.year}-${row.event}`}
              className="grid grid-cols-[5.5rem_1fr] items-baseline gap-6 border-t border-[var(--line)] py-3 first:border-t-0 first:pt-0 last:pb-0"
            >
              <span className="font-sans text-[0.78rem] tracking-[0.18em] text-[var(--copper)]">
                {row.year}
              </span>
              <span className="text-[clamp(1.05rem,2vw,1.35rem)] text-[var(--cream)]">
                {row.event}
              </span>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (slide.variant === "desktop") {
    return (
      <div className="flex min-h-0 flex-1 flex-col justify-center">
        <DelphiWindow />
      </div>
    );
  }

  if (slide.variant === "columns") {
    return (
      <div className="flex min-h-0 flex-1 flex-col justify-center">
        <div className="grid gap-14 md:grid-cols-2 md:gap-0">
          {(slide.columns ?? []).map((column, index) => (
            <article
              key={column.lines.join("|")}
              className={`min-w-0 ${
                index > 0
                  ? "border-[var(--line)] md:border-l md:pl-16 lg:pl-20"
                  : "md:pr-16 lg:pr-20"
              }`}
            >
              <p className="finale-index">{String(index + 1).padStart(2, "0")}</p>
              <h1 className="display mt-6 text-[clamp(2.1rem,4.4vw,3.6rem)] text-[var(--sand)]">
                {column.lines.map((line, lineIndex) => (
                  <span key={line} className="block">
                    {line}
                    {lineIndex < column.lines.length - 1 ? " " : null}
                  </span>
                ))}
              </h1>
              {column.sub ? (
                <p className="mt-8 max-w-md text-[clamp(1.1rem,2vw,1.45rem)] leading-snug text-[var(--muted)]">
                  {column.sub}
                </p>
              ) : null}
              {column.footer ? (
                <p className="mt-8 max-w-md text-[1.05rem] text-[var(--muted)]">
                  {column.footer}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    );
  }

  if (slide.variant === "finale") {
    const pillars = slide.items ?? [];

    return (
      <div className="flex min-h-0 flex-1 flex-col justify-center">
        <h1 className="display max-w-4xl text-[clamp(3rem,8vw,7rem)] text-[var(--sand)]">
          {heading}
        </h1>
        {slide.sub ? (
          <p className="mt-8 max-w-2xl text-[clamp(1.1rem,2.1vw,1.5rem)] leading-snug text-[var(--muted)]">
            {slide.sub}
          </p>
        ) : null}
        <div className="mt-16 grid gap-12 border-t border-[var(--line)] pt-12 md:grid-cols-2 md:gap-20">
          {pillars.map((item, index) => (
            <article key={item} className="finale-pillar">
              <p className="finale-index">{String(index + 1).padStart(2, "0")}</p>
              <p className="finale-copy mt-5">{item}</p>
            </article>
          ))}
        </div>
      </div>
    );
  }

  if (slide.variant === "close") {
    return (
      <div className="flex min-h-0 flex-1 flex-col justify-center gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <h1 className="display text-[clamp(3.4rem,10vw,8rem)]">{heading}</h1>
          {slide.sub ? (
            <p className="mt-8 text-[clamp(1.2rem,2.4vw,1.7rem)] text-[var(--muted)]">
              {slide.sub}
            </p>
          ) : null}
        </div>
        {slide.figure ? (
          <div className="relative aspect-[4/3] w-[min(48vw,30rem)] shrink-0 overflow-hidden rounded-sm shadow-[0_18px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
            <Image
              src={slide.figure}
              alt={slide.figureAlt ?? ""}
              fill
              priority
              unoptimized
              sizes="30rem"
              className="object-cover object-[center_70%]"
            />
          </div>
        ) : null}
      </div>
    );
  }

  const hasMedia = Boolean(slide.gallery || slide.figure || slide.video);
  const hasChart = slide.diagram === "craft-shift";

  return (
    <div
      className={`flex min-h-0 flex-1 flex-col justify-center ${
        hasMedia && hasChart
          ? "statement-split gap-8 lg:flex-row lg:items-center lg:justify-between"
          : hasMedia
            ? "gap-10 lg:flex-row lg:items-center lg:justify-between"
            : ""
      }`}
    >
      <div className={hasMedia && hasChart ? "min-w-0 flex-1" : "min-w-0"}>
        {slide.kicker ? <p className="kicker mb-8">{slide.kicker}</p> : null}
        <h1
          className={`display ${
            hasChart
              ? "max-w-none text-[clamp(1.8rem,3.6vw,3.2rem)]"
              : hasMedia
                ? "max-w-xl text-[clamp(2.3rem,5.8vw,5.1rem)]"
                : "max-w-5xl text-[clamp(2.8rem,7.2vw,6.4rem)]"
          }`}
        >
          {heading}
        </h1>
        {slide.sub ? (
          <p
            className={`mt-10 leading-snug text-[var(--muted)] ${
              hasMedia
                ? "max-w-xl text-[clamp(1.1rem,2.1vw,1.5rem)]"
                : "max-w-3xl text-[clamp(1.2rem,2.3vw,1.7rem)]"
            }`}
          >
            {slide.sub}
          </p>
        ) : null}
        {slide.footer ? (
          <p className="mt-8 text-[1.05rem] text-[var(--muted)]">{slide.footer}</p>
        ) : null}
        {slide.diagram === "ai-flow" ? <AiFlow /> : null}
        {slide.diagram === "craft-shift" ? <CraftShift /> : null}
      </div>
      {slide.gallery ? (
        <div
          className={`grid shrink-0 gap-2.5 ${
            slide.gallery.length <= 4
              ? "w-[min(48vw,28rem)] grid-cols-2"
              : slide.gallery.length >= 7
                ? "w-[min(56vw,34rem)] grid-cols-4"
                : "w-[min(52vw,26rem)] grid-cols-3"
          }`}
        >
          {slide.gallery.map((src) => (
            <div
              key={src}
              className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-[0_10px_24px_rgba(0,0,0,0.4)] ring-1 ring-white/10"
            >
              <Image
                src={src}
                alt=""
                fill
                unoptimized
                sizes="9rem"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      ) : slide.video ? (
        <div
          className="relative aspect-[9/16] h-[min(72vh,36rem)] shrink-0 overflow-hidden rounded-sm shadow-[0_18px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/10"
          onClick={(event) => event.stopPropagation()}
        >
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${slide.video}?rel=0`}
            title="Vídeo do Conrad sobre ser uma boa pessoa"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      ) : slide.figure ? (
        <div
          className={`relative shrink-0 overflow-hidden rounded-sm shadow-[0_18px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/10 ${
            hasChart
              ? "w-[min(42vw,36rem)]"
              : slide.figureWide
                ? "w-[min(52vw,38rem)]"
                : "w-[min(42vw,22rem)]"
          }`}
        >
          <Image
            src={slide.figure}
            alt={slide.figureAlt ?? ""}
            width={720}
            height={960}
            unoptimized
            className="h-auto w-full object-contain"
          />
        </div>
      ) : null}
    </div>
  );
}
