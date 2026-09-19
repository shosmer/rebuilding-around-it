// Figures from "AI in Design 2026" by Designer Fund in partnership with
// Foundation Capital. Survey of 906 designers, fielded March 2026.
// Source: https://stateofaidesign.com/

export const SOURCE = {
  title: 'AI in Design 2026',
  publisher: 'Designer Fund in partnership with Foundation Capital',
  url: 'https://stateofaidesign.com/',
  n: 906,
  fielded: 'March 2026',
  caveat:
    'The authors note the sample was reached through their own channels and likely skews towards designers who have already embraced AI. They present the findings as directional, not as benchmarks.',
};

export type Row = {label: string; value: number; prior?: number | null; isMuted?: boolean};

export const weeklyUse = {
  now: 91,
  prior: 54,
  daily: 75,
};

export const judgment: Row[] = [
  {label: 'Final visual polish and quality', value: 81},
  {label: 'Creative direction and aesthetics', value: 79},
  {label: 'Understanding user needs', value: 71},
  {label: 'Strategic framing and problem definition', value: 67},
  {label: 'Storytelling and design rationale', value: 65},
];

export const builders = {
  legend: ['Design with code and prototypes', 'Do not'] as const,
  rows: [
    {label: 'Feel more creative and capable', a: 65, b: 35},
    {label: 'Much more confident in their tools', a: 57, b: 24},
    {label: 'Feel a higher quality bar', a: 27, b: 17},
  ],
};

export const honest = {
  collaborationDecreased: {now: 20, prior: 5},
  expectationsRising: 73,
  leadersFormalChange: 28,
};

export const satisfaction = {improved: 53, decreased: 18};

// Product and technology leader story
export const prototypes = {expected: 43, startWith: 36};

export const shipped = {
  overall: 50,
  byStage: [
    {label: 'Early-stage', value: 68},
    {label: 'Growth-stage', value: 50},
    {label: 'Publicly traded', value: 33},
  ] as Row[],
  byRole: {founders: 70, executivesAndManagers: 47, ics: 47},
  identifyAsDesignEngineers: 20,
};

export const quality = {sticks: 80, challenge: 62};

export const policyGap: Row[] = [
  {label: 'Designers who feel expectations rising', value: 73},
  {label: 'Leaders who changed the career ladder', value: 14, isMuted: true},
  {label: 'Leaders who updated review metrics', value: 8, isMuted: true},
  {label: 'Leaders who changed hiring', value: 8, isMuted: true},
  {label: 'Leaders who changed compensation', value: 4, isMuted: true},
];

export const headcount = {reducedWithSameOutput: 19, keepOrGrow: 60};

// Risk and operations story
export const support = {moderateOrStrong: 87, strong: 53};

export const internalToolsBySize: Row[] = [
  {label: '1 to 50 employees', value: 26},
  {label: '51 to 500', value: 34},
  {label: '501 to 2,000', value: 48},
  {label: '2,000 or more', value: 74},
];

export const ownership: Row[] = [
  {label: 'Full ownership: the direction and judgment are mine', value: 40},
  {label: 'Mostly mine, aware AI shaped some outcomes', value: 43},
  {label: 'Shared: hard to separate my contribution from the tool', value: 9, isMuted: true},
  {label: 'Uncertain, still working it out', value: 8, isMuted: true},
];

export const tinkering = {highSupport: 55, otherwise: 28};

export const supportForms = {champions: 46, tinkeringTime: 25, training: 20, subscriptions: 16};
