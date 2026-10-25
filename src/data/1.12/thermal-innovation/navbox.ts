import type { DocNav } from '../../types.ts';
import ti from './items.ts';

export default {
  title: 'Thermal Innovation (Minecraft 1.12)',
  sections: [
    {
      groups: [
        {
          items: [
            { title: 'Fluxbore', item: ti.fluxbore0 },
            { title: 'Fluxsaw', item: ti.fluxsaw0 },
            { title: 'Fluxomagnet', item: ti.fluxomagnet0 },
            { title: 'Hypoinfuser', item: ti.hypoinfuser0 },
            { title: 'Alchemical Quiver', item: ti.alchemicalQuiver0 },
          ],
        },
      ],
    },
  ],
} satisfies DocNav;
