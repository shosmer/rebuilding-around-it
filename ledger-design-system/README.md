Ledger is a theme layer for Meta's Astryx design system, built for one job: presenting survey evidence to people who make decisions with it. It replaces Astryx's personality-first defaults (Butter, Matcha, Y2K and the rest) with a data-forward stance that has real depth: a page that is a warm gradient under a fine grain, cards that sit on it with weight, and chart marks that glow. It reads the same to a designer on the team and to a federal regulator, because the drama is in the surfaces and the numbers, never in decoration. Every value below is a Ledger token; the Astryx mapping section says how they land on Astryx's custom properties.

## Principles

- **The number is the hero.** One figure per tile, one claim per chart title, one thesis per page. Everything else recedes.
- **Depth, deliberately.** The page is a gradient with grain; cards are lighter gradients that rest on it with `shadow-card` and a `card-highlight` top edge; the one thing that glows is the thing you should look at. Three levels, no more: rest, lift, float.
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

## Surfaces, gradients and texture

- The page is not flat. Its background is `page-top` to `page-bottom` at 180deg over the full document height, with `page-glow` as a radial glow anchored top-right of the first screen (`radial-gradient(60% 50% at 85% 0%, page-glow, transparent 70%)`) and the grain laid over everything at 5% opacity in Light, 7% in Dark. `surface-0` remains the flat fallback for print and forced-colors.
- Grain recipe: an inline SVG `feTurbulence` (`baseFrequency 0.9`, `numOctaves 2`, `stitchTiles`) tiled at 240px, `mix-blend-mode: multiply` in Light and `screen` in Dark, `pointer-events: none`, painted in `grain`. Never a raster PNG; never animated.
- A card is `card-top` to `card-bottom` at 180deg, `stroke-hair` edge in `line-1`, `radius-lg`, `shadow-card`, and an inset 1px `card-highlight` along its top edge. On hover an interactive card takes `shadow-card-hover` and moves up 2px over 160ms. Wells inside a card are flat `surface-2`.
- The hero panel and the masthead take `radius-xl`; everything else `radius-lg` or smaller.
- Gradients are always two stops of one hue family, or one hue to its deep step. Never a bluish-purple sweep, never three hues, never a gradient behind body copy. Text on a gradient is checked against both stops; every `ink` and `accent` pair in `tokens.json` was.

## Color

- `surface-0`, `surface-1` and `surface-2` are the flat equivalents of page, card and well, for print, forced-colors and any surface too small to gradient (chips, inputs, tooltips).
- Headlines, body and figures in `ink`. Captions, axis labels and table cells in `ink-2`. Eyebrows, footnotes and sources in `ink-3`, never body copy.
- Links, the active filter, the selected chip and the one highlighted number are `accent`. A hero figure may be set in the accent gradient (`accent-deep` to `accent` at 135deg as a background-clip text) with an `accent-glow` halo behind it; one per page. Primary buttons fill with the same gradient, carry `shadow-glow`, and set their label in `on-accent`. Hover and selected rows use `accent-soft` with `ink` on it.
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
- `radius-sm` on chips, inputs and the free end of a bar; `radius-md` on buttons and tooltips; `radius-lg` on cards and chart panels; `radius-xl` on the hero panel and masthead only. No pills.
- `stroke-hair` in `line-1` for card edges, table rules and gridlines. `stroke-axis` in `line-2` for the chart baseline. `stroke-line` for line-chart series and the focus ring.
- Shadows are warm ink in Light, black in Dark, and come in three: `shadow-card` at rest, `shadow-card-hover` on lift, `shadow-float` for tooltips and menus. `shadow-glow` is not elevation; it is emphasis, and one element per chart may wear it.

## Charts

- Pick the form before the color. A single headline figure is a stat tile (`StatTile`), not a chart. A this-year/last-year change is a `ComparisonBar`. A share of respondents is a horizontal bar sorted by value, never a pie.
- Categorical hues are assigned in fixed order, never cycled: `series-1` is this year or the headline series, `series-2` is last year or the comparison, `series-3` the third. Past three, fold to "Other" or split into small multiples. A series keeps its slot when others are filtered out.
- Bars are filled with a gradient along their length, `series-1-deep` at the baseline to `series-1` at the free end (the same for slots 2 and 3 with their `-deep` step), so the mark reads as having weight without being thicker. Slot 4 and `series-muted` stay flat.
- When one bar is the point, it is `series-1` with `shadow-glow` and every other bar is `series-muted`, flat. The glow is the only halo in the chart.
- Stat tiles carry the figure in `figure-xl`; the highlighted tile sets it in the accent gradient with an `accent-glow` halo. Tiles are cards and take the card gradient, `shadow-card` and `card-highlight`.
- Magnitude uses the `seq-1` … `seq-5` teal ramp, light to dark. Polarity uses `div-neg` (ochre) through `div-mid` (neutral) to `div-pos` (teal); the midpoint is never a hue.
- Marks stay thin even with the gradient: bars are `bar-thickness` tall with a `space-0.5` gap of the card ground between neighbors and between stacked segments; the free end is rounded `radius-sm`, the baseline end is square. Lines are `stroke-line`; markers are 8px or larger.
- Text never wears the series color. Values, labels and legends are `ink` or `ink-2`; the colored mark beside them carries identity.
- Two or more series always get a legend; up to four are also direct-labeled. A single series gets no legend box; its title names it. Direct-label selectively (the highlighted value, the endpoints), never every point.
- The track behind a bar is `surface-2` with an inset `stroke-hair` in `line-1`. Gridlines are `line-1`, the baseline is `line-2`, and both stay recessive. One y-axis, always; two measures of different scale are two charts.
- Every chart has a hover tooltip in `surface-1` with `shadow-float`, `body` copy, `figure-sm` numerals; and a table view a reader can switch to. Filters sit in one row above the charts.
- The chart palette was validated for color-vision deficiency in both themes (worst adjacent-pair CVD ΔE 12.7, normal-vision ΔE 22.1). Re-run the check before adding a fifth slot; the answer will be no.

## Iconography

- Astryx's own icon set, outlined, at 16px in `body-sm` contexts and 20px beside `title`. Icons inherit `currentColor` from the text they sit beside. No emoji, no illustrated spot art.

## Motion

- Astryx's default durations. Charts enter by growing from the baseline over 240ms, once, the glow fading in after the bar lands; and never animate on filter change beyond a 160ms crossfade. Respect `prefers-reduced-motion`: then nothing moves.

## Astryx mapping

Ledger is a theme on top of Astryx: a set of custom-property overrides, not a fork. Generate the theme scaffold with the Astryx CLI (`@astryxdesign/cli`) and map in this order: surfaces (`surface-0/1/2` to Astryx's page, card and well backgrounds), inks, `accent`/`accent-strong`/`on-accent` to the primary action colors, `line-1`/`line-2` to border colors, `radius-*` and the three families to the type scale. Per-component tweaks come last and should be few. The exact Astryx variable names are not published in the pages reachable from here; paste the generated theme file into the chat and the mapping table will be written against it.
