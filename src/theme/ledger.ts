// Ledger: a data-forward Astryx theme for presenting survey evidence.
// Token values come from ledger-design-system/tokens.json. This file maps
// them onto Astryx custom properties; see the README's "Astryx mapping".

import {defineTheme} from '@astryxdesign/core/theme';

// Ledger palette, [light, dark]
const surface0 = ['#f6f4ef', '#191816'] as const;
const surface1 = ['#ffffff', '#221f1c'] as const;
const surface2 = ['#ebe7df', '#2d2a26'] as const;
const surfaceInverse = ['#191815', '#f6f4ef'] as const;
const ink = ['#191815', '#f1ede6'] as const;
const ink2 = ['#4d4842', '#c6bfb3'] as const;
const ink3 = ['#6b655c', '#9a9388'] as const;
const inkInverse = ['#f6f4ef', '#191815'] as const;
const line1 = ['#dcd6cb', '#3a3631'] as const;
const line2 = ['#8c8477', '#8a8378'] as const;
const accent = ['#0e5a57', '#7fd0c8'] as const;
const accentStrong = ['#0b4a48', '#5fb8b0'] as const;
const onAccent = ['#ffffff', '#0f2725'] as const;
const accentSoft = ['#d8e9e6', '#1d3a38'] as const;
const statusGood = ['#17705c', '#5fc9a7'] as const;
const statusWarning = ['#8a5a00', '#e0b04a'] as const;
const statusCritical = ['#a83226', '#f08a7e'] as const;

const t = (pair: readonly [string, string]) => [pair[0], pair[1]] as [string, string];

