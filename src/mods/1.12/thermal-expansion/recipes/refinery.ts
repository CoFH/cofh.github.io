import Refinery from '../components/recipe/Refinery.astro';
import { defineRecipeType, defineRecipes } from '../../../define.ts';
import tfFluids from '../../thermal-foundation/fluids.ts';
import tf from '../../thermal-foundation/items.ts';

export const refinery = defineRecipeType('1.12/thermal-expansion', {
  name: 'Fractionating Still',
  url: 'fractionating-still/',
  withEnergy: true,
  component: Refinery,
});

export default defineRecipes(refinery, {
  grassoline: {
    inputs: [{ fluid: tfFluids.biocrude, amount: 200 }],
    outputs: [{ fluid: tfFluids.grassoline, amount: 100 }],
    energy: 5_000,
  },
  naphtha: {
    crudeOil: {
      inputs: [{ fluid: tfFluids.crudeOil, amount: 200 }],
      outputs: [
        { fluid: tfFluids.naphtha, amount: 150 },
        { item: tf.tar, chance: 50 },
      ],
      energy: 5_000,
    },
    liquifactedCoal: {
      inputs: [{ fluid: tfFluids.liquifactedCoal, amount: 200 }],
      outputs: [
        { fluid: tfFluids.naphtha, amount: 100 },
        { item: tf.tar, chance: 75 },
      ],
      energy: 5_000,
    },
  },
  refinedFuel: {
    inputs: [{ fluid: tfFluids.naphtha, amount: 150 }],
    outputs: [
      { fluid: tfFluids.refinedFuel, amount: 100 },
      { item: tf.sulfur, chance: 50 },
    ],
    energy: 5_000,
  },
  treeOil: {
    inputs: [{ fluid: tfFluids.resin, amount: 200 }],
    outputs: [
      { fluid: tfFluids.treeOil, amount: 100 },
      { item: tf.rosin, chance: 50 },
    ],
    energy: 5_000,
  },
});
