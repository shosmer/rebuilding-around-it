Ledger is a theme layer for Meta's Astryx design system, built for one job: presenting survey evidence to people who make decisions with it. It replaces Astryx's personality-first defaults (Butter, Matcha, Y2K and the rest) with a restrained, data-forward stance that reads the same to a designer on the team and to a federal regulator. Every value below is a Ledger token; the Astryx mapping section says how they land on Astryx's custom properties.

## Principles

- **The number is the hero.** One figure per tile, one claim per chart title, one thesis per page. Everything else recedes.
- **Borders, not shadows.** Elevation is drawn with `line-1` edges and `surface-0` → `surface-1` → `surface-2` steps. `shadow-float` exists only for tooltips and menus.
- **One accent.** `accent` (teal) is the only hue that means "look here". It never competes with the chart series, because in a chart the highlighted bar *is* `series-1` and everything else is `series-muted`.
- **Same system, four readers.** The palette and type never change by audience. What changes is which finding leads, how much methodology is shown, and how a number is qualified (see the Audiences section).

## Content fundamentals

- Write in the second person for the team ("you", "your stack") and in the third person for every external audience ("designers", "organizations"). Never "we" when speaking for the organization or the industry.
- Sentence case everywhere except `eyebrow`, which is uppercase by style.
- Lead with the finding, then the number, then the base: "Peer learning tripled, from 24% to 80% of designers, year over year." A number never opens a sentence in body copy; it can open a stat tile.
- Every statistic carries its base in `body-sm` `ink-2`: "900+ designers, 60+ countries" on the page where it first appears, "n = 900+" thereafter in `figure-sm`.
- Cite once per page in `ink-3`: "Source: Designer Fund and Foundation Capital, AI in Design 2026." Never a footnote per chart.
- Round to whole percentages; write ranges with an en dash; write change as "from X% to Y%" and not as "+56 pts" unless the delta is itself the finding.
- No emoji. No exclamation marks. Hedge claims about causation: the survey shows correlation between a tinkering culture and feeling "more creative and capable", not cause.

## Color

- Page in `surface-0`; cards, tiles and chart plots in `surface-1` with a `stroke-hair` edge in `line-1`; wells and table headers in `surface-2`.
- Headlines, body and figures in `ink`. Captions, axis labels and table cells in `ink-2`. Eyebrows, footnotes and sources in `ink-3`, never body copy.
- Links, the active filter, the selected chip and the one highlighted number are `accent`. Primary buttons fill with `accent-strong` and set their label in `on-accent`. Hover and selected rows use `accent-soft` with `ink` on it.
- `surface-inverse` is allowed once per page: the masthead, or a single callout. Text on it is `ink-inverse`.
- The focus ring is `focus-ring` at `stroke-line`, solid, offset 2px, on every interactive element. It is 3:1 or better on every surface in both themes.
- Status colors are reserved. `status-good`, `status-warning` and `status-critical` always ship with an icon and a word, never a color alone, and are never used as chart series. `status-good` is blue-shifted so it and `status-critical` are not a plain green and red.
- Dark is a selected theme, not a flip: `accent` lightens to `#7fd0c8` and so `on-accent` becomes dark ink; the chart series step down in chroma. Check the Dark column of every pair, not only Light.

## Type

- Three families, all Google-hosted: Source Serif 4 for `display-*`, IBM Plex Sans for text, IBM Plex Mono for figures. Load them with `font-display: swap`; the fallback stacks in `tokens.json` are what a reader sees for the first paint.
- `display-xl` once per page, for the hero number or the thesis. `display-lg` for section titles. `display-md` for chart titles that make a claim ("Adoption outran policy"), never for a neutral label ("Figure 3").
- `title` for card headers, `body-lg` for the lead paragraph of a section, `body` for everything else, `body-sm` for captions and axis labels, `eyebrow` for the audience or section label above a title.
- Numbers wear the mono: `figure-xl` on stat tiles, `figure-md` for an inline comparison ("24% → 80%") and the direct label on a highlighted bar, `figure-sm` for ticks, sample sizes and table numerals. Never set a statistic in the serif; the serif is for words.
- Body columns stop at `measure` (68ch).

## Spacing, radii, borders

- A 4px base. Chart internals step by `space-1`; layout steps by `space-4`, `space-6`, `space-8`; sections are `space-12` apart; the page gutter and the space above a `display-xl` are `space-16`.
- `radius-sm` on chips, inputs and the free end of a bar; `radius-md` on buttons and tooltips; `radius-lg` on cards and chart panels. Nothing rounder: Ledger is square-shouldered.
- `stroke-hair` in `line-1` for card edges, table rules and gridlines. `stroke-axis` in `line-2` for the chart baseline. `stroke-line` for line-chart series and the focus ring.

## Charts

- Pick the form before the color. A single headline figure is a stat tile (`StatTile`), not a chart. A this-year/last-year change is a `ComparisonBar`. A share of respondents is a horizontal bar sorted by value, never a pie.
- Categorical hues are assigned in fixed order, never cycled: `series-1` is this year or the headline series, `series-2` is last year or the comparison, `series-3` the third. Past three, fold to "Other" or split into small multiples. A series keeps its slot when others are filtered out.
- When one bar is the point, it is `series-1` and every other bar is `series-muted`.
- Magnitude uses the `seq-1` … `seq-5` teal ramp, light to dark. Polarity uses `div-neg` (ochre) through `div-mid` (neutral) to `div-pos` (teal); the midpoint is never a hue.
- Marks are thin: bars are `bar-thickness` tall with a `space-0.5` gap of `surface-1` between neighbors and between stacked segments; the free end is rounded `radius-sm`, the baseline end is square. Lines are `stroke-line`; markers are 8px or larger.
- Text never wears the series color. Values, labels and legends are `ink` or `ink-2`; the colored mark beside them carries identity.
- Two or more series always get a legend; up to four are also direct-labeled. A single series gets no legend box; its title names it. Direct-label selectively (the highlighted value, the endpoints), never every point.
- Gridlines are `line-1`, the baseline is `line-2`, and both stay recessive. One y-axis, always; two measures of different scale are two charts.
- Every chart has a hover tooltip in `surface-1` with `shadow-float`, `body` copy, `figure-sm` numerals; and a table view a reader can switch to. Filters sit in one row above the charts.
- The chart palette was validated for color-vision deficiency in both themes (worst adjacent-pair CVD ΔE 12.7, normal-vision ΔE 22.1). Re-run the check before adding a fifth slot; the answer will be no.

## Iconography

- Astryx's own icon set, outlined, at 16px in `body-sm` contexts and 20px beside `title`. Icons inherit `currentColor` from the text they sit beside. No emoji, no illustrated spot art.

## Motion

- Astryx's default durations. Charts enter by growing from the baseline over 240ms, once, and never animate on filter change beyond a 160ms crossfade. Respect `prefers-reduced-motion`: then nothing moves.

## Astryx mapping

Ledger is a theme on top of Astryx: a set of custom-property overrides, not a fork. Generate the theme scaffold with the Astryx CLI (`@astryxdesign/cli`) and map in this order: surfaces (`surface-0/1/2` to Astryx's page, card and well backgrounds), inks, `accent`/`accent-strong`/`on-accent` to the primary action colors, `line-1`/`line-2` to border colors, `radius-*` and the three families to the type scale. Per-component tweaks come last and should be few. The exact Astryx variable names are not published in the pages reachable from here; paste the generated theme file into the chat and the mapping table will be written against it.
