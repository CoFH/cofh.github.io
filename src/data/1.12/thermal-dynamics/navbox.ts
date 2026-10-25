import type { DocNav } from '../../types.ts';
import td from './items.ts';

export default {
  title: 'Thermal Dynamics (Minecraft 1.12)',
  sections: [
    {
      groups: [
        {
          title: 'Ducts',
          groups: [
            {
              title: 'Energy',
              items: [
                {
                  title: 'Fluxducts',
                  item: td.redstoneEnergyFluxduct,
                  url: 'fluxducts/',
                  subitems: [
                    { title: 'Leadstone', item: td.leadstoneFluxduct },
                    { title: 'Hardened', item: td.hardenedFluxduct },
                    { title: 'Redstone Energy', item: td.redstoneEnergyFluxduct },
                    { title: 'Signalum', item: td.signalumFluxduct },
                    { title: 'Resonant', item: td.resonantFluxduct },
                    { title: 'Cryo-Stabilized', item: td.cryoStabilizedFluxduct },
                  ],
                },
              ],
            },
            {
              title: 'Fluids',
              items: [
                {
                  item: td.fluiduct,
                  subitems: [
                    { title: 'Hardened', item: td.hardenedFluiduct },
                    { title: 'Signalum-Plated', item: td.signalumPlatedFluiduct },
                    { title: 'Super-Laminar', item: td.superLaminarFluiduct },
                  ],
                },
              ],
            },
            {
              title: 'Items',
              items: [
                {
                  item: td.itemduct,
                  subitems: [
                    { title: 'Impulse', item: td.impulseItemduct },
                    { title: 'Signalum-Plated', item: td.signalumPlatedItemduct },
                    { title: 'Signalum-Plated Impulse', item: td.signalumPlatedImpulseItemduct },
                  ],
                },
              ],
            },
            {
              title: 'Other',
              items: [
                {
                  item: td.structuralduct,
                },
                {
                  item: td.viaduct,
                  subitems: [
                    { title: 'Long Range', item: td.longRangeViaduct },
                    { title: 'Long Range Linking', item: td.longRangeLinkingViaduct },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: 'Attachments',
          items: [
            { title: 'Covers', item: td.stoneCover },
            { title: 'Servos', item: td.servo0 },
            { title: 'Filters', item: td.filter0 },
            { title: 'Retrievers', item: td.retriever0 },
            { item: td.redstoneRelay },
          ],
        },
      ],
    },
  ],
} satisfies DocNav;
