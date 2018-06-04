---
title: Seed Oil
nav: thermal-foundation
image:
  - alt: Seed oil
    file: thermal-foundation/seed-oil.gif
recipes:
  transposer-empty:
    - seed-oil-from-seeds
    - seed-oil-from-beetroot-seeds
    - seed-oil-from-pumpkin-seeds
    - seed-oil-from-melon-seeds
    - bucket-seed-oil
usage-recipes:
  transposer-fill:
    - bucket-seed-oil
    - biomass-rich
    - bioblend-rich
---

**Seed oil** is a fluid obtained from various kinds of seeds. It can be used to
turn [pulped biomass](/docs/thermal-foundation/pulped-biomass/) into [rich
biomass](/docs/thermal-foundation/rich-biomass/) and [pulped
bioblend](/docs/thermal-foundation/pulped-bioblend/) into [rich
bioblend](/docs/thermal-foundation/rich-bioblend/). It can also be used as fuel
in a [compression dynamo](/docs/thermal-expansion/compression-dynamo/).


Obtaining
---------

### Fluid Transposer
{% include recipe-table.html type='transposer-te5-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Seed oil cannot be placed as a block.

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-te5-fill' recipes=page.usage-recipes.transposer-fill %}

### Compression Dynamo fuel
When used as fuel in a [compression
dynamo](/docs/thermal-expansion/compression-dynamo/), a bucket of seed oil
yields 80,000 RF.
