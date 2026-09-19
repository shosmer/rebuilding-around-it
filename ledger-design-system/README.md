Ledger is a theme layer for Meta's Astryx design system, built for one job: presenting survey evidence to people who make decisions with it. It replaces Astryx's personality-first defaults (Butter, Matcha, Y2K and the rest) with something sharper: an electric teal against a cool mint-white page, one orchid counterpoint, a 45-degree geometry that cuts corners instead of rounding them, cards that sit on solid offset blocks like printed plates, and figures set in a wide black grotesk so the number is the loudest thing in the room. It still reads to a regulator, because the drama is all in the surfaces and the numbers, never in decoration. Every value below is a Ledger token; the Astryx mapping section says how they land on Astryx's custom properties.

## Principles

- **The number is the hero.** One figure per tile, one claim per chart title, one thesis per page. Figures wear `figure-xl` in Archivo at width 125; everything else steps down.
- **One angle.** Everything in Ledger is 90 or 45 degrees: the notch on a card's corner, the chevron field on the page, the hatch on the highlighted bar, the offset of the block behind a card, the sweep of the accent gradient. `chevron-angle` is the only angle token because there is only one.
- **Plates, not shadows.** A card is a plate resting on a solid `card-edge` block offset by `offset-3d`. No blur, no ambient shadow. Blur exists only for what floats (`shadow-float`) and what glows (`shadow-glow`).
- **Teal speaks, orchid answers.** `accent` (hue 174) is the voice of the report. `counter` (hue 307) is the one reply: the slashes that open an eyebrow, the focus ring, the second series, the glow in the opposite corner. Nothing else gets a hue.
- **Same system, four readers.** The palette and type never change by audience. What changes is which finding leads, how much methodology is shown, and how a number is qualified (see the Audiences section).

## Content fundamentals

- Write in the second person for the team ("you", "your stack") and in the third person for every external audience ("designers", "organizations"). Never "we" when speaking for the organization or the industry.
- Sentence case everywhere except `eyebrow` and `display-xl`, which are uppercase by style.
- Every eyebrow opens with two slashes in `counter`: "// FOR THE DESIGN TEAM", "// WEEKLY AI USE". The slashes are the chevron in text form.
- Lead with the finding, then the number, then the base: "Peer learning tripled, from 24% to 80% of designers, year over year." A number never opens a sentence in body copy; it can open a stat tile.
- Every statistic carries its base in `body-sm` `ink-2`: "900+ designers, 60+ countries" on the page where it first appears, "n = 900+" thereafter in `figure-sm`.
- Cite once per page in `ink-3`: "Source: Designer Fund and Foundation Capital, AI in Design 2026." Never a footnote per chart.
- Round to whole percentages; write ranges with an en dash; write change as "from X% to Y%" and not as "+56 pts" unless the delta is itself the finding.
- No emoji. No exclamation marks. Hedge claims about causation: the survey shows correlation between a tinkering culture and feeling "more creative and capable", not cause.

## Surfaces and the chevron field

- The page is `page-top` to `page-bottom` at 180deg over the document height, with two radial glows in opposite corners: `page-glow` (teal) at top-right, `page-glow-2` (orchid) at bottom-left, each `radial-gradient(55% 45% at <corner>, glow, transparent 70%)`. Never a third glow, never the same corner.
- Over the page sits the chevron field: an SVG tile of `chevron-pitch` (16px) square with one `stroke-hair` zigzag stroke in `chevron-ink` at `chevron-angle`, repeated as a background at 6% opacity in Light and 9% in Dark, `pointer-events: none`. It is the texture of the whole system and the only texture. Never a raster, never animated, never over a card.
- A card is `card-top` to `card-bottom` at 180deg with a `stroke-hair` edge in `line-1`, its top-right corner cut by `notch-lg` (`clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)`), and behind it a solid `card-edge` plate of the same shape offset by `offset-3d` down and right. Because `clip-path` clips box-shadow, the plate is a `::before` translated by the offset, not a shadow. On hover an interactive card translates -4px -4px and its plate to `offset-3d-hover`, over 120ms.
- The hero panel and masthead take `notch-xl`; chips, tooltips and small cards take `notch-sm`. Always the top-right corner, always 45deg.
- `surface-0`, `surface-1` and `surface-2` are the flat fallbacks for print, forced-colors and surfaces too small to gradient. In forced-colors the plate becomes a 2px border and the chevron field disappears.
- Gradients are always two stops of one hue, or a hue to its deep step, at 180deg on surfaces and `chevron-angle` on the accent. Never a bluish-purple sweep, never three hues, never a gradient behind body copy.

