import type { RecipeType } from '../../../types.ts';

export { layout } from './extruder.ts';

export default {
  name: 'Clastic Deposition',
  site: 'te-1-12-docs',
  url: 'augment-clastic-deposition/',
  withEnergy: true,
  recipes: {
    gravel: {
      results: [
        {
          item: 'mc-gravel',
        },
      ],
      ingredients: [
        {
          fluid: 'mc-lava',
          fluidAmount: 0,
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_500,
        },
      ],
      energy: 2_400,
      data: {
        hotInput: {
          fluid: 'mc-lava',
          amount: 0,
        },
        coldInput: {
          fluid: 'mc-water',
          amount: 1_500,
        },
        output: {
          item: ['mc-gravel'],
        },
      },
    },
    sand: {
      results: [
        {
          item: 'mc-sand',
        },
      ],
      ingredients: [
        {
          fluid: 'mc-lava',
          fluidAmount: 0,
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_500,
        },
      ],
      energy: 3_200,
      data: {
        hotInput: {
          fluid: 'mc-lava',
          amount: 0,
        },
        coldInput: {
          fluid: 'mc-water',
          amount: 1_500,
        },
        output: {
          item: ['mc-sand'],
        },
      },
    },
    'sand-red': {
      results: [
        {
          item: 'mc-sand-red',
        },
      ],
      ingredients: [
        {
          fluid: 'mc-lava',
          fluidAmount: 0,
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_500,
        },
      ],
      energy: 3_200,
      data: {
        hotInput: {
          fluid: 'mc-lava',
          amount: 0,
        },
        coldInput: {
          fluid: 'mc-water',
          amount: 1_500,
        },
        output: {
          item: ['mc-sand-red'],
        },
      },
    },
    sandstone: {
      results: [
        {
          item: 'mc-sandstone',
        },
      ],
      ingredients: [
        {
          fluid: 'mc-lava',
          fluidAmount: 0,
        },
        {
          fluid: 'mc-water',
          fluidAmount: 2_000,
        },
      ],
      energy: 6_400,
      data: {
        hotInput: {
          fluid: 'mc-lava',
          amount: 0,
        },
        coldInput: {
          fluid: 'mc-water',
          amount: 2_000,
        },
        output: {
          item: ['mc-sandstone'],
        },
      },
    },
    'sandstone-red': {
      results: [
        {
          item: 'mc-sandstone-red',
        },
      ],
      ingredients: [
        {
          fluid: 'mc-lava',
          fluidAmount: 0,
        },
        {
          fluid: 'mc-water',
          fluidAmount: 2_000,
        },
      ],
      energy: 6_400,
      data: {
        hotInput: {
          fluid: 'mc-lava',
          amount: 0,
        },
        coldInput: {
          fluid: 'mc-water',
          amount: 2_000,
        },
        output: {
          item: ['mc-sandstone-red'],
        },
      },
    },
  },
} satisfies RecipeType;
