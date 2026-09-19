import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Beat} from '../components/Beat';
import {BarList, FigurePair} from '../components/charts';
import {headcount, policyGap, prototypes, quality, shipped} from '../data/report';

export function LeaderStory() {
  return (
    <VStack gap={10}>
      <VStack gap={3} maxWidth={680}>
        <Text type="eyebrow" color="secondary">
          For product and technology leaders
        </Text>
        <Heading level={1} type="display-3" textWrap="balance">
          The handoff is disappearing.
        </Heading>
        <Text as="p" type="large" color="secondary">
          Five findings from the 2026 AI in Design survey, for anyone who runs a product or technology team
          with designers on it.
        </Text>
      </VStack>

      <Beat
        headline="Prototypes are the deliverable now."
        soWhat="Validate on the prototype before a ticket exists."
        visual={
          <FigurePair
            title="Working prototypes have replaced static mockups"
            note="Share of designers. n = 906."
            items={[
              {figure: `${prototypes.expected}%`, label: 'say their company now expects working prototypes or real code', isHero: true},
              {figure: `${prototypes.startWith}%`, label: 'say projects now start with a working prototype'},
            ]}
          />
        }>
        Four in ten designers say prototypes or real code are now the expected deliverable.
      </Beat>

      <Beat
        headline="Designers ship."
        soWhat="Decide the review path before the first design PR: engineering&rsquo;s bar, a sandbox, or risk-scored merges."
        visual={
          <BarList
            title="Designers who have shipped AI-generated code to production"
            note={`By company stage. Founders ${shipped.byRole.founders}%, executives and managers ${shipped.byRole.executivesAndManagers}%, individual contributors ${shipped.byRole.ics}%. n = 906.`}
            rows={shipped.byStage}
          />
        }>
        Half of designers have shipped AI-generated code. Only a fifth call themselves design engineers.
      </Beat>

      <Beat
        headline="Quality gets encoded, not inspected."
        soWhat="Treat the design system as a control. A baseline in the tools beats a review at the end."
        visual={
          <FigurePair
            title="Output quality is the hook and the blocker"
            note="Share of designers, multi-select. n = 906."
            items={[
              {figure: `${quality.sticks}%`, label: 'say reliably high-quality output is what makes a tool stick'},
              {figure: `${quality.challenge}%`, label: 'say unreliable or inconsistent output is their top challenge'},
            ]}
          />
        }>
        Reliable output is the top reason a tool sticks and the top complaint.
      </Beat>

      <Beat
        headline="Velocity outran the org."
        soWhat="Write down what design delivers now, and put it in the ladder before the next review cycle."
        visual={
          <BarList
            title="Adoption outran policy"
            note="Expectations: all designers. Policy changes: design leaders only, multi-select. n = 906."
            rows={policyGap}
          />
        }>
        Expectations rose for nearly three quarters of designers. Formal policy changed for few.
      </Beat>

      <Beat
        headline="What this means for you."
        soWhat="Next: the risk and operations story."
        isLast
        visual={
          <VStack gap={3} as="ol">
            <VStack as="li" gap={0}>
              <Text as="p">
                <Text weight="semibold">Set the review path for design code.</Text> Engineering&rsquo;s bar, a
                sandbox, or risk-scored merges. None of them is the default.
              </Text>
            </VStack>
            <VStack as="li" gap={0}>
              <Text as="p">
                <Text weight="semibold">Fund the baseline.</Text> A prototyping environment with the design
                system built in costs less than reviewing every generated screen.
              </Text>
            </VStack>
            <VStack as="li" gap={0}>
              <Text as="p">
                <Text weight="semibold">Cover the gap deliberately.</Text> Tooling, hybrid roles, or headcount.{' '}
                {headcount.keepOrGrow}% of leaders expect to keep or grow design headcount; most expect more from
                the same team.
              </Text>
            </VStack>
          </VStack>
        }>
        Three decisions, in the order they come up.
      </Beat>
    </VStack>
  );
}
