import Compactor from '../components/recipe/Compactor.astro';
import { defineRecipeType, defineRecipes } from '../../../define.ts';
import mc from '../../minecraft/items.ts';
import ra from '../../redstone-arsenal/items.ts';
import tfItemGroups from '../../thermal-foundation/item-groups.ts';
import tf from '../../thermal-foundation/items.ts';

export const compactor = defineRecipeType('1.12/thermal-expansion', {
  name: 'Compactor',
  url: 'compactor/',
  withEnergy: true,
  component: Compactor,
});

export default defineRecipes(compactor, {
  aluminumPlate: {
    inputs: [{ item: tf.aluminumIngot }],
    outputs: [{ item: tf.aluminumPlate }],
    energy: 4_000,
  },
  basalzRodFromPowder: {
    inputs: [{ item: tf.basalzPowder, amount: 5 }],
    outputs: [{ item: tf.basalzRod }],
    energy: 4_000,
  },
  blazeRodFromPowder: {
    inputs: [{ item: mc.blazePowder, amount: 5 }],
    outputs: [{ item: mc.blazeRod }],
    energy: 4_000,
  },
  blitzRodFromPowder: {
    inputs: [{ item: tf.blitzPowder, amount: 5 }],
    outputs: [{ item: tf.blitzRod }],
    energy: 4_000,
  },
  blizzRodFromPowder: {
    inputs: [{ item: tf.blizzPowder, amount: 5 }],
    outputs: [{ item: tf.blizzRod }],
    energy: 4_000,
  },
  bronzePlate: {
    inputs: [{ item: tf.bronzeIngot }],
    outputs: [{ item: tf.bronzePlate }],
    energy: 4_000,
  },
  constantanPlate: {
    inputs: [{ item: tf.constantanIngot }],
    outputs: [{ item: tf.constantanPlate }],
    energy: 4_000,
  },
  copperPlate: {
    inputs: [{ item: tf.copperIngot }],
    outputs: [{ item: tf.copperPlate }],
    energy: 4_000,
  },
  electrumPlate: {
    inputs: [{ item: tf.electrumIngot }],
    outputs: [{ item: tf.electrumPlate }],
    energy: 4_000,
  },
  enderiumPlate: {
    inputs: [{ item: tf.enderiumIngot }],
    outputs: [{ item: tf.enderiumPlate }],
    energy: 4_000,
  },
  fluxedElectrumPlate: {
    inputs: [{ item: ra.fluxedElectrumIngot }],
    outputs: [{ item: ra.fluxedElectrumPlate }],
    energy: 4_000,
  },
  goldPlate: { inputs: [{ item: mc.goldIngot }], outputs: [{ item: tf.goldPlate }], energy: 4_000 },
  invarPlate: {
    inputs: [{ item: tf.invarIngot }],
    outputs: [{ item: tf.invarPlate }],
    energy: 4_000,
  },
  iridiumPlate: {
    inputs: [{ item: tf.iridiumIngot }],
    outputs: [{ item: tf.iridiumPlate }],
    energy: 4_000,
  },
  ironPlate: { inputs: [{ item: mc.ironIngot }], outputs: [{ item: tf.ironPlate }], energy: 4_000 },
  leadPlate: { inputs: [{ item: tf.leadIngot }], outputs: [{ item: tf.leadPlate }], energy: 4_000 },
  lumiumPlate: {
    inputs: [{ item: tf.lumiumIngot }],
    outputs: [{ item: tf.lumiumPlate }],
    energy: 4_000,
  },
  manaInfusedPlate: {
    inputs: [{ item: tf.manaInfusedIngot }],
    outputs: [{ item: tf.manaInfusedPlate }],
    energy: 4_000,
  },
  nickelPlate: {
    inputs: [{ item: tf.nickelIngot }],
    outputs: [{ item: tf.nickelPlate }],
    energy: 4_000,
  },
  plate: {
    inputs: [{ itemGroup: tfItemGroups.metalIngot }],
    outputs: [{ itemGroup: tfItemGroups.metalPlate }],
    energy: 4_000,
  },
  platinumPlate: {
    inputs: [{ item: tf.platinumIngot }],
    outputs: [{ item: tf.platinumPlate }],
    energy: 4_000,
  },
  signalumPlate: {
    inputs: [{ item: tf.signalumIngot }],
    outputs: [{ item: tf.signalumPlate }],
    energy: 4_000,
  },
  silverPlate: {
    inputs: [{ item: tf.silverIngot }],
    outputs: [{ item: tf.silverPlate }],
    energy: 4_000,
  },
  steelPlate: {
    inputs: [{ item: tf.steelIngot }],
    outputs: [{ item: tf.steelPlate }],
    energy: 4_000,
  },
  tinPlate: { inputs: [{ item: tf.tinIngot }], outputs: [{ item: tf.tinPlate }], energy: 4_000 },
});
