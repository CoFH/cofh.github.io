import Crucible from '../components/recipe/Crucible.astro';
import { defineRecipeType, defineRecipes } from '../../../define.ts';
import mcFluids from '../../minecraft/fluids.ts';
import mc from '../../minecraft/items.ts';
import tfFluids from '../../thermal-foundation/fluids.ts';
import tf from '../../thermal-foundation/items.ts';

export const crucible = defineRecipeType('1.12/thermal-expansion', {
  name: 'Magma Crucible',
  url: 'magma-crucible/',
  withEnergy: true,
  component: Crucible,
});

export default defineRecipes(crucible, {
  biocrude: {
    pulpedBioblend: {
      inputs: [{ item: tf.pulpedBioblend }],
      outputs: [{ fluid: tfFluids.biocrude, amount: 100 }],
      energy: 4_000,
    },
    pulpedBiomass: {
      inputs: [{ item: tf.pulpedBiomass }],
      outputs: [{ fluid: tfFluids.biocrude, amount: 100 }],
      energy: 4_000,
    },
    richBioblend: {
      inputs: [{ item: tf.richBioblend }],
      outputs: [{ fluid: tfFluids.biocrude, amount: 150 }],
      energy: 4_000,
    },
    richBiomass: {
      inputs: [{ item: tf.richBiomass }],
      outputs: [{ fluid: tfFluids.biocrude, amount: 150 }],
      energy: 4_000,
    },
  },
  blazingPyrotheum: {
    inputs: [{ item: tf.pyrotheumDust }],
    outputs: [{ fluid: tfFluids.blazingPyrotheum, amount: 250 }],
    energy: 8_000,
  },
  crudeOilFromBitumen: {
    inputs: [{ item: tf.bitumen }],
    outputs: [{ fluid: tfFluids.crudeOil, amount: 250 }],
    energy: 2_000,
  },
  destabilizedRedstone: {
    block: {
      inputs: [{ item: mc.blockOfRedstone }],
      outputs: [{ fluid: tfFluids.destabilizedRedstone, amount: 900 }],
      energy: 72_000,
    },
    clathrate: {
      inputs: [{ item: tf.destabilizedClathrate }],
      outputs: [{ fluid: tfFluids.destabilizedRedstone, amount: 250 }],
      energy: 2_000,
    },
    redstone: {
      inputs: [{ item: mc.redstone }],
      outputs: [{ fluid: tfFluids.destabilizedRedstone, amount: 100 }],
      energy: 8_000,
    },
  },
  energizedGlowstone: {
    block: {
      inputs: [{ item: mc.glowstone }],
      outputs: [{ fluid: tfFluids.energizedGlowstone, amount: 1_000 }],
      energy: 80_000,
    },
    clathrate: {
      inputs: [{ item: tf.energizedClathrate }],
      outputs: [{ fluid: tfFluids.energizedGlowstone, amount: 250 }],
      energy: 2_000,
    },
    glowstoneDust: {
      inputs: [{ item: mc.glowstoneDust }],
      outputs: [{ fluid: tfFluids.energizedGlowstone, amount: 250 }],
      energy: 20_000,
    },
  },
  fluidOreProcessing: {
    destabilizedRedstoneOre: {
      inputs: [{ item: tf.destabilizedRedstoneOre }],
      outputs: [{ fluid: tfFluids.destabilizedRedstone, amount: 1_000 }],
      energy: 4_000,
    },
    energizedNetherrack: {
      inputs: [{ item: tf.energizedNetherrack }],
      outputs: [{ fluid: tfFluids.energizedGlowstone, amount: 1_000 }],
      energy: 4_000,
    },
    oilSand: {
      inputs: [{ item: [tf.oilSand, tf.redOilSand] }],
      outputs: [{ fluid: tfFluids.crudeOil, amount: 1_000 }],
      energy: 4_000,
    },
    oilShale: {
      inputs: [{ item: tf.oilShale }],
      outputs: [{ fluid: tfFluids.crudeOil, amount: 1_000 }],
      energy: 4_000,
    },
    resonantEndStone: {
      inputs: [{ item: tf.resonantEndStone }],
      outputs: [{ fluid: tfFluids.resonantEnder, amount: 1_000 }],
      energy: 4_000,
    },
  },
  gelidCryotheum: {
    inputs: [{ item: tf.cryotheumDust }],
    outputs: [{ fluid: tfFluids.gelidCryotheum, amount: 250 }],
    energy: 8_000,
  },
  lava: {
    andesite: {
      inputs: [{ item: mc.andesite }],
      outputs: [{ fluid: mcFluids.lava, amount: 1_000 }],
      energy: 300_000,
    },
    cobblestone: {
      inputs: [{ item: mc.cobblestone }],
      outputs: [{ fluid: mcFluids.lava, amount: 1_000 }],
      energy: 300_000,
    },
    diorite: {
      inputs: [{ item: mc.diorite }],
      outputs: [{ fluid: mcFluids.lava, amount: 1_000 }],
      energy: 300_000,
    },
    granite: {
      inputs: [{ item: mc.granite }],
      outputs: [{ fluid: mcFluids.lava, amount: 1_000 }],
      energy: 300_000,
    },
    magmaBlock: {
      inputs: [{ item: mc.magmaBlock }],
      outputs: [{ fluid: mcFluids.lava, amount: 1_000 }],
      energy: 40_000,
    },
    netherrack: {
      inputs: [{ item: mc.netherrack }],
      outputs: [{ fluid: mcFluids.lava, amount: 1_000 }],
      energy: 60_000,
    },
    obsidian: {
      inputs: [{ item: mc.obsidian }],
      outputs: [{ fluid: mcFluids.lava, amount: 1_000 }],
      energy: 300_000,
    },
    polishedAndesite: {
      inputs: [{ item: mc.polishedAndesite }],
      outputs: [{ fluid: mcFluids.lava, amount: 1_000 }],
      energy: 300_000,
    },
    polishedDiorite: {
      inputs: [{ item: mc.polishedDiorite }],
      outputs: [{ fluid: mcFluids.lava, amount: 1_000 }],
      energy: 300_000,
    },
    polishedGranite: {
      inputs: [{ item: mc.polishedGranite }],
      outputs: [{ fluid: mcFluids.lava, amount: 1_000 }],
      energy: 300_000,
    },
    stone: {
      inputs: [{ item: mc.stone }],
      outputs: [{ fluid: mcFluids.lava, amount: 1_000 }],
      energy: 300_000,
    },
  },
  liquifactedCoal: {
    inputs: [{ item: tf.pulverizedCoal }],
    outputs: [{ fluid: tfFluids.liquifactedCoal, amount: 100 }],
    energy: 4_000,
  },
  resonantEnder: {
    inputs: [{ item: mc.enderPearl }],
    outputs: [{ fluid: tfFluids.resonantEnder, amount: 250 }],
    energy: 20_000,
  },
  resonantEnderFromClathrate: {
    inputs: [{ item: tf.resonantClathrate }],
    outputs: [{ fluid: tfFluids.resonantEnder, amount: 250 }],
    energy: 2_000,
  },
  tectonicPetrotheum: {
    inputs: [{ item: tf.petrotheumDust }],
    outputs: [{ fluid: tfFluids.tectonicPetrotheum, amount: 250 }],
    energy: 8_000,
  },
  water: {
    ice: {
      inputs: [{ item: mc.ice }],
      outputs: [{ fluid: mcFluids.water, amount: 1_000 }],
      energy: 1_600,
    },
    snow: {
      inputs: [{ item: mc.snow }],
      outputs: [{ fluid: mcFluids.water, amount: 500 }],
      energy: 800,
    },
    snowball: {
      inputs: [{ item: mc.snowball }],
      outputs: [{ fluid: mcFluids.water, amount: 125 }],
      energy: 200,
    },
  },
  zephyreanAerotheum: {
    inputs: [{ item: tf.aerotheumDust }],
    outputs: [{ fluid: tfFluids.zephyreanAerotheum, amount: 250 }],
    energy: 8_000,
  },
});