## Color

- Headlines, body and figures in `ink`. Captions, axis labels and table cells in `ink-2`. Eyebrows, footnotes and sources in `ink-3`, never body copy. All three were checked at 4.5:1 against both stops of the page and card gradients in both themes.
- Links, the active filter, the selected chip and the one highlighted number are `accent`. The hero figure is set in the accent gradient (`accent-deep` to `accent` at `chevron-angle`, background-clip text) with an `accent-glow` halo behind it; one per page. Primary buttons fill with the same gradient, carry `shadow-glow` and set their label in `on-accent`. Hover and selected rows use `accent-soft` with `ink` on it.
- `counter` is never a fill behind text. It is a stroke, a slash, a ring, a bar, a glow.
- `surface-inverse` is allowed once per page: the masthead, or a single callout. Text on it is `ink-inverse`. In Dark the `card-edge` plate is electric teal, so a dark card reads as a neon-edged plate; text never sits on the plate.
- The focus ring is `focus-ring` (orchid) at `stroke-line`, solid, offset 2px, on every interactive element. It is 3:1 or better on every surface in both themes and is never confused with a teal highlight.
- Status colors are reserved. `status-good`, `status-warning` and `status-critical` always ship with an icon and a word, never a color alone, and are never used as chart series.
- Dark is a selected theme, not a flip: the page goes to a deep teal-black, `accent` brightens to `#2fd2be` so `on-accent` becomes dark ink, and the chart series step down in chroma. Check the Dark column of every pair, not only Light.

## Type

- Three families, all Google-hosted: Archivo for display and figures (a variable face with a width axis; load `wdth 100..125`, `wght 700..900`), IBM Plex Sans for text, IBM Plex Mono for small data. Load with `font-display: swap`.
- The scale is a 7:5 ratio (1.4) from 15: 11, 13, 15, 21, 29, 41, 57, 80. Every size in the system is one of these.
- `display-xl` once per page, uppercase, `font-stretch: 125%`, for the thesis. `display-lg` at 112% for section titles. `display-md` at 100% for chart titles that make a claim ("Adoption outran policy"), never for a neutral label.
- `figure-xl` at 125% on stat tiles; `figure-md` at 112% for inline comparisons and the direct label on the highlighted bar; `figure-sm` in the mono for ticks, sample sizes and table numerals. Figures never go in the serif because there is no serif.
- `title` for card headers, `body-lg` for the lead paragraph, `body` for everything else, `body-sm` for captions and axis labels, `eyebrow` for the audience or section label.
- Body columns stop at `measure` (64ch).

## Spacing and geometry

- An 8px base. Chart internals step by `space-0.25` and `space-0.5`; layout by `space-2` upward; sections are `space-7` apart; the page gutter and the space above a `display-xl` are `space-8`.
- `radius-none` on everything. `radius-sm` only on legend swatches and chips. Depth and softness come from notches and plates, not from rounding.
- `stroke-hair` in `line-1` for card edges, table rules and gridlines. `stroke-axis` in `line-2` for the chart baseline. `stroke-line` for line-chart series, the focus ring and the hatch.

## Charts

