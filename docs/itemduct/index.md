---
title: Itemduct
nav: thermal-dynamics
image:
  - alt: Itemduct
    file: thermal-dynamics/itemduct.png
  - alt: Itemduct (opaque)
    file: thermal-dynamics/itemduct-opaque.png
redirect_from:
  - /thermal-expansion/items/itemducts/
  - /thermal-expansion/transportation/itemducts/
  - /docs/thermal-dynamics/ducts/itemducts/
  - /docs/itemducts/
recipes:
  crafting:
    - itemduct
    - itemduct-opaque
    - itemduct-opaque-from-transparent
    - itemduct-transparent-from-opaque
usage-recipes:
  transposer-fill:
    - itemduct-fast
    - itemduct-fast-opaque
  crafting:
    - itemduct-energy-one
    - itemduct-energy-three
    - itemduct-energy-opaque-one
    - itemduct-energy-opaque-three
---

An **itemduct** is a block that transfers items between blocks.


Obtaining
---------

A placed itemduct can be instantly picked up by dismantling it with a
[wrench](/docs/wrenches/). It can also be mined using a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe).

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Placement
When placed, an itemduct connects to any adjacent itemducts and blocks that can
output or receive items. Any connected side of an itemduct can be disconnected
and reconnected by using a [wrench](/docs/wrenches/) on it.

### Item transfer
When a block inserts items into an itemduct, the items are transported to the
nearest connected block that can receive them. An itemduct will not accept items
if they have nowhere to go.

Items in an itemduct gradually move towards their destination, at a speed of
half a block per second (40 ticks per block). The speed may be increased by
using [impulse itemducts](/docs/impulse-itemduct/) and/or advanced
[servos](/docs/servos/) and [retrievers](/docs/retrievers/).

### Attachments
Certain items can be attached to itemduct connections to change how itemducts
work. [Servos](/docs/servos/) allow itemduct connections to pull items out of
blocks, [filters](/docs/filters/) allow them to restrict which items may pass
through, and [retrievers](/docs/retrievers/) allow them to pull items towards
themselves from other blocks connected to the network.

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}
