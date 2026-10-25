import Smelter from '../../../../components/docs/1.12/thermal-expansion/recipe/Smelter.astro';
import { defineRecipeType, defineRecipes } from '../../../define.ts';
import mc from '../../minecraft/items.ts';
import tfItemGroups from '../../thermal-foundation/item-groups.ts';
import tf from '../../thermal-foundation/items.ts';

export const smelter = defineRecipeType('1.12/thermal-expansion', {
  name: 'Induction Smelter',
  url: 'induction-smelter/',
  withEnergy: true,
  component: Smelter,
});

export default defineRecipes(smelter, {
  bronzeIngot: {
    copperIngotAndPulverizedTin: {
      inputs: [{ item: tf.copperIngot, amount: 3 }, { item: tf.pulverizedTin }],
      outputs: [{ item: tf.bronzeIngot, amount: 4 }],
      energy: 4_400,
    },
    copperIngotAndTinIngot: {
      inputs: [{ item: tf.copperIngot, amount: 3 }, { item: tf.tinIngot }],
      outputs: [{ item: tf.bronzeIngot, amount: 4 }],
      energy: 4_800,
    },
    pulverizedCopperAndPulverizedTin: {
      inputs: [{ item: tf.pulverizedCopper, amount: 3 }, { item: tf.pulverizedTin }],
      outputs: [{ item: tf.bronzeIngot, amount: 4 }],
      energy: 3_200,
    },
    pulverizedCopperAndTinIngot: {
      inputs: [{ item: tf.pulverizedCopper, amount: 3 }, { item: tf.tinIngot }],
      outputs: [{ item: tf.bronzeIngot, amount: 4 }],
      energy: 3_600,
    },
  },
  constantanIngot: {
    copperIngotAndNickelIngot: {
      inputs: [{ item: tf.copperIngot }, { item: tf.nickelIngot }],
      outputs: [{ item: tf.constantanIngot, amount: 2 }],
      energy: 2_400,
    },
    copperIngotAndPulverizedNickel: {
      inputs: [{ item: tf.copperIngot }, { item: tf.pulverizedNickel }],
      outputs: [{ item: tf.constantanIngot, amount: 2 }],
      energy: 2_000,
    },
    pulverizedCopperAndNickelIngot: {
      inputs: [{ item: tf.pulverizedCopper }, { item: tf.nickelIngot }],
      outputs: [{ item: tf.constantanIngot, amount: 2 }],
      energy: 2_000,
    },
    pulverizedCopperAndPulverizedNickel: {
      inputs: [{ item: tf.pulverizedCopper }, { item: tf.pulverizedNickel }],
      outputs: [{ item: tf.constantanIngot, amount: 2 }],
      energy: 1_600,
    },
  },
  dustSmelting: {
    aluminum: {
      inputs: [{ item: tf.pulverizedAluminum }, { item: mc.sand }],
      outputs: [{ item: tf.aluminumIngot }, { item: tf.slag, chance: 25 }],
      energy: 1_000,
    },
    bronze: {
      inputs: [{ item: tf.bronzeBlend }, { item: mc.sand }],
      outputs: [{ item: tf.bronzeIngot }, { item: tf.slag, chance: 25 }],
      energy: 1_000,
    },
    constantan: {
      inputs: [{ item: tf.constantanBlend }, { item: mc.sand }],
      outputs: [{ item: tf.constantanIngot }, { item: tf.slag, chance: 25 }],
      energy: 1_000,
    },
    copper: {
      inputs: [{ item: tf.pulverizedCopper }, { item: mc.sand }],
      outputs: [{ item: tf.copperIngot }, { item: tf.slag, chance: 25 }],
      energy: 1_000,
    },
    electrum: {
      inputs: [{ item: tf.electrumBlend }, { item: mc.sand }],
      outputs: [{ item: tf.electrumIngot }, { item: tf.slag, chance: 25 }],
      energy: 1_000,
    },
    enderium: {
      inputs: [{ item: tf.enderiumBlend }, { item: mc.sand }],
      outputs: [{ item: tf.enderiumIngot }, { item: tf.slag, chance: 25 }],
      energy: 1_000,
    },
    gold: {
      inputs: [{ item: tf.pulverizedGold }, { item: mc.sand }],
      outputs: [{ item: mc.goldIngot }, { item: tf.slag, chance: 25 }],
      energy: 1_000,
    },
    invar: {
      inputs: [{ item: tf.invarBlend }, { item: mc.sand }],
      outputs: [{ item: tf.invarIngot }, { item: tf.slag, chance: 25 }],
      energy: 1_000,
    },
    iridium: {
      inputs: [{ item: tf.pulverizedIridium }, { item: mc.sand }],
      outputs: [{ item: tf.iridiumIngot }, { item: tf.slag, chance: 25 }],
      energy: 1_000,
    },
    iron: {
      inputs: [{ item: tf.pulverizedIron }, { item: mc.sand }],
      outputs: [{ item: mc.ironIngot }, { item: tf.slag, chance: 25 }],
      energy: 1_000,
    },
    lead: {
      inputs: [{ item: tf.pulverizedLead }, { item: mc.sand }],
      outputs: [{ item: tf.leadIngot }, { item: tf.slag, chance: 25 }],
      energy: 1_000,
    },
    lumium: {
      inputs: [{ item: tf.lumiumBlend }, { item: mc.sand }],
      outputs: [{ item: tf.lumiumIngot }, { item: tf.slag, chance: 25 }],
      energy: 1_000,
    },
    metal: {
      inputs: [{ itemGroup: tfItemGroups.metalDust }, { item: mc.sand }],
      outputs: [{ itemGroup: tfItemGroups.metalIngot }, { item: tf.slag, chance: 25 }],
      energy: 1_000,
    },
    mithril: {
      inputs: [{ item: tf.pulverizedManaInfusedMetal }, { item: mc.sand }],
      outputs: [{ item: tf.manaInfusedIngot }, { item: tf.slag, chance: 25 }],
      energy: 1_000,
    },
    nickel: {
      inputs: [{ item: tf.pulverizedNickel }, { item: mc.sand }],
      outputs: [{ item: tf.nickelIngot }, { item: tf.slag, chance: 25 }],
      energy: 1_000,
    },
    platinum: {
      inputs: [{ item: tf.pulverizedPlatinum }, { item: mc.sand }],
      outputs: [{ item: tf.platinumIngot }, { item: tf.slag, chance: 25 }],
      energy: 1_000,
    },
    signalum: {
      inputs: [{ item: tf.signalumBlend }, { item: mc.sand }],
      outputs: [{ item: tf.signalumIngot }, { item: tf.slag, chance: 25 }],
      energy: 1_000,
    },
    silver: {
      inputs: [{ item: tf.pulverizedSilver }, { item: mc.sand }],
      outputs: [{ item: tf.silverIngot }, { item: tf.slag, chance: 25 }],
      energy: 1_000,
    },
    steel: {
      inputs: [{ item: tf.steelBlend }, { item: mc.sand }],
      outputs: [{ item: tf.steelIngot }, { item: tf.slag, chance: 25 }],
      energy: 1_000,
    },
    tin: {
      inputs: [{ item: tf.pulverizedTin }, { item: mc.sand }],
      outputs: [{ item: tf.tinIngot }, { item: tf.slag, chance: 25 }],
      energy: 1_000,
    },
  },
  electrumIngot: {
    goldIngotAndPulverizedSilver: {
      inputs: [{ item: mc.goldIngot }, { item: tf.pulverizedSilver }],
      outputs: [{ item: tf.electrumIngot, amount: 2 }],
      energy: 2_000,
    },
    goldIngotAndSilverIngot: {
      inputs: [{ item: mc.goldIngot }, { item: tf.silverIngot }],
      outputs: [{ item: tf.electrumIngot, amount: 2 }],
      energy: 2_400,
    },
    pulverizedGoldAndPulverizedSilver: {
      inputs: [{ item: tf.pulverizedGold }, { item: tf.pulverizedSilver }],
      outputs: [{ item: tf.electrumIngot, amount: 2 }],
      energy: 1_600,
    },
    pulverizedGoldAndSilverIngot: {
      inputs: [{ item: tf.pulverizedGold }, { item: tf.silverIngot }],
      outputs: [{ item: tf.electrumIngot, amount: 2 }],
      energy: 2_000,
    },
  },
  hardenedAluminumGlass: {
    inputs: [
      { itemGroup: tfItemGroups.hardenedGlass, amount: 2, randomCycle: true },
      { item: tf.pulverizedAluminum },
    ],
    outputs: [
      { item: tf.hardenedAluminumGlass, amount: 2 },
      { item: tf.richSlag, chance: 15 },
    ],
    energy: 6_000,
  },
  hardenedBronzeGlass: {
    inputs: [
      { itemGroup: tfItemGroups.hardenedGlass, amount: 2, randomCycle: true },
      { item: tf.bronzeBlend },
    ],
    outputs: [
      { item: tf.hardenedBronzeGlass, amount: 2 },
      { item: tf.richSlag, chance: 15 },
    ],
    energy: 6_000,
  },
  hardenedConstantanGlass: {
    inputs: [
      { itemGroup: tfItemGroups.hardenedGlass, amount: 2, randomCycle: true },
      { item: tf.constantanBlend },
    ],
    outputs: [
      { item: tf.hardenedConstantanGlass, amount: 2 },
      { item: tf.richSlag, chance: 15 },
    ],
    energy: 6_000,
  },
  hardenedCopperGlass: {
    inputs: [
      { itemGroup: tfItemGroups.hardenedGlass, amount: 2, randomCycle: true },
      { item: tf.pulverizedCopper },
    ],
    outputs: [
      { item: tf.hardenedCopperGlass, amount: 2 },
      { item: tf.richSlag, chance: 15 },
    ],
    energy: 6_000,
  },
  hardenedElectrumGlass: {
    inputs: [
      { itemGroup: tfItemGroups.hardenedGlass, amount: 2, randomCycle: true },
      { item: tf.electrumBlend },
    ],
    outputs: [
      { item: tf.hardenedElectrumGlass, amount: 2 },
      { item: tf.richSlag, chance: 15 },
    ],
    energy: 6_000,
  },
  hardenedEnderiumGlass: {
    inputs: [
      { itemGroup: tfItemGroups.hardenedGlass, amount: 2, randomCycle: true },
      { item: tf.enderiumBlend },
    ],
    outputs: [
      { item: tf.hardenedEnderiumGlass, amount: 2 },
      { item: tf.richSlag, chance: 15 },
    ],
    energy: 6_000,
  },
  hardenedGlass: {
    inputs: [
      { item: tf.pulverizedLead, amount: 1 },
      { item: tf.pulverizedObsidian, amount: 4 },
    ],
    outputs: [{ item: tf.hardenedGlass, amount: 2 }],
    energy: 8_000,
  },
  hardenedGlassLead: {
    inputs: [
      { itemGroup: tfItemGroups.hardenedGlass, amount: 2, randomCycle: true },
      { item: tf.pulverizedLead },
    ],
    outputs: [
      { item: tf.hardenedGlass, amount: 2 },
      { item: tf.richSlag, chance: 15 },
    ],
    energy: 6_000,
  },
  hardenedGlassMetal: {
    inputs: [
      { itemGroup: tfItemGroups.hardenedGlass, amount: 2, randomCycle: true },
      {
        item: [
          tf.pulverizedCopper,
          tf.pulverizedTin,
          tf.pulverizedSilver,
          tf.pulverizedLead,
          tf.pulverizedAluminum,
          tf.pulverizedNickel,
          tf.pulverizedPlatinum,
          tf.pulverizedIridium,
          tf.pulverizedManaInfusedMetal,
          tf.steelBlend,
          tf.electrumBlend,
          tf.invarBlend,
          tf.bronzeBlend,
          tf.constantanBlend,
          tf.signalumBlend,
          tf.lumiumBlend,
          tf.enderiumBlend,
        ],
      },
    ],
    outputs: [
      {
        item: [
          tf.hardenedCopperGlass,
          tf.hardenedTinGlass,
          tf.hardenedSilverGlass,
          tf.hardenedGlass,
          tf.hardenedAluminumGlass,
          tf.hardenedNickelGlass,
          tf.hardenedPlatinumGlass,
          tf.hardenedIridiumGlass,
          tf.hardenedManaInfusedGlass,
          tf.hardenedSteelGlass,
          tf.hardenedElectrumGlass,
          tf.hardenedInvarGlass,
          tf.hardenedBronzeGlass,
          tf.hardenedConstantanGlass,
          tf.hardenedSignalumGlass,
          tf.hardenedLumiumGlass,
          tf.hardenedEnderiumGlass,
        ],
        amount: 2,
      },
      { item: tf.richSlag, chance: 15 },
    ],
    energy: 6_000,
    results: [
      { html: '<a href="/docs/1.12/thermal-foundation/hardened-glass/">Metal Hardened Glass</a>' },
      { item: tf.richSlag },
    ],
    ingredients: [{ itemGroup: tfItemGroups.hardenedGlass }, { html: 'Metal Dust' }],
  },
  hardenedInvarGlass: {
    inputs: [
      { itemGroup: tfItemGroups.hardenedGlass, amount: 2, randomCycle: true },
      { item: tf.invarBlend },
    ],
    outputs: [
      { item: tf.hardenedInvarGlass, amount: 2 },
      { item: tf.richSlag, chance: 15 },
    ],
    energy: 6_000,
  },
  hardenedIridiumGlass: {
    inputs: [
      { itemGroup: tfItemGroups.hardenedGlass, amount: 2, randomCycle: true },
      { item: tf.pulverizedIridium },
    ],
    outputs: [
      { item: tf.hardenedIridiumGlass, amount: 2 },
      { item: tf.richSlag, chance: 15 },
    ],
    energy: 6_000,
  },
  hardenedLumiumGlass: {
    inputs: [
      { itemGroup: tfItemGroups.hardenedGlass, amount: 2, randomCycle: true },
      { item: tf.lumiumBlend },
    ],
    outputs: [
      { item: tf.hardenedLumiumGlass, amount: 2 },
      { item: tf.richSlag, chance: 15 },
    ],
    energy: 6_000,
  },
  hardenedManaInfusedGlass: {
    inputs: [
      { itemGroup: tfItemGroups.hardenedGlass, amount: 2, randomCycle: true },
      { item: tf.pulverizedManaInfusedMetal },
    ],
    outputs: [
      { item: tf.hardenedManaInfusedGlass, amount: 2 },
      { item: tf.richSlag, chance: 15 },
    ],
    energy: 6_000,
  },
  hardenedNickelGlass: {
    inputs: [
      { itemGroup: tfItemGroups.hardenedGlass, amount: 2, randomCycle: true },
      { item: tf.pulverizedNickel },
    ],
    outputs: [
      { item: tf.hardenedNickelGlass, amount: 2 },
      { item: tf.richSlag, chance: 15 },
    ],
    energy: 6_000,
  },
  hardenedPlatinumGlass: {
    inputs: [
      { itemGroup: tfItemGroups.hardenedGlass, amount: 2, randomCycle: true },
      { item: tf.pulverizedPlatinum },
    ],
    outputs: [
      { item: tf.hardenedPlatinumGlass, amount: 2 },
      { item: tf.richSlag, chance: 15 },
    ],
    energy: 6_000,
  },
  hardenedSignalumGlass: {
    inputs: [
      { itemGroup: tfItemGroups.hardenedGlass, amount: 2, randomCycle: true },
      { item: tf.signalumBlend },
    ],
    outputs: [
      { item: tf.hardenedSignalumGlass, amount: 2 },
      { item: tf.richSlag, chance: 15 },
    ],
    energy: 6_000,
  },
  hardenedSilverGlass: {
    inputs: [
      { itemGroup: tfItemGroups.hardenedGlass, amount: 2, randomCycle: true },
      { item: tf.pulverizedSilver },
    ],
    outputs: [
      { item: tf.hardenedSilverGlass, amount: 2 },
      { item: tf.richSlag, chance: 15 },
    ],
    energy: 6_000,
  },
  hardenedSteelGlass: {
    inputs: [
      { itemGroup: tfItemGroups.hardenedGlass, amount: 2, randomCycle: true },
      { item: tf.steelBlend },
    ],
    outputs: [
      { item: tf.hardenedSteelGlass, amount: 2 },
      { item: tf.richSlag, chance: 15 },
    ],
    energy: 6_000,
  },
  hardenedTinGlass: {
    inputs: [
      { itemGroup: tfItemGroups.hardenedGlass, amount: 2, randomCycle: true },
      { item: tf.pulverizedTin },
    ],
    outputs: [
      { item: tf.hardenedTinGlass, amount: 2 },
      { item: tf.richSlag, chance: 15 },
    ],
    energy: 6_000,
  },
  invarIngot: {
    ironIngotAndNickelIngot: {
      inputs: [{ item: mc.ironIngot, amount: 2 }, { item: tf.nickelIngot }],
      outputs: [{ item: tf.invarIngot, amount: 3 }],
      energy: 3_600,
    },
    ironIngotAndPulverizedNickel: {
      inputs: [{ item: mc.ironIngot, amount: 2 }, { item: tf.pulverizedNickel }],
      outputs: [{ item: tf.invarIngot, amount: 3 }],
      energy: 3_200,
    },
    pulverizedIronAndNickelIngot: {
      inputs: [{ item: tf.pulverizedIron, amount: 2 }, { item: tf.nickelIngot }],
      outputs: [{ item: tf.invarIngot, amount: 3 }],
      energy: 2_800,
    },
    pulverizedIronAndPulverizedNickel: {
      inputs: [{ item: tf.pulverizedIron, amount: 2 }, { item: tf.pulverizedNickel }],
      outputs: [{ item: tf.invarIngot, amount: 3 }],
      energy: 2_400,
    },
  },
  netherBricks: {
    inputs: [{ item: mc.netherrack, amount: 2 }, { item: mc.soulSand }],
    outputs: [
      { item: mc.netherBricks, amount: 2 },
      { item: tf.sulfur, chance: 25 },
    ],
    energy: 4_000,
  },
  oreProcessing: {
    aluminum: {
      inputs: [{ item: tf.aluminumOre }, { item: mc.sand }],
      outputs: [
        { item: tf.aluminumIngot, amount: 2 },
        { item: tf.richSlag, amount: 1, chance: 5 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    copper: {
      inputs: [{ item: tf.copperOre }, { item: mc.sand }],
      outputs: [
        { item: tf.copperIngot, amount: 2 },
        { item: tf.richSlag, amount: 1, chance: 5 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    gold: {
      inputs: [{ item: mc.goldOre }, { item: mc.sand }],
      outputs: [
        { item: mc.goldIngot, amount: 2 },
        { item: tf.richSlag, amount: 1, chance: 20 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    iridium: {
      inputs: [{ item: tf.iridiumOre }, { item: mc.sand }],
      outputs: [
        { item: tf.iridiumIngot, amount: 2 },
        { item: tf.richSlag, amount: 1, chance: 5 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    iron: {
      inputs: [{ item: mc.ironOre }, { item: mc.sand }],
      outputs: [
        { item: mc.ironIngot, amount: 2 },
        { item: tf.richSlag, amount: 1, chance: 5 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    lapisLazuli: {
      inputs: [{ item: mc.lapisLazuliOre }, { item: mc.sand }],
      outputs: [
        { item: mc.lapisLazuli, amount: 8 },
        { item: tf.richSlag, chance: 50 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    lead: {
      inputs: [{ item: tf.leadOre }, { item: mc.sand }],
      outputs: [
        { item: tf.leadIngot, amount: 2 },
        { item: tf.richSlag, amount: 1, chance: 5 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    mithril: {
      inputs: [{ item: tf.manaInfusedOre }, { item: mc.sand }],
      outputs: [
        { item: tf.manaInfusedIngot, amount: 2 },
        { item: tf.richSlag, amount: 1, chance: 5 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    netherQuartz: {
      inputs: [{ item: mc.netherQuartzOre }, { item: mc.sand }],
      outputs: [
        { item: mc.netherQuartz, amount: 4 },
        { item: tf.richSlag, chance: 50 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    nickel: {
      inputs: [{ item: tf.nickelOre }, { item: mc.sand }],
      outputs: [
        { item: tf.nickelIngot, amount: 2 },
        { item: tf.richSlag, amount: 1, chance: 15 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    platinum: {
      inputs: [{ item: tf.platinumOre }, { item: mc.sand }],
      outputs: [
        { item: tf.platinumIngot, amount: 2 },
        { item: tf.richSlag, amount: 1, chance: 5 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    redstone: {
      inputs: [{ item: mc.redstoneOre }, { item: mc.sand }],
      outputs: [
        { item: mc.redstone, amount: 8 },
        { item: tf.richSlag, chance: 50 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    silver: {
      inputs: [{ item: tf.silverOre }, { item: mc.sand }],
      outputs: [
        { item: tf.silverIngot, amount: 2 },
        { item: tf.richSlag, amount: 1, chance: 5 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    tin: {
      inputs: [{ item: tf.tinOre }, { item: mc.sand }],
      outputs: [
        { item: tf.tinIngot, amount: 2 },
        { item: tf.richSlag, amount: 1, chance: 5 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
  },
  oreProcessingCinnabar: {
    aluminum: {
      inputs: [{ item: tf.aluminumOre }, { item: tf.cinnabar }],
      outputs: [
        { item: tf.aluminumIngot, amount: 3 },
        { item: mc.ironIngot, amount: 1, chance: 100 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    copper: {
      inputs: [{ item: tf.copperOre }, { item: tf.cinnabar }],
      outputs: [
        { item: tf.copperIngot, amount: 3 },
        { item: mc.goldIngot, amount: 1, chance: 100 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    gold: {
      inputs: [{ item: mc.goldOre }, { item: tf.cinnabar }],
      outputs: [
        { item: mc.goldIngot, amount: 3 },
        { item: tf.richSlag, amount: 1, chance: 75 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    iridium: {
      inputs: [{ item: tf.iridiumOre }, { item: tf.cinnabar }],
      outputs: [
        { item: tf.iridiumIngot, amount: 3 },
        { item: tf.platinumIngot, amount: 1, chance: 100 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    iron: {
      inputs: [{ item: mc.ironOre }, { item: tf.cinnabar }],
      outputs: [
        { item: mc.ironIngot, amount: 3 },
        { item: tf.nickelIngot, amount: 1, chance: 100 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    lead: {
      inputs: [{ item: tf.leadOre }, { item: tf.cinnabar }],
      outputs: [
        { item: tf.leadIngot, amount: 3 },
        { item: tf.silverIngot, amount: 1, chance: 100 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    mithril: {
      inputs: [{ item: tf.manaInfusedOre }, { item: tf.cinnabar }],
      outputs: [
        { item: tf.manaInfusedIngot, amount: 3 },
        { item: mc.goldIngot, amount: 1, chance: 100 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    nickel: {
      inputs: [{ item: tf.nickelOre }, { item: tf.cinnabar }],
      outputs: [
        { item: tf.nickelIngot, amount: 3 },
        { item: tf.platinumIngot, amount: 1, chance: 100 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    platinum: {
      inputs: [{ item: tf.platinumOre }, { item: tf.cinnabar }],
      outputs: [
        { item: tf.platinumIngot, amount: 3 },
        { item: tf.iridiumIngot, amount: 1, chance: 100 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    silver: {
      inputs: [{ item: tf.silverOre }, { item: tf.cinnabar }],
      outputs: [
        { item: tf.silverIngot, amount: 3 },
        { item: tf.leadIngot, amount: 1, chance: 100 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    tin: {
      inputs: [{ item: tf.tinOre }, { item: tf.cinnabar }],
      outputs: [
        { item: tf.tinIngot, amount: 3 },
        { item: mc.ironIngot, amount: 1, chance: 100 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
  },
  oreProcessingRichSlag: {
    aluminum: {
      inputs: [{ item: tf.aluminumOre }, { item: tf.richSlag }],
      outputs: [
        { item: tf.aluminumIngot, amount: 3 },
        { item: tf.slag, amount: 1, chance: 75 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    copper: {
      inputs: [{ item: tf.copperOre }, { item: tf.richSlag }],
      outputs: [
        { item: tf.copperIngot, amount: 3 },
        { item: tf.slag, amount: 1, chance: 75 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    gold: {
      inputs: [{ item: mc.goldOre }, { item: tf.richSlag }],
      outputs: [
        { item: mc.goldIngot, amount: 3 },
        { item: tf.slag, amount: 1, chance: 75 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    iridium: {
      inputs: [{ item: tf.iridiumOre }, { item: tf.richSlag }],
      outputs: [
        { item: tf.iridiumIngot, amount: 3 },
        { item: tf.slag, amount: 1, chance: 75 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    iron: {
      inputs: [{ item: mc.ironOre }, { item: tf.richSlag }],
      outputs: [
        { item: mc.ironIngot, amount: 3 },
        { item: tf.slag, amount: 1, chance: 75 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    lead: {
      inputs: [{ item: tf.leadOre }, { item: tf.richSlag }],
      outputs: [
        { item: tf.leadIngot, amount: 3 },
        { item: tf.slag, amount: 1, chance: 75 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    mithril: {
      inputs: [{ item: tf.manaInfusedOre }, { item: tf.richSlag }],
      outputs: [
        { item: tf.manaInfusedIngot, amount: 3 },
        { item: tf.slag, amount: 1, chance: 75 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    nickel: {
      inputs: [{ item: tf.nickelOre }, { item: tf.richSlag }],
      outputs: [
        { item: tf.nickelIngot, amount: 3 },
        { item: tf.slag, amount: 1, chance: 75 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    platinum: {
      inputs: [{ item: tf.platinumOre }, { item: tf.richSlag }],
      outputs: [
        { item: tf.platinumIngot, amount: 3 },
        { item: tf.slag, amount: 1, chance: 75 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    silver: {
      inputs: [{ item: tf.silverOre }, { item: tf.richSlag }],
      outputs: [
        { item: tf.silverIngot, amount: 3 },
        { item: tf.slag, amount: 1, chance: 75 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    tin: {
      inputs: [{ item: tf.tinOre }, { item: tf.richSlag }],
      outputs: [
        { item: tf.tinIngot, amount: 3 },
        { item: tf.slag, amount: 1, chance: 75 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
  },
  recycling: {
    aluminumAxe: {
      inputs: [{ item: tf.aluminumAxe }, { item: mc.sand }],
      outputs: [{ item: tf.aluminumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    aluminumBoots: {
      inputs: [{ item: tf.aluminumBoots }, { item: mc.sand }],
      outputs: [
        { item: tf.aluminumIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    aluminumChestplate: {
      inputs: [{ item: tf.aluminumChestplate }, { item: mc.sand }],
      outputs: [
        { item: tf.aluminumIngot, amount: 4 },
        { item: tf.slag, chance: 25 },
      ],
      energy: 6_000,
    },
    aluminumExcavator: {
      inputs: [{ item: tf.aluminumExcavator }, { item: mc.sand }],
      outputs: [{ item: tf.aluminumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    aluminumFishingRod: {
      inputs: [{ item: tf.aluminumFishingRod }, { item: mc.sand }],
      outputs: [{ item: tf.aluminumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    aluminumGear: {
      inputs: [{ item: tf.aluminumGear }, { item: mc.sand }],
      outputs: [
        { item: tf.aluminumIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 3_000,
    },
    aluminumHammer: {
      inputs: [{ item: tf.aluminumHammer }, { item: mc.sand }],
      outputs: [
        { item: tf.aluminumIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    aluminumHelmet: {
      inputs: [{ item: tf.aluminumHelmet }, { item: mc.sand }],
      outputs: [
        { item: tf.aluminumIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    aluminumHoe: {
      inputs: [{ item: tf.aluminumHoe }, { item: mc.sand }],
      outputs: [{ item: tf.aluminumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    aluminumHorseArmor: {
      inputs: [{ item: tf.aluminumHorseArmor }, { item: mc.sand }],
      outputs: [
        { item: tf.aluminumIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    aluminumLeggings: {
      inputs: [{ item: tf.aluminumLeggings }, { item: mc.sand }],
      outputs: [
        { item: tf.aluminumIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    aluminumPickaxe: {
      inputs: [{ item: tf.aluminumPickaxe }, { item: mc.sand }],
      outputs: [{ item: tf.aluminumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    aluminumPlate: {
      inputs: [{ item: tf.aluminumPlate }, { item: mc.sand }],
      outputs: [{ item: tf.aluminumIngot }, { item: tf.slag, chance: 10 }],
      energy: 2_000,
    },
    aluminumReinforcedBow: {
      inputs: [{ item: tf.aluminumReinforcedBow }, { item: mc.sand }],
      outputs: [{ item: tf.aluminumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    aluminumShears: {
      inputs: [{ item: tf.aluminumShears }, { item: mc.sand }],
      outputs: [{ item: tf.aluminumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    aluminumShield: {
      inputs: [{ item: tf.aluminumShield }, { item: mc.sand }],
      outputs: [
        { item: tf.aluminumIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    aluminumShovel: {
      inputs: [{ item: tf.aluminumShovel }, { item: mc.sand }],
      outputs: [{ item: tf.aluminumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    aluminumSickle: {
      inputs: [{ item: tf.aluminumSickle }, { item: mc.sand }],
      outputs: [{ item: tf.aluminumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    aluminumSword: {
      inputs: [{ item: tf.aluminumSword }, { item: mc.sand }],
      outputs: [{ item: tf.aluminumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    anvil: {
      inputs: [{ item: mc.anvil }, { item: mc.sand }],
      outputs: [
        { item: mc.ironIngot, amount: 31 },
        { item: tf.slag, chance: 50 },
      ],
      energy: 4_000,
    },
    bronzeAxe: {
      inputs: [{ item: tf.bronzeAxe }, { item: mc.sand }],
      outputs: [{ item: tf.bronzeIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    bronzeBoots: {
      inputs: [{ item: tf.bronzeBoots }, { item: mc.sand }],
      outputs: [
        { item: tf.bronzeIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    bronzeChestplate: {
      inputs: [{ item: tf.bronzeChestplate }, { item: mc.sand }],
      outputs: [
        { item: tf.bronzeIngot, amount: 4 },
        { item: tf.slag, chance: 25 },
      ],
      energy: 6_000,
    },
    bronzeExcavator: {
      inputs: [{ item: tf.bronzeExcavator }, { item: mc.sand }],
      outputs: [{ item: tf.bronzeIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    bronzeFishingRod: {
      inputs: [{ item: tf.bronzeFishingRod }, { item: mc.sand }],
      outputs: [{ item: tf.bronzeIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    bronzeGear: {
      inputs: [{ item: tf.bronzeGear }, { item: mc.sand }],
      outputs: [
        { item: tf.bronzeIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 3_000,
    },
    bronzeHammer: {
      inputs: [{ item: tf.bronzeHammer }, { item: mc.sand }],
      outputs: [
        { item: tf.bronzeIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    bronzeHelmet: {
      inputs: [{ item: tf.bronzeHelmet }, { item: mc.sand }],
      outputs: [
        { item: tf.bronzeIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    bronzeHoe: {
      inputs: [{ item: tf.bronzeHoe }, { item: mc.sand }],
      outputs: [{ item: tf.bronzeIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    bronzeHorseArmor: {
      inputs: [{ item: tf.bronzeHorseArmor }, { item: mc.sand }],
      outputs: [
        { item: tf.bronzeIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    bronzeLeggings: {
      inputs: [{ item: tf.bronzeLeggings }, { item: mc.sand }],
      outputs: [
        { item: tf.bronzeIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    bronzePickaxe: {
      inputs: [{ item: tf.bronzePickaxe }, { item: mc.sand }],
      outputs: [{ item: tf.bronzeIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    bronzePlate: {
      inputs: [{ item: tf.bronzePlate }, { item: mc.sand }],
      outputs: [{ item: tf.bronzeIngot }, { item: tf.slag, chance: 10 }],
      energy: 2_000,
    },
    bronzeReinforcedBow: {
      inputs: [{ item: tf.bronzeReinforcedBow }, { item: mc.sand }],
      outputs: [{ item: tf.bronzeIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    bronzeShears: {
      inputs: [{ item: tf.bronzeShears }, { item: mc.sand }],
      outputs: [{ item: tf.bronzeIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    bronzeShield: {
      inputs: [{ item: tf.bronzeShield }, { item: mc.sand }],
      outputs: [
        { item: tf.bronzeIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    bronzeShovel: {
      inputs: [{ item: tf.bronzeShovel }, { item: mc.sand }],
      outputs: [{ item: tf.bronzeIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    bronzeSickle: {
      inputs: [{ item: tf.bronzeSickle }, { item: mc.sand }],
      outputs: [{ item: tf.bronzeIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    bronzeSword: {
      inputs: [{ item: tf.bronzeSword }, { item: mc.sand }],
      outputs: [{ item: tf.bronzeIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    bucket: {
      inputs: [{ item: mc.bucket }, { item: mc.sand }],
      outputs: [
        { item: mc.ironIngot, amount: 3 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 4_000,
    },
    cauldron: {
      inputs: [{ item: mc.cauldron }, { item: mc.sand }],
      outputs: [
        { item: mc.ironIngot, amount: 7 },
        { item: tf.slag, chance: 35 },
      ],
      energy: 4_000,
    },
    clock: {
      inputs: [{ item: mc.clock }, { item: mc.sand }],
      outputs: [
        { item: mc.goldIngot, amount: 4 },
        { item: tf.richSlag, chance: 20 },
      ],
      energy: 4_000,
    },
    compass: {
      inputs: [{ item: mc.compass }, { item: mc.sand }],
      outputs: [
        { item: mc.ironIngot, amount: 4 },
        { item: tf.richSlag, chance: 20 },
      ],
      energy: 4_000,
    },
    constantanAxe: {
      inputs: [{ item: tf.constantanAxe }, { item: mc.sand }],
      outputs: [{ item: tf.constantanIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    constantanBoots: {
      inputs: [{ item: tf.constantanBoots }, { item: mc.sand }],
      outputs: [
        { item: tf.constantanIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    constantanChestplate: {
      inputs: [{ item: tf.constantanChestplate }, { item: mc.sand }],
      outputs: [
        { item: tf.constantanIngot, amount: 4 },
        { item: tf.slag, chance: 25 },
      ],
      energy: 6_000,
    },
    constantanExcavator: {
      inputs: [{ item: tf.constantanExcavator }, { item: mc.sand }],
      outputs: [{ item: tf.constantanIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    constantanFishingRod: {
      inputs: [{ item: tf.constantanFishingRod }, { item: mc.sand }],
      outputs: [{ item: tf.constantanIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    constantanGear: {
      inputs: [{ item: tf.constantanGear }, { item: mc.sand }],
      outputs: [
        { item: tf.constantanIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 3_000,
    },
    constantanHammer: {
      inputs: [{ item: tf.constantanHammer }, { item: mc.sand }],
      outputs: [
        { item: tf.constantanIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    constantanHelmet: {
      inputs: [{ item: tf.constantanHelmet }, { item: mc.sand }],
      outputs: [
        { item: tf.constantanIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    constantanHoe: {
      inputs: [{ item: tf.constantanHoe }, { item: mc.sand }],
      outputs: [{ item: tf.constantanIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    constantanHorseArmor: {
      inputs: [{ item: tf.constantanHorseArmor }, { item: mc.sand }],
      outputs: [
        { item: tf.constantanIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    constantanLeggings: {
      inputs: [{ item: tf.constantanLeggings }, { item: mc.sand }],
      outputs: [
        { item: tf.constantanIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    constantanPickaxe: {
      inputs: [{ item: tf.constantanPickaxe }, { item: mc.sand }],
      outputs: [{ item: tf.constantanIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    constantanPlate: {
      inputs: [{ item: tf.constantanPlate }, { item: mc.sand }],
      outputs: [{ item: tf.constantanIngot }, { item: tf.slag, chance: 10 }],
      energy: 2_000,
    },
    constantanReinforcedBow: {
      inputs: [{ item: tf.constantanReinforcedBow }, { item: mc.sand }],
      outputs: [{ item: tf.constantanIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    constantanShears: {
      inputs: [{ item: tf.constantanShears }, { item: mc.sand }],
      outputs: [{ item: tf.constantanIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    constantanShield: {
      inputs: [{ item: tf.constantanShield }, { item: mc.sand }],
      outputs: [
        { item: tf.constantanIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    constantanShovel: {
      inputs: [{ item: tf.constantanShovel }, { item: mc.sand }],
      outputs: [{ item: tf.constantanIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    constantanSickle: {
      inputs: [{ item: tf.constantanSickle }, { item: mc.sand }],
      outputs: [{ item: tf.constantanIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    constantanSword: {
      inputs: [{ item: tf.constantanSword }, { item: mc.sand }],
      outputs: [{ item: tf.constantanIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    copperAxe: {
      inputs: [{ item: tf.copperAxe }, { item: mc.sand }],
      outputs: [{ item: tf.copperIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    copperBoots: {
      inputs: [{ item: tf.copperBoots }, { item: mc.sand }],
      outputs: [
        { item: tf.copperIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    copperChestplate: {
      inputs: [{ item: tf.copperChestplate }, { item: mc.sand }],
      outputs: [
        { item: tf.copperIngot, amount: 4 },
        { item: tf.slag, chance: 25 },
      ],
      energy: 6_000,
    },
    copperExcavator: {
      inputs: [{ item: tf.copperExcavator }, { item: mc.sand }],
      outputs: [{ item: tf.copperIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    copperFishingRod: {
      inputs: [{ item: tf.copperFishingRod }, { item: mc.sand }],
      outputs: [{ item: tf.copperIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    copperGear: {
      inputs: [{ item: tf.copperGear }, { item: mc.sand }],
      outputs: [
        { item: tf.copperIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 3_000,
    },
    copperHammer: {
      inputs: [{ item: tf.copperHammer }, { item: mc.sand }],
      outputs: [
        { item: tf.copperIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    copperHelmet: {
      inputs: [{ item: tf.copperHelmet }, { item: mc.sand }],
      outputs: [
        { item: tf.copperIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    copperHoe: {
      inputs: [{ item: tf.copperHoe }, { item: mc.sand }],
      outputs: [{ item: tf.copperIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    copperHorseArmor: {
      inputs: [{ item: tf.copperHorseArmor }, { item: mc.sand }],
      outputs: [
        { item: tf.copperIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    copperLeggings: {
      inputs: [{ item: tf.copperLeggings }, { item: mc.sand }],
      outputs: [
        { item: tf.copperIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    copperPickaxe: {
      inputs: [{ item: tf.copperPickaxe }, { item: mc.sand }],
      outputs: [{ item: tf.copperIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    copperPlate: {
      inputs: [{ item: tf.copperPlate }, { item: mc.sand }],
      outputs: [{ item: tf.copperIngot }, { item: tf.slag, chance: 10 }],
      energy: 2_000,
    },
    copperReinforcedBow: {
      inputs: [{ item: tf.copperReinforcedBow }, { item: mc.sand }],
      outputs: [{ item: tf.copperIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    copperShears: {
      inputs: [{ item: tf.copperShears }, { item: mc.sand }],
      outputs: [{ item: tf.copperIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    copperShield: {
      inputs: [{ item: tf.copperShield }, { item: mc.sand }],
      outputs: [
        { item: tf.copperIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    copperShovel: {
      inputs: [{ item: tf.copperShovel }, { item: mc.sand }],
      outputs: [{ item: tf.copperIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    copperSickle: {
      inputs: [{ item: tf.copperSickle }, { item: mc.sand }],
      outputs: [{ item: tf.copperIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    copperSword: {
      inputs: [{ item: tf.copperSword }, { item: mc.sand }],
      outputs: [{ item: tf.copperIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    electrumAxe: {
      inputs: [{ item: tf.electrumAxe }, { item: mc.sand }],
      outputs: [{ item: tf.electrumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    electrumBoots: {
      inputs: [{ item: tf.electrumBoots }, { item: mc.sand }],
      outputs: [
        { item: tf.electrumIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    electrumChestplate: {
      inputs: [{ item: tf.electrumChestplate }, { item: mc.sand }],
      outputs: [
        { item: tf.electrumIngot, amount: 4 },
        { item: tf.slag, chance: 25 },
      ],
      energy: 6_000,
    },
    electrumExcavator: {
      inputs: [{ item: tf.electrumExcavator }, { item: mc.sand }],
      outputs: [{ item: tf.electrumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    electrumFishingRod: {
      inputs: [{ item: tf.electrumFishingRod }, { item: mc.sand }],
      outputs: [{ item: tf.electrumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    electrumGear: {
      inputs: [{ item: tf.electrumGear }, { item: mc.sand }],
      outputs: [
        { item: tf.electrumIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 3_000,
    },
    electrumHammer: {
      inputs: [{ item: tf.electrumHammer }, { item: mc.sand }],
      outputs: [
        { item: tf.electrumIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    electrumHelmet: {
      inputs: [{ item: tf.electrumHelmet }, { item: mc.sand }],
      outputs: [
        { item: tf.electrumIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    electrumHoe: {
      inputs: [{ item: tf.electrumHoe }, { item: mc.sand }],
      outputs: [{ item: tf.electrumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    electrumHorseArmor: {
      inputs: [{ item: tf.electrumHorseArmor }, { item: mc.sand }],
      outputs: [
        { item: tf.electrumIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    electrumLeggings: {
      inputs: [{ item: tf.electrumLeggings }, { item: mc.sand }],
      outputs: [
        { item: tf.electrumIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    electrumPickaxe: {
      inputs: [{ item: tf.electrumPickaxe }, { item: mc.sand }],
      outputs: [{ item: tf.electrumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    electrumPlate: {
      inputs: [{ item: tf.electrumPlate }, { item: mc.sand }],
      outputs: [{ item: tf.electrumIngot }, { item: tf.slag, chance: 10 }],
      energy: 2_000,
    },
    electrumReinforcedBow: {
      inputs: [{ item: tf.electrumReinforcedBow }, { item: mc.sand }],
      outputs: [{ item: tf.electrumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    electrumShears: {
      inputs: [{ item: tf.electrumShears }, { item: mc.sand }],
      outputs: [{ item: tf.electrumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    electrumShield: {
      inputs: [{ item: tf.electrumShield }, { item: mc.sand }],
      outputs: [
        { item: tf.electrumIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    electrumShovel: {
      inputs: [{ item: tf.electrumShovel }, { item: mc.sand }],
      outputs: [{ item: tf.electrumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    electrumSickle: {
      inputs: [{ item: tf.electrumSickle }, { item: mc.sand }],
      outputs: [{ item: tf.electrumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    electrumSword: {
      inputs: [{ item: tf.electrumSword }, { item: mc.sand }],
      outputs: [{ item: tf.electrumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    enderiumGear: {
      inputs: [{ item: tf.enderiumGear }, { item: mc.sand }],
      outputs: [
        { item: tf.enderiumIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 3_000,
    },
    enderiumPlate: {
      inputs: [{ item: tf.enderiumPlate }, { item: mc.sand }],
      outputs: [{ item: tf.enderiumIngot }, { item: tf.slag, chance: 10 }],
      energy: 2_000,
    },
    fishingRodMetal: {
      inputs: [{ itemGroup: tfItemGroups.metalFishingRod }, { item: mc.sand }],
      outputs: [{ itemGroup: tfItemGroups.equipmentMetalIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    fluxInfusedAxe: {
      inputs: [{ itemGroup: tfItemGroups.metalAxe }, { item: mc.sand }],
      outputs: [{ itemGroup: tfItemGroups.equipmentMetalIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    fluxInfusedBoots: {
      inputs: [{ itemGroup: tfItemGroups.metalBoots }, { item: mc.sand }],
      outputs: [
        { itemGroup: tfItemGroups.equipmentMetalIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    fluxInfusedBowMetal: {
      inputs: [{ itemGroup: tfItemGroups.metalReinforcedBow }, { item: mc.sand }],
      outputs: [{ itemGroup: tfItemGroups.equipmentMetalIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    fluxInfusedChestplate: {
      inputs: [{ itemGroup: tfItemGroups.metalChestplate }, { item: mc.sand }],
      outputs: [
        { itemGroup: tfItemGroups.equipmentMetalIngot, amount: 4 },
        { item: tf.slag, chance: 25 },
      ],
      energy: 6_000,
    },
    fluxInfusedExcavator: {
      inputs: [{ itemGroup: tfItemGroups.metalExcavator }, { item: mc.sand }],
      outputs: [{ itemGroup: tfItemGroups.equipmentMetalIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    fluxInfusedHammer: {
      inputs: [{ itemGroup: tfItemGroups.metalHammer }, { item: mc.sand }],
      outputs: [
        { itemGroup: tfItemGroups.equipmentMetalIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    fluxInfusedHelm: {
      inputs: [{ itemGroup: tfItemGroups.metalHelmet }, { item: mc.sand }],
      outputs: [
        { itemGroup: tfItemGroups.equipmentMetalIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    fluxInfusedLeggings: {
      inputs: [{ itemGroup: tfItemGroups.metalLeggings }, { item: mc.sand }],
      outputs: [
        { itemGroup: tfItemGroups.equipmentMetalIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    fluxInfusedPickaxe: {
      inputs: [{ itemGroup: tfItemGroups.metalPickaxe }, { item: mc.sand }],
      outputs: [{ itemGroup: tfItemGroups.equipmentMetalIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    fluxInfusedShovel: {
      inputs: [{ itemGroup: tfItemGroups.metalShovel }, { item: mc.sand }],
      outputs: [{ itemGroup: tfItemGroups.equipmentMetalIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    fluxInfusedSickle: {
      inputs: [{ itemGroup: tfItemGroups.metalSickle }, { item: mc.sand }],
      outputs: [{ itemGroup: tfItemGroups.equipmentMetalIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    fluxInfusedSword: {
      inputs: [{ itemGroup: tfItemGroups.metalSword }, { item: mc.sand }],
      outputs: [{ itemGroup: tfItemGroups.equipmentMetalIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    gear: {
      inputs: [{ itemGroup: tfItemGroups.metalGear }, { item: mc.sand }],
      outputs: [
        { itemGroup: tfItemGroups.metalIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 3_000,
    },
    goldExcavator: {
      inputs: [{ item: tf.goldExcavator }, { item: mc.sand }],
      outputs: [{ item: mc.goldIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    goldFishingRod: {
      inputs: [{ item: tf.goldFishingRod }, { item: mc.sand }],
      outputs: [{ item: mc.goldIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    goldGear: {
      inputs: [{ item: tf.goldGear }, { item: mc.sand }],
      outputs: [
        { item: mc.goldIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 3_000,
    },
    goldHammer: {
      inputs: [{ item: tf.goldHammer }, { item: mc.sand }],
      outputs: [
        { item: mc.goldIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    goldPlate: {
      inputs: [{ item: tf.goldPlate }, { item: mc.sand }],
      outputs: [{ item: mc.goldIngot }, { item: tf.slag, chance: 10 }],
      energy: 2_000,
    },
    goldReinforcedBow: {
      inputs: [{ item: tf.goldReinforcedBow }, { item: mc.sand }],
      outputs: [{ item: mc.goldIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    goldShears: {
      inputs: [{ item: tf.goldShears }, { item: mc.sand }],
      outputs: [{ item: mc.goldIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    goldShield: {
      inputs: [{ item: tf.goldShield }, { item: mc.sand }],
      outputs: [
        { item: mc.goldIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    goldSickle: {
      inputs: [{ item: tf.goldSickle }, { item: mc.sand }],
      outputs: [{ item: mc.goldIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    hopper: {
      inputs: [{ item: mc.hopper }, { item: mc.sand }],
      outputs: [
        { item: mc.ironIngot, amount: 5 },
        { item: tf.slag, chance: 25 },
      ],
      energy: 4_000,
    },
    horseArmorMetal: {
      inputs: [{ itemGroup: tfItemGroups.metalHorseArmor }, { item: mc.sand }],
      outputs: [
        { itemGroup: tfItemGroups.equipmentMetalIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    invarAxe: {
      inputs: [{ item: tf.invarAxe }, { item: mc.sand }],
      outputs: [{ item: tf.invarIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    invarBoots: {
      inputs: [{ item: tf.invarBoots }, { item: mc.sand }],
      outputs: [
        { item: tf.invarIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    invarChestplate: {
      inputs: [{ item: tf.invarChestplate }, { item: mc.sand }],
      outputs: [
        { item: tf.invarIngot, amount: 4 },
        { item: tf.slag, chance: 25 },
      ],
      energy: 6_000,
    },
    invarExcavator: {
      inputs: [{ item: tf.invarExcavator }, { item: mc.sand }],
      outputs: [{ item: tf.invarIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    invarFishingRod: {
      inputs: [{ item: tf.invarFishingRod }, { item: mc.sand }],
      outputs: [{ item: tf.invarIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    invarGear: {
      inputs: [{ item: tf.invarGear }, { item: mc.sand }],
      outputs: [
        { item: tf.invarIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 3_000,
    },
    invarHammer: {
      inputs: [{ item: tf.invarHammer }, { item: mc.sand }],
      outputs: [
        { item: tf.invarIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    invarHelmet: {
      inputs: [{ item: tf.invarHelmet }, { item: mc.sand }],
      outputs: [
        { item: tf.invarIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    invarHoe: {
      inputs: [{ item: tf.invarHoe }, { item: mc.sand }],
      outputs: [{ item: tf.invarIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    invarHorseArmor: {
      inputs: [{ item: tf.invarHorseArmor }, { item: mc.sand }],
      outputs: [
        { item: tf.invarIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    invarLeggings: {
      inputs: [{ item: tf.invarLeggings }, { item: mc.sand }],
      outputs: [
        { item: tf.invarIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    invarPickaxe: {
      inputs: [{ item: tf.invarPickaxe }, { item: mc.sand }],
      outputs: [{ item: tf.invarIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    invarPlate: {
      inputs: [{ item: tf.invarPlate }, { item: mc.sand }],
      outputs: [{ item: tf.invarIngot }, { item: tf.slag, chance: 10 }],
      energy: 2_000,
    },
    invarReinforcedBow: {
      inputs: [{ item: tf.invarReinforcedBow }, { item: mc.sand }],
      outputs: [{ item: tf.invarIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    invarShears: {
      inputs: [{ item: tf.invarShears }, { item: mc.sand }],
      outputs: [{ item: tf.invarIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    invarShield: {
      inputs: [{ item: tf.invarShield }, { item: mc.sand }],
      outputs: [
        { item: tf.invarIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    invarShovel: {
      inputs: [{ item: tf.invarShovel }, { item: mc.sand }],
      outputs: [{ item: tf.invarIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    invarSickle: {
      inputs: [{ item: tf.invarSickle }, { item: mc.sand }],
      outputs: [{ item: tf.invarIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    invarSword: {
      inputs: [{ item: tf.invarSword }, { item: mc.sand }],
      outputs: [{ item: tf.invarIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    iridiumGear: {
      inputs: [{ item: tf.iridiumGear }, { item: mc.sand }],
      outputs: [
        { item: tf.iridiumIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 3_000,
    },
    iridiumPlate: {
      inputs: [{ item: tf.iridiumPlate }, { item: mc.sand }],
      outputs: [{ item: tf.iridiumIngot }, { item: tf.slag, chance: 10 }],
      energy: 2_000,
    },
    ironBars: {
      inputs: [{ item: mc.ironBars }, { item: mc.sand }],
      outputs: [
        { item: mc.ironNugget, amount: 3 },
        { item: tf.slag, chance: 5 },
      ],
      energy: 4_000,
    },
    ironDoor: {
      inputs: [{ item: mc.ironDoor }, { item: mc.sand }],
      outputs: [
        { item: mc.ironIngot, amount: 2 },
        { item: tf.slag, chance: 10 },
      ],
      energy: 4_000,
    },
    ironExcavator: {
      inputs: [{ item: tf.ironExcavator }, { item: mc.sand }],
      outputs: [{ item: mc.ironIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    ironFishingRod: {
      inputs: [{ item: tf.ironFishingRod }, { item: mc.sand }],
      outputs: [{ item: mc.ironIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    ironGear: {
      inputs: [{ item: tf.ironGear }, { item: mc.sand }],
      outputs: [
        { item: mc.ironIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 3_000,
    },
    ironHammer: {
      inputs: [{ item: tf.ironHammer }, { item: mc.sand }],
      outputs: [
        { item: mc.ironIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    ironPlate: {
      inputs: [{ item: tf.ironPlate }, { item: mc.sand }],
      outputs: [{ item: mc.ironIngot }, { item: tf.slag, chance: 10 }],
      energy: 2_000,
    },
    ironReinforcedBow: {
      inputs: [{ item: tf.ironReinforcedBow }, { item: mc.sand }],
      outputs: [{ item: mc.ironIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    ironShield: {
      inputs: [{ item: tf.ironShield }, { item: mc.sand }],
      outputs: [
        { item: mc.ironIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    ironSickle: {
      inputs: [{ item: tf.ironSickle }, { item: mc.sand }],
      outputs: [{ item: mc.ironIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    ironTrapdoor: {
      inputs: [{ item: mc.ironTrapdoor }, { item: mc.sand }],
      outputs: [
        { item: mc.ironIngot, amount: 3 },
        { item: tf.slag, chance: 5 },
      ],
      energy: 4_000,
    },
    leadAxe: {
      inputs: [{ item: tf.leadAxe }, { item: mc.sand }],
      outputs: [{ item: tf.leadIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    leadBoots: {
      inputs: [{ item: tf.leadBoots }, { item: mc.sand }],
      outputs: [
        { item: tf.leadIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    leadChestplate: {
      inputs: [{ item: tf.leadChestplate }, { item: mc.sand }],
      outputs: [
        { item: tf.leadIngot, amount: 4 },
        { item: tf.slag, chance: 25 },
      ],
      energy: 6_000,
    },
    leadExcavator: {
      inputs: [{ item: tf.leadExcavator }, { item: mc.sand }],
      outputs: [{ item: tf.leadIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    leadFishingRod: {
      inputs: [{ item: tf.leadFishingRod }, { item: mc.sand }],
      outputs: [{ item: tf.leadIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    leadGear: {
      inputs: [{ item: tf.leadGear }, { item: mc.sand }],
      outputs: [
        { item: tf.leadIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 3_000,
    },
    leadHammer: {
      inputs: [{ item: tf.leadHammer }, { item: mc.sand }],
      outputs: [
        { item: tf.leadIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    leadHelmet: {
      inputs: [{ item: tf.leadHelmet }, { item: mc.sand }],
      outputs: [
        { item: tf.leadIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    leadHoe: {
      inputs: [{ item: tf.leadHoe }, { item: mc.sand }],
      outputs: [{ item: tf.leadIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    leadHorseArmor: {
      inputs: [{ item: tf.leadHorseArmor }, { item: mc.sand }],
      outputs: [
        { item: tf.leadIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    leadLeggings: {
      inputs: [{ item: tf.leadLeggings }, { item: mc.sand }],
      outputs: [
        { item: tf.leadIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    leadPickaxe: {
      inputs: [{ item: tf.leadPickaxe }, { item: mc.sand }],
      outputs: [{ item: tf.leadIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    leadPlate: {
      inputs: [{ item: tf.leadPlate }, { item: mc.sand }],
      outputs: [{ item: tf.leadIngot }, { item: tf.slag, chance: 10 }],
      energy: 2_000,
    },
    leadReinforcedBow: {
      inputs: [{ item: tf.leadReinforcedBow }, { item: mc.sand }],
      outputs: [{ item: tf.leadIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    leadShears: {
      inputs: [{ item: tf.leadShears }, { item: mc.sand }],
      outputs: [{ item: tf.leadIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    leadShield: {
      inputs: [{ item: tf.leadShield }, { item: mc.sand }],
      outputs: [
        { item: tf.leadIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    leadShovel: {
      inputs: [{ item: tf.leadShovel }, { item: mc.sand }],
      outputs: [{ item: tf.leadIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    leadSickle: {
      inputs: [{ item: tf.leadSickle }, { item: mc.sand }],
      outputs: [{ item: tf.leadIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    leadSword: {
      inputs: [{ item: tf.leadSword }, { item: mc.sand }],
      outputs: [{ item: tf.leadIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    lumiumGear: {
      inputs: [{ item: tf.lumiumGear }, { item: mc.sand }],
      outputs: [
        { item: tf.lumiumIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 3_000,
    },
    lumiumPlate: {
      inputs: [{ item: tf.lumiumPlate }, { item: mc.sand }],
      outputs: [{ item: tf.lumiumIngot }, { item: tf.slag, chance: 10 }],
      energy: 2_000,
    },
    manaInfusedGear: {
      inputs: [{ item: tf.manaInfusedGear }, { item: mc.sand }],
      outputs: [
        { item: tf.manaInfusedIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 3_000,
    },
    manaInfusedPlate: {
      inputs: [{ item: tf.manaInfusedPlate }, { item: mc.sand }],
      outputs: [{ item: tf.manaInfusedIngot }, { item: tf.slag, chance: 10 }],
      energy: 2_000,
    },
    minecart: {
      inputs: [{ item: mc.minecart }, { item: mc.sand }],
      outputs: [
        { item: mc.ironIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 4_000,
    },
    minecartWithChest: {
      inputs: [{ item: mc.minecartWithChest }, { item: mc.sand }],
      outputs: [
        { item: mc.ironIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 4_000,
    },
    minecartWithFurnace: {
      inputs: [{ item: mc.minecartWithFurnace }, { item: mc.sand }],
      outputs: [
        { item: mc.ironIngot, amount: 4 },
        { item: tf.slag, chance: 30 },
      ],
      energy: 4_000,
    },
    minecartWithHopper: {
      inputs: [{ item: mc.minecartWithHopper }, { item: mc.sand }],
      outputs: [
        { item: mc.ironIngot, amount: 8 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 4_000,
    },
    nickelAxe: {
      inputs: [{ item: tf.nickelAxe }, { item: mc.sand }],
      outputs: [{ item: tf.nickelIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    nickelBoots: {
      inputs: [{ item: tf.nickelBoots }, { item: mc.sand }],
      outputs: [
        { item: tf.nickelIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    nickelChestplate: {
      inputs: [{ item: tf.nickelChestplate }, { item: mc.sand }],
      outputs: [
        { item: tf.nickelIngot, amount: 4 },
        { item: tf.slag, chance: 25 },
      ],
      energy: 6_000,
    },
    nickelExcavator: {
      inputs: [{ item: tf.nickelExcavator }, { item: mc.sand }],
      outputs: [{ item: tf.nickelIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    nickelFishingRod: {
      inputs: [{ item: tf.nickelFishingRod }, { item: mc.sand }],
      outputs: [{ item: tf.nickelIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    nickelGear: {
      inputs: [{ item: tf.nickelGear }, { item: mc.sand }],
      outputs: [
        { item: tf.nickelIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 3_000,
    },
    nickelHammer: {
      inputs: [{ item: tf.nickelHammer }, { item: mc.sand }],
      outputs: [
        { item: tf.nickelIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    nickelHelmet: {
      inputs: [{ item: tf.nickelHelmet }, { item: mc.sand }],
      outputs: [
        { item: tf.nickelIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    nickelHoe: {
      inputs: [{ item: tf.nickelHoe }, { item: mc.sand }],
      outputs: [{ item: tf.nickelIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    nickelHorseArmor: {
      inputs: [{ item: tf.nickelHorseArmor }, { item: mc.sand }],
      outputs: [
        { item: tf.nickelIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    nickelLeggings: {
      inputs: [{ item: tf.nickelLeggings }, { item: mc.sand }],
      outputs: [
        { item: tf.nickelIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    nickelPickaxe: {
      inputs: [{ item: tf.nickelPickaxe }, { item: mc.sand }],
      outputs: [{ item: tf.nickelIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    nickelPlate: {
      inputs: [{ item: tf.nickelPlate }, { item: mc.sand }],
      outputs: [{ item: tf.nickelIngot }, { item: tf.slag, chance: 10 }],
      energy: 2_000,
    },
    nickelReinforcedBow: {
      inputs: [{ item: tf.nickelReinforcedBow }, { item: mc.sand }],
      outputs: [{ item: tf.nickelIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    nickelShears: {
      inputs: [{ item: tf.nickelShears }, { item: mc.sand }],
      outputs: [{ item: tf.nickelIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    nickelShield: {
      inputs: [{ item: tf.nickelShield }, { item: mc.sand }],
      outputs: [
        { item: tf.nickelIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    nickelShovel: {
      inputs: [{ item: tf.nickelShovel }, { item: mc.sand }],
      outputs: [{ item: tf.nickelIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    nickelSickle: {
      inputs: [{ item: tf.nickelSickle }, { item: mc.sand }],
      outputs: [{ item: tf.nickelIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    nickelSword: {
      inputs: [{ item: tf.nickelSword }, { item: mc.sand }],
      outputs: [{ item: tf.nickelIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    plate: {
      inputs: [{ itemGroup: tfItemGroups.metalPlate }, { item: mc.sand }],
      outputs: [{ itemGroup: tfItemGroups.metalIngot }, { item: tf.slag, chance: 10 }],
      energy: 2_000,
    },
    platinumAxe: {
      inputs: [{ item: tf.platinumAxe }, { item: mc.sand }],
      outputs: [{ item: tf.platinumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    platinumBoots: {
      inputs: [{ item: tf.platinumBoots }, { item: mc.sand }],
      outputs: [
        { item: tf.platinumIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    platinumChestplate: {
      inputs: [{ item: tf.platinumChestplate }, { item: mc.sand }],
      outputs: [
        { item: tf.platinumIngot, amount: 4 },
        { item: tf.slag, chance: 25 },
      ],
      energy: 6_000,
    },
    platinumExcavator: {
      inputs: [{ item: tf.platinumExcavator }, { item: mc.sand }],
      outputs: [{ item: tf.platinumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    platinumFishingRod: {
      inputs: [{ item: tf.platinumFishingRod }, { item: mc.sand }],
      outputs: [{ item: tf.platinumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    platinumGear: {
      inputs: [{ item: tf.platinumGear }, { item: mc.sand }],
      outputs: [
        { item: tf.platinumIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 3_000,
    },
    platinumHammer: {
      inputs: [{ item: tf.platinumHammer }, { item: mc.sand }],
      outputs: [
        { item: tf.platinumIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    platinumHelmet: {
      inputs: [{ item: tf.platinumHelmet }, { item: mc.sand }],
      outputs: [
        { item: tf.platinumIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    platinumHoe: {
      inputs: [{ item: tf.platinumHoe }, { item: mc.sand }],
      outputs: [{ item: tf.platinumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    platinumHorseArmor: {
      inputs: [{ item: tf.platinumHorseArmor }, { item: mc.sand }],
      outputs: [
        { item: tf.platinumIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    platinumLeggings: {
      inputs: [{ item: tf.platinumLeggings }, { item: mc.sand }],
      outputs: [
        { item: tf.platinumIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    platinumPickaxe: {
      inputs: [{ item: tf.platinumPickaxe }, { item: mc.sand }],
      outputs: [{ item: tf.platinumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    platinumPlate: {
      inputs: [{ item: tf.platinumPlate }, { item: mc.sand }],
      outputs: [{ item: tf.platinumIngot }, { item: tf.slag, chance: 10 }],
      energy: 2_000,
    },
    platinumReinforcedBow: {
      inputs: [{ item: tf.platinumReinforcedBow }, { item: mc.sand }],
      outputs: [{ item: tf.platinumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    platinumShears: {
      inputs: [{ item: tf.platinumShears }, { item: mc.sand }],
      outputs: [{ item: tf.platinumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    platinumShield: {
      inputs: [{ item: tf.platinumShield }, { item: mc.sand }],
      outputs: [
        { item: tf.platinumIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    platinumShovel: {
      inputs: [{ item: tf.platinumShovel }, { item: mc.sand }],
      outputs: [{ item: tf.platinumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    platinumSickle: {
      inputs: [{ item: tf.platinumSickle }, { item: mc.sand }],
      outputs: [{ item: tf.platinumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    platinumSword: {
      inputs: [{ item: tf.platinumSword }, { item: mc.sand }],
      outputs: [{ item: tf.platinumIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    poweredRail: {
      inputs: [{ item: mc.poweredRail }, { item: mc.sand }],
      outputs: [
        { item: mc.goldNugget, amount: 6 },
        { item: tf.slag, chance: 10 },
      ],
      energy: 4_000,
    },
    rail: {
      inputs: [{ item: mc.rail }, { item: mc.sand }],
      outputs: [
        { item: mc.ironNugget, amount: 3 },
        { item: tf.slag, chance: 5 },
      ],
      energy: 4_000,
    },
    shearsMetal: {
      inputs: [{ itemGroup: tfItemGroups.metalShears }, { item: mc.sand }],
      outputs: [{ itemGroup: tfItemGroups.equipmentMetalIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    shieldMetal: {
      inputs: [{ itemGroup: tfItemGroups.metalShield }, { item: mc.sand }],
      outputs: [
        { itemGroup: tfItemGroups.equipmentMetalIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    signalumGear: {
      inputs: [{ item: tf.signalumGear }, { item: mc.sand }],
      outputs: [
        { item: tf.signalumIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 3_000,
    },
    signalumPlate: {
      inputs: [{ item: tf.signalumPlate }, { item: mc.sand }],
      outputs: [{ item: tf.signalumIngot }, { item: tf.slag, chance: 10 }],
      energy: 2_000,
    },
    silverAxe: {
      inputs: [{ item: tf.silverAxe }, { item: mc.sand }],
      outputs: [{ item: tf.silverIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    silverBoots: {
      inputs: [{ item: tf.silverBoots }, { item: mc.sand }],
      outputs: [
        { item: tf.silverIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    silverChestplate: {
      inputs: [{ item: tf.silverChestplate }, { item: mc.sand }],
      outputs: [
        { item: tf.silverIngot, amount: 4 },
        { item: tf.slag, chance: 25 },
      ],
      energy: 6_000,
    },
    silverExcavator: {
      inputs: [{ item: tf.silverExcavator }, { item: mc.sand }],
      outputs: [{ item: tf.silverIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    silverFishingRod: {
      inputs: [{ item: tf.silverFishingRod }, { item: mc.sand }],
      outputs: [{ item: tf.silverIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    silverGear: {
      inputs: [{ item: tf.silverGear }, { item: mc.sand }],
      outputs: [
        { item: tf.silverIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 3_000,
    },
    silverHammer: {
      inputs: [{ item: tf.silverHammer }, { item: mc.sand }],
      outputs: [
        { item: tf.silverIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    silverHelmet: {
      inputs: [{ item: tf.silverHelmet }, { item: mc.sand }],
      outputs: [
        { item: tf.silverIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    silverHoe: {
      inputs: [{ item: tf.silverHoe }, { item: mc.sand }],
      outputs: [{ item: tf.silverIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    silverHorseArmor: {
      inputs: [{ item: tf.silverHorseArmor }, { item: mc.sand }],
      outputs: [
        { item: tf.silverIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    silverLeggings: {
      inputs: [{ item: tf.silverLeggings }, { item: mc.sand }],
      outputs: [
        { item: tf.silverIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    silverPickaxe: {
      inputs: [{ item: tf.silverPickaxe }, { item: mc.sand }],
      outputs: [{ item: tf.silverIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    silverPlate: {
      inputs: [{ item: tf.silverPlate }, { item: mc.sand }],
      outputs: [{ item: tf.silverIngot }, { item: tf.slag, chance: 10 }],
      energy: 2_000,
    },
    silverReinforcedBow: {
      inputs: [{ item: tf.silverReinforcedBow }, { item: mc.sand }],
      outputs: [{ item: tf.silverIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    silverShears: {
      inputs: [{ item: tf.silverShears }, { item: mc.sand }],
      outputs: [{ item: tf.silverIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    silverShield: {
      inputs: [{ item: tf.silverShield }, { item: mc.sand }],
      outputs: [
        { item: tf.silverIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    silverShovel: {
      inputs: [{ item: tf.silverShovel }, { item: mc.sand }],
      outputs: [{ item: tf.silverIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    silverSickle: {
      inputs: [{ item: tf.silverSickle }, { item: mc.sand }],
      outputs: [{ item: tf.silverIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    silverSword: {
      inputs: [{ item: tf.silverSword }, { item: mc.sand }],
      outputs: [{ item: tf.silverIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    slightlyDamagedAnvil: {
      inputs: [{ item: mc.slightlyDamagedAnvil }, { item: mc.sand }],
      outputs: [
        { item: mc.ironIngot, amount: 23 },
        { item: tf.slag, chance: 75 },
      ],
      energy: 4_000,
    },
    steelAxe: {
      inputs: [{ item: tf.steelAxe }, { item: mc.sand }],
      outputs: [{ item: tf.steelIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    steelBoots: {
      inputs: [{ item: tf.steelBoots }, { item: mc.sand }],
      outputs: [
        { item: tf.steelIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    steelChestplate: {
      inputs: [{ item: tf.steelChestplate }, { item: mc.sand }],
      outputs: [
        { item: tf.steelIngot, amount: 4 },
        { item: tf.slag, chance: 25 },
      ],
      energy: 6_000,
    },
    steelExcavator: {
      inputs: [{ item: tf.steelExcavator }, { item: mc.sand }],
      outputs: [{ item: tf.steelIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    steelFishingRod: {
      inputs: [{ item: tf.steelFishingRod }, { item: mc.sand }],
      outputs: [{ item: tf.steelIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    steelGear: {
      inputs: [{ item: tf.steelGear }, { item: mc.sand }],
      outputs: [
        { item: tf.steelIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 3_000,
    },
    steelHammer: {
      inputs: [{ item: tf.steelHammer }, { item: mc.sand }],
      outputs: [
        { item: tf.steelIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    steelHelmet: {
      inputs: [{ item: tf.steelHelmet }, { item: mc.sand }],
      outputs: [
        { item: tf.steelIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    steelHoe: {
      inputs: [{ item: tf.steelHoe }, { item: mc.sand }],
      outputs: [{ item: tf.steelIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    steelHorseArmor: {
      inputs: [{ item: tf.steelHorseArmor }, { item: mc.sand }],
      outputs: [
        { item: tf.steelIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    steelLeggings: {
      inputs: [{ item: tf.steelLeggings }, { item: mc.sand }],
      outputs: [
        { item: tf.steelIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    steelPickaxe: {
      inputs: [{ item: tf.steelPickaxe }, { item: mc.sand }],
      outputs: [{ item: tf.steelIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    steelPlate: {
      inputs: [{ item: tf.steelPlate }, { item: mc.sand }],
      outputs: [{ item: tf.steelIngot }, { item: tf.slag, chance: 10 }],
      energy: 2_000,
    },
    steelReinforcedBow: {
      inputs: [{ item: tf.steelReinforcedBow }, { item: mc.sand }],
      outputs: [{ item: tf.steelIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    steelShears: {
      inputs: [{ item: tf.steelShears }, { item: mc.sand }],
      outputs: [{ item: tf.steelIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    steelShield: {
      inputs: [{ item: tf.steelShield }, { item: mc.sand }],
      outputs: [
        { item: tf.steelIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    steelShovel: {
      inputs: [{ item: tf.steelShovel }, { item: mc.sand }],
      outputs: [{ item: tf.steelIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    steelSickle: {
      inputs: [{ item: tf.steelSickle }, { item: mc.sand }],
      outputs: [{ item: tf.steelIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    steelSword: {
      inputs: [{ item: tf.steelSword }, { item: mc.sand }],
      outputs: [{ item: tf.steelIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    tinAxe: {
      inputs: [{ item: tf.tinAxe }, { item: mc.sand }],
      outputs: [{ item: tf.tinIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    tinBoots: {
      inputs: [{ item: tf.tinBoots }, { item: mc.sand }],
      outputs: [
        { item: tf.tinIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    tinChestplate: {
      inputs: [{ item: tf.tinChestplate }, { item: mc.sand }],
      outputs: [
        { item: tf.tinIngot, amount: 4 },
        { item: tf.slag, chance: 25 },
      ],
      energy: 6_000,
    },
    tinExcavator: {
      inputs: [{ item: tf.tinExcavator }, { item: mc.sand }],
      outputs: [{ item: tf.tinIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    tinFishingRod: {
      inputs: [{ item: tf.tinFishingRod }, { item: mc.sand }],
      outputs: [{ item: tf.tinIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    tinGear: {
      inputs: [{ item: tf.tinGear }, { item: mc.sand }],
      outputs: [
        { item: tf.tinIngot, amount: 4 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 3_000,
    },
    tinHammer: {
      inputs: [{ item: tf.tinHammer }, { item: mc.sand }],
      outputs: [
        { item: tf.tinIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    tinHelmet: {
      inputs: [{ item: tf.tinHelmet }, { item: mc.sand }],
      outputs: [
        { item: tf.tinIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    tinHoe: {
      inputs: [{ item: tf.tinHoe }, { item: mc.sand }],
      outputs: [{ item: tf.tinIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    tinHorseArmor: {
      inputs: [{ item: tf.tinHorseArmor }, { item: mc.sand }],
      outputs: [
        { item: tf.tinIngot, amount: 2 },
        { item: tf.slag, chance: 15 },
      ],
      energy: 6_000,
    },
    tinLeggings: {
      inputs: [{ item: tf.tinLeggings }, { item: mc.sand }],
      outputs: [
        { item: tf.tinIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    tinPickaxe: {
      inputs: [{ item: tf.tinPickaxe }, { item: mc.sand }],
      outputs: [{ item: tf.tinIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    tinPlate: {
      inputs: [{ item: tf.tinPlate }, { item: mc.sand }],
      outputs: [{ item: tf.tinIngot }, { item: tf.slag, chance: 10 }],
      energy: 2_000,
    },
    tinReinforcedBow: {
      inputs: [{ item: tf.tinReinforcedBow }, { item: mc.sand }],
      outputs: [{ item: tf.tinIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    tinShears: {
      inputs: [{ item: tf.tinShears }, { item: mc.sand }],
      outputs: [{ item: tf.tinIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    tinShield: {
      inputs: [{ item: tf.tinShield }, { item: mc.sand }],
      outputs: [
        { item: tf.tinIngot, amount: 3 },
        { item: tf.slag, chance: 20 },
      ],
      energy: 6_000,
    },
    tinShovel: {
      inputs: [{ item: tf.tinShovel }, { item: mc.sand }],
      outputs: [{ item: tf.tinIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    tinSickle: {
      inputs: [{ item: tf.tinSickle }, { item: mc.sand }],
      outputs: [{ item: tf.tinIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    tinSword: {
      inputs: [{ item: tf.tinSword }, { item: mc.sand }],
      outputs: [{ item: tf.tinIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    toolHoe: {
      inputs: [{ itemGroup: tfItemGroups.metalHoe }, { item: mc.sand }],
      outputs: [{ itemGroup: tfItemGroups.equipmentMetalIngot }, { item: tf.slag, chance: 10 }],
      energy: 6_000,
    },
    veryDamagedAnvil: {
      inputs: [{ item: mc.veryDamagedAnvil }, { item: mc.sand }],
      outputs: [
        { item: mc.ironIngot, amount: 15 },
        { item: tf.slag, chance: 100 },
      ],
      energy: 4_000,
    },
    weightedPressurePlateHeavy: {
      inputs: [{ item: mc.weightedPressurePlateHeavy }, { item: mc.sand }],
      outputs: [
        { item: mc.ironIngot, amount: 2 },
        { item: tf.slag, chance: 10 },
      ],
      energy: 4_000,
    },
    weightedPressurePlateLight: {
      inputs: [{ item: mc.weightedPressurePlateLight }, { item: mc.sand }],
      outputs: [
        { item: mc.goldIngot, amount: 2 },
        { item: tf.slag, chance: 10 },
      ],
      energy: 4_000,
    },
  },
  steelIngot: {
    ironIngotAndCoalCoke: {
      inputs: [{ item: mc.ironIngot }, { item: tf.coalCoke }],
      outputs: [{ item: tf.steelIngot }],
      energy: 2_400,
    },
    ironIngotAndPulverizedCharcoal: {
      inputs: [{ item: mc.ironIngot }, { item: tf.pulverizedCharcoal, amount: 4 }],
      outputs: [{ item: tf.steelIngot }],
      energy: 4_400,
    },
    ironIngotAndPulverizedCoal: {
      inputs: [{ item: mc.ironIngot }, { item: tf.pulverizedCoal, amount: 4 }],
      outputs: [{ item: tf.steelIngot }],
      energy: 4_400,
    },
    pulverizedIronAndCoalCoke: {
      inputs: [{ item: tf.pulverizedIron }, { item: tf.coalCoke }],
      outputs: [{ item: tf.steelIngot }],
      energy: 2_000,
    },
    pulverizedIronAndPulverizedCharcoal: {
      inputs: [{ item: tf.pulverizedIron }, { item: tf.pulverizedCharcoal, amount: 4 }],
      outputs: [{ item: tf.steelIngot }],
      energy: 4_000,
    },
    pulverizedIronAndPulverizedCoal: {
      inputs: [{ item: tf.pulverizedIron }, { item: tf.pulverizedCoal, amount: 4 }],
      outputs: [{ item: tf.steelIngot }],
      energy: 4_000,
    },
  },
  stoneBricks: {
    inputs: [{ item: mc.cobblestone, amount: 2 }, { item: mc.sand }],
    outputs: [{ item: mc.stoneBricks }, { item: tf.slag, chance: 100 }],
    energy: 4_000,
  },
});
