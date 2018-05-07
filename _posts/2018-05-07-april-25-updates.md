---
title: April 25 updates
author: Tonius
author_url: http://www.twitter.com/ToniusMods
published: true
---

On April 25, new updates were released for [CoFH Core](/docs/cofh-core/), the
[Thermal Series](/docs/#thermal-series) and [Redstone
Arsenal](/docs/redstone-arsenal/).

#### General
* Various refactors and bugfixes (see the [issue
  tracker](https://github.com/CoFH/Feedback/issues?q=is%3Aissue+is%3Aclosed+label%3Afixed+sort%3Aupdated-desc)).

#### CoFH Core
* New [potion types](/docs/cofh-core-potions/)
  * Potion of Luck (applies
    [Luck](https://minecraft.gamepedia.com/Status_effect#Luck))
  * Potion of Misfortune (applies [Bad
    Luck](https://minecraft.gamepedia.com/Status_effect#Bad_Luck))
* [Insight](/docs/insight/) can be applied to
  [bows](https://minecraft.gamepedia.com/Bow).
* [Infinity](https://minecraft.gamepedia.com/Infinity) enchanted
  [bows](https://minecraft.gamepedia.com/Bow) work without requiring a single
  [arrow](https://minecraft.gamepedia.com/Arrow) in the user's inventory.
* All enchantments and potion types added by CoFH Core can now be disabled.

#### Thermal Foundation
* [CoFH World](/docs/cofh-world/) is no longer a hard dependency. However, it is
  still used for the default world generation.
* [Oil sand](/docs/oil-sand/) now has a red variant.
* Added [recipes](/docs/tf-potion-recipes/) for [potions of Luck and
  Misfortune](/docs/cofh-core-potions/).
* [Tectonic petrotheum](/docs/tectonic-petrotheum/) no longer applies [Night
  Vision](https://minecraft.gamepedia.com/Status_effect#Night_Vision) when
  touched.
* Elemental dusts ([pyrotheum](/docs/pyrotheum-dust/),
  [cryotheum](/docs/cryotheum-dust/), [aerotheum](/docs/aerotheum-dust/) and
  [petrotheum](/docs/petrotheum-dust/)) are crafted with two units of elemental
  powder instead of one.
* New crafting materials: [tool casing](/docs/tool-casing/), [drill
  head](/docs/drill-head/) and [saw blade](/docs/saw-blade/).
* [Pigments](/docs/pigments/)
  * Types of [dye](https://minecraft.gamepedia.com/Dye) that can only be used
    for dyeing (unlike certain dyes like [bone
    meal](https://minecraft.gamepedia.com/Bone_Meal) and [lapis
    lazuli](https://minecraft.gamepedia.com/Lapis_Lazuli)).
  * Obtained by recycling [wool](https://minecraft.gamepedia.com/Wool) in a
    [pulverizer](/docs/pulverizer/) or [concrete
    powder](https://minecraft.gamepedia.com/Concrete_Powder) in a [centrifugal
    separator](/docs/centrifugal-separator/).
* [Multimeters](/docs/multimeter/) are crafted with [gold
  gears](/docs/gold-gear/) instead of [electrum gears](/docs/electrum-gear/).
* Slightly rebalanced tools and armor.
* [Hammers](/docs/tf-hammers/) and [sickles](/docs/tf-sickles/) don't break
  multiple blocks when sneaking.

#### Thermal Expansion
* [Factorizer](/docs/factorizer/)
  * A [device](/docs/devices/) that combines and splits various items.
  * Works using 'storage' crafting recipes (storage blocks, nuggets, etc.).
  * Replaces the [compactor](/docs/compactor/)'s Storage mode.
* [Creature Encaptulator](/docs/creature-encaptulator/)
  * A [device](/docs/devices/) that captures
    [mobs](https://minecraft.gamepedia.com/Mob) in an area using
    [morbs](/docs/morb/).
* [Sawmills](/docs/sawmill/) are crafted with [saw blades](/docs/saw-blade/)
  instead of [iron gears](/docs/iron-gear/).
* [Compactor](/docs/compactor/) changes
  * Removed Storage mode; this functionality is now handled by the
    [factorizer](/docs/factorizer/).
  * The current mode can now only be set by installing specialization
    [augments](/docs/augments/).
* Various minor tweaks to [machine](/docs/machines/) recipe energy amounts and
  secondary chances.
* Many recycling recipes in [machines](/docs/machines/) have been tweaked, moved
  or removed.
* [Pulverizers](/docs/pulverizer/) can no longer produce [cracked stone
  bricks](https://minecraft.gamepedia.com/Stone_Bricks), as they are now
  obtainable through [smelting](https://minecraft.gamepedia.com/Smelting).
* [Induction smelter](/docs/induction-smelter/) recipe tweaks
  * [Hardened glass](/docs/hardened-glass/) can no longer be produced using
    [lead ingots](/docs/lead-ingot/); only [pulverized
    lead](/docs/pulverized-lead/) works.
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
* [Magma crucibles](/docs/magma-crucible/) can produce
  [lava](https://minecraft.gamepedia.com/Lava) from
  [granite](https://minecraft.gamepedia.com/Granite) and
  [diorite](https://minecraft.gamepedia.com/Diorite).
* Creating elemental powders using a [fluid transposer](/docs/fluid-transposer/)
  is now more expensive:
  * Increased energy cost to 16,000 RF.
  * [Essence of knowledge](/docs/essence-of-knowledge/) is used instead of
    [destabilized redstone](/docs/destabilized-redstone/).
  * [Blaze powder](https://minecraft.gamepedia.com/Blaze_Powder) requires 2
    [sulfur](/docs/sulfur/) instead of [glowstone
    dust](https://minecraft.gamepedia.com/Glowstone_Dust).
  * [Blizz powder](/docs/blizz-powder/) requires 2
    [snowballs](https://minecraft.gamepedia.com/Snowball) instead of 1.
  * [Blitz powder](/docs/blitz-powder/) requires 2 [niter](/docs/niter/) instead
    of [sand](https://minecraft.gamepedia.com/Sand).
  * [Basalz powder](/docs/basalz-powder/) requires 2 [pulverized
    obsidian](/docs/pulverized-obsidian/) instead of 1.
* [Item](/docs/item-allocator/) and [fluid allocators](/docs/fluid-allocator/)
  now move items and fluids every tick.
* Active [dynamos](/docs/dynamos/) now have animated textures.
* [Flux capacitors](/docs/flux-capacitor/) and [reservoirs](/docs/reservoir/)
  can be equipped as
  [baubles](https://www.curseforge.com/minecraft/mc-mods/baubles).
* [Flux capacitors](/docs/flux-capacitor/), [reservoirs](/docs/reservoir/) and
  [satchels](/docs/satchel/) can be dyed.
* [Flux capacitors](/docs/flux-capacitor/) are now capable of charging a
  player's entire inventory.
* [Flux anodizers](/docs/augment-flux-anodizers/) now work with any ore; not
  just ores that yield metals.
* [Alchemical retort](/docs/augment-alchemical-retort/) tweaks
  * Potions can be refined up to level IV instead of V.
  * Extended potions (brewed using
    [redstone](https://minecraft.gamepedia.com/Redstone)) can be refined to
    increase their potency to levels up to III.

#### Thermal Dynamics
* [Dense and Vacuum Itemducts](/docs/itemduct/)
  * These were gone for a long time, but they're back now.
  * Affect item routing by dramatically increasing or decreasing the length of a
    route.
  * Can be used to prioritize certain destinations over others.

#### Thermal Innovation
* [Fluxsaw](/docs/fluxsaw/)
  * A [Redstone Flux](/docs/redstone-flux/)-powered
    [axe](https://minecraft.gamepedia.com/Axe) and
    [shears](https://minecraft.gamepedia.com/Shears).
  * Much like a [fluxbore](/docs/fluxbore/), but for chopping wood.
* [Alchemical Quiver](/docs/alchemical-quiver/)
  * Stores [arrows](https://minecraft.gamepedia.com/Arrow) and can automatically
    imbue them with a [fluid potion](/docs/potion-fluid/).
* [Fluxbores](/docs/fluxbore/) can mine different areas:
  * Tunnel: 1x2
  * Area: 3x3
  * Area: 3x3x3
  * Area: 5x5
* [Fluxbores](/docs/fluxbore/) don't break multiple blocks when sneaking.
* [Fluxomagnets](/docs/fluxomagnet/) have slightly reduced attraction radii.
* [Hypoinfusers](/docs/hypoinfuser/) can be used manually by using them while
  sneaking.
* [Fluxomagnets](/docs/fluxomagnet/) and [hypoinfusers](/docs/hypoinfuser/) can
  be equipped as
  [baubles](https://www.curseforge.com/minecraft/mc-mods/baubles).
* Updated various textures and crafting recipes.
* All equipment can now be dyed.

#### Redstone Arsenal
* [Flux-infused hammers](/docs/flux-infused-hammer/) and
  [sickles](/docs/flux-infused-sickle/) don't break multiple blocks when
  sneaking.
* Flux-infused armor uses slightly more energy when hit.

Please report any bugs on the [issue
tracker](http://www.github.com/CoFH/Feedback).
