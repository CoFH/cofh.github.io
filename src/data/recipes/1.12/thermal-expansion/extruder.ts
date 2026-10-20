import type { MachineRecipeLayout, RecipeType } from '../../../types.ts';

export const layout = {
  background: 'te-1-12-extruder',
  width: 208,
  height: 116,
  elements: [
    { tank: 'hotInput', top: 10, left: 10, height: 60, size: 4000, gauge: 208 },
    { tank: 'coldInput', top: 10, left: 54, height: 60, size: 4000, gauge: 208 },
    { slot: 'output', top: 42, left: 158 },
  ],
} satisfies MachineRecipeLayout;

export default {
  name: 'Igneous Extruder',
  site: 'te-1-12-docs',
  url: 'igneous-extruder/',
  withEnergy: true,
  recipes: {
    cobblestone: {
      results: [
        {
          item: 'mc-cobblestone',
        },
      ],
      ingredients: [
        {
          fluid: 'mc-lava',
          fluidAmount: 0,
        },
        {
          fluid: 'mc-water',
          fluidAmount: 0,
        },
      ],
      energy: 400,
      data: {
        hotInput: {
          fluid: 'mc-lava',
          amount: 0,
        },
        coldInput: {
          fluid: 'mc-water',
          amount: 0,
        },
        output: {
          item: ['mc-cobblestone'],
        },
      },
    },
    stone: {
      results: [
        {
          item: 'mc-stone',
        },
      ],
      ingredients: [
        {
          fluid: 'mc-lava',
          fluidAmount: 0,
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_000,
        },
      ],
      energy: 800,
      data: {
        hotInput: {
          fluid: 'mc-lava',
          amount: 0,
        },
        coldInput: {
          fluid: 'mc-water',
          amount: 1_000,
        },
        output: {
          item: ['mc-stone'],
        },
      },
    },
    obsidian: {
      results: [
        {
          item: 'mc-obsidian',
        },
      ],
      ingredients: [
        {
          fluid: 'mc-lava',
          fluidAmount: 1_000,
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_000,
        },
      ],
      energy: 1_600,
      data: {
        hotInput: {
          fluid: 'mc-lava',
          amount: 1_000,
        },
        coldInput: {
          fluid: 'mc-water',
          amount: 1_000,
        },
        output: {
          item: ['mc-obsidian'],
        },
      },
    },
    granite: {
      results: [
        {
          item: 'mc-granite',
        },
      ],
      ingredients: [
        {
          fluid: 'mc-lava',
          fluidAmount: 0,
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_000,
        },
      ],
      energy: 800,
      data: {
        hotInput: {
          fluid: 'mc-lava',
          amount: 0,
        },
        coldInput: {
          fluid: 'mc-water',
          amount: 1_000,
        },
        output: {
          item: ['mc-granite'],
        },
      },
    },
    diorite: {
      results: [
        {
          item: 'mc-diorite',
        },
      ],
      ingredients: [
        {
          fluid: 'mc-lava',
          fluidAmount: 0,
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_000,
        },
      ],
      energy: 800,
      data: {
        hotInput: {
          fluid: 'mc-lava',
          amount: 0,
        },
        coldInput: {
          fluid: 'mc-water',
          amount: 1_000,
        },
        output: {
          item: ['mc-diorite'],
        },
      },
    },
    andesite: {
      results: [
        {
          item: 'mc-andesite',
        },
      ],
      ingredients: [
        {
          fluid: 'mc-lava',
          fluidAmount: 0,
        },
        {
          fluid: 'mc-water',
          fluidAmount: 1_000,
        },
      ],
      energy: 800,
      data: {
        hotInput: {
          fluid: 'mc-lava',
          amount: 0,
        },
        coldInput: {
          fluid: 'mc-water',
          amount: 1_000,
        },
        output: {
          item: ['mc-andesite'],
        },
      },
    },
  },
} satisfies RecipeType;
