---
category: Fluids
recipes:
  crucible:
  - coal
  transposer-empty:
  - bucket-coal
show-image: false
subcategory: Fossil
subjects:
- tf-1-12-coal
title: Liquifacted Coal
usage-recipes:
  refinery:
  - naphtha-from-coal
  transposer-fill:
  - bucket-coal
---

![Liquifacted coal](/assets/images/docs/1.12/thermal-foundation/liquifacted-coal.gif){:style="height: 128px"}

> Liquifaction is salvation!


**Liquifacted coal** is a fluid obtained by melting [pulverized
coal](../pulverized-coal/) in a [magma crucible](../../thermal-expansion/magma-crucible/). It
can be used as fuel in a [compression dynamo](../../thermal-expansion/compression-dynamo/), or
processed into [naphtha](../naphtha/).


Obtaining
---------

### Magma Crucible
{% include docs/recipe/table/table.html recipe-type='crucible' recipe-ids=page.recipes.crucible %}

### Fluid Transposer
{% include docs/recipe/table/table.html recipe-type='transposer-empty' recipe-ids=page.recipes.transposer-empty %}


Usage
-----

Liquifacted coal cannot be placed as a block.

### Fluid Transposer ingredient
{% include docs/recipe/table/table.html recipe-type='transposer-fill' recipe-ids=page.usage-recipes.transposer-fill %}

### Fractionating Still ingredient
{% include docs/recipe/table/table.html recipe-type='refinery' recipe-ids=page.usage-recipes.refinery %}

### Compression Dynamo fuel
When used as fuel in a [compression dynamo](../../thermal-expansion/compression-dynamo/), a bucket
of liquifacted coal yields 400,000 RF.
