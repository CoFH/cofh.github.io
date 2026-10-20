import type { MachineRecipeLayout, RecipeType } from '../../../types.ts';

export const layout = {
  background: 'te-1-12-crucible',
  width: 148,
  height: 140,
  elements: [
    { slot: 'input', top: 38, left: 10 },
    { tank: 'output', top: 10, left: 106, size: 10000, gauge: 148 },
  ],
} satisfies MachineRecipeLayout;

export default {
  name: 'Magma Crucible',
  site: 'te-1-12-docs',
  url: 'magma-crucible/',
  withEnergy: true,
  recipes: {
    aerotheum: {
      results: [
        {
          fluid: 'tf-1-12-aerotheum',
          fluidAmount: 250,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-aerotheum',
        },
      ],
      energy: 8_000,
      data: {
        input: {
          item: ['tf-1-12-dust-aerotheum'],
        },
        output: {
          fluid: 'tf-1-12-aerotheum',
          amount: 250,
        },
      },
    },
    'biocrude-from-biomass': {
      results: [
        {
          fluid: 'tf-1-12-biocrude',
          fluidAmount: 100,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-biomass',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-biomass'],
        },
        output: {
          fluid: 'tf-1-12-biocrude',
          amount: 100,
        },
      },
    },
    'biocrude-from-biomass-rich': {
      results: [
        {
          fluid: 'tf-1-12-biocrude',
          fluidAmount: 150,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-biomass-rich',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-biomass-rich'],
        },
        output: {
          fluid: 'tf-1-12-biocrude',
          amount: 150,
        },
      },
    },
    'biocrude-from-bioblend': {
      results: [
        {
          fluid: 'tf-1-12-biocrude',
          fluidAmount: 100,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bioblend',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-bioblend'],
        },
        output: {
          fluid: 'tf-1-12-biocrude',
          amount: 100,
        },
      },
    },
    'biocrude-from-bioblend-rich': {
      results: [
        {
          fluid: 'tf-1-12-biocrude',
          fluidAmount: 150,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bioblend-rich',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-bioblend-rich'],
        },
        output: {
          fluid: 'tf-1-12-biocrude',
          amount: 150,
        },
      },
    },
    coal: {
      results: [
        {
          fluid: 'tf-1-12-coal',
          fluidAmount: 100,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-coal',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-dust-coal'],
        },
        output: {
          fluid: 'tf-1-12-coal',
          amount: 100,
        },
      },
    },
    'crude-oil-from-bitumen': {
      results: [
        {
          fluid: 'tf-1-12-crude-oil',
          fluidAmount: 250,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-bitumen',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['tf-1-12-bitumen'],
        },
        output: {
          fluid: 'tf-1-12-crude-oil',
          amount: 250,
        },
      },
    },
    cryotheum: {
      results: [
        {
          fluid: 'tf-1-12-cryotheum',
          fluidAmount: 250,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-cryotheum',
        },
      ],
      energy: 8_000,
      data: {
        input: {
          item: ['tf-1-12-dust-cryotheum'],
        },
        output: {
          fluid: 'tf-1-12-cryotheum',
          amount: 250,
        },
      },
    },
    ender: {
      results: [
        {
          fluid: 'tf-1-12-ender',
          fluidAmount: 250,
        },
      ],
      ingredients: [
        {
          item: 'mc-ender-pearl',
        },
      ],
      energy: 20_000,
      data: {
        input: {
          item: ['mc-ender-pearl'],
        },
        output: {
          fluid: 'tf-1-12-ender',
          amount: 250,
        },
      },
    },
    'ender-from-clathrate': {
      results: [
        {
          fluid: 'tf-1-12-ender',
          fluidAmount: 250,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-clathrate-ender',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['tf-1-12-clathrate-ender'],
        },
        output: {
          fluid: 'tf-1-12-ender',
          amount: 250,
        },
      },
    },
    'fluid-ore-processing-ender': {
      results: [
        {
          fluid: 'tf-1-12-ender',
          fluidAmount: 1_000,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-fluid-ender',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-ore-fluid-ender'],
        },
        output: {
          fluid: 'tf-1-12-ender',
          amount: 1_000,
        },
      },
    },
    'fluid-ore-processing-glowstone': {
      results: [
        {
          fluid: 'tf-1-12-glowstone',
          fluidAmount: 1_000,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-fluid-glowstone',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-ore-fluid-glowstone'],
        },
        output: {
          fluid: 'tf-1-12-glowstone',
          amount: 1_000,
        },
      },
    },
    'fluid-ore-processing-oil-sand': {
      results: [
        {
          fluid: 'tf-1-12-crude-oil',
          fluidAmount: 1_000,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-oil-sand',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-oil-sand', 'tf-1-12-oil-sand-red'],
        },
        output: {
          fluid: 'tf-1-12-crude-oil',
          amount: 1_000,
        },
      },
    },
    'fluid-ore-processing-oil-shale': {
      results: [
        {
          fluid: 'tf-1-12-crude-oil',
          fluidAmount: 1_000,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-oil-shale',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-oil-shale'],
        },
        output: {
          fluid: 'tf-1-12-crude-oil',
          amount: 1_000,
        },
      },
    },
    'fluid-ore-processing-redstone': {
      results: [
        {
          fluid: 'tf-1-12-redstone',
          fluidAmount: 1_000,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-fluid-redstone',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-ore-fluid-redstone'],
        },
        output: {
          fluid: 'tf-1-12-redstone',
          amount: 1_000,
        },
      },
    },
    glowstone: {
      results: [
        {
          fluid: 'tf-1-12-glowstone',
          fluidAmount: 250,
        },
      ],
      ingredients: [
        {
          item: 'mc-glowstone-dust',
        },
      ],
      energy: 20_000,
      data: {
        input: {
          item: ['mc-glowstone-dust'],
        },
        output: {
          fluid: 'tf-1-12-glowstone',
          amount: 250,
        },
      },
    },
    'glowstone-from-block': {
      results: [
        {
          fluid: 'tf-1-12-glowstone',
          fluidAmount: 1_000,
        },
      ],
      ingredients: [
        {
          item: 'mc-glowstone',
        },
      ],
      energy: 80_000,
      data: {
        input: {
          item: ['mc-glowstone'],
        },
        output: {
          fluid: 'tf-1-12-glowstone',
          amount: 1_000,
        },
      },
    },
    'glowstone-from-clathrate': {
      results: [
        {
          fluid: 'tf-1-12-glowstone',
          fluidAmount: 250,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-clathrate-glowstone',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['tf-1-12-clathrate-glowstone'],
        },
        output: {
          fluid: 'tf-1-12-glowstone',
          amount: 250,
        },
      },
    },
    'lava-from-andesite': {
      results: [
        {
          fluid: 'mc-lava',
          fluidAmount: 1_000,
        },
      ],
      ingredients: [
        {
          item: 'mc-andesite',
        },
      ],
      energy: 300_000,
      data: {
        input: {
          item: ['mc-andesite'],
        },
        output: {
          fluid: 'mc-lava',
          amount: 1_000,
        },
      },
    },
    'lava-from-andesite-polished': {
      results: [
        {
          fluid: 'mc-lava',
          fluidAmount: 1_000,
        },
      ],
      ingredients: [
        {
          item: 'mc-andesite-polished',
        },
      ],
      energy: 300_000,
      data: {
        input: {
          item: ['mc-andesite-polished'],
        },
        output: {
          fluid: 'mc-lava',
          amount: 1_000,
        },
      },
    },
    'lava-from-cobblestone': {
      results: [
        {
          fluid: 'mc-lava',
          fluidAmount: 1_000,
        },
      ],
      ingredients: [
        {
          item: 'mc-cobblestone',
        },
      ],
      energy: 300_000,
      data: {
        input: {
          item: ['mc-cobblestone'],
        },
        output: {
          fluid: 'mc-lava',
          amount: 1_000,
        },
      },
    },
    'lava-from-diorite': {
      results: [
        {
          fluid: 'mc-lava',
          fluidAmount: 1_000,
        },
      ],
      ingredients: [
        {
          item: 'mc-diorite',
        },
      ],
      energy: 300_000,
      data: {
        input: {
          item: ['mc-diorite'],
        },
        output: {
          fluid: 'mc-lava',
          amount: 1_000,
        },
      },
    },
    'lava-from-diorite-polished': {
      results: [
        {
          fluid: 'mc-lava',
          fluidAmount: 1_000,
        },
      ],
      ingredients: [
        {
          item: 'mc-diorite-polished',
        },
      ],
      energy: 300_000,
      data: {
        input: {
          item: ['mc-diorite-polished'],
        },
        output: {
          fluid: 'mc-lava',
          amount: 1_000,
        },
      },
    },
    'lava-from-granite': {
      results: [
        {
          fluid: 'mc-lava',
          fluidAmount: 1_000,
        },
      ],
      ingredients: [
        {
          item: 'mc-granite',
        },
      ],
      energy: 300_000,
      data: {
        input: {
          item: ['mc-granite'],
        },
        output: {
          fluid: 'mc-lava',
          amount: 1_000,
        },
      },
    },
    'lava-from-granite-polished': {
      results: [
        {
          fluid: 'mc-lava',
          fluidAmount: 1_000,
        },
      ],
      ingredients: [
        {
          item: 'mc-granite-polished',
        },
      ],
      energy: 300_000,
      data: {
        input: {
          item: ['mc-granite-polished'],
        },
        output: {
          fluid: 'mc-lava',
          amount: 1_000,
        },
      },
    },
    'lava-from-magma-block': {
      results: [
        {
          fluid: 'mc-lava',
          fluidAmount: 1_000,
        },
      ],
      ingredients: [
        {
          item: 'mc-magma-block',
        },
      ],
      energy: 40_000,
      data: {
        input: {
          item: ['mc-magma-block'],
        },
        output: {
          fluid: 'mc-lava',
          amount: 1_000,
        },
      },
    },
    'lava-from-netherrack': {
      results: [
        {
          fluid: 'mc-lava',
          fluidAmount: 1_000,
        },
      ],
      ingredients: [
        {
          item: 'mc-netherrack',
        },
      ],
      energy: 60_000,
      data: {
        input: {
          item: ['mc-netherrack'],
        },
        output: {
          fluid: 'mc-lava',
          amount: 1_000,
        },
      },
    },
    'lava-from-obsidian': {
      results: [
        {
          fluid: 'mc-lava',
          fluidAmount: 1_000,
        },
      ],
      ingredients: [
        {
          item: 'mc-obsidian',
        },
      ],
      energy: 300_000,
      data: {
        input: {
          item: ['mc-obsidian'],
        },
        output: {
          fluid: 'mc-lava',
          amount: 1_000,
        },
      },
    },
    'lava-from-stone': {
      results: [
        {
          fluid: 'mc-lava',
          fluidAmount: 1_000,
        },
      ],
      ingredients: [
        {
          item: 'mc-stone',
        },
      ],
      energy: 300_000,
      data: {
        input: {
          item: ['mc-stone'],
        },
        output: {
          fluid: 'mc-lava',
          amount: 1_000,
        },
      },
    },
    petrotheum: {
      results: [
        {
          fluid: 'tf-1-12-petrotheum',
          fluidAmount: 250,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-petrotheum',
        },
      ],
      energy: 8_000,
      data: {
        input: {
          item: ['tf-1-12-dust-petrotheum'],
        },
        output: {
          fluid: 'tf-1-12-petrotheum',
          amount: 250,
        },
      },
    },
    pyrotheum: {
      results: [
        {
          fluid: 'tf-1-12-pyrotheum',
          fluidAmount: 250,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-pyrotheum',
        },
      ],
      energy: 8_000,
      data: {
        input: {
          item: ['tf-1-12-dust-pyrotheum'],
        },
        output: {
          fluid: 'tf-1-12-pyrotheum',
          amount: 250,
        },
      },
    },
    redstone: {
      results: [
        {
          fluid: 'tf-1-12-redstone',
          fluidAmount: 100,
        },
      ],
      ingredients: [
        {
          item: 'mc-redstone',
        },
      ],
      energy: 8_000,
      data: {
        input: {
          item: ['mc-redstone'],
        },
        output: {
          fluid: 'tf-1-12-redstone',
          amount: 100,
        },
      },
    },
    'redstone-from-block': {
      results: [
        {
          fluid: 'tf-1-12-redstone',
          fluidAmount: 900,
        },
      ],
      ingredients: [
        {
          item: 'mc-storage-block-redstone',
        },
      ],
      energy: 72_000,
      data: {
        input: {
          item: ['mc-storage-block-redstone'],
        },
        output: {
          fluid: 'tf-1-12-redstone',
          amount: 900,
        },
      },
    },
    'redstone-from-clathrate': {
      results: [
        {
          fluid: 'tf-1-12-redstone',
          fluidAmount: 250,
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-clathrate-redstone',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['tf-1-12-clathrate-redstone'],
        },
        output: {
          fluid: 'tf-1-12-redstone',
          amount: 250,
        },
      },
    },
    'water-from-ice': {
      results: [
        {
          fluid: 'mc-water',
          fluidAmount: 1_000,
        },
      ],
      ingredients: [
        {
          item: 'mc-ice',
        },
      ],
      energy: 1_600,
      data: {
        input: {
          item: ['mc-ice'],
        },
        output: {
          fluid: 'mc-water',
          amount: 1_000,
        },
      },
    },
    'water-from-snow': {
      results: [
        {
          fluid: 'mc-water',
          fluidAmount: 500,
        },
      ],
      ingredients: [
        {
          item: 'mc-snow',
        },
      ],
      energy: 800,
      data: {
        input: {
          item: ['mc-snow'],
        },
        output: {
          fluid: 'mc-water',
          amount: 500,
        },
      },
    },
    'water-from-snowball': {
      results: [
        {
          fluid: 'mc-water',
          fluidAmount: 125,
        },
      ],
      ingredients: [
        {
          item: 'mc-snowball',
        },
      ],
      energy: 200,
      data: {
        input: {
          item: ['mc-snowball'],
        },
        output: {
          fluid: 'mc-water',
          amount: 125,
        },
      },
    },
  },
} satisfies RecipeType;
