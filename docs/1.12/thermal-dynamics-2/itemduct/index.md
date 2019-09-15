---
title: Itemduct
image:
- alt: Itemduct
  file: thermal-dynamics-2/itemduct.png
- alt: Itemduct (opaque)
  file: thermal-dynamics-2/itemduct-opaque.png
redirect_from:
- /thermal-expansion/items/itemducts/
- /thermal-expansion/transportation/itemducts/
- /docs/thermal-dynamics/ducts/itemducts/
- /docs/itemducts/
- /docs/itemduct/
- /docs/thermal-dynamics/itemduct/
- /docs/thermal-dynamics-2/itemduct/
recipes:
  crafting:
  - td2-itemduct
  - td2-itemduct-opaque
  - td2-itemduct-opaque-from-transparent
  - td2-itemduct-transparent-from-opaque
  - td2-itemduct-dense
  - td2-itemduct-vacuum
usage-recipes:
  transposer-fill:
  - td2-itemduct-fast
  crafting:
  - td2-itemduct-energy-one
  - td2-itemduct-energy-three
---

An **itemduct** is a block that transfers items between blocks.


Obtaining
---------

A placed itemduct can be instantly picked up by dismantling it with a
[wrench](/docs/1.12/wrenches/). It can also be mined using a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe).

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Placement
When placed, an itemduct connects to any adjacent itemducts and blocks that can
output or receive items. Any connected side of an itemduct can be disconnected
and reconnected by using a [wrench](/docs/1.12/wrenches/) on it.

### Item transfer
When a block inserts items into an itemduct, the items are transported to the
nearest connected block that can receive them. An itemduct will not accept items
if they have nowhere to go.

Items in an itemduct gradually move towards their destination, at a speed of
half a block per second (40 ticks per block). The speed may be increased by
using [impulse itemducts](/docs/1.12/thermal-dynamics-2/impulse-itemduct/) and/or advanced
[servos](/docs/1.12/thermal-dynamics-2/servos/) and [retrievers](/docs/1.12/thermal-dynamics-2/retrievers/).

Dense and vacuum itemducts change the length of the path they are placed in,
which may affect item routing. A dense itemduct dramatically increases path
length, which decreases the priority of destinations behind it by default. A
vacuum itemduct dramatically decreases path length, which increases the priority
of destinations behind it by default. Note that the way items are routed may be
changed by [servos](/docs/1.12/thermal-dynamics-2/servos/) and [retrievers](/docs/1.12/thermal-dynamics-2/retrievers/).

### Attachments
Certain items can be attached to itemduct connections to change how itemducts
work. [Servos](/docs/1.12/thermal-dynamics-2/servos/) allow itemduct connections to pull items out of
blocks, [filters](/docs/1.12/thermal-dynamics-2/filters/) allow them to restrict which items may pass
through, and [retrievers](/docs/1.12/thermal-dynamics-2/retrievers/) allow them to pull items towards
themselves from other blocks connected to the network.

### Fluid Transposer ingredient
{% include recipe-table.html type='te5-transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}
