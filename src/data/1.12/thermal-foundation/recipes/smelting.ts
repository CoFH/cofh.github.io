import { smelting } from '../../../common-recipe-types.ts';
import { defineRecipes } from '../../../define.ts';
import mc from '../../minecraft/items.ts';
import tf from '../items.ts';

export default defineRecipes(smelting, {
  aluminumIngotFromDust: {
    inputs: [{ item: tf.pulverizedAluminum }],
    outputs: [{ item: tf.aluminumIngot }],
  },
  bronzeIngotFromDust: { inputs: [{ item: tf.bronzeBlend }], outputs: [{ item: tf.bronzeIngot }] },
  charcoalFromSawdust: {
    inputs: [{ item: tf.compressedSawdust }],
    outputs: [{ item: mc.charcoal }],
  },
  constantanIngotFromDust: {
    inputs: [{ item: tf.constantanBlend }],
    outputs: [{ item: tf.constantanIngot }],
  },
  copperIngotFromDust: {
    inputs: [{ item: tf.pulverizedCopper }],
    outputs: [{ item: tf.copperIngot }],
  },
  electrumIngotFromDust: {
    inputs: [{ item: tf.electrumBlend }],
    outputs: [{ item: tf.electrumIngot }],
  },
  goldIngotFromDust: { inputs: [{ item: tf.pulverizedGold }], outputs: [{ item: mc.goldIngot }] },
  invarIngotFromDust: { inputs: [{ item: tf.invarBlend }], outputs: [{ item: tf.invarIngot }] },
  iridiumIngotFromDust: {
    inputs: [{ item: tf.pulverizedIridium }],
    outputs: [{ item: tf.iridiumIngot }],
  },
  ironIngotFromDust: { inputs: [{ item: tf.pulverizedIron }], outputs: [{ item: mc.ironIngot }] },
  leadIngotFromDust: { inputs: [{ item: tf.pulverizedLead }], outputs: [{ item: tf.leadIngot }] },
  manaInfusedIngotFromDust: {
    inputs: [{ item: tf.pulverizedManaInfusedMetal }],
    outputs: [{ item: tf.manaInfusedIngot }],
  },
  nickelIngotFromDust: {
    inputs: [{ item: tf.pulverizedNickel }],
    outputs: [{ item: tf.nickelIngot }],
  },
  oreProcessing: {
    aluminum: {
      inputs: [{ item: tf.aluminumOre }],
      outputs: [{ item: tf.aluminumIngot }],
      amountSuffix: true,
    },
    copper: {
      inputs: [{ item: tf.copperOre }],
      outputs: [{ item: tf.copperIngot }],
      amountSuffix: true,
    },
    iridium: {
      inputs: [{ item: tf.iridiumOre }],
      outputs: [{ item: tf.iridiumIngot }],
      amountSuffix: true,
    },
    lead: { inputs: [{ item: tf.leadOre }], outputs: [{ item: tf.leadIngot }], amountSuffix: true },
    mithril: {
      inputs: [{ item: tf.manaInfusedOre }],
      outputs: [{ item: tf.manaInfusedIngot }],
      amountSuffix: true,
    },
    nickel: {
      inputs: [{ item: tf.nickelOre }],
      outputs: [{ item: tf.nickelIngot }],
      amountSuffix: true,
    },
    platinum: {
      inputs: [{ item: tf.platinumOre }],
      outputs: [{ item: tf.platinumIngot }],
      amountSuffix: true,
    },
    silver: {
      inputs: [{ item: tf.silverOre }],
      outputs: [{ item: tf.silverIngot }],
      amountSuffix: true,
    },
    tin: { inputs: [{ item: tf.tinOre }], outputs: [{ item: tf.tinIngot }], amountSuffix: true },
  },
  platinumIngotFromDust: {
    inputs: [{ item: tf.pulverizedPlatinum }],
    outputs: [{ item: tf.platinumIngot }],
  },
  rockwool: { inputs: [{ item: tf.slag }], outputs: [{ item: tf.lightGrayRockwool }] },
  silverIngotFromDust: {
    inputs: [{ item: tf.pulverizedSilver }],
    outputs: [{ item: tf.silverIngot }],
  },
  tinIngotFromDust: { inputs: [{ item: tf.pulverizedTin }], outputs: [{ item: tf.tinIngot }] },
});
