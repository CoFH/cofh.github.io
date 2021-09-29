---
category: Ducts
subcategory: Items
image:
- alt: Signalum-plated itemduct
  file: thermal-dynamics/itemduct-signalum-plated.png
- alt: Signalum-plated itemduct (opaque)
  file: thermal-dynamics/itemduct-signalum-plated-opaque.png
recipes:
  crafting-shapeless:
  - td-1-12-itemduct-energy-one
  - td-1-12-itemduct-energy-three
  - td-1-12-itemduct-energy-opaque-from-transparent
  - td-1-12-itemduct-energy-transparent-from-opaque
  - td-1-12-itemduct-energy-dense
  - td-1-12-itemduct-energy-vacuum
subjects:
- td-1-12-itemduct-energy
title: Signalum-Plated Itemduct
usage-recipes:
  transposer-fill:
  - td-1-12-itemduct-energy-fast
---

A **signalum-plated itemduct** is a type of [itemduct](../itemduct/) that
transfers both items and [Redstone Flux](/docs/redstone-flux/).


Obtaining
---------

### Crafting
{{<recipe_table type="crafting-shapeless" ids_param="recipes.crafting-shapeless">}}


Usage
-----

### Item and energy transfer
A signalum-plated itemduct works the same way as a regular
[itemduct](../itemduct/). However, it also transfers [Redstone
Flux](/docs/redstone-flux/) like a [fluxduct](../fluxducts/), at up to 4,000
RF/t per connection.

### Fluid Transposer ingredient
{{<recipe_table type="transposer-fill" ids_param="usage-recipes.transposer-fill">}}
