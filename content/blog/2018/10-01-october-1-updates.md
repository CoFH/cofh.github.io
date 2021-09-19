---
author: Tonius
author_url: http://www.twitter.com/ToniusMods
date: "2018-10-01T00:00:00Z"
published: true
title: October 1 updates
---

On October 1, new updates were released for [Redstone
Flux](/docs/redstone-flux/), [CoFH Core](/docs/1.12/cofh-core/), [CoFH
World](/docs/1.12/cofh-world/), the [Thermal Series](/docs/#thermal-series), the
[Vanilla+ Series](/docs/#vanilla-series) and [Redstone
Arsenal](/docs/1.12/redstone-arsenal/).

[Changelogs on GitHub](https://github.com/CoFH/Version)

#### General
* Various refactors and bugfixes (see the [issue
  tracker](https://github.com/CoFH/Feedback/issues?q=is%3Aissue+is%3Aclosed+label%3Afixed+sort%3Aupdated-desc)).

#### CoFH Core
* [Vorpal](/docs/1.12/cofh-core/vorpal/) now has a visual effect when dealing
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
* [Excavators](/docs/1.12/thermal-foundation/excavators/)
  * Like [hammers](/docs/1.12/thermal-foundation/hammers/), except they're shovels.
* New gear types
  * [Wood](/docs/1.12/thermal-foundation/wooden-gear/),
    [stone](/docs/1.12/thermal-foundation/stone-gear/),
    [diamond](/docs/1.12/thermal-foundation/diamond-gear/) and
    [emerald](/docs/1.12/thermal-foundation/emerald-gear/).
  * These aren't used for anything by default, but they can be used by modpack
    developers.
* Gear crafting recipes no longer use a center ingot.
* Increased the amount of dirt that can be crafted using [pulped
  biomass](/docs/1.12/thermal-foundation/pulped-biomass/).
* Added an example configuration for generating [platinum
  ore](/docs/1.12/thermal-foundation/platinum-ore/) (disabled by default).

#### Thermal Expansion
* [Machines](/docs/1.12/thermal-expansion/machines/) no longer abort processing
  immediately when deactivated by a redstone signal.
* [Pulverizer](/docs/1.12/thermal-expansion/pulverizer/) recipes tweaked:
  * cobblestone is processed into gravel and sand;
  * gravel is processed into sand and flint;
  * stone is processed into cobblestone;
  * stone requires less energy to process.
* [Sawmills](/docs/1.12/thermal-expansion/sawmill/) can recycle saddles.
* [Induction smelters](/docs/1.12/thermal-expansion/induction-smelter/) can recycle
  iron bars, iron trapdoors, minecarts and rails.
* [Steam dynamos](/docs/1.12/thermal-expansion/steam-dynamo/) can use [pulverized
  coal](/docs/1.12/thermal-foundation/pulverized-coal/) and [pulverized
  charcoal](/docs/1.12/thermal-foundation/pulverized-charcoal/) as fuel.

#### Redstone Arsenal
* [Flux-infused excavator](/docs/1.12/redstone-arsenal/flux-infused-excavator)
  * A powerful [excavator](/docs/1.12/thermal-foundation/excavators/) powered by
    [Redstone Flux](/docs/redstone-flux/).
* [Fluxed electrum gears](/docs/1.12/redstone-arsenal/fluxed-electrum-gear/) no
  longer require a center ingot to craft.

#### Vanilla+ Tools
* [Excavators](/docs/1.12/vanillaplus-tools/excavators/)
  * Like [hammers](/docs/1.12/vanillaplus-tools/hammers/), except they're shovels.

Please report any bugs on the [issue
tracker](http://www.github.com/CoFH/Feedback).
