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
      <div className="flex min-h-0 flex-1 flex-col justify-between">
        {slide.kicker ? <p className="kicker">{slide.kicker}</p> : <span />}
        <div className="max-w-5xl">
          <h1 className="display text-[clamp(2.6rem,7.2vw,6.4rem)]">{heading}</h1>
          {slide.sub ? (
            <p className="mt-10 text-[clamp(1.05rem,2vw,1.35rem)] tracking-wide text-[var(--muted)]">
              {slide.sub}
            </p>
          ) : null}
        </div>
        <span />
      </div>
    );
  }

  if (slide.variant === "emphasis") {
    return (
      <div className="flex min-h-0 flex-1 flex-col justify-center">
        {slide.kicker ? <p className="kicker mb-8">{slide.kicker}</p> : null}
        {slide.year ? <p className="kicker mb-8">{slide.year}</p> : null}
        <h1 className="display max-w-5xl text-[clamp(2.5rem,6.4vw,5.6rem)]">
          {heading}
        </h1>
        {slide.sub ? (
          <p className="mt-10 max-w-2xl text-[clamp(1.15rem,2.2vw,1.65rem)] leading-snug text-[var(--muted)]">
            {slide.sub}
          </p>
        ) : null}
      </div>
    );
  }

  if (slide.variant === "list") {
    return (
      <div className="flex min-h-0 flex-1 flex-col justify-between gap-12 lg:flex-row lg:items-end">
        <div className="max-w-xl">
          {slide.year ? <p className="kicker mb-8">{slide.year}</p> : null}
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
          <h1 className="display text-[clamp(2.4rem,5vw,4.4rem)]">{heading}</h1>
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

  if (slide.variant === "close") {
    return (
      <div className="flex min-h-0 flex-1 flex-col justify-center">
        <h1 className="display text-[clamp(3.4rem,10vw,8rem)]">{heading}</h1>
        {slide.sub ? (
          <p className="mt-8 text-[clamp(1.2rem,2.4vw,1.7rem)] text-[var(--muted)]">
            {slide.sub}
          </p>
        ) : null}
        {slide.footer ? (
          <p className="mt-16 font-sans text-[0.78rem] tracking-[0.28em] uppercase text-[var(--copper)]">
            {slide.footer}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col justify-center">
      {slide.year ? <p className="kicker mb-8">{slide.year}</p> : null}
      {slide.kicker ? <p className="kicker mb-8">{slide.kicker}</p> : null}
      <h1 className="display max-w-5xl text-[clamp(2.3rem,5.8vw,5.1rem)]">
        {heading}
      </h1>
      {slide.sub ? (
        <p className="mt-10 max-w-2xl text-[clamp(1.1rem,2.1vw,1.5rem)] leading-snug text-[var(--muted)]">
          {slide.sub}
        </p>
      ) : null}
    </div>
  );
}
