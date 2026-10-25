import type { DocNav } from '../../types.ts';
import ra from './items.ts';

export default {
  title: 'Redstone Arsenal (Minecraft 1.12)',
  sections: [
    {
      groups: [
        {
          title: 'Flux-Infused Tools',
          items: [
            { title: 'Pickaxe', item: ra.fluxInfusedPickaxe },
            { title: 'Shovel', item: ra.fluxInfusedShovel },
            { title: 'Axe', item: ra.fluxInfusedAxe },
            { title: 'Fishing Rod', item: ra.fluxInfusedFishingRod },
            { title: 'Hammer', item: ra.fluxInfusedHammer },
            { title: 'Excavator', item: ra.fluxInfusedExcavator },
            { title: 'Sickle', item: ra.fluxInfusedSickle },
            { title: 'OmniWrench', item: ra.fluxInfusedOmniwrench },
          ],
        },
        {
          title: 'Flux-Infused Weapons',
          items: [
            { title: 'Sword', item: ra.fluxInfusedSword },
            { title: 'Bow', item: ra.fluxInfusedBow },
            { title: 'Quiver', item: ra.fluxInfusedQuiver },
            { title: 'Shield', item: ra.fluxInfusedShield },
            { title: 'BattleWrench', item: ra.fluxInfusedBattlewrench },
          ],
        },
        {
          title: 'Flux-Infused Armor',
          items: [
            { title: 'Helm', item: ra.fluxInfusedHelm },
            { title: 'Chestplate', item: ra.fluxInfusedChestplate },
            { title: 'Leggings', item: ra.fluxInfusedLeggings },
            { title: 'Boots', item: ra.fluxInfusedBoots },
          ],
        },
        {
          title: 'Materials',
          items: [
            {
              title: 'Fluxed Electrum',
              subitems: [
                { title: 'Ingot', item: ra.fluxedElectrumIngot },
                { title: 'Blend', item: ra.fluxedElectrumBlend },
                { title: 'Nugget', item: ra.fluxedElectrumNugget },
                { title: 'Gear', item: ra.fluxedElectrumGear },
                { title: 'Plate', item: ra.fluxedElectrumPlate },
                { title: 'Block', item: ra.fluxedElectrumBlock },
              ],
            },
            {
              item: ra.fluxCrystal,
              subitems: [{ title: 'Block', item: ra.fluxCrystalBlock }],
            },
            {
              item: ra.obsidianRod,
              subitems: [{ title: 'Flux-Infused', item: ra.fluxInfusedObsidianRod }],
            },
            {
              item: ra.fluxedArmorPlating,
            },
          ],
        },
      ],
    },
  ],
} satisfies DocNav;