- Pick the form before the color. A single headline figure is a stat tile (`StatTile`), not a chart. A this-year/last-year change is a `ComparisonBar`. A share of respondents is a horizontal bar sorted by value, never a pie.
- Categorical hues are assigned in fixed order, never cycled: `series-1` (teal) is this year or the headline series, `series-2` (orchid) is last year or the comparison, `series-3` (lime) the third. Past three, fold to "Other" or split into small multiples. A series keeps its slot when others are filtered out.
- Bars are filled along their length from the `-deep` step to the series color. Slot 4 and `series-muted` stay flat.
- When one bar is the point, it is `series-1` with `shadow-glow` and a `hatch` overlay (`repeating-linear-gradient(chevron-angle, hatch 0 2px, transparent 2px chevron-pitch)`), and every other bar is flat `series-muted`. The hatch is the secondary encoding that survives print, forced-colors and color-vision deficiency; the glow is the only halo in the chart.
- Marks stay thin: bars are `bar-thickness` tall, square at both ends (a slanted end would lie about the length), with a `space-0.25` gap of the card ground between neighbors and between stacked segments. Lines are `stroke-line`; markers are 8px or larger.
- Text never wears the series color. Values, labels and legends are `ink` or `ink-2`; the colored mark beside them carries identity.
- Two or more series always get a legend; up to four are also direct-labeled. A single series gets no legend box. Direct-label selectively, never every point.
- The track behind a bar is `surface-2` with an inset `stroke-hair` in `line-1`. Gridlines are `line-1`, the baseline is `line-2`, both recessive. One y-axis, always; two measures of different scale are two charts.
- Every chart has a hover tooltip (`surface-1`, `shadow-float`, `notch-sm`, `space-2` padding, `body` copy, `figure-sm` numerals) and a table view. Filters sit in one row above the charts.
- The chart palette was validated for color-vision deficiency in both themes (worst adjacent-pair CVD ΔE 8.6 in Light, all pairs clearing the floor in Dark, normal-vision ΔE 26 or better). Re-run the check before adding a fifth slot; the answer will be no.

## Iconography

- Astryx's own icon set, outlined, at 16px in `body-sm` contexts and 20px beside `title`. Icons inherit `currentColor`. The one glyph Ledger adds is the double slash `//` that opens an eyebrow, typed, never drawn.

## Motion

- Astryx's default durations. Bars grow from the baseline over 240ms once, the hatch and glow fading in after the bar lands; filters crossfade over 160ms; cards lift over 120ms. `prefers-reduced-motion`: nothing moves.

## Where the shapes come from

Ledger's third direction was derived from a 64-character seed, `8vm9HoVt45wvGIkRXJR4rMIesZ9fl43Dv57L1RS1euAPdZkOeH7NDwC53L7VNnVB`, read as a brief. It ends in `VNnVB`, a zigzag, and v is its most frequent letter (six times: `wv`, `Dv`, `VNnV`), so the chevron became the motif. `45` in the first half fixed the angle. The digits repeat 5 and 7 (`57`, `75`, `53L7`), so the type scale runs on 7:5 and 57 is a size in it. `fl43D` gave the 3D plate. The first three digits, 894, mod 360 are hue 174 (the teal); the letters summed to 667, mod 360 hue 307 (the orchid). It opens with 8, so the spacing base is 8; 16 digits set the chevron pitch; 28 capitals against 20 lowercase made the display face loud. None of this is visible to a reader, and all of it is why the system holds together.

## Astryx mapping

Ledger is a theme on top of Astryx: a set of custom-property overrides, not a fork. Generate the theme scaffold with the Astryx CLI (`@astryxdesign/cli`) and map in this order: surfaces (`page-*`, `card-*` and the flat `surface-*` fallbacks to Astryx's page, card and well backgrounds), inks, `accent`/`accent-strong`/`on-accent` to the primary action colors, `counter` to the focus color, `line-1`/`line-2` to border colors, `radius-none` to every radius slot, then the three families to the type scale. Notches, plates and the chevron field are per-component overrides (clip-path and a `::before`) and come last. The exact Astryx variable names are not published in the pages reachable from here; paste the generated theme file into the chat and the mapping table will be written against it.
