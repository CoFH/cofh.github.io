---
title: Refined Fuel
nav: thermal-foundation-2
redirect_from:
- /docs/thermal-foundation/fluids/fuel/refined-fuel/
- /docs/refined-fuel/
- /docs/thermal-foundation/refined-fuel/
- /docs/thermal-foundation-2/refined-fuel/
recipes:
  refinery:
  - refined-fuel
  transposer-empty:
  - bucket-refined-fuel
usage-recipes:
  transposer-fill:
  - bucket-refined-fuel
---

![Refined fuel](/assets/images/thermal-foundation-2/refined-fuel.gif){:style="height: 128px"}


**Refined fuel** is a fluid obtained by processing [naphtha](/docs/1.12/thermal-foundation-2/naphtha/) in
a [fractionating still](/docs/1.12/thermal-expansion-5/fractionating-still/). It can be used as fuel in a
[compression dynamo](/docs/1.12/thermal-expansion-5/compression-dynamo/).


Obtaining
---------

### Fractionating Still
{% include recipe-table.html type='refinery-te5' recipes=page.recipes.refinery %}

### Fluid Transposer
{% include recipe-table.html type='transposer-te5-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Refined fuel cannot be placed as a block.

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-te5-fill' recipes=page.usage-recipes.transposer-fill %}

### Compression Dynamo fuel
When used as fuel in a [compression
dynamo](/docs/1.12/thermal-expansion-5/compression-dynamo/), a bucket of refined fuel
yields 1,500,000 RF, or 2,250,000 RF if [ignition
plugs](/docs/1.12/thermal-expansion-5/augment-ignition-plugs/) are installed.
