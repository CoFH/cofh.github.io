---
title: World generator configuration
nav: cofh-world
redirect_from:
  - /mods/cofh-core/custom-world-generation.html
  - /docs/cofh-core/features/custom-world-generation/
  - /docs/cofh-core/features/custom-world-generation-1-7/
  - /docs/cofh-core/features/custom-world-generation-1-10/
  - /docs/cofh-world/guides/world-generator-configuration/
  - /docs/world-generator-configuration/
---

[CoFH World](/docs/cofh-world/) allows users and modpack makers to configure
custom features to be generated in the world, such as ores, plants, boulders,
spikes and lakes.


Index
-----

* [Files](/docs/world-generator-configuration/files/)
* [Feature format](/docs/world-generator-configuration/feature-format/)
* [Feature types](/docs/world-generator-configuration/feature-types/)
  * [Cluster](/docs/world-generator-configuration/feature-types/cluster/)
  * [Sparse cluster](/docs/world-generator-configuration/feature-types/sparse-cluster/)
  * [Large vein](/docs/world-generator-configuration/feature-types/large-vein/)
  * [Decoration](/docs/world-generator-configuration/feature-types/decoration/)
  * [Small tree](/docs/world-generator-configuration/feature-types/small-tree/)
  * [Plate](/docs/world-generator-configuration/feature-types/plate/)
  * [Boulder](/docs/world-generator-configuration/feature-types/boulder/)
  * [Lake](/docs/world-generator-configuration/feature-types/lake/)
  * [Geode](/docs/world-generator-configuration/feature-types/geode/)
  * [Spike](/docs/world-generator-configuration/feature-types/spike/)
  * [Stalagmite](/docs/world-generator-configuration/feature-types/stalagmite/)
  * [Stalactite](/docs/world-generator-configuration/feature-types/stalactite/)
* [Distribution types](/docs/world-generator-configuration/distribution-types/)
  * [Uniform](/docs/world-generator-configuration/distribution-types/uniform/)
  * [Gaussian](/docs/world-generator-configuration/distribution-types/gaussian/)
  * [Surface](/docs/world-generator-configuration/distribution-types/surface/)
  * [Decoration](/docs/world-generator-configuration/distribution-types/decoration/)
  * [Underfluid](/docs/world-generator-configuration/distribution-types/underfluid/)
  * [Cave](/docs/world-generator-configuration/distribution-types/cave/)
  * [Fractal](/docs/world-generator-configuration/distribution-types/fractal/)
* Common formats
  * [Weighted array](/docs/world-generator-configuration/common-formats/weighted-array/)
  * [Random number generator](/docs/world-generator-configuration/common-formats/random-number-generator/)
  * [Block ID](/docs/world-generator-configuration/common-formats/block-id/)


Tips
----

* If world generation is not working as intended, try checking the log. Any
  errors that are found in the files are logged while the configuration is
  loaded.
* Using [`/cofhworld reload`](/docs/cofh-world-commands/#reload) allows for
  reloading the configuration without restarting the game.
