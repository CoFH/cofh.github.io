---
title: Grassoline
image:
- alt: Grassoline
  file: thermal-foundation-2/grassoline.gif
recipes:
  refinery:
  - grassoline
  transposer-empty:
  - bucket-grassoline
usage-recipes:
  transposer-fill:
  - bucket-grassoline
redirect_from:
- /docs/thermal-foundation/grassoline/
- /docs/thermal-foundation-2/grassoline/
- /docs/1.12/thermal-foundation-2/grassoline/
---

**Grassoline** is a fluid obtained by processing
[biocrude](/docs/1.12/thermal-foundation/biocrude/) in a [fractionating
still](/docs/1.12/thermal-expansion/fractionating-still/). It can be used as fuel in
a [compression dynamo](/docs/1.12/thermal-expansion/compression-dynamo/).


Obtaining
---------

### Fractionating Still
{% include recipe-table.html type='te-1-12-refinery' recipes=page.recipes.refinery %}

### Fluid Transposer
{% include recipe-table.html type='te-1-12-transposer-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Grassoline cannot be placed as a block.

### Fluid Transposer ingredient
{% include recipe-table.html type='te-1-12-transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Compression Dynamo fuel
When used as fuel in a [compression
dynamo](/docs/1.12/thermal-expansion/compression-dynamo/), a bucket of grassoline
yields 800,000 RF, or 1,000,000 RF if an [agitative
manifold](/docs/1.12/thermal-expansion/augment-agitative-manifold/) is installed.


Trivia
------

* Grassoline is internally registered as "refined biofuel".
