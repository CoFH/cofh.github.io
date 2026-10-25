import type { DocNav } from '../../types.ts';
import tc from './items.ts';

export default {
  title: 'Thermal Cultivation (Minecraft 1.12)',
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
