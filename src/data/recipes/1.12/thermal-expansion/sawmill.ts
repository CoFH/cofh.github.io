import type { MachineRecipeLayout, RecipeType } from '../../../types.ts';

export const layout = {
  background: 'te-1-12-sawmill',
  width: 164,
  height: 112,
  elements: [
    { slot: 'input', top: 16, left: 10 },
    { slot: 'primaryOutput', top: 18, left: 114 },
    { slot: 'secondaryOutput', top: 70, left: 114 },
    { label: 'secondaryChance', top: 80, right: 56, align: 'right' },
  ],
} satisfies MachineRecipeLayout;

export default {
  name: 'Sawmill',
  site: 'te-1-12-docs',
  url: 'sawmill/',
  withEnergy: true,
  recipes: {
    'biomass-from-beetroot': {
      results: [
        {
          item: 'tf-1-12-biomass',
        },
        {
          item: 'mc-beetroot-seeds',
        },
      ],
      ingredients: [
        {
          item: 'mc-beetroot',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-beetroot'],
          amount: 8,
        },
        primaryOutput: {
          item: ['tf-1-12-biomass'],
        },
        secondaryOutput: {
          item: ['mc-beetroot-seeds'],
        },
        secondaryChance: 50,
      },
    },
    'biomass-from-cactus': {
      results: [
        {
          item: 'tf-1-12-biomass',
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
        primaryOutput: {
          item: ['tf-1-12-biomass'],
        },
      },
    },
    'biomass-from-carrot': {
      results: [
        {
          item: 'tf-1-12-biomass',
        },
      ],
      ingredients: [
        {
          item: 'mc-carrot',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-carrot'],
          amount: 8,
        },
        primaryOutput: {
          item: ['tf-1-12-biomass'],
        },
      },
    },
    'biomass-from-lily-pad': {
      results: [
        {
          item: 'tf-1-12-biomass',
        },
      ],
      ingredients: [
        {
          item: 'mc-lily-pad',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-lily-pad'],
          amount: 8,
        },
        primaryOutput: {
          item: ['tf-1-12-biomass'],
        },
      },
    },
    'biomass-from-melon': {
      results: [
        {
          item: 'tf-1-12-biomass',
        },
        {
          item: 'mc-melon-seeds',
        },
      ],
      ingredients: [
        {
          item: 'mc-melon',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-melon'],
          amount: 4,
        },
        primaryOutput: {
          item: ['tf-1-12-biomass'],
        },
        secondaryOutput: {
          item: ['mc-melon-seeds'],
        },
        secondaryChance: 50,
      },
    },
    'biomass-from-potato': {
      results: [
        {
          item: 'tf-1-12-biomass',
        },
      ],
      ingredients: [
        {
          item: 'mc-potato',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-potato'],
          amount: 8,
        },
        primaryOutput: {
          item: ['tf-1-12-biomass'],
        },
      },
    },
    'biomass-from-pumpkin': {
      results: [
        {
          item: 'tf-1-12-biomass',
        },
        {
          item: 'mc-pumpkin-seeds',
        },
      ],
      ingredients: [
        {
          item: 'mc-pumpkin',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-pumpkin'],
          amount: 4,
        },
        primaryOutput: {
          item: ['tf-1-12-biomass'],
        },
        secondaryOutput: {
          item: ['mc-pumpkin-seeds'],
        },
        secondaryChance: 50,
      },
    },
    'biomass-from-sapling': {
      results: [
        {
          item: 'tf-1-12-biomass',
        },
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-sapling',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          itemGroup: 'mc-sapling',
          amount: 4,
        },
        primaryOutput: {
          item: ['tf-1-12-biomass'],
        },
        secondaryOutput: {
          item: ['tf-1-12-sawdust'],
        },
        secondaryChance: 50,
      },
    },
    'biomass-from-sugar-canes': {
      results: [
        {
          item: 'tf-1-12-biomass',
        },
        {
          item: 'mc-sugar',
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
          amount: 8,
        },
        primaryOutput: {
          item: ['tf-1-12-biomass'],
        },
        secondaryOutput: {
          item: ['mc-sugar'],
          amount: 2,
        },
        secondaryChance: 100,
      },
    },
    'biomass-from-vines': {
      results: [
        {
          item: 'tf-1-12-biomass',
        },
      ],
      ingredients: [
        {
          item: 'mc-vines',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-vines'],
          amount: 8,
        },
        primaryOutput: {
          item: ['tf-1-12-biomass'],
        },
      },
    },
    'biomass-from-wheat': {
      results: [
        {
          item: 'tf-1-12-biomass',
        },
        {
          item: 'mc-seeds',
        },
      ],
      ingredients: [
        {
          item: 'mc-wheat',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-wheat'],
          amount: 8,
        },
        primaryOutput: {
          item: ['tf-1-12-biomass'],
        },
        secondaryOutput: {
          item: ['mc-seeds'],
        },
        secondaryChance: 50,
      },
    },
    'recycling-armor-helmet-leather': {
      results: [
        {
          item: 'mc-leather',
        },
      ],
      ingredients: [
        {
          item: 'mc-armor-helmet-leather',
        },
      ],
      energy: 1_500,
      data: {
        input: {
          item: ['mc-armor-helmet-leather'],
        },
        primaryOutput: {
          item: ['mc-leather'],
          amount: 2,
        },
      },
    },
    'recycling-armor-chestplate-leather': {
      results: [
        {
          item: 'mc-leather',
        },
      ],
      ingredients: [
        {
          item: 'mc-armor-chestplate-leather',
        },
      ],
      energy: 1_500,
      data: {
        input: {
          item: ['mc-armor-chestplate-leather'],
        },
        primaryOutput: {
          item: ['mc-leather'],
          amount: 4,
        },
      },
    },
    'recycling-armor-leggings-leather': {
      results: [
        {
          item: 'mc-leather',
        },
      ],
      ingredients: [
        {
          item: 'mc-armor-leggings-leather',
        },
      ],
      energy: 1_500,
      data: {
        input: {
          item: ['mc-armor-leggings-leather'],
        },
        primaryOutput: {
          item: ['mc-leather'],
          amount: 3,
        },
      },
    },
    'recycling-armor-boots-leather': {
      results: [
        {
          item: 'mc-leather',
        },
      ],
      ingredients: [
        {
          item: 'mc-armor-boots-leather',
        },
      ],
      energy: 1_500,
      data: {
        input: {
          item: ['mc-armor-boots-leather'],
        },
        primaryOutput: {
          item: ['mc-leather'],
          amount: 2,
        },
      },
    },
    'recycling-boat': {
      results: [
        {
          itemGroup: 'mc-wood-planks',
        },
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-boat',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          itemGroup: 'mc-boat',
        },
        primaryOutput: {
          itemGroup: 'mc-wood-planks',
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-sawdust'],
        },
        secondaryChance: 125,
      },
    },
    'recycling-door': {
      results: [
        {
          itemGroup: 'mc-wood-planks',
        },
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-door-wood',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          itemGroup: 'mc-door-wood',
        },
        primaryOutput: {
          itemGroup: 'mc-wood-planks',
        },
        secondaryOutput: {
          item: ['tf-1-12-sawdust'],
        },
        secondaryChance: 50,
      },
    },
    'recycling-fence': {
      results: [
        {
          itemGroup: 'mc-wood-planks',
        },
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-fence',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          itemGroup: 'mc-fence',
          amount: 2,
        },
        primaryOutput: {
          itemGroup: 'mc-wood-planks',
        },
        secondaryOutput: {
          item: ['tf-1-12-sawdust'],
        },
        secondaryChance: 25,
      },
    },
    'recycling-fence-gate': {
      results: [
        {
          itemGroup: 'mc-wood-planks',
        },
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-fence-gate',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          itemGroup: 'mc-fence-gate',
        },
        primaryOutput: {
          itemGroup: 'mc-wood-planks',
        },
        secondaryOutput: {
          item: ['tf-1-12-sawdust'],
        },
        secondaryChance: 125,
      },
    },
    'recycling-saddle': {
      results: [
        {
          item: 'mc-leather',
        },
      ],
      ingredients: [
        {
          item: 'mc-saddle',
        },
      ],
      energy: 1_500,
      data: {
        input: {
          item: ['mc-saddle'],
        },
        primaryOutput: {
          item: ['mc-leather'],
          amount: 3,
        },
      },
    },
    'recycling-wood-stairs': {
      results: [
        {
          itemGroup: 'mc-wood-planks',
        },
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-wood-stairs',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          itemGroup: 'mc-wood-stairs',
          amount: 2,
        },
        primaryOutput: {
          itemGroup: 'mc-wood-planks',
        },
        secondaryOutput: {
          item: ['tf-1-12-sawdust'],
        },
        secondaryChance: 25,
      },
    },
    'wood-processing': {
      results: [
        {
          itemGroup: 'mc-wood-planks',
        },
        {
          item: 'tf-1-12-sawdust',
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
          itemGroup: 'mc-wood-log',
        },
        primaryOutput: {
          itemGroup: 'mc-wood-planks',
          amount: 6,
        },
        secondaryOutput: {
          item: ['tf-1-12-sawdust'],
        },
        secondaryChance: 100,
      },
    },
  },
} satisfies RecipeType;