export const ledgerTheme = defineTheme({
  name: 'ledger',

  typography: {
    scale: {base: 16, ratio: 1.2},
    body: {
      family: 'IBM Plex Sans',
      fallbacks: 'system-ui, -apple-system, "Segoe UI", sans-serif',
    },
    heading: {
      family: 'Source Serif 4',
      fallbacks: 'Georgia, "Times New Roman", serif',
      weight: 'medium',
    },
    code: {
      family: 'IBM Plex Mono',
      fallbacks: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    },
  },

  motion: {fast: 160, medium: 240, slow: 600, ratio: 0.75},

  tokens: {
    // Surfaces
    '--color-background-body': t(surface0),
    '--color-background-surface': t(surface1),
    '--color-background-card': t(surface1),
    '--color-background-popover': t(surface1),
    '--color-background-muted': t(surface2),
    '--color-background-inverted': t(surfaceInverse),

    // Ink
    '--color-text-primary': t(ink),
    '--color-text-secondary': t(ink2),
    '--color-text-disabled': t(ink3),
    '--color-text-accent': t(accent),
    '--color-icon-primary': t(ink),
    '--color-icon-secondary': t(ink2),
    '--color-icon-disabled': t(ink3),
    '--color-icon-accent': t(accent),
    '--color-on-dark': inkInverse[0],
    '--color-on-light': ink[0],

    // Accent (buttons, selection) and focus
    '--color-accent': t(accentStrong),
    '--color-on-accent': t(onAccent),
    '--color-accent-muted': t(accentSoft),
    '--focus-outline-color': t(accent),
    '--focus-outline-width': '2px',
    '--focus-outline-offset': '2px',

    // Lines
    '--color-border': t(line1),
    '--color-border-emphasized': t(line2),
    '--color-track': t(surface2),
    '--color-skeleton': t(line1),

    // Status (reserved; never chart series)
    '--color-success': t(statusGood),
    '--color-success-muted': ['#17705c26', '#5fc9a733'],
    '--color-on-success': t(onAccent),
    '--color-warning': t(statusWarning),
    '--color-warning-muted': ['#8a5a0026', '#e0b04a33'],
    '--color-on-warning': ['#191815', '#191815'],
    '--color-error': t(statusCritical),
    '--color-error-muted': ['#a8322626', '#f08a7e33'],
    '--color-on-error': t(onAccent),

    // Elevation, three levels: rest (shadow-card), lift (shadow-card-hover), float.
    '--shadow-low': [
      '0 1px 2px rgba(25, 24, 21, 0.06), 0 16px 40px -16px rgba(25, 24, 21, 0.28)',
      '0 1px 2px rgba(0, 0, 0, 0.4), 0 20px 48px -16px rgba(0, 0, 0, 0.7)',
    ],
    '--shadow-med': [
      '0 2px 4px rgba(25, 24, 21, 0.06), 0 28px 56px -20px rgba(25, 24, 21, 0.36)',
      '0 2px 4px rgba(0, 0, 0, 0.4), 0 32px 64px -20px rgba(0, 0, 0, 0.8)',
    ],
    '--shadow-high': ['0 8px 28px rgba(25, 24, 21, 0.18)', '0 8px 28px rgba(0, 0, 0, 0.6)'],
    '--color-shadow': ['rgba(25, 24, 21, 0.18)', 'rgba(0, 0, 0, 0.6)'],

    // Radii: radius-sm 3, radius-md 6, radius-lg 14, radius-xl 22. No pills.
    '--radius-inner': '3px',
    '--radius-element': '6px',
    '--radius-container': '14px',
    '--radius-page': '22px',
    '--radius-chat': '22px',

    // Type scale: Ledger's named styles on Astryx's semantic tokens
    '--text-display-1-size': '64px',
    '--text-display-1-weight': 'var(--font-weight-medium)',
    '--text-display-1-leading': '1',
    '--text-display-2-size': '40px',
    '--text-display-2-weight': 'var(--font-weight-medium)',
    '--text-display-2-leading': '1.1',
    '--text-display-3-size': '28px',
    '--text-display-3-weight': 'var(--font-weight-medium)',
    '--text-display-3-leading': '1.2143',
    '--text-heading-1-size': '40px',
    '--text-heading-1-weight': 'var(--font-weight-medium)',
    '--text-heading-1-leading': '1.1',
    '--text-heading-2-size': '28px',
    '--text-heading-2-weight': 'var(--font-weight-medium)',
    '--text-heading-2-leading': '1.2143',
    '--text-heading-3-size': '20px',
    '--text-heading-3-weight': 'var(--font-weight-semibold)',
    '--text-heading-3-leading': '1.4',
    '--text-body-size': '16px',
    '--text-body-leading': '1.5',
    '--text-large-size': '18px',
    '--text-large-leading': '1.5556',
    '--text-supporting-size': '14px',
    '--text-supporting-leading': '1.4286',
    '--text-label-size': '12px',
    '--text-label-weight': 'var(--font-weight-semibold)',
    '--text-label-leading': '1.3333',
  },

  // Chart and data tokens Astryx does not define. Charts read these.
  localTokens: {
    '--ledger-series-1': ['#0d8f83', '#2ea699'],
    '--ledger-series-2': ['#c95f14', '#d57a3a'],
    '--ledger-series-3': ['#6a4fbf', '#9583d6'],
    '--ledger-series-4': ['#a3791a', '#b0922e'],
    '--ledger-series-muted': ['#b9b2a6', '#5a554d'],
    '--ledger-div-neg': ['#c95f14', '#d57a3a'],
    '--ledger-div-mid': ['#c9c3b8', '#5a554d'],
    '--ledger-div-pos': ['#0d8f83', '#2ea699'],
    '--ledger-series-1-deep': ['#0a6d63', '#1a8a7e'],
    '--ledger-series-2-deep': ['#a04a0e', '#b85f27'],
    '--ledger-series-3-deep': ['#513a9e', '#7a67c4'],
    '--ledger-accent-deep': ['#083f3d', '#b2ebe5'],
    '--ledger-accent-glow': ['#0d8f8352', '#2ea69966'],
    '--ledger-page-top': ['#faf8f3', '#1d1c19'],
    '--ledger-page-bottom': ['#ebe5d9', '#121110'],
    '--ledger-page-glow': ['#0e5a5729', '#7fd0c824'],
    '--ledger-card-top': ['#ffffff', '#2a2723'],
    '--ledger-card-bottom': ['#f7f3ec', '#1e1c19'],
    '--ledger-card-highlight': ['#ffffffcc', '#ffffff14'],
    '--ledger-shadow-glow': [
      '0 0 0 1px #0d8f8333, 0 8px 28px -4px #0d8f8352',
      '0 0 0 1px #2ea69944, 0 8px 32px -4px #2ea69966',
    ],
    '--ledger-bar-thickness': '24px',
    '--ledger-measure': '68ch',
  },

  components: {
    text: {
      // Uppercase label above a title or stat: the audience, the section, the source.
      'type:eyebrow': {
        fontFamily: 'var(--font-family-body)',
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 'var(--font-weight-semibold)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      },
      // Numbers wear the mono. Never set a statistic in the serif.
      'type:figure-xl': {
        fontFamily: 'var(--font-family-code)',
        fontSize: '72px',
        lineHeight: '72px',
        fontWeight: 'var(--font-weight-medium)',
        letterSpacing: '-0.02em',
        fontVariantNumeric: 'tabular-nums',
      },
      'type:figure-md': {
        fontFamily: 'var(--font-family-code)',
        fontSize: '24px',
        lineHeight: '28px',
        fontWeight: 'var(--font-weight-medium)',
        fontVariantNumeric: 'tabular-nums',
      },
      'type:figure-sm': {
        fontFamily: 'var(--font-family-code)',
        fontSize: '13px',
        lineHeight: '16px',
        fontWeight: 'var(--font-weight-medium)',
        fontVariantNumeric: 'tabular-nums',
      },
    },
    heading: {
      // `title`: card and panel headers are sans, not serif.
      'level:3': {
        fontFamily: 'var(--font-family-body)',
        fontWeight: 'var(--font-weight-semibold)',
      },
    },
    button: {
      base: {borderRadius: 'var(--radius-element)'},
    },
    // A card is card-top to card-bottom, a hairline edge, shadow-card, and an
    // inset highlight along its top edge.
    card: {
      base: {
        borderRadius: 'var(--radius-container)',
        backgroundImage: 'linear-gradient(180deg, var(--ledger-card-top), var(--ledger-card-bottom))',
        boxShadow: 'inset 0 1px 0 var(--ledger-card-highlight), var(--shadow-low)',
      },
    },
    'clickable-card': {
      base: {
        borderRadius: 'var(--radius-container)',
        backgroundImage: 'linear-gradient(180deg, var(--ledger-card-top), var(--ledger-card-bottom))',
        boxShadow: 'inset 0 1px 0 var(--ledger-card-highlight), var(--shadow-low)',
        transition: 'box-shadow var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
        ':hover': {
          boxShadow: 'inset 0 1px 0 var(--ledger-card-highlight), var(--shadow-med)',
          transform: 'translateY(-2px)',
        },
      },
    },
  },
});
