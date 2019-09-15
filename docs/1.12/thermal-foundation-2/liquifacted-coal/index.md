---
title: Liquifacted Coal
redirect_from:
- /thermal-expansion/fluids/liquifacted-coal/
- /docs/thermal-foundation/fluids/liquifacted-coal/
- /docs/thermal-foundation/fluids/fuel/liquifacted-coal/
- /docs/liquifacted-coal/
- /docs/thermal-foundation/liquifacted-coal/
- /docs/thermal-foundation-2/liquifacted-coal/
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

![Liquifacted coal](/assets/images/thermal-foundation-2/liquifacted-coal.gif){:style="height: 128px"}

> Liquifaction is salvation!


**Liquifacted coal** is a fluid obtained by melting [pulverized
coal](/docs/1.12/thermal-foundation-2/pulverized-coal/) in a [magma crucible](/docs/1.12/thermal-expansion-5/magma-crucible/). It
can be used as fuel in a [compression dynamo](/docs/1.12/thermal-expansion-5/compression-dynamo/), or
processed into [naphtha](/docs/1.12/thermal-foundation-2/naphtha/).


Obtaining
---------

### Magma Crucible
{% include recipe-table.html type='te5-crucible' recipes=page.recipes.crucible %}

### Fluid Transposer
{% include recipe-table.html type='te5-transposer-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Liquifacted coal cannot be placed as a block.

### Fluid Transposer ingredient
{% include recipe-table.html type='te5-transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Fractionating Still ingredient
{% include recipe-table.html type='te5-refinery' recipes=page.usage-recipes.refinery %}

### Compression Dynamo fuel
When used as fuel in a [compression dynamo](/docs/1.12/thermal-expansion-5/compression-dynamo/), a bucket
of liquifacted coal yields 400,000 RF.
