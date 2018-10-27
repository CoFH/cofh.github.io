---
title: October 1 updates
author: Tonius
author_url: http://www.twitter.com/ToniusMods
published: true
---

On October 1, new updates were released for [Redstone
Flux](/docs/redstone-flux/), [CoFH Core](/docs/cofh-core/), [CoFH
World](/docs/cofh-world/), the [Thermal Series](/docs/#thermal-series), the
[Vanilla+ Series](/docs/#vanilla-series) and [Redstone
Arsenal](/docs/redstone-arsenal/).

[Changelogs on GitHub](https://github.com/CoFH/Version)

#### General
* Various refactors and bugfixes (see the [issue
  tracker](https://github.com/CoFH/Feedback/issues?q=is%3Aissue+is%3Aclosed+label%3Afixed+sort%3Aupdated-desc)).

#### CoFH Core
* [Vorpal](/docs/cofh-core/vorpal/) now has a visual effect when dealing
  increased damage.

#### CoFH World
* World generation files may contain a string value `namespace` to avoid feature
  name conflicts between files.
* New distribution types: `sequential` and `custom`.
* New feature types: `spout`, `structure`, `sequential` and `consecutive`.
* These will be properly described in CoFH World's documentation, which is
  currently being rewritten. For now, you'll have to ask Skyboy on the Discord
  server.

#### Thermal Foundation
* [Excavators](/docs/thermal-foundation/excavators/)
  * Like [hammers](/docs/thermal-foundation/hammers/), except they're shovels.
* New gear types
  * [Wood](/docs/thermal-foundation/wooden-gear/),
    [stone](/docs/thermal-foundation/stone-gear/),
    [diamond](/docs/thermal-foundation/diamond-gear/) and
    [emerald](/docs/thermal-foundation/emerald-gear/).
  * These aren't used for anything by default, but they can be used by modpack
    developers.
* Gear crafting recipes no longer use a center ingot.
* Increased the amount of dirt that can be crafted using [pulped
  biomass](/docs/thermal-foundation/pulped-biomass/).
* Added an example configuration for generating [platinum
  ore](/docs/thermal-foundation/platinum-ore/) (disabled by default).

#### Thermal Expansion
* [Machines](/docs/thermal-expansion/machines/) no longer abort processing
  immediately when deactivated by a redstone signal.
* [Pulverizer](/docs/thermal-expansion/pulverizer/) recipes tweaked:
  * cobblestone is processed into gravel and sand;
  * gravel is processed into sand and flint;
  * stone is processed into cobblestone;
  * stone requires less energy to process.
* [Sawmills](/docs/thermal-expansion/sawmill/) can recycle saddles.
* [Induction smelters](/docs/thermal-expansion/induction-smelter/) can recycle
  iron bars, iron trapdoors, minecarts and rails.
* [Steam dynamos](/docs/thermal-expansion/steam-dynamo/) can use [pulverized
  coal](/docs/thermal-foundation/pulverized-coal/) and [pulverized
  charcoal](/docs/thermal-foundation/pulverized-charcoal/) as fuel.

#### Redstone Arsenal
* [Flux-infused excavator](/docs/redstone-arsenal/flux-infused-excavator)
  * A powerful [excavator](/docs/thermal-foundation/excavators/) powered by
    [Redstone Flux](/docs/redstone-flux/).
* [Fluxed electrum gears](/docs/redstone-arsenal/fluxed-electrum-gear/) no
  longer require a center ingot to craft.

#### Vanilla+ Tools
* [Excavators](/docs/vanillaplus-tools/excavators/)
  * Like [hammers](/docs/vanillaplus-tools/hammers/), except they're shovels.

Please report any bugs on the [issue
tracker](http://www.github.com/CoFH/Feedback).
