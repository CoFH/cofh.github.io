import type { MachineRecipeLayout, RecipeType } from '../../../types.ts';

export const layout = {
  background: 'te-1-12-redstone-furnace',
  width: 164,
  height: 84,
  elements: [
    { slot: 'input', top: 10, left: 10 },
    { slot: 'output', top: 28, left: 114 },
  ],
} satisfies MachineRecipeLayout;

export default {
  name: 'Redstone Furnace',
  site: 'te-1-12-docs',
  url: 'redstone-furnace/',
  withEnergy: true,
  recipes: {
    'cactus-green': {
      results: [
        {
          item: 'mc-cactus-green',
        },
      ],
      ingredients: [
        {
          item: 'mc-cactus',
        },
      ],
      energy: 1_000,
      data: {
        input: {
          item: ['mc-cactus'],
        },
        output: {
          item: ['mc-cactus-green'],
        },
      },
    },
    food: {
      results: [
        {
          itemGroup: 'mc-food-cooked',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-food-raw',
        },
      ],
      energy: 1_000,
      data: {
        input: {
          itemGroup: 'mc-food-raw',
        },
        output: {
          itemGroup: 'mc-food-cooked',
        },
      },
    },
    'ingot-from-dust': {
      results: [
        {
          html: 'Metal Ingot',
        },
      ],
      ingredients: [
        {
          html: '<a href="https://minecraft.wiki/w/Smelting">Smeltable</a> Metal Dust',
        },
      ],
      energy: 1_500,
      data: {
        input: {
          item: [
            'tf-1-12-dust-iron',
            'tf-1-12-dust-gold',
            'tf-1-12-dust-copper',
            'tf-1-12-dust-tin',
            'tf-1-12-dust-silver',
            'tf-1-12-dust-lead',
            'tf-1-12-dust-nickel',
            'tf-1-12-dust-platinum',
            'tf-1-12-dust-iridium',
            'tf-1-12-dust-mithril',
            'tf-1-12-dust-electrum',
            'tf-1-12-dust-invar',
            'tf-1-12-dust-bronze',
            'tf-1-12-dust-constantan',
          ],
        },
        output: {
          item: [
            'mc-ingot-iron',
            'mc-ingot-gold',
            'tf-1-12-ingot-copper',
            'tf-1-12-ingot-tin',
            'tf-1-12-ingot-silver',
            'tf-1-12-ingot-lead',
            'tf-1-12-ingot-nickel',
            'tf-1-12-ingot-platinum',
            'tf-1-12-ingot-iridium',
            'tf-1-12-ingot-mithril',
            'tf-1-12-ingot-electrum',
            'tf-1-12-ingot-invar',
            'tf-1-12-ingot-bronze',
            'tf-1-12-ingot-constantan',
          ],
        },
      },
    },
    leather: {
      results: [
        {
          item: 'mc-leather',
        },
      ],
      ingredients: [
        {
          item: 'mc-rotten-flesh',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['mc-rotten-flesh'],
          amount: 4,
        },
        output: {
          item: ['mc-leather'],
        },
      },
    },
    'ore-processing-lapis-lazuli': {
      results: [
        {
          item: 'mc-lapis-lazuli',
        },
      ],
      ingredients: [
        {
          item: 'mc-ore-lapis-lazuli',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-ore-lapis-lazuli'],
        },
        output: {
          item: ['mc-lapis-lazuli'],
          amount: 4,
        },
      },
    },
    'ore-processing-redstone': {
      results: [
        {
          item: 'mc-redstone',
        },
      ],
      ingredients: [
        {
          item: 'mc-ore-redstone',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-ore-redstone'],
        },
        output: {
          item: ['mc-redstone'],
          amount: 4,
        },
      },
    },
  },
} satisfies RecipeType;
