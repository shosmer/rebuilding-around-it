import type {ReactNode} from 'react';
import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Divider} from '@astryxdesign/core/Divider';

type BeatProps = {
  headline: string;
  children: ReactNode; // one short sentence
  visual: ReactNode;
  soWhat: string;
  isLast?: boolean;
};

/* The visual carries the beat. Text takes the narrow track (see .beat in charts.css). */
export function Beat({headline, children, visual, soWhat, isLast}: BeatProps) {
  return (
    <VStack gap={6}>
      <section className="beat">
        <VStack gap={2}>
          <Heading level={2} textWrap="balance">
            {headline}
          </Heading>
          <Text as="p" color="secondary">
            {children}
          </Text>
          <Text as="p" weight="semibold">
            {soWhat}
          </Text>
        </VStack>
        {visual}
      </section>
      {!isLast && <Divider />}
    </VStack>
  );
}
