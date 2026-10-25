import type { DocNav } from '../../types.ts';
import ap from './items.ts';

export default {
  title: "Archer's Paradox",
  sections: [
    {
      groups: [
        {
          title: 'Arrows',
          items: [
            { item: ap.blazeArrow },
            { item: ap.challengeArrow },
            { item: ap.diamondArrow },
            { item: ap.displacementArrow },
            { item: ap.enderArrow },
            { item: ap.explosiveArrow },
            { item: ap.frostArrow },
            { item: ap.glowstoneArrow },
            { item: ap.lightningArrow },
            { item: ap.phantasmalArrow },
            { item: ap.prismarineArrow },
            { item: ap.quartzArrow },
            { item: ap.redstoneArrow },
            { item: ap.shulkerArrow },
            { item: ap.slimeArrow },
            { item: ap.sporeArrow },
            { item: ap.trainingArrow },
            { item: ap.verdantArrow },
          ],
        },
      ],
    },
  ],
} satisfies DocNav;
