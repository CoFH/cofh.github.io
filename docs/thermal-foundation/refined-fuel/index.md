---
title: Refined Fuel
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/fluids/fuel/refined-fuel/
  - /docs/refined-fuel/
recipes:
  refinery:
    - refined-fuel
  transposer-empty:
    - bucket-refined-fuel
usage-recipes:
  transposer-fill:
    - bucket-refined-fuel
---

![Refined fuel](/assets/images/thermal-foundation/refined-fuel.gif){:style="height: 128px"}


**Refined fuel** is a fluid obtained by processing [naphtha](/docs/thermal-foundation/naphtha/) in
a [fractionating still](/docs/thermal-expansion/fractionating-still/). It can be used as fuel in a
[compression dynamo](/docs/thermal-expansion/compression-dynamo/).


Obtaining
---------

### Fractionating Still
{% include recipe-table.html type='refinery' recipes=page.recipes.refinery %}

### Fluid Transposer
{% include recipe-table.html type='transposer-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Refined fuel cannot be placed as a block.

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Compression Dynamo fuel
When used as fuel in a [compression dynamo](/docs/thermal-expansion/compression-dynamo/), a bucket
of refined fuel yields 2,000,000 RF, or 3,000,000 RF if [ignition
plugs](/docs/thermal-expansion/augment-ignition-plugs/) are installed.
