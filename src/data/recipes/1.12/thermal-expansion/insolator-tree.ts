import type { RecipeType } from '../../../types.ts';

export { layout } from './insolator.ts';

export default {
  name: 'Sapling Infuser',
  site: 'te-1-12-docs',
  url: 'augment-sapling-infuser/',
  withEnergy: true,
  recipes: {
    wood: {
      results: [
        {
          itemGroup: 'mc-wood-log',
          suffix: 'x6',
        },
        {
          itemGroup: 'mc-sapling',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-sapling',
        },
        {
          item: 'tf-1-12-phyto-gro',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_200,
        },
      ],
      energy: 4_800,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro'],
        },
        primaryInput: {
          itemGroup: 'mc-sapling',
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_200,
        },
        primaryOutput: {
          itemGroup: 'mc-wood-log',
          amount: 6,
        },
        secondaryOutput: {
          itemGroup: 'mc-sapling',
        },
        secondaryChance: 100,
      },
    },
    'wood-rich': {
      results: [
        {
          itemGroup: 'mc-wood-log',
          suffix: 'x18',
        },
        {
          itemGroup: 'mc-sapling',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-sapling',
        },
        {
          item: 'tf-1-12-phyto-gro-rich',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_500,
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-rich'],
        },
        primaryInput: {
          itemGroup: 'mc-sapling',
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_500,
        },
        primaryOutput: {
          itemGroup: 'mc-wood-log',
          amount: 18,
        },
        secondaryOutput: {
          itemGroup: 'mc-sapling',
        },
        secondaryChance: 125,
      },
    },
    'wood-fluxed': {
      results: [
        {
          itemGroup: 'mc-wood-log',
          suffix: 'x24',
        },
        {
          itemGroup: 'mc-sapling',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-sapling',
        },
        {
          item: 'tf-1-12-phyto-gro-fluxed',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_800,
        },
      ],
      energy: 7_200,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-fluxed'],
        },
        primaryInput: {
          itemGroup: 'mc-sapling',
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_800,
        },
        primaryOutput: {
          itemGroup: 'mc-wood-log',
          amount: 24,
        },
        secondaryOutput: {
          itemGroup: 'mc-sapling',
        },
        secondaryChance: 150,
      },
    },
  },
} satisfies RecipeType;
