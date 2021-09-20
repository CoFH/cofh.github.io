---
category: Fluids
recipes:
  refinery:
  - refined-fuel
  transposer-empty:
  - bucket-refined-fuel
show_image: false
subcategory: Fossil
subjects:
- tf-1-12-refined-fuel
title: Refined Fuel
usage-recipes:
  transposer-fill:
  - bucket-refined-fuel
---

![Refined fuel](/assets/images/docs/1.12/thermal-foundation/refined-fuel.gif){:style="height: 128px"}


**Refined fuel** is a fluid obtained by processing [naphtha](../naphtha/) in
a [fractionating still](../../thermal-expansion/fractionating-still/). It can be used as fuel in a
[compression dynamo](../../thermal-expansion/compression-dynamo/).


Obtaining
---------

### Fractionating Still
{{<recipe_table type="refinery" ids_param="recipes.refinery">}}

### Fluid Transposer
{{<recipe_table type="transposer-empty" ids_param="recipes.transposer-empty">}}


Usage
-----

Refined fuel cannot be placed as a block.

### Fluid Transposer ingredient
{{<recipe_table type="transposer-fill' recipe-ids=page.usage-recipes.transposer-fill">}}

### Compression Dynamo fuel
When used as fuel in a [compression
dynamo](../../thermal-expansion/compression-dynamo/), a bucket of refined fuel
yields 1,500,000 RF, or 2,250,000 RF if [ignition
plugs](../../thermal-expansion/augment-ignition-plugs/) are installed.
