---
title: April 7 updates and Thermal Innovation
author: Tonius
author_url: http://www.twitter.com/ToniusMods
published: true
---

On April 7, new updates were released for [CoFH Core](/docs/1.12/cofh-core-4/),
[Thermal Foundation](/docs/1.12/thermal-foundation-2/), [Thermal
Expansion](/docs/1.12/thermal-expansion-5/), [Thermal
Dynamics](/docs/1.12/thermal-dynamics-2/) and [Redstone
Arsenal](/docs/1.12/redstone-arsenal-2/). The first version of [Thermal
Innovation](/docs/1.12/thermal-innovation/) was also released.

#### General
* Various refactors and bugfixes (see the [issue
  tracker](https://github.com/CoFH/Feedback/issues?q=is%3Aissue+is%3Aclosed+label%3Afixed+sort%3Aupdated-desc)).

#### CoFH Core
* [Soulbound](/docs/1.12/cofh-core-4/soulbound/) enchantment
  * Prevents items from being dropped on death.
  * Goes up to level III.
  * The enchantment level may be reduced by one on death.

#### Thermal Foundation
* [Iron gears](/docs/1.12/thermal-foundation-2/iron-gear/) can now also be crafted using
  [copper](/docs/1.12/thermal-foundation-2/copper-ingot/), [tin](/docs/1.12/thermal-foundation-2/tin-ingot/) or
  [bronze](/docs/1.12/thermal-foundation-2/bronze-ingot/) ingots at the center of the recipe.
* [Shields](/docs/1.12/thermal-foundation-2/shields/) now look a lot more like the
  vanilla shield. (Thanks [Ithronyar](https://github.com/Ithronyar))
* The elemental dusts are all slightly cheaper to craft:
  * [pyrotheum dust](/docs/1.12/thermal-foundation-2/pyrotheum-dust/) no longer uses [pulverized
    coal](/docs/1.12/thermal-foundation-2/pulverized-coal/);
  * [cryotheum dust](/docs/1.12/thermal-foundation-2/cryotheum-dust/) no longer uses
    [niter](/docs/1.12/thermal-foundation-2/niter/);
  * [aerotheum dust](/docs/1.12/thermal-foundation-2/aerotheum-dust/) no longer uses sand;
  * [petrotheum dust](/docs/1.12/thermal-foundation-2/petrotheum-dust/) no longer uses clay.

#### Thermal Expansion
* [Clastic Deposition](/docs/1.12/thermal-expansion-5/augment-clastic-deposition/)
  * An augment that allows for an [igneous extruder](/docs/1.12/thermal-expansion-5/igneous-extruder/) to
    produce sedimentary rock (gravel, sand, sandstone).
* [Dynamos](/docs/1.12/thermal-expansion-5/dynamos/) that use [coolants](/docs/1.12/thermal-expansion-5/coolants/) produce more
  energy when using more effective coolants.
* [Item allocators](/docs/1.12/thermal-expansion-5/item-allocator/) and [strongboxes](/docs/1.12/thermal-expansion-5/strongbox/)
  with public access can be read by redstone comparators.
* [Decoctive diffusers](/docs/1.12/thermal-expansion-5/decoctive-diffuser/) have a greater area of
  effect.
* [Phytogenic insolators](/docs/1.12/thermal-expansion-5/phytogenic-insolator/) produce chorus fruits
  instead of chorus plant blocks.
* [Compactors](/docs/1.12/thermal-expansion-5/compactor/) can now only produce plates, coins and gears
  from ingots. Storage blocks and nuggets no longer work.
* [Magma crucibles](/docs/1.12/thermal-expansion-5/magma-crucible/) produce 250 mB of [creosote
  oil](/docs/1.12/thermal-foundation-2/creosote-oil/) from each unit of [tar](/docs/1.12/thermal-foundation-2/tar/), instead of 100
  mB.
* [Centrifugal separators](/docs/1.12/thermal-expansion-5/centrifugal-separator/) can process sugar canes
  into 2 units of sugar each, as well as 250 mB of water.
* [Creosote oil](/docs/1.12/thermal-foundation-2/creosote-oil/) yields 40,000 RF when used in a
  [compression dynamo](/docs/1.12/thermal-expansion-5/compression-dynamo/), instead of 20,000 RF.

#### Redstone Arsenal
* [Flux-infused shields](/docs/1.12/redstone-arsenal-2/flux-infused-shield/) now look a lot more like
  the vanilla shield.


Thermal Innovation
------------------

This is a new mod in the Thermal Series. It provides tools and gadgets that
directly increase player power. The mod's documentation is currently still being
worked on, but here's a quick overview.

* [Fluxbore](/docs/1.12/thermal-innovation/fluxbore/)
  * A Redstone Flux-powered pickaxe/shovel.
  * Higher tiers can mine larger areas at once, up to 5x5. This can be adjusted
    on the fly.
  * The more blocks that are mined at once, the slower the mining operation is
    (though it's still faster considering how many blocks are mined).
  * These may be rebalanced a bit more based on feedback.
* [Fluxomagnet](/docs/1.12/thermal-innovation/fluxomagnet/)
  * Attracts distant items using Redstone Flux.
  * Can attract items passively from a certain radius (6 to 10 blocks, depending
    on tier).
  * Can be used actively to pull items to the wielder from a target area up to
    64 blocks away.
  * Items can be filtered, like with [satchels](/docs/1.12/thermal-expansion-5/satchel/).
* [Hypoinfuser](/docs/1.12/thermal-innovation/hypoinfuser/)
  * Stores [fluid potions](/docs/1.12/thermal-foundation-2/potion-fluid/), and can automatically infuse
    the wielder with them.
  * Can be used on entities to forcibly inject the contained potion.
