---
category: Fluids
recipes:
  centrifuge:
  - dust-lumium
  crucible:
  - glowstone
  - glowstone-from-block
  - glowstone-from-clathrate
  - fluid-ore-processing-glowstone
  transposer-empty:
  - bucket-glowstone
show_image: false
subcategory: Molten
subjects:
- tf-1-12-glowstone
title: Energized Glowstone
usage-recipes:
  crafting-shapeless:
  - tf-1-12-glowstone-dust-from-fluid
  - tf-1-12-dust-lumium
  transposer-fill:
  - bucket-glowstone
  - glowstone-dust-from-fluid
  - td-1-12-itemduct-fast
  - td-1-12-itemduct-energy-fast
---

![Energized glowstone](/images/docs/1.12/thermal-foundation/energized-glowstone.gif)

> So that's how those formations occur! It all makes nonsense now!


**Energized glowstone** is a fluid obtained by melting
[glowstone](https://minecraft.gamepedia.com/Glowstone) in a [magma
crucible](../../thermal-expansion/magma-crucible/). It is lighter than air and vertically flows up
instead of down.


Obtaining
---------

### Magma Crucible
{{<recipe_table type="crucible" ids_param="recipes.crucible">}}

### Fluid Transposer
{{<recipe_table type="transposer-empty" ids_param="recipes.transposer-empty">}}

### Centrifugal Separator
{{<recipe_table type="centrifuge" ids_param="recipes.centrifuge">}}

### Natural generation
Deposits of [energized netherrack](../energized-netherrack/) may contain some
energized glowstone, which can be picked up using a
[bucket](https://minecraft.gamepedia.com/Bucket).


Usage
-----

Energized glowstone can be placed as a block using a
[bucket](https://minecraft.gamepedia.com/Bucket).

### Light source
Energized glowstone blocks emit a light level of 15.

### Flow
Energized glowstone flows like other fluids, except it vertically flows up
instead of down.

Energized glowstone source blocks will gradually float upwards if there are no
blocks above them. If they float at high levels (layers 120 and above by
default) they will condense back into solid
[glowstone](https://minecraft.gamepedia.com/Glowstone). They will also condense
at 80% of this height if the fluid has no space to flow.

### Effects
When touched by players and mobs, energized glowstone applies the effects [Speed
I](https://minecraft.gamepedia.com/Status_effect#Speed) and [Jump Boost
I](https://minecraft.gamepedia.com/Status_effect#Jump_Boost) to them for 6
seconds, as well as
[Glowing](https://minecraft.gamepedia.com/Status_effect#Glowing) for 30 seconds.

When an energized glowstone source block comes into contact with [gelid
cryotheum](../gelid-cryotheum/), the source block instantly condenses back
into solid [glowstone](https://minecraft.gamepedia.com/Glowstone).

### Crafting ingredient
Any item that contains at least one
[bucket](https://minecraft.gamepedia.com/Bucket) worth of energized glowstone
may be used in these recipes.

{{<recipe_table type="crafting-shapeless" ids_param="usage-recipes.crafting-shapeless">}}

### Fluid Transposer ingredient
{{<recipe_table type="transposer-fill" ids_param="usage-recipes.transposer-fill">}}

### Reactant Dynamo fuel
Energized glowstone can be used with
[sugar](https://minecraft.gamepedia.com/Sugar), [nether
wart](https://minecraft.gamepedia.com/Nether_Wart),
[gunpowder](https://minecraft.gamepedia.com/Gunpowder), [blaze
powder](https://minecraft.gamepedia.com/Blaze_Powder) or [ghast
tears](https://minecraft.gamepedia.com/Ghast_Tear) in a [reactant
dynamo](../../thermal-expansion/reactant-dynamo/) to generate varying amounts of energy.


Trivia
------

* Like other fluids, energized glowstone produces dripping particles. However,
  these particles form on top of blocks above the fluid, and 'fall' upwards.
* If [Tinkers'
  Construct](https://minecraft.curseforge.com/projects/tinkers-construct) is
  installed, energized glowstone can be mixed with molten
  [tin](../tin-ingot/) and molten [silver](../silver-ingot/) in a smeltery
  to make molten [lumium](../lumium-ingot/).
