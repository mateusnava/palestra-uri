import { slides } from "@/data/slides";

const CALENDAR_YEAR = /^\d{4}$/;

export type Era = {
  year: string;
  startIndex: number;
};

function findHistoryBounds() {
  let start: number | null = null;
  let end: number | null = null;

  for (let i = 0; i < slides.length; i++) {
    const year = slides[i].year;
    if (year === "2006" && start === null) {
      start = i;
    }
    if (year === "2006 — 2026") {
      end = i;
    }
  }

  return { start: start ?? -1, end: end ?? -1 };
}

export const HISTORY_BOUNDS = findHistoryBounds();

function buildEras(): Era[] {
  const seen = new Set<string>();
  const eras: Era[] = [];

  for (let i = HISTORY_BOUNDS.start; i <= HISTORY_BOUNDS.end; i++) {
    const year = slides[i].year;
    if (year && CALENDAR_YEAR.test(year) && !seen.has(year)) {
      seen.add(year);
      eras.push({ year, startIndex: i });
    }
  }

  return eras;
}

export const ERAS = buildEras();

/** Current calendar era for a slide index, or null outside the history block. */
export function eraOf(index: number): string | null {
  if (index < HISTORY_BOUNDS.start || index > HISTORY_BOUNDS.end) {
    return null;
  }

  for (let i = index; i >= HISTORY_BOUNDS.start; i--) {
    const year = slides[i].year;
    if (year && CALENDAR_YEAR.test(year)) {
      return year;
    }
  }

  return ERAS.at(-1)?.year ?? null;
}

export function eraIndex(year: string): number {
  return ERAS.findIndex((era) => era.year === year);
}

export function eraProgress(currentYear: string): number {
  const idx = eraIndex(currentYear);
  if (idx === -1 || ERAS.length <= 1) return 0;
  return (idx / (ERAS.length - 1)) * 100;
}
