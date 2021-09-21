---
author: Tonius
author_url: http://www.twitter.com/ToniusMods
date: "2018-05-29T00:00:00Z"
published: true
title: May 29 updates
---

On May 29, new updates were released for [Redstone Flux](/docs/redstone-flux/),
[CoFH Core](/docs/1.12/cofh-core/), [CoFH World](/docs/1.12/cofh-world/), the [Thermal
Series](/docs/#thermal-series) and [Redstone Arsenal](/docs/1.12/redstone-arsenal/).

The documentation will be updated soon to match the new releases.

[Changelogs on GitHub](https://github.com/CoFH/Version)

#### General
* Various refactors and bugfixes (see the [issue
  tracker](https://github.com/CoFH/Feedback/issues?q=is%3Aissue+is%3Aclosed+label%3Afixed+sort%3Aupdated-desc)).

#### CoFH Core
* [Smashing](/docs/1.12/cofh-core/smashing/) enchantment
  * Can be applied to mining tools.
  * Smashes ore blocks into multiple piles of dust like a
    [pulverizer](/docs/1.12/thermal-expansion/pulverizer/) (but without secondary
    products).
  * Works together with [Smelting](/docs/1.12/cofh-core/smelting/).
  * Can be produced in an [arcane
    ensorcellator](/docs/1.12/thermal-expansion/arcane-ensorcellator/) using
    [petrotheum dust](/docs/1.12/thermal-foundation/petrotheum-dust/).
* Additional arrows fired from a [Multishot](/docs/1.12/cofh-core/multishot/)
  enchanted bow can now hit a single entity simultaneously.
* Firing arrows using a [Multishot](/docs/1.12/cofh-core/multishot/) enchanted bow is
  slightly less accurate.

#### CoFH World
* Added a configuration option to completely disable all feature generation.
* World generation files can be disabled completely by adding `"enabled":
  false`.
* The load order of world generation files can be changed by setting a number
  value `priority`.

#### Thermal Foundation
* [CoFH World](/docs/1.12/cofh-world/) is a hard dependency again.
* New materials:
  * [Pulped biomass](/docs/1.12/thermal-foundation/pulped-biomass/)
    * Obtained by processing various plants in a
      [sawmill](/docs/1.12/thermal-expansion/sawmill/).
  * [Rich biomass](/docs/1.12/thermal-foundation/rich-biomass/)
    * Obtained by infusing [pulped
      biomass](/docs/1.12/thermal-foundation/pulped-biomass/) with [seed
      oil](/docs/1.12/thermal-foundation/seed-oil/) in a [fluid
      transposer](/docs/1.12/thermal-expansion/fluid-transposer/).
  * [Pulped bioblend](/docs/1.12/thermal-foundation/pulped-bioblend/)
    * Obtained by mixing [pulped
      biomass](/docs/1.12/thermal-foundation/pulped-biomass/) with
      [sawdust](/docs/1.12/thermal-foundation/sawdust/).
    * Allows for [pulped biomass](/docs/1.12/thermal-foundation/pulped-biomass/) to
      be used more efficiently.
  * [Rich bioblend](/docs/1.12/thermal-foundation/rich-bioblend/)
    * Obtained by infusing [pulped
      bioblend](/docs/1.12/thermal-foundation/pulped-bioblend/) with [seed
      oil](/docs/1.12/thermal-foundation/seed-oil/) in a [fluid
      transposer](/docs/1.12/thermal-expansion/fluid-transposer/).
  * All types of biomass and bioblend can be processed into different amounts of
    [biocrude](/docs/1.12/thermal-foudation/biocrude/).
* New fluids:
  * [Seed oil](/docs/1.12/thermal-foundation/seed-oil/)
    * Obtained by extracting from seeds in a [fluid
      transposer](/docs/1.12/thermal-expansion/fluid-transposer/).
    * Can be used as fuel in a [compression
      dynamo](/docs/1.12/thermal-expansion/compression-dynamo/), or to make the rich
      versions of [biomass](/docs/1.12/thermal-foundation/pulped-biomass/) and
      [bioblend](/docs/1.12/thermal-foundation/pulped-bioblend/).
  * [Biocrude](/docs/1.12/thermal-foundation/biocrude/)
    * Obtained by processing [biomass](/docs/1.12/thermal-foundation/pulped-biomass/)
      or [bioblend](/docs/1.12/thermal-foundation/pulped-bioblend/) in a [magma
      crucible](/docs/1.12/thermal-expansion/magma-crucible/).
    * Can be further processed into
      [grassoline](/docs/1.12/thermal-foundation/grassoline/).
  * [Grassoline](/docs/1.12/thermal-foundation/grassoline/)
    * Obtained by processing [biocrude](/docs/1.12/thermal-foundation/biocrude/) in a
      [fractionating still](/docs/1.12/thermal-expansion/fractionating-still/).
    * Can be used as fuel in a [compression
      dynamo](/docs/1.12/thermal-expansion/compression-dynamo/).
* [Metal horse armor variants](/docs/1.12/thermal-foundation/horse-armor/) added
  * [Horse armor](https://minecraft.gamepedia.com/Horse_Armor) made of copper,
    tin, silver, etc.
* [Hardened glass](/docs/1.12/thermal-foundation/hardened-glass/) now has connected
  textures when
  [ConnectedTexturesMod](https://minecraft.curseforge.com/projects/ctm) is
  installed.
* [Hardened glass](/docs/1.12/thermal-foundation/hardened-glass/) can be crafted
  using [pyrotheum dust](/docs/1.12/thermal-foundation/pyrotheum-dust/).
* [Redprints](/docs/1.12/thermal-foundation/redprint/) and [signalum security
  locks](/docs/1.12/thermal-foundation/signalum-security-lock/) are applied upon
  block placement when held in the player's offhand.
* Crafting [torches](https://minecraft.gamepedia.com/Torch) using
  [rosin](/docs/1.12/thermal-foundation/rosin/) or
  [tar](/docs/1.12/thermal-foundation/tar/) now correctly uses
  [sticks](https://minecraft.gamepedia.com/Stick) instead of
  [string](https://minecraft.gamepedia.com/String).
* [Crescent hammers](/docs/1.12/thermal-foundation/crescent-hammer/) now support
  [Ender IO](http://enderio.com/) and newer versions of
  [BuildCraft](https://www.mod-buildcraft.com/).

#### Thermal Expansion
* [Vacuumulator](/docs/1.12/thermal-expansion/vacuumulator/)
  * A [device](/docs/1.12/thermal-expansion/devices/) that collects dropped items
    from an 11x11x11 area.
  * An item filter can be configured by using the block while sneaking.
* [Agitative manifold
  augment](/docs/1.12/thermal-expansion/augment-agitative-manifold/)
  * Increases the amount of energy a [compression
    dynamo](/docs/1.12/thermal-expansion/compression-dynamo/) generates from
    [grassoline](/docs/1.12/thermal-foundation/grassoline/).
* [Item allocators](/docs/1.12/thermal-expansion/item-allocator/) can be filtered.
  The filter can be configured by using the block while sneaking.
* [Machines](/docs/1.12/thermal-expansion/machines/) abort processing immediately
  when deactivated by a redstone signal.
* [Devices](/docs/1.12/thermal-expansion/devices/) perform actions as soon as they
  are activated by a redstone signal.
* [Reservoirs](/docs/1.12/thermal-expansion/reservoir/) render the contained fluid.
* When a [dynamo](/docs/1.12/thermal-expansion/dynamos/)'s GUI is opened, item
  tooltips display fuel values if applicable.
* [Arboreal extractors](/docs/1.12/thermal-expansion/arboreal-extractor/) slow down
  when multiple are working on the same tree.
* [Arboreal extractors](/docs/1.12/thermal-expansion/arboreal-extractor/) extract
  twice as much [sap](/docs/1.12/thermal-foundation/sap/) from dark oak trees.
* Reduced the [compression dynamo](/docs/1.12/thermal-expansion/compression-dynamo/)
  fuel values of [tree oil](/docs/1.12/thermal-foundation/tree-oil/),
  [naphtha](/docs/1.12/thermal-foundation/naphtha/) and [refined
  fuel](/docs/1.12/thermal-foundation/refined-fuel/).
* [Magma crucibles](/docs/1.12/thermal-expansion/magma-crucible/) can no longer
  process [tar](/docs/1.12/thermal-foundation/tar/) into [creosote
  oil](/docs/1.12/thermal-foundation/creosote-oil/).
* Tweaked various recipes and energy values.
* New configuration options:
  * the amount of [augments](/docs/1.12/thermal-expansion/augments/) that can be
    installed in [machines](/docs/1.12/thermal-expansion/machines/) and
    [dynamos](/docs/1.12/thermal-expansion/dynamos/) (up to 9);
  * whether [arboreal extractors](/docs/1.12/thermal-expansion/arboreal-extractor/)
    require fertilizer to work;
  * whether [aquatic entanglers](/docs/1.12/thermal-expansion/aquatic-entangler/)
    require bait to work.
* [Machine](/docs/1.12/thermal-expansion/machines/) recipes and
  [dynamo](/docs/1.12/thermal-expansion/dynamos/) fuels can now be added or
  overwritten using JSON configuration files. This system is a work in progress,
  and not all machines and recipe styles are supported yet. Documentation and
  examples will be added to the website sometime soon. For now, the [internal
  default
  files](https://github.com/CoFH/ThermalExpansion/tree/1.12/src/main/resources/thermalexpansion/content)
  can be used as examples.

#### Thermal Dynamics
* Added support for other mods to add custom duct attachments.

#### Redstone Arsenal
* [Flux-infused omniwrenches](/docs/1.12/redstone-arsenal/flux-infused-omniwrench/)
  and [battlewrenches](/docs/1.12/redstone-arsenal/flux-infused-battlewrench/) now
  support [Ender IO](http://enderio.com/) and newer versions of
  [BuildCraft](https://www.mod-buildcraft.com/).

Please report any bugs on the [issue
tracker](http://www.github.com/CoFH/Feedback).
