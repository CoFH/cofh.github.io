---
title: April 25 updates
author: Tonius
author_url: http://www.twitter.com/ToniusMods
published: true
---

On April 25, new updates were released for [CoFH Core](/docs/1.12/cofh-core/), the
[Thermal Series](/docs/#thermal-series) and [Redstone
Arsenal](/docs/1.12/redstone-arsenal/).

It took a while to update the documentation for these updates, which is why this
post is also a bit late. The post for the next updates will probably be written
before the docs are updated.

#### General
* Various refactors and bugfixes (see the [issue
  tracker](https://github.com/CoFH/Feedback/issues?q=is%3Aissue+is%3Aclosed+label%3Afixed+sort%3Aupdated-desc)).

#### CoFH Core
* New [potion types](/docs/1.12/cofh-core/potions/)
  * Potion of Luck (applies
    [Luck](https://minecraft.wiki/w/Luck))
  * Potion of Misfortune (applies [Bad
    Luck](https://minecraft.wiki/w/Bad_Luck))
* [Insight](/docs/1.12/cofh-core/insight/) can be applied to
  [bows](https://minecraft.wiki/w/Bow).
* [Infinity](https://minecraft.wiki/w/Infinity) enchanted
  [bows](https://minecraft.wiki/w/Bow) work without requiring a single
  [arrow](https://minecraft.wiki/w/Arrow) in the user's inventory.
* All enchantments and potion types added by CoFH Core can now be disabled.

#### Thermal Foundation
* [CoFH World](/docs/1.12/cofh-world/) is no longer a hard dependency. However, it is
  still used for the default world generation.
* [Oil sand](/docs/1.12/thermal-foundation/oil-sand/) now has a red variant.
* Added [recipes](/docs/1.12/thermal-foundation/potion-recipes/) for [potions of Luck
  and Misfortune](/docs/1.12/cofh-core/potions/).
* [Tectonic petrotheum](/docs/1.12/thermal-foundation/tectonic-petrotheum/) no longer applies [Night
  Vision](https://minecraft.wiki/w/Night_Vision) when
  touched.
* Elemental dusts ([pyrotheum](/docs/1.12/thermal-foundation/pyrotheum-dust/),
  [cryotheum](/docs/1.12/thermal-foundation/cryotheum-dust/), [aerotheum](/docs/1.12/thermal-foundation/aerotheum-dust/) and
  [petrotheum](/docs/1.12/thermal-foundation/petrotheum-dust/)) are crafted with two units of elemental
  powder instead of one.
* New crafting materials: [tool casing](/docs/1.12/thermal-foundation/tool-casing/), [drill
  head](/docs/1.12/thermal-foundation/drill-head/) and [saw blade](/docs/1.12/thermal-foundation/saw-blade/).
* [Pigments](/docs/1.12/thermal-foundation/pigments/)
  * Types of [dye](https://minecraft.wiki/w/Dye) that can only be used
    for dyeing (unlike certain dyes like [bone
    meal](https://minecraft.wiki/w/Bone_Meal) and [lapis
    lazuli](https://minecraft.wiki/w/Lapis_Lazuli)).
  * Obtained by recycling [wool](https://minecraft.wiki/w/Wool) in a
    [pulverizer](/docs/1.12/thermal-expansion/pulverizer/) or [concrete
    powder](https://minecraft.wiki/w/Concrete_Powder) in a [centrifugal
    separator](/docs/1.12/thermal-expansion/centrifugal-separator/).
* [Multimeters](/docs/1.12/thermal-foundation/multimeter/) are crafted with [gold
  gears](/docs/1.12/thermal-foundation/gold-gear/) instead of [electrum gears](/docs/1.12/thermal-foundation/electrum-gear/).
* Slightly rebalanced tools and armor.
* [Hammers](/docs/1.12/thermal-foundation/hammers/) and
  [sickles](/docs/1.12/thermal-foundation/sickles/) don't break multiple blocks when
  sneaking.

#### Thermal Expansion
* [Factorizer](/docs/1.12/thermal-expansion/factorizer/)
  * A [device](/docs/1.12/thermal-expansion/devices/) that combines and splits various items.
  * Works using 'storage' crafting recipes (storage blocks, nuggets, etc.).
  * Replaces the [compactor](/docs/1.12/thermal-expansion/compactor/)'s Storage mode.
* [Creature Encaptulator](/docs/1.12/thermal-expansion/creature-encaptulator/)
  * A [device](/docs/1.12/thermal-expansion/devices/) that captures
    [mobs](https://minecraft.wiki/w/Mob) in an area using
    [morbs](/docs/1.12/thermal-expansion/morb/).
* [Sawmills](/docs/1.12/thermal-expansion/sawmill/) are crafted with [saw blades](/docs/1.12/thermal-foundation/saw-blade/)
  instead of [iron gears](/docs/1.12/thermal-foundation/iron-gear/).
* [Compactor](/docs/1.12/thermal-expansion/compactor/) changes
  * Removed Storage mode; this functionality is now handled by the
    [factorizer](/docs/1.12/thermal-expansion/factorizer/).
  * The current mode can now only be set by installing specialization
    [augments](/docs/1.12/thermal-expansion/augments/).
* Various minor tweaks to [machine](/docs/1.12/thermal-expansion/machines/) recipe energy amounts and
  secondary chances.
* Many recycling recipes in [machines](/docs/1.12/thermal-expansion/machines/) have been tweaked, moved
  or removed.
* [Pulverizers](/docs/1.12/thermal-expansion/pulverizer/) can no longer produce [cracked stone
  bricks](https://minecraft.wiki/w/Stone_Bricks), as they are now
  obtainable through [smelting](https://minecraft.wiki/w/Smelting).
* [Induction smelter](/docs/1.12/thermal-expansion/induction-smelter/) recipe tweaks
  * [Hardened glass](/docs/1.12/thermal-foundation/hardened-glass/) can no longer be produced using
    [lead ingots](/docs/1.12/thermal-foundation/lead-ingot/); only [pulverized
    lead](/docs/1.12/thermal-foundation/pulverized-lead/) works.
  * [Lapis lazuli ore](https://minecraft.wiki/w/Lapis_Lazuli_Ore) can now
    be processed.
  * Processing [redstone ore](https://minecraft.wiki/w/Redstone_Ore)
    yields 8 [redstone](https://minecraft.wiki/w/Redstone) instead of a
    [block of redstone](https://minecraft.wiki/w/Block_of_Redstone).
  * Processing [nether quartz
    ore](https://minecraft.wiki/w/Nether_Quartz_Ore) is now done using
    regular [sand](https://minecraft.wiki/w/Sand) instead of [soul
    sand](https://minecraft.wiki/w/Soul_Sand), and yields 4 [nether
    quartz](https://minecraft.wiki/w/Nether_Quartz) instead of a [block
    of quartz](https://minecraft.wiki/w/Block_of_Quartz).
  * Metal gears and plates can be recycled back into ingots.
* [Magma crucibles](/docs/1.12/thermal-expansion/magma-crucible/) can produce
  [lava](https://minecraft.wiki/w/Lava) from
  [granite](https://minecraft.wiki/w/Granite) and
  [diorite](https://minecraft.wiki/w/Diorite).
* [Fluid transposer](/docs/1.12/thermal-expansion/fluid-transposer/) elemental powder recipes changed:
  * [Essence of knowledge](/docs/1.12/thermal-foundation/essence-of-knowledge/) is used instead of
    [destabilized redstone](/docs/1.12/thermal-foundation/destabilized-redstone/).
  * [Blaze powder](https://minecraft.wiki/w/Blaze_Powder) requires 2
    [sulfur](/docs/1.12/thermal-foundation/sulfur/) instead of [glowstone
    dust](https://minecraft.wiki/w/Glowstone_Dust).
  * [Blizz powder](/docs/1.12/thermal-foundation/blizz-powder/) requires 2
    [snowballs](https://minecraft.wiki/w/Snowball) instead of 1.
  * [Blitz powder](/docs/1.12/thermal-foundation/blitz-powder/) requires 2 [niter](/docs/1.12/thermal-foundation/niter/) instead
    of [sand](https://minecraft.wiki/w/Sand).
  * [Basalz powder](/docs/1.12/thermal-foundation/basalz-powder/) requires 2 [pulverized
    obsidian](/docs/1.12/thermal-foundation/pulverized-obsidian/) instead of 1.
* Active [dynamos](/docs/1.12/thermal-expansion/dynamos/) now have animated textures.
* [Flux capacitors](/docs/1.12/thermal-expansion/flux-capacitor/) and [reservoirs](/docs/1.12/thermal-expansion/reservoir/)
  can be equipped as
  [baubles](https://www.curseforge.com/minecraft/mc-mods/baubles).
* [Flux capacitors](/docs/1.12/thermal-expansion/flux-capacitor/), [reservoirs](/docs/1.12/thermal-expansion/reservoir/) and
  [satchels](/docs/1.12/thermal-expansion/satchel/) can be dyed.
* [Flux capacitors](/docs/1.12/thermal-expansion/flux-capacitor/) are now capable of charging a
  player's entire inventory.
* [Flux anodizers](/docs/1.12/thermal-expansion/augment-flux-anodizers/) now work with any ore; not
  just ores that yield metals.
* [Alchemical retort](/docs/1.12/thermal-expansion/augment-alchemical-retort/) tweaks
  * Potions can be refined up to level IV instead of V.
  * Extended potions (brewed using
    [redstone](https://minecraft.wiki/w/Redstone)) can be refined to
    increase their potency to levels up to III.

#### Thermal Dynamics
* [Dense and Vacuum Itemducts](/docs/1.12/thermal-dynamics/itemduct/)
  * These were gone for a long time, but they're back now.
  * Affect item routing by dramatically increasing or decreasing the length of a
    route.
  * Can be used to prioritize certain destinations over others.

#### Thermal Innovation
* [Fluxsaw](/docs/1.12/thermal-innovation/fluxsaw/)
  * A [Redstone Flux](/docs/redstone-flux/)-powered
    [axe](https://minecraft.wiki/w/Axe) and
    [shears](https://minecraft.wiki/w/Shears).
  * Much like a [fluxbore](/docs/1.12/thermal-innovation/fluxbore/), but for chopping wood.
* [Alchemical Quiver](/docs/1.12/thermal-innovation/alchemical-quiver/)
  * Stores [arrows](https://minecraft.wiki/w/Arrow) and can automatically
    imbue them with a [fluid potion](/docs/1.12/thermal-foundation/potion-fluid/).
* [Fluxbores](/docs/1.12/thermal-innovation/fluxbore/) can mine different areas:
  * Tunnel: 1x2
  * Area: 3x3
  * Area: 3x3x3
  * Area: 5x5
* [Fluxbores](/docs/1.12/thermal-innovation/fluxbore/) don't break multiple blocks when sneaking.
* [Fluxomagnets](/docs/1.12/thermal-innovation/fluxomagnet/) have slightly reduced attraction radii.
* [Hypoinfusers](/docs/1.12/thermal-innovation/hypoinfuser/) can be used manually by using them while
  sneaking.
* [Fluxomagnets](/docs/1.12/thermal-innovation/fluxomagnet/) and [hypoinfusers](/docs/1.12/thermal-innovation/hypoinfuser/) can
  be equipped as
  [baubles](https://www.curseforge.com/minecraft/mc-mods/baubles).
* Updated various textures and crafting recipes.
* All equipment can now be dyed.

#### Redstone Arsenal
* [Flux-infused hammers](/docs/1.12/redstone-arsenal/flux-infused-hammer/) and
  [sickles](/docs/1.12/redstone-arsenal/flux-infused-sickle/) don't break multiple blocks when
  sneaking.
* Flux-infused armor uses slightly more energy when hit.

Please report any bugs on the [issue
tracker](http://www.github.com/CoFH/Feedback).
