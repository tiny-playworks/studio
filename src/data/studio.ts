export type ProjectStatus =
  | 'playable prototype'
  | 'experimental'
  | 'shelved'
  | 'active';

export interface StudioProject {
  name: string;
  description: string;
  status: ProjectStatus;
  href: string;
  accent: string;
  size: 'small' | 'medium' | 'large';
  position: {
    desktop: { top: string; left: string };
    mobile: { top: string; left: string };
  };
}

export const studioProjects: StudioProject[] = [
  {
    name: 'Frontend Cultivation',
    description: 'A slow-growing garden for interface craft, motion, and front-end rituals.',
    status: 'active',
    href: 'https://github.com/tiny-playworks/frontend-cultivation',
    accent: 'sand',
    size: 'large',
    position: {
      desktop: { top: '8%', left: '8%' },
      mobile: { top: '2%', left: '2%' },
    },
  },
  {
    name: 'SpireWalker',
    description: 'A vertical wandering experiment about rhythm, footing, and thin air.',
    status: 'playable prototype',
    href: 'https://github.com/tiny-playworks/spirewalker',
    accent: 'sage',
    size: 'medium',
    position: {
      desktop: { top: '20%', left: '60%' },
      mobile: { top: '22%', left: '20%' },
    },
  },
  {
    name: 'Mahjong Mini Games',
    description: 'Tiny rule twists and relaxed table experiments around familiar tiles.',
    status: 'experimental',
    href: 'https://github.com/tiny-playworks/mahjong-mini-games',
    accent: 'rose',
    size: 'large',
    position: {
      desktop: { top: '48%', left: '18%' },
      mobile: { top: '43%', left: '6%' },
    },
  },
  {
    name: 'SpecFlow',
    description: 'A lighter loop for turning vague ideas into working product shapes.',
    status: 'active',
    href: 'https://github.com/tiny-playworks/specflow',
    accent: 'sky',
    size: 'medium',
    position: {
      desktop: { top: '56%', left: '66%' },
      mobile: { top: '64%', left: '26%' },
    },
  },
  {
    name: 'mood_log',
    description: 'A small emotional weather station for moods, traces, and tiny reflections.',
    status: 'shelved',
    href: 'https://github.com/tiny-playworks/mood-log',
    accent: 'lavender',
    size: 'small',
    position: {
      desktop: { top: '74%', left: '42%' },
      mobile: { top: '83%', left: '10%' },
    },
  },
];

export const studioNotes = [
  'rebuilding battle flow...',
  'fixing momentum mechanics...',
  'too many unfinished experiments...',
  'trying unreal again...',
];
