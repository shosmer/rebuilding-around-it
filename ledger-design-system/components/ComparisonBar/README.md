# ComparisonBar

A horizontal bar chart for a share of respondents across a few categories, with an optional prior-year value per category, sorted by this year's value. It is the workhorse of every Ledger report: the learning-channels chart, the policy-gap chart and the role-blurring figures are all this component.

## Anatomy

- Plate and panel: as `StatTile`: a `card-edge` plate at `offset-3d`, a `card-top` to `card-bottom` panel with a `stroke-hair` edge in `line-1` and a `notch-lg` corner, padding `space-4`.
- Eyebrow: `eyebrow` in `ink-3` with `//` in `counter`, naming the measure ("// HOW DESIGNERS LEARN").
- Title: `display-md` in `ink`, a claim ("Adoption outran policy"), never a label.
- Legend, only when a prior series is present: `body-sm` in `ink-2`, a 12px `radius-sm` swatch per series in slot order, `space-1` between swatch and label, one row above the plot.
- Rows: category label in `body-sm` `ink-2`, right-aligned, 150px wide; the plot to its right; the value direct-labeled in `figure-sm` `ink-2` at `space-1` past the bar end. The highlighted row's label is `title` in `ink` and its value is `figure-md` (`font-stretch: 112%`) in `ink`.
- Bars: `bar-thickness` tall, square at both ends, filled along their length from the `-deep` step to the series color. This year is `series-1-deep` → `series-1`, prior year `series-2-deep` → `series-2`. The highlighted this-year bar wears `shadow-glow` and a `hatch` overlay at `chevron-angle` and `chevron-pitch`; every other this-year bar is flat `series-muted`. Stacked or adjacent bars are separated by a `space-0.25` gap of the panel ground.
- Track: the full width in `surface-2` with an inset `stroke-hair` in `line-1`, so a small value still reads against something.
- Baseline: `stroke-axis` in `line-2`. Ticks at 0/25/50/75/100 in `figure-sm` `ink-3`.
- Tooltip on hover: `surface-1`, `shadow-float`, `notch-sm`, padding `space-2`, category in `body`, values in `figure-sm`, prior first.
- Source line: `body-sm` in `ink-3`, once, under the plot.

## The consumer provides

`title`, `eyebrow`, `rows` (`{label, value, prior?}` in percent), `highlight` (a row label), `source`, and `showTable` to swap the plot for a two- or three-column table in `body-sm`. Rows are sorted by `value` descending unless `keepOrder` is set.

## Do

- Fix the color to the entity: filtering rows out never repaints the survivors.
- Use it for one measure. Two measures of different scales are two panels side by side, never a dual axis.
- Ship the table view; the tooltip is not the accessible path. The hatch is what tells the highlighted bar apart in print and forced-colors.

## Don't

- Don't set the value text in the series color.
- Don't slant or notch a bar's end; a 45deg cut on a bar misreads its length. Notches are for containers.
- Don't add a third series without a reason; past three slots, split into small multiples.
- Don't animate on filter beyond a 160ms crossfade; on first paint, bars may grow from the baseline once over 240ms with the hatch and glow arriving after, unless `prefers-reduced-motion` is set.
