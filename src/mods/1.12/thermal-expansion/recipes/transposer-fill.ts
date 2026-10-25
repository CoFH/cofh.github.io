import TransposerFill from '../components/recipe/TransposerFill.astro';
import { defineRecipeType, defineRecipes } from '../../../define.ts';
import mcFluids from '../../minecraft/fluids.ts';
import mcItemGroups from '../../minecraft/item-groups.ts';
import mc from '../../minecraft/items.ts';
import tfFluids from '../../thermal-foundation/fluids.ts';
import tf from '../../thermal-foundation/items.ts';

export const transposerFill = defineRecipeType('1.12/thermal-expansion', {
  name: 'Fluid Transposer',
  url: 'fluid-transposer/',
  withEnergy: true,
  component: TransposerFill,
});

export default defineRecipes(transposerFill, {
  basalzPowder: {
    inputs: [
      { item: tf.pulverizedObsidian, amount: 2 },
      { fluid: tfFluids.essenceOfKnowledge, amount: 200 },
    ],
    outputs: [{ item: tf.basalzPowder }],
    energy: 16_000,
  },
  biocrudeBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.biocrude, amount: 1_000 }],
    outputs: [{ item: tf.biocrudeBucket }],
    energy: 400,
  },
  blazePowder: {
    inputs: [
      { item: tf.sulfur, amount: 2 },
      { fluid: tfFluids.essenceOfKnowledge, amount: 200 },
    ],
    outputs: [{ item: mc.blazePowder }],
    energy: 16_000,
  },
  blazingPyrotheumBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.blazingPyrotheum, amount: 1_000 }],
    outputs: [{ item: tf.blazingPyrotheumBucket }],
    energy: 400,
  },
  blitzPowder: {
    inputs: [
      { item: tf.niter, amount: 2 },
      { fluid: tfFluids.essenceOfKnowledge, amount: 200 },
    ],
    outputs: [{ item: tf.blitzPowder }],
    energy: 16_000,
  },
  blizzPowder: {
    inputs: [
      { item: mc.snowball, amount: 2 },
      { fluid: tfFluids.essenceOfKnowledge, amount: 200 },
    ],
    outputs: [{ item: tf.blizzPowder }],
    energy: 16_000,
  },
  bottleOEnchanting: {
    inputs: [{ item: mc.glassBottle }, { fluid: tfFluids.essenceOfKnowledge, amount: 250 }],
    outputs: [{ item: mc.bottleOEnchanting }],
    energy: 400,
    ingredients: [
      { item: mc.glassBottle },
      {
        html: '<a href="/docs/1.12/thermal-foundation/essence-of-knowledge/">Essence of Knowledge</a> or<br /> <a href="https://www.curseforge.com/minecraft/mc-mods/industrial-foregoing">IF Essence</a> or<br /> <a href="https://www.openmods.info/">OpenBlocks Liquid XP</a> (250 mB)',
      },
    ],
  },
  concrete: {
    inputs: [{ itemGroup: mcItemGroups.concretePowder }, { fluid: mcFluids.water, amount: 1_000 }],
    outputs: [{ itemGroup: mcItemGroups.concrete }],
    energy: 400,
  },
  creosoteOilBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.creosoteOil, amount: 1_000 }],
    outputs: [{ item: tf.creosoteOilBucket }],
    energy: 400,
  },
  crudeOilBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.crudeOil, amount: 1_000 }],
    outputs: [{ item: tf.crudeOilBucket }],
    energy: 400,
  },
  destabilizedRedstoneBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.destabilizedRedstone, amount: 1_000 }],
    outputs: [{ item: tf.destabilizedRedstoneBucket }],
    energy: 400,
  },
  enderPearl: {
    clathrate: {
      inputs: [{ item: tf.resonantClathrate }, { fluid: tfFluids.gelidCryotheum, amount: 200 }],
      outputs: [{ item: mc.enderPearl }],
      energy: 2_000,
    },
    fluid: {
      inputs: [{ item: tf.cryotheumDust }, { fluid: tfFluids.resonantEnder, amount: 1_000 }],
      outputs: [{ item: mc.enderPearl, amount: 4 }],
      energy: 400,
    },
  },
  energizedGlowstoneBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.energizedGlowstone, amount: 1_000 }],
    outputs: [{ item: tf.energizedGlowstoneBucket }],
    energy: 400,
  },
  essenceOfKnowledgeBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.essenceOfKnowledge, amount: 1_000 }],
    outputs: [{ item: tf.essenceOfKnowledgeBucket }],
    energy: 400,
  },
  gelidCryotheumBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.gelidCryotheum, amount: 1_000 }],
    outputs: [{ item: tf.gelidCryotheumBucket }],
    energy: 400,
  },
  glowstoneDust: {
    clathrate: {
      inputs: [{ item: tf.energizedClathrate }, { fluid: tfFluids.gelidCryotheum, amount: 200 }],
      outputs: [{ item: mc.glowstoneDust }],
      energy: 2_000,
    },
    fluid: {
      inputs: [{ item: tf.cryotheumDust }, { fluid: tfFluids.energizedGlowstone, amount: 1_000 }],
      outputs: [{ item: mc.glowstoneDust, amount: 4 }],
      energy: 400,
    },
  },
  grassolineBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.grassoline, amount: 1_000 }],
    outputs: [{ item: tf.grassolineBucket }],
    energy: 400,
  },
  ice: {
    inputs: [{ item: tf.cryotheumDust }, { fluid: mcFluids.water, amount: 1_000 }],
    outputs: [{ item: mc.ice }],
    energy: 400,
  },
  liquifactedCoalBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.liquifactedCoal, amount: 1_000 }],
    outputs: [{ item: tf.liquifactedCoalBucket }],
    energy: 400,
  },
  mossStone: {
    inputs: [{ item: mc.cobblestone }, { fluid: mcFluids.water, amount: 250 }],
    outputs: [{ item: mc.mossStone }],
    energy: 4_000,
  },
  mossyStoneBricks: {
    inputs: [{ item: mc.stoneBricks }, { fluid: mcFluids.water, amount: 250 }],
    outputs: [{ item: mc.mossyStoneBricks }],
    energy: 4_000,
  },
  mushroomStew: {
    inputs: [{ item: mc.bowl }, { fluid: tfFluids.mushroomStew, amount: 250 }],
    outputs: [{ item: mc.mushroomStew }],
    energy: 400,
  },
  mushroomStewBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.mushroomStew, amount: 1_000 }],
    outputs: [{ item: tf.mushroomStewBucket }],
    energy: 400,
  },
  naphthaBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.naphtha, amount: 1_000 }],
    outputs: [{ item: tf.naphthaBucket }],
    energy: 400,
  },
  packedIce: {
    inputs: [{ item: mc.ice }, { fluid: tfFluids.gelidCryotheum, amount: 200 }],
    outputs: [{ item: mc.packedIce }],
    energy: 400,
  },
  primalManaBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.primalMana, amount: 1_000 }],
    outputs: [{ item: tf.primalManaBucket }],
    energy: 400,
  },
  redstone: {
    clathrate: {
      inputs: [{ item: tf.destabilizedClathrate }, { fluid: tfFluids.gelidCryotheum, amount: 200 }],
      outputs: [{ item: mc.redstone, amount: 2 }],
      energy: 2_000,
    },
    fluid: {
      inputs: [{ item: tf.cryotheumDust }, { fluid: tfFluids.destabilizedRedstone, amount: 1_000 }],
      outputs: [{ item: mc.redstone, amount: 10 }],
      energy: 400,
    },
  },
  refinedFuelBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.refinedFuel, amount: 1_000 }],
    outputs: [{ item: tf.refinedFuelBucket }],
    energy: 400,
  },
  resinBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.resin, amount: 1_000 }],
    outputs: [{ item: tf.resinBucket }],
    energy: 400,
  },
  resonantEnderBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.resonantEnder, amount: 1_000 }],
    outputs: [{ item: tf.resonantEnderBucket }],
    energy: 400,
  },
  richBioblend: {
    inputs: [{ item: tf.pulpedBioblend }, { fluid: tfFluids.seedOil, amount: 100 }],
    outputs: [{ item: tf.richBioblend }],
    energy: 800,
  },
  richBiomass: {
    inputs: [{ item: tf.pulpedBiomass }, { fluid: tfFluids.seedOil, amount: 100 }],
    outputs: [{ item: tf.richBiomass }],
    energy: 800,
  },
  richPhytoGro: {
    inputs: [{ item: tf.phytoGro }, { fluid: tfFluids.sap, amount: 200 }],
    outputs: [{ item: tf.richPhytoGro }],
    energy: 1_600,
  },
  sapBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.sap, amount: 1_000 }],
    outputs: [{ item: tf.sapBucket }],
    energy: 400,
  },
  seedOilBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.seedOil, amount: 1_000 }],
    outputs: [{ item: tf.seedOilBucket }],
    energy: 400,
  },
  steamBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.steam, amount: 1_000 }],
    outputs: [{ item: tf.steamBucket }],
    energy: 400,
  },
  syrupBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.syrup, amount: 1_000 }],
    outputs: [{ item: tf.syrupBucket }],
    energy: 400,
  },
  tectonicPetrotheumBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.tectonicPetrotheum, amount: 1_000 }],
    outputs: [{ item: tf.tectonicPetrotheumBucket }],
    energy: 400,
  },
  treeOilBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.treeOil, amount: 1_000 }],
    outputs: [{ item: tf.treeOilBucket }],
    energy: 400,
  },
  wetSponge: {
    inputs: [{ item: mc.sponge }, { fluid: mcFluids.water, amount: 1_000 }],
    outputs: [{ item: mc.wetSponge }],
    energy: 4_000,
  },
  zephyreanAerotheumBucket: {
    inputs: [{ item: mc.bucket }, { fluid: tfFluids.zephyreanAerotheum, amount: 1_000 }],
    outputs: [{ item: tf.zephyreanAerotheumBucket }],
    energy: 400,
  },
});
