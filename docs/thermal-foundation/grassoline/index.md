---
title: Grassoline
nav: thermal-foundation
image:
  - alt: Grassoline
    file: thermal-foundation/grassoline.gif
recipes:
  refinery:
    - grassoline
  transposer-empty:
    - bucket-grassoline
usage-recipes:
  transposer-fill:
    - bucket-grassoline
---

**Grassoline** is a fluid obtained by processing
[biocrude](/docs/thermal-foundation/biocrude/) in a [fractionating
still](/docs/thermal-expansion/fractionating-still/). It can be used as fuel in
a [compression dynamo](/docs/thermal-expansion/compression-dynamo/).


Obtaining
---------

### Fractionating Still
{% include recipe-table.html type='refinery-te5' recipes=page.recipes.refinery %}

### Fluid Transposer
{% include recipe-table.html type='transposer-te5-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Grassoline cannot be placed as a block.

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-te5-fill' recipes=page.usage-recipes.transposer-fill %}

### Compression Dynamo fuel
When used as fuel in a [compression
dynamo](/docs/thermal-expansion/compression-dynamo/), a bucket of grassoline
yields 800,000 RF, or 1,000,000 RF if an [agitative
manifold](/docs/thermal-expansion/augment-agitative-manifold/) is installed.


Trivia
------

* Grassoline is internally registered as "refined biofuel".
