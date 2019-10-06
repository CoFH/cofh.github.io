---
title: Impulse Itemduct
image:
- alt: Impulse itemduct
  file: thermal-dynamics-2/itemduct-impulse.png
- alt: Impulse itemduct (opaque)
  file: thermal-dynamics-2/itemduct-impulse-opaque.png
redirect_from:
- /docs/impulse-itemduct/
- /docs/thermal-dynamics/impulse-itemduct/
- /docs/thermal-dynamics-2/impulse-itemduct/
- /docs/1.12/thermal-dynamics-2/impulse-itemduct/
recipes:
  transposer-fill:
  - td2-itemduct-fast
  crafting:
  - td2-itemduct-fast-opaque-from-transparent
  - td2-itemduct-fast-transparent-from-opaque
  - td2-itemduct-fast-dense
  - td2-itemduct-fast-vacuum
usage-recipes:
  crafting:
  - td2-itemduct-energy-fast-one
  - td2-itemduct-energy-fast-three
---

An **impulse itemduct** is a type of [itemduct](/docs/1.12/thermal-dynamics/itemduct/) that transfers
items at a greater speed.


Obtaining
---------

### Fluid Transposer
{% include recipe-table.html type='te5-transposer-fill' recipes=page.recipes.transposer-fill %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Item transfer
An impulse itemduct works the same way as a regular [itemduct](/docs/1.12/thermal-dynamics/itemduct/).
However, items inside it move at a speed of 2 blocks per second (10 ticks per
block); four times as fast as they would in a regular itemduct.

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}
