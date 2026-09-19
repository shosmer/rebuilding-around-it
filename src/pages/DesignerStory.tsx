import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Beat} from '../components/Beat';
import {BarList, FigurePair, PairedBars} from '../components/charts';
import {builders, honest, judgment, weeklyUse} from '../data/report';

export function DesignerStory() {
  return (
    <VStack gap={10}>
      <VStack gap={3} maxWidth={680}>
        <Text type="eyebrow" color="secondary">
          For designers
        </Text>
        <Heading level={1} type="display-3" textWrap="balance">
          The job grew. Here is the shape of it.
        </Heading>
        <Text as="p" type="large" color="secondary">
          Five findings from the 2026 AI in Design survey, for people who design digital products.
        </Text>
      </VStack>

      <Beat
        headline="Almost everyone is using it now."
        soWhat="This is the baseline now."
        visual={
          <FigurePair
            title="Designers using AI in their work at least weekly"
            note={`${weeklyUse.daily}% use it daily. n = 906.`}
            items={[
              {figure: `${weeklyUse.prior}%`, label: '2025', tone: 'muted'},
              {figure: `${weeklyUse.now}%`, label: '2026', isHero: true},
            ]}
          />
        }>
        Weekly use went from about half of designers to nine in ten in one year.
      </Beat>

      <Beat
        headline="The judgment still belongs to you."
        soWhat="The reps can be delegated. The point of view can&rsquo;t."
        visual={
          <BarList
            title="Where designers rely on their own craft over AI"
            note="Share of respondents, multi-select. n = 906."
            rows={judgment}
          />
        }>
        Polish, creative direction, and understanding users stay with the designer.
      </Beat>

      <Beat
        headline="Designers who build feel better about the work."
        soWhat="Rough is fine. The first one only has to exist."
        visual={
          <PairedBars
            title="Compared with before AI, designers now feel..."
            note="Designers who prototype and code with AI versus those who do not. n = 906."
            legend={builders.legend}
            rows={builders.rows}
          />
        }>
        Designers who prototype and code with AI are two and a half times more likely to feel more creative
        and capable.
      </Beat>

      <Beat
        headline="The honest part."
        soWhat="The tools are single-player by default. Put pairing and critique back on purpose."
        visual={
          <FigurePair
            title="Two numbers that did not move together"
            note="Share of respondents. n = 906."
            items={[
              {
                figure: `${honest.collaborationDecreased.now}%`,
                label: `say collaboration decreased, up from ${honest.collaborationDecreased.prior}% in 2025`,
              },
              {
                figure: `${honest.expectationsRising}%`,
                label: `feel expectations rising, while ${honest.leadersFormalChange}% of leaders changed anything formal`,
              },
            ]}
          />
        }>
        Collaboration got worse for four times as many designers. Expectations rose faster than the rubrics.
      </Beat>

      <Beat
        headline="What this means for you."
        soWhat="Next: what the people you work with are hearing."
        isLast
        visual={
          <VStack gap={3} as="ol">
            <VStack as="li" gap={0}>
              <Text as="p">
                <Text weight="semibold">Keep the judgment visible.</Text> Write the rationale. Run the critique.
              </Text>
            </VStack>
            <VStack as="li" gap={0}>
              <Text as="p">
                <Text weight="semibold">Build one small thing.</Text> A prototype that breaks in front of a
                teammate is the assignment.
              </Text>
            </VStack>
            <VStack as="li" gap={0}>
              <Text as="p">
                <Text weight="semibold">Put collaboration on the calendar.</Text> Pair on a build. Critique the
                running prototype.
              </Text>
            </VStack>
          </VStack>
        }>
        Three things I am asking of my own team.
      </Beat>
    </VStack>
  );
}
