---
title: Resonant Ender
nav: thermal-foundation
redirect_from:
  - /thermal-expansion/fluids/resonant-ender/
  - /docs/thermal-foundation/fluids/resonant-ender/
  - /docs/thermal-foundation/fluids/molten/resonant-ender/
  - /docs/resonant-ender/
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
    - tf2-ender-pearl-from-fluid
    - tf2-dust-enderium
  transposer-fill:
    - bucket-ender
    - ender-pearl-from-fluid
    - td2-viaduct-long-range-linking
---

![Resonant ender](/assets/images/thermal-foundation/resonant-ender.gif){:style="height: 128px"}

> Wibbly-wobbly, timey-wimey... stuff.


**Resonant ender** is a fluid obtained by melting [ender
pearls](https://minecraft.gamepedia.com/Ender_Pearl) in a [magma
crucible](/docs/thermal-expansion/magma-crucible/).


Obtaining
---------

### Magma Crucible
{% include recipe-table.html type='crucible-te5' recipes=page.recipes.crucible %}

### Fluid Transposer
{% include recipe-table.html type='transposer-te5-empty' recipes=page.recipes.transposer-empty %}

### Centrifugal Separator
{% include recipe-table.html type='centrifuge-te5' recipes=page.recipes.centrifuge %}


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

{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-te5-fill' recipes=page.usage-recipes.transposer-fill %}


Trivia
------

* If [Tinkers'
  Construct](https://minecraft.curseforge.com/projects/tinkers-construct) is
  installed, resonant ender can be mixed with molten [lead](/docs/thermal-foundation/lead-ingot/)
  and molten [platinum](/docs/thermal-foundation/platinum-ingot/) in a smeltery to make molten
  [enderium](/docs/thermal-foundation/enderium-ingot/).
