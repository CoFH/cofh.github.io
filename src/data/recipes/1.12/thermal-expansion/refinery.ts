import type { MachineRecipeLayout, RecipeType } from '../../../types.ts';

export const layout = {
  background: 'te-1-12-refinery',
  width: 208,
  height: 140,
  elements: [
    { tank: 'input', top: 24, left: 10, height: 60, size: 500, gauge: 208 },
    { tank: 'fluidOutput', top: 10, left: 166, size: 500, gauge: 240 },
    { slot: 'itemOutput', top: 56, left: 114 },
    { label: 'itemChance', top: 101, right: 56, align: 'right' },
  ],
} satisfies MachineRecipeLayout;

export default {
  name: 'Fractionating Still',
  site: 'te-1-12-docs',
  url: 'fractionating-still/',
  withEnergy: true,
  recipes: {
    'naphtha-from-coal': {
      results: [
        {
          fluid: 'tf-1-12-naphtha',
          fluidAmount: 100,
        },
        {
          item: 'tf-1-12-tar',
        },
      ],
      ingredients: [
        {
          fluid: 'tf-1-12-coal',
          fluidAmount: 200,
        },
      ],
      energy: 5_000,
      data: {
        input: {
          fluid: 'tf-1-12-coal',
          amount: 200,
        },
        fluidOutput: {
          fluid: 'tf-1-12-naphtha',
          amount: 100,
        },
        itemOutput: {
          item: ['tf-1-12-tar'],
        },
        itemChance: 75,
      },
    },
    'naphtha-from-crude-oil': {
      results: [
        {
          fluid: 'tf-1-12-naphtha',
          fluidAmount: 150,
        },
        {
          item: 'tf-1-12-tar',
        },
      ],
      ingredients: [
        {
          fluid: 'tf-1-12-crude-oil',
          fluidAmount: 200,
        },
      ],
      energy: 5_000,
      data: {
        input: {
          fluid: 'tf-1-12-crude-oil',
          amount: 200,
        },
        fluidOutput: {
          fluid: 'tf-1-12-naphtha',
          amount: 150,
        },
        itemOutput: {
          item: ['tf-1-12-tar'],
        },
        itemChance: 50,
      },
    },
    'refined-fuel': {
      results: [
        {
          fluid: 'tf-1-12-refined-fuel',
          fluidAmount: 100,
        },
        {
          item: 'tf-1-12-sulfur',
        },
      ],
      ingredients: [
        {
          fluid: 'tf-1-12-naphtha',
          fluidAmount: 150,
        },
      ],
      energy: 5_000,
      data: {
        input: {
          fluid: 'tf-1-12-naphtha',
          amount: 150,
        },
        fluidOutput: {
          fluid: 'tf-1-12-refined-fuel',
          amount: 100,
        },
        itemOutput: {
          item: ['tf-1-12-sulfur'],
        },
        itemChance: 50,
      },
    },
    'tree-oil': {
      results: [
        {
          fluid: 'tf-1-12-tree-oil',
          fluidAmount: 100,
        },
        {
          item: 'tf-1-12-rosin',
        },
      ],
      ingredients: [
        {
          fluid: 'tf-1-12-resin',
          fluidAmount: 200,
        },
      ],
      energy: 5_000,
      data: {
        input: {
          fluid: 'tf-1-12-resin',
          amount: 200,
        },
        fluidOutput: {
          fluid: 'tf-1-12-tree-oil',
          amount: 100,
        },
        itemOutput: {
          item: ['tf-1-12-rosin'],
        },
        itemChance: 50,
      },
    },
    grassoline: {
      results: [
        {
          fluid: 'tf-1-12-grassoline',
          fluidAmount: 100,
        },
      ],
      ingredients: [
        {
          fluid: 'tf-1-12-biocrude',
          fluidAmount: 200,
        },
      ],
      energy: 5_000,
      data: {
        input: {
          fluid: 'tf-1-12-biocrude',
          amount: 200,
        },
        fluidOutput: {
          fluid: 'tf-1-12-grassoline',
          amount: 100,
        },
      },
    },
  },
} satisfies RecipeType;
