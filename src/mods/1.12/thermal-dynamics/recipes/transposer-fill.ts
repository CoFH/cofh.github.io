import { defineRecipes } from '../../../define.ts';
import { transposerFill } from '../../thermal-expansion/recipes/transposer-fill.ts';
import tfFluids from '../../thermal-foundation/fluids.ts';
import td from '../items.ts';

export default defineRecipes(transposerFill, {
  cryoStabilizedFluxduct: {
    inputs: [
      { item: td.cryoStabilizedFluxductEmpty },
      { fluid: tfFluids.gelidCryotheum, amount: 500 },
    ],
    outputs: [{ item: td.cryoStabilizedFluxduct }],
    energy: 4_000,
  },
  impulseItemduct: {
    inputs: [
      { item: [td.itemduct, td.itemductOpaque] },
      { fluid: tfFluids.energizedGlowstone, amount: 200 },
    ],
    outputs: [{ item: [td.impulseItemduct, td.impulseItemductOpaque] }],
    energy: 800,
  },
  longRangeLinkingViaduct: {
    inputs: [{ item: td.viaduct }, { fluid: tfFluids.resonantEnder, amount: 1_000 }],
    outputs: [{ item: td.longRangeLinkingViaduct }],
    energy: 8_000,
  },
  redstoneEnergyFluxduct: {
    inputs: [
      { item: td.redstoneEnergyFluxductEmpty },
      { fluid: tfFluids.destabilizedRedstone, amount: 200 },
    ],
    outputs: [{ item: td.redstoneEnergyFluxduct }],
    energy: 800,
  },
  resonantFluxduct: {
    inputs: [
      { item: td.resonantFluxductEmpty },
      { fluid: tfFluids.destabilizedRedstone, amount: 200 },
    ],
    outputs: [{ item: td.resonantFluxduct }],
    energy: 800,
  },
  signalumFluxduct: {
    inputs: [
      { item: td.signalumFluxductEmpty },
      { fluid: tfFluids.destabilizedRedstone, amount: 200 },
    ],
    outputs: [{ item: td.signalumFluxduct }],
    energy: 800,
  },
  signalumPlatedImpulseItemduct: {
    inputs: [
      { item: [td.signalumPlatedItemduct, td.signalumPlatedItemductOpaque] },
      { fluid: tfFluids.energizedGlowstone, amount: 200 },
    ],
    outputs: [{ item: [td.signalumPlatedImpulseItemduct, td.signalumPlatedImpulseItemductOpaque] }],
    energy: 800,
  },
  viaduct: {
    inputs: [{ item: td.viaductUntreated }, { fluid: tfFluids.zephyreanAerotheum, amount: 100 }],
    outputs: [{ item: td.viaduct }],
    energy: 800,
  },
});
