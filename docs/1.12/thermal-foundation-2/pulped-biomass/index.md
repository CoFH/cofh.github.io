---
title: Pulped Biomass
nav: thermal-foundation-2
image:
- alt: Pulped biomass
  file: thermal-foundation-2/biomass.png
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
usage-recipes:
  crafting:
  - tf2-dirt-using-biomass-and-slag
  - tf2-bioblend
  crucible:
  - biocrude-from-biomass
  transposer-fill:
  - biomass-rich
redirect_from:
- /docs/thermal-foundation/pulped-biomass/
- /docs/thermal-foundation-2/pulped-biomass/
---

**Pulped biomass** is a material obtained by processing various plants in
[sawmills](/docs/1.12/thermal-expansion-5/sawmill/). It can be processed into
[biocrude](/docs/1.12/thermal-foundation-2/biocrude/), which can then be processed into
[grassoline](/docs/1.12/thermal-foundation-2/grassoline/).


Obtaining
---------

### Sawmill
{% include recipe-table.html type='te5-sawmill' recipes=page.recipes.sawmill no-result=true %}


Usage
-----

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Magma Crucible ingredient
{% include recipe-table.html type='te5-crucible' recipes=page.usage-recipes.crucible %}

### Fluid Transposer ingredient
{% include recipe-table.html type='te5-transposer-fill' recipes=page.usage-recipes.transposer-fill %}
