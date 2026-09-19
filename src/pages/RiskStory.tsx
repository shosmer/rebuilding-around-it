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
          Five findings from the 2026 AI in Design survey, for anyone who owns risk, controls, or operations
          around a product team. The survey measured designers at technology companies. Read it as direction,
          not as a benchmark.
        </Text>
      </VStack>

      <Beat
        headline="Companies are backing this, not tolerating it."
        soWhat="Adoption is sponsored. The control question is whether it runs on a sanctioned path."
        visual={
          <FigurePair
            title="Organizational support for AI adoption"
            note="Share of designers. n = 906."
            items={[
              {figure: `${support.moderateOrStrong}%`, label: 'report at least moderate support from their organization', isHero: true},
              {figure: `${support.strong}%`, label: 'call it strong: dedicated budget, active encouragement, formal programs'},
            ]}
          />
        }>
        Nine in ten designers report organizational support. More than half call it strong.
      </Beat>

      <Beat
        headline="Large companies answer with internal tools."
        soWhat="A controlled internal environment is how peers stayed compliant and current at once."
        visual={
          <BarList
            title="Designers using internally built AI tools, by company size"
            note="Share of designers within each group. n = 906."
            rows={internalToolsBySize}
          />
        }>
        Internal tool use rises with company size: the enterprise answer to security and compliance.
      </Beat>

      <Beat
        headline="Humans keep the decision."
        soWhat="Accountability already sits with a person. A named owner and an audit trail are the remaining step."
        visual={
          <BarList
            title="How designers describe ownership of AI-assisted work"
            note="Single-select. n = 906."
            rows={ownership}
          />
        }>
        Most designers, 83%, say the judgment on AI-assisted work is theirs, fully or mostly.
      </Beat>

      <Beat
        headline="The support that works is structural."
        soWhat="Sanctioned time and a named community are cheaper controls than a mandate."
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
        Strong support doubles the share of designers who describe a culture of tinkering.
      </Beat>

      <Beat
        headline="What this means for you."
        soWhat="Three stories, one dataset. A number in more than one is identical in both."
        isLast
        visual={
          <VStack gap={3} as="ol">
            <VStack as="li" gap={0}>
              <Text as="p">
                <Text weight="semibold">Name the sanctioned default.</Text> One approved tool for two planning
                cycles, one line on why, one line on what happens when it changes.
              </Text>
            </VStack>
            <VStack as="li" gap={0}>
              <Text as="p">
                <Text weight="semibold">Stand up a controlled non-production environment.</Text> Documented
                access, no production data, the design system built in.
              </Text>
            </VStack>
            <VStack as="li" gap={0}>
              <Text as="p">
                <Text weight="semibold">Write the oversight standard for one real touchpoint.</Text> A named
                owner, what a person sees, checks, and can override, and evidence an auditor could test.
              </Text>
            </VStack>
          </VStack>
        }>
        Three things a control owner can act on now.
      </Beat>
    </VStack>
  );
}
