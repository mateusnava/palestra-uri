"use client";

import { ERAS, eraIndex, eraOf, eraProgress } from "@/lib/eras";

type EraTimelineProps = {
  index: number;
  onGo: (slideIndex: number) => void;
};

export function EraTimeline({ index, onGo }: EraTimelineProps) {
  const currentEra = eraOf(index);

  if (!currentEra) {
    return null;
  }

  const currentIdx = eraIndex(currentEra);
  const fillWidth = eraProgress(currentEra);

  return (
    <nav
      className="era-timeline"
      aria-label="Linha do tempo"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="era-timeline__track">
        <div className="era-timeline__fill" style={{ width: `${fillWidth}%` }} />
        <div className="era-timeline__labels">
          {ERAS.map((era, i) => {
            const isPast = i < currentIdx;
            const isCurrent = i === currentIdx;

            return (
              <button
                key={era.year}
                type="button"
                className={`era-timeline__year${isPast ? " is-past" : ""}${isCurrent ? " is-current" : ""}${!isPast && !isCurrent ? " is-future" : ""}`}
                onClick={(event) => {
                  event.stopPropagation();
                  onGo(era.startIndex);
                }}
                aria-current={isCurrent ? "step" : undefined}
              >
                {era.year}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
