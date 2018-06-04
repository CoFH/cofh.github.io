---
title: Pulped Biomass
nav: thermal-foundation
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
usage-recipes:
  crafting:
    - tf2-dirt-using-biomass-and-slag
    - tf2-bioblend
  crucible:
    - biocrude-from-biomass
  transposer-fill:
    - biomass-rich
---

**Pulped biomass** is a material obtained by processing various plants in
[sawmills](/docs/thermal-expansion/sawmill/). It can be processed into
[biocrude](/docs/thermal-foundation/biocrude/), which can then be processed into
[grassoline](/docs/thermal-foundation/grassoline/).


Obtaining
---------

### Sawmill
{% include recipe-table.html type='sawmill-te5' recipes=page.recipes.sawmill no-result=true %}


Usage
-----

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Magma Crucible ingredient
{% include recipe-table.html type='crucible-te5' recipes=page.usage-recipes.crucible %}

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-te5-fill' recipes=page.usage-recipes.transposer-fill %}
