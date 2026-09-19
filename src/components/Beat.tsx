import type {ReactNode} from 'react';
import {VStack} from '@astryxdesign/core/VStack';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Divider} from '@astryxdesign/core/Divider';
import {Plate} from './Plate';

type BeatProps = {
  headline: string; // the claim; it lives in the card, above the evidence
  visual: ReactNode;
  soWhat: string; // the one line in the margin
  isLast?: boolean;
};

/* The card carries the beat: claim, then evidence. The margin holds one line. */
export function Beat({headline, visual, soWhat, isLast}: BeatProps) {
  return (
    <VStack gap={6}>
      <section className="beat">
        <VStack gap={2} paddingBlockStart={8}>
          <Text as="p" type="large" weight="semibold" textWrap="pretty">
            {soWhat}
          </Text>
        </VStack>
        <Plate>
          <Card padding={8}>
            <VStack gap={5}>
              <Heading level={2} textWrap="balance">
                {headline}
              </Heading>
              {visual}
            </VStack>
          </Card>
        </Plate>
      </section>
      {!isLast && <Divider />}
    </VStack>
  );
}
