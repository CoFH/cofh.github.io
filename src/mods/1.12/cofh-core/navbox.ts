import type { DocNav } from '../../types.ts';

export default {
  title: 'CoFH Core (Minecraft 1.12)',
  sections: [
    {
      groups: [
        {
          title: 'General',
          items: [
            { title: 'Commands', url: 'commands/' },
            { title: 'Tweaks', url: 'tweaks/' },
            { title: 'Friend List', url: 'friend-list/' },
            { title: 'Potions', url: 'potions/' },
          ],
        },
        {
          title: 'Enchantments',
          items: [
            { title: 'Holding', url: 'holding/' },
            { title: 'Insight', url: 'insight/' },
            { title: 'Leech', url: 'leech/' },
            { title: 'Multishot', url: 'multishot/' },
            { title: 'Smashing', url: 'smashing/' },
            { title: 'Smelting', url: 'smelting/' },
            { title: 'Soulbound', url: 'soulbound/' },
            { title: 'Vorpal', url: 'vorpal/' },
          ],
        },
      ],
    },
  ],
} satisfies DocNav;
