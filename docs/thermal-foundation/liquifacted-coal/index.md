---
title: Liquifacted Coal
nav: thermal-foundation
redirect_from:
  - /thermal-expansion/fluids/liquifacted-coal/
  - /docs/thermal-foundation/fluids/liquifacted-coal/
  - /docs/thermal-foundation/fluids/fuel/liquifacted-coal/
  - /docs/liquifacted-coal/
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
coal](/docs/thermal-foundation/pulverized-coal/) in a [magma crucible](/docs/thermal-expansion/magma-crucible/). It
can be used as fuel in a [compression dynamo](/docs/thermal-expansion/compression-dynamo/), or
processed into [naphtha](/docs/thermal-foundation/naphtha/).


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
When used as fuel in a [compression dynamo](/docs/thermal-expansion/compression-dynamo/), a bucket
of liquifacted coal yields 400,000 RF.
