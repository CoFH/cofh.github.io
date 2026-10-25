import RedstoneFurnacePyrolysis from '../components/recipe/RedstoneFurnacePyrolysis.astro';
import { defineRecipeType, defineRecipes } from '../../../define.ts';
import mcItemGroups from '../../minecraft/item-groups.ts';
import mc from '../../minecraft/items.ts';
import tfFluids from '../../thermal-foundation/fluids.ts';
import tf from '../../thermal-foundation/items.ts';

export const redstoneFurnacePyrolysis = defineRecipeType('1.12/thermal-expansion', {
  name: 'Pyrolytic Conversion',
  url: 'augment-pyrolytic-conversion/',
  withEnergy: true,
  component: RedstoneFurnacePyrolysis,
});

export default defineRecipes(redstoneFurnacePyrolysis, {
  blockOfCoalCoke: {
    inputs: [{ item: mc.blockOfCoal }],
    outputs: [{ item: tf.blockOfCoalCoke }, { fluid: tfFluids.creosoteOil, amount: 2_500 }],
    energy: 16_000,
  },
  charcoal: {
    cactus: {
      inputs: [{ item: mc.cactus, amount: 4 }],
      outputs: [{ item: mc.charcoal }, { fluid: tfFluids.creosoteOil, amount: 50 }],
      energy: 2_000,
    },
    hayBale: {
      inputs: [{ item: mc.hayBale }],
      outputs: [{ item: mc.charcoal }, { fluid: tfFluids.creosoteOil, amount: 100 }],
      energy: 2_000,
    },
    sawdust: {
      inputs: [{ item: tf.compressedSawdust }],
      outputs: [{ item: mc.charcoal }, { fluid: tfFluids.creosoteOil, amount: 50 }],
      energy: 1_000,
    },
    sugarCanes: {
      inputs: [{ item: mc.sugarCanes, amount: 8 }],
      outputs: [{ item: mc.charcoal }, { fluid: tfFluids.creosoteOil, amount: 50 }],
      energy: 1_000,
    },
    wood: {
      inputs: [{ itemGroup: mcItemGroups.wood, randomCycle: true }],
      outputs: [{ item: mc.charcoal }, { fluid: tfFluids.creosoteOil, amount: 100 }],
      energy: 1_000,
    },
  },
  coalCoke: {
    inputs: [{ item: mc.coal }],
    outputs: [{ item: tf.coalCoke }, { fluid: tfFluids.creosoteOil, amount: 250 }],
    energy: 2_000,
  },
});
