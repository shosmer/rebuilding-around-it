import {VStack} from '@astryxdesign/core/VStack';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {ClickableCard} from '@astryxdesign/core/ClickableCard';
import {PATHS} from '../router';

const DOORS = [
  {
    href: PATHS.designers,
    label: 'Read the designer story',
    title: 'I design digital products',
    teaser: 'The job grew. Here is the shape of it, and where your judgment still does the work.',
  },
  {
    href: PATHS.leaders,
    label: 'Read the product and technology leader story',
    title: 'I lead a product or technology team',
    teaser: 'Prototypes are the deliverable now, designers ship, and expectations moved faster than policy.',
  },
  {
    href: PATHS.risk,
    label: 'Read the risk and operations story',
    title: 'I own risk, controls, or operations',
    teaser: 'Companies are backing this, humans keep the decision, and the support that works is structural.',
  },
];

export function Home() {
  return (
    <VStack gap={8}>
      <VStack gap={4} maxWidth={680}>
        <Text type="eyebrow" color="secondary">
          A short read of the AI in Design 2026 report
        </Text>
        <Heading level={1} type="display-2" textWrap="balance">
          In 2025 designers were experimenting with AI. In 2026 they are rebuilding around it.
        </Heading>
        <Text as="p" type="large" color="secondary">
          That is the thesis of this year&rsquo;s AI in Design report, from a survey of 906 designers. I read
          the whole thing so my team would not have to. Pick who you are.
        </Text>
      </VStack>
      <Grid columns={{minWidth: 240, max: 3}} gap={4}>
        {DOORS.map((d) => (
          <ClickableCard key={d.href} href={d.href} label={d.label} elevation="low">
            <VStack gap={2}>
              <Heading level={2} accessibilityLevel={3}>
                {d.title}
              </Heading>
              <Text as="p" color="secondary">
                {d.teaser}
              </Text>
            </VStack>
          </ClickableCard>
        ))}
      </Grid>
    </VStack>
  );
}
