import type { MachineRecipeLayout, RecipeType } from '../../../types.ts';

export const layout = {
  background: 'te-1-12-transposer-empty',
  width: 164,
  height: 140,
  elements: [
    { slot: 'input', top: 30, left: 18 },
    { tank: 'fluidOutput', top: 10, left: 122, size: 1000, gauge: 164 },
    { slot: 'itemOutput', top: 90, left: 18 },
  ],
} satisfies MachineRecipeLayout;

export default {
  name: 'Fluid Transposer',
  site: 'te-1-12-docs',
  url: 'fluid-transposer/',
  withEnergy: true,
  recipes: {
    'bucket-aerotheum': {
      results: [
        {
          fluid: 'tf-1-12-aerotheum',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-aerotheum',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-aerotheum'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-aerotheum',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-biocrude': {
      results: [
        {
          fluid: 'tf-1-12-biocrude',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-biocrude',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-biocrude'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-biocrude',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-coal': {
      results: [
        {
          fluid: 'tf-1-12-coal',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-coal',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-coal'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-coal',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-creosote-oil': {
      results: [
        {
          fluid: 'tf-1-12-creosote-oil',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-creosote-oil',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-creosote-oil'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-creosote-oil',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-crude-oil': {
      results: [
        {
          fluid: 'tf-1-12-crude-oil',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-crude-oil',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-crude-oil'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-crude-oil',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-cryotheum': {
      results: [
        {
          fluid: 'tf-1-12-cryotheum',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-cryotheum',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-cryotheum'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-cryotheum',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-ender': {
      results: [
        {
          fluid: 'tf-1-12-ender',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-ender',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-ender'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-ender',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-experience': {
      results: [
        {
          fluid: 'tf-1-12-experience',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-experience',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-experience'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-experience',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-glowstone': {
      results: [
        {
          fluid: 'tf-1-12-glowstone',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-glowstone',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-glowstone'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-glowstone',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-grassoline': {
      results: [
        {
          fluid: 'tf-1-12-grassoline',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-grassoline',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-grassoline'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-grassoline',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-mana': {
      results: [
        {
          fluid: 'tf-1-12-mana',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-mana',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-mana'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-mana',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-mushroom-stew': {
      results: [
        {
          fluid: 'tf-1-12-mushroom-stew',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-mushroom-stew',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-mushroom-stew'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-mushroom-stew',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-naphtha': {
      results: [
        {
          fluid: 'tf-1-12-naphtha',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-naphtha',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-naphtha'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-naphtha',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-petrotheum': {
      results: [
        {
          fluid: 'tf-1-12-petrotheum',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-petrotheum',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-petrotheum'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-petrotheum',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-pyrotheum': {
      results: [
        {
          fluid: 'tf-1-12-pyrotheum',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-pyrotheum',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-pyrotheum'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-pyrotheum',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-redstone': {
      results: [
        {
          fluid: 'tf-1-12-redstone',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-redstone',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-redstone'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-redstone',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-refined-fuel': {
      results: [
        {
          fluid: 'tf-1-12-refined-fuel',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-refined-fuel',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-refined-fuel'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-refined-fuel',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-resin': {
      results: [
        {
          fluid: 'tf-1-12-resin',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-resin',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-resin'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-resin',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-sap': {
      results: [
        {
          fluid: 'tf-1-12-sap',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-sap',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-sap'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-sap',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-seed-oil': {
      results: [
        {
          fluid: 'tf-1-12-seed-oil',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-seed-oil',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-seed-oil'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-seed-oil',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-steam': {
      results: [
        {
          fluid: 'tf-1-12-steam',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-steam',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-steam'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-steam',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-syrup': {
      results: [
        {
          fluid: 'tf-1-12-syrup',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-syrup',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-syrup'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-syrup',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'bucket-tree-oil': {
      results: [
        {
          fluid: 'tf-1-12-tree-oil',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-bucket',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bucket-tree-oil',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['tf-1-12-bucket-tree-oil'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-tree-oil',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-bucket'],
        },
      },
    },
    'mushroom-stew': {
      results: [
        {
          fluid: 'tf-1-12-mushroom-stew',
          fluidAmount: 250,
        },
        {
          item: 'mc-bowl',
        },
      ],
      ingredients: [
        {
          item: 'mc-mushroom-stew',
        },
      ],
      energy: 400,
      data: {
        input: {
          item: ['mc-mushroom-stew'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-mushroom-stew',
          amount: 250,
        },
        itemOutput: {
          item: ['mc-bowl'],
        },
      },
    },
    'seed-oil-from-beetroot-seeds': {
      results: [
        {
          fluid: 'tf-1-12-seed-oil',
          fluidAmount: 50,
        },
      ],
      ingredients: [
        {
          item: 'mc-beetroot-seeds',
        },
      ],
      energy: 1_600,
      data: {
        input: {
          item: ['mc-beetroot-seeds'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-seed-oil',
          amount: 50,
        },
      },
    },
    'seed-oil-from-melon-seeds': {
      results: [
        {
          fluid: 'tf-1-12-seed-oil',
          fluidAmount: 50,
        },
      ],
      ingredients: [
        {
          item: 'mc-melon-seeds',
        },
      ],
      energy: 1_600,
      data: {
        input: {
          item: ['mc-melon-seeds'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-seed-oil',
          amount: 50,
        },
      },
    },
    'seed-oil-from-pumpkin-seeds': {
      results: [
        {
          fluid: 'tf-1-12-seed-oil',
          fluidAmount: 50,
        },
      ],
      ingredients: [
        {
          item: 'mc-pumpkin-seeds',
        },
      ],
      energy: 1_600,
      data: {
        input: {
          item: ['mc-pumpkin-seeds'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-seed-oil',
          amount: 50,
        },
      },
    },
    'seed-oil-from-seeds': {
      results: [
        {
          fluid: 'tf-1-12-seed-oil',
          fluidAmount: 50,
        },
      ],
      ingredients: [
        {
          item: 'mc-seeds',
        },
      ],
      energy: 1_600,
      data: {
        input: {
          item: ['mc-seeds'],
        },
        fluidOutput: {
          fluid: 'tf-1-12-seed-oil',
          amount: 50,
        },
      },
    },
    'water-from-cactus': {
      results: [
        {
          fluid: 'mc-water',
          fluidAmount: 500,
        },
      ],
      ingredients: [
        {
          item: 'mc-cactus',
        },
      ],
      energy: 2_400,
      data: {
        input: {
          item: ['mc-cactus'],
        },
        fluidOutput: {
          fluid: 'mc-water',
          amount: 500,
        },
      },
    },
    'water-from-sponge': {
      results: [
        {
          fluid: 'mc-water',
          fluidAmount: 1_000,
        },
        {
          item: 'mc-sponge',
        },
      ],
      ingredients: [
        {
          item: 'mc-sponge-wet',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['mc-sponge-wet'],
        },
        fluidOutput: {
          fluid: 'mc-water',
          amount: 1_000,
        },
        itemOutput: {
          item: ['mc-sponge'],
        },
      },
    },
  },
} satisfies RecipeType;
