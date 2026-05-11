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
  hrefLabel: string;
  hotspot: {
    x: number;
    y: number;
    align: 'left' | 'right';
  };
}

export const studioProjects: StudioProject[] = [
  {
    name: 'Game Weekly',
    place: 'news tower',
    description: 'A compact weekly feed for game news, notes, and source-driven picks.',
    status: 'active',
    href: 'https://game-weekly.pages.dev/',
    hrefLabel: 'Open weekly',
    hotspot: { x: 52, y: 52, align: 'left' },
  },
  {
    name: 'Frontend Cultivation',
    place: 'cottage island',
    description: 'A slow garden for interface craft and small front-end rituals.',
    status: 'active',
    href: 'https://frontend-cultivation.pages.dev/',
    hrefLabel: 'Open experience',
    hotspot: { x: 22, y: 66, align: 'left' },
  },
  {
    name: 'SpireWalker',
    place: 'lighthouse island',
    description: 'A vertical wandering experiment about rhythm and thin air.',
    status: 'playable prototype',
    href: 'https://spirewalker.miaoduidui.workers.dev/',
    hrefLabel: 'Play prototype',
    hotspot: { x: 28, y: 22, align: 'left' },
  },
  {
    name: 'Mahjong Mini Games',
    place: 'mahjong pavilion',
    description: 'Tiny rule twists around a familiar table.',
    status: 'experimental',
    href: 'https://game-hub-mdd.vercel.app/',
    hrefLabel: 'Open game hub',
    hotspot: { x: 80, y: 55, align: 'right' },
  },
  {
    name: 'SpecFlow',
    place: 'ruin island',
    description: 'A lighter loop for shaping vague ideas into working things.',
    status: 'active',
    href: '#projects',
    hrefLabel: 'Experience pending',
    hotspot: { x: 76, y: 22, align: 'right' },
  },
  {
    name: 'mood_log',
    place: 'writing desk island',
    description: 'A small weather station for moods, traces, and tiny reflections.',
    status: 'shelved',
    href: '#projects',
    hrefLabel: 'Experience pending',
    hotspot: { x: 72, y: 80, align: 'right' },
  },
];
