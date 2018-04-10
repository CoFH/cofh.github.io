---
title: April 7 updates and Thermal Innovation
author: Tonius
author_url: http://www.twitter.com/ToniusMods
published: true
---

On April 7, new updates were released for [CoFH Core](/docs/cofh-core/),
[Thermal Foundation](/docs/thermal-foundation/), [Thermal
Expansion](/docs/thermal-expansion/), [Thermal
Dynamics](/docs/thermal-dynamics/) and [Redstone
Arsenal](/docs/redstone-arsenal/). The first version of [Thermal
Innovation](/docs/thermal-innovation/) was also released.

#### General
* Various refactors and bugfixes (see the [issue
  tracker](https://github.com/CoFH/Feedback/issues?q=is%3Aissue+is%3Aclosed+label%3Afixed+sort%3Aupdated-desc)).

#### CoFH Core
* [Soulbound](/docs/soulbound/) enchantment
  * Prevents items from being dropped on death.
  * Goes up to level III.
  * The enchantment level may be reduced by one on death.

#### Thermal Foundation
* [Iron gears](/docs/iron-gear/) can now also be crafted using
  [copper](/docs/copper-ingot/), [tin](/docs/tin-ingot/) or
  [bronze](/docs/bronze-ingot/) ingots at the center of the recipe.
* [Shields](/docs/tf-shields/) now look a lot more like the vanilla shield.
  (Thanks [Ithronyar](https://github.com/Ithronyar))
* The elemental dusts are all slightly cheaper to craft:
  * [pyrotheum dust](/docs/pyrotheum-dust/) no longer uses [pulverized
    coal](/docs/pulverized-coal/);
  * [cryotheum dust](/docs/cryotheum-dust/) no longer uses
    [niter](/docs/niter/);
  * [aerotheum dust](/docs/aerotheum-dust/) no longer uses sand;
  * [petrotheum dust](/docs/petrotheum-dust/) no longer uses clay.

#### Thermal Expansion
* [Clastic Deposition](/docs/augment-clastic-deposition/)
  * An augment that allows for an [igneous extruder](/docs/igneous-extruder/) to
    produce sedimentary rock (gravel, sand, sandstone).
* [Dynamos](/docs/dynamos/) that use [coolants](/docs/coolants/) produce more
  energy when using more effective coolants.
* [Item allocators](/docs/item-allocator/) and [strongboxes](/docs/strongbox/)
  with public access can be read by redstone comparators.
* [Decoctive diffusers](/docs/decoctive-diffuser/) have a greater area of
  effect.
* [Phytogenic insolators](/docs/phytogenic-insolator/) produce chorus fruits
  instead of chorus plant blocks.
* [Compactors](/docs/compactor/) can now only produce plates, coins and gears
  from ingots. Storage blocks and nuggets no longer work.
* [Magma crucibles](/docs/magma-crucible/) produce 250 mB of [creosote
  oil](/docs/creosote-oil/) from each unit of [tar](/docs/tar/), instead of 100
  mB.
* [Centrifugal separators](/docs/centrifugal-separator/) can process sugar canes
  into 2 units of sugar each, as well as 250 mB of water.
* [Creosote oil](/docs/creosote-oil/) yields 40,000 RF when used in a
  [compression dynamo](/docs/compression-dynamo/), instead of 20,000 RF.

#### Redstone Arsenal
* [Flux-infused shields](/docs/flux-infused-shield/) now look a lot more like
  the vanilla shield.


Thermal Innovation
------------------

This is a new mod in the Thermal Series. It provides tools and gadgets that
directly increase player power. The mod's documentation is currently still being
worked on, but here's a quick overview.

* [Fluxbore](/docs/fluxbore/)
  * A Redstone Flux-powered pickaxe/shovel.
  * Higher tiers can mine larger areas at once, up to 5x5. This can be adjusted
    on the fly.
  * The more blocks that are mined at once, the slower the mining operation is
    (though it's still faster considering how many blocks are mined).
  * These may be rebalanced a bit more based on feedback.
* [Fluxomagnet](/docs/fluxomagnet/)
  * Attracts distant items using Redstone Flux.
  * Can attract items passively from a certain radius (6 to 10 blocks, depending
    on tier).
  * Can be used actively to pull items to the wielder from a target area up to
    64 blocks away.
  * Items can be filtered, like with [satchels](/docs/satchel/).
* [Hypoinfuser](/docs/hypoinfuser/)
  * Stores [fluid potions](/docs/potion-fluid/), and can automatically infuse
    the wielder with them.
  * Can be used on entities to forcibly inject the contained potion.
