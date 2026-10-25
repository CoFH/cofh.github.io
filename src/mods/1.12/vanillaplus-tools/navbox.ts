import type { DocNav } from '../../types.ts';
import vpt from './items.ts';

export default {
  title: 'Vanilla+ Tools (Minecraft 1.12)',
  sections: [
    {
      groups: [
        {
          items: [
            { title: 'Hammers', item: vpt.goldHammer },
            { title: 'Excavators', item: vpt.goldExcavator },
            { title: 'Sickles', item: vpt.goldSickle },
            { title: 'Fishing Rods', item: vpt.goldFishingRod },
            { title: 'Shears', item: vpt.goldShears },
            { title: 'Reinforced Bows', item: vpt.goldReinforcedBow },
            { title: 'Shields', item: vpt.goldShield },
          ],
        },
      ],
    },
  ],
} satisfies DocNav;
