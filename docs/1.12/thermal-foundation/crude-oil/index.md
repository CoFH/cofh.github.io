---
title: Crude Oil
redirect_from:
- /docs/thermal-foundation/fluids/fuel/crude-oil/
- /docs/crude-oil/
- /docs/thermal-foundation/crude-oil/
- /docs/thermal-foundation-2/crude-oil/
- /docs/1.12/thermal-foundation-2/crude-oil/
recipes:
  crucible:
  - crude-oil-from-bitumen
  - fluid-ore-processing-oil-sand
  - fluid-ore-processing-oil-shale
  transposer-empty:
  - bucket-crude-oil
usage-recipes:
  transposer-fill:
  - bucket-crude-oil
  refinery:
  - naphtha-from-crude-oil
---

![Crude oil](/assets/images/thermal-foundation-2/crude-oil.gif){:style="height: 128px"}


**Crude oil** is a fluid obtained from [oil sand](../oil-sand/) and [oil
shale](../oil-shale/). It can be used as fuel in a [compression
dynamo](../../thermal-expansion/compression-dynamo/), or processed into [naphtha](../naphtha/).


Obtaining
---------

### Magma Crucible
{% include recipe-table.html type='te-1-12-crucible' recipes=page.recipes.crucible %}

### Fluid Transposer
{% include recipe-table.html type='te-1-12-transposer-empty' recipes=page.recipes.transposer-empty %}

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
{% include recipe-table.html type='te-1-12-transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Fractionating Still ingredient
{% include recipe-table.html type='te-1-12-refinery' recipes=page.usage-recipes.refinery %}

### Compression Dynamo fuel
When used as fuel in a [compression dynamo](../../thermal-expansion/compression-dynamo/), a bucket
of crude oil yields 400,000 RF.
