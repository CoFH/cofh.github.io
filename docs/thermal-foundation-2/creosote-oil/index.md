---
title: Creosote Oil
nav: thermal-foundation-2
redirect_from:
- /docs/thermal-foundation/fluids/fuel/creosote-oil/
- /docs/creosote-oil/
- /docs/thermal-foundation/creosote-oil/
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
usage-recipes:
  transposer-fill:
  - bucket-creosote-oil
---

![Creosote oil](/assets/images/thermal-foundation-2/creosote-oil.gif){:style="height: 128px"}


**Creosote oil** is a fluid that is most commonly obtained as a byproduct from
[redstone furnaces](/docs/thermal-expansion-5/redstone-furnace/) with [pyrolytic
conversion](/docs/thermal-expansion-5/augment-pyrolytic-conversion/) installed. It can be used as
fuel in a [compression dynamo](/docs/thermal-expansion-5/compression-dynamo/).


Obtaining
---------

### Redstone Furnace with Pyrolytic Conversion
{% include recipe-table.html type='redstone-furnace-te5-pyrolysis' recipes=page.recipes.redstone-furnace-pyrolysis %}

### Fluid Transposer
{% include recipe-table.html type='transposer-te5-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Creosote oil cannot be placed as a block.

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-te5-fill' recipes=page.usage-recipes.transposer-fill %}

### Compression Dynamo fuel
When used as fuel in a [compression dynamo](/docs/thermal-expansion-5/compression-dynamo/), a bucket
of creosote oil yields 40,000 RF.
