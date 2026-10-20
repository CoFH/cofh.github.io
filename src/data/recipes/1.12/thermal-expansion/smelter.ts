import type { MachineRecipeLayout, RecipeType } from '../../../types.ts';

export const layout = {
  background: 'te-1-12-smelter',
  width: 208,
  height: 112,
  elements: [
    { slot: 'primaryInput', top: 16, left: 10 },
    { slot: 'secondaryInput', top: 16, left: 54 },
    { slot: 'primaryOutput', top: 18, left: 158 },
    { slot: 'secondaryOutput', top: 70, left: 158 },
    { label: 'secondaryChance', top: 80, right: 56, align: 'right' },
  ],
} satisfies MachineRecipeLayout;

export default {
  name: 'Induction Smelter',
  site: 'te-1-12-docs',
  url: 'induction-smelter/',
  withEnergy: true,
  recipes: {
    'dust-smelting': {
      results: [
        {
          itemGroup: 'ingot-metal-with-tf2',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tf-1-12-dust-metal',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 1_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          itemGroup: 'tf-1-12-dust-metal',
        },
        primaryOutput: {
          itemGroup: 'ingot-metal-with-tf2',
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'dust-smelting-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-aluminum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 1_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-dust-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'dust-smelting-bronze': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-bronze',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 1_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-dust-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'dust-smelting-constantan': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-constantan',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 1_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-dust-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'dust-smelting-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-copper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 1_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-dust-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'dust-smelting-electrum': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-electrum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 1_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-dust-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'dust-smelting-enderium': {
      results: [
        {
          item: 'tf-1-12-ingot-enderium',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-enderium',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 1_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-dust-enderium'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-enderium'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'dust-smelting-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 1_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-dust-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'dust-smelting-invar': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-invar',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 1_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-dust-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'dust-smelting-iridium': {
      results: [
        {
          item: 'tf-1-12-ingot-iridium',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-iridium',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 1_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-dust-iridium'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-iridium'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'dust-smelting-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 1_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-dust-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'dust-smelting-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-lead',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 1_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-dust-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'dust-smelting-lumium': {
      results: [
        {
          item: 'tf-1-12-ingot-lumium',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-lumium',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 1_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-dust-lumium'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lumium'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'dust-smelting-mithril': {
      results: [
        {
          item: 'tf-1-12-ingot-mithril',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-mithril',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 1_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-dust-mithril'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-mithril'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'dust-smelting-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-nickel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 1_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-dust-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'dust-smelting-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-platinum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 1_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-dust-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'dust-smelting-signalum': {
      results: [
        {
          item: 'tf-1-12-ingot-signalum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-signalum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 1_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-dust-signalum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-signalum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'dust-smelting-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-silver',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 1_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-dust-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'dust-smelting-steel': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-steel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 1_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-dust-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'dust-smelting-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-tin',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 1_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-dust-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'hardened-glass': {
      results: [
        {
          item: 'tf-1-12-hardened-glass',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-lead',
        },
        {
          item: 'tf-1-12-dust-obsidian',
        },
      ],
      energy: 8_000,
      data: {
        primaryInput: {
          item: ['tf-1-12-dust-lead'],
          amount: 1,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-obsidian'],
          amount: 4,
        },
        primaryOutput: {
          item: ['tf-1-12-hardened-glass'],
          amount: 2,
        },
      },
    },
    'hardened-glass-metal': {
      results: [
        {
          html: '<a href="/docs/1.12/thermal-foundation/hardened-glass/">Metal Hardened Glass</a>',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tf-1-12-hardened-glass',
        },
        {
          html: 'Metal Dust',
        },
      ],
      energy: 6_000,
      data: {
        primaryInput: {
          randomCycle: true,
          itemGroup: 'tf-1-12-hardened-glass',
          amount: 2,
        },
        secondaryInput: {
          item: [
            'tf-1-12-dust-copper',
            'tf-1-12-dust-tin',
            'tf-1-12-dust-silver',
            'tf-1-12-dust-lead',
            'tf-1-12-dust-aluminum',
            'tf-1-12-dust-nickel',
            'tf-1-12-dust-platinum',
            'tf-1-12-dust-iridium',
            'tf-1-12-dust-mithril',
            'tf-1-12-dust-steel',
            'tf-1-12-dust-electrum',
            'tf-1-12-dust-invar',
            'tf-1-12-dust-bronze',
            'tf-1-12-dust-constantan',
            'tf-1-12-dust-signalum',
            'tf-1-12-dust-lumium',
            'tf-1-12-dust-enderium',
          ],
        },
        primaryOutput: {
          item: [
            'tf-1-12-hardened-glass-copper',
            'tf-1-12-hardened-glass-tin',
            'tf-1-12-hardened-glass-silver',
            'tf-1-12-hardened-glass',
            'tf-1-12-hardened-glass-aluminum',
            'tf-1-12-hardened-glass-nickel',
            'tf-1-12-hardened-glass-platinum',
            'tf-1-12-hardened-glass-iridium',
            'tf-1-12-hardened-glass-mithril',
            'tf-1-12-hardened-glass-steel',
            'tf-1-12-hardened-glass-electrum',
            'tf-1-12-hardened-glass-invar',
            'tf-1-12-hardened-glass-bronze',
            'tf-1-12-hardened-glass-constantan',
            'tf-1-12-hardened-glass-signalum',
            'tf-1-12-hardened-glass-lumium',
            'tf-1-12-hardened-glass-enderium',
          ],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 15,
      },
    },
    'hardened-glass-aluminum': {
      results: [
        {
          item: 'tf-1-12-hardened-glass-aluminum',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tf-1-12-hardened-glass',
        },
        {
          item: 'tf-1-12-dust-aluminum',
        },
      ],
      energy: 6_000,
      data: {
        primaryInput: {
          randomCycle: true,
          itemGroup: 'tf-1-12-hardened-glass',
          amount: 2,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-hardened-glass-aluminum'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 15,
      },
    },
    'hardened-glass-bronze': {
      results: [
        {
          item: 'tf-1-12-hardened-glass-bronze',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tf-1-12-hardened-glass',
        },
        {
          item: 'tf-1-12-dust-bronze',
        },
      ],
      energy: 6_000,
      data: {
        primaryInput: {
          randomCycle: true,
          itemGroup: 'tf-1-12-hardened-glass',
          amount: 2,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-hardened-glass-bronze'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 15,
      },
    },
    'hardened-glass-constantan': {
      results: [
        {
          item: 'tf-1-12-hardened-glass-constantan',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tf-1-12-hardened-glass',
        },
        {
          item: 'tf-1-12-dust-constantan',
        },
      ],
      energy: 6_000,
      data: {
        primaryInput: {
          randomCycle: true,
          itemGroup: 'tf-1-12-hardened-glass',
          amount: 2,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-hardened-glass-constantan'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 15,
      },
    },
    'hardened-glass-copper': {
      results: [
        {
          item: 'tf-1-12-hardened-glass-copper',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tf-1-12-hardened-glass',
        },
        {
          item: 'tf-1-12-dust-copper',
        },
      ],
      energy: 6_000,
      data: {
        primaryInput: {
          randomCycle: true,
          itemGroup: 'tf-1-12-hardened-glass',
          amount: 2,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-hardened-glass-copper'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 15,
      },
    },
    'hardened-glass-electrum': {
      results: [
        {
          item: 'tf-1-12-hardened-glass-electrum',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tf-1-12-hardened-glass',
        },
        {
          item: 'tf-1-12-dust-electrum',
        },
      ],
      energy: 6_000,
      data: {
        primaryInput: {
          randomCycle: true,
          itemGroup: 'tf-1-12-hardened-glass',
          amount: 2,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-hardened-glass-electrum'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 15,
      },
    },
    'hardened-glass-enderium': {
      results: [
        {
          item: 'tf-1-12-hardened-glass-enderium',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tf-1-12-hardened-glass',
        },
        {
          item: 'tf-1-12-dust-enderium',
        },
      ],
      energy: 6_000,
      data: {
        primaryInput: {
          randomCycle: true,
          itemGroup: 'tf-1-12-hardened-glass',
          amount: 2,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-enderium'],
        },
        primaryOutput: {
          item: ['tf-1-12-hardened-glass-enderium'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 15,
      },
    },
    'hardened-glass-invar': {
      results: [
        {
          item: 'tf-1-12-hardened-glass-invar',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tf-1-12-hardened-glass',
        },
        {
          item: 'tf-1-12-dust-invar',
        },
      ],
      energy: 6_000,
      data: {
        primaryInput: {
          randomCycle: true,
          itemGroup: 'tf-1-12-hardened-glass',
          amount: 2,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-hardened-glass-invar'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 15,
      },
    },
    'hardened-glass-iridium': {
      results: [
        {
          item: 'tf-1-12-hardened-glass-iridium',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tf-1-12-hardened-glass',
        },
        {
          item: 'tf-1-12-dust-iridium',
        },
      ],
      energy: 6_000,
      data: {
        primaryInput: {
          randomCycle: true,
          itemGroup: 'tf-1-12-hardened-glass',
          amount: 2,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-iridium'],
        },
        primaryOutput: {
          item: ['tf-1-12-hardened-glass-iridium'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 15,
      },
    },
    'hardened-glass-lead': {
      results: [
        {
          item: 'tf-1-12-hardened-glass',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tf-1-12-hardened-glass',
        },
        {
          item: 'tf-1-12-dust-lead',
        },
      ],
      energy: 6_000,
      data: {
        primaryInput: {
          randomCycle: true,
          itemGroup: 'tf-1-12-hardened-glass',
          amount: 2,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-hardened-glass'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 15,
      },
    },
    'hardened-glass-lumium': {
      results: [
        {
          item: 'tf-1-12-hardened-glass-lumium',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tf-1-12-hardened-glass',
        },
        {
          item: 'tf-1-12-dust-lumium',
        },
      ],
      energy: 6_000,
      data: {
        primaryInput: {
          randomCycle: true,
          itemGroup: 'tf-1-12-hardened-glass',
          amount: 2,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-lumium'],
        },
        primaryOutput: {
          item: ['tf-1-12-hardened-glass-lumium'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 15,
      },
    },
    'hardened-glass-mithril': {
      results: [
        {
          item: 'tf-1-12-hardened-glass-mithril',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tf-1-12-hardened-glass',
        },
        {
          item: 'tf-1-12-dust-mithril',
        },
      ],
      energy: 6_000,
      data: {
        primaryInput: {
          randomCycle: true,
          itemGroup: 'tf-1-12-hardened-glass',
          amount: 2,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-mithril'],
        },
        primaryOutput: {
          item: ['tf-1-12-hardened-glass-mithril'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 15,
      },
    },
    'hardened-glass-nickel': {
      results: [
        {
          item: 'tf-1-12-hardened-glass-nickel',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tf-1-12-hardened-glass',
        },
        {
          item: 'tf-1-12-dust-nickel',
        },
      ],
      energy: 6_000,
      data: {
        primaryInput: {
          randomCycle: true,
          itemGroup: 'tf-1-12-hardened-glass',
          amount: 2,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-hardened-glass-nickel'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 15,
      },
    },
    'hardened-glass-platinum': {
      results: [
        {
          item: 'tf-1-12-hardened-glass-platinum',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tf-1-12-hardened-glass',
        },
        {
          item: 'tf-1-12-dust-platinum',
        },
      ],
      energy: 6_000,
      data: {
        primaryInput: {
          randomCycle: true,
          itemGroup: 'tf-1-12-hardened-glass',
          amount: 2,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-hardened-glass-platinum'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 15,
      },
    },
    'hardened-glass-signalum': {
      results: [
        {
          item: 'tf-1-12-hardened-glass-signalum',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tf-1-12-hardened-glass',
        },
        {
          item: 'tf-1-12-dust-signalum',
        },
      ],
      energy: 6_000,
      data: {
        primaryInput: {
          randomCycle: true,
          itemGroup: 'tf-1-12-hardened-glass',
          amount: 2,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-signalum'],
        },
        primaryOutput: {
          item: ['tf-1-12-hardened-glass-signalum'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 15,
      },
    },
    'hardened-glass-silver': {
      results: [
        {
          item: 'tf-1-12-hardened-glass-silver',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tf-1-12-hardened-glass',
        },
        {
          item: 'tf-1-12-dust-silver',
        },
      ],
      energy: 6_000,
      data: {
        primaryInput: {
          randomCycle: true,
          itemGroup: 'tf-1-12-hardened-glass',
          amount: 2,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-hardened-glass-silver'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 15,
      },
    },
    'hardened-glass-steel': {
      results: [
        {
          item: 'tf-1-12-hardened-glass-steel',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tf-1-12-hardened-glass',
        },
        {
          item: 'tf-1-12-dust-steel',
        },
      ],
      energy: 6_000,
      data: {
        primaryInput: {
          randomCycle: true,
          itemGroup: 'tf-1-12-hardened-glass',
          amount: 2,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-hardened-glass-steel'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 15,
      },
    },
    'hardened-glass-tin': {
      results: [
        {
          item: 'tf-1-12-hardened-glass-tin',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tf-1-12-hardened-glass',
        },
        {
          item: 'tf-1-12-dust-tin',
        },
      ],
      energy: 6_000,
      data: {
        primaryInput: {
          randomCycle: true,
          itemGroup: 'tf-1-12-hardened-glass',
          amount: 2,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-hardened-glass-tin'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 15,
      },
    },
    'ingot-bronze-from-dust-copper-and-dust-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-copper',
        },
        {
          item: 'tf-1-12-dust-tin',
        },
      ],
      energy: 3_200,
      data: {
        primaryInput: {
          item: ['tf-1-12-dust-copper'],
          amount: 3,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
          amount: 4,
        },
      },
    },
    'ingot-bronze-from-dust-copper-and-ingot-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-copper',
        },
        {
          item: 'tf-1-12-ingot-tin',
        },
      ],
      energy: 3_600,
      data: {
        primaryInput: {
          item: ['tf-1-12-dust-copper'],
          amount: 3,
        },
        secondaryInput: {
          item: ['tf-1-12-ingot-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
          amount: 4,
        },
      },
    },
    'ingot-bronze-from-ingot-copper-and-dust-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-dust-tin',
        },
      ],
      energy: 4_400,
      data: {
        primaryInput: {
          item: ['tf-1-12-ingot-copper'],
          amount: 3,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
          amount: 4,
        },
      },
    },
    'ingot-bronze-from-ingot-copper-and-ingot-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-ingot-tin',
        },
      ],
      energy: 4_800,
      data: {
        primaryInput: {
          item: ['tf-1-12-ingot-copper'],
          amount: 3,
        },
        secondaryInput: {
          item: ['tf-1-12-ingot-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
          amount: 4,
        },
      },
    },
    'ingot-constantan-from-dust-copper-and-dust-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-copper',
        },
        {
          item: 'tf-1-12-dust-nickel',
        },
      ],
      energy: 1_600,
      data: {
        primaryInput: {
          item: ['tf-1-12-dust-copper'],
        },
        secondaryInput: {
          item: ['tf-1-12-dust-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
          amount: 2,
        },
      },
    },
    'ingot-constantan-from-dust-copper-and-ingot-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-copper',
        },
        {
          item: 'tf-1-12-ingot-nickel',
        },
      ],
      energy: 2_000,
      data: {
        primaryInput: {
          item: ['tf-1-12-dust-copper'],
        },
        secondaryInput: {
          item: ['tf-1-12-ingot-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
          amount: 2,
        },
      },
    },
    'ingot-constantan-from-ingot-copper-and-dust-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-dust-nickel',
        },
      ],
      energy: 2_000,
      data: {
        primaryInput: {
          item: ['tf-1-12-ingot-copper'],
        },
        secondaryInput: {
          item: ['tf-1-12-dust-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
          amount: 2,
        },
      },
    },
    'ingot-constantan-from-ingot-copper-and-ingot-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-ingot-nickel',
        },
      ],
      energy: 2_400,
      data: {
        primaryInput: {
          item: ['tf-1-12-ingot-copper'],
        },
        secondaryInput: {
          item: ['tf-1-12-ingot-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
          amount: 2,
        },
      },
    },
    'ingot-electrum-from-dust-gold-and-dust-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-gold',
        },
        {
          item: 'tf-1-12-dust-silver',
        },
      ],
      energy: 1_600,
      data: {
        primaryInput: {
          item: ['tf-1-12-dust-gold'],
        },
        secondaryInput: {
          item: ['tf-1-12-dust-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
          amount: 2,
        },
      },
    },
    'ingot-electrum-from-dust-gold-and-ingot-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-gold',
        },
        {
          item: 'tf-1-12-ingot-silver',
        },
      ],
      energy: 2_000,
      data: {
        primaryInput: {
          item: ['tf-1-12-dust-gold'],
        },
        secondaryInput: {
          item: ['tf-1-12-ingot-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
          amount: 2,
        },
      },
    },
    'ingot-electrum-from-ingot-gold-and-dust-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
      ],
      ingredients: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-dust-silver',
        },
      ],
      energy: 2_000,
      data: {
        primaryInput: {
          item: ['mc-ingot-gold'],
        },
        secondaryInput: {
          item: ['tf-1-12-dust-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
          amount: 2,
        },
      },
    },
    'ingot-electrum-from-ingot-gold-and-ingot-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
      ],
      ingredients: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-ingot-silver',
        },
      ],
      energy: 2_400,
      data: {
        primaryInput: {
          item: ['mc-ingot-gold'],
        },
        secondaryInput: {
          item: ['tf-1-12-ingot-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
          amount: 2,
        },
      },
    },
    'ingot-invar-from-dust-iron-and-dust-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-iron',
        },
        {
          item: 'tf-1-12-dust-nickel',
        },
      ],
      energy: 2_400,
      data: {
        primaryInput: {
          item: ['tf-1-12-dust-iron'],
          amount: 2,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
          amount: 3,
        },
      },
    },
    'ingot-invar-from-dust-iron-and-ingot-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-iron',
        },
        {
          item: 'tf-1-12-ingot-nickel',
        },
      ],
      energy: 2_800,
      data: {
        primaryInput: {
          item: ['tf-1-12-dust-iron'],
          amount: 2,
        },
        secondaryInput: {
          item: ['tf-1-12-ingot-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
          amount: 3,
        },
      },
    },
    'ingot-invar-from-ingot-iron-and-dust-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
      ],
      ingredients: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-dust-nickel',
        },
      ],
      energy: 3_200,
      data: {
        primaryInput: {
          item: ['mc-ingot-iron'],
          amount: 2,
        },
        secondaryInput: {
          item: ['tf-1-12-dust-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
          amount: 3,
        },
      },
    },
    'ingot-invar-from-ingot-iron-and-ingot-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
      ],
      ingredients: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-ingot-nickel',
        },
      ],
      energy: 3_600,
      data: {
        primaryInput: {
          item: ['mc-ingot-iron'],
          amount: 2,
        },
        secondaryInput: {
          item: ['tf-1-12-ingot-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
          amount: 3,
        },
      },
    },
    'ingot-steel-from-dust-iron-and-coal-coke': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-iron',
        },
        {
          item: 'tf-1-12-coal-coke',
        },
      ],
      energy: 2_000,
      data: {
        primaryInput: {
          item: ['tf-1-12-dust-iron'],
        },
        secondaryInput: {
          item: ['tf-1-12-coal-coke'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
        },
      },
    },
    'ingot-steel-from-dust-iron-and-dust-charcoal': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-iron',
        },
        {
          item: 'tf-1-12-dust-charcoal',
        },
      ],
      energy: 4_000,
      data: {
        primaryInput: {
          item: ['tf-1-12-dust-iron'],
        },
        secondaryInput: {
          item: ['tf-1-12-dust-charcoal'],
          amount: 4,
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
        },
      },
    },
    'ingot-steel-from-dust-iron-and-dust-coal': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-dust-iron',
        },
        {
          item: 'tf-1-12-dust-coal',
        },
      ],
      energy: 4_000,
      data: {
        primaryInput: {
          item: ['tf-1-12-dust-iron'],
        },
        secondaryInput: {
          item: ['tf-1-12-dust-coal'],
          amount: 4,
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
        },
      },
    },
    'ingot-steel-from-ingot-iron-and-coal-coke': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
      ],
      ingredients: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-coal-coke',
        },
      ],
      energy: 2_400,
      data: {
        primaryInput: {
          item: ['mc-ingot-iron'],
        },
        secondaryInput: {
          item: ['tf-1-12-coal-coke'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
        },
      },
    },
    'ingot-steel-from-ingot-iron-and-dust-charcoal': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
      ],
      ingredients: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-dust-charcoal',
        },
      ],
      energy: 4_400,
      data: {
        primaryInput: {
          item: ['mc-ingot-iron'],
        },
        secondaryInput: {
          item: ['tf-1-12-dust-charcoal'],
          amount: 4,
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
        },
      },
    },
    'ingot-steel-from-ingot-iron-and-dust-coal': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
      ],
      ingredients: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-dust-coal',
        },
      ],
      energy: 4_400,
      data: {
        primaryInput: {
          item: ['mc-ingot-iron'],
        },
        secondaryInput: {
          item: ['tf-1-12-dust-coal'],
          amount: 4,
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
        },
      },
    },
    'nether-brick': {
      results: [
        {
          item: 'mc-nether-brick',
        },
        {
          item: 'tf-1-12-sulfur',
        },
      ],
      ingredients: [
        {
          item: 'mc-netherrack',
        },
        {
          item: 'mc-soul-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-soul-sand'],
        },
        primaryInput: {
          item: ['mc-netherrack'],
          amount: 2,
        },
        primaryOutput: {
          item: ['mc-nether-brick'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-sulfur'],
        },
        secondaryChance: 25,
      },
    },
    'ore-processing-cinnabar-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
          suffix: 'x3',
        },
        {
          item: 'mc-ingot-iron',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-aluminum',
        },
        {
          item: 'tf-1-12-cinnabar',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-cinnabar'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 1,
        },
        secondaryChance: 100,
      },
    },
    'ore-processing-cinnabar-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
          suffix: 'x3',
        },
        {
          item: 'mc-ingot-gold',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-copper',
        },
        {
          item: 'tf-1-12-cinnabar',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-cinnabar'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['mc-ingot-gold'],
          amount: 1,
        },
        secondaryChance: 100,
      },
    },
    'ore-processing-cinnabar-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
          suffix: 'x3',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          item: 'mc-ore-gold',
        },
        {
          item: 'tf-1-12-cinnabar',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-cinnabar'],
        },
        primaryInput: {
          item: ['mc-ore-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
          amount: 1,
        },
        secondaryChance: 75,
      },
    },
    'ore-processing-cinnabar-iridium': {
      results: [
        {
          item: 'tf-1-12-ingot-iridium',
          suffix: 'x3',
        },
        {
          item: 'tf-1-12-ingot-platinum',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-iridium',
        },
        {
          item: 'tf-1-12-cinnabar',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-cinnabar'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-iridium'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-iridium'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
          amount: 1,
        },
        secondaryChance: 100,
      },
    },
    'ore-processing-cinnabar-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
          suffix: 'x3',
        },
        {
          item: 'tf-1-12-ingot-nickel',
        },
      ],
      ingredients: [
        {
          item: 'mc-ore-iron',
        },
        {
          item: 'tf-1-12-cinnabar',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-cinnabar'],
        },
        primaryInput: {
          item: ['mc-ore-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
          amount: 1,
        },
        secondaryChance: 100,
      },
    },
    'ore-processing-cinnabar-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
          suffix: 'x3',
        },
        {
          item: 'tf-1-12-ingot-silver',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-lead',
        },
        {
          item: 'tf-1-12-cinnabar',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-cinnabar'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-ingot-silver'],
          amount: 1,
        },
        secondaryChance: 100,
      },
    },
    'ore-processing-cinnabar-mithril': {
      results: [
        {
          item: 'tf-1-12-ingot-mithril',
          suffix: 'x3',
        },
        {
          item: 'mc-ingot-gold',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-mithril',
        },
        {
          item: 'tf-1-12-cinnabar',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-cinnabar'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-mithril'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-mithril'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['mc-ingot-gold'],
          amount: 1,
        },
        secondaryChance: 100,
      },
    },
    'ore-processing-cinnabar-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
          suffix: 'x3',
        },
        {
          item: 'tf-1-12-ingot-platinum',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-nickel',
        },
        {
          item: 'tf-1-12-cinnabar',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-cinnabar'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
          amount: 1,
        },
        secondaryChance: 100,
      },
    },
    'ore-processing-cinnabar-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
          suffix: 'x3',
        },
        {
          item: 'tf-1-12-ingot-iridium',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-platinum',
        },
        {
          item: 'tf-1-12-cinnabar',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-cinnabar'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-ingot-iridium'],
          amount: 1,
        },
        secondaryChance: 100,
      },
    },
    'ore-processing-cinnabar-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
          suffix: 'x3',
        },
        {
          item: 'tf-1-12-ingot-lead',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-silver',
        },
        {
          item: 'tf-1-12-cinnabar',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-cinnabar'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-ingot-lead'],
          amount: 1,
        },
        secondaryChance: 100,
      },
    },
    'ore-processing-cinnabar-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
          suffix: 'x3',
        },
        {
          item: 'mc-ingot-iron',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-tin',
        },
        {
          item: 'tf-1-12-cinnabar',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-cinnabar'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 1,
        },
        secondaryChance: 100,
      },
    },
    'ore-processing-lapis-lazuli': {
      results: [
        {
          item: 'mc-lapis-lazuli',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          item: 'mc-ore-lapis-lazuli',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-ore-lapis-lazuli'],
        },
        primaryOutput: {
          item: ['mc-lapis-lazuli'],
          amount: 8,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 50,
      },
    },
    'ore-processing-nether-quartz': {
      results: [
        {
          item: 'mc-nether-quartz',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          item: 'mc-ore-nether-quartz',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-ore-nether-quartz'],
        },
        primaryOutput: {
          item: ['mc-nether-quartz'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 50,
      },
    },
    'ore-processing-redstone': {
      results: [
        {
          item: 'mc-redstone',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          item: 'mc-ore-redstone',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-ore-redstone'],
        },
        primaryOutput: {
          item: ['mc-redstone'],
          amount: 8,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 50,
      },
    },
    'ore-processing-rich-slag-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
          suffix: 'x3',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-aluminum',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-slag-rich'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
          amount: 1,
        },
        secondaryChance: 75,
      },
    },
    'ore-processing-rich-slag-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
          suffix: 'x3',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-copper',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-slag-rich'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
          amount: 1,
        },
        secondaryChance: 75,
      },
    },
    'ore-processing-rich-slag-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
          suffix: 'x3',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-ore-gold',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-slag-rich'],
        },
        primaryInput: {
          item: ['mc-ore-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
          amount: 1,
        },
        secondaryChance: 75,
      },
    },
    'ore-processing-rich-slag-iridium': {
      results: [
        {
          item: 'tf-1-12-ingot-iridium',
          suffix: 'x3',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-iridium',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-slag-rich'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-iridium'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-iridium'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
          amount: 1,
        },
        secondaryChance: 75,
      },
    },
    'ore-processing-rich-slag-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
          suffix: 'x3',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-ore-iron',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-slag-rich'],
        },
        primaryInput: {
          item: ['mc-ore-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
          amount: 1,
        },
        secondaryChance: 75,
      },
    },
    'ore-processing-rich-slag-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
          suffix: 'x3',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-lead',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-slag-rich'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
          amount: 1,
        },
        secondaryChance: 75,
      },
    },
    'ore-processing-rich-slag-mithril': {
      results: [
        {
          item: 'tf-1-12-ingot-mithril',
          suffix: 'x3',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-mithril',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-slag-rich'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-mithril'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-mithril'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
          amount: 1,
        },
        secondaryChance: 75,
      },
    },
    'ore-processing-rich-slag-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
          suffix: 'x3',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-nickel',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-slag-rich'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
          amount: 1,
        },
        secondaryChance: 75,
      },
    },
    'ore-processing-rich-slag-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
          suffix: 'x3',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-platinum',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-slag-rich'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
          amount: 1,
        },
        secondaryChance: 75,
      },
    },
    'ore-processing-rich-slag-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
          suffix: 'x3',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-silver',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-slag-rich'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
          amount: 1,
        },
        secondaryChance: 75,
      },
    },
    'ore-processing-rich-slag-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
          suffix: 'x3',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-tin',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['tf-1-12-slag-rich'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
          amount: 1,
        },
        secondaryChance: 75,
      },
    },
    'ore-processing-sand-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-aluminum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
          amount: 1,
        },
        secondaryChance: 5,
      },
    },
    'ore-processing-sand-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-copper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
          amount: 1,
        },
        secondaryChance: 5,
      },
    },
    'ore-processing-sand-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          item: 'mc-ore-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-ore-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
          amount: 1,
        },
        secondaryChance: 20,
      },
    },
    'ore-processing-sand-iridium': {
      results: [
        {
          item: 'tf-1-12-ingot-iridium',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-iridium',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-iridium'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-iridium'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
          amount: 1,
        },
        secondaryChance: 5,
      },
    },
    'ore-processing-sand-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          item: 'mc-ore-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-ore-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
          amount: 1,
        },
        secondaryChance: 5,
      },
    },
    'ore-processing-sand-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-lead',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
          amount: 1,
        },
        secondaryChance: 5,
      },
    },
    'ore-processing-sand-mithril': {
      results: [
        {
          item: 'tf-1-12-ingot-mithril',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-mithril',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-mithril'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-mithril'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
          amount: 1,
        },
        secondaryChance: 5,
      },
    },
    'ore-processing-sand-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-nickel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
          amount: 1,
        },
        secondaryChance: 15,
      },
    },
    'ore-processing-sand-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-platinum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
          amount: 1,
        },
        secondaryChance: 5,
      },
    },
    'ore-processing-sand-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-silver',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
          amount: 1,
        },
        secondaryChance: 5,
      },
    },
    'ore-processing-sand-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
          suffix: 'x2',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-ore-tin',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-ore-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
          amount: 1,
        },
        secondaryChance: 5,
      },
    },
    'recycling-anvil': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-anvil',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-anvil'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 31,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 50,
      },
    },
    'recycling-anvil-slightly-damaged': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-anvil-slightly-damaged',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-anvil-slightly-damaged'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 23,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 75,
      },
    },
    'recycling-anvil-very-damaged': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-anvil-very-damaged',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-anvil-very-damaged'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 15,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 100,
      },
    },
    'recycling-armor-helmet': {
      results: [
        {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          itemGroup: 'armor-helmet-metal-with-tf2',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          itemGroup: 'armor-helmet-metal-with-tf2',
        },
        primaryOutput: {
          itemGroup: 'ingot-equipment-metal-with-tf2',
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-helmet-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-helmet-aluminum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-helmet-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-helmet-bronze': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-helmet-bronze',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-helmet-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-helmet-constantan': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-helmet-constantan',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-helmet-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-helmet-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-helmet-copper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-helmet-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-helmet-electrum': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-helmet-electrum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-helmet-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-helmet-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-armor-helmet-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-armor-helmet-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-helmet-invar': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-helmet-invar',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-helmet-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-helmet-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-armor-helmet-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-armor-helmet-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-helmet-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-helmet-lead',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-helmet-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-helmet-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-helmet-nickel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-helmet-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-helmet-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-helmet-platinum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-helmet-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-helmet-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-helmet-silver',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-helmet-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-helmet-steel': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-helmet-steel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-helmet-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-helmet-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-helmet-tin',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-helmet-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-chestplate': {
      results: [
        {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          itemGroup: 'armor-chestplate-metal-with-tf2',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          itemGroup: 'armor-chestplate-metal-with-tf2',
        },
        primaryOutput: {
          itemGroup: 'ingot-equipment-metal-with-tf2',
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'recycling-armor-chestplate-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-chestplate-aluminum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-chestplate-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'recycling-armor-chestplate-bronze': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-chestplate-bronze',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-chestplate-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'recycling-armor-chestplate-constantan': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-chestplate-constantan',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-chestplate-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'recycling-armor-chestplate-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-chestplate-copper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-chestplate-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'recycling-armor-chestplate-electrum': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-chestplate-electrum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-chestplate-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'recycling-armor-chestplate-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-armor-chestplate-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-armor-chestplate-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'recycling-armor-chestplate-invar': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-chestplate-invar',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-chestplate-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'recycling-armor-chestplate-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-armor-chestplate-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-armor-chestplate-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'recycling-armor-chestplate-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-chestplate-lead',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-chestplate-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'recycling-armor-chestplate-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-chestplate-nickel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-chestplate-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'recycling-armor-chestplate-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-chestplate-platinum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-chestplate-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'recycling-armor-chestplate-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-chestplate-silver',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-chestplate-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'recycling-armor-chestplate-steel': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-chestplate-steel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-chestplate-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'recycling-armor-chestplate-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-chestplate-tin',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-chestplate-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'recycling-armor-leggings': {
      results: [
        {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          itemGroup: 'armor-leggings-metal-with-tf2',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          itemGroup: 'armor-leggings-metal-with-tf2',
        },
        primaryOutput: {
          itemGroup: 'ingot-equipment-metal-with-tf2',
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-armor-leggings-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-leggings-aluminum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-leggings-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-armor-leggings-bronze': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-leggings-bronze',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-leggings-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-armor-leggings-constantan': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-leggings-constantan',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-leggings-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-armor-leggings-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-leggings-copper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-leggings-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-armor-leggings-electrum': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-leggings-electrum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-leggings-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-armor-leggings-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-armor-leggings-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-armor-leggings-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-armor-leggings-invar': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-leggings-invar',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-leggings-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-armor-leggings-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-armor-leggings-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-armor-leggings-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-armor-leggings-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-leggings-lead',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-leggings-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-armor-leggings-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-leggings-nickel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-leggings-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-armor-leggings-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-leggings-platinum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-leggings-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-armor-leggings-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-leggings-silver',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-leggings-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-armor-leggings-steel': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-leggings-steel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-leggings-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-armor-leggings-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-leggings-tin',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-leggings-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-armor-boots': {
      results: [
        {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          itemGroup: 'armor-boots-metal-with-tf2',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          itemGroup: 'armor-boots-metal-with-tf2',
        },
        primaryOutput: {
          itemGroup: 'ingot-equipment-metal-with-tf2',
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-boots-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-boots-aluminum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-boots-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-boots-bronze': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-boots-bronze',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-boots-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-boots-constantan': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-boots-constantan',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-boots-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-boots-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-boots-copper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-boots-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-boots-electrum': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-boots-electrum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-boots-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-boots-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-armor-boots-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-armor-boots-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-boots-invar': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-boots-invar',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-boots-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-boots-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-armor-boots-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-armor-boots-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-boots-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-boots-lead',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-boots-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-boots-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-boots-nickel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-boots-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-boots-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-boots-platinum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-boots-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-boots-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-boots-silver',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-boots-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-boots-steel': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-boots-steel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-boots-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-armor-boots-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-armor-boots-tin',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-armor-boots-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-bucket': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-bucket',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-bucket'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-cauldron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-cauldron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-cauldron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 7,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 35,
      },
    },
    'recycling-clock': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          item: 'mc-clock',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-clock'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-compass': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag-rich',
        },
      ],
      ingredients: [
        {
          item: 'mc-compass',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-compass'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag-rich'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-door-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-door-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-door-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-gear': {
      results: [
        {
          itemGroup: 'ingot-metal-with-tf2',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tf-1-12-gear-metal',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 3_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          itemGroup: 'tf-1-12-gear-metal',
        },
        primaryOutput: {
          itemGroup: 'ingot-metal-with-tf2',
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-gear-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-gear-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 3_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-gear-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-gear-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-gear-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 3_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-gear-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-gear-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-gear-copper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 3_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-gear-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-gear-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-gear-tin',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 3_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-gear-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-gear-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-gear-silver',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 3_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-gear-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-gear-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-gear-lead',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 3_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-gear-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-gear-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-gear-aluminum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 3_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-gear-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-gear-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-gear-nickel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 3_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-gear-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-gear-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-gear-platinum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 3_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-gear-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-gear-iridium': {
      results: [
        {
          item: 'tf-1-12-ingot-iridium',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-gear-iridium',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 3_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-gear-iridium'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-iridium'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-gear-mithril': {
      results: [
        {
          item: 'tf-1-12-ingot-mithril',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-gear-mithril',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 3_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-gear-mithril'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-mithril'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-gear-steel': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-gear-steel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 3_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-gear-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-gear-electrum': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-gear-electrum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 3_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-gear-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-gear-invar': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-gear-invar',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 3_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-gear-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-gear-bronze': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-gear-bronze',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 3_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-gear-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-gear-constantan': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-gear-constantan',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 3_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-gear-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-gear-signalum': {
      results: [
        {
          item: 'tf-1-12-ingot-signalum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-gear-signalum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 3_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-gear-signalum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-signalum'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-gear-lumium': {
      results: [
        {
          item: 'tf-1-12-ingot-lumium',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-gear-lumium',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 3_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-gear-lumium'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lumium'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-gear-enderium': {
      results: [
        {
          item: 'tf-1-12-ingot-enderium',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-gear-enderium',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 3_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-gear-enderium'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-enderium'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-hopper': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-hopper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-hopper'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 5,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 25,
      },
    },
    'recycling-horse-armor-metal': {
      results: [
        {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          itemGroup: 'horse-armor-metal-with-tf2',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          itemGroup: 'horse-armor-metal-with-tf2',
        },
        primaryOutput: {
          itemGroup: 'ingot-equipment-metal-with-tf2',
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-horse-armor-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-horse-armor-aluminum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-horse-armor-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-horse-armor-bronze': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-horse-armor-bronze',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-horse-armor-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-horse-armor-constantan': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-horse-armor-constantan',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-horse-armor-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-horse-armor-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-horse-armor-copper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-horse-armor-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-horse-armor-electrum': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-horse-armor-electrum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-horse-armor-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-horse-armor-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-horse-armor-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-horse-armor-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-horse-armor-invar': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-horse-armor-invar',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-horse-armor-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-horse-armor-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-horse-armor-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-horse-armor-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-horse-armor-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-horse-armor-lead',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-horse-armor-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-horse-armor-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-horse-armor-nickel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-horse-armor-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-horse-armor-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-horse-armor-platinum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-horse-armor-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-horse-armor-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-horse-armor-silver',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-horse-armor-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-horse-armor-steel': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-horse-armor-steel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-horse-armor-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-horse-armor-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-horse-armor-tin',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-horse-armor-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-iron-bars': {
      results: [
        {
          item: 'mc-nugget-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-iron-bars',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-iron-bars'],
        },
        primaryOutput: {
          item: ['mc-nugget-iron'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 5,
      },
    },
    'recycling-iron-trapdoor': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-iron-trapdoor',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-iron-trapdoor'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 5,
      },
    },
    'recycling-minecart': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-minecart',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-minecart'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-minecart-with-chest': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-minecart-with-chest',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-minecart-with-chest'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-minecart-with-furnace': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-minecart-with-furnace',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-minecart-with-furnace'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 4,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 30,
      },
    },
    'recycling-minecart-with-hopper': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-minecart-with-hopper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-minecart-with-hopper'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 8,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-plate': {
      results: [
        {
          itemGroup: 'ingot-metal-with-tf2',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tf-1-12-plate-metal',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 2_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          itemGroup: 'tf-1-12-plate-metal',
        },
        primaryOutput: {
          itemGroup: 'ingot-metal-with-tf2',
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-plate-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-plate-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 2_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-plate-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-plate-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-plate-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 2_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-plate-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-plate-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-plate-copper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 2_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-plate-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-plate-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-plate-tin',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 2_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-plate-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-plate-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-plate-silver',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 2_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-plate-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-plate-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-plate-lead',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 2_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-plate-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-plate-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-plate-aluminum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 2_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-plate-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-plate-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-plate-nickel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 2_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-plate-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-plate-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-plate-platinum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 2_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-plate-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-plate-iridium': {
      results: [
        {
          item: 'tf-1-12-ingot-iridium',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-plate-iridium',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 2_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-plate-iridium'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-iridium'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-plate-mithril': {
      results: [
        {
          item: 'tf-1-12-ingot-mithril',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-plate-mithril',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 2_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-plate-mithril'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-mithril'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-plate-steel': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-plate-steel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 2_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-plate-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-plate-electrum': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-plate-electrum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 2_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-plate-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-plate-invar': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-plate-invar',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 2_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-plate-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-plate-bronze': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-plate-bronze',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 2_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-plate-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-plate-constantan': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-plate-constantan',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 2_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-plate-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-plate-signalum': {
      results: [
        {
          item: 'tf-1-12-ingot-signalum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-plate-signalum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 2_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-plate-signalum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-signalum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-plate-lumium': {
      results: [
        {
          item: 'tf-1-12-ingot-lumium',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-plate-lumium',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 2_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-plate-lumium'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lumium'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-plate-enderium': {
      results: [
        {
          item: 'tf-1-12-ingot-enderium',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-plate-enderium',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 2_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-plate-enderium'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-enderium'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-powered-rail': {
      results: [
        {
          item: 'mc-nugget-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-powered-rail',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-powered-rail'],
        },
        primaryOutput: {
          item: ['mc-nugget-gold'],
          amount: 6,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-pressure-plate-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-pressure-plate-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-pressure-plate-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-pressure-plate-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-pressure-plate-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-pressure-plate-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-rail': {
      results: [
        {
          item: 'mc-nugget-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-rail',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-rail'],
        },
        primaryOutput: {
          item: ['mc-nugget-iron'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 5,
      },
    },
    'recycling-tool-axe': {
      results: [
        {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tool-axe-metal-with-tf2',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          itemGroup: 'tool-axe-metal-with-tf2',
        },
        primaryOutput: {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-axe-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-axe-aluminum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-axe-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-axe-bronze': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-axe-bronze',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-axe-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-axe-constantan': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-axe-constantan',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-axe-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-axe-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-axe-copper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-axe-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-axe-electrum': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-axe-electrum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-axe-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-axe-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-tool-axe-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-tool-axe-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-axe-invar': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-axe-invar',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-axe-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-axe-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-tool-axe-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-tool-axe-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-axe-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-axe-lead',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-axe-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-axe-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-axe-nickel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-axe-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-axe-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-axe-platinum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-axe-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-axe-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-axe-silver',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-axe-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-axe-steel': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-axe-steel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-axe-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-axe-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-axe-tin',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-axe-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-excavator': {
      results: [
        {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tool-excavator-metal-with-tf2',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          itemGroup: 'tool-excavator-metal-with-tf2',
        },
        primaryOutput: {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-excavator-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-excavator-aluminum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-excavator-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-excavator-bronze': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-excavator-bronze',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-excavator-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-excavator-constantan': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-excavator-constantan',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-excavator-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-excavator-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-excavator-copper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-excavator-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-excavator-electrum': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-excavator-electrum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-excavator-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-excavator-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-excavator-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-excavator-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-excavator-invar': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-excavator-invar',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-excavator-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-excavator-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-excavator-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-excavator-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-excavator-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-excavator-lead',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-excavator-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-excavator-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-excavator-nickel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-excavator-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-excavator-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-excavator-platinum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-excavator-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-excavator-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-excavator-silver',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-excavator-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-excavator-steel': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-excavator-steel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-excavator-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-excavator-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-excavator-tin',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-excavator-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-fishing-rod-metal': {
      results: [
        {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tool-fishing-rod-metal-with-tf2',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          itemGroup: 'tool-fishing-rod-metal-with-tf2',
        },
        primaryOutput: {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-fishing-rod-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-fishing-rod-aluminum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-fishing-rod-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-fishing-rod-bronze': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-fishing-rod-bronze',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-fishing-rod-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-fishing-rod-constantan': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-fishing-rod-constantan',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-fishing-rod-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-fishing-rod-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-fishing-rod-copper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-fishing-rod-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-fishing-rod-electrum': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-fishing-rod-electrum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-fishing-rod-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-fishing-rod-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-fishing-rod-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-fishing-rod-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-fishing-rod-invar': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-fishing-rod-invar',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-fishing-rod-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-fishing-rod-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-fishing-rod-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-fishing-rod-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-fishing-rod-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-fishing-rod-lead',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-fishing-rod-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-fishing-rod-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-fishing-rod-nickel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-fishing-rod-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-fishing-rod-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-fishing-rod-platinum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-fishing-rod-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-fishing-rod-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-fishing-rod-silver',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-fishing-rod-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-fishing-rod-steel': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-fishing-rod-steel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-fishing-rod-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-fishing-rod-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-fishing-rod-tin',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-fishing-rod-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-hammer': {
      results: [
        {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tool-hammer-metal-with-tf2',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          itemGroup: 'tool-hammer-metal-with-tf2',
        },
        primaryOutput: {
          itemGroup: 'ingot-equipment-metal-with-tf2',
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-tool-hammer-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hammer-aluminum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hammer-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-tool-hammer-bronze': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hammer-bronze',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hammer-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-tool-hammer-constantan': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hammer-constantan',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hammer-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-tool-hammer-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hammer-copper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hammer-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-tool-hammer-electrum': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hammer-electrum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hammer-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-tool-hammer-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hammer-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hammer-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-tool-hammer-invar': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hammer-invar',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hammer-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-tool-hammer-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hammer-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hammer-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-tool-hammer-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hammer-lead',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hammer-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-tool-hammer-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hammer-nickel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hammer-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-tool-hammer-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hammer-platinum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hammer-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-tool-hammer-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hammer-silver',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hammer-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-tool-hammer-steel': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hammer-steel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hammer-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-tool-hammer-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hammer-tin',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hammer-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
          amount: 2,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 15,
      },
    },
    'recycling-tool-hoe': {
      results: [
        {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tool-hoe-metal-with-tf2',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          itemGroup: 'tool-hoe-metal-with-tf2',
        },
        primaryOutput: {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-hoe-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hoe-aluminum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hoe-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-hoe-bronze': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hoe-bronze',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hoe-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-hoe-constantan': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hoe-constantan',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hoe-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-hoe-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hoe-copper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hoe-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-hoe-electrum': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hoe-electrum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hoe-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-hoe-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-tool-hoe-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-tool-hoe-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-hoe-invar': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hoe-invar',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hoe-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-hoe-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-tool-hoe-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-tool-hoe-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-hoe-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hoe-lead',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hoe-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-hoe-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hoe-nickel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hoe-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-hoe-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hoe-platinum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hoe-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-hoe-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hoe-silver',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hoe-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-hoe-steel': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hoe-steel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hoe-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-hoe-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-hoe-tin',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-hoe-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-pickaxe': {
      results: [
        {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tool-pickaxe-metal-with-tf2',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          itemGroup: 'tool-pickaxe-metal-with-tf2',
        },
        primaryOutput: {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-pickaxe-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-pickaxe-aluminum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-pickaxe-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-pickaxe-bronze': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-pickaxe-bronze',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-pickaxe-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-pickaxe-constantan': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-pickaxe-constantan',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-pickaxe-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-pickaxe-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-pickaxe-copper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-pickaxe-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-pickaxe-electrum': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-pickaxe-electrum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-pickaxe-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-pickaxe-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-tool-pickaxe-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-tool-pickaxe-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-pickaxe-invar': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-pickaxe-invar',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-pickaxe-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-pickaxe-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-tool-pickaxe-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-tool-pickaxe-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-pickaxe-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-pickaxe-lead',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-pickaxe-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-pickaxe-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-pickaxe-nickel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-pickaxe-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-pickaxe-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-pickaxe-platinum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-pickaxe-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-pickaxe-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-pickaxe-silver',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-pickaxe-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-pickaxe-steel': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-pickaxe-steel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-pickaxe-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-pickaxe-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-pickaxe-tin',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-pickaxe-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shears-metal': {
      results: [
        {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tool-shears-metal-with-tf2',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          itemGroup: 'tool-shears-metal-with-tf2',
        },
        primaryOutput: {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shears': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-tool-shears',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-tool-shears'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shears-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shears-aluminum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shears-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shears-bronze': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shears-bronze',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shears-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shears-constantan': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shears-constantan',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shears-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shears-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shears-copper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shears-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shears-electrum': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shears-electrum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shears-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shears-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shears-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shears-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shears-invar': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shears-invar',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shears-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shears-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shears-lead',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shears-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shears-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shears-nickel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shears-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shears-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shears-platinum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shears-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shears-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shears-silver',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shears-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shears-steel': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shears-steel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shears-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shears-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shears-tin',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shears-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shovel': {
      results: [
        {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tool-shovel-metal-with-tf2',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          itemGroup: 'tool-shovel-metal-with-tf2',
        },
        primaryOutput: {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shovel-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shovel-aluminum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shovel-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shovel-bronze': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shovel-bronze',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shovel-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shovel-constantan': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shovel-constantan',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shovel-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shovel-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shovel-copper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shovel-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shovel-electrum': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shovel-electrum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shovel-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shovel-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-tool-shovel-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-tool-shovel-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shovel-invar': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shovel-invar',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shovel-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shovel-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-tool-shovel-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-tool-shovel-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shovel-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shovel-lead',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shovel-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shovel-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shovel-nickel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shovel-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shovel-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shovel-platinum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shovel-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shovel-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shovel-silver',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shovel-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shovel-steel': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shovel-steel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shovel-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-shovel-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-shovel-tin',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-shovel-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-sickle': {
      results: [
        {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          itemGroup: 'tool-sickle-metal-with-tf2',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          itemGroup: 'tool-sickle-metal-with-tf2',
        },
        primaryOutput: {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-sickle-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-sickle-aluminum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-sickle-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-sickle-bronze': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-sickle-bronze',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-sickle-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-sickle-constantan': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-sickle-constantan',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-sickle-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-sickle-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-sickle-copper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-sickle-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-sickle-electrum': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-sickle-electrum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-sickle-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-sickle-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-sickle-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-sickle-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-sickle-invar': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-sickle-invar',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-sickle-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-sickle-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-sickle-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-sickle-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-sickle-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-sickle-lead',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-sickle-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-sickle-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-sickle-nickel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-sickle-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-sickle-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-sickle-platinum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-sickle-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-sickle-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-sickle-silver',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-sickle-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-sickle-steel': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-sickle-steel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-sickle-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-tool-sickle-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-tool-sickle-tin',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-tool-sickle-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'stone-bricks': {
      results: [
        {
          item: 'mc-stone-bricks',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-cobblestone',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-cobblestone'],
          amount: 2,
        },
        primaryOutput: {
          item: ['mc-stone-bricks'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 100,
      },
    },
    'recycling-weapon-bow-metal': {
      results: [
        {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          itemGroup: 'weapon-bow-metal-with-tf2',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          itemGroup: 'weapon-bow-metal-with-tf2',
        },
        primaryOutput: {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-bow-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-bow-aluminum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-bow-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-bow-bronze': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-bow-bronze',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-bow-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-bow-constantan': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-bow-constantan',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-bow-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-bow-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-bow-copper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-bow-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-bow-electrum': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-bow-electrum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-bow-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-bow-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-bow-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-bow-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-bow-invar': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-bow-invar',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-bow-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-bow-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-bow-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-bow-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-bow-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-bow-lead',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-bow-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-bow-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-bow-nickel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-bow-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-bow-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-bow-platinum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-bow-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-bow-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-bow-silver',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-bow-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-bow-steel': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-bow-steel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-bow-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-bow-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-bow-tin',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-bow-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-shield-metal': {
      results: [
        {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          itemGroup: 'weapon-shield-metal-with-tf2',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          itemGroup: 'weapon-shield-metal-with-tf2',
        },
        primaryOutput: {
          itemGroup: 'ingot-equipment-metal-with-tf2',
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-weapon-shield-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-shield-aluminum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-shield-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-weapon-shield-bronze': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-shield-bronze',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-shield-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-weapon-shield-constantan': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-shield-constantan',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-shield-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-weapon-shield-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-shield-copper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-shield-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-weapon-shield-electrum': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-shield-electrum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-shield-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-weapon-shield-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-shield-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-shield-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-weapon-shield-invar': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-shield-invar',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-shield-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-weapon-shield-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-shield-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-shield-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-weapon-shield-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-shield-lead',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-shield-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-weapon-shield-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-shield-nickel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-shield-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-weapon-shield-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-shield-platinum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-shield-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-weapon-shield-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-shield-silver',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-shield-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-weapon-shield-steel': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-shield-steel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-shield-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-weapon-shield-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-shield-tin',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-shield-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
          amount: 3,
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 20,
      },
    },
    'recycling-weapon-sword': {
      results: [
        {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          itemGroup: 'weapon-sword-metal-with-tf2',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          itemGroup: 'weapon-sword-metal-with-tf2',
        },
        primaryOutput: {
          itemGroup: 'ingot-equipment-metal-with-tf2',
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-sword-aluminum': {
      results: [
        {
          item: 'tf-1-12-ingot-aluminum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-sword-aluminum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-sword-aluminum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-aluminum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-sword-bronze': {
      results: [
        {
          item: 'tf-1-12-ingot-bronze',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-sword-bronze',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-sword-bronze'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-bronze'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-sword-constantan': {
      results: [
        {
          item: 'tf-1-12-ingot-constantan',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-sword-constantan',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-sword-constantan'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-constantan'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-sword-copper': {
      results: [
        {
          item: 'tf-1-12-ingot-copper',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-sword-copper',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-sword-copper'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-copper'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-sword-electrum': {
      results: [
        {
          item: 'tf-1-12-ingot-electrum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-sword-electrum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-sword-electrum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-electrum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-sword-gold': {
      results: [
        {
          item: 'mc-ingot-gold',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-weapon-sword-gold',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-weapon-sword-gold'],
        },
        primaryOutput: {
          item: ['mc-ingot-gold'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-sword-invar': {
      results: [
        {
          item: 'tf-1-12-ingot-invar',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-sword-invar',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-sword-invar'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-invar'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-sword-iron': {
      results: [
        {
          item: 'mc-ingot-iron',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'mc-weapon-sword-iron',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['mc-weapon-sword-iron'],
        },
        primaryOutput: {
          item: ['mc-ingot-iron'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-sword-lead': {
      results: [
        {
          item: 'tf-1-12-ingot-lead',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-sword-lead',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-sword-lead'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-lead'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-sword-nickel': {
      results: [
        {
          item: 'tf-1-12-ingot-nickel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-sword-nickel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-sword-nickel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-nickel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-sword-platinum': {
      results: [
        {
          item: 'tf-1-12-ingot-platinum',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-sword-platinum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-sword-platinum'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-platinum'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-sword-silver': {
      results: [
        {
          item: 'tf-1-12-ingot-silver',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-sword-silver',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-sword-silver'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-silver'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-sword-steel': {
      results: [
        {
          item: 'tf-1-12-ingot-steel',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-sword-steel',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-sword-steel'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-steel'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'recycling-weapon-sword-tin': {
      results: [
        {
          item: 'tf-1-12-ingot-tin',
        },
        {
          item: 'tf-1-12-slag',
        },
      ],
      ingredients: [
        {
          item: 'tf-1-12-weapon-sword-tin',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 6_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['tf-1-12-weapon-sword-tin'],
        },
        primaryOutput: {
          item: ['tf-1-12-ingot-tin'],
        },
        secondaryOutput: {
          item: ['tf-1-12-slag'],
        },
        secondaryChance: 10,
      },
    },
    'ra-1-12-dust-smelting-fluxed-electrum': {
      results: [
        {
          item: 'ra-1-12-ingot-fluxed-electrum',
        },
      ],
      ingredients: [
        {
          item: 'ra-1-12-dust-fluxed-electrum',
        },
        {
          item: 'mc-sand',
        },
      ],
      energy: 4_000,
      data: {
        secondaryInput: {
          item: ['mc-sand'],
        },
        primaryInput: {
          item: ['ra-1-12-dust-fluxed-electrum'],
        },
        primaryOutput: {
          item: ['ra-1-12-ingot-fluxed-electrum'],
        },
      },
    },
  },
} satisfies RecipeType;
