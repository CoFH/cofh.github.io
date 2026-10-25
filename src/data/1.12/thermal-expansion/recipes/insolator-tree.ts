import Insolator from '../../../../components/docs/1.12/thermal-expansion/recipe/Insolator.astro';
import { defineRecipeType, defineRecipes } from '../../../define.ts';
import mcFluids from '../../minecraft/fluids.ts';
import mcItemGroups from '../../minecraft/item-groups.ts';
import tf from '../../thermal-foundation/items.ts';

export const insolatorTree = defineRecipeType('1.12/thermal-expansion', {
  name: 'Sapling Infuser',
  url: 'augment-sapling-infuser/',
  withEnergy: true,
  component: Insolator,
});

export default defineRecipes(insolatorTree, {
  wood: {
    inputs: [
      { itemGroup: mcItemGroups.sapling },
      { item: tf.phytoGro },
      { fluid: mcFluids.water, amount: 1_200 },
    ],
    outputs: [
      { itemGroup: mcItemGroups.wood, amount: 6 },
      { itemGroup: mcItemGroups.sapling, chance: 100 },
    ],
    amountSuffix: true,
    energy: 4_800,
  },
  woodFluxed: {
    inputs: [
      { itemGroup: mcItemGroups.sapling },
      { item: tf.fluxedPhytoGro },
      { fluid: mcFluids.water, amount: 1_800 },
    ],
    outputs: [
      { itemGroup: mcItemGroups.wood, amount: 24 },
      { itemGroup: mcItemGroups.sapling, chance: 150 },
    ],
    amountSuffix: true,
    energy: 7_200,
  },
  woodRich: {
    inputs: [
      { itemGroup: mcItemGroups.sapling },
      { item: tf.richPhytoGro },
      { fluid: mcFluids.water, amount: 1_500 },
    ],
    outputs: [
      { itemGroup: mcItemGroups.wood, amount: 18 },
      { itemGroup: mcItemGroups.sapling, chance: 125 },
    ],
    amountSuffix: true,
    energy: 6_000,
  },
});
