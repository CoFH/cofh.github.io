---
title: Next updates
author: Tonius
author_url: http://www.twitter.com/ToniusMods
published: true
---

On *(insert date here)*, new updates were released for [CoFH
Core](/docs/cofh-core/), [CoFH World](/docs/cofh-world/), the [Thermal
Series](/docs/#thermal-series) and [Redstone Arsenal](/docs/redstone-arsenal/).

*TODO: summary*

#### General
* Various refactors and bugfixes (see the [issue
  tracker](https://github.com/CoFH/Feedback/issues?q=is%3Aissue+is%3Aclosed+label%3Afixed+sort%3Aupdated-desc)).

#### CoFH Core
* [Smashing](/docs/cofh-core/smashing/) enchantment
  * Can be applied to mining tools.
  * Smashes ore blocks into multiple piles of dust like a
    [pulverizer](/docs/thermal-expansion/pulverizer/) (but without secondary
    products).
  * Works together with [Smelting](/docs/cofh-core/smelting/).

#### CoFH World
The documentation for World is in the middle of being reworked, so updating it
will take a bit longer.

* World generation files can be disabled completely by adding `"enabled":
  false`.
* The load order of world generation files can be changed by setting a number
  value `priority`.
* Added `spindly` option to the `large-vein` feature type.
* Added `structure` feature type to generate structures from NBT files.
* Added `sequential` feature type to generate multiple features at once in the
  same place.
* Added `ground-level` option to the `cave` distribution type.
* Added `sequential` distribution type to distribute multiple features at once
  in the same chunk.

#### Thermal Foundation
* New materials:
  * [Pulped biomass](/docs/thermal-foundation/pulped-biomass/)
  * [Rich biomass](/docs/thermal-foundation/rich-biomass/)
  * [Pulped bioblend](/docs/thermal-foundation/pulped-bioblend/)
  * [Rich bioblend](/docs/thermal-foundation/rich-bioblend/)
* New fluids:
  * [Seed oil](/docs/thermal-foundation/seed-oil/)
  * [Biocrude](/docs/thermal-foundation/biocrude/)
  * [Grassoline](/docs/thermal-foundation/grassoline/)
* [Metal horse armor variants](/docs/thermal-foundation/horse-armor/) added
  * [Horse armor](https://minecraft.gamepedia.com/Horse_Armor) made of copper,
    tin, silver, etc.
* [Hardened glass](/docs/thermal-foundation/hardened-glass/) now has connected
  textures when
  [ConnectedTexturesMod](https://minecraft.curseforge.com/projects/ctm) is
  installed.
* [Hardened glass](/docs/thermal-foundation/hardened-glass/) can be crafted by
  hand using [pyrotheum dust](/docs/thermal-foundation/pyrotheum-dust/).
* [Redprints](/docs/thermal-foundation/redprint/) and [signalum security
  locks](/docs/thermal-foundation/signalum-security-lock/) are applied upon
  block placement when held in the player's offhand.
* Crafting [torches](https://minecraft.gamepedia.com/Torch) using
  [rosin](/docs/thermal-foundation/rosin/) or
  [tar](/docs/thermal-foundation/tar/) now correctly uses
  [sticks](https://minecraft.gamepedia.com/Stick) instead of
  [string](https://minecraft.gamepedia.com/String).
* [Crescent hammers](/docs/thermal-foundation/crescent-hammer/) now support
  [Ender IO](http://enderio.com/) and the newest version of
  [BuildCraft](https://www.mod-buildcraft.com/).

#### Thermal Expansion
*TODO*

#### Redstone Arsenal
* [Flux-infused omniwrenches](/docs/redstone-arsenal/flux-infused-omniwrench/)
  and [battlewrenches](/docs/redstone-arsenal/flux-infused-battlewrench/) now
  support [Ender IO](http://enderio.com/) and the newest version of
  [BuildCraft](https://www.mod-buildcraft.com/).
