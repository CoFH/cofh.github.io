import type { MachineRecipeLayout, RecipeType } from '../../../types.ts';

export const layout = {
  background: 'te-1-12-precipitator',
  width: 164,
  height: 112,
  elements: [
    { tank: 'input', top: 10, left: 10, height: 60, size: 8000, gauge: 164 },
    { slot: 'output', top: 40, left: 114 },
  ],
} satisfies MachineRecipeLayout;

export default {
  name: 'Glacial Precipitator',
  site: 'te-1-12-docs',
  url: 'glacial-precipitator/',
  withEnergy: true,
  recipes: {
    snowball: {
      results: [
        {
          item: 'mc-snowball',
        },
      ],
      ingredients: [
        {
          fluid: 'mc-water',
          fluidAmount: 500,
        },
      ],
      energy: 800,
      data: {
        input: {
          fluid: 'mc-water',
          amount: 500,
        },
        output: {
          item: ['mc-snowball'],
          amount: 4,
        },
      },
    },
    snow: {
      results: [
        {
          item: 'mc-snow',
        },
      ],
      ingredients: [
        {
          fluid: 'mc-water',
          fluidAmount: 500,
        },
      ],
      energy: 800,
      data: {
        input: {
          fluid: 'mc-water',
          amount: 500,
        },
        output: {
          item: ['mc-snow'],
        },
      },
    },
    ice: {
      results: [
        {
          item: 'mc-ice',
        },
      ],
      ingredients: [
        {
          fluid: 'mc-water',
          fluidAmount: 1_000,
        },
      ],
      energy: 1_600,
      data: {
        input: {
          fluid: 'mc-water',
          amount: 1_000,
        },
        output: {
          item: ['mc-ice'],
        },
      },
    },
    'snow-layer': {
      results: [
        {
          item: 'mc-snow-layer',
        },
      ],
      ingredients: [
        {
          fluid: 'mc-water',
          fluidAmount: 500,
        },
      ],
      energy: 800,
      data: {
        input: {
          fluid: 'mc-water',
          amount: 500,
        },
        output: {
          item: ['mc-snow-layer'],
          amount: 2,
        },
      },
    },
    'packed-ice': {
      results: [
        {
          item: 'mc-packed-ice',
        },
      ],
      ingredients: [
        {
          fluid: 'mc-water',
          fluidAmount: 2_000,
        },
      ],
      energy: 1_600,
      data: {
        input: {
          fluid: 'mc-water',
          amount: 2_000,
        },
        output: {
          item: ['mc-packed-ice'],
        },
      },
    },
  },
} satisfies RecipeType;
