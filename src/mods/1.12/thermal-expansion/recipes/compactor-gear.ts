import Compactor from '../components/recipe/Compactor.astro';
import { defineRecipeType, defineRecipes } from '../../../define.ts';
import mc from '../../minecraft/items.ts';
import ra from '../../redstone-arsenal/items.ts';
import tf from '../../thermal-foundation/items.ts';

export const compactorGear = defineRecipeType('1.12/thermal-expansion', {
  name: 'Gearworking Die',
  url: 'augment-gearworking-die/',
  withEnergy: true,
  component: Compactor,
});

export default defineRecipes(compactorGear, {
  aluminumGear: {
    inputs: [{ item: tf.aluminumIngot, amount: 4 }],
    outputs: [{ item: tf.aluminumGear }],
    energy: 4_000,
  },
  bronzeGear: {
    inputs: [{ item: tf.bronzeIngot, amount: 4 }],
    outputs: [{ item: tf.bronzeGear }],
    energy: 4_000,
  },
  constantanGear: {
    inputs: [{ item: tf.constantanIngot, amount: 4 }],
    outputs: [{ item: tf.constantanGear }],
    energy: 4_000,
  },
  copperGear: {
    inputs: [{ item: tf.copperIngot, amount: 4 }],
    outputs: [{ item: tf.copperGear }],
    energy: 4_000,
  },
  diamondGear: {
    inputs: [{ item: mc.diamond, amount: 4 }],
    outputs: [{ item: tf.diamondGear }],
    energy: 4_000,
  },
  electrumGear: {
    inputs: [{ item: tf.electrumIngot, amount: 4 }],
    outputs: [{ item: tf.electrumGear }],
    energy: 4_000,
  },
  emeraldGear: {
    inputs: [{ item: mc.emerald, amount: 4 }],
    outputs: [{ item: tf.emeraldGear }],
    energy: 4_000,
  },
  enderiumGear: {
    inputs: [{ item: tf.enderiumIngot, amount: 4 }],
    outputs: [{ item: tf.enderiumGear }],
    energy: 4_000,
  },
  fluxedElectrumGear: {
    inputs: [{ item: ra.fluxedElectrumIngot, amount: 4 }],
    outputs: [{ item: ra.fluxedElectrumGear }],
    energy: 4_000,
  },
  goldGear: {
    inputs: [{ item: mc.goldIngot, amount: 4 }],
    outputs: [{ item: tf.goldGear }],
    energy: 4_000,
  },
  invarGear: {
    inputs: [{ item: tf.invarIngot, amount: 4 }],
    outputs: [{ item: tf.invarGear }],
    energy: 4_000,
  },
  iridiumGear: {
    inputs: [{ item: tf.iridiumIngot, amount: 4 }],
    outputs: [{ item: tf.iridiumGear }],
    energy: 4_000,
  },
  ironGear: {
    inputs: [{ item: mc.ironIngot, amount: 4 }],
    outputs: [{ item: tf.ironGear }],
    energy: 4_000,
  },
  leadGear: {
    inputs: [{ item: tf.leadIngot, amount: 4 }],
    outputs: [{ item: tf.leadGear }],
    energy: 4_000,
  },
  lumiumGear: {
    inputs: [{ item: tf.lumiumIngot, amount: 4 }],
    outputs: [{ item: tf.lumiumGear }],
    energy: 4_000,
  },
  manaInfusedGear: {
    inputs: [{ item: tf.manaInfusedIngot, amount: 4 }],
    outputs: [{ item: tf.manaInfusedGear }],
    energy: 4_000,
  },
  nickelGear: {
    inputs: [{ item: tf.nickelIngot, amount: 4 }],
    outputs: [{ item: tf.nickelGear }],
    energy: 4_000,
  },
  platinumGear: {
    inputs: [{ item: tf.platinumIngot, amount: 4 }],
    outputs: [{ item: tf.platinumGear }],
    energy: 4_000,
  },
  signalumGear: {
    inputs: [{ item: tf.signalumIngot, amount: 4 }],
    outputs: [{ item: tf.signalumGear }],
    energy: 4_000,
  },
  silverGear: {
    inputs: [{ item: tf.silverIngot, amount: 4 }],
    outputs: [{ item: tf.silverGear }],
    energy: 4_000,
  },
  steelGear: {
    inputs: [{ item: tf.steelIngot, amount: 4 }],
    outputs: [{ item: tf.steelGear }],
    energy: 4_000,
  },
  tinGear: {
    inputs: [{ item: tf.tinIngot, amount: 4 }],
    outputs: [{ item: tf.tinGear }],
    energy: 4_000,
  },
});
