import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Beat} from '../components/Beat';
import {BarList, FigurePair} from '../components/charts';
import {internalToolsBySize, ownership, support, supportForms, tinkering} from '../data/report';

export function RiskStory() {
  return (
    <VStack gap={10}>
      <VStack gap={3} maxWidth={680}>
        <Text type="eyebrow" color="secondary">
          For risk and operations leaders
        </Text>
        <Heading level={1} type="display-3" textWrap="balance">
          Half of designers ship AI-written code. Most organizations have not decided what that means.
        </Heading>
        <Text as="p" type="large" color="secondary">
          Five things from the 2026 AI in Design survey for anyone who owns risk, controls, or operations around
          a product team. About three minutes. The survey measured designers, largely at technology companies,
          and it shows correlation rather than cause. Read it as direction, not as a benchmark.
        </Text>
      </VStack>

      <Beat
        headline="Companies are backing this, not tolerating it."
        soWhat="Adoption is sponsored. The control question is whether it runs inside a sanctioned path, with tools that are approved and paid for."
        visual={
          <FigurePair
            title="Organizational support for AI adoption"
            note="Share of designers. n = 906."
            items={[
              {figure: `${support.moderateOrStrong}%`, label: 'report at least moderate support from their organization'},
              {figure: `${support.strong}%`, label: 'call it strong: dedicated budget, active encouragement, formal programs'},
            ]}
          />
        }>
        Nearly nine in ten designers report at least moderate organizational support for AI adoption, and more
        than half call it strong. The gap between early-stage startups and publicly traded companies that
        existed a year ago has mostly closed.
      </Beat>

      <Beat
        headline="Large companies answer with internal tools."
        soWhat="An internal, controlled environment with the design system built in is how peers stayed compliant and current at the same time."
        visual={
          <BarList
            title="Designers using internally built AI tools, by company size"
            note="Share of designers within each group. n = 906."
            rows={internalToolsBySize}
          />
        }>
        Three quarters of designers at companies with more than 2,000 employees use internally built AI tools,
        against a quarter at companies under 50. The report reads this as the enterprise answer to security and
        compliance constraints: build inside the perimeter rather than wait for approval outside it.
      </Beat>

      <Beat
        headline="Humans keep the decision."
        soWhat="Accountability already sits with a person in practice. Writing it down, as a named owner and an audit trail, is the remaining step."
        visual={
          <BarList
            title="How designers describe ownership of AI-assisted work"
            note="Single-select. n = 906."
            rows={ownership}
          />
        }>
        Asked who owns AI-assisted work, 83% of designers say the direction and judgment are theirs, fully or
        mostly. Fewer than one in ten find it hard to separate their contribution from the tool&rsquo;s, and four
        in five still make the final quality call themselves.
      </Beat>

      <Beat
        headline="The support that works is structural."
        soWhat="Sanctioned time and a named community are cheaper controls than a mandate, and they leave a record of what was tried."
        visual={
          <FigurePair
            title="A culture of tinkering follows organizational support"
            note={`Most common forms of support: internal champions or communities of practice ${supportForms.champions}%, structured time to experiment ${supportForms.tinkeringTime}%, formal training ${supportForms.training}%. n = 906.`}
            items={[
              {figure: `${tinkering.highSupport}%`, label: 'of designers at high-support companies describe a culture of tinkering'},
              {figure: `${tinkering.otherwise}%`, label: 'at companies with moderate or minimal support', tone: 'muted'},
            ]}
          />
        }>
        At companies with strong support, more than half of designers describe a culture where everyone is
        expected to build and experiment, against fewer than a third elsewhere. Those designers are also more
        likely to say AI is part of their core workflow, to feel confident in their tools, and to ship code.
      </Beat>

      <Beat
        headline="What this means for you."
        soWhat="Three stories, one dataset. A number that appears in more than one is identical in both."
        isLast
        visual={
          <VStack gap={3} as="ol">
            <VStack as="li" gap={0}>
              <Text as="p">
                <Text weight="semibold">Name the sanctioned default.</Text> One approved tool for the next two
                planning cycles, one line on why, one line on what happens when it changes. Silence is what
                produces unsanctioned use.
              </Text>
            </VStack>
            <VStack as="li" gap={0}>
              <Text as="p">
                <Text weight="semibold">Stand up a controlled non-production environment.</Text> Documented
                access, no production data, the design system built in. It is where prototypes get validated
                before anything reaches a ticket, which is also where changes are cheapest.
              </Text>
            </VStack>
            <VStack as="li" gap={0}>
              <Text as="p">
                <Text weight="semibold">Write the oversight standard for one real touchpoint.</Text> A named
                accountable owner, what a person sees, checks, and can override, and evidence an auditor could
                test. One completed example does more than a framework nobody has applied.
              </Text>
            </VStack>
          </VStack>
        }>
        The findings above describe designers, not regulated institutions, and they show correlation rather
        than cause. Read with that in mind, three things a control owner can act on now.
      </Beat>
    </VStack>
  );
}
