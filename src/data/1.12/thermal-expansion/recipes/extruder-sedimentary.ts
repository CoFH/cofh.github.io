import Extruder from '../../../../components/docs/1.12/thermal-expansion/recipe/Extruder.astro';
import { defineRecipeType, defineRecipes } from '../../../define.ts';
import mcFluids from '../../minecraft/fluids.ts';
import mc from '../../minecraft/items.ts';

export const extruderSedimentary = defineRecipeType('1.12/thermal-expansion', {
  name: 'Clastic Deposition',
  url: 'augment-clastic-deposition/',
  withEnergy: true,
  component: Extruder,
});

export default defineRecipes(extruderSedimentary, {
  gravel: {
    inputs: [
      { fluid: mcFluids.lava, amount: 0 },
      { fluid: mcFluids.water, amount: 1_500 },
    ],
    outputs: [{ item: mc.gravel }],
    energy: 2_400,
  },
  redSand: {
    inputs: [
      { fluid: mcFluids.lava, amount: 0 },
      { fluid: mcFluids.water, amount: 1_500 },
    ],
    outputs: [{ item: mc.redSand }],
    energy: 3_200,
  },
  redSandstone: {
    inputs: [
      { fluid: mcFluids.lava, amount: 0 },
      { fluid: mcFluids.water, amount: 2_000 },
    ],
    outputs: [{ item: mc.redSandstone }],
    energy: 6_400,
  },
  sand: {
    inputs: [
      { fluid: mcFluids.lava, amount: 0 },
      { fluid: mcFluids.water, amount: 1_500 },
    ],
    outputs: [{ item: mc.sand }],
    energy: 3_200,
  },
  sandstone: {
    inputs: [
      { fluid: mcFluids.lava, amount: 0 },
      { fluid: mcFluids.water, amount: 2_000 },
    ],
    outputs: [{ item: mc.sandstone }],
    energy: 6_400,
  },
});
