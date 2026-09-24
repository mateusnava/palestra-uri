# Slide “Não é só técnica.” — layout + UX shift

Date: 2026-09-24  
Status: approved in conversation; awaiting review of this spec

## Goal

Fix vertical misalignment between the title and the era timeline, and add a compact before→after UI mock under the title: Clipper-style CLI → Lovable-style chat + preview.

## Layout

Two columns, top-aligned (`items-start` on the row — not independent vertical centering on the timeline):

```
Não é só técnica.     |  70s … IA (timeline unchanged)
[Clipper] → [Lovable] |
```

- Left: title, then the new visual component below it
- Right: existing `timeline` rows
- Title and first timeline row share the same top edge

## Component: `UxShift` (name flexible)

Pure CSS/React mock, same spirit as `DelphiWindow` / `dev-shift`. No raster image in `/public`.

### Structure

Horizontal pair with a short arrow between:

1. **Clipper frame** — dark/green terminal feel; short menu lines (e.g. `1. Clientes`, `2. Relatórios`, prompt stub). Readable from a distance; not a full Clipper recreation.
2. **Arrow** — thin horizontal rule / chevron, muted.
3. **Lovable frame** — split pane: left chat bubbles (stub text), right UI preview (simple cards/buttons silhouettes).

Sized to sit under the left column (`max-w-sm` / similar), not compete with the timeline width.

### Wiring

- New file under `src/components/` (e.g. `ux-shift.tsx`) + styles in `globals.css`
- Render from the `timeline` branch in `slide-view.tsx` when the slide has a dedicated flag **or** always under the left column for this variant if only this slide uses it
- Prefer a small optional field on `Slide` (e.g. `diagram: "ux-shift"` or reuse/extend `diagram`) so other timeline slides stay clean — only this slide sets it

## Data

Keep current timeline content and notes on the “Não é só técnica.” slide. Only add the diagram key / figure wiring needed for the component.

## Out of scope

- Replacing the timeline with the visual
- Generated PNG / user-supplied asset
- Changing era copy or speaker notes meaning

## Success criteria

1. Title and timeline top-align on desktop
2. Clipper → Lovable mock reads in one glance under the title
3. Visual matches deck tokens (cream, copper, line, muted) — no purple glow / generic AI chrome
