import type {ReactNode} from 'react';

/** The solid offset block behind a card. Wrap any Card or ClickableCard. */
export function Plate({children}: {children: ReactNode}) {
  return <div className="plate">{children}</div>;
}
