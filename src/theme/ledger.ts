// Ledger v3: a data-forward Astryx theme for presenting survey evidence.
// Electric teal, one orchid counterpoint, 45-degree notches and plates,
// Archivo wide display type. Values come from ledger-design-system/tokens.json;
// this file maps them onto Astryx custom properties. Notches, plates and the
// chevron field are per-component CSS in src/styles/charts.css.

import {defineTheme} from '@astryxdesign/core/theme';

const pair = (light: string, dark: string) => [light, dark] as [string, string];

// Ledger palette, [light, dark]
const surface0 = pair('#eef3f1', '#0b1211');
const surface1 = pair('#ffffff', '#142120');
const surface2 = pair('#e2ebe8', '#1c2b29');
const surfaceInverse = pair('#0f1a19', '#eef3f1');
const ink = pair('#0f1a19', '#edf4f2');
const ink2 = pair('#3f5250', '#b9cac6');
const ink3 = pair('#526663', '#8fa3a0');
const inkInverse = pair('#eef3f1', '#0f1a19');
const line1 = pair('#c6d4d0', '#26403d');
const line2 = pair('#6a817e', '#6f8683');
const accent = pair('#066e63', '#2fd2be');
const accentStrong = pair('#066a60', '#1fc2b0');
const onAccent = pair('#ffffff', '#04211d');
const accentSoft = pair('#cdeee9', '#103a35');
const counter = pair('#b23fa6', '#e07bd3');
const statusGood = pair('#176f47', '#5fd39a');
const statusWarning = pair('#8c5a00', '#e6b34a');
const statusCritical = pair('#b8322a', '#ff8a80');

