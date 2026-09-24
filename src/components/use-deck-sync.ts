"use client";

import { useEffect, useRef, type Dispatch, type SetStateAction } from "react";

export function useDeckSync(
  index: number,
  setIndex: Dispatch<SetStateAction<number>>,
  leadIndex?: number,
  enabled = false,
) {
  const ready = useRef(false);
  const remote = useRef(false);
  const lead = useRef(leadIndex);

  useEffect(() => {
    if (!enabled) return;

    let cancelled = false;

    const apply = (incoming: number) => {
      if (!ready.current && lead.current != null) {
        ready.current = true;
        const next = lead.current;
        setIndex(next);
        void fetch("/api/deck", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ index: next }),
        });
        return;
      }

      ready.current = true;
      setIndex((current) => {
        if (current === incoming) return current;
        remote.current = true;
        return incoming;
      });
    };

    const pull = async () => {
      const response = await fetch("/api/deck", { cache: "no-store" });
      if (!response.ok || cancelled) return;
      const payload = (await response.json()) as { index?: number };
      if (typeof payload.index === "number") apply(payload.index);
    };

    void pull();
    const poll = window.setInterval(() => void pull(), 800);
    const source = new EventSource("/api/deck/stream");
    source.onmessage = (event) => {
      const payload = JSON.parse(event.data) as { index?: number };
      if (typeof payload.index === "number") apply(payload.index);
    };

    return () => {
      cancelled = true;
      window.clearInterval(poll);
      source.close();
    };
  }, [enabled, setIndex]);

  useEffect(() => {
    if (!enabled) return;
    if (!ready.current) return;
    if (remote.current) {
      remote.current = false;
      return;
    }

    void fetch("/api/deck", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ index }),
    });
  }, [enabled, index]);
}
