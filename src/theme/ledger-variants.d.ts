// Custom Text types Ledger adds in src/theme/ledger.ts (components.text).
// Astryx's TextType union is `BuiltinTextType | keyof CustomTextTypes`.
import '@astryxdesign/core/theme';

declare module '@astryxdesign/core/theme' {
  interface CustomTextTypes {
    eyebrow: true;
    'figure-xl': true;
    'figure-md': true;
    'figure-sm': true;
  }
}
