import type { MachineRecipeLayout, RecipeType } from '../../../types.ts';

export const layout = {
  background: 'te-1-12-charger',
  width: 150,
  height: 90,
  elements: [
    { slot: 'input', top: 18, left: 10 },
    { slot: 'output', top: 18, left: 100 },
  ],
} satisfies MachineRecipeLayout;

export default {
  name: 'Energetic Infuser',
  site: 'te-1-12-docs',
  url: 'energetic-infuser/',
  withEnergy: true,
  recipes: {
    'aqua-chow-fluxed': {
      results: [
        {
          item: 'tf-1-12-aqua-chow-fluxed',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-aqua-chow-rich',
        },
      ],
      energy: 8_000,
      data: {
        input: {
          item: ['tf-1-12-aqua-chow-rich'],
        },
        output: {
          item: ['tf-1-12-aqua-chow-fluxed'],
        },
      },
    },
    'phyto-gro-fluxed': {
      results: [
        {
          item: 'tf-1-12-phyto-gro-fluxed',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-phyto-gro-rich',
        },
      ],
      energy: 8_000,
      data: {
        input: {
          item: ['tf-1-12-phyto-gro-rich'],
        },
        output: {
          item: ['tf-1-12-phyto-gro-fluxed'],
        },
      },
    },
  },
} satisfies RecipeType;
