---
category: Fluids
image:
- alt: Biocrude
  file: thermal-foundation/biocrude.gif
recipes:
  crucible:
  - biocrude-from-biomass
  - biocrude-from-biomass-rich
  - biocrude-from-bioblend
  - biocrude-from-bioblend-rich
  transposer-empty:
  - bucket-biocrude
subcategory: Bio
subjects:
- tf-1-12-biocrude
title: Biocrude
usage-recipes:
  refinery:
  - grassoline
  transposer-fill:
  - bucket-biocrude
---

**Biocrude** is a fluid obtained by melting down
[biomass](../pulped-biomass/) or
[bioblend](../pulped-bioblend/). It can be processed into
[grassoline](../grassoline/).


Obtaining
---------

### Magma Crucible
{{<recipe_table type="crucible" ids_param="recipes.crucible">}}

### Fluid Transposer
{{<recipe_table type="transposer-empty" ids_param="recipes.transposer-empty">}}


Usage
-----

Biocrude cannot be placed as a block.

### Fluid Transposer ingredient
{{<recipe_table type="transposer-fill" ids_param="usage-recipes.transposer-fill">}}

### Fractionating Still ingredient
{{<recipe_table type="refinery" ids_param="usage-recipes.refinery">}}
