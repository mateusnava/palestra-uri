# “Não é só técnica.” slide — UxShift Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Top-align the title with the era timeline and add a Clipper→Lovable CSS mock under the title on the “Não é só técnica.” slide.

**Architecture:** Extend `diagram` with `"ux-shift"`. New presentational component `UxShift` (Clipper mini-frame + arrow + Lovable split preview). Timeline variant in `slide-view.tsx` uses `items-start`, drops independent `justify-center` on the list, and renders `UxShift` under the left-column title when `diagram === "ux-shift"`.

**Tech Stack:** Next.js 16 / React 19, TypeScript, Tailwind utility classes + `globals.css` component styles (same pattern as `DelphiWindow` / `dev-shift`).

## Global Constraints

- No new raster assets in `/public` — CSS/React mock only
- Deck tokens only: `--cream`, `--muted`, `--copper`, `--sand`, `--line` (no purple glow / generic AI chrome)
- Timeline copy and speaker notes stay as-is
- No automated test suite in this repo — verify with `npm run lint` and visual check of the slide
- Do **not** `git commit` unless the user explicitly asks

---

## File map

| File | Role |
|------|------|
| `src/data/slides.ts` | Add `"ux-shift"` to `diagram` union; set `diagram: "ux-shift"` on the target slide |
| `src/components/ux-shift.tsx` | New Clipper → Lovable mock |
| `src/app/globals.css` | Styles for `.ux-shift*` |
| `src/components/slide-view.tsx` | Timeline layout fix + render `UxShift` |

---

### Task 1: Wire `diagram: "ux-shift"` on the slide

**Files:**
- Modify: `src/data/slides.ts` (type + slide entry ~749–762)

**Interfaces:**
- Consumes: existing `Slide.diagram` optional field
- Produces: `diagram` union includes `"ux-shift"`; the timeline slide sets `diagram: "ux-shift"`

- [ ] **Step 1: Extend the diagram union**

In `src/data/slides.ts`, change:

```ts
diagram?: "ai-flow" | "dev-shift" | "acq-chain" | "craft-shift";
```

to:

```ts
diagram?: "ai-flow" | "dev-shift" | "acq-chain" | "craft-shift" | "ux-shift";
```

- [ ] **Step 2: Attach the diagram to the slide**

On the slide with `lines: ["Não é só técnica."]`, add `diagram: "ux-shift"` (keep `variant`, `year`, `timeline`, `notes` unchanged):

```ts
{
  variant: "timeline",
  year: "hoje",
  lines: ["Não é só técnica."],
  diagram: "ux-shift",
  timeline: [
    { year: "70s", event: "Cartão. Uma resposta." },
    { year: "80s", event: "Terminal. Digitar e esperar." },
    { year: "90s", event: "Janelas. Mouse." },
    { year: "Web", event: "De qualquer lugar." },
    { year: "Mobile", event: "App limpo. No bolso." },
    { year: "IA", event: "Linguagem natural. Voz. Fluxo por evento." },
  ],
  notes:
    "A revolução não é só produzir mais. A expectativa de quem usa sobe a cada era. Não leia todas as linhas — aponta a escada. Fecha: o cliente não quer mais telas; quer outra relação.",
},
```

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit`
Expected: PASS (unused union member is fine; renderer not wired yet)

---

### Task 2: Build `UxShift` component + CSS

**Files:**
- Create: `src/components/ux-shift.tsx`
- Modify: `src/app/globals.css` (append after `.xp-window` block ~553+, or before `.era-timeline` ~701)

**Interfaces:**
- Consumes: CSS variables from `:root` in `globals.css`
- Produces: `export function UxShift(): JSX.Element` — no props

- [ ] **Step 1: Create the component**

Create `src/components/ux-shift.tsx`:

```tsx
export function UxShift() {
  return (
    <figure className="ux-shift" aria-label="De CLI Clipper para chat e UI">
      <div className="ux-shift-frame ux-shift-clipper" aria-hidden>
        <div className="ux-shift-clipper-bar">Cadastro.exe</div>
        <pre className="ux-shift-clipper-body">{`┌─ MENU ─────────┐
│ 1. Clientes     │
│ 2. Relatórios   │
│ 3. Sair         │
└─────────────────┘
>`}</pre>
      </div>
      <span className="ux-shift-arrow" aria-hidden />
      <div className="ux-shift-frame ux-shift-lovable" aria-hidden>
        <div className="ux-shift-chat">
          <p className="ux-shift-bubble is-user">tela de clientes</p>
          <p className="ux-shift-bubble is-bot">Pronto. Preview →</p>
        </div>
        <div className="ux-shift-preview">
          <span className="ux-shift-preview-title">Clientes</span>
          <span className="ux-shift-preview-row" />
          <span className="ux-shift-preview-row" />
          <span className="ux-shift-preview-btn" />
        </div>
      </div>
    </figure>
  );
}
```

- [ ] **Step 2: Add CSS**

Append to `src/app/globals.css`:

```css
.ux-shift {
  display: flex;
  align-items: stretch;
  gap: 0.65rem;
  width: min(100%, 22rem);
  margin: 1.75rem 0 0;
}

