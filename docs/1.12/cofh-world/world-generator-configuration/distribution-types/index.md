---
title: Distribution types
redirect_from:
- /docs/cofh-world/world-generator-configuration/distribution-types/
---

This page lists the available distribution types that can be used to distribute
features generated using [CoFH World](../../) in the world. The distribution
type to use is specified when describing a [feature](../feature-format/).

<div class="uk-overflow-container" markdown="block">
| Distribution type | Description |
|---
| [`uniform`](../distribution-types/uniform/) | Features are evenly distributed between a mininum and maximum altitude. |
| [`gaussian`](../distribution-types/gaussian/) | Features are distributed spread around a certain altitude. |
| [`surface`](../distribution-types/surface/) | Features are distributed on the surface. |
| [`fractal`](../distribution-types/fractal/) | Features are distributed together in box-shaped areas. |
| [`underwater`](../distribution-types/underwater/) | Features are distributed at the bottom of bodies of water. |
| [`underfluid`](../distribution-types/underfluid/) | Features are distributed at the bottom of bodies of certain types of fluid. |
| [`cave`](../distribution-types/cave/) | Features are distributed in the floors or ceilings of caves. |
| [`sequential`](../distribution-types/sequential/) | Features are distributed multiple times in the same chunk, using one distribution after the other. |
| [`custom`](../distribution-types/custom/) | Features are distributed at user-specified coordinates in each chunk. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
