---
title: October 1 updates
author: Tonius
author_url: http://www.twitter.com/ToniusMods
published: true
---

On October 1, new updates were released for [Redstone
Flux](/docs/redstone-flux/), [CoFH Core](/docs/1.12/cofh-core-4/), [CoFH
World](/docs/1.12/cofh-world/), the [Thermal Series](/docs/#thermal-series), the
[Vanilla+ Series](/docs/#vanilla-series) and [Redstone
Arsenal](/docs/1.12/redstone-arsenal-2/).

[Changelogs on GitHub](https://github.com/CoFH/Version)

#### General
* Various refactors and bugfixes (see the [issue
  tracker](https://github.com/CoFH/Feedback/issues?q=is%3Aissue+is%3Aclosed+label%3Afixed+sort%3Aupdated-desc)).

#### CoFH Core
* [Vorpal](/docs/1.12/cofh-core-4/vorpal/) now has a visual effect when dealing
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
* [Excavators](/docs/1.12/thermal-foundation-2/excavators/)
  * Like [hammers](/docs/1.12/thermal-foundation-2/hammers/), except they're shovels.
* New gear types
  * [Wood](/docs/1.12/thermal-foundation-2/wooden-gear/),
    [stone](/docs/1.12/thermal-foundation-2/stone-gear/),
    [diamond](/docs/1.12/thermal-foundation-2/diamond-gear/) and
    [emerald](/docs/1.12/thermal-foundation-2/emerald-gear/).
  * These aren't used for anything by default, but they can be used by modpack
    developers.
* Gear crafting recipes no longer use a center ingot.
* Increased the amount of dirt that can be crafted using [pulped
  biomass](/docs/1.12/thermal-foundation-2/pulped-biomass/).
* Added an example configuration for generating [platinum
  ore](/docs/1.12/thermal-foundation-2/platinum-ore/) (disabled by default).

#### Thermal Expansion
* [Machines](/docs/1.12/thermal-expansion-5/machines/) no longer abort processing
  immediately when deactivated by a redstone signal.
* [Pulverizer](/docs/1.12/thermal-expansion-5/pulverizer/) recipes tweaked:
  * cobblestone is processed into gravel and sand;
  * gravel is processed into sand and flint;
  * stone is processed into cobblestone;
  * stone requires less energy to process.
* [Sawmills](/docs/1.12/thermal-expansion-5/sawmill/) can recycle saddles.
* [Induction smelters](/docs/1.12/thermal-expansion-5/induction-smelter/) can recycle
  iron bars, iron trapdoors, minecarts and rails.
* [Steam dynamos](/docs/1.12/thermal-expansion-5/steam-dynamo/) can use [pulverized
  coal](/docs/1.12/thermal-foundation-2/pulverized-coal/) and [pulverized
  charcoal](/docs/1.12/thermal-foundation-2/pulverized-charcoal/) as fuel.

#### Redstone Arsenal
* [Flux-infused excavator](/docs/1.12/redstone-arsenal-2/flux-infused-excavator)
  * A powerful [excavator](/docs/1.12/thermal-foundation-2/excavators/) powered by
    [Redstone Flux](/docs/redstone-flux/).
* [Fluxed electrum gears](/docs/1.12/redstone-arsenal-2/fluxed-electrum-gear/) no
  longer require a center ingot to craft.

#### Vanilla+ Tools
* [Excavators](/docs/1.12/vanillaplus-tools/excavators/)
  * Like [hammers](/docs/1.12/vanillaplus-tools/hammers/), except they're shovels.

Please report any bugs on the [issue
tracker](http://www.github.com/CoFH/Feedback).
