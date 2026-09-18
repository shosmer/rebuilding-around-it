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

export type Row = {label: string; value: number; prior?: number | null};

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
