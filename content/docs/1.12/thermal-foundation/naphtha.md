---
category: Fluids
recipes:
  refinery:
  - naphtha-from-crude-oil
  - naphtha-from-coal
  transposer-empty:
  - bucket-naphtha
show_image: false
subcategory: Fossil
subjects:
- tf-1-12-naphtha
title: Naphtha
usage-recipes:
  refinery:
  - refined-fuel
  transposer-fill:
  - bucket-naphtha
---

![Naphtha](/images/docs/1.12/thermal-foundation/naphtha.gif)


**Naphtha** is a fluid obtained by processing [crude oil](../crude-oil/) or
[liquifacted coal](../liquifacted-coal/) in a [fractionating
still](../../thermal-expansion/fractionating-still/). It can be used as fuel in a [compression
dynamo](../../thermal-expansion/compression-dynamo/), or processed into [refined
fuel](../refined-fuel/).


Obtaining
---------

### Fractionating Still
{{<recipe_table type="refinery" ids_param="recipes.refinery">}}

### Fluid Transposer
{{<recipe_table type="transposer-empty" ids_param="recipes.transposer-empty">}}


Usage
-----

Naphtha cannot be placed as a block.

### Fluid Transposer ingredient
{{<recipe_table type="transposer-fill" ids_param="usage-recipes.transposer-fill">}}

### Fractionating Still ingredient
{{<recipe_table type="refinery" ids_param="usage-recipes.refinery">}}

### Compression Dynamo fuel
When used as fuel in a [compression
dynamo](../../thermal-expansion/compression-dynamo/), a bucket of naphtha yields
1,000,000 RF.


Trivia
------

* Naphtha is internally registered as "refined oil".
