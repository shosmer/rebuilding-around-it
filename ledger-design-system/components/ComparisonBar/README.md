# ComparisonBar

A horizontal bar chart for a share of respondents across a few categories, with an optional prior-year value per category, sorted by this year's value. It is the workhorse of every Ledger report: the learning-channels chart, the policy-gap chart and the role-blurring figures are all this component.

## Anatomy

- Panel: a card: `card-top` to `card-bottom` at 180deg, `stroke-hair` edge in `line-1`, `radius-lg`, `shadow-card` with the inset `card-highlight` top edge, padding `space-6`.
- Title: `display-md` in `ink`, a claim ("Adoption outran policy"), never a label.
- Legend, only when a prior series is present: `body-sm` in `ink-2`, a 12px `radius-sm` swatch per series, in slot order, `space-2` between swatch and label, one row above the plot.
- Rows: category label in `body-sm` `ink-2`, left, 160px wide; the plot to its right; the value direct-labeled in `figure-sm` `ink-2` at `space-1` past the bar end. The highlighted row's label is `title` in `ink`; its value is `figure-md` in `ink`.
- Bars: `bar-thickness` tall, square at the baseline, `radius-sm` on the free end, filled along their length from the `-deep` step to the series color. This year is `series-1-deep` → `series-1`, prior year `series-2-deep` → `series-2`; the highlighted row's this-year bar wears `shadow-glow`, and every other this-year bar is flat `series-muted`. Stacked or adjacent bars are separated by a `space-0.5` gap of `surface-1`.
- Track: the full width in `surface-2` with an inset `stroke-hair` in `line-1`, so a small value still reads against something.
- Baseline: `stroke-axis` in `line-2`. Gridlines at 25/50/75/100 in `line-1`, ticks in `figure-sm` `ink-3`.
- Tooltip on hover: `surface-1`, `shadow-float`, `radius-md`, padding `space-3`, category in `body`, values in `figure-sm`, prior first.
- Source line: `body-sm` in `ink-3`, once, under the plot.

## The consumer provides

`title`, `rows` (`{label, value, prior?}` in percent), `highlight` (a row label), `source`, and `showTable` to swap the plot for a two- or three-column table in `body-sm`. Rows are sorted by `value` descending unless `keepOrder` is set.

## Do

- Fix the color to the entity: filtering rows out never repaints the survivors.
- Use it for one measure. Two measures of different scales are two panels side by side, never a dual axis.
- Ship the table view; the tooltip is not the accessible path.

## Don't

- Don't set the value text in the series color.
- Don't add a third series without a reason; past three slots, split into small multiples.
- Don't animate on filter beyond a 160ms crossfade; on first paint, bars may grow from the baseline once over 240ms unless `prefers-reduced-motion` is set.
