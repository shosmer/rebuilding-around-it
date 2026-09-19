# StatTile

A single headline figure with its finding and base, used where the number itself is the point and a chart would add nothing. One per finding; up to three in a row, never more, and never two `display-xl`-scale tiles fighting for the same page.

## Anatomy

- Container: a card: `card-top` to `card-bottom` at 180deg, `stroke-hair` edge in `line-1`, `radius-lg`, `shadow-card` with the inset `card-highlight` top edge, padding `space-6` (`space-4` under 600px).
- Eyebrow (optional): `eyebrow` in `ink-3`, the audience or the metric family ("WEEKLY AI USE").
- Figure: `figure-xl` in `ink`. A highlighted tile, at most one per row, sets the figure in the accent gradient (`accent-deep` to `accent` at 135deg, background-clip text) with a blurred `accent-glow` halo behind it.
- Change (optional): `figure-sm` in `ink-2`, "from 54%", set `space-1` under the figure. A change is words and a number, never an arrow glyph alone.
- Finding: `body` in `ink`, one sentence, the claim the number supports.
- Base: `body-sm` in `ink-3`, "n = 900+ designers", pinned to the bottom above a `stroke-hair` rule in `line-1`.

## The consumer provides

`eyebrow`, `figure`, `change`, `finding`, `base`, and `highlighted` (boolean). The tile lays out top-down; it does not resize its figure to fit, so keep figures to four characters ("91%", "2x", "7 tools" goes in the finding, the figure is "7").

## Do

- Put the base on every tile the first time a figure appears.
- Use "2x" for a ratio and "7" for a count; the unit goes in the finding.

## Don't

- Don't add a sparkline; a tile is for a number with no time series behind it.
- Don't color the figure with a status token. `accent` is the only highlight.
