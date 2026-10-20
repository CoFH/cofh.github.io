import type { MachineRecipeLayout, RecipeType } from '../../../types.ts';

export const layout = {
  background: 'te-1-12-redstone-furnace-pyrolysis',
  width: 208,
  height: 140,
  elements: [
    { slot: 'input', top: 38, left: 10 },
    { slot: 'output', top: 56, left: 114 },
    { tank: 'fluidOutput', top: 10, left: 166, size: 4000, gauge: 208 },
  ],
} satisfies MachineRecipeLayout;

export default {
  name: 'Pyrolytic Conversion',
  site: 'te-1-12-docs',
  url: 'augment-pyrolytic-conversion/',
  withEnergy: true,
  recipes: {
    'charcoal-from-cactus': {
      results: [
        {
          item: 'mc-charcoal',
        },
        {
          fluid: 'tf-1-12-creosote-oil',
          fluidAmount: 50,
        },
      ],
      ingredients: [
        {
          item: 'mc-cactus',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-cactus'],
          amount: 4,
        },
        output: {
          item: ['mc-charcoal'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-creosote-oil',
          amount: 50,
        },
      },
    },
    'charcoal-from-hay-bale': {
      results: [
        {
          item: 'mc-charcoal',
        },
        {
          fluid: 'tf-1-12-creosote-oil',
          fluidAmount: 100,
        },
      ],
      ingredients: [
        {
          item: 'mc-hay-bale',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-hay-bale'],
        },
        output: {
          item: ['mc-charcoal'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-creosote-oil',
          amount: 100,
        },
      },
    },
    'charcoal-from-sawdust': {
      results: [
        {
          item: 'mc-charcoal',
        },
        {
          fluid: 'tf-1-12-creosote-oil',
          fluidAmount: 50,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-sawdust-compressed',
        },
      ],
      energy: 1_000,
      data: {
        input: {
          item: ['tf-1-12-sawdust-compressed'],
        },
        output: {
          item: ['mc-charcoal'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-creosote-oil',
          amount: 50,
        },
      },
    },
    'charcoal-from-sugar-canes': {
      results: [
        {
          item: 'mc-charcoal',
        },
        {
          fluid: 'tf-1-12-creosote-oil',
          fluidAmount: 50,
        },
      ],
      ingredients: [
        {
          item: 'mc-sugar-canes',
        },
      ],
      energy: 1_000,
      data: {
        input: {
          item: ['mc-sugar-canes'],
          amount: 8,
        },
        output: {
          item: ['mc-charcoal'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-creosote-oil',
          amount: 50,
        },
      },
    },
    'charcoal-from-wood-log': {
      results: [
        {
          item: 'mc-charcoal',
        },
        {
          fluid: 'tf-1-12-creosote-oil',
          fluidAmount: 100,
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-wood-log',
        },
      ],
      energy: 1_000,
      data: {
        input: {
          randomCycle: true,
          itemGroup: 'mc-wood-log',
        },
        output: {
          item: ['mc-charcoal'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-creosote-oil',
          amount: 100,
        },
      },
    },
    'coal-coke': {
      results: [
        {
          item: 'tf-1-12-coal-coke',
        },
        {
          fluid: 'tf-1-12-creosote-oil',
          fluidAmount: 250,
        },
      ],
      ingredients: [
        {
          item: 'mc-coal',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-coal'],
        },
        output: {
          item: ['tf-1-12-coal-coke'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-creosote-oil',
          amount: 250,
        },
      },
    },
    'storage-block-coal-coke': {
      results: [
        {
          item: 'tf-1-12-storage-block-coal-coke',
        },
        {
          fluid: 'tf-1-12-creosote-oil',
          fluidAmount: 2_500,
        },
      ],
      ingredients: [
        {
          item: 'mc-storage-block-coal',
        },
      ],
      energy: 16_000,
      data: {
        input: {
          item: ['mc-storage-block-coal'],
        },
        output: {
          item: ['tf-1-12-storage-block-coal-coke'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-creosote-oil',
          amount: 2_500,
        },
      },
    },
  },
} satisfies RecipeType;
