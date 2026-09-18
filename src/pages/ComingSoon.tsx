import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';
import {PATHS} from '../router';

export function ComingSoon({title, teaser}: {title: string; teaser: string}) {
  return (
    <VStack gap={3} maxWidth={620}>
      <Heading level={1} textWrap="balance">
        {title}
      </Heading>
      <Text as="p" type="large" color="secondary">
        {teaser}
      </Text>
      <Text as="p">
        In the meantime, the <Link href={PATHS.designers}>designer story</Link> is up.
      </Text>
    </VStack>
  );
}
