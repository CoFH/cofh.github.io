---
category: Fluids
recipes:
  crucible:
  - crude-oil-from-bitumen
  - fluid-ore-processing-oil-sand
  - fluid-ore-processing-oil-shale
  transposer-empty:
  - bucket-crude-oil
show_image: false
subcategory: Fossil
subjects:
- tf-1-12-crude-oil
title: Crude Oil
usage-recipes:
  refinery:
  - naphtha-from-crude-oil
  transposer-fill:
  - bucket-crude-oil
---

![Crude oil](/images/docs/1.12/thermal-foundation/crude-oil.gif)


**Crude oil** is a fluid obtained from [oil sand](../oil-sand/) and [oil
shale](../oil-shale/). It can be used as fuel in a [compression
dynamo](../../thermal-expansion/compression-dynamo/), or processed into [naphtha](../naphtha/).


Obtaining
---------

### Magma Crucible
{{<recipe_table type="crucible" ids_param="recipes.crucible">}}

### Fluid Transposer
{{<recipe_table type="transposer-empty" ids_param="recipes.transposer-empty">}}

### Natural generation
Crude oil can rarely be found underground inside large deposits of [oil
sand](../oil-sand/) or [oil shale](../oil-shale/). It can be picked up
using a [bucket](https://minecraft.gamepedia.com/Bucket).


Usage
-----

Crude oil can be placed as a block using a
[bucket](https://minecraft.gamepedia.com/Bucket). Crude oil blocks are
flammable.

### Fluid Transposer ingredient
{{<recipe_table type="transposer-fill" ids_param="usage-recipes.transposer-fill">}}

### Fractionating Still ingredient
{{<recipe_table type="refinery" ids_param="usage-recipes.refinery">}}

### Compression Dynamo fuel
When used as fuel in a [compression dynamo](../../thermal-expansion/compression-dynamo/), a bucket
of crude oil yields 400,000 RF.
