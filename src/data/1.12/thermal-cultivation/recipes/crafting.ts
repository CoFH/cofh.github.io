import { crafting } from '../../../common-recipe-types.ts';
import { defineRecipes } from '../../../define.ts';
import mc from '../../minecraft/items.ts';
import tfItemGroups from '../../thermal-foundation/item-groups.ts';
import tf from '../../thermal-foundation/items.ts';
import tc from '../items.ts';

export default defineRecipes(crafting, {
  wateringCan0: {
    inputs: [
      { item: tf.copperIngot },
      null,
      null,
      { item: tf.copperIngot },
      { item: mc.bucket },
      { item: tf.copperIngot },
      null,
      { item: tf.copperIngot },
    ],
    outputs: [{ item: tc.wateringCan0 }],
  },
  wateringCan1: {
    inputs: [
      null,
      { item: mc.boneMeal },
      null,
      { item: tf.invarIngot },
      { item: tc.wateringCan0 },
      { item: tf.invarIngot },
      { item: mc.boneMeal },
      { item: mc.redstone },
      { item: mc.boneMeal },
    ],
    outputs: [{ item: tc.wateringCan1 }],
    note: 'Stored water is retained.',
  },
  wateringCan2: {
    inputs: [
      null,
      { item: tf.phytoGro },
      null,
      { item: tf.electrumIngot },
      { item: tc.wateringCan1 },
      { item: tf.electrumIngot },
      { item: tf.phytoGro },
      { itemGroup: tfItemGroups.hardenedGlass, randomCycle: true },
      { item: tf.phytoGro },
    ],
    outputs: [{ item: tc.wateringCan2 }],
    note: 'Stored water is retained.',
  },
  wateringCan3: {
    inputs: [
      null,
      { item: tf.richPhytoGro },
      null,
      { item: tf.signalumIngot },
      { item: tc.wateringCan2 },
      { item: tf.signalumIngot },
      { item: tf.richPhytoGro },
      { item: tf.cryotheumDust },
      { item: tf.richPhytoGro },
    ],
    outputs: [{ item: tc.wateringCan3 }],
    note: 'Stored water is retained.',
  },
  wateringCan4: {
    inputs: [
      null,
      { item: tf.fluxedPhytoGro },
      null,
      { item: tf.enderiumIngot },
      { item: tc.wateringCan3 },
      { item: tf.enderiumIngot },
      { item: tf.fluxedPhytoGro },
      { item: tf.pyrotheumDust },
      { item: tf.fluxedPhytoGro },
    ],
    outputs: [{ item: tc.wateringCan4 }],
    note: 'Stored water is retained.',
  },
});
