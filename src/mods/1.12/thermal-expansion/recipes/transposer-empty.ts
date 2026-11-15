import TransposerEmpty from '../components/recipe/TransposerEmpty.astro';
import { defineRecipeType, defineRecipes } from '../../../define.ts';
import mcFluids from '../../minecraft/fluids.ts';
import mc from '../../minecraft/items.ts';
import tfFluidGroups from '../../thermal-foundation/fluid-groups.ts';
import tfFluids from '../../thermal-foundation/fluids.ts';
import tfItemGroups from '../../thermal-foundation/item-groups.ts';
import tf from '../../thermal-foundation/items.ts';

export const transposerEmpty = defineRecipeType('1.12/thermal-expansion', {
  name: 'Fluid Transposer',
  url: 'fluid-transposer/',
  withEnergy: true,
  component: TransposerEmpty,
});

export default defineRecipes(transposerEmpty, {
  biocrudeBucket: {
    inputs: [{ item: tf.biocrudeBucket }],
    outputs: [{ fluid: tfFluids.biocrude, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  blazingPyrotheumBucket: {
    inputs: [{ item: tf.blazingPyrotheumBucket }],
    outputs: [{ fluid: tfFluids.blazingPyrotheum, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  creosoteOilBucket: {
    inputs: [{ item: tf.creosoteOilBucket }],
    outputs: [{ fluid: tfFluids.creosoteOil, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  crudeOilBucket: {
    inputs: [{ item: tf.crudeOilBucket }],
    outputs: [{ fluid: tfFluids.crudeOil, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  destabilizedRedstoneBucket: {
    inputs: [{ item: tf.destabilizedRedstoneBucket }],
    outputs: [{ fluid: tfFluids.destabilizedRedstone, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  energizedGlowstoneBucket: {
    inputs: [{ item: tf.energizedGlowstoneBucket }],
    outputs: [{ fluid: tfFluids.energizedGlowstone, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  essenceOfKnowledgeBucket: {
    inputs: [{ item: tf.essenceOfKnowledgeBucket }],
    outputs: [{ fluid: tfFluids.essenceOfKnowledge, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  fluidBucket: {
    inputs: [{ itemGroup: tfItemGroups.filledBucket }],
    outputs: [{ fluidGroup: tfFluidGroups.bucketableFluid, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Works with any item that holds fluids, 1,000\u00a0mB at a time until empty.',
  },
  gelidCryotheumBucket: {
    inputs: [{ item: tf.gelidCryotheumBucket }],
    outputs: [{ fluid: tfFluids.gelidCryotheum, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  grassolineBucket: {
    inputs: [{ item: tf.grassolineBucket }],
    outputs: [{ fluid: tfFluids.grassoline, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  liquifactedCoalBucket: {
    inputs: [{ item: tf.liquifactedCoalBucket }],
    outputs: [{ fluid: tfFluids.liquifactedCoal, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  mushroomStew: {
    inputs: [{ item: mc.mushroomStew }],
    outputs: [{ fluid: tfFluids.mushroomStew, amount: 250 }, { item: mc.bowl }],
    energy: 400,
  },
  mushroomStewBucket: {
    inputs: [{ item: tf.mushroomStewBucket }],
    outputs: [{ fluid: tfFluids.mushroomStew, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  naphthaBucket: {
    inputs: [{ item: tf.naphthaBucket }],
    outputs: [{ fluid: tfFluids.naphtha, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  primalManaBucket: {
    inputs: [{ item: tf.primalManaBucket }],
    outputs: [{ fluid: tfFluids.primalMana, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  refinedFuelBucket: {
    inputs: [{ item: tf.refinedFuelBucket }],
    outputs: [{ fluid: tfFluids.refinedFuel, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  resinBucket: {
    inputs: [{ item: tf.resinBucket }],
    outputs: [{ fluid: tfFluids.resin, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  resonantEnderBucket: {
    inputs: [{ item: tf.resonantEnderBucket }],
    outputs: [{ fluid: tfFluids.resonantEnder, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  sapBucket: {
    inputs: [{ item: tf.sapBucket }],
    outputs: [{ fluid: tfFluids.sap, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  seedOil: {
    beetrootSeeds: {
      inputs: [{ item: mc.beetrootSeeds }],
      outputs: [{ fluid: tfFluids.seedOil, amount: 50 }],
      energy: 1_600,
    },
    melonSeeds: {
      inputs: [{ item: mc.melonSeeds }],
      outputs: [{ fluid: tfFluids.seedOil, amount: 50 }],
      energy: 1_600,
    },
    pumpkinSeeds: {
      inputs: [{ item: mc.pumpkinSeeds }],
      outputs: [{ fluid: tfFluids.seedOil, amount: 50 }],
      energy: 1_600,
    },
    seeds: {
      inputs: [{ item: mc.seeds }],
      outputs: [{ fluid: tfFluids.seedOil, amount: 50 }],
      energy: 1_600,
    },
  },
  seedOilBucket: {
    inputs: [{ item: tf.seedOilBucket }],
    outputs: [{ fluid: tfFluids.seedOil, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  steamBucket: {
    inputs: [{ item: tf.steamBucket }],
    outputs: [{ fluid: tfFluids.steam, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  syrupBucket: {
    inputs: [{ item: tf.syrupBucket }],
    outputs: [{ fluid: tfFluids.syrup, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  tectonicPetrotheumBucket: {
    inputs: [{ item: tf.tectonicPetrotheumBucket }],
    outputs: [{ fluid: tfFluids.tectonicPetrotheum, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  treeOilBucket: {
    inputs: [{ item: tf.treeOilBucket }],
    outputs: [{ fluid: tfFluids.treeOil, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
  water: {
    cactus: {
      inputs: [{ item: mc.cactus }],
      outputs: [{ fluid: mcFluids.water, amount: 500 }],
      energy: 2_400,
    },
    sponge: {
      inputs: [{ item: mc.wetSponge }],
      outputs: [{ fluid: mcFluids.water, amount: 1_000 }, { item: mc.sponge }],
      energy: 4_000,
    },
  },
  zephyreanAerotheumBucket: {
    inputs: [{ item: tf.zephyreanAerotheumBucket }],
    outputs: [{ fluid: tfFluids.zephyreanAerotheum, amount: 1_000 }, { item: mc.bucket }],
    energy: 400,
    note: 'Also works with other fluid containers.',
  },
});