.ux-shift-frame {
  flex: 1;
  min-width: 0;
  border: 1px solid var(--line);
  overflow: hidden;
}

.ux-shift-clipper {
  background: #0c1210;
}

.ux-shift-clipper-bar {
  padding: 0.28rem 0.45rem;
  border-bottom: 1px solid rgba(90, 180, 120, 0.35);
  font-family: var(--font-geist-mono), ui-monospace, monospace;
  font-size: 0.55rem;
  letter-spacing: 0.06em;
  color: #6aaa7a;
}

.ux-shift-clipper-body {
  margin: 0;
  padding: 0.45rem;
  font-family: var(--font-geist-mono), ui-monospace, monospace;
  font-size: 0.52rem;
  line-height: 1.35;
  color: #7dcc92;
  white-space: pre;
}

.ux-shift-arrow {
  flex-shrink: 0;
  align-self: center;
  width: 1.35rem;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--copper));
}

.ux-shift-lovable {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  background: #12151a;
}

.ux-shift-chat {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 0.4rem;
  border-right: 1px solid var(--line);
}

.ux-shift-bubble {
  margin: 0;
  padding: 0.28rem 0.35rem;
  border-radius: 0.25rem;
  font-family: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
  font-size: 0.48rem;
  line-height: 1.25;
}

.ux-shift-bubble.is-user {
  align-self: flex-end;
  background: rgba(212, 120, 60, 0.22);
  color: var(--sand);
}

.ux-shift-bubble.is-bot {
  align-self: flex-start;
  background: rgba(243, 236, 224, 0.08);
  color: var(--muted);
}

.ux-shift-preview {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0.4rem;
}

.ux-shift-preview-title {
  font-family: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
  font-size: 0.55rem;
  letter-spacing: 0.04em;
  color: var(--cream);
}

.ux-shift-preview-row {
  display: block;
  height: 0.35rem;
  border-radius: 0.15rem;
  background: rgba(243, 236, 224, 0.12);
}

.ux-shift-preview-row:nth-of-type(2) {
  width: 85%;
}

.ux-shift-preview-btn {
  display: block;
  width: 40%;
  height: 0.45rem;
  margin-top: 0.15rem;
  border-radius: 0.15rem;
  background: rgba(212, 120, 60, 0.55);
}

@media (max-width: 640px) {
  .ux-shift {
    width: min(100%, 20rem);
  }
}
```

- [ ] **Step 3: Lint the new file**

Run: `npx eslint src/components/ux-shift.tsx`
Expected: PASS (no errors)

---

### Task 3: Fix timeline alignment + mount `UxShift`

**Files:**
- Modify: `src/components/slide-view.tsx` (imports + `variant === "timeline"` block ~221–247)

**Interfaces:**
- Consumes: `UxShift` from `@/components/ux-shift`; `slide.diagram === "ux-shift"`
- Produces: timeline layout with top-aligned columns; mock under title when diagram is set

- [ ] **Step 1: Import `UxShift`**

Add next to the other diagram imports:

```ts
import { UxShift } from "@/components/ux-shift";
```

- [ ] **Step 2: Replace the timeline branch**

Replace the entire `if (slide.variant === "timeline")` return with:

```tsx
  if (slide.variant === "timeline") {
    return (
      <div className="flex min-h-0 flex-1 flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm shrink-0">
          {slide.kicker ? <p className="kicker mb-8">{slide.kicker}</p> : null}
          {slide.lines.length > 0 ? (
            <h1 className="display text-[clamp(2.4rem,5vw,4.4rem)]">{heading}</h1>
          ) : null}
          {slide.diagram === "ux-shift" ? <UxShift /> : null}
        </div>
        <ol className="flex max-w-xl flex-1 flex-col">
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
```

Key deltas vs current:
- Row: `lg:items-start` (title top ↔ first timeline row top)
- Remove `justify-between` / list `justify-center` that caused the misalignment
- Render `<UxShift />` under the heading when `diagram === "ux-shift"`

- [ ] **Step 3: Verify**

Run: `npm run lint`
Expected: PASS

Run: `npm run dev` (port 43147), open the deck, jump to “Não é só técnica.”
Check:
1. Title top aligns with “70s” row
2. Clipper → Lovable mock sits under the title in the left column
3. Timeline copy unchanged

---

## Spec coverage

| Spec requirement | Task |
|------------------|------|
| Title vs timeline top alignment | Task 3 |
| Layout: title + image left / timeline right | Task 3 |
| CSS Clipper → Lovable mock | Task 2 |
| Wire via `diagram` so other timelines stay clean | Task 1 |
| Keep timeline copy / notes | Task 1 (no edits to those strings) |
| No public raster | Task 2 |
| Deck tokens / no purple chrome | Task 2 CSS |
