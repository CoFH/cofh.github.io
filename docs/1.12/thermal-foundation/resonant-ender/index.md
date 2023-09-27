---
title: Resonant Ender
redirect_from:
- /thermal-expansion/fluids/resonant-ender/
- /docs/thermal-foundation/fluids/resonant-ender/
- /docs/thermal-foundation/fluids/molten/resonant-ender/
- /docs/resonant-ender/
- /docs/thermal-foundation/resonant-ender/
- /docs/thermal-foundation-2/resonant-ender/
- /docs/1.12/thermal-foundation-2/resonant-ender/
recipes:
  crucible:
  - ender
  - ender-from-clathrate
  - fluid-ore-processing-ender
  transposer-empty:
  - bucket-ender
  centrifuge:
  - dust-enderium
usage-recipes:
  crafting:
  - tf-1-12-ender-pearl-from-fluid
  - tf-1-12-dust-enderium
  transposer-fill:
  - bucket-ender
  - ender-pearl-from-fluid
  - td-1-12-viaduct-long-range-linking
---

![Resonant ender](/assets/images/thermal-foundation-2/resonant-ender.gif){:style="height: 128px"}

> Wibbly-wobbly, timey-wimey... stuff.


**Resonant ender** is a fluid obtained by melting [ender
pearls](https://minecraft.wiki/w/Ender_Pearl) in a [magma
crucible](../../thermal-expansion/magma-crucible/).


Obtaining
---------

### Magma Crucible
{% include recipe-table.html type='te-1-12-crucible' recipes=page.recipes.crucible %}

### Fluid Transposer
{% include recipe-table.html type='te-1-12-transposer-empty' recipes=page.recipes.transposer-empty %}

### Centrifugal Separator
{% include recipe-table.html type='te-1-12-centrifuge' recipes=page.recipes.centrifuge %}


Usage
-----

Resonant ender can be placed as a block using a
[bucket](https://minecraft.wiki/w/Bucket).

### Light source
Resonant ender blocks emit a light level of 3.

### Effects
[Entities](https://minecraft.wiki/w/Entity) that come into contact with
resonant ender are teleported to a random destination in a radius of 8 blocks.
This does not happen to [dropped
items](https://minecraft.wiki/w/Item_(entity)) or [experience
orbs](https://minecraft.wiki/w/Experience).

### Crafting ingredient
Any item that contains at least one
[bucket](https://minecraft.wiki/w/Bucket) worth of resonant ender may be
used in these recipes.

{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Fluid Transposer ingredient
{% include recipe-table.html type='te-1-12-transposer-fill' recipes=page.usage-recipes.transposer-fill %}


Trivia
------

* If [Tinkers'
  Construct](https://minecraft.curseforge.com/projects/tinkers-construct) is
  installed, resonant ender can be mixed with molten [lead](../lead-ingot/)
  and molten [platinum](../platinum-ingot/) in a smeltery to make molten
  [enderium](../enderium-ingot/).
