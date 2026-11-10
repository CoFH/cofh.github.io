import type { DocNav } from '../../types.ts';
import vps from './items.ts';

export default {
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
