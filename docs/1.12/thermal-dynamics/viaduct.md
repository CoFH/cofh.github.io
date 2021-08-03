---
category: Ducts
image:
- alt: Viaduct
  file: thermal-dynamics/viaduct.png
recipes:
  crafting-shaped:
  - td-1-12-viaduct-frame
  transposer-fill:
  - td-1-12-viaduct
subcategory: Other
subjects:
- td-1-12-viaduct
title: Viaduct
usage-recipes:
  transposer-fill:
  - td-1-12-viaduct-long-range-linking
---

> Whoosh!


A **viaduct** is a block that transfers players between configured locations.


Obtaining
---------

A placed viaduct can be instantly picked up by dismantling it with a
[wrench](../../wrenches/). It can also be mined using a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe).

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.recipes.crafting-shaped %}

### Fluid Transposer
{% include docs/recipe/table/table.html recipe-type='transposer-fill' recipe-ids=page.recipes.transposer-fill %}


Usage
-----

### Placement
When placed, a viaduct connects to any adjacent viaducts. Any connected side of
a viaduct can be disconnected and reconnected by using a
[wrench](../../wrenches/) on it.

### Player transfer
A side of a viaduct can be opened and closed by using a
[wrench](../../wrenches/) on it. Every opened side in a network of viaducts
counts as both an entrance and a destination. Every destination can be given a
name and an item icon.

When used by a player, a viaduct entrance allows them to pick a destination on
the viaduct network. After choosing a destination, the player is transferred
there through the viaducts. While traveling, they can exit the viaducts at any
time by sneaking.

Players in a viaduct move at a speed of 10 blocks per second (2 ticks per
block). The speed may be increased by using [long range
viaducts](../long-range-viaduct/).


### Fluid Transposer ingredient
{% include docs/recipe/table/table.html recipe-type='transposer-fill' recipe-ids=page.usage-recipes.transposer-fill %}
