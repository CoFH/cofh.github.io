import type { MachineRecipeLayout, RecipeType } from '../../../types.ts';

export const layout = {
  background: 'te-1-12-centrifuge',
  width: 228,
  height: 140,
  elements: [
    { slot: 'input', top: 38, left: 10 },
    { slot: 'output1', top: 38, left: 106 },
    { label: 'output1Chance', top: 20, right: 56, align: 'center' },
    { slot: 'output2', top: 38, left: 142 },
    { label: 'output2Chance', top: 20, right: 20, align: 'center' },
    { slot: 'output3', top: 74, left: 106 },
    { label: 'output3Chance', top: 110, right: 56, align: 'center' },
    { slot: 'output4', top: 74, left: 142 },
    { label: 'output4Chance', top: 110, right: 20, align: 'center' },
    { tank: 'fluidOutput', top: 10, left: 186, size: 4000, gauge: 228 },
  ],
} satisfies MachineRecipeLayout;

export default {
  name: 'Centrifugal Separator',
  site: 'te-1-12-docs',
  url: 'centrifugal-separator/',
  withEnergy: true,
  allResultsBold: true,
  recipes: {
    'concrete-powder': {
      results: [
        {
          item: 'mc-gravel',
        },
        {
          item: 'mc-sand',
        },
        {
          itemGroup: 'tf-1-12-pigment',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-concrete-powder',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          itemGroup: 'mc-concrete-powder',
          amount: 2,
        },
        output1: {
          item: ['mc-gravel'],
        },
        output2: {
          item: ['mc-sand'],
        },
        output3: {
          itemGroup: 'tf-1-12-pigment',
        },
        output3Chance: 10,
      },
    },
    'dust-aerotheum': {
      results: [
        {
          item: 'tf-1-12-blitz-powder',
        },
        {
          item: 'tf-1-12-niter',
        },
        {
          item: 'mc-redstone',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-aerotheum',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-dust-aerotheum'],
          amount: 2,
        },
        output1: {
          item: ['tf-1-12-blitz-powder'],
          amount: 2,
        },
        output2: {
          item: ['tf-1-12-niter'],
        },
        output3: {
          item: ['mc-redstone'],
        },
      },
    },
    'dust-bronze': {
      results: [
        {
          item: 'tf-1-12-dust-copper',
        },
        {
          item: 'tf-1-12-dust-tin',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-bronze',
        },
      ],
      energy: 8_000,
      data: {
        input: {
          item: ['tf-1-12-dust-bronze'],
          amount: 4,
        },
        output1: {
          item: ['tf-1-12-dust-copper'],
          amount: 3,
        },
        output2: {
          item: ['tf-1-12-dust-tin'],
        },
      },
    },
    'dust-constantan': {
      results: [
        {
          item: 'tf-1-12-dust-copper',
        },
        {
          item: 'tf-1-12-dust-nickel',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-constantan',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-dust-constantan'],
          amount: 2,
        },
        output1: {
          item: ['tf-1-12-dust-copper'],
        },
        output2: {
          item: ['tf-1-12-dust-nickel'],
        },
      },
    },
    'dust-cryotheum': {
      results: [
        {
          item: 'tf-1-12-blizz-powder',
        },
        {
          item: 'mc-snowball',
        },
        {
          item: 'mc-redstone',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-cryotheum',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-dust-cryotheum'],
          amount: 2,
        },
        output1: {
          item: ['tf-1-12-blizz-powder'],
          amount: 2,
        },
        output2: {
          item: ['mc-snowball'],
        },
        output3: {
          item: ['mc-redstone'],
        },
      },
    },
    'dust-electrum': {
      results: [
        {
          item: 'tf-1-12-dust-gold',
        },
        {
          item: 'tf-1-12-dust-silver',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-electrum',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-dust-electrum'],
          amount: 2,
        },
        output1: {
          item: ['tf-1-12-dust-gold'],
        },
        output2: {
          item: ['tf-1-12-dust-silver'],
        },
      },
    },
    'dust-enderium': {
      results: [
        {
          item: 'tf-1-12-dust-lead',
        },
        {
          item: 'tf-1-12-dust-platinum',
        },
        {
          fluid: 'tf-1-12-ender',
          fluidAmount: 1_000,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-enderium',
        },
      ],
      energy: 8_000,
      data: {
        input: {
          item: ['tf-1-12-dust-enderium'],
          amount: 4,
        },
        output1: {
          item: ['tf-1-12-dust-lead'],
          amount: 3,
        },
        output2: {
          item: ['tf-1-12-dust-platinum'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-ender',
          amount: 1_000,
        },
      },
    },
    'dust-invar': {
      results: [
        {
          item: 'tf-1-12-dust-iron',
        },
        {
          item: 'tf-1-12-dust-nickel',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-invar',
        },
      ],
      energy: 6_000,
      data: {
        input: {
          item: ['tf-1-12-dust-invar'],
          amount: 3,
        },
        output1: {
          item: ['tf-1-12-dust-iron'],
          amount: 2,
        },
        output2: {
          item: ['tf-1-12-dust-nickel'],
        },
      },
    },
    'dust-lumium': {
      results: [
        {
          item: 'tf-1-12-dust-tin',
        },
        {
          item: 'tf-1-12-dust-silver',
        },
        {
          fluid: 'tf-1-12-glowstone',
          fluidAmount: 1_000,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-lumium',
        },
      ],
      energy: 8_000,
      data: {
        input: {
          item: ['tf-1-12-dust-lumium'],
          amount: 4,
        },
        output1: {
          item: ['tf-1-12-dust-tin'],
          amount: 3,
        },
        output2: {
          item: ['tf-1-12-dust-silver'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-glowstone',
          amount: 1_000,
        },
      },
    },
    'dust-petrotheum': {
      results: [
        {
          item: 'tf-1-12-basalz-powder',
        },
        {
          item: 'tf-1-12-dust-obsidian',
        },
        {
          item: 'mc-redstone',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-petrotheum',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-dust-petrotheum'],
          amount: 2,
        },
        output1: {
          item: ['tf-1-12-basalz-powder'],
          amount: 2,
        },
        output2: {
          item: ['tf-1-12-dust-obsidian'],
        },
        output3: {
          item: ['mc-redstone'],
        },
      },
    },
    'dust-pyrotheum': {
      results: [
        {
          item: 'mc-blaze-powder',
        },
        {
          item: 'tf-1-12-sulfur',
        },
        {
          item: 'mc-redstone',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-pyrotheum',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-dust-pyrotheum'],
          amount: 2,
        },
        output1: {
          item: ['mc-blaze-powder'],
          amount: 2,
        },
        output2: {
          item: ['tf-1-12-sulfur'],
        },
        output3: {
          item: ['mc-redstone'],
        },
      },
    },
    'dust-signalum': {
      results: [
        {
          item: 'tf-1-12-dust-copper',
        },
        {
          item: 'tf-1-12-dust-silver',
        },
        {
          fluid: 'tf-1-12-redstone',
          fluidAmount: 1_000,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-signalum',
        },
      ],
      energy: 8_000,
      data: {
        input: {
          item: ['tf-1-12-dust-signalum'],
          amount: 4,
        },
        output1: {
          item: ['tf-1-12-dust-copper'],
          amount: 3,
        },
        output2: {
          item: ['tf-1-12-dust-silver'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-redstone',
          amount: 1_000,
        },
      },
    },
    'magma-cream': {
      results: [
        {
          item: 'mc-slimeball',
        },
        {
          item: 'mc-blaze-powder',
        },
      ],
      ingredients: [
        {
          item: 'mc-magma-cream',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-magma-cream'],
        },
        output1: {
          item: ['mc-slimeball'],
        },
        output2: {
          item: ['mc-blaze-powder'],
        },
      },
    },
    'sugar-canes': {
      results: [
        {
          item: 'mc-sugar',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 250,
        },
      ],
      ingredients: [
        {
          item: 'mc-sugar-canes',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-sugar-canes'],
        },
        output1: {
          item: ['mc-sugar'],
          amount: 2,
        },
        fluidOutput: {
          fluid: 'mc-water',
          amount: 250,
        },
      },
    },
  },
} satisfies RecipeType;
