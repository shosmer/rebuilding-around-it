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
          Five things from the 2026 AI in Design survey for anyone who runs a product or technology team and
          works with designers. About three minutes.
        </Text>
      </VStack>

      <Beat
        headline="Prototypes are the deliverable now."
        soWhat="Validate on the prototype before a ticket exists. Changes after that point get expensive fast."
        visual={
          <FigurePair
            title="Working prototypes have replaced static mockups"
            note="Share of designers. n = 906."
            items={[
              {figure: `${prototypes.expected}%`, label: 'say their company now expects working prototypes or real code'},
              {figure: `${prototypes.startWith}%`, label: 'say projects now start with a working prototype'},
            ]}
          />
        }>
        Working prototypes or real code are now the expected deliverable for four in ten designers, and a third
        say projects start with one. Critique has moved from static screens to running software, with the
        product manager and the engineer in the same review.
      </Beat>

      <Beat
        headline="Designers ship."
        soWhat="Decide the review path before the first design PR arrives: the same bar as engineering, a sandbox, or risk-scored merges."
        visual={
          <BarList
            title="Designers who have shipped AI-generated code to production"
            note={`By company stage. Founders ${shipped.byRole.founders}%, executives and managers ${shipped.byRole.executivesAndManagers}%, individual contributors ${shipped.byRole.ics}%. n = 906.`}
            rows={shipped.byStage}
          />
        }>
        Half of all designers surveyed have pushed AI-generated code to production, and only about a fifth call
        themselves design engineers. Early-stage companies lead, but a third of designers at publicly traded
        companies have shipped too, and leaders ship as often as individual contributors.
      </Beat>

      <Beat
        headline="Quality gets encoded, not inspected."
        soWhat="Treat the design system as a control. A shared baseline inside the tools beats a review at the end."
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
        Reliable output is the top reason a tool sticks and unreliable output is the top complaint. The teams
        handling this well are putting the design system, brand, and content rules into the tools everyone
        generates with, so a product manager&rsquo;s prototype starts from the same baseline as a designer&rsquo;s.
      </Beat>

      <Beat
        headline="Velocity outran the org."
        soWhat="Write down what design delivers now, and put it in the ladder before the next review cycle. Unwritten expectations are the stress respondents describe."
        visual={
          <BarList
            title="Adoption outran policy"
            note="Expectations: all designers. Policy changes: design leaders only, multi-select. n = 906."
            rows={policyGap}
          />
        }>
        Expectations are rising for nearly three quarters of designers: faster turnaround, working prototypes,
        more volume. Only 28% of leaders have changed anything formal, and the changes are small. One in five
        designers reports reduced headcount with the same or higher output expected.
      </Beat>

      <Beat
        headline="What this means for you."
        soWhat="More soon: the risk and operations story."
        isLast
        visual={
          <VStack gap={3} as="ol">
            <VStack as="li" gap={0}>
              <Text as="p">
                <Text weight="semibold">Set the review path for design code.</Text> The same bar as engineering,
                deploy to a sandbox for review, or risk-scored merges. Any of the three works. None of them is
                the default.
              </Text>
            </VStack>
            <VStack as="li" gap={0}>
              <Text as="p">
                <Text weight="semibold">Fund the baseline.</Text> A prototyping environment with the design
                system and content rules built in costs less than reviewing every generated screen by hand.
              </Text>
            </VStack>
            <VStack as="li" gap={0}>
              <Text as="p">
                <Text weight="semibold">Cover the gap deliberately.</Text> Engineering output is compounding
                faster than design&rsquo;s. Decide whether design keeps pace through tooling, hybrid roles, or
                headcount, rather than by default. {headcount.keepOrGrow}% of leaders expect to keep or grow
                design headcount; most of those expect more from the same team.
              </Text>
            </VStack>
          </VStack>
        }>
        The survey suggests the teams moving fastest gave designers a build path and a quality baseline, and
        the teams struggling left both to chance. Three decisions, in the order they tend to come up.
      </Beat>
    </VStack>
  );
}
