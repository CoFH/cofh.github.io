import type { DocNav } from '../../types.ts';
import tc from './items.ts';

export default {
  sections: [
    {
      groups: [
        {
          items: [{ title: 'Watering Can', item: tc.wateringCan0 }],
        },
      ],
    },
  ],
} satisfies DocNav;
