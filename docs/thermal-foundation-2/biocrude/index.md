---
title: Biocrude
nav: thermal-foundation-2
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
usage-recipes:
  transposer-fill:
  - bucket-biocrude
  refinery:
  - grassoline
redirect_from:
- /docs/thermal-foundation/biocrude/
---

**Biocrude** is a fluid obtained by melting down
[biomass](/docs/thermal-foundation-2/pulped-biomass/) or
[bioblend](/docs/thermal-foundation-2/pulped-bioblend/). It can be processed into
[grassoline](/docs/thermal-foundation-2/grassoline/).


Obtaining
---------

### Magma Crucible
{% include recipe-table.html type='crucible-te5' recipes=page.recipes.crucible %}

### Fluid Transposer
{% include recipe-table.html type='transposer-te5-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Biocrude cannot be placed as a block.

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-te5-fill' recipes=page.usage-recipes.transposer-fill %}

### Fractionating Still ingredient
{% include recipe-table.html type='refinery-te5' recipes=page.usage-recipes.refinery %}
