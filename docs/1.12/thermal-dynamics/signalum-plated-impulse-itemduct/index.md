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
  - td2-itemduct-energy-fast-one
  - td2-itemduct-energy-fast-three
  - td2-itemduct-energy-fast-opaque-from-transparent
  - td2-itemduct-energy-fast-transparent-from-opaque
  - td2-itemduct-energy-fast-dense
  - td2-itemduct-energy-fast-vacuum
  transposer-fill:
  - td2-itemduct-energy-fast
---

A **signalum-plated impulse itemduct** is a type of [itemduct](/docs/1.12/thermal-dynamics/itemduct/)
that combines the functions of an [impulse itemduct](/docs/1.12/thermal-dynamics/impulse-itemduct/)
and a [signalum-plated itemduct](/docs/1.12/thermal-dynamics/signalum-plated-itemduct/).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}

### Fluid Transposer
{% include recipe-table.html type='te5-transposer-fill' recipes=page.recipes.transposer-fill %}


Usage
-----

### Item and energy transfer
A signalum-plated impulse itemduct works the same way as a regular
[itemduct](/docs/1.12/thermal-dynamics/itemduct/). However, items move through it faster like with an
[impulse itemduct](/docs/1.12/thermal-dynamics/impulse-itemduct/), and it also transfers [Redstone
Flux](/docs/redstone-flux/) like a [signalum-plated
itemduct](/docs/1.12/thermal-dynamics/signalum-plated-itemduct/).
