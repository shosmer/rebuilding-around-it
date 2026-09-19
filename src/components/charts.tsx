import type {ReactNode} from 'react';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Grid} from '@astryxdesign/core/Grid';
import {Card} from '@astryxdesign/core/Card';
import {Text} from '@astryxdesign/core/Text';
import {VisuallyHidden} from '@astryxdesign/core/VisuallyHidden';
import type {Row} from '../data/report';

/* Ledger evidence components on Astryx. The bar tracks are plain elements
   painted with theme tokens (see charts.css); everything else is Astryx. */

/** ChartFrame: what is measured, its base, and the marks. The Beat's card holds it. */
export function ChartFrame({title, note, children}: {title: string; note?: string; children: ReactNode}) {
  return (
    <VStack gap={4} as="figure">
      <VStack gap={0.5} as="figcaption">
        <Text color="secondary">{title}</Text>
        {note && (
          <Text type="supporting" color="secondary">
            {note}
          </Text>
        )}
      </VStack>
      {children}
    </VStack>
  );
}

/** StatTile: one headline figure with its finding. The number is the hero. */
export function StatTile({
  eyebrow,
  figure,
  change,
  finding,
  isHighlighted,
}: {
  eyebrow?: string;
  figure: string;
  change?: string;
  finding: string;
  isHighlighted?: boolean;
}) {
  return (
    <Card padding={6}>
      <VStack gap={2}>
        {eyebrow && (
          <Text type="eyebrow" color="secondary">
            {eyebrow}
          </Text>
        )}
        <Text type="figure-xl" color={isHighlighted ? 'accent' : 'primary'}>
          {figure}
        </Text>
        {change && (
          <Text type="figure-sm" color="secondary">
            {change}
          </Text>
        )}
        <Text as="p">{finding}</Text>
      </VStack>
    </Card>
  );
}

export function BarList({title, rows, note}: {title: string; rows: Row[]; note?: string}) {
  // When one bar is the point (some rows muted), the un-muted bars glow.
  const hasHighlight = rows.some((r) => r.isMuted);
  return (
    <ChartFrame title={title} note={note}>
      <VStack gap={2} as="ul">
        {rows.map((r) => (
          <HStack key={r.label} gap={3} align="center" as="li">
            <span className="bar-label">
              <Text type="supporting" color={r.isMuted ? 'secondary' : 'primary'} display="block">
                {r.label}
              </Text>
            </span>
            <Track value={r.value} series={r.isMuted ? 'muted' : undefined} isGlow={hasHighlight && !r.isMuted} />
            <Text type="figure-sm" color={r.isMuted ? 'secondary' : 'primary'}>
              {r.value}%
            </Text>
          </HStack>
        ))}
      </VStack>
    </ChartFrame>
  );
}

export function PairedBars({
  title,
  legend,
  rows,
  note,
}: {
  title: string;
  legend: readonly [string, string];
  rows: {label: string; a: number; b: number}[];
  note?: string;
}) {
  return (
    <ChartFrame title={title} note={note}>
      <HStack gap={4} wrap="wrap">
        <HStack gap={2} align="center">
          <span className="legend-swatch" aria-hidden="true" />
          <Text type="supporting" color="secondary">
            {legend[0]}
          </Text>
        </HStack>
        <HStack gap={2} align="center">
          <span className="legend-swatch" data-series="b" aria-hidden="true" />
          <Text type="supporting" color="secondary">
            {legend[1]}
          </Text>
        </HStack>
      </HStack>
      <VStack gap={3} as="ul">
        {rows.map((r) => (
          <VStack key={r.label} gap={1} as="li">
            <Text type="supporting" color="primary">
              {r.label}
            </Text>
            <HStack gap={3} align="center">
              <span className="bar-pair">
                <Track value={r.a} />
                <Track value={r.b} series="b" />
              </span>
              <VStack gap={0} hAlign="end" width={44}>
                <Text type="figure-sm" color="primary">
                  {r.a}%
                </Text>
                <Text type="figure-sm" color="secondary">
                  {r.b}%
                </Text>
              </VStack>
            </HStack>
            <VisuallyHidden>
              {legend[0]}: {r.a} percent. {legend[1]}: {r.b} percent.
            </VisuallyHidden>
          </VStack>
        ))}
      </VStack>
    </ChartFrame>
  );
}

type FigureItem = {figure: string; label: string; tone?: 'muted'; isHero?: boolean};

/** Two headline figures side by side inside one panel. isHero sets the one
    accent-gradient figure with a glow halo; one per page. */
export function FigurePair({
  title,
  note,
  items,
}: {
  title: string;
  note?: string;
  items: [FigureItem, FigureItem];
}) {
  return (
    <ChartFrame title={title} note={note}>
      <Grid columns={2} gap={4}>
        {items.map((it) => (
          <VStack key={it.label} gap={1}>
            {it.isHero ? (
              <span className="figure-hero">
                <Text type="figure-xl">{it.figure}</Text>
              </span>
            ) : (
              <Text type="figure-xl" color={it.tone === 'muted' ? 'secondary' : 'primary'}>
                {it.figure}
              </Text>
            )}
            <Text type="supporting" color="secondary">
              {it.label}
            </Text>
          </VStack>
        ))}
      </Grid>
    </ChartFrame>
  );
}

function Track({value, series, isGlow}: {value: number; series?: 'b' | 'muted'; isGlow?: boolean}) {
  return (
    <span className="bar-track" role="presentation">
      <span
        className="bar-fill"
        data-series={series}
        data-glow={isGlow ? 'true' : undefined}
        style={{['--v' as string]: value}}
      />
    </span>
  );
}
