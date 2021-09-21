---
category: Fluids
recipes:
  redstone-furnace-pyrolysis:
  - coal-coke
  - storage-block-coal-coke
  - charcoal-from-wood-log
  - charcoal-from-hay-bale
  - charcoal-from-cactus
  - charcoal-from-sugar-canes
  - charcoal-from-sawdust
  transposer-empty:
  - bucket-creosote-oil
show_image: false
subcategory: Other
subjects:
- tf-1-12-creosote-oil
title: Creosote Oil
usage-recipes:
  transposer-fill:
  - bucket-creosote-oil
---

![Creosote oil](/images/docs/1.12/thermal-foundation/creosote-oil.gif){:style="height: 128px"}


**Creosote oil** is a fluid that is most commonly obtained as a byproduct from
[redstone furnaces](../../thermal-expansion/redstone-furnace/) with [pyrolytic
conversion](../../thermal-expansion/augment-pyrolytic-conversion/) installed. It can be used as
fuel in a [compression dynamo](../../thermal-expansion/compression-dynamo/).


Obtaining
---------

### Redstone Furnace with Pyrolytic Conversion
{{<recipe_table type="redstone-furnace-pyrolysis" ids_param="recipes.redstone-furnace-pyrolysis">}}

### Fluid Transposer
{{<recipe_table type="transposer-empty" ids_param="recipes.transposer-empty">}}


Usage
-----

Creosote oil cannot be placed as a block.

### Fluid Transposer ingredient
{{<recipe_table type="transposer-fill' recipe-ids=page.usage-recipes.transposer-fill">}}

### Compression Dynamo fuel
When used as fuel in a [compression dynamo](../../thermal-expansion/compression-dynamo/), a bucket
of creosote oil yields 40,000 RF.
