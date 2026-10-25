import type { DocNav } from '../../types.ts';
import core from './items.ts';

export default {
  title: 'CoFH Core (Minecraft 1.15)',
  sections: [
    {
      groups: [
        {
          items: [
            { title: 'Commands', url: 'commands/' },
            { item: core.ectoplasm },
            { title: 'Status effects', url: 'status-effects/' },
            { title: 'Tweaks', url: 'tweaks/' },
          ],
        },
      ],
    },
  ],
} satisfies DocNav;
