---
category: Materials
image:
- alt: Pulped biomass
  file: thermal-foundation/biomass.png
recipes:
  sawmill:
  - biomass-from-sapling
  - biomass-from-wheat
  - biomass-from-potato
  - biomass-from-carrot
  - biomass-from-beetroot
  - biomass-from-cactus
  - biomass-from-sugar-canes
  - biomass-from-pumpkin
  - biomass-from-melon
  - biomass-from-lily-pad
  - biomass-from-vines
subcategory: Other
subjects:
- tf-1-12-biomass
title: Pulped Biomass
usage-recipes:
  crafting-shapeless:
  - tf-1-12-dirt-using-biomass-and-slag
  - tf-1-12-bioblend
  crucible:
  - biocrude-from-biomass
  transposer-fill:
  - biomass-rich
---

**Pulped biomass** is a material obtained by processing various plants in
[sawmills](../../thermal-expansion/sawmill/). It can be processed into
[biocrude](../biocrude/), which can then be processed into
[grassoline](../grassoline/).


Obtaining
---------

### Sawmill
{% include docs/recipe/table/table.html recipe-type='sawmill' recipe-ids=page.recipes.sawmill no-result=true %}


Usage
-----

### Crafting ingredient
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}

### Magma Crucible ingredient
{% include docs/recipe/table/table.html recipe-type='crucible' recipe-ids=page.usage-recipes.crucible %}

### Fluid Transposer ingredient
{% include docs/recipe/table/table.html recipe-type='transposer-fill' recipe-ids=page.usage-recipes.transposer-fill %}
