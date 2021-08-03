---
category: Ducts
subcategory: Items
image:
- alt: Impulse itemduct
  file: thermal-dynamics/itemduct-impulse.png
- alt: Impulse itemduct (opaque)
  file: thermal-dynamics/itemduct-impulse-opaque.png
recipes:
  crafting-shapeless:
  - td-1-12-itemduct-fast-opaque-from-transparent
  - td-1-12-itemduct-fast-transparent-from-opaque
  - td-1-12-itemduct-fast-dense
  - td-1-12-itemduct-fast-vacuum
  transposer-fill:
  - td-1-12-itemduct-fast
subjects:
- td-1-12-itemduct-fast
title: Impulse Itemduct
usage-recipes:
  crafting-shapeless:
  - td-1-12-itemduct-energy-fast-one
  - td-1-12-itemduct-energy-fast-three
---

An **impulse itemduct** is a type of [itemduct](../itemduct/) that transfers
items at a greater speed.


Obtaining
---------

### Fluid Transposer
{% include docs/recipe/table/table.html recipe-type='transposer-fill' recipe-ids=page.recipes.transposer-fill %}

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.recipes.crafting-shapeless %}


Usage
-----

### Item transfer
An impulse itemduct works the same way as a regular [itemduct](../itemduct/).
However, items inside it move at a speed of 2 blocks per second (10 ticks per
block); four times as fast as they would in a regular itemduct.

### Crafting ingredient
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}
