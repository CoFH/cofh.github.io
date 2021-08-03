---
category: Fluids
recipes:
  centrifuge:
  - dust-enderium
  crucible:
  - ender
  - ender-from-clathrate
  - fluid-ore-processing-ender
  transposer-empty:
  - bucket-ender
show-image: false
subcategory: Molten
subjects:
- tf-1-12-ender
title: Resonant Ender
usage-recipes:
  crafting-shapeless:
  - tf-1-12-ender-pearl-from-fluid
  - tf-1-12-dust-enderium
  transposer-fill:
  - bucket-ender
  - ender-pearl-from-fluid
  - td-1-12-viaduct-long-range-linking
---

![Resonant ender](/assets/images/docs/1.12/thermal-foundation/resonant-ender.gif){:style="height: 128px"}

> Wibbly-wobbly, timey-wimey... stuff.


**Resonant ender** is a fluid obtained by melting [ender
pearls](https://minecraft.gamepedia.com/Ender_Pearl) in a [magma
crucible](../../thermal-expansion/magma-crucible/).


Obtaining
---------

### Magma Crucible
{% include docs/recipe/table/table.html recipe-type='crucible' recipe-ids=page.recipes.crucible %}

### Fluid Transposer
{% include docs/recipe/table/table.html recipe-type='transposer-empty' recipe-ids=page.recipes.transposer-empty %}

### Centrifugal Separator
{% include docs/recipe/table/table.html recipe-type='centrifuge' recipe-ids=page.recipes.centrifuge %}


Usage
-----

Resonant ender can be placed as a block using a
[bucket](https://minecraft.gamepedia.com/Bucket).

### Light source
Resonant ender blocks emit a light level of 3.

### Effects
[Entities](https://minecraft.gamepedia.com/Entity) that come into contact with
resonant ender are teleported to a random destination in a radius of 8 blocks.
This does not happen to [dropped
items](https://minecraft.gamepedia.com/Item_(entity)) or [experience
orbs](https://minecraft.gamepedia.com/Experience).

### Crafting ingredient
Any item that contains at least one
[bucket](https://minecraft.gamepedia.com/Bucket) worth of resonant ender may be
used in these recipes.

{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}

### Fluid Transposer ingredient
{% include docs/recipe/table/table.html recipe-type='transposer-fill' recipe-ids=page.usage-recipes.transposer-fill %}


Trivia
------

* If [Tinkers'
  Construct](https://minecraft.curseforge.com/projects/tinkers-construct) is
  installed, resonant ender can be mixed with molten [lead](../lead-ingot/)
  and molten [platinum](../platinum-ingot/) in a smeltery to make molten
  [enderium](../enderium-ingot/).
