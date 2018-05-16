---
title: Distribution types
nav: cofh-world
---

This page lists the available distribution types that can be used to distribute
features generated using [CoFH World](/docs/cofh-world/) in the world. The
distribution type to use is specified when describing a
[feature](/docs/world-generator-configuration/feature-format/).

<div class="uk-overflow-container" markdown="block">
| Distribution type | ID | Description |
|---
| [Uniform](/docs/world-generator-configuration/distribution-types/uniform/) | `uniform` | Features are uniformly distributed between a mininum and maximum altitude. |
| [Gaussian](/docs/world-generator-configuration/distribution-types/gaussian/) | `gaussian` | Features are distributed around a certain altitude. |
| [Surface](/docs/world-generator-configuration/distribution-types/surface/) | `surface` | Features are distributed on the surface. |
| [Decoration](/docs/world-generator-configuration/distribution-types/decoration/) | `decoration` | Like `surface`, but with useful default options for using together with the `decoration` [feature type](/docs/world-generator-configuration/feature-types/). |
| [Underfluid](/docs/world-generator-configuration/distribution-types/underfluid/) | `underfluid` | Features are distributed at the bottom of bodies of fluid. |
| [Cave](/docs/world-generator-configuration/distribution-types/cave/) | `cave` | Features are distributed around underground caves. |
| [Fractal](/docs/world-generator-configuration/distribution-types/fractal/) | `fractal` | Features are grouped together in large clusters. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small}
</div>
