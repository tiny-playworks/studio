export type ProjectStatus =
  | 'playable prototype'
  | 'experimental'
  | 'shelved'
  | 'active';

export interface StudioProject {
  name: string;
  place: string;
  description: string;
  status: ProjectStatus;
  href: string;
  hotspot: {
    x: number;
    y: number;
    align: 'left' | 'right';
  };
}

export const studioProjects: StudioProject[] = [
  {
    name: 'Frontend Cultivation',
    place: 'cottage island',
    description: 'A slow garden for interface craft and small front-end rituals.',
    status: 'active',
    href: 'https://github.com/tiny-playworks/frontend-cultivation',
    hotspot: { x: 22, y: 66, align: 'left' },
  },
  {
    name: 'SpireWalker',
    place: 'lighthouse island',
    description: 'A vertical wandering experiment about rhythm and thin air.',
    status: 'playable prototype',
    href: 'https://github.com/tiny-playworks/spirewalker',
    hotspot: { x: 28, y: 22, align: 'left' },
  },
  {
    name: 'Mahjong Mini Games',
    place: 'mahjong pavilion',
    description: 'Tiny rule twists around a familiar table.',
    status: 'experimental',
    href: 'https://github.com/tiny-playworks/mahjong-mini-games',
    hotspot: { x: 80, y: 55, align: 'right' },
  },
  {
    name: 'SpecFlow',
    place: 'ruin island',
    description: 'A lighter loop for shaping vague ideas into working things.',
    status: 'active',
    href: 'https://github.com/tiny-playworks/specflow',
    hotspot: { x: 76, y: 22, align: 'right' },
  },
  {
    name: 'mood_log',
    place: 'writing desk island',
    description: 'A small weather station for moods, traces, and tiny reflections.',
    status: 'shelved',
    href: 'https://github.com/tiny-playworks/mood-log',
    hotspot: { x: 72, y: 80, align: 'right' },
  },
];
