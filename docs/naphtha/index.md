---
title: Naphtha
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/fluids/fuel/naphtha/
recipes:
  refinery:
    - naphtha-from-crude-oil
    - naphtha-from-coal
  transposer-empty:
    - bucket-naphtha
usage-recipes:
  transposer-fill:
    - bucket-naphtha
  refinery:
    - refined-fuel
---

![Naphtha](/assets/images/thermal-foundation/naphtha.gif){:style="height: 128px"}


**Naphtha** is a fluid obtained by processing [crude oil](/docs/crude-oil/) or
[liquifacted coal](/docs/liquifacted-coal/) in a [fractionating
still](/docs/fractionating-still/). It can be used as fuel in a [compression
dynamo](/docs/compression-dynamo/), or processed into [refined
fuel](/docs/refined-fuel/).


Obtaining
---------

### Fractionating Still
{% include recipe-table.html type='refinery' recipes=page.recipes.refinery %}

### Fluid Transposer
{% include recipe-table.html type='transposer-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Naphtha cannot be placed as a block.

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Fractionating Still ingredient
{% include recipe-table.html type='refinery' recipes=page.usage-recipes.refinery %}

### Compression Dynamo fuel
When used as fuel in a [compression dynamo](/docs/compression-dynamo/), a bucket
of naphtha yields 1,250,000 RF.


Trivia
------

* Naphtha is internally registered as "refined oil".
