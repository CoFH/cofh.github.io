---
title: Resonant Ender
nav: thermal-foundation
redirect_from:
  - /thermal-expansion/fluids/resonant-ender/
  - /docs/thermal-foundation/fluids/resonant-ender/
  - /docs/thermal-foundation/fluids/molten/resonant-ender/
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
    - ender-pearl-from-fluid
    - dust-enderium
  transposer-fill:
    - bucket-ender
    - ender-pearl-from-fluid
    - end-stone
    - viaduct-long-range-linking
---

![Resonant ender](/assets/images/thermal-foundation/resonant-ender.gif){:style="height: 128px"}

> Wibbly-wobbly, timey-wimey... stuff.


**Resonant ender** is a fluid obtained by melting [ender
pearls](https://minecraft.gamepedia.com/Ender_Pearl) in a [magma
crucible](/docs/magma-crucible/).


Obtaining
---------

### Magma Crucible
{% include recipe-table.html type='crucible' recipes=page.recipes.crucible %}

### Fluid Transposer
{% include recipe-table.html type='transposer-empty' recipes=page.recipes.transposer-empty %}

### Centrifugal Separator
{% include recipe-table.html type='centrifuge' recipes=page.recipes.centrifuge %}


Usage
-----

Resonant ender can be placed as a block using a
[bucket](https://minecraft.gamepedia.com/Bucket).

### Light source
Resonant ender blocks emit a light level of 3.

### Effects
Any [entities](https://minecraft.gamepedia.com/Entity) that come into contact
with resonant ender are teleported to a random destination in a radius of 8
blocks.

### Crafting ingredient
Any item that contains at least one
[bucket](https://minecraft.gamepedia.com/Bucket) worth of resonant ender may be
used in these recipes.

{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-fill' recipes=page.usage-recipes.transposer-fill %}


Trivia
------

* If [Tinkers'
  Construct](https://minecraft.curseforge.com/projects/tinkers-construct) is
  installed, resonant ender can be mixed with molten [lead](/docs/lead-ingot/)
  and molten [platinum](/docs/platinum-ingot/) in a smeltery to make molten
  [enderium](/docs/enderium-ingot/).
