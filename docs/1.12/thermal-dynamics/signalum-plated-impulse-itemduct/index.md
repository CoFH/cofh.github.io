---
title: Signalum-Plated Impulse Itemduct
image:
- alt: Signalum-plated impulse itemduct
  file: thermal-dynamics-2/itemduct-signalum-plated-impulse.png
- alt: Signalum-plated impulse itemduct (opaque)
  file: thermal-dynamics-2/itemduct-signalum-plated-impulse-opaque.png
redirect_from:
- /docs/signalum-plated-impulse-itemduct/
- /docs/thermal-dynamics/signalum-plated-impulse-itemduct/
- /docs/thermal-dynamics-2/signalum-plated-impulse-itemduct/
- /docs/1.12/thermal-dynamics-2/signalum-plated-impulse-itemduct/
recipes:
  crafting:
  - td-1-12-itemduct-energy-fast-one
  - td-1-12-itemduct-energy-fast-three
  - td-1-12-itemduct-energy-fast-opaque-from-transparent
  - td-1-12-itemduct-energy-fast-transparent-from-opaque
  - td-1-12-itemduct-energy-fast-dense
  - td-1-12-itemduct-energy-fast-vacuum
  transposer-fill:
  - td-1-12-itemduct-energy-fast
---

A **signalum-plated impulse itemduct** is a type of [itemduct](../itemduct/)
that combines the functions of an [impulse itemduct](../impulse-itemduct/)
and a [signalum-plated itemduct](../signalum-plated-itemduct/).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}

### Fluid Transposer
{% include recipe-table.html type='te-1-12-transposer-fill' recipes=page.recipes.transposer-fill %}


Usage
-----

### Item and energy transfer
A signalum-plated impulse itemduct works the same way as a regular
[itemduct](../itemduct/). However, items move through it faster like with an
[impulse itemduct](../impulse-itemduct/), and it also transfers [Redstone
Flux](../../../redstone-flux/) like a [signalum-plated
itemduct](../signalum-plated-itemduct/).
