import Precipitator from '../../../../components/docs/1.12/thermal-expansion/recipe/Precipitator.astro';
import { defineRecipeType, defineRecipes } from '../../../define.ts';
import mcFluids from '../../minecraft/fluids.ts';
import mc from '../../minecraft/items.ts';

export const precipitator = defineRecipeType('1.12/thermal-expansion', {
  name: 'Glacial Precipitator',
  url: 'glacial-precipitator/',
  withEnergy: true,
  component: Precipitator,
});

export default defineRecipes(precipitator, {
  ice: {
    inputs: [{ fluid: mcFluids.water, amount: 1_000 }],
    outputs: [{ item: mc.ice }],
    energy: 1_600,
  },
  packedIce: {
    inputs: [{ fluid: mcFluids.water, amount: 2_000 }],
    outputs: [{ item: mc.packedIce }],
    energy: 1_600,
  },
  snow: {
    inputs: [{ fluid: mcFluids.water, amount: 500 }],
    outputs: [{ item: mc.snow }],
    energy: 800,
  },
  snowball: {
    inputs: [{ fluid: mcFluids.water, amount: 500 }],
    outputs: [{ item: mc.snowball, amount: 4 }],
    energy: 800,
  },
  snowLayer: {
    inputs: [{ fluid: mcFluids.water, amount: 500 }],
    outputs: [{ item: mc.snowLayer, amount: 2 }],
    energy: 800,
  },
});
