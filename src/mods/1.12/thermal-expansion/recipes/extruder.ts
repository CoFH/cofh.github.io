import Extruder from '../components/recipe/Extruder.astro';
import { defineRecipeType, defineRecipes } from '../../../define.ts';
import mcFluids from '../../minecraft/fluids.ts';
import mc from '../../minecraft/items.ts';

export const extruder = defineRecipeType('1.12/thermal-expansion', {
  name: 'Igneous Extruder',
  url: 'igneous-extruder/',
  withEnergy: true,
  component: Extruder,
});

export default defineRecipes(extruder, {
  andesite: {
    inputs: [
      { fluid: mcFluids.lava, amount: 0 },
      { fluid: mcFluids.water, amount: 1_000 },
    ],
    outputs: [{ item: mc.andesite }],
    energy: 800,
  },
  cobblestone: {
    inputs: [
      { fluid: mcFluids.lava, amount: 0 },
      { fluid: mcFluids.water, amount: 0 },
    ],
    outputs: [{ item: mc.cobblestone }],
    energy: 400,
  },
  diorite: {
    inputs: [
      { fluid: mcFluids.lava, amount: 0 },
      { fluid: mcFluids.water, amount: 1_000 },
    ],
    outputs: [{ item: mc.diorite }],
    energy: 800,
  },
  granite: {
    inputs: [
      { fluid: mcFluids.lava, amount: 0 },
      { fluid: mcFluids.water, amount: 1_000 },
    ],
    outputs: [{ item: mc.granite }],
    energy: 800,
  },
  obsidian: {
    inputs: [
      { fluid: mcFluids.lava, amount: 1_000 },
      { fluid: mcFluids.water, amount: 1_000 },
    ],
    outputs: [{ item: mc.obsidian }],
    energy: 1_600,
  },
  stone: {
    inputs: [
      { fluid: mcFluids.lava, amount: 0 },
      { fluid: mcFluids.water, amount: 1_000 },
    ],
    outputs: [{ item: mc.stone }],
    energy: 800,
  },
});
