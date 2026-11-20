import RedstoneFurnace from '../components/recipe/RedstoneFurnace.astro';
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
  aluminumIngotFromDust: {
    inputs: [{ item: tf.pulverizedAluminum }],
    outputs: [{ item: tf.aluminumIngot }],
    energy: 1_500,
  },
  bronzeIngotFromDust: {
    inputs: [{ item: tf.bronzeBlend }],
    outputs: [{ item: tf.bronzeIngot }],
    energy: 1_500,
  },
  cactusGreen: {
    inputs: [{ item: mc.cactus }],
    outputs: [{ item: mc.cactusGreen }],
    energy: 1_000,
  },
  constantanIngotFromDust: {
    inputs: [{ item: tf.constantanBlend }],
    outputs: [{ item: tf.constantanIngot }],
    energy: 1_500,
  },
  copperIngotFromDust: {
    inputs: [{ item: tf.pulverizedCopper }],
    outputs: [{ item: tf.copperIngot }],
    energy: 1_500,
  },
  electrumIngotFromDust: {
    inputs: [{ item: tf.electrumBlend }],
    outputs: [{ item: tf.electrumIngot }],
    energy: 1_500,
  },
  food: {
    inputs: [{ itemGroup: mcItemGroups.rawFood }],
    outputs: [{ itemGroup: mcItemGroups.cookedFood }],
    energy: 1_000,
  },
  goldIngotFromDust: {
    inputs: [{ item: tf.pulverizedGold }],
    outputs: [{ item: mc.goldIngot }],
    energy: 1_500,
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
          tf.pulverizedAluminum,
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
          tf.aluminumIngot,
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
  invarIngotFromDust: {
    inputs: [{ item: tf.invarBlend }],
    outputs: [{ item: tf.invarIngot }],
    energy: 1_500,
  },
  iridiumIngotFromDust: {
    inputs: [{ item: tf.pulverizedIridium }],
    outputs: [{ item: tf.iridiumIngot }],
    energy: 1_500,
  },
  ironIngotFromDust: {
    inputs: [{ item: tf.pulverizedIron }],
    outputs: [{ item: mc.ironIngot }],
    energy: 1_500,
  },
  leadIngotFromDust: {
    inputs: [{ item: tf.pulverizedLead }],
    outputs: [{ item: tf.leadIngot }],
    energy: 1_500,
  },
  leather: {
    inputs: [{ item: mc.rottenFlesh, amount: 4 }],
    outputs: [{ item: mc.leather }],
    energy: 4_000,
  },
  manaInfusedIngotFromDust: {
    inputs: [{ item: tf.pulverizedManaInfusedMetal }],
    outputs: [{ item: tf.manaInfusedIngot }],
    energy: 1_500,
  },
  nickelIngotFromDust: {
    inputs: [{ item: tf.pulverizedNickel }],
    outputs: [{ item: tf.nickelIngot }],
    energy: 1_500,
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
  platinumIngotFromDust: {
    inputs: [{ item: tf.pulverizedPlatinum }],
    outputs: [{ item: tf.platinumIngot }],
    energy: 1_500,
  },
  silverIngotFromDust: {
    inputs: [{ item: tf.pulverizedSilver }],
    outputs: [{ item: tf.silverIngot }],
    energy: 1_500,
  },
  tinIngotFromDust: {
    inputs: [{ item: tf.pulverizedTin }],
    outputs: [{ item: tf.tinIngot }],
    energy: 1_500,
  },
});
