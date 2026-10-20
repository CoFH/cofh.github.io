import type { MachineRecipeLayout, RecipeType } from '../../../types.ts';

export const layout = {
  background: 'te-1-12-pulverizer',
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
  name: 'Pulverizer',
  site: 'te-1-12-docs',
  url: 'pulverizer/',
  withEnergy: true,
  recipes: {
    'basalz-powder': {
      results: [
        {
          item: 'tf-1-12-basalz-powder',
        },
        {
          item: 'tf-1-12-dust-obsidian',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-basalz-rod',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['tf-1-12-basalz-rod'],
        },
        primaryOutput: {
          item: ['tf-1-12-basalz-powder'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-dust-obsidian'],
        },
        secondaryChance: 50,
      },
    },
    'blaze-powder': {
      results: [
        {
          item: 'mc-blaze-powder',
        },
        {
          item: 'tf-1-12-sulfur',
        },
      ],
      ingredients: [
        {
          item: 'mc-blaze-rod',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-blaze-rod'],
        },
        primaryOutput: {
          item: ['mc-blaze-powder'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-sulfur'],
        },
        secondaryChance: 50,
      },
    },
    'blitz-powder': {
      results: [
        {
          item: 'tf-1-12-blitz-powder',
        },
        {
          item: 'tf-1-12-niter',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-blitz-rod',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['tf-1-12-blitz-rod'],
        },
        primaryOutput: {
          item: ['tf-1-12-blitz-powder'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-niter'],
        },
        secondaryChance: 50,
      },
    },
    'blizz-powder': {
      results: [
        {
          item: 'tf-1-12-blizz-powder',
        },
        {
          item: 'mc-snowball',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-blizz-rod',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['tf-1-12-blizz-rod'],
        },
        primaryOutput: {
          item: ['tf-1-12-blizz-powder'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['mc-snowball'],
        },
        secondaryChance: 50,
      },
    },
    'bone-meal': {
      results: [
        {
          item: 'mc-bone-meal',
        },
      ],
      ingredients: [
        {
          item: 'mc-bone',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-bone'],
        },
        primaryOutput: {
          item: ['mc-bone-meal'],
          amount: 6,
        },
      },
    },
    'cobblestone-from-stone': {
      results: [
        {
          item: 'mc-cobblestone',
        },
      ],
      ingredients: [
        {
          item: 'mc-stone',
        },
      ],
      energy: 1_000,
      data: {
        input: {
          item: ['mc-stone'],
        },
        primaryOutput: {
          item: ['mc-cobblestone'],
        },
      },
    },
    'dust-metal-from-ingot': {
      results: [
        {
          itemGroup: 'tf-1-12-dust-metal',
        },
      ],
      ingredients: [
        {
          itemGroup: 'ingot-metal-with-tf2',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          itemGroup: 'ingot-metal-with-tf2',
        },
        primaryOutput: {
          itemGroup: 'tf-1-12-dust-metal',
        },
      },
    },
    'dust-aluminum': {
      results: [
        {
          item: 'tf-1-12-dust-aluminum',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ingot-aluminum',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['tf-1-12-ingot-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-aluminum'],
        },
      },
    },
    'dust-constantan': {
      results: [
        {
          item: 'tf-1-12-dust-constantan',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['tf-1-12-ingot-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-constantan'],
        },
      },
    },
    'dust-bronze': {
      results: [
        {
          item: 'tf-1-12-dust-bronze',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['tf-1-12-ingot-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-bronze'],
        },
      },
    },
    'dust-copper': {
      results: [
        {
          item: 'tf-1-12-dust-copper',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ingot-copper',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['tf-1-12-ingot-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-copper'],
        },
      },
    },
    'dust-charcoal': {
      results: [
        {
          item: 'tf-1-12-dust-charcoal',
        },
      ],
      ingredients: [
        {
          item: 'mc-charcoal',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-charcoal'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-charcoal'],
        },
      },
    },
    'dust-coal': {
      results: [
        {
          item: 'tf-1-12-dust-coal',
        },
        {
          item: 'tf-1-12-sulfur',
        },
      ],
      ingredients: [
        {
          item: 'mc-coal',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-coal'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-coal'],
        },
        secondaryOutput: {
          item: ['tf-1-12-sulfur'],
        },
        secondaryChance: 15,
      },
    },
    'dust-electrum': {
      results: [
        {
          item: 'tf-1-12-dust-electrum',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['tf-1-12-ingot-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-electrum'],
        },
      },
    },
    'dust-enderium': {
      results: [
        {
          item: 'tf-1-12-dust-enderium',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ingot-enderium',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['tf-1-12-ingot-enderium'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-enderium'],
        },
      },
    },
    'dust-fluxed-electrum': {
      results: [
        {
          item: 'ra-1-12-dust-fluxed-electrum',
        },
      ],
      ingredients: [
        {
          item: 'ra-1-12-ingot-fluxed-electrum',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['ra-1-12-ingot-fluxed-electrum'],
        },
        primaryOutput: {
          item: ['ra-1-12-dust-fluxed-electrum'],
        },
      },
    },
    'dust-gold': {
      results: [
        {
          item: 'tf-1-12-dust-gold',
        },
      ],
      ingredients: [
        {
          item: 'mc-ingot-gold',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-ingot-gold'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-gold'],
        },
      },
    },
    'dust-invar': {
      results: [
        {
          item: 'tf-1-12-dust-invar',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ingot-invar',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['tf-1-12-ingot-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-invar'],
        },
      },
    },
    'dust-iridium': {
      results: [
        {
          item: 'tf-1-12-dust-iridium',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ingot-iridium',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['tf-1-12-ingot-iridium'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-iridium'],
        },
      },
    },
    'dust-iron': {
      results: [
        {
          item: 'tf-1-12-dust-iron',
        },
      ],
      ingredients: [
        {
          item: 'mc-ingot-iron',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-ingot-iron'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-iron'],
        },
      },
    },
    'dust-lead': {
      results: [
        {
          item: 'tf-1-12-dust-lead',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ingot-lead',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['tf-1-12-ingot-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-lead'],
        },
      },
    },
    'dust-lumium': {
      results: [
        {
          item: 'tf-1-12-dust-lumium',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ingot-lumium',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['tf-1-12-ingot-lumium'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-lumium'],
        },
      },
    },
    'dust-mithril': {
      results: [
        {
          item: 'tf-1-12-dust-mithril',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ingot-mithril',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['tf-1-12-ingot-mithril'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-mithril'],
        },
      },
    },
    'dust-nickel': {
      results: [
        {
          item: 'tf-1-12-dust-nickel',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ingot-nickel',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['tf-1-12-ingot-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-nickel'],
        },
      },
    },
    'dust-obsidian': {
      results: [
        {
          item: 'tf-1-12-dust-obsidian',
        },
      ],
      ingredients: [
        {
          item: 'mc-obsidian',
        },
      ],
      energy: 6_000,
      data: {
        input: {
          item: ['mc-obsidian'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-obsidian'],
          amount: 4,
        },
      },
    },
    'dust-platinum': {
      results: [
        {
          item: 'tf-1-12-dust-platinum',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ingot-platinum',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['tf-1-12-ingot-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-platinum'],
        },
      },
    },
    'dust-signalum': {
      results: [
        {
          item: 'tf-1-12-dust-signalum',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ingot-signalum',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['tf-1-12-ingot-signalum'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-signalum'],
        },
      },
    },
    'dust-silver': {
      results: [
        {
          item: 'tf-1-12-dust-silver',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ingot-silver',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['tf-1-12-ingot-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-silver'],
        },
      },
    },
    'dust-steel': {
      results: [
        {
          item: 'tf-1-12-dust-steel',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ingot-steel',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['tf-1-12-ingot-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-steel'],
        },
      },
    },
    'dust-tin': {
      results: [
        {
          item: 'tf-1-12-dust-tin',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ingot-tin',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['tf-1-12-ingot-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-tin'],
        },
      },
    },
    'flower-processing-light-blue-orchid': {
      results: [
        {
          item: 'mc-light-blue-dye',
        },
      ],
      ingredients: [
        {
          item: 'mc-flower-blue-orchid',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-flower-blue-orchid'],
        },
        primaryOutput: {
          item: ['mc-light-blue-dye'],
          amount: 4,
        },
      },
    },
    'flower-processing-light-gray-azure-bluet': {
      results: [
        {
          item: 'mc-light-gray-dye',
        },
      ],
      ingredients: [
        {
          item: 'mc-flower-azure-bluet',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-flower-azure-bluet'],
        },
        primaryOutput: {
          item: ['mc-light-gray-dye'],
          amount: 4,
        },
      },
    },
    'flower-processing-light-gray-oxeye-daisy': {
      results: [
        {
          item: 'mc-light-gray-dye',
        },
      ],
      ingredients: [
        {
          item: 'mc-flower-oxeye-daisy',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-flower-oxeye-daisy'],
        },
        primaryOutput: {
          item: ['mc-light-gray-dye'],
          amount: 4,
        },
      },
    },
    'flower-processing-light-gray-tulip': {
      results: [
        {
          item: 'mc-light-gray-dye',
        },
      ],
      ingredients: [
        {
          item: 'mc-flower-tulip-white',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-flower-tulip-white'],
        },
        primaryOutput: {
          item: ['mc-light-gray-dye'],
          amount: 4,
        },
      },
    },
    'flower-processing-magenta-allium': {
      results: [
        {
          item: 'mc-magenta-dye',
        },
      ],
      ingredients: [
        {
          item: 'mc-flower-allium',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-flower-allium'],
        },
        primaryOutput: {
          item: ['mc-magenta-dye'],
          amount: 4,
        },
      },
    },
    'flower-processing-magenta-lilac': {
      results: [
        {
          item: 'mc-magenta-dye',
        },
      ],
      ingredients: [
        {
          item: 'mc-flower-lilac',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-flower-lilac'],
        },
        primaryOutput: {
          item: ['mc-magenta-dye'],
          amount: 4,
        },
      },
    },
    'flower-processing-orange-tulip': {
      results: [
        {
          item: 'mc-orange-dye',
        },
      ],
      ingredients: [
        {
          item: 'mc-flower-tulip-orange',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-flower-tulip-orange'],
        },
        primaryOutput: {
          item: ['mc-orange-dye'],
          amount: 4,
        },
      },
    },
    'flower-processing-pink-peony': {
      results: [
        {
          item: 'mc-pink-dye',
        },
      ],
      ingredients: [
        {
          item: 'mc-flower-peony',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-flower-peony'],
        },
        primaryOutput: {
          item: ['mc-pink-dye'],
          amount: 4,
        },
      },
    },
    'flower-processing-pink-tulip': {
      results: [
        {
          item: 'mc-pink-dye',
        },
      ],
      ingredients: [
        {
          item: 'mc-flower-tulip-pink',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-flower-tulip-pink'],
        },
        primaryOutput: {
          item: ['mc-pink-dye'],
          amount: 4,
        },
      },
    },
    'flower-processing-red-poppy': {
      results: [
        {
          item: 'mc-rose-red',
        },
      ],
      ingredients: [
        {
          item: 'mc-flower-poppy',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-flower-poppy'],
        },
        primaryOutput: {
          item: ['mc-rose-red'],
          amount: 4,
        },
      },
    },
    'flower-processing-red-rose-bush': {
      results: [
        {
          item: 'mc-rose-red',
        },
      ],
      ingredients: [
        {
          item: 'mc-flower-rose-bush',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-flower-rose-bush'],
        },
        primaryOutput: {
          item: ['mc-rose-red'],
          amount: 4,
        },
      },
    },
    'flower-processing-red-tulip': {
      results: [
        {
          item: 'mc-rose-red',
        },
      ],
      ingredients: [
        {
          item: 'mc-flower-tulip-red',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-flower-tulip-red'],
        },
        primaryOutput: {
          item: ['mc-rose-red'],
          amount: 4,
        },
      },
    },
    'flower-processing-yellow-dandelion': {
      results: [
        {
          item: 'mc-dandelion-yellow',
        },
      ],
      ingredients: [
        {
          item: 'mc-flower-dandelion',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-flower-dandelion'],
        },
        primaryOutput: {
          item: ['mc-dandelion-yellow'],
          amount: 4,
        },
      },
    },
    'flower-processing-yellow-sunflower': {
      results: [
        {
          item: 'mc-dandelion-yellow',
        },
      ],
      ingredients: [
        {
          item: 'mc-flower-sunflower',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-flower-sunflower'],
        },
        primaryOutput: {
          item: ['mc-dandelion-yellow'],
          amount: 4,
        },
      },
    },
    'fluid-ore-processing-ender': {
      results: [
        {
          item: 'tf-1-12-clathrate-ender',
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
        primaryOutput: {
          item: ['tf-1-12-clathrate-ender'],
          amount: 3,
        },
      },
    },
    'fluid-ore-processing-glowstone': {
      results: [
        {
          item: 'tf-1-12-clathrate-glowstone',
        },
        {
          item: 'tf-1-12-sulfur',
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
        primaryOutput: {
          item: ['tf-1-12-clathrate-glowstone'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-sulfur'],
        },
        secondaryChance: 30,
      },
    },
    'fluid-ore-processing-oil-sand': {
      results: [
        {
          item: 'tf-1-12-bitumen',
        },
        {
          item: 'tf-1-12-tar',
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
        primaryOutput: {
          item: ['tf-1-12-bitumen'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-tar'],
        },
        secondaryChance: 50,
      },
    },
    'fluid-ore-processing-oil-shale': {
      results: [
        {
          item: 'tf-1-12-bitumen',
        },
        {
          item: 'mc-flint',
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
        primaryOutput: {
          item: ['tf-1-12-bitumen'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['mc-flint'],
        },
        secondaryChance: 50,
      },
    },
    'fluid-ore-processing-redstone': {
      results: [
        {
          item: 'tf-1-12-clathrate-redstone',
        },
        {
          item: 'tf-1-12-cinnabar',
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
        primaryOutput: {
          item: ['tf-1-12-clathrate-redstone'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-cinnabar'],
        },
        secondaryChance: 50,
      },
    },
    'glowstone-dust-from-glowstone': {
      results: [
        {
          item: 'mc-glowstone-dust',
        },
      ],
      ingredients: [
        {
          item: 'mc-glowstone',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['mc-glowstone'],
        },
        primaryOutput: {
          item: ['mc-glowstone-dust'],
          amount: 4,
        },
      },
    },
    'gravel-from-cobblestone': {
      results: [
        {
          item: 'mc-gravel',
        },
        {
          item: 'mc-sand',
        },
      ],
      ingredients: [
        {
          item: 'mc-cobblestone',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['mc-cobblestone'],
        },
        primaryOutput: {
          item: ['mc-gravel'],
        },
        secondaryOutput: {
          item: ['mc-sand'],
        },
        secondaryChance: 15,
      },
    },
    'gravel-from-netherrack': {
      results: [
        {
          item: 'mc-gravel',
        },
        {
          item: 'tf-1-12-sulfur',
        },
      ],
      ingredients: [
        {
          item: 'mc-netherrack',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['mc-netherrack'],
        },
        primaryOutput: {
          item: ['mc-gravel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-sulfur'],
        },
        secondaryChance: 15,
      },
    },
    'magma-cream-from-block': {
      results: [
        {
          item: 'mc-magma-cream',
        },
      ],
      ingredients: [
        {
          item: 'mc-magma-block',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['mc-magma-block'],
        },
        primaryOutput: {
          item: ['mc-magma-cream'],
          amount: 4,
        },
      },
    },
    'ore-processing-aluminum': {
      results: [
        {
          item: 'tf-1-12-dust-aluminum',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-dust-iron',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-aluminum',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-ore-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-aluminum'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-dust-iron'],
        },
        secondaryChance: 10,
      },
    },
    'ore-processing-coal': {
      results: [
        {
          item: 'mc-coal',
        },
        {
          item: 'tf-1-12-dust-coal',
        },
      ],
      ingredients: [
        {
          item: 'mc-ore-coal',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['mc-ore-coal'],
        },
        primaryOutput: {
          item: ['mc-coal'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-dust-coal'],
        },
        secondaryChance: 25,
      },
    },
    'ore-processing-copper': {
      results: [
        {
          item: 'tf-1-12-dust-copper',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-dust-gold',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-copper',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-ore-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-copper'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-dust-gold'],
        },
        secondaryChance: 10,
      },
    },
    'ore-processing-diamond': {
      results: [
        {
          item: 'mc-diamond',
        },
      ],
      ingredients: [
        {
          item: 'mc-ore-diamond',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['mc-ore-diamond'],
        },
        primaryOutput: {
          item: ['mc-diamond'],
          amount: 2,
        },
      },
    },
    'ore-processing-emerald': {
      results: [
        {
          item: 'mc-emerald',
        },
      ],
      ingredients: [
        {
          item: 'mc-ore-emerald',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['mc-ore-emerald'],
        },
        primaryOutput: {
          item: ['mc-emerald'],
          amount: 2,
        },
      },
    },
    'ore-processing-gold': {
      results: [
        {
          item: 'tf-1-12-dust-gold',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-cinnabar',
        },
      ],
      ingredients: [
        {
          item: 'mc-ore-gold',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['mc-ore-gold'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-gold'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-cinnabar'],
        },
        secondaryChance: 10,
      },
    },
    'ore-processing-iridium': {
      results: [
        {
          item: 'tf-1-12-dust-iridium',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-dust-platinum',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-iridium',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-ore-iridium'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-iridium'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-dust-platinum'],
        },
        secondaryChance: 10,
      },
    },
    'ore-processing-iron': {
      results: [
        {
          item: 'tf-1-12-dust-iron',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-dust-nickel',
        },
      ],
      ingredients: [
        {
          item: 'mc-ore-iron',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['mc-ore-iron'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-iron'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-dust-nickel'],
        },
        secondaryChance: 10,
      },
    },
    'ore-processing-lapis-lazuli': {
      results: [
        {
          item: 'mc-lapis-lazuli',
        },
        {
          item: 'tf-1-12-sulfur',
        },
      ],
      ingredients: [
        {
          item: 'mc-ore-lapis-lazuli',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['mc-ore-lapis-lazuli'],
        },
        primaryOutput: {
          item: ['mc-lapis-lazuli'],
          amount: 10,
        },
        secondaryOutput: {
          item: ['tf-1-12-sulfur'],
        },
        secondaryChance: 20,
      },
    },
    'ore-processing-lead': {
      results: [
        {
          item: 'tf-1-12-dust-lead',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-dust-silver',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-lead',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-ore-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-lead'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-dust-silver'],
        },
        secondaryChance: 10,
      },
    },
    'ore-processing-mithril': {
      results: [
        {
          item: 'tf-1-12-dust-mithril',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-dust-gold',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-mithril',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-ore-mithril'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-mithril'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-dust-gold'],
        },
        secondaryChance: 10,
      },
    },
    'ore-processing-nether-quartz': {
      results: [
        {
          item: 'mc-nether-quartz',
        },
        {
          item: 'tf-1-12-sulfur',
        },
      ],
      ingredients: [
        {
          item: 'mc-ore-nether-quartz',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['mc-ore-nether-quartz'],
        },
        primaryOutput: {
          item: ['mc-nether-quartz'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-sulfur'],
        },
        secondaryChance: 15,
      },
    },
    'ore-processing-nickel': {
      results: [
        {
          item: 'tf-1-12-dust-nickel',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-dust-platinum',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-nickel',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-ore-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-nickel'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-dust-platinum'],
        },
        secondaryChance: 10,
      },
    },
    'ore-processing-platinum': {
      results: [
        {
          item: 'tf-1-12-dust-platinum',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-dust-iridium',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-platinum',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-ore-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-platinum'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-dust-iridium'],
        },
        secondaryChance: 10,
      },
    },
    'ore-processing-redstone': {
      results: [
        {
          item: 'mc-redstone',
        },
        {
          item: 'tf-1-12-cinnabar',
        },
      ],
      ingredients: [
        {
          item: 'mc-ore-redstone',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['mc-ore-redstone'],
        },
        primaryOutput: {
          item: ['mc-redstone'],
          amount: 6,
        },
        secondaryOutput: {
          item: ['tf-1-12-cinnabar'],
        },
        secondaryChance: 25,
      },
    },
    'ore-processing-silver': {
      results: [
        {
          item: 'tf-1-12-dust-silver',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-dust-lead',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-silver',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-ore-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-silver'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-dust-lead'],
        },
        secondaryChance: 10,
      },
    },
    'ore-processing-tin': {
      results: [
        {
          item: 'tf-1-12-dust-tin',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-dust-iron',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-tin',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['tf-1-12-ore-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-dust-tin'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-dust-iron'],
        },
        secondaryChance: 10,
      },
    },
    'prismarine-crystals-from-shard': {
      results: [
        {
          item: 'mc-prismarine-crystals',
        },
      ],
      ingredients: [
        {
          item: 'mc-prismarine-shard',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          item: ['mc-prismarine-shard'],
        },
        primaryOutput: {
          item: ['mc-prismarine-crystals'],
        },
      },
    },
    'recycling-armor-helmet-diamond': {
      results: [
        {
          item: 'mc-diamond',
        },
      ],
      ingredients: [
        {
          item: 'mc-armor-helmet-diamond',
        },
      ],
      energy: 6_000,
      data: {
        input: {
          item: ['mc-armor-helmet-diamond'],
        },
        primaryOutput: {
          item: ['mc-diamond'],
          amount: 2,
        },
      },
    },
    'recycling-armor-chestplate-diamond': {
      results: [
        {
          item: 'mc-diamond',
        },
      ],
      ingredients: [
        {
          item: 'mc-armor-chestplate-diamond',
        },
      ],
      energy: 6_000,
      data: {
        input: {
          item: ['mc-armor-chestplate-diamond'],
        },
        primaryOutput: {
          item: ['mc-diamond'],
          amount: 4,
        },
      },
    },
    'recycling-armor-leggings-diamond': {
      results: [
        {
          item: 'mc-diamond',
        },
      ],
      ingredients: [
        {
          item: 'mc-armor-leggings-diamond',
        },
      ],
      energy: 6_000,
      data: {
        input: {
          item: ['mc-armor-leggings-diamond'],
        },
        primaryOutput: {
          item: ['mc-diamond'],
          amount: 3,
        },
      },
    },
    'recycling-armor-boots-diamond': {
      results: [
        {
          item: 'mc-diamond',
        },
      ],
      ingredients: [
        {
          item: 'mc-armor-boots-diamond',
        },
      ],
      energy: 6_000,
      data: {
        input: {
          item: ['mc-armor-boots-diamond'],
        },
        primaryOutput: {
          item: ['mc-diamond'],
          amount: 2,
        },
      },
    },
    'recycling-brick-stairs': {
      results: [
        {
          item: 'mc-brick',
        },
      ],
      ingredients: [
        {
          item: 'mc-brick-stairs',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-brick-stairs'],
        },
        primaryOutput: {
          item: ['mc-brick'],
          amount: 3,
        },
      },
    },
    'recycling-bricks': {
      results: [
        {
          item: 'mc-brick',
        },
      ],
      ingredients: [
        {
          item: 'mc-bricks',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-bricks'],
        },
        primaryOutput: {
          item: ['mc-brick'],
          amount: 4,
        },
      },
    },
    'recycling-bricks-slab': {
      results: [
        {
          item: 'mc-brick',
        },
      ],
      ingredients: [
        {
          item: 'mc-bricks-slab',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-bricks-slab'],
        },
        primaryOutput: {
          item: ['mc-brick'],
          amount: 2,
        },
      },
    },
    'recycling-clay-block': {
      results: [
        {
          item: 'mc-clay',
        },
      ],
      ingredients: [
        {
          item: 'mc-clay-block',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-clay-block'],
        },
        primaryOutput: {
          item: ['mc-clay'],
          amount: 4,
        },
      },
    },
    'recycling-concrete': {
      results: [
        {
          itemGroup: 'mc-concrete-powder',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-concrete',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          itemGroup: 'mc-concrete',
        },
        primaryOutput: {
          itemGroup: 'mc-concrete-powder',
        },
      },
    },
    'recycling-flower-pot': {
      results: [
        {
          item: 'mc-brick',
        },
      ],
      ingredients: [
        {
          item: 'mc-flower-pot',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['mc-flower-pot'],
        },
        primaryOutput: {
          item: ['mc-brick'],
          amount: 3,
        },
      },
    },
    'recycling-glass': {
      results: [
        {
          item: 'mc-sand',
        },
      ],
      ingredients: [
        {
          item: 'mc-glass',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['mc-glass'],
        },
        primaryOutput: {
          item: ['mc-sand'],
        },
      },
    },
    'recycling-glass-bottle': {
      results: [
        {
          item: 'mc-sand',
        },
      ],
      ingredients: [
        {
          item: 'mc-glass-bottle',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['mc-glass-bottle'],
        },
        primaryOutput: {
          item: ['mc-sand'],
        },
      },
    },
    'recycling-glass-stained': {
      results: [
        {
          item: 'mc-sand',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-glass-stained',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          itemGroup: 'mc-glass-stained',
        },
        primaryOutput: {
          item: ['mc-sand'],
        },
      },
    },
    'recycling-horse-armor-diamond': {
      results: [
        {
          item: 'mc-diamond',
        },
      ],
      ingredients: [
        {
          item: 'mc-horse-armor-diamond',
        },
      ],
      energy: 6_000,
      data: {
        input: {
          item: ['mc-horse-armor-diamond'],
        },
        primaryOutput: {
          item: ['mc-diamond'],
          amount: 2,
        },
      },
    },
    'recycling-jukebox': {
      results: [
        {
          item: 'mc-diamond',
        },
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          item: 'mc-jukebox',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['mc-jukebox'],
        },
        primaryOutput: {
          item: ['mc-diamond'],
        },
        secondaryOutput: {
          item: ['tf-1-12-sawdust'],
          amount: 4,
        },
        secondaryChance: 100,
      },
    },
    'recycling-nether-brick': {
      results: [
        {
          item: 'mc-nether-brick-item',
        },
      ],
      ingredients: [
        {
          item: 'mc-nether-brick',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-nether-brick'],
        },
        primaryOutput: {
          item: ['mc-nether-brick-item'],
          amount: 4,
        },
      },
    },
    'recycling-nether-brick-slab': {
      results: [
        {
          item: 'mc-nether-brick-item',
        },
      ],
      ingredients: [
        {
          item: 'mc-nether-brick-slab',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-nether-brick-slab'],
        },
        primaryOutput: {
          item: ['mc-nether-brick-item'],
          amount: 2,
        },
      },
    },
    'recycling-nether-brick-stairs': {
      results: [
        {
          item: 'mc-nether-brick-item',
        },
      ],
      ingredients: [
        {
          item: 'mc-nether-brick-stairs',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-nether-brick-stairs'],
        },
        primaryOutput: {
          item: ['mc-nether-brick-item'],
          amount: 3,
        },
      },
    },
    'recycling-nether-quartz-block': {
      results: [
        {
          item: 'mc-nether-quartz',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-nether-quartz-block',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          itemGroup: 'mc-nether-quartz-block',
        },
        primaryOutput: {
          item: ['mc-nether-quartz'],
          amount: 4,
        },
      },
    },
    'recycling-nether-quartz-slab': {
      results: [
        {
          item: 'mc-nether-quartz',
        },
      ],
      ingredients: [
        {
          item: 'mc-nether-quartz-slab',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-nether-quartz-slab'],
        },
        primaryOutput: {
          item: ['mc-nether-quartz'],
          amount: 2,
        },
      },
    },
    'recycling-nether-quartz-stairs': {
      results: [
        {
          item: 'mc-nether-quartz',
        },
      ],
      ingredients: [
        {
          item: 'mc-nether-quartz-stairs',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-nether-quartz-stairs'],
        },
        primaryOutput: {
          item: ['mc-nether-quartz'],
          amount: 3,
        },
      },
    },
    'recycling-note-block': {
      results: [
        {
          item: 'mc-redstone',
        },
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          item: 'mc-note-block',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['mc-note-block'],
        },
        primaryOutput: {
          item: ['mc-redstone'],
        },
        secondaryOutput: {
          item: ['tf-1-12-sawdust'],
          amount: 4,
        },
        secondaryChance: 100,
      },
    },
    'recycling-sandstone': {
      results: [
        {
          item: 'mc-sand',
        },
        {
          item: 'tf-1-12-niter',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-sandstone',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          itemGroup: 'mc-sandstone',
        },
        primaryOutput: {
          item: ['mc-sand'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-niter'],
        },
        secondaryChance: 40,
      },
    },
    'recycling-sandstone-slab': {
      results: [
        {
          item: 'mc-sand',
        },
        {
          item: 'tf-1-12-niter',
        },
      ],
      ingredients: [
        {
          item: 'mc-sandstone-slab',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-sandstone-slab'],
        },
        primaryOutput: {
          item: ['mc-sand'],
        },
        secondaryOutput: {
          item: ['tf-1-12-niter'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-sandstone-stairs': {
      results: [
        {
          item: 'mc-sand',
        },
        {
          item: 'tf-1-12-niter',
        },
      ],
      ingredients: [
        {
          item: 'mc-sandstone-stairs',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-sandstone-stairs'],
        },
        primaryOutput: {
          item: ['mc-sand'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-niter'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-sandstone-red': {
      results: [
        {
          item: 'mc-sand-red',
        },
        {
          item: 'tf-1-12-niter',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-sandstone-red',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          itemGroup: 'mc-sandstone-red',
        },
        primaryOutput: {
          item: ['mc-sand-red'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-niter'],
        },
        secondaryChance: 40,
      },
    },
    'recycling-sandstone-red-slab': {
      results: [
        {
          item: 'mc-sand-red',
        },
        {
          item: 'tf-1-12-niter',
        },
      ],
      ingredients: [
        {
          item: 'mc-sandstone-red-slab',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-sandstone-red-slab'],
        },
        primaryOutput: {
          item: ['mc-sand-red'],
        },
        secondaryOutput: {
          item: ['tf-1-12-niter'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-sandstone-red-stairs': {
      results: [
        {
          item: 'mc-sand-red',
        },
        {
          item: 'tf-1-12-niter',
        },
      ],
      ingredients: [
        {
          item: 'mc-sandstone-red-stairs',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-sandstone-red-stairs'],
        },
        primaryOutput: {
          item: ['mc-sand-red'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-niter'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-terracotta': {
      results: [
        {
          item: 'mc-clay',
        },
      ],
      ingredients: [
        {
          item: 'mc-terracotta',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: [
            'mc-terracotta',
            'mc-terracotta-white',
            'mc-terracotta-orange',
            'mc-terracotta-magenta',
            'mc-terracotta-light-blue',
            'mc-terracotta-yellow',
            'mc-terracotta-lime',
            'mc-terracotta-pink',
            'mc-terracotta-gray',
            'mc-terracotta-light-gray',
            'mc-terracotta-cyan',
            'mc-terracotta-purple',
            'mc-terracotta-blue',
            'mc-terracotta-brown',
            'mc-terracotta-green',
            'mc-terracotta-red',
            'mc-terracotta-black',
          ],
          randomCycle: true,
        },
        primaryOutput: {
          item: ['mc-clay'],
          amount: 4,
        },
      },
    },
    'recycling-tool-axe-diamond': {
      results: [
        {
          item: 'mc-diamond',
        },
      ],
      ingredients: [
        {
          item: 'mc-tool-axe-diamond',
        },
      ],
      energy: 6_000,
      data: {
        input: {
          item: ['mc-tool-axe-diamond'],
        },
        primaryOutput: {
          item: ['mc-diamond'],
        },
      },
    },
    'recycling-tool-axe-wood': {
      results: [
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          item: 'mc-tool-axe-wood',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-tool-axe-wood'],
        },
        primaryOutput: {
          item: ['tf-1-12-sawdust'],
          amount: 2,
        },
      },
    },
    'recycling-tool-excavator-diamond': {
      results: [
        {
          item: 'mc-diamond',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-excavator-diamond',
        },
      ],
      energy: 6_000,
      data: {
        input: {
          item: ['tf-1-12-tool-excavator-diamond'],
        },
        primaryOutput: {
          item: ['mc-diamond'],
        },
      },
    },
    'recycling-tool-excavator-wood': {
      results: [
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-excavator-wood',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['tf-1-12-tool-excavator-wood'],
        },
        primaryOutput: {
          item: ['tf-1-12-sawdust'],
          amount: 2,
        },
      },
    },
    'recycling-tool-fishing-rod': {
      results: [
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          item: 'mc-tool-fishing-rod',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-tool-fishing-rod'],
        },
        primaryOutput: {
          item: ['tf-1-12-sawdust'],
          amount: 2,
        },
      },
    },
    'recycling-tool-fishing-rod-diamond': {
      results: [
        {
          item: 'mc-diamond',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-fishing-rod-diamond',
        },
      ],
      energy: 6_000,
      data: {
        input: {
          item: ['tf-1-12-tool-fishing-rod-diamond'],
        },
        primaryOutput: {
          item: ['mc-diamond'],
        },
      },
    },
    'recycling-tool-hammer-diamond': {
      results: [
        {
          item: 'mc-diamond',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hammer-diamond',
        },
      ],
      energy: 6_000,
      data: {
        input: {
          item: ['tf-1-12-tool-hammer-diamond'],
        },
        primaryOutput: {
          item: ['mc-diamond'],
          amount: 2,
        },
      },
    },
    'recycling-tool-hammer-wood': {
      results: [
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hammer-wood',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['tf-1-12-tool-hammer-wood'],
        },
        primaryOutput: {
          item: ['tf-1-12-sawdust'],
          amount: 4,
        },
      },
    },
    'recycling-tool-hoe-diamond': {
      results: [
        {
          item: 'mc-diamond',
        },
      ],
      ingredients: [
        {
          item: 'mc-tool-hoe-diamond',
        },
      ],
      energy: 6_000,
      data: {
        input: {
          item: ['mc-tool-hoe-diamond'],
        },
        primaryOutput: {
          item: ['mc-diamond'],
        },
      },
    },
    'recycling-tool-hoe-wood': {
      results: [
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          item: 'mc-tool-hoe-wood',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-tool-hoe-wood'],
        },
        primaryOutput: {
          item: ['tf-1-12-sawdust'],
          amount: 2,
        },
      },
    },
    'recycling-tool-pickaxe-diamond': {
      results: [
        {
          item: 'mc-diamond',
        },
      ],
      ingredients: [
        {
          item: 'mc-tool-pickaxe-diamond',
        },
      ],
      energy: 6_000,
      data: {
        input: {
          item: ['mc-tool-pickaxe-diamond'],
        },
        primaryOutput: {
          item: ['mc-diamond'],
        },
      },
    },
    'recycling-tool-pickaxe-wood': {
      results: [
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          item: 'mc-tool-pickaxe-wood',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-tool-pickaxe-wood'],
        },
        primaryOutput: {
          item: ['tf-1-12-sawdust'],
          amount: 2,
        },
      },
    },
    'recycling-tool-shears-diamond': {
      results: [
        {
          item: 'mc-diamond',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shears-diamond',
        },
      ],
      energy: 6_000,
      data: {
        input: {
          item: ['tf-1-12-tool-shears-diamond'],
        },
        primaryOutput: {
          item: ['mc-diamond'],
        },
      },
    },
    'recycling-tool-shears-wood': {
      results: [
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shears-wood',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['tf-1-12-tool-shears-wood'],
        },
        primaryOutput: {
          item: ['tf-1-12-sawdust'],
          amount: 2,
        },
      },
    },
    'recycling-tool-shovel-diamond': {
      results: [
        {
          item: 'mc-diamond',
        },
      ],
      ingredients: [
        {
          item: 'mc-tool-shovel-diamond',
        },
      ],
      energy: 6_000,
      data: {
        input: {
          item: ['mc-tool-shovel-diamond'],
        },
        primaryOutput: {
          item: ['mc-diamond'],
        },
      },
    },
    'recycling-tool-shovel-wood': {
      results: [
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          item: 'mc-tool-shovel-wood',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-tool-shovel-wood'],
        },
        primaryOutput: {
          item: ['tf-1-12-sawdust'],
          amount: 2,
        },
      },
    },
    'recycling-tool-sickle-diamond': {
      results: [
        {
          item: 'mc-diamond',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-sickle-diamond',
        },
      ],
      energy: 6_000,
      data: {
        input: {
          item: ['tf-1-12-tool-sickle-diamond'],
        },
        primaryOutput: {
          item: ['mc-diamond'],
        },
      },
    },
    'recycling-tool-sickle-wood': {
      results: [
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-sickle-wood',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['tf-1-12-tool-sickle-wood'],
        },
        primaryOutput: {
          item: ['tf-1-12-sawdust'],
          amount: 2,
        },
      },
    },
    'recycling-weapon-bow': {
      results: [
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          item: 'mc-bow',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-bow'],
        },
        primaryOutput: {
          item: ['tf-1-12-sawdust'],
          amount: 2,
        },
      },
    },
    'recycling-weapon-bow-diamond': {
      results: [
        {
          item: 'mc-diamond',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-bow-diamond',
        },
      ],
      energy: 6_000,
      data: {
        input: {
          item: ['tf-1-12-weapon-bow-diamond'],
        },
        primaryOutput: {
          item: ['mc-diamond'],
        },
      },
    },
    'recycling-weapon-shield': {
      results: [
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          item: 'mc-weapon-shield',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-weapon-shield'],
        },
        primaryOutput: {
          item: ['tf-1-12-sawdust'],
          amount: 6,
        },
      },
    },
    'recycling-weapon-shield-diamond': {
      results: [
        {
          item: 'mc-diamond',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-shield-diamond',
        },
      ],
      energy: 6_000,
      data: {
        input: {
          item: ['tf-1-12-weapon-shield-diamond'],
        },
        primaryOutput: {
          item: ['mc-diamond'],
          amount: 3,
        },
      },
    },
    'recycling-weapon-sword-diamond': {
      results: [
        {
          item: 'mc-diamond',
        },
      ],
      ingredients: [
        {
          item: 'mc-weapon-sword-diamond',
        },
      ],
      energy: 6_000,
      data: {
        input: {
          item: ['mc-weapon-sword-diamond'],
        },
        primaryOutput: {
          item: ['mc-diamond'],
        },
      },
    },
    'recycling-weapon-sword-wood': {
      results: [
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          item: 'mc-weapon-sword-wood',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          item: ['mc-weapon-sword-wood'],
        },
        primaryOutput: {
          item: ['tf-1-12-sawdust'],
          amount: 2,
        },
      },
    },
    'recycling-wool': {
      results: [
        {
          item: 'mc-string',
        },
        {
          itemGroup: 'tf-1-12-pigment',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-wool',
        },
      ],
      energy: 3_000,
      data: {
        input: {
          itemGroup: 'mc-wool',
        },
        primaryOutput: {
          item: ['mc-string'],
          amount: 4,
        },
        secondaryOutput: {
          itemGroup: 'tf-1-12-pigment',
        },
        secondaryChance: 15,
      },
    },
    'sand-from-gravel': {
      results: [
        {
          item: 'mc-sand',
        },
        {
          item: 'mc-flint',
        },
      ],
      ingredients: [
        {
          item: 'mc-gravel',
        },
      ],
      energy: 4_000,
      data: {
        input: {
          item: ['mc-gravel'],
        },
        primaryOutput: {
          item: ['mc-sand'],
        },
        secondaryOutput: {
          item: ['mc-flint'],
        },
        secondaryChance: 15,
      },
    },
    'sawdust-from-wood-log': {
      results: [
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-wood-log',
        },
      ],
      energy: 2_000,
      data: {
        input: {
          itemGroup: 'mc-wood-log',
        },
        primaryOutput: {
          item: ['tf-1-12-sawdust'],
          amount: 8,
        },
      },
    },
    'sawdust-from-wood-planks': {
      results: [
        {
          item: 'tf-1-12-sawdust',
        },
      ],
      ingredients: [
        {
          itemGroup: 'mc-wood-planks',
        },
      ],
      energy: 1_000,
      data: {
        input: {
          itemGroup: 'mc-wood-planks',
        },
        primaryOutput: {
          item: ['tf-1-12-sawdust'],
          amount: 2,
        },
      },
    },
  },
} satisfies RecipeType;