export const ledgerTheme = defineTheme({
  name: 'ledger',

  typography: {
    scale: {base: 15, ratio: 1.4},
    body: {
      family: 'IBM Plex Sans',
      fallbacks: 'system-ui, -apple-system, "Segoe UI", sans-serif',
    },
    heading: {
      family: 'Archivo',
      fallbacks: '"Archivo Black", Impact, "Arial Black", sans-serif',
      weight: 'bold',
    },
    code: {
      family: 'IBM Plex Mono',
      fallbacks: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    },
  },

  motion: {fast: 120, medium: 240, slow: 600, ratio: 0.75},

  tokens: {
    // Surfaces (flat fallbacks; the page and cards gradient in CSS)
    '--color-background-body': surface0,
    '--color-background-surface': surface1,
    '--color-background-card': surface1,
    '--color-background-popover': surface1,
    '--color-background-muted': surface2,
    '--color-background-inverted': surfaceInverse,

    // Ink
    '--color-text-primary': ink,
    '--color-text-secondary': ink2,
    '--color-text-disabled': ink3,
    '--color-text-accent': accent,
    '--color-icon-primary': ink,
    '--color-icon-secondary': ink2,
    '--color-icon-disabled': ink3,
    '--color-icon-accent': accent,
    '--color-on-dark': inkInverse[0],
    '--color-on-light': ink[0],

    // Accent (teal speaks) and the focus ring (orchid answers)
    '--color-accent': accentStrong,
    '--color-on-accent': onAccent,
    '--color-accent-muted': accentSoft,
    '--focus-outline-color': counter,
    '--focus-outline-width': '2px',
    '--focus-outline-offset': '2px',

    // Lines
    '--color-border': line1,
    '--color-border-emphasized': line2,
    '--color-track': surface2,
    '--color-skeleton': line1,

    // Status (reserved; never chart series)
    '--color-success': statusGood,
    '--color-success-muted': pair('#176f4726', '#5fd39a33'),
    '--color-on-success': onAccent,
    '--color-warning': statusWarning,
    '--color-warning-muted': pair('#8c5a0026', '#e6b34a33'),
    '--color-on-warning': pair('#0f1a19', '#0f1a19'),
    '--color-error': statusCritical,
    '--color-error-muted': pair('#b8322a26', '#ff8a8033'),
    '--color-on-error': onAccent,

    // Plates, not shadows. low = shadow-3d, med = shadow-3d-hover, high = float.
    '--shadow-low': pair('8px 8px 0 #0f1a19', '8px 8px 0 #1fc2b0'),
    '--shadow-med': pair('12px 12px 0 #0f1a19', '12px 12px 0 #1fc2b0'),
    '--shadow-high': pair('0 12px 32px rgba(15, 26, 25, 0.24)', '0 12px 32px rgba(0, 0, 0, 0.7)'),
    '--color-shadow': pair('rgba(15, 26, 25, 0.24)', 'rgba(0, 0, 0, 0.7)'),

    // Radii: none on everything; radius-sm (2px) only on swatches and chips.
    '--radius-inner': '2px',
    '--radius-element': '0px',
    '--radius-container': '0px',
    '--radius-page': '0px',
    '--radius-chat': '0px',

    // Type scale: 7:5 from 15. 11, 13, 15, 21, 29, 41, 57, 80.
    '--text-display-1-size': '57px',
    '--text-display-1-weight': '900',
    '--text-display-1-leading': '0.9474',
    '--text-display-2-size': '41px',
    '--text-display-2-weight': '800',
    '--text-display-2-leading': '1.0244',
    '--text-display-3-size': '29px',
    '--text-display-3-weight': '700',
    '--text-display-3-leading': '1.1034',
    '--text-heading-1-size': '41px',
    '--text-heading-1-weight': '800',
    '--text-heading-1-leading': '1.0244',
    '--text-heading-2-size': '29px',
    '--text-heading-2-weight': '700',
    '--text-heading-2-leading': '1.1034',
    '--text-heading-3-size': '21px',
    '--text-heading-3-weight': 'var(--font-weight-semibold)',
    '--text-heading-3-leading': '1.3333',
    '--text-body-size': '15px',
    '--text-body-leading': '1.4667',
    '--text-large-size': '21px',
    '--text-large-leading': '1.4286',
    '--text-supporting-size': '13px',
    '--text-supporting-leading': '1.3846',
    '--text-label-size': '11px',
    '--text-label-weight': 'var(--font-weight-bold)',
    '--text-label-leading': '1.4545',
  },

  // Ledger tokens Astryx does not define. The site CSS reads these.
  localTokens: {
    '--ledger-page-top': pair('#f3f7f6', '#101b1a'),
    '--ledger-page-bottom': pair('#e1eae7', '#070d0c'),
    '--ledger-page-glow': pair('#0a9d8d38', '#1fc2b042'),
    '--ledger-page-glow-2': pair('#b23fa62b', '#e07bd336'),
    '--ledger-card-top': pair('#ffffff', '#182827'),
    '--ledger-card-bottom': pair('#f0f6f4', '#0f1b1a'),
    '--ledger-card-edge': pair('#0f1a19', '#1fc2b0'),
    '--ledger-chevron-ink': pair('#0f1a19', '#edf4f2'),
    '--ledger-counter': counter,
    '--ledger-counter-glow': pair('#b23fa64d', '#e07bd35c'),
    '--ledger-hatch': pair('#ffffff73', '#ffffff40'),
    '--ledger-accent-deep': pair('#04574e', '#9df0e4'),
    '--ledger-accent-glow': pair('#0a9d8d66', '#1fc2b080'),
    '--ledger-series-1': pair('#0a9d8d', '#009283'),
    '--ledger-series-1-deep': pair('#036e63', '#007d70'),
    '--ledger-series-2': pair('#b23fa6', '#c465b8'),
    '--ledger-series-2-deep': pair('#7f2a77', '#9a4691'),
    '--ledger-series-3': pair('#7a8f10', '#7f9a22'),
    '--ledger-series-3-deep': pair('#55650a', '#5b6f16'),
    '--ledger-series-4': pair('#4a4fc4', '#7f82d6'),
    '--ledger-series-muted': pair('#a9b8b4', '#3a4f4c'),
    '--ledger-div-neg': pair('#b23fa6', '#c465b8'),
    '--ledger-div-mid': pair('#b8c5c1', '#3a4f4c'),
    '--ledger-div-pos': pair('#0a9d8d', '#009283'),
    '--ledger-shadow-glow': pair(
      '0 0 0 2px #0a9d8d55, 0 8px 28px -2px #0a9d8d66',
      '0 0 0 2px #1fc2b066, 0 8px 32px -2px #1fc2b080',
    ),
    '--ledger-notch-sm': '8px',
    '--ledger-notch-lg': '16px',
    '--ledger-notch-xl': '32px',
    '--ledger-offset-3d': '8px',
    '--ledger-offset-3d-hover': '12px',
    '--ledger-chevron-pitch': '16px',
    '--ledger-chevron-angle': '45deg',
    '--ledger-bar-thickness': '24px',
    '--ledger-measure': '64ch',
  },

  components: {
    text: {
      // Uppercase label above a title or stat, opened with two slashes in counter.
      'type:eyebrow': {
        fontFamily: 'var(--font-family-body)',
        fontSize: '11px',
        lineHeight: '16px',
        fontWeight: '700',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
      },
      // Figures wear Archivo at width 125, so the number is the loudest thing on the page.
      'type:figure-xl': {
        fontFamily: 'var(--font-family-heading)',
        fontSize: '80px',
        lineHeight: '72px',
        fontWeight: '900',
        letterSpacing: '-0.04em',
        fontStretch: '125%',
        fontVariantNumeric: 'tabular-nums',
      },
      'type:figure-md': {
        fontFamily: 'var(--font-family-heading)',
        fontSize: '29px',
        lineHeight: '32px',
        fontWeight: '800',
        letterSpacing: '-0.02em',
        fontStretch: '112%',
        fontVariantNumeric: 'tabular-nums',
      },
      // The mono is for small numbers only.
      'type:figure-sm': {
        fontFamily: 'var(--font-family-code)',
        fontSize: '13px',
        lineHeight: '16px',
        fontWeight: '500',
        fontVariantNumeric: 'tabular-nums',
      },
    },
    heading: {
      'type:display-1': {textTransform: 'uppercase', fontStretch: '125%', letterSpacing: '-0.03em'},
      'type:display-2': {fontStretch: '112%', letterSpacing: '-0.025em'},
      'type:display-3': {fontStretch: '100%', letterSpacing: '-0.02em'},
      'level:1': {fontStretch: '112%', letterSpacing: '-0.025em'},
      'level:2': {fontStretch: '100%', letterSpacing: '-0.02em'},
      // `title`: card and panel headers are the sans, not the display face.
      'level:3': {fontFamily: 'var(--font-family-body)', fontWeight: 'var(--font-weight-semibold)'},
    },
    button: {
      base: {borderRadius: '0px'},
    },
    // A card is a plate: gradient face, hairline edge, top-right corner cut by
    // notch-lg. The solid card-edge block behind it is a ::before on the .plate
    // wrapper in the site CSS, because clip-path clips box-shadow.
    card: {
      base: {
        borderRadius: '0px',
        backgroundImage: 'linear-gradient(180deg, var(--ledger-card-top), var(--ledger-card-bottom))',
        boxShadow: 'none',
        clipPath: 'polygon(0 0, calc(100% - var(--ledger-notch-lg)) 0, 100% var(--ledger-notch-lg), 100% 100%, 0 100%)',
      },
    },
    'clickable-card': {
      base: {
        borderRadius: '0px',
        backgroundImage: 'linear-gradient(180deg, var(--ledger-card-top), var(--ledger-card-bottom))',
        boxShadow: 'none',
        clipPath: 'polygon(0 0, calc(100% - var(--ledger-notch-lg)) 0, 100% var(--ledger-notch-lg), 100% 100%, 0 100%)',
        transition: 'transform var(--duration-fast) var(--ease-standard)',
        ':hover': {transform: 'translate(-4px, -4px)'},
      },
    },
  },
});
