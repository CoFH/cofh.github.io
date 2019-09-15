---
title: April 25 updates
author: Tonius
author_url: http://www.twitter.com/ToniusMods
published: true
---

On April 25, new updates were released for [CoFH Core](/docs/cofh-core-4/), the
[Thermal Series](/docs/#thermal-series) and [Redstone
Arsenal](/docs/redstone-arsenal/).

It took a while to update the documentation for these updates, which is why this
post is also a bit late. The post for the next updates will probably be written
before the docs are updated.

#### General
* Various refactors and bugfixes (see the [issue
  tracker](https://github.com/CoFH/Feedback/issues?q=is%3Aissue+is%3Aclosed+label%3Afixed+sort%3Aupdated-desc)).

#### CoFH Core
* New [potion types](/docs/cofh-core-4/potions/)
  * Potion of Luck (applies
    [Luck](https://minecraft.gamepedia.com/Status_effect#Luck))
  * Potion of Misfortune (applies [Bad
    Luck](https://minecraft.gamepedia.com/Status_effect#Bad_Luck))
* [Insight](/docs/cofh-core-4/insight/) can be applied to
  [bows](https://minecraft.gamepedia.com/Bow).
* [Infinity](https://minecraft.gamepedia.com/Infinity) enchanted
  [bows](https://minecraft.gamepedia.com/Bow) work without requiring a single
  [arrow](https://minecraft.gamepedia.com/Arrow) in the user's inventory.
* All enchantments and potion types added by CoFH Core can now be disabled.

#### Thermal Foundation
* [CoFH World](/docs/cofh-world/) is no longer a hard dependency. However, it is
  still used for the default world generation.
* [Oil sand](/docs/thermal-foundation-2/oil-sand/) now has a red variant.
* Added [recipes](/docs/thermal-foundation-2/potion-recipes/) for [potions of Luck
  and Misfortune](/docs/cofh-core-4/potions/).
* [Tectonic petrotheum](/docs/thermal-foundation-2/tectonic-petrotheum/) no longer applies [Night
  Vision](https://minecraft.gamepedia.com/Status_effect#Night_Vision) when
  touched.
* Elemental dusts ([pyrotheum](/docs/thermal-foundation-2/pyrotheum-dust/),
  [cryotheum](/docs/thermal-foundation-2/cryotheum-dust/), [aerotheum](/docs/thermal-foundation-2/aerotheum-dust/) and
  [petrotheum](/docs/thermal-foundation-2/petrotheum-dust/)) are crafted with two units of elemental
  powder instead of one.
* New crafting materials: [tool casing](/docs/thermal-foundation-2/tool-casing/), [drill
  head](/docs/thermal-foundation-2/drill-head/) and [saw blade](/docs/thermal-foundation-2/saw-blade/).
* [Pigments](/docs/thermal-foundation-2/pigments/)
  * Types of [dye](https://minecraft.gamepedia.com/Dye) that can only be used
    for dyeing (unlike certain dyes like [bone
    meal](https://minecraft.gamepedia.com/Bone_Meal) and [lapis
    lazuli](https://minecraft.gamepedia.com/Lapis_Lazuli)).
  * Obtained by recycling [wool](https://minecraft.gamepedia.com/Wool) in a
    [pulverizer](/docs/thermal-expansion/pulverizer/) or [concrete
    powder](https://minecraft.gamepedia.com/Concrete_Powder) in a [centrifugal
    separator](/docs/thermal-expansion/centrifugal-separator/).
* [Multimeters](/docs/thermal-foundation-2/multimeter/) are crafted with [gold
  gears](/docs/thermal-foundation-2/gold-gear/) instead of [electrum gears](/docs/thermal-foundation-2/electrum-gear/).
* Slightly rebalanced tools and armor.
* [Hammers](/docs/thermal-foundation-2/hammers/) and
  [sickles](/docs/thermal-foundation-2/sickles/) don't break multiple blocks when
  sneaking.

#### Thermal Expansion
* [Factorizer](/docs/thermal-expansion/factorizer/)
  * A [device](/docs/thermal-expansion/devices/) that combines and splits various items.
  * Works using 'storage' crafting recipes (storage blocks, nuggets, etc.).
  * Replaces the [compactor](/docs/thermal-expansion/compactor/)'s Storage mode.
* [Creature Encaptulator](/docs/thermal-expansion/creature-encaptulator/)
  * A [device](/docs/thermal-expansion/devices/) that captures
    [mobs](https://minecraft.gamepedia.com/Mob) in an area using
    [morbs](/docs/thermal-expansion/morb/).
* [Sawmills](/docs/thermal-expansion/sawmill/) are crafted with [saw blades](/docs/thermal-foundation-2/saw-blade/)
  instead of [iron gears](/docs/thermal-foundation-2/iron-gear/).
* [Compactor](/docs/thermal-expansion/compactor/) changes
  * Removed Storage mode; this functionality is now handled by the
    [factorizer](/docs/thermal-expansion/factorizer/).
  * The current mode can now only be set by installing specialization
    [augments](/docs/thermal-expansion/augments/).
* Various minor tweaks to [machine](/docs/thermal-expansion/machines/) recipe energy amounts and
  secondary chances.
* Many recycling recipes in [machines](/docs/thermal-expansion/machines/) have been tweaked, moved
  or removed.
* [Pulverizers](/docs/thermal-expansion/pulverizer/) can no longer produce [cracked stone
  bricks](https://minecraft.gamepedia.com/Stone_Bricks), as they are now
  obtainable through [smelting](https://minecraft.gamepedia.com/Smelting).
* [Induction smelter](/docs/thermal-expansion/induction-smelter/) recipe tweaks
  * [Hardened glass](/docs/thermal-foundation-2/hardened-glass/) can no longer be produced using
    [lead ingots](/docs/thermal-foundation-2/lead-ingot/); only [pulverized
    lead](/docs/thermal-foundation-2/pulverized-lead/) works.
  * [Lapis lazuli ore](https://minecraft.gamepedia.com/Lapis_Lazuli_Ore) can now
    be processed.
  * Processing [redstone ore](https://minecraft.gamepedia.com/Redstone_Ore)
    yields 8 [redstone](https://minecraft.gamepedia.com/Redstone) instead of a
    [block of redstone](https://minecraft.gamepedia.com/Block_of_Redstone).
  * Processing [nether quartz
    ore](https://minecraft.gamepedia.com/Nether_Quartz_Ore) is now done using
    regular [sand](https://minecraft.gamepedia.com/Sand) instead of [soul
    sand](https://minecraft.gamepedia.com/Soul_Sand), and yields 4 [nether
    quartz](https://minecraft.gamepedia.com/Nether_Quartz) instead of a [block
    of quartz](https://minecraft.gamepedia.com/Block_of_Quartz).
  * Metal gears and plates can be recycled back into ingots.
* [Magma crucibles](/docs/thermal-expansion/magma-crucible/) can produce
  [lava](https://minecraft.gamepedia.com/Lava) from
  [granite](https://minecraft.gamepedia.com/Granite) and
  [diorite](https://minecraft.gamepedia.com/Diorite).
* [Fluid transposer](/docs/thermal-expansion/fluid-transposer/) elemental powder recipes changed:
  * [Essence of knowledge](/docs/thermal-foundation-2/essence-of-knowledge/) is used instead of
    [destabilized redstone](/docs/thermal-foundation-2/destabilized-redstone/).
  * [Blaze powder](https://minecraft.gamepedia.com/Blaze_Powder) requires 2
    [sulfur](/docs/thermal-foundation-2/sulfur/) instead of [glowstone
    dust](https://minecraft.gamepedia.com/Glowstone_Dust).
  * [Blizz powder](/docs/thermal-foundation-2/blizz-powder/) requires 2
    [snowballs](https://minecraft.gamepedia.com/Snowball) instead of 1.
  * [Blitz powder](/docs/thermal-foundation-2/blitz-powder/) requires 2 [niter](/docs/thermal-foundation-2/niter/) instead
    of [sand](https://minecraft.gamepedia.com/Sand).
  * [Basalz powder](/docs/thermal-foundation-2/basalz-powder/) requires 2 [pulverized
    obsidian](/docs/thermal-foundation-2/pulverized-obsidian/) instead of 1.
* Active [dynamos](/docs/thermal-expansion/dynamos/) now have animated textures.
* [Flux capacitors](/docs/thermal-expansion/flux-capacitor/) and [reservoirs](/docs/thermal-expansion/reservoir/)
  can be equipped as
  [baubles](https://www.curseforge.com/minecraft/mc-mods/baubles).
* [Flux capacitors](/docs/thermal-expansion/flux-capacitor/), [reservoirs](/docs/thermal-expansion/reservoir/) and
  [satchels](/docs/thermal-expansion/satchel/) can be dyed.
* [Flux capacitors](/docs/thermal-expansion/flux-capacitor/) are now capable of charging a
  player's entire inventory.
* [Flux anodizers](/docs/thermal-expansion/augment-flux-anodizers/) now work with any ore; not
  just ores that yield metals.
* [Alchemical retort](/docs/thermal-expansion/augment-alchemical-retort/) tweaks
  * Potions can be refined up to level IV instead of V.
  * Extended potions (brewed using
    [redstone](https://minecraft.gamepedia.com/Redstone)) can be refined to
    increase their potency to levels up to III.

#### Thermal Dynamics
* [Dense and Vacuum Itemducts](/docs/thermal-dynamics/itemduct/)
  * These were gone for a long time, but they're back now.
  * Affect item routing by dramatically increasing or decreasing the length of a
    route.
  * Can be used to prioritize certain destinations over others.

#### Thermal Innovation
* [Fluxsaw](/docs/thermal-innovation/fluxsaw/)
  * A [Redstone Flux](/docs/redstone-flux/)-powered
    [axe](https://minecraft.gamepedia.com/Axe) and
    [shears](https://minecraft.gamepedia.com/Shears).
  * Much like a [fluxbore](/docs/thermal-innovation/fluxbore/), but for chopping wood.
* [Alchemical Quiver](/docs/thermal-innovation/alchemical-quiver/)
  * Stores [arrows](https://minecraft.gamepedia.com/Arrow) and can automatically
    imbue them with a [fluid potion](/docs/thermal-foundation-2/potion-fluid/).
* [Fluxbores](/docs/thermal-innovation/fluxbore/) can mine different areas:
  * Tunnel: 1x2
  * Area: 3x3
  * Area: 3x3x3
  * Area: 5x5
* [Fluxbores](/docs/thermal-innovation/fluxbore/) don't break multiple blocks when sneaking.
* [Fluxomagnets](/docs/thermal-innovation/fluxomagnet/) have slightly reduced attraction radii.
* [Hypoinfusers](/docs/thermal-innovation/hypoinfuser/) can be used manually by using them while
  sneaking.
* [Fluxomagnets](/docs/thermal-innovation/fluxomagnet/) and [hypoinfusers](/docs/thermal-innovation/hypoinfuser/) can
  be equipped as
  [baubles](https://www.curseforge.com/minecraft/mc-mods/baubles).
* Updated various textures and crafting recipes.
* All equipment can now be dyed.

#### Redstone Arsenal
* [Flux-infused hammers](/docs/redstone-arsenal/flux-infused-hammer/) and
  [sickles](/docs/redstone-arsenal/flux-infused-sickle/) don't break multiple blocks when
  sneaking.
* Flux-infused armor uses slightly more energy when hit.

Please report any bugs on the [issue
tracker](http://www.github.com/CoFH/Feedback).
