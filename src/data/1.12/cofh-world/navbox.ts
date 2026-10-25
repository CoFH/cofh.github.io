import type { DocNav } from '../../types.ts';

export default {
  title: 'CoFH World (Minecraft 1.12)',
  sections: [
    {
      groups: [
        {
          title: 'Configuration',
          url: 'world-generator-configuration/',
          items: [
            { title: 'Files', url: 'world-generator-configuration/files/' },
            { title: 'Feature format', url: 'world-generator-configuration/feature-format/' },
          ],
          groups: [
            {
              title: 'Feature types',
              url: 'world-generator-configuration/feature-types/',
              items: [
                {
                  title: 'cluster',
                  url: 'world-generator-configuration/feature-types/cluster/',
                },
                {
                  title: 'sparse-cluster',
                  url: 'world-generator-configuration/feature-types/sparse-cluster/',
                },
                {
                  title: 'large-vein',
                  url: 'world-generator-configuration/feature-types/large-vein/',
                },
                {
                  title: 'decoration',
                  url: 'world-generator-configuration/feature-types/decoration/',
                },
                {
                  title: 'lake',
                  url: 'world-generator-configuration/feature-types/lake/',
                },
                {
                  title: 'plate',
                  url: 'world-generator-configuration/feature-types/plate/',
                },
                {
                  title: 'geode',
                  url: 'world-generator-configuration/feature-types/geode/',
                },
                {
                  title: 'spike',
                  url: 'world-generator-configuration/feature-types/spike/',
                },
                {
                  title: 'boulder',
                  url: 'world-generator-configuration/feature-types/boulder/',
                },
                {
                  title: 'stalagmite',
                  url: 'world-generator-configuration/feature-types/stalagmite/',
                },
                {
                  title: 'stalactite',
                  url: 'world-generator-configuration/feature-types/stalactite/',
                },
                {
                  title: 'small-tree',
                  url: 'world-generator-configuration/feature-types/small-tree/',
                },
                {
                  title: 'spout',
                  url: 'world-generator-configuration/feature-types/spout/',
                },
                {
                  title: 'structure',
                  url: 'world-generator-configuration/feature-types/structure/',
                },
                {
                  title: 'sequential',
                  url: 'world-generator-configuration/feature-types/sequential/',
                },
                {
                  title: 'consecutive',
                  url: 'world-generator-configuration/feature-types/consecutive/',
                },
              ],
            },
            {
              title: 'Distribution types',
              url: 'world-generator-configuration/distribution-types/',
              items: [
                {
                  title: 'uniform',
                  url: 'world-generator-configuration/distribution-types/uniform/',
                },
                {
                  title: 'gaussian',
                  url: 'world-generator-configuration/distribution-types/gaussian/',
                },
                {
                  title: 'surface',
                  url: 'world-generator-configuration/distribution-types/surface/',
                },
                {
                  title: 'fractal',
                  url: 'world-generator-configuration/distribution-types/fractal/',
                },
                {
                  title: 'underwater',
                  url: 'world-generator-configuration/distribution-types/underwater/',
                },
                {
                  title: 'underfluid',
                  url: 'world-generator-configuration/distribution-types/underfluid/',
                },
                {
                  title: 'cave',
                  url: 'world-generator-configuration/distribution-types/cave/',
                },
                {
                  title: 'sequential',
                  url: 'world-generator-configuration/distribution-types/sequential/',
                },
                {
                  title: 'custom',
                  url: 'world-generator-configuration/distribution-types/custom/',
                },
              ],
            },
            {
              title: 'Common formats',
              items: [
                {
                  title: 'Block ID',
                  url: 'world-generator-configuration/common-formats/block-id/',
                },
                {
                  title: 'Number provider',
                  url: 'world-generator-configuration/common-formats/number-provider/',
                },
                {
                  title: 'Weighted string',
                  url: 'world-generator-configuration/common-formats/weighted-string/',
                },
              ],
            },
          ],
        },
        {
          title: 'Other',
          items: [{ title: 'Commands', url: 'commands/' }],
        },
      ],
    },
  ],
} satisfies DocNav;
