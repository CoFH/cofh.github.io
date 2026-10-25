import Centrifuge from '../../../../components/docs/1.12/thermal-expansion/recipe/Centrifuge.astro';
import { defineRecipeType, defineRecipes } from '../../../define.ts';
import mcFluids from '../../minecraft/fluids.ts';
import mcItemGroups from '../../minecraft/item-groups.ts';
import mc from '../../minecraft/items.ts';
import tfFluids from '../../thermal-foundation/fluids.ts';
import tfItemGroups from '../../thermal-foundation/item-groups.ts';
import tf from '../../thermal-foundation/items.ts';

export const centrifuge = defineRecipeType('1.12/thermal-expansion', {
  name: 'Centrifugal Separator',
  url: 'centrifugal-separator/',
  withEnergy: true,
  allResultsBold: true,
  component: Centrifuge,
});

export default defineRecipes(centrifuge, {
  aerotheumDust: {
    inputs: [{ item: tf.aerotheumDust, amount: 2 }],
    outputs: [{ item: tf.blitzPowder, amount: 2 }, { item: tf.niter }, { item: mc.redstone }],
    energy: 4_000,
  },
  bronzeBlend: {
    inputs: [{ item: tf.bronzeBlend, amount: 4 }],
    outputs: [{ item: tf.pulverizedCopper, amount: 3 }, { item: tf.pulverizedTin }],
    energy: 8_000,
  },
  concretePowder: {
    inputs: [{ itemGroup: mcItemGroups.concretePowder, amount: 2 }],
    outputs: [
      { item: mc.gravel },
      { item: mc.sand },
      { itemGroup: tfItemGroups.pigment, chance: 10 },
    ],
    energy: 2_000,
  },
  constantanBlend: {
    inputs: [{ item: tf.constantanBlend, amount: 2 }],
    outputs: [{ item: tf.pulverizedCopper }, { item: tf.pulverizedNickel }],
    energy: 4_000,
  },
  cryotheumDust: {
    inputs: [{ item: tf.cryotheumDust, amount: 2 }],
    outputs: [{ item: tf.blizzPowder, amount: 2 }, { item: mc.snowball }, { item: mc.redstone }],
    energy: 4_000,
  },
  electrumBlend: {
    inputs: [{ item: tf.electrumBlend, amount: 2 }],
    outputs: [{ item: tf.pulverizedGold }, { item: tf.pulverizedSilver }],
    energy: 4_000,
  },
  enderiumBlend: {
    inputs: [{ item: tf.enderiumBlend, amount: 4 }],
    outputs: [
      { item: tf.pulverizedLead, amount: 3 },
      { item: tf.pulverizedPlatinum },
      null,
      null,
      { fluid: tfFluids.resonantEnder, amount: 1_000 },
    ],
    energy: 8_000,
  },
  invarBlend: {
    inputs: [{ item: tf.invarBlend, amount: 3 }],
    outputs: [{ item: tf.pulverizedIron, amount: 2 }, { item: tf.pulverizedNickel }],
    energy: 6_000,
  },
  lumiumBlend: {
    inputs: [{ item: tf.lumiumBlend, amount: 4 }],
    outputs: [
      { item: tf.pulverizedTin, amount: 3 },
      { item: tf.pulverizedSilver },
      null,
      null,
      { fluid: tfFluids.energizedGlowstone, amount: 1_000 },
    ],
    energy: 8_000,
  },
  magmaCream: {
    inputs: [{ item: mc.magmaCream }],
    outputs: [{ item: mc.slimeball }, { item: mc.blazePowder }],
    energy: 2_000,
  },
  petrotheumDust: {
    inputs: [{ item: tf.petrotheumDust, amount: 2 }],
    outputs: [
      { item: tf.basalzPowder, amount: 2 },
      { item: tf.pulverizedObsidian },
      { item: mc.redstone },
    ],
    energy: 4_000,
  },
  pyrotheumDust: {
    inputs: [{ item: tf.pyrotheumDust, amount: 2 }],
    outputs: [{ item: mc.blazePowder, amount: 2 }, { item: tf.sulfur }, { item: mc.redstone }],
    energy: 4_000,
  },
  signalumBlend: {
    inputs: [{ item: tf.signalumBlend, amount: 4 }],
    outputs: [
      { item: tf.pulverizedCopper, amount: 3 },
      { item: tf.pulverizedSilver },
      null,
      null,
      { fluid: tfFluids.destabilizedRedstone, amount: 1_000 },
    ],
    energy: 8_000,
  },
  sugarCanes: {
    inputs: [{ item: mc.sugarCanes }],
    outputs: [
      { item: mc.sugar, amount: 2 },
      null,
      null,
      null,
      { fluid: mcFluids.water, amount: 250 },
    ],
    energy: 2_000,
  },
});
