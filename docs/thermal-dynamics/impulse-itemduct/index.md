---
title: Impulse Itemduct
nav: thermal-dynamics
image:
  - alt: Impulse itemduct
    file: thermal-dynamics/itemduct-impulse.png
  - alt: Impulse itemduct (opaque)
    file: thermal-dynamics/itemduct-impulse-opaque.png
redirect_from:
  - /docs/impulse-itemduct/
recipes:
  transposer-fill:
    - itemduct-fast
  crafting:
    - itemduct-fast-opaque-from-transparent
    - itemduct-fast-transparent-from-opaque
    - itemduct-fast-dense
    - itemduct-fast-vacuum
usage-recipes:
  crafting:
    - itemduct-energy-fast-one
    - itemduct-energy-fast-three
---

An **impulse itemduct** is a type of [itemduct](/docs/itemduct/) that transfers
items at a greater speed.


Obtaining
---------

### Fluid Transposer
{% include recipe-table.html type='transposer-fill' recipes=page.recipes.transposer-fill %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Item transfer
An impulse itemduct works the same way as a regular [itemduct](/docs/itemduct/).
However, items inside it move at a speed of 2 blocks per second (10 ticks per
block); four times as fast as they would in a regular itemduct.

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}
