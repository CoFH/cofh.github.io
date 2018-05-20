---
title: Creosote Oil
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/fluids/fuel/creosote-oil/
  - /docs/creosote-oil/
recipes:
  redstone-furnace-pyrolysis:
    - coal-coke
    - storage-block-coal-coke
    - charcoal-from-wood-log
    - charcoal-from-hay-bale
    - charcoal-from-cactus
    - charcoal-from-sugar-canes
    - charcoal-from-sawdust
  crucible:
    - creosote-oil-from-tar
  transposer-empty:
    - bucket-creosote-oil
usage-recipes:
  transposer-fill:
    - bucket-creosote-oil
---

![Creosote oil](/assets/images/thermal-foundation/creosote-oil.gif){:style="height: 128px"}


**Creosote oil** is a fluid that is most commonly obtained as a byproduct from
[redstone furnaces](/docs/thermal-expansion/redstone-furnace/) with [pyrolytic
conversion](/docs/thermal-expansion/augment-pyrolytic-conversion/) installed. It can be used as
fuel in a [compression dynamo](/docs/thermal-expansion/compression-dynamo/).


Obtaining
---------

### Redstone Furnace with Pyrolytic Conversion
{% include recipe-table.html type='redstone-furnace-pyrolysis' recipes=page.recipes.redstone-furnace-pyrolysis %}

### Magma Crucible
{% include recipe-table.html type='crucible' recipes=page.recipes.crucible %}

### Fluid Transposer
{% include recipe-table.html type='transposer-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Creosote oil cannot be placed as a block.

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Compression Dynamo fuel
When used as fuel in a [compression dynamo](/docs/thermal-expansion/compression-dynamo/), a bucket
of creosote oil yields 40,000 RF.
