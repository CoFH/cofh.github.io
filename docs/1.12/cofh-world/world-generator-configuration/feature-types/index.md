---
title: Feature types
nav: cofh-world
redirect_from:
- /docs/cofh-world/world-generator-configuration/feature-types/
---

This page lists the available types of features that can be generated in the
world using [CoFH World](/docs/1.12/cofh-world/). The feature types to use are
specified when describing
[features](/docs/1.12/cofh-world/world-generator-configuration/feature-format/).

<div class="uk-overflow-container" markdown="block">
| Feature type | Description |
|---
| [`cluster`](/docs/1.12/cofh-world/world-generator-configuration/feature-types/cluster/) | A somewhat round deposit of blocks; often used for generating ores. |
| [`sparse-cluster`](/docs/1.12/cofh-world/world-generator-configuration/feature-types/sparse-cluster/) | Like `cluster`, but generates more rarely with smaller sizes. |
| [`large-vein`](/docs/1.12/cofh-world/world-generator-configuration/feature-types/large-vein/) | A deposit consisting of a group of branches that start from a center point; can get very large. |
| [`decoration`](/docs/1.12/cofh-world/world-generator-configuration/feature-types/decoration/) | A group of individual blocks scattered around on a surface. |
| [`lake`](/docs/1.12/cofh-world/world-generator-configuration/feature-types/lake/) | Shaped like naturally generated ponds of water or lava. |
| [`plate`](/docs/1.12/cofh-world/world-generator-configuration/feature-types/plate/) | A vertical cylinder of blocks, similar to clay deposits. |
| [`geode`](/docs/1.12/cofh-world/world-generator-configuration/feature-types/geode/) | Shape is similar to `lake`, except completely filled with and surrounded by blocks. |
| [`spike`](/docs/1.12/cofh-world/world-generator-configuration/feature-types/spike/) | An upwards pointing spike, like the ones in ice plains spikes biomes. |
| [`boulder`](/docs/1.12/cofh-world/world-generator-configuration/feature-types/boulder/) | A group of nearly spherical deposits of blocks. |
| [`stalagmite`](/docs/1.12/cofh-world/world-generator-configuration/feature-types/stalagmite/) | An upwards pointing spike. |
| [`stalactite`](/docs/1.12/cofh-world/world-generator-configuration/feature-types/stalactite/) | A downwards pointing spike. |
| [`small-tree`](/docs/1.12/cofh-world/world-generator-configuration/feature-types/small-tree/) | A small oak-shaped tree. |
| [`spout`](/docs/1.12/cofh-world/world-generator-configuration/feature-types/spout/) | A column of blocks of a certain height, generated from the bottom up. |
| [`structure`](/docs/1.12/cofh-world/world-generator-configuration/feature-types/structure/) | A structure loaded from an NBT file. |
| [`sequential`](/docs/1.12/cofh-world/world-generator-configuration/feature-types/sequential/) | Multiple features at the same location, one after the other. |
| [`consecutive`](/docs/1.12/cofh-world/world-generator-configuration/feature-types/consecutive/) | Loops through a list of features, generating one at a time. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
