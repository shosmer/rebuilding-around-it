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
          Five things from the 2026 AI in Design survey worth knowing if you design digital products for a
          living. About three minutes.
        </Text>
      </VStack>

      <Beat
        headline="Almost everyone is using it now."
        soWhat="This is the baseline. The interesting question is what you do with it."
        visual={
          <FigurePair
            title="Designers using AI in their work at least weekly"
            note={`${weeklyUse.daily}% use it daily. n = 906.`}
            items={[
              {figure: `${weeklyUse.prior}%`, label: '2025', tone: 'muted'},
              {figure: `${weeklyUse.now}%`, label: '2026'},
            ]}
          />
        }>
        In one year, weekly AI use in design work went from about half of designers to nine in ten. It shows
        up at every stage of the process now, from ideation through handoff.
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
        Asked where they trust their own craft over the tool, designers put final polish, creative direction,
        and understanding users at the top. Four in five said the quality call is theirs.
      </Beat>

      <Beat
        headline="Designers who build feel better about the work."
        soWhat="Rough is fine. The first one only has to exist."
        visual={
          <PairedBars
            title="Compared with before AI, designers now feel..."
            note="Designers who prototype and code with AI versus those who do not."
            legend={builders.legend}
            rows={builders.rows}
          />
        }>
        Designers who prototype and code with AI were two and a half times more likely to say they feel more
        creative and capable, and twice as likely to feel confident in their tools. They also report a higher
        quality bar (in a good way).
      </Beat>

      <Beat
        headline="The honest part."
        soWhat="The tools are single-player by default. Pairing and critique have to be put back on purpose."
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
        Four times as many designers say collaboration got worse than said so a year ago. Expectations rose
        for most, and the rubrics mostly did not.
      </Beat>

      <Beat
        headline="What this means for you."
        soWhat="More soon: the same five beats for the people you work with."
        isLast
        visual={
          <VStack gap={3} as="ol">
            <VStack as="li" gap={0}>
              <Text as="p">
              <Text weight="semibold">Keep the judgment visible.</Text> Write the rationale. Run the critique. Say
              out loud what &ldquo;good enough&rdquo; means for this screen.
            </Text>
            </VStack>
            <VStack as="li" gap={0}>
              <Text as="p">
              <Text weight="semibold">Build one small thing.</Text> A prototype that breaks in front of a
              teammate is the assignment. That is where the confidence in the chart above comes from.
            </Text>
            </VStack>
            <VStack as="li" gap={0}>
              <Text as="p">
              <Text weight="semibold">Put collaboration back on the calendar.</Text> Pair on a build. Critique
              the running prototype instead of the static screen. The tools will not do this for you.
            </Text>
            </VStack>
          </VStack>
        }>
        The data says the field moved and your judgment did not get less valuable. Three things I am asking of
        my own team, offered here in case they are useful to yours.
      </Beat>
    </VStack>
  );
}
