import type { MachineRecipeLayout, RecipeType } from '../../../types.ts';

export const layout = {
  background: 'te-1-12-insolator',
  width: 252,
  height: 140,
  elements: [
    { slot: 'primaryInput', top: 32, left: 10 },
    { slot: 'secondaryInput', top: 32, left: 54 },
    { tank: 'fluidInput', top: 10, left: 210, size: 10000, gauge: 252 },
    { slot: 'primaryOutput', top: 34, left: 158 },
    { slot: 'secondaryOutput', top: 86, left: 158 },
    { label: 'secondaryChance', top: 96, right: 100, align: 'right' },
  ],
} satisfies MachineRecipeLayout;

export default {
  name: 'Phytogenic Insolator',
  site: 'te-1-12-docs',
  url: 'phytogenic-insolator/',
  withEnergy: true,
  recipes: {
    beetroot: {
      results: [
        {
          item: 'mc-beetroot',
          suffix: 'x2',
        },
        {
          item: 'mc-beetroot-seeds',
        },
      ],
      ingredients: [
        {
          item: 'mc-beetroot-seeds',
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
          item: ['mc-beetroot-seeds'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_200,
        },
        primaryOutput: {
          item: ['mc-beetroot'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['mc-beetroot-seeds'],
        },
        secondaryChance: 110,
      },
    },
    'beetroot-rich': {
      results: [
        {
          item: 'mc-beetroot',
          suffix: 'x4',
        },
        {
          item: 'mc-beetroot-seeds',
        },
      ],
      ingredients: [
        {
          item: 'mc-beetroot-seeds',
        },
        {
          item: 'tf-1-12-phyto-gro-rich',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_800,
        },
      ],
      energy: 7_200,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-rich'],
        },
        primaryInput: {
          item: ['mc-beetroot-seeds'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_800,
        },
        primaryOutput: {
          item: ['mc-beetroot'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['mc-beetroot-seeds'],
        },
        secondaryChance: 125,
      },
    },
    'beetroot-fluxed': {
      results: [
        {
          item: 'mc-beetroot',
          suffix: 'x6',
        },
        {
          item: 'mc-beetroot-seeds',
        },
      ],
      ingredients: [
        {
          item: 'mc-beetroot-seeds',
        },
        {
          item: 'tf-1-12-phyto-gro-fluxed',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 2_400,
        },
      ],
      energy: 9_600,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-fluxed'],
        },
        primaryInput: {
          item: ['mc-beetroot-seeds'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 2_400,
        },
        primaryOutput: {
          item: ['mc-beetroot'],
          amount: 6,
        },
        secondaryOutput: {
          item: ['mc-beetroot-seeds'],
        },
        secondaryChance: 150,
      },
    },
    cactus: {
      results: [
        {
          item: 'mc-cactus',
          suffix: 'x2',
        },
      ],
      ingredients: [
        {
          item: 'mc-cactus',
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
          item: ['mc-cactus'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_200,
        },
        primaryOutput: {
          item: ['mc-cactus'],
          amount: 2,
        },
      },
    },
    'cactus-rich': {
      results: [
        {
          item: 'mc-cactus',
          suffix: 'x4',
        },
      ],
      ingredients: [
        {
          item: 'mc-cactus',
        },
        {
          item: 'tf-1-12-phyto-gro-rich',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_800,
        },
      ],
      energy: 7_200,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-rich'],
        },
        primaryInput: {
          item: ['mc-cactus'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_800,
        },
        primaryOutput: {
          item: ['mc-cactus'],
          amount: 4,
        },
      },
    },
    'cactus-fluxed': {
      results: [
        {
          item: 'mc-cactus',
          suffix: 'x6',
        },
      ],
      ingredients: [
        {
          item: 'mc-cactus',
        },
        {
          item: 'tf-1-12-phyto-gro-fluxed',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 2_400,
        },
      ],
      energy: 9_600,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-fluxed'],
        },
        primaryInput: {
          item: ['mc-cactus'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 2_400,
        },
        primaryOutput: {
          item: ['mc-cactus'],
          amount: 6,
        },
      },
    },
    carrot: {
      results: [
        {
          item: 'mc-carrot',
          suffix: 'x3',
        },
      ],
      ingredients: [
        {
          item: 'mc-carrot',
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
          item: ['mc-carrot'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_200,
        },
        primaryOutput: {
          item: ['mc-carrot'],
          amount: 3,
        },
      },
    },
    'carrot-rich': {
      results: [
        {
          item: 'mc-carrot',
          suffix: 'x6',
        },
      ],
      ingredients: [
        {
          item: 'mc-carrot',
        },
        {
          item: 'tf-1-12-phyto-gro-rich',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_800,
        },
      ],
      energy: 7_200,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-rich'],
        },
        primaryInput: {
          item: ['mc-carrot'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_800,
        },
        primaryOutput: {
          item: ['mc-carrot'],
          amount: 6,
        },
      },
    },
    'carrot-fluxed': {
      results: [
        {
          item: 'mc-carrot',
          suffix: 'x9',
        },
      ],
      ingredients: [
        {
          item: 'mc-carrot',
        },
        {
          item: 'tf-1-12-phyto-gro-fluxed',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 2_400,
        },
      ],
      energy: 9_600,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-fluxed'],
        },
        primaryInput: {
          item: ['mc-carrot'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 2_400,
        },
        primaryOutput: {
          item: ['mc-carrot'],
          amount: 9,
        },
      },
    },
    'chorus-fruit': {
      results: [
        {
          item: 'mc-chorus-fruit',
          suffix: 'x2',
        },
        {
          item: 'mc-chorus-flower',
        },
      ],
      ingredients: [
        {
          item: 'mc-chorus-flower',
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
          item: ['mc-chorus-flower'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_200,
        },
        primaryOutput: {
          item: ['mc-chorus-fruit'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['mc-chorus-flower'],
        },
        secondaryChance: 100,
      },
    },
    'chorus-fruit-rich': {
      results: [
        {
          item: 'mc-chorus-fruit',
          suffix: 'x4',
        },
        {
          item: 'mc-chorus-flower',
        },
      ],
      ingredients: [
        {
          item: 'mc-chorus-flower',
        },
        {
          item: 'tf-1-12-phyto-gro-rich',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_800,
        },
      ],
      energy: 7_200,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-rich'],
        },
        primaryInput: {
          item: ['mc-chorus-flower'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_800,
        },
        primaryOutput: {
          item: ['mc-chorus-fruit'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['mc-chorus-flower'],
        },
        secondaryChance: 125,
      },
    },
    'chorus-fruit-fluxed': {
      results: [
        {
          item: 'mc-chorus-fruit',
          suffix: 'x6',
        },
        {
          item: 'mc-chorus-flower',
        },
      ],
      ingredients: [
        {
          item: 'mc-chorus-flower',
        },
        {
          item: 'tf-1-12-phyto-gro-fluxed',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 2_400,
        },
      ],
      energy: 9_600,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-fluxed'],
        },
        primaryInput: {
          item: ['mc-chorus-flower'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 2_400,
        },
        primaryOutput: {
          item: ['mc-chorus-fruit'],
          amount: 6,
        },
        secondaryOutput: {
          item: ['mc-chorus-flower'],
        },
        secondaryChance: 150,
      },
    },
    'cocoa-beans': {
      results: [
        {
          item: 'mc-cocoa-beans',
          suffix: 'x3',
        },
      ],
      ingredients: [
        {
          item: 'mc-cocoa-beans',
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
          item: ['mc-cocoa-beans'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_200,
        },
        primaryOutput: {
          item: ['mc-cocoa-beans'],
          amount: 3,
        },
      },
    },
    'cocoa-beans-rich': {
      results: [
        {
          item: 'mc-cocoa-beans',
          suffix: 'x6',
        },
      ],
      ingredients: [
        {
          item: 'mc-cocoa-beans',
        },
        {
          item: 'tf-1-12-phyto-gro-rich',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_800,
        },
      ],
      energy: 7_200,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-rich'],
        },
        primaryInput: {
          item: ['mc-cocoa-beans'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_800,
        },
        primaryOutput: {
          item: ['mc-cocoa-beans'],
          amount: 6,
        },
      },
    },
    'cocoa-beans-fluxed': {
      results: [
        {
          item: 'mc-cocoa-beans',
          suffix: 'x9',
        },
      ],
      ingredients: [
        {
          item: 'mc-cocoa-beans',
        },
        {
          item: 'tf-1-12-phyto-gro-fluxed',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 2_400,
        },
      ],
      energy: 9_600,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-fluxed'],
        },
        primaryInput: {
          item: ['mc-cocoa-beans'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 2_400,
        },
        primaryOutput: {
          item: ['mc-cocoa-beans'],
          amount: 9,
        },
      },
    },
    flower: {
      results: [
        {
          itemGroup: 'mc-flower',
          suffix: 'x3',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-flower',
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
          itemGroup: 'mc-flower',
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_200,
        },
        primaryOutput: {
          itemGroup: 'mc-flower',
          amount: 3,
        },
      },
    },
    'flower-rich': {
      results: [
        {
          itemGroup: 'mc-flower',
          suffix: 'x6',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-flower',
        },
        {
          item: 'tf-1-12-phyto-gro-rich',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_800,
        },
      ],
      energy: 7_200,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-rich'],
        },
        primaryInput: {
          itemGroup: 'mc-flower',
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_800,
        },
        primaryOutput: {
          itemGroup: 'mc-flower',
          amount: 6,
        },
      },
    },
    'flower-fluxed': {
      results: [
        {
          itemGroup: 'mc-flower',
          suffix: 'x9',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-flower',
        },
        {
          item: 'tf-1-12-phyto-gro-fluxed',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 2_400,
        },
      ],
      energy: 9_600,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-fluxed'],
        },
        primaryInput: {
          itemGroup: 'mc-flower',
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 2_400,
        },
        primaryOutput: {
          itemGroup: 'mc-flower',
          amount: 9,
        },
      },
    },
    'lily-pad': {
      results: [
        {
          item: 'mc-lily-pad',
          suffix: 'x2',
        },
      ],
      ingredients: [
        {
          item: 'mc-lily-pad',
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
          item: ['mc-lily-pad'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_200,
        },
        primaryOutput: {
          item: ['mc-lily-pad'],
          amount: 2,
        },
      },
    },
    'lily-pad-rich': {
      results: [
        {
          item: 'mc-lily-pad',
          suffix: 'x4',
        },
      ],
      ingredients: [
        {
          item: 'mc-lily-pad',
        },
        {
          item: 'tf-1-12-phyto-gro-rich',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_800,
        },
      ],
      energy: 7_200,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-rich'],
        },
        primaryInput: {
          item: ['mc-lily-pad'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_800,
        },
        primaryOutput: {
          item: ['mc-lily-pad'],
          amount: 4,
        },
      },
    },
    'lily-pad-fluxed': {
      results: [
        {
          item: 'mc-lily-pad',
          suffix: 'x6',
        },
      ],
      ingredients: [
        {
          item: 'mc-lily-pad',
        },
        {
          item: 'tf-1-12-phyto-gro-fluxed',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 2_400,
        },
      ],
      energy: 9_600,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-fluxed'],
        },
        primaryInput: {
          item: ['mc-lily-pad'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 2_400,
        },
        primaryOutput: {
          item: ['mc-lily-pad'],
          amount: 6,
        },
      },
    },
    melon: {
      results: [
        {
          item: 'mc-melon',
        },
        {
          item: 'mc-melon-seeds',
        },
      ],
      ingredients: [
        {
          item: 'mc-melon-seeds',
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
          item: ['mc-melon-seeds'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_200,
        },
        primaryOutput: {
          item: ['mc-melon'],
        },
        secondaryOutput: {
          item: ['mc-melon-seeds'],
        },
        secondaryChance: 100,
      },
    },
    'melon-rich': {
      results: [
        {
          item: 'mc-melon',
          suffix: 'x2',
        },
        {
          item: 'mc-melon-seeds',
        },
      ],
      ingredients: [
        {
          item: 'mc-melon-seeds',
        },
        {
          item: 'tf-1-12-phyto-gro-rich',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_800,
        },
      ],
      energy: 7_200,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-rich'],
        },
        primaryInput: {
          item: ['mc-melon-seeds'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_800,
        },
        primaryOutput: {
          item: ['mc-melon'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['mc-melon-seeds'],
        },
        secondaryChance: 125,
      },
    },
    'melon-fluxed': {
      results: [
        {
          item: 'mc-melon',
          suffix: 'x3',
        },
        {
          item: 'mc-melon-seeds',
        },
      ],
      ingredients: [
        {
          item: 'mc-melon-seeds',
        },
        {
          item: 'tf-1-12-phyto-gro-fluxed',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 2_400,
        },
      ],
      energy: 9_600,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-fluxed'],
        },
        primaryInput: {
          item: ['mc-melon-seeds'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 2_400,
        },
        primaryOutput: {
          item: ['mc-melon'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['mc-melon-seeds'],
        },
        secondaryChance: 150,
      },
    },
    mushroom: {
      results: [
        {
          itemGroup: 'mc-mushroom',
          suffix: 'x2',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-mushroom',
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
          itemGroup: 'mc-mushroom',
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_200,
        },
        primaryOutput: {
          itemGroup: 'mc-mushroom',
          amount: 2,
        },
      },
    },
    'mushroom-rich': {
      results: [
        {
          itemGroup: 'mc-mushroom',
          suffix: 'x4',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-mushroom',
        },
        {
          item: 'tf-1-12-phyto-gro-rich',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_800,
        },
      ],
      energy: 7_200,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-rich'],
        },
        primaryInput: {
          itemGroup: 'mc-mushroom',
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_800,
        },
        primaryOutput: {
          itemGroup: 'mc-mushroom',
          amount: 4,
        },
      },
    },
    'mushroom-fluxed': {
      results: [
        {
          itemGroup: 'mc-mushroom',
          suffix: 'x6',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-mushroom',
        },
        {
          item: 'tf-1-12-phyto-gro-fluxed',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 2_400,
        },
      ],
      energy: 9_600,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-fluxed'],
        },
        primaryInput: {
          itemGroup: 'mc-mushroom',
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 2_400,
        },
        primaryOutput: {
          itemGroup: 'mc-mushroom',
          amount: 6,
        },
      },
    },
    'nether-wart': {
      results: [
        {
          item: 'mc-nether-wart',
          suffix: 'x2',
        },
      ],
      ingredients: [
        {
          item: 'mc-nether-wart',
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
          item: ['mc-nether-wart'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_200,
        },
        primaryOutput: {
          item: ['mc-nether-wart'],
          amount: 2,
        },
      },
    },
    'nether-wart-rich': {
      results: [
        {
          item: 'mc-nether-wart',
          suffix: 'x4',
        },
      ],
      ingredients: [
        {
          item: 'mc-nether-wart',
        },
        {
          item: 'tf-1-12-phyto-gro-rich',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_800,
        },
      ],
      energy: 7_200,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-rich'],
        },
        primaryInput: {
          item: ['mc-nether-wart'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_800,
        },
        primaryOutput: {
          item: ['mc-nether-wart'],
          amount: 4,
        },
      },
    },
    'nether-wart-fluxed': {
      results: [
        {
          item: 'mc-nether-wart',
          suffix: 'x6',
        },
      ],
      ingredients: [
        {
          item: 'mc-nether-wart',
        },
        {
          item: 'tf-1-12-phyto-gro-fluxed',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 2_400,
        },
      ],
      energy: 9_600,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-fluxed'],
        },
        primaryInput: {
          item: ['mc-nether-wart'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 2_400,
        },
        primaryOutput: {
          item: ['mc-nether-wart'],
          amount: 6,
        },
      },
    },
    potato: {
      results: [
        {
          item: 'mc-potato',
          suffix: 'x3',
        },
        {
          item: 'mc-potato-poisonous',
        },
      ],
      ingredients: [
        {
          item: 'mc-potato',
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
          item: ['mc-potato'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_200,
        },
        primaryOutput: {
          item: ['mc-potato'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['mc-potato-poisonous'],
        },
        secondaryChance: 5,
      },
    },
    'potato-rich': {
      results: [
        {
          item: 'mc-potato',
          suffix: 'x6',
        },
        {
          item: 'mc-potato-poisonous',
        },
      ],
      ingredients: [
        {
          item: 'mc-potato',
        },
        {
          item: 'tf-1-12-phyto-gro-rich',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_800,
        },
      ],
      energy: 7_200,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-rich'],
        },
        primaryInput: {
          item: ['mc-potato'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_800,
        },
        primaryOutput: {
          item: ['mc-potato'],
          amount: 6,
        },
        secondaryOutput: {
          item: ['mc-potato-poisonous'],
        },
        secondaryChance: 10,
      },
    },
    'potato-fluxed': {
      results: [
        {
          item: 'mc-potato',
          suffix: 'x9',
        },
        {
          item: 'mc-potato-poisonous',
        },
      ],
      ingredients: [
        {
          item: 'mc-potato',
        },
        {
          item: 'tf-1-12-phyto-gro-fluxed',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 2_400,
        },
      ],
      energy: 9_600,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-fluxed'],
        },
        primaryInput: {
          item: ['mc-potato'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 2_400,
        },
        primaryOutput: {
          item: ['mc-potato'],
          amount: 9,
        },
        secondaryOutput: {
          item: ['mc-potato-poisonous'],
        },
        secondaryChance: 15,
      },
    },
    pumpkin: {
      results: [
        {
          item: 'mc-pumpkin',
        },
        {
          item: 'mc-pumpkin-seeds',
        },
      ],
      ingredients: [
        {
          item: 'mc-pumpkin-seeds',
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
          item: ['mc-pumpkin-seeds'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_200,
        },
        primaryOutput: {
          item: ['mc-pumpkin'],
        },
        secondaryOutput: {
          item: ['mc-pumpkin-seeds'],
        },
        secondaryChance: 100,
      },
    },
    'pumpkin-rich': {
      results: [
        {
          item: 'mc-pumpkin',
          suffix: 'x2',
        },
        {
          item: 'mc-pumpkin-seeds',
        },
      ],
      ingredients: [
        {
          item: 'mc-pumpkin-seeds',
        },
        {
          item: 'tf-1-12-phyto-gro-rich',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_800,
        },
      ],
      energy: 7_200,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-rich'],
        },
        primaryInput: {
          item: ['mc-pumpkin-seeds'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_800,
        },
        primaryOutput: {
          item: ['mc-pumpkin'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['mc-pumpkin-seeds'],
        },
        secondaryChance: 125,
      },
    },
    'pumpkin-fluxed': {
      results: [
        {
          item: 'mc-pumpkin',
          suffix: 'x3',
        },
        {
          item: 'mc-pumpkin-seeds',
        },
      ],
      ingredients: [
        {
          item: 'mc-pumpkin-seeds',
        },
        {
          item: 'tf-1-12-phyto-gro-fluxed',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 2_400,
        },
      ],
      energy: 9_600,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-fluxed'],
        },
        primaryInput: {
          item: ['mc-pumpkin-seeds'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 2_400,
        },
        primaryOutput: {
          item: ['mc-pumpkin'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['mc-pumpkin-seeds'],
        },
        secondaryChance: 150,
      },
    },
    'sugar-canes': {
      results: [
        {
          item: 'mc-sugar-canes',
          suffix: 'x2',
        },
      ],
      ingredients: [
        {
          item: 'mc-sugar-canes',
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
          item: ['mc-sugar-canes'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_200,
        },
        primaryOutput: {
          item: ['mc-sugar-canes'],
          amount: 2,
        },
      },
    },
    'sugar-canes-rich': {
      results: [
        {
          item: 'mc-sugar-canes',
          suffix: 'x4',
        },
      ],
      ingredients: [
        {
          item: 'mc-sugar-canes',
        },
        {
          item: 'tf-1-12-phyto-gro-rich',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_800,
        },
      ],
      energy: 7_200,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-rich'],
        },
        primaryInput: {
          item: ['mc-sugar-canes'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_800,
        },
        primaryOutput: {
          item: ['mc-sugar-canes'],
          amount: 4,
        },
      },
    },
    'sugar-canes-fluxed': {
      results: [
        {
          item: 'mc-sugar-canes',
          suffix: 'x6',
        },
      ],
      ingredients: [
        {
          item: 'mc-sugar-canes',
        },
        {
          item: 'tf-1-12-phyto-gro-fluxed',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 2_400,
        },
      ],
      energy: 9_600,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-fluxed'],
        },
        primaryInput: {
          item: ['mc-sugar-canes'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 2_400,
        },
        primaryOutput: {
          item: ['mc-sugar-canes'],
          amount: 6,
        },
      },
    },
    'tall-flower': {
      results: [
        {
          itemGroup: 'mc-flower-tall',
          suffix: 'x2',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-flower-tall',
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
          itemGroup: 'mc-flower-tall',
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_200,
        },
        primaryOutput: {
          itemGroup: 'mc-flower-tall',
          amount: 2,
        },
      },
    },
    'tall-flower-rich': {
      results: [
        {
          itemGroup: 'mc-flower-tall',
          suffix: 'x4',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-flower-tall',
        },
        {
          item: 'tf-1-12-phyto-gro-rich',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_800,
        },
      ],
      energy: 7_200,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-rich'],
        },
        primaryInput: {
          itemGroup: 'mc-flower-tall',
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_800,
        },
        primaryOutput: {
          itemGroup: 'mc-flower-tall',
          amount: 4,
        },
      },
    },
    'tall-flower-fluxed': {
      results: [
        {
          itemGroup: 'mc-flower-tall',
          suffix: 'x6',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-flower-tall',
        },
        {
          item: 'tf-1-12-phyto-gro-fluxed',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 2_400,
        },
      ],
      energy: 9_600,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-fluxed'],
        },
        primaryInput: {
          itemGroup: 'mc-flower-tall',
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 2_400,
        },
        primaryOutput: {
          itemGroup: 'mc-flower-tall',
          amount: 6,
        },
      },
    },
    vines: {
      results: [
        {
          item: 'mc-vines',
          suffix: 'x2',
        },
      ],
      ingredients: [
        {
          item: 'mc-vines',
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
          item: ['mc-vines'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_200,
        },
        primaryOutput: {
          item: ['mc-vines'],
          amount: 2,
        },
      },
    },
    'vines-rich': {
      results: [
        {
          item: 'mc-vines',
          suffix: 'x4',
        },
      ],
      ingredients: [
        {
          item: 'mc-vines',
        },
        {
          item: 'tf-1-12-phyto-gro-rich',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_800,
        },
      ],
      energy: 7_200,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-rich'],
        },
        primaryInput: {
          item: ['mc-vines'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_800,
        },
        primaryOutput: {
          item: ['mc-vines'],
          amount: 4,
        },
      },
    },
    'vines-fluxed': {
      results: [
        {
          item: 'mc-vines',
          suffix: 'x6',
        },
      ],
      ingredients: [
        {
          item: 'mc-vines',
        },
        {
          item: 'tf-1-12-phyto-gro-fluxed',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 2_400,
        },
      ],
      energy: 9_600,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-fluxed'],
        },
        primaryInput: {
          item: ['mc-vines'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 2_400,
        },
        primaryOutput: {
          item: ['mc-vines'],
          amount: 6,
        },
      },
    },
    wheat: {
      results: [
        {
          item: 'mc-wheat',
          suffix: 'x2',
        },
        {
          item: 'mc-seeds',
        },
      ],
      ingredients: [
        {
          item: 'mc-seeds',
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
          item: ['mc-seeds'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_200,
        },
        primaryOutput: {
          item: ['mc-wheat'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['mc-seeds'],
        },
        secondaryChance: 110,
      },
    },
    'wheat-rich': {
      results: [
        {
          item: 'mc-wheat',
          suffix: 'x4',
        },
        {
          item: 'mc-seeds',
        },
      ],
      ingredients: [
        {
          item: 'mc-seeds',
        },
        {
          item: 'tf-1-12-phyto-gro-rich',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_800,
        },
      ],
      energy: 7_200,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-rich'],
        },
        primaryInput: {
          item: ['mc-seeds'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 1_800,
        },
        primaryOutput: {
          item: ['mc-wheat'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['mc-seeds'],
        },
        secondaryChance: 125,
      },
    },
    'wheat-fluxed': {
      results: [
        {
          item: 'mc-wheat',
          suffix: 'x6',
        },
        {
          item: 'mc-seeds',
        },
      ],
      ingredients: [
        {
          item: 'mc-seeds',
        },
        {
          item: 'tf-1-12-phyto-gro-fluxed',
        },
        {
          fluid: 'mc-water',
          fluidAmount: 2_400,
        },
      ],
      energy: 9_600,
      data: {
        secondaryInput: {
          item: ['tf-1-12-phyto-gro-fluxed'],
        },
        primaryInput: {
          item: ['mc-seeds'],
        },
        fluidInput: {
          fluid: 'mc-water',
          amount: 2_400,
        },
        primaryOutput: {
          item: ['mc-wheat'],
          amount: 6,
        },
        secondaryOutput: {
          item: ['mc-seeds'],
        },
        secondaryChance: 150,
      },
    },
  },
} satisfies RecipeType;
