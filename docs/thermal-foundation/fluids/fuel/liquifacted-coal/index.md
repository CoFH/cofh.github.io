---
title: Liquifacted Coal
redirect_from:
  - /docs/thermal-foundation/fluids/liquifacted-coal/
recipes:
  crucible:
    - coal
  transposer-empty:
    - bucket-coal
usage-recipes:
  transposer-fill:
    - bucket-coal
  refinery:
    - naphtha-from-coal
---

![Liquifacted coal](/assets/images/thermal-foundation/liquifacted-coal.gif){:style="height: 128px"}

> Liquifaction is salvation!


**Liquifacted coal** is a fluid obtained by melting [pulverized
coal](/docs/thermal-foundation/items/materials/dusts/pulverized-coal/) in a
[magma crucible](/docs/thermal-expansion/machines/magma-crucible/). It can be
used as fuel in a [compression
dynamo](/docs/thermal-expansion/dynamos/compression-dynamo/).


Obtaining
---------

### Magma Crucible
{% include recipe-table.html type='crucible' recipes=page.recipes.crucible %}

### Fluid Transposer
{% include recipe-table.html type='transposer-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Liquifacted coal cannot be placed as a block.

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Fractionating Still ingredient
{% include recipe-table.html type='refinery' recipes=page.usage-recipes.refinery %}

### Compression Dynamo fuel
When used as fuel in a [compression
dynamo](/docs/thermal-expansion/dynamos/compression-dynamo/), liquifacted coal
yields 400,000 RF per bucket.
