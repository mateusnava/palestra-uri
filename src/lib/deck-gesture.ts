export type DeckNav = "next" | "prev";

export type DeckPointer = {
  startX: number | null;
  ignoreClick: boolean;
};

export type PointerEvent =
  | { type: "start"; x: number }
  | { type: "end"; x: number }
  | { type: "click"; x: number; width: number };

const SWIPE_THRESHOLD = 48;
const CLICK_PREV_RATIO = 0.28;

export function createDeckPointer(): DeckPointer {
  return { startX: null, ignoreClick: false };
}

export function pointerStart(pointer: DeckPointer, x: number): DeckPointer {
  return { startX: x, ignoreClick: false };
}

export function pointerEnd(
  pointer: DeckPointer,
  x: number,
  threshold = SWIPE_THRESHOLD,
): { pointer: DeckPointer; nav: DeckNav | null } {
  if (pointer.startX == null) {
    return { pointer: createDeckPointer(), nav: null };
  }

  const delta = x - pointer.startX;
  if (Math.abs(delta) > threshold) {
    return {
      pointer: { startX: null, ignoreClick: true },
      nav: delta < 0 ? "next" : "prev",
    };
  }

  return { pointer: { startX: null, ignoreClick: false }, nav: null };
}

export function pointerClick(
  pointer: DeckPointer,
  x: number,
  width: number,
  prevRatio = CLICK_PREV_RATIO,
): { pointer: DeckPointer; nav: DeckNav | null } {
  if (pointer.ignoreClick) {
    return { pointer: { startX: null, ignoreClick: false }, nav: null };
  }

  return {
    pointer,
    nav: x < width * prevRatio ? "prev" : "next",
  };
}

export function runPointerSequence(events: PointerEvent[]): DeckNav[] {
  let pointer = createDeckPointer();
  const navs: DeckNav[] = [];

  for (const event of events) {
    if (event.type === "start") {
      pointer = pointerStart(pointer, event.x);
      continue;
    }

    const result =
      event.type === "end"
        ? pointerEnd(pointer, event.x)
        : pointerClick(pointer, event.x, event.width);

    pointer = result.pointer;
    if (result.nav) navs.push(result.nav);
  }

  return navs;
}
