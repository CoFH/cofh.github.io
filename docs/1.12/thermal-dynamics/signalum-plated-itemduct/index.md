---
title: Signalum-Plated Itemduct
image:
- alt: Signalum-plated itemduct
  file: thermal-dynamics-2/itemduct-signalum-plated.png
- alt: Signalum-plated itemduct (opaque)
  file: thermal-dynamics-2/itemduct-signalum-plated-opaque.png
redirect_from:
- /docs/signalum-plated-itemduct/
- /docs/thermal-dynamics/signalum-plated-itemduct/
- /docs/thermal-dynamics-2/signalum-plated-itemduct/
- /docs/1.12/thermal-dynamics-2/signalum-plated-itemduct/
recipes:
  crafting:
  - td-1-12-itemduct-energy-one
  - td-1-12-itemduct-energy-three
  - td-1-12-itemduct-energy-opaque-from-transparent
  - td-1-12-itemduct-energy-transparent-from-opaque
  - td-1-12-itemduct-energy-dense
  - td-1-12-itemduct-energy-vacuum
usage-recipes:
  transposer-fill:
  - td-1-12-itemduct-energy-fast
---

A **signalum-plated itemduct** is a type of [itemduct](../itemduct/) that
transfers both items and [Redstone Flux](/docs/redstone-flux/).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Item and energy transfer
A signalum-plated itemduct works the same way as a regular
[itemduct](../itemduct/). However, it also transfers [Redstone
Flux](/docs/redstone-flux/) like a [fluxduct](../fluxducts/), at up to 4,000
RF/t per connection.

### Fluid Transposer ingredient
{% include recipe-table.html type='te-1-12-transposer-fill' recipes=page.usage-recipes.transposer-fill %}
