---
title: Signalum-Plated Itemduct
nav: thermal-dynamics-2
image:
- alt: Signalum-plated itemduct
  file: thermal-dynamics-2/itemduct-signalum-plated.png
- alt: Signalum-plated itemduct (opaque)
  file: thermal-dynamics-2/itemduct-signalum-plated-opaque.png
redirect_from:
- /docs/signalum-plated-itemduct/
- /docs/thermal-dynamics/signalum-plated-itemduct/
recipes:
  crafting:
  - td2-itemduct-energy-one
  - td2-itemduct-energy-three
  - td2-itemduct-energy-opaque-from-transparent
  - td2-itemduct-energy-transparent-from-opaque
  - td2-itemduct-energy-dense
  - td2-itemduct-energy-vacuum
usage-recipes:
  transposer-fill:
  - td2-itemduct-energy-fast
---

A **signalum-plated itemduct** is a type of [itemduct](/docs/thermal-dynamics-2/itemduct/) that
transfers both items and [Redstone Flux](/docs/redstone-flux/).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Item and energy transfer
A signalum-plated itemduct works the same way as a regular
[itemduct](/docs/thermal-dynamics-2/itemduct/). However, it also transfers [Redstone
Flux](/docs/redstone-flux/) like a [fluxduct](/docs/thermal-dynamics-2/fluxducts/), at up to 4,000
RF/t per connection.

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-te5-fill' recipes=page.usage-recipes.transposer-fill %}
