import type {ReactNode} from 'react';
import {Grid} from '@astryxdesign/core/Grid';
import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Divider} from '@astryxdesign/core/Divider';

type BeatProps = {
  headline: string;
  children: ReactNode; // one sentence of story
  visual: ReactNode;
  soWhat: string;
  isLast?: boolean;
};

export function Beat({headline, children, visual, soWhat, isLast}: BeatProps) {
  return (
    <VStack gap={6}>
      <Grid columns={{minWidth: 300, max: 2}} gap={6} align="start">
        <VStack gap={3}>
          <Heading level={2} textWrap="balance">
            {headline}
          </Heading>
          <Text as="p" type="large" color="secondary">
            {children}
          </Text>
          <Text as="p" weight="semibold">
            {soWhat}
          </Text>
        </VStack>
        {visual}
      </Grid>
      {!isLast && <Divider />}
    </VStack>
  );
}
