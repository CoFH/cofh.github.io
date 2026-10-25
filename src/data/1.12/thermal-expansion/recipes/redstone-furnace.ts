import RedstoneFurnace from '../../../../components/docs/1.12/thermal-expansion/recipe/RedstoneFurnace.astro';
import { defineRecipeType, defineRecipes } from '../../../define.ts';
import mcItemGroups from '../../minecraft/item-groups.ts';
import mc from '../../minecraft/items.ts';
import tf from '../../thermal-foundation/items.ts';

export const redstoneFurnace = defineRecipeType('1.12/thermal-expansion', {
  name: 'Redstone Furnace',
  url: 'redstone-furnace/',
  withEnergy: true,
  component: RedstoneFurnace,
});

export default defineRecipes(redstoneFurnace, {
  cactusGreen: {
    inputs: [{ item: mc.cactus }],
    outputs: [{ item: mc.cactusGreen }],
    energy: 1_000,
  },
  food: {
    inputs: [{ itemGroup: mcItemGroups.rawFood }],
    outputs: [{ itemGroup: mcItemGroups.cookedFood }],
    energy: 1_000,
  },
  ingotFromDust: {
    inputs: [
      {
        item: [
          tf.pulverizedIron,
          tf.pulverizedGold,
          tf.pulverizedCopper,
          tf.pulverizedTin,
          tf.pulverizedSilver,
          tf.pulverizedLead,
          tf.pulverizedNickel,
          tf.pulverizedPlatinum,
          tf.pulverizedIridium,
          tf.pulverizedManaInfusedMetal,
          tf.electrumBlend,
          tf.invarBlend,
          tf.bronzeBlend,
          tf.constantanBlend,
        ],
      },
    ],
    outputs: [
      {
        item: [
          mc.ironIngot,
          mc.goldIngot,
          tf.copperIngot,
          tf.tinIngot,
          tf.silverIngot,
          tf.leadIngot,
          tf.nickelIngot,
          tf.platinumIngot,
          tf.iridiumIngot,
          tf.manaInfusedIngot,
          tf.electrumIngot,
          tf.invarIngot,
          tf.bronzeIngot,
          tf.constantanIngot,
        ],
      },
    ],
    energy: 1_500,
    results: [{ html: 'Metal Ingot' }],
    ingredients: [{ html: '<a href="https://minecraft.wiki/w/Smelting">Smeltable</a> Metal Dust' }],
  },
  leather: {
    inputs: [{ item: mc.rottenFlesh, amount: 4 }],
    outputs: [{ item: mc.leather }],
    energy: 4_000,
  },
  oreProcessingLapisLazuli: {
    inputs: [{ item: mc.lapisLazuliOre }],
    outputs: [{ item: mc.lapisLazuli, amount: 4 }],
    energy: 2_000,
  },
  oreProcessingRedstone: {
    inputs: [{ item: mc.redstoneOre }],
    outputs: [{ item: mc.redstone, amount: 4 }],
    energy: 2_000,
  },
});
