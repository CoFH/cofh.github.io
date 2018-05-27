---
title: Distribution types
nav: cofh-world
---

This page lists the available distribution types that can be used to distribute
features generated using [CoFH World](/docs/cofh-world/) in the world. The
distribution type to use is specified when describing a
[feature](/docs/cofh-world/world-generator-configuration/feature-format/).

<div class="uk-overflow-container" markdown="block">
| Distribution type | Description |
|---
| [`uniform`](/docs/cofh-world/world-generator-configuration/distribution-types/uniform/) | Features are evenly distributed between a mininum and maximum altitude. |
| [`gaussian`](/docs/cofh-world/world-generator-configuration/distribution-types/gaussian/) | Features are distributed at a certain altitude, as well as less frequently up to a certain distance away. |
| [`surface`](/docs/cofh-world/world-generator-configuration/distribution-types/surface/) | Features are distributed at the surface (where the sky is visible). |
| [`decoration`](/docs/cofh-world/world-generator-configuration/distribution-types/decoration/) | Like `surface`, but with useful default options for using together with the [`decoration` feature type](/docs/cofh-world/world-generator-configuration/feature-types/decoration/). |
| [`underfluid`](/docs/cofh-world/world-generator-configuration/distribution-types/underfluid/) | Features are distributed at the bottom of bodies of fluid. |
| [`cave`](/docs/cofh-world/world-generator-configuration/distribution-types/cave/) | Features are distributed around underground caves. |
| [`fractal`](/docs/cofh-world/world-generator-configuration/distribution-types/fractal/) | Features are grouped together in large clusters. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
