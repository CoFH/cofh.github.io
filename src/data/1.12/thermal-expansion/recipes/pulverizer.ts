import Pulverizer from '../../../../components/docs/1.12/thermal-expansion/recipe/Pulverizer.astro';
import { defineRecipeType, defineRecipes } from '../../../define.ts';
import mcItemGroups from '../../minecraft/item-groups.ts';
import mc from '../../minecraft/items.ts';
import ra from '../../redstone-arsenal/items.ts';
import tfItemGroups from '../../thermal-foundation/item-groups.ts';
import tf from '../../thermal-foundation/items.ts';

export const pulverizer = defineRecipeType('1.12/thermal-expansion', {
  name: 'Pulverizer',
  url: 'pulverizer/',
  withEnergy: true,
  component: Pulverizer,
});

export default defineRecipes(pulverizer, {
  basalzPowder: {
    inputs: [{ item: tf.basalzRod }],
    outputs: [
      { item: tf.basalzPowder, amount: 4 },
      { item: tf.pulverizedObsidian, chance: 50 },
    ],
    energy: 3_000,
  },
  blazePowder: {
    inputs: [{ item: mc.blazeRod }],
    outputs: [
      { item: mc.blazePowder, amount: 4 },
      { item: tf.sulfur, chance: 50 },
    ],
    energy: 3_000,
  },
  blitzPowder: {
    inputs: [{ item: tf.blitzRod }],
    outputs: [
      { item: tf.blitzPowder, amount: 4 },
      { item: tf.niter, chance: 50 },
    ],
    energy: 3_000,
  },
  blizzPowder: {
    inputs: [{ item: tf.blizzRod }],
    outputs: [
      { item: tf.blizzPowder, amount: 4 },
      { item: mc.snowball, chance: 50 },
    ],
    energy: 3_000,
  },
  boneMeal: {
    inputs: [{ item: mc.bone }],
    outputs: [{ item: mc.boneMeal, amount: 6 }],
    energy: 3_000,
  },
  bronzeBlend: {
    inputs: [{ item: tf.bronzeIngot }],
    outputs: [{ item: tf.bronzeBlend }],
    energy: 2_000,
  },
  cobblestoneFromStone: {
    inputs: [{ item: mc.stone }],
    outputs: [{ item: mc.cobblestone }],
    energy: 1_000,
  },
  constantanBlend: {
    inputs: [{ item: tf.constantanIngot }],
    outputs: [{ item: tf.constantanBlend }],
    energy: 2_000,
  },
  electrumBlend: {
    inputs: [{ item: tf.electrumIngot }],
    outputs: [{ item: tf.electrumBlend }],
    energy: 2_000,
  },
  enderiumBlend: {
    inputs: [{ item: tf.enderiumIngot }],
    outputs: [{ item: tf.enderiumBlend }],
    energy: 2_000,
  },
  flowerProcessing: {
    lightBlueOrchid: {
      inputs: [{ item: mc.blueOrchid }],
      outputs: [{ item: mc.lightBlueDye, amount: 4 }],
      energy: 2_000,
    },
    lightGrayAzureBluet: {
      inputs: [{ item: mc.azureBluet }],
      outputs: [{ item: mc.lightGrayDye, amount: 4 }],
      energy: 2_000,
    },
    lightGrayOxeyeDaisy: {
      inputs: [{ item: mc.oxeyeDaisy }],
      outputs: [{ item: mc.lightGrayDye, amount: 4 }],
      energy: 2_000,
    },
    lightGrayTulip: {
      inputs: [{ item: mc.whiteTulip }],
      outputs: [{ item: mc.lightGrayDye, amount: 4 }],
      energy: 2_000,
    },
    magentaAllium: {
      inputs: [{ item: mc.allium }],
      outputs: [{ item: mc.magentaDye, amount: 4 }],
      energy: 2_000,
    },
    magentaLilac: {
      inputs: [{ item: mc.lilac }],
      outputs: [{ item: mc.magentaDye, amount: 4 }],
      energy: 2_000,
    },
    orangeTulip: {
      inputs: [{ item: mc.orangeTulip }],
      outputs: [{ item: mc.orangeDye, amount: 4 }],
      energy: 2_000,
    },
    pinkPeony: {
      inputs: [{ item: mc.peony }],
      outputs: [{ item: mc.pinkDye, amount: 4 }],
      energy: 2_000,
    },
    pinkTulip: {
      inputs: [{ item: mc.pinkTulip }],
      outputs: [{ item: mc.pinkDye, amount: 4 }],
      energy: 2_000,
    },
    redPoppy: {
      inputs: [{ item: mc.poppy }],
      outputs: [{ item: mc.roseRed, amount: 4 }],
      energy: 2_000,
    },
    redRoseBush: {
      inputs: [{ item: mc.roseBush }],
      outputs: [{ item: mc.roseRed, amount: 4 }],
      energy: 2_000,
    },
    redTulip: {
      inputs: [{ item: mc.redTulip }],
      outputs: [{ item: mc.roseRed, amount: 4 }],
      energy: 2_000,
    },
    yellowDandelion: {
      inputs: [{ item: mc.dandelion }],
      outputs: [{ item: mc.dandelionYellow, amount: 4 }],
      energy: 2_000,
    },
    yellowSunflower: {
      inputs: [{ item: mc.sunflower }],
      outputs: [{ item: mc.dandelionYellow, amount: 4 }],
      energy: 2_000,
    },
  },
  fluidOreProcessing: {
    destabilizedRedstoneOre: {
      inputs: [{ item: tf.destabilizedRedstoneOre }],
      outputs: [
        { item: tf.destabilizedClathrate, amount: 3 },
        { item: tf.cinnabar, chance: 50 },
      ],
      energy: 4_000,
    },
    energizedNetherrack: {
      inputs: [{ item: tf.energizedNetherrack }],
      outputs: [
        { item: tf.energizedClathrate, amount: 3 },
        { item: tf.sulfur, chance: 30 },
      ],
      energy: 4_000,
    },
    oilSand: {
      inputs: [{ item: [tf.oilSand, tf.redOilSand] }],
      outputs: [
        { item: tf.bitumen, amount: 3 },
        { item: tf.tar, chance: 50 },
      ],
      energy: 4_000,
    },
    oilShale: {
      inputs: [{ item: tf.oilShale }],
      outputs: [
        { item: tf.bitumen, amount: 3 },
        { item: mc.flint, chance: 50 },
      ],
      energy: 4_000,
    },
    resonantEndStone: {
      inputs: [{ item: tf.resonantEndStone }],
      outputs: [{ item: tf.resonantClathrate, amount: 3 }],
      energy: 4_000,
    },
  },
  fluxedElectrumBlend: {
    inputs: [{ item: ra.fluxedElectrumIngot }],
    outputs: [{ item: ra.fluxedElectrumBlend }],
    energy: 2_000,
  },
  glowstoneDustFromGlowstone: {
    inputs: [{ item: mc.glowstone }],
    outputs: [{ item: mc.glowstoneDust, amount: 4 }],
    energy: 4_000,
  },
  gravel: {
    cobblestone: {
      inputs: [{ item: mc.cobblestone }],
      outputs: [{ item: mc.gravel }, { item: mc.sand, chance: 15 }],
      energy: 4_000,
    },
    netherrack: {
      inputs: [{ item: mc.netherrack }],
      outputs: [{ item: mc.gravel }, { item: tf.sulfur, chance: 15 }],
      energy: 4_000,
    },
  },
  invarBlend: {
    inputs: [{ item: tf.invarIngot }],
    outputs: [{ item: tf.invarBlend }],
    energy: 2_000,
  },
  lumiumBlend: {
    inputs: [{ item: tf.lumiumIngot }],
    outputs: [{ item: tf.lumiumBlend }],
    energy: 2_000,
  },
  magmaCreamFromBlock: {
    inputs: [{ item: mc.magmaBlock }],
    outputs: [{ item: mc.magmaCream, amount: 4 }],
    energy: 4_000,
  },
  metalDustFromIngot: {
    inputs: [{ itemGroup: tfItemGroups.metalIngot }],
    outputs: [{ itemGroup: tfItemGroups.metalDust }],
    energy: 2_000,
  },
  oreProcessing: {
    aluminum: {
      inputs: [{ item: tf.aluminumOre }],
      outputs: [
        { item: tf.pulverizedAluminum, amount: 2 },
        { item: tf.pulverizedIron, chance: 10 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    coal: {
      inputs: [{ item: mc.coalOre }],
      outputs: [
        { item: mc.coal, amount: 3 },
        { item: tf.pulverizedCoal, chance: 25 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    copper: {
      inputs: [{ item: tf.copperOre }],
      outputs: [
        { item: tf.pulverizedCopper, amount: 2 },
        { item: tf.pulverizedGold, chance: 10 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    diamond: {
      inputs: [{ item: mc.diamondOre }],
      outputs: [{ item: mc.diamond, amount: 2 }],
      amountSuffix: true,
      energy: 4_000,
    },
    emerald: {
      inputs: [{ item: mc.emeraldOre }],
      outputs: [{ item: mc.emerald, amount: 2 }],
      amountSuffix: true,
      energy: 4_000,
    },
    gold: {
      inputs: [{ item: mc.goldOre }],
      outputs: [
        { item: tf.pulverizedGold, amount: 2 },
        { item: tf.cinnabar, chance: 10 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    iridium: {
      inputs: [{ item: tf.iridiumOre }],
      outputs: [
        { item: tf.pulverizedIridium, amount: 2 },
        { item: tf.pulverizedPlatinum, chance: 10 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    iron: {
      inputs: [{ item: mc.ironOre }],
      outputs: [
        { item: tf.pulverizedIron, amount: 2 },
        { item: tf.pulverizedNickel, chance: 10 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    lapisLazuli: {
      inputs: [{ item: mc.lapisLazuliOre }],
      outputs: [
        { item: mc.lapisLazuli, amount: 10 },
        { item: tf.sulfur, chance: 20 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    lead: {
      inputs: [{ item: tf.leadOre }],
      outputs: [
        { item: tf.pulverizedLead, amount: 2 },
        { item: tf.pulverizedSilver, chance: 10 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    mithril: {
      inputs: [{ item: tf.manaInfusedOre }],
      outputs: [
        { item: tf.pulverizedManaInfusedMetal, amount: 2 },
        { item: tf.pulverizedGold, chance: 10 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    netherQuartz: {
      inputs: [{ item: mc.netherQuartzOre }],
      outputs: [
        { item: mc.netherQuartz, amount: 3 },
        { item: tf.sulfur, chance: 15 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    nickel: {
      inputs: [{ item: tf.nickelOre }],
      outputs: [
        { item: tf.pulverizedNickel, amount: 2 },
        { item: tf.pulverizedPlatinum, chance: 10 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    platinum: {
      inputs: [{ item: tf.platinumOre }],
      outputs: [
        { item: tf.pulverizedPlatinum, amount: 2 },
        { item: tf.pulverizedIridium, chance: 10 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    redstone: {
      inputs: [{ item: mc.redstoneOre }],
      outputs: [
        { item: mc.redstone, amount: 6 },
        { item: tf.cinnabar, chance: 25 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    silver: {
      inputs: [{ item: tf.silverOre }],
      outputs: [
        { item: tf.pulverizedSilver, amount: 2 },
        { item: tf.pulverizedLead, chance: 10 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
    tin: {
      inputs: [{ item: tf.tinOre }],
      outputs: [
        { item: tf.pulverizedTin, amount: 2 },
        { item: tf.pulverizedIron, chance: 10 },
      ],
      amountSuffix: true,
      energy: 4_000,
    },
  },
  prismarineCrystalsFromShard: {
    inputs: [{ item: mc.prismarineShard }],
    outputs: [{ item: mc.prismarineCrystals }],
    energy: 2_000,
  },
  pulverizedAluminum: {
    inputs: [{ item: tf.aluminumIngot }],
    outputs: [{ item: tf.pulverizedAluminum }],
    energy: 2_000,
  },
  pulverizedCharcoal: {
    inputs: [{ item: mc.charcoal }],
    outputs: [{ item: tf.pulverizedCharcoal }],
    energy: 2_000,
  },
  pulverizedCoal: {
    inputs: [{ item: mc.coal }],
    outputs: [{ item: tf.pulverizedCoal }, { item: tf.sulfur, chance: 15 }],
    energy: 2_000,
  },
  pulverizedCopper: {
    inputs: [{ item: tf.copperIngot }],
    outputs: [{ item: tf.pulverizedCopper }],
    energy: 2_000,
  },
  pulverizedGold: {
    inputs: [{ item: mc.goldIngot }],
    outputs: [{ item: tf.pulverizedGold }],
    energy: 2_000,
  },
  pulverizedIridium: {
    inputs: [{ item: tf.iridiumIngot }],
    outputs: [{ item: tf.pulverizedIridium }],
    energy: 2_000,
  },
  pulverizedIron: {
    inputs: [{ item: mc.ironIngot }],
    outputs: [{ item: tf.pulverizedIron }],
    energy: 2_000,
  },
  pulverizedLead: {
    inputs: [{ item: tf.leadIngot }],
    outputs: [{ item: tf.pulverizedLead }],
    energy: 2_000,
  },
  pulverizedManaInfusedMetal: {
    inputs: [{ item: tf.manaInfusedIngot }],
    outputs: [{ item: tf.pulverizedManaInfusedMetal }],
    energy: 2_000,
  },
  pulverizedNickel: {
    inputs: [{ item: tf.nickelIngot }],
    outputs: [{ item: tf.pulverizedNickel }],
    energy: 2_000,
  },
  pulverizedObsidian: {
    inputs: [{ item: mc.obsidian }],
    outputs: [{ item: tf.pulverizedObsidian, amount: 4 }],
    energy: 6_000,
  },
  pulverizedPlatinum: {
    inputs: [{ item: tf.platinumIngot }],
    outputs: [{ item: tf.pulverizedPlatinum }],
    energy: 2_000,
  },
  pulverizedSilver: {
    inputs: [{ item: tf.silverIngot }],
    outputs: [{ item: tf.pulverizedSilver }],
    energy: 2_000,
  },
  pulverizedTin: {
    inputs: [{ item: tf.tinIngot }],
    outputs: [{ item: tf.pulverizedTin }],
    energy: 2_000,
  },
  recycling: {
    blockOfQuartz: {
      inputs: [{ itemGroup: mcItemGroups.blockOfQuartz }],
      outputs: [{ item: mc.netherQuartz, amount: 4 }],
      energy: 3_000,
    },
    bricks: {
      inputs: [{ item: mc.bricks }],
      outputs: [{ item: mc.brick, amount: 4 }],
      energy: 3_000,
    },
    bricksSlab: {
      inputs: [{ item: mc.bricksSlab }],
      outputs: [{ item: mc.brick, amount: 2 }],
      energy: 3_000,
    },
    brickStairs: {
      inputs: [{ item: mc.brickStairs }],
      outputs: [{ item: mc.brick, amount: 3 }],
      energy: 3_000,
    },
    clayBlock: {
      inputs: [{ item: mc.clayBlock }],
      outputs: [{ item: mc.clay, amount: 4 }],
      energy: 3_000,
    },
    concrete: {
      inputs: [{ itemGroup: mcItemGroups.concrete }],
      outputs: [{ itemGroup: mcItemGroups.concretePowder }],
      energy: 4_000,
    },
    diamondAxe: {
      inputs: [{ item: mc.diamondAxe }],
      outputs: [{ item: mc.diamond }],
      energy: 6_000,
    },
    diamondBoots: {
      inputs: [{ item: mc.diamondBoots }],
      outputs: [{ item: mc.diamond, amount: 2 }],
      energy: 6_000,
    },
    diamondChestplate: {
      inputs: [{ item: mc.diamondChestplate }],
      outputs: [{ item: mc.diamond, amount: 4 }],
      energy: 6_000,
    },
    diamondExcavator: {
      inputs: [{ item: tf.diamondExcavator }],
      outputs: [{ item: mc.diamond }],
      energy: 6_000,
    },
    diamondFishingRod: {
      inputs: [{ item: tf.diamondFishingRod }],
      outputs: [{ item: mc.diamond }],
      energy: 6_000,
    },
    diamondHammer: {
      inputs: [{ item: tf.diamondHammer }],
      outputs: [{ item: mc.diamond, amount: 2 }],
      energy: 6_000,
    },
    diamondHelmet: {
      inputs: [{ item: mc.diamondHelmet }],
      outputs: [{ item: mc.diamond, amount: 2 }],
      energy: 6_000,
    },
    diamondHoe: {
      inputs: [{ item: mc.diamondHoe }],
      outputs: [{ item: mc.diamond }],
      energy: 6_000,
    },
    diamondHorseArmor: {
      inputs: [{ item: mc.diamondHorseArmor }],
      outputs: [{ item: mc.diamond, amount: 2 }],
      energy: 6_000,
    },
    diamondLeggings: {
      inputs: [{ item: mc.diamondLeggings }],
      outputs: [{ item: mc.diamond, amount: 3 }],
      energy: 6_000,
    },
    diamondPickaxe: {
      inputs: [{ item: mc.diamondPickaxe }],
      outputs: [{ item: mc.diamond }],
      energy: 6_000,
    },
    diamondReinforcedBow: {
      inputs: [{ item: tf.diamondReinforcedBow }],
      outputs: [{ item: mc.diamond }],
      energy: 6_000,
    },
    diamondShears: {
      inputs: [{ item: tf.diamondShears }],
      outputs: [{ item: mc.diamond }],
      energy: 6_000,
    },
    diamondShield: {
      inputs: [{ item: tf.diamondShield }],
      outputs: [{ item: mc.diamond, amount: 3 }],
      energy: 6_000,
    },
    diamondShovel: {
      inputs: [{ item: mc.diamondShovel }],
      outputs: [{ item: mc.diamond }],
      energy: 6_000,
    },
    diamondSickle: {
      inputs: [{ item: tf.diamondSickle }],
      outputs: [{ item: mc.diamond }],
      energy: 6_000,
    },
    diamondSword: {
      inputs: [{ item: mc.diamondSword }],
      outputs: [{ item: mc.diamond }],
      energy: 6_000,
    },
    fishingRod: {
      inputs: [{ item: mc.fishingRod }],
      outputs: [{ item: tf.sawdust, amount: 2 }],
      energy: 3_000,
    },
    flowerPot: {
      inputs: [{ item: mc.flowerPot }],
      outputs: [{ item: mc.brick, amount: 3 }],
      energy: 4_000,
    },
    fluxInfusedBow: {
      inputs: [{ item: mc.bow }],
      outputs: [{ item: tf.sawdust, amount: 2 }],
      energy: 3_000,
    },
    glass: { inputs: [{ item: mc.glass }], outputs: [{ item: mc.sand }], energy: 4_000 },
    glassBottle: {
      inputs: [{ item: mc.glassBottle }],
      outputs: [{ item: mc.sand }],
      energy: 4_000,
    },
    jukebox: {
      inputs: [{ item: mc.jukebox }],
      outputs: [{ item: mc.diamond }, { item: tf.sawdust, amount: 4, chance: 100 }],
      energy: 4_000,
    },
    netherBricks: {
      inputs: [{ item: mc.netherBricks }],
      outputs: [{ item: mc.netherBrick, amount: 4 }],
      energy: 3_000,
    },
    netherBrickSlab: {
      inputs: [{ item: mc.netherBrickSlab }],
      outputs: [{ item: mc.netherBrick, amount: 2 }],
      energy: 3_000,
    },
    netherBrickStairs: {
      inputs: [{ item: mc.netherBrickStairs }],
      outputs: [{ item: mc.netherBrick, amount: 3 }],
      energy: 3_000,
    },
    noteBlock: {
      inputs: [{ item: mc.noteBlock }],
      outputs: [{ item: mc.redstone }, { item: tf.sawdust, amount: 4, chance: 100 }],
      energy: 4_000,
    },
    quartzSlab: {
      inputs: [{ item: mc.quartzSlab }],
      outputs: [{ item: mc.netherQuartz, amount: 2 }],
      energy: 3_000,
    },
    quartzStairs: {
      inputs: [{ item: mc.quartzStairs }],
      outputs: [{ item: mc.netherQuartz, amount: 3 }],
      energy: 3_000,
    },
    redSandstone: {
      inputs: [{ itemGroup: mcItemGroups.redSandstone }],
      outputs: [
        { item: mc.redSand, amount: 2 },
        { item: tf.niter, chance: 40 },
      ],
      energy: 3_000,
    },
    redSandstoneSlab: {
      inputs: [{ item: mc.redSandstoneSlab }],
      outputs: [{ item: mc.redSand }, { item: tf.niter, chance: 20 }],
      energy: 3_000,
    },
    redSandstoneStairs: {
      inputs: [{ item: mc.redSandstoneStairs }],
      outputs: [
        { item: mc.redSand, amount: 2 },
        { item: tf.niter, chance: 20 },
      ],
      energy: 3_000,
    },
    sandstone: {
      inputs: [{ itemGroup: mcItemGroups.sandstone }],
      outputs: [
        { item: mc.sand, amount: 2 },
        { item: tf.niter, chance: 40 },
      ],
      energy: 3_000,
    },
    sandstoneSlab: {
      inputs: [{ item: mc.sandstoneSlab }],
      outputs: [{ item: mc.sand }, { item: tf.niter, chance: 20 }],
      energy: 3_000,
    },
    sandstoneStairs: {
      inputs: [{ item: mc.sandstoneStairs }],
      outputs: [
        { item: mc.sand, amount: 2 },
        { item: tf.niter, chance: 20 },
      ],
      energy: 3_000,
    },
    shield: {
      inputs: [{ item: mc.shield }],
      outputs: [{ item: tf.sawdust, amount: 6 }],
      energy: 3_000,
    },
    stainedGlass: {
      inputs: [{ itemGroup: mcItemGroups.stainedGlass }],
      outputs: [{ item: mc.sand }],
      energy: 4_000,
    },
    terracotta: {
      inputs: [
        {
          item: [
            mc.terracotta,
            mc.whiteTerracotta,
            mc.orangeTerracotta,
            mc.magentaTerracotta,
            mc.lightBlueTerracotta,
            mc.yellowTerracotta,
            mc.limeTerracotta,
            mc.pinkTerracotta,
            mc.grayTerracotta,
            mc.lightGrayTerracotta,
            mc.cyanTerracotta,
            mc.purpleTerracotta,
            mc.blueTerracotta,
            mc.brownTerracotta,
            mc.greenTerracotta,
            mc.redTerracotta,
            mc.blackTerracotta,
          ],
          randomCycle: true,
        },
      ],
      outputs: [{ item: mc.clay, amount: 4 }],
      energy: 4_000,
    },
    woodenAxe: {
      inputs: [{ item: mc.woodenAxe }],
      outputs: [{ item: tf.sawdust, amount: 2 }],
      energy: 3_000,
    },
    woodenExcavator: {
      inputs: [{ item: tf.woodenExcavator }],
      outputs: [{ item: tf.sawdust, amount: 2 }],
      energy: 3_000,
    },
    woodenHammer: {
      inputs: [{ item: tf.woodenHammer }],
      outputs: [{ item: tf.sawdust, amount: 4 }],
      energy: 3_000,
    },
    woodenHoe: {
      inputs: [{ item: mc.woodenHoe }],
      outputs: [{ item: tf.sawdust, amount: 2 }],
      energy: 3_000,
    },
    woodenPickaxe: {
      inputs: [{ item: mc.woodenPickaxe }],
      outputs: [{ item: tf.sawdust, amount: 2 }],
      energy: 3_000,
    },
    woodenShears: {
      inputs: [{ item: tf.woodenShears }],
      outputs: [{ item: tf.sawdust, amount: 2 }],
      energy: 3_000,
    },
    woodenShovel: {
      inputs: [{ item: mc.woodenShovel }],
      outputs: [{ item: tf.sawdust, amount: 2 }],
      energy: 3_000,
    },
    woodenSickle: {
      inputs: [{ item: tf.woodenSickle }],
      outputs: [{ item: tf.sawdust, amount: 2 }],
      energy: 3_000,
    },
    woodenSword: {
      inputs: [{ item: mc.woodenSword }],
      outputs: [{ item: tf.sawdust, amount: 2 }],
      energy: 3_000,
    },
    wool: {
      inputs: [{ itemGroup: mcItemGroups.wool }],
      outputs: [
        { item: mc.string, amount: 4 },
        { itemGroup: tfItemGroups.pigment, chance: 15 },
      ],
      energy: 3_000,
    },
  },
  sandFromGravel: {
    inputs: [{ item: mc.gravel }],
    outputs: [{ item: mc.sand }, { item: mc.flint, chance: 15 }],
    energy: 4_000,
  },
  sawdust: {
    wood: {
      inputs: [{ itemGroup: mcItemGroups.wood }],
      outputs: [{ item: tf.sawdust, amount: 8 }],
      energy: 2_000,
    },
    woodPlanks: {
      inputs: [{ itemGroup: mcItemGroups.woodPlanks }],
      outputs: [{ item: tf.sawdust, amount: 2 }],
      energy: 1_000,
    },
  },
  signalumBlend: {
    inputs: [{ item: tf.signalumIngot }],
    outputs: [{ item: tf.signalumBlend }],
    energy: 2_000,
  },
  steelBlend: {
    inputs: [{ item: tf.steelIngot }],
    outputs: [{ item: tf.steelBlend }],
    energy: 2_000,
  },
});
