import {Text} from '@astryxdesign/core/Text';

/** An eyebrow opens with two slashes in counter: the chevron in text form. */
export function Eyebrow({children}: {children: string}) {
  return (
    <Text type="eyebrow" color="secondary">
      <span className="slashes" aria-hidden="true">
        //
      </span>{' '}
      {children}
    </Text>
  );
}
