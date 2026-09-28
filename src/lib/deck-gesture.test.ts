import assert from "node:assert/strict";
import { test } from "node:test";
import { runPointerSequence } from "./deck-gesture.ts";

test("swipe left then synthetic click on the left edge only advances once", () => {
  const navs = runPointerSequence([
    { type: "start", x: 200 },
    { type: "end", x: 80 },
    { type: "click", x: 80, width: 390 },
  ]);

  assert.deepEqual(navs, ["next"]);
});

test("swipe right then synthetic click on the right side only goes back once", () => {
  const navs = runPointerSequence([
    { type: "start", x: 80 },
    { type: "end", x: 220 },
    { type: "click", x: 220, width: 390 },
  ]);

  assert.deepEqual(navs, ["prev"]);
});

test("a tap on the left third goes back without needing a swipe", () => {
  const navs = runPointerSequence([
    { type: "start", x: 40 },
    { type: "end", x: 42 },
    { type: "click", x: 42, width: 390 },
  ]);

  assert.deepEqual(navs, ["prev"]);
});

test("a tap on the right side advances", () => {
  const navs = runPointerSequence([
    { type: "start", x: 300 },
    { type: "end", x: 301 },
    { type: "click", x: 301, width: 390 },
  ]);

  assert.deepEqual(navs, ["next"]);
});
