# StatTile

A single headline figure with its finding and base, used where the number itself is the point and a chart would add nothing. One per finding; up to three in a row, never more. The figure is the loudest element on the page by design.

## Anatomy

- Plate: a solid `card-edge` block the same shape as the tile, offset `offset-3d` down and right, painted as a `::before` behind the tile (`shadow-3d`).
- Container: `card-top` to `card-bottom` at 180deg, `stroke-hair` edge in `line-1`, top-right corner cut by `notch-lg`, `radius-none`, padding `space-4` (`space-3` under 600px).
- Eyebrow: `eyebrow` in `ink-3`, opened with `//` in `counter`: "// WEEKLY AI USE".
- Figure: `figure-xl` (Archivo, `font-stretch: 125%`) in `ink`. The highlighted tile, at most one per row, sets it in the accent gradient (`accent-deep` to `accent` at `chevron-angle`, background-clip text) with a blurred `accent-glow` halo behind it.
- Change (optional): `figure-sm` in `ink-2`, "from 54% a year earlier". Words and a number, never an arrow glyph alone.
- Finding: `body` in `ink`, one sentence, the claim the number supports.
- Base: `body-sm` in `ink-3`, "n = 900+ designers", pinned to the bottom above a `stroke-hair` rule in `line-1`.

## The consumer provides

`eyebrow`, `figure`, `change`, `finding`, `base`, and `highlighted` (boolean). The tile lays out top-down and does not shrink its figure to fit, so keep figures to four characters ("91%", "2x", "7"); the unit goes in the finding.

## Do

- Put the base on every tile the first time a figure appears.
- Hover only if the tile is a link; then it lifts (-4px, -4px) and the plate goes to `offset-3d-hover` over 120ms.

## Don't

- Don't add a sparkline; a tile is for a number with no time series behind it.
- Don't color the figure with a status token or with `counter`. The accent gradient is the only highlight.
- Don't round the corners. Ledger cuts them.
