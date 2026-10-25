import type { DocNav } from '../../types.ts';
import vps from './items.ts';

export default {
  title: 'Vanilla+ Satchels (Minecraft 1.12)',
  sections: [
    {
      groups: [
        {
          items: [{ item: vps.satchel }],
        },
      ],
    },
  ],
} satisfies DocNav;
