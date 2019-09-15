---
title: Naphtha
nav: thermal-foundation-2
redirect_from:
- /docs/thermal-foundation/fluids/fuel/naphtha/
- /docs/naphtha/
- /docs/thermal-foundation/naphtha/
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

![Naphtha](/assets/images/thermal-foundation-2/naphtha.gif){:style="height: 128px"}


**Naphtha** is a fluid obtained by processing [crude oil](/docs/thermal-foundation-2/crude-oil/) or
[liquifacted coal](/docs/thermal-foundation-2/liquifacted-coal/) in a [fractionating
still](/docs/thermal-expansion-5/fractionating-still/). It can be used as fuel in a [compression
dynamo](/docs/thermal-expansion-5/compression-dynamo/), or processed into [refined
fuel](/docs/thermal-foundation-2/refined-fuel/).


Obtaining
---------

### Fractionating Still
{% include recipe-table.html type='refinery-te5' recipes=page.recipes.refinery %}

### Fluid Transposer
{% include recipe-table.html type='transposer-te5-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Naphtha cannot be placed as a block.

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-te5-fill' recipes=page.usage-recipes.transposer-fill %}

### Fractionating Still ingredient
{% include recipe-table.html type='refinery-te5' recipes=page.usage-recipes.refinery %}

### Compression Dynamo fuel
When used as fuel in a [compression
dynamo](/docs/thermal-expansion-5/compression-dynamo/), a bucket of naphtha yields
1,000,000 RF.


Trivia
------

* Naphtha is internally registered as "refined oil".
