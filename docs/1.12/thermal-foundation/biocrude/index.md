---
title: Biocrude
image:
- alt: Biocrude
  file: thermal-foundation-2/biocrude.gif
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
- /docs/thermal-foundation-2/biocrude/
- /docs/1.12/thermal-foundation-2/biocrude/
---

**Biocrude** is a fluid obtained by melting down
[biomass](/docs/1.12/thermal-foundation/pulped-biomass/) or
[bioblend](/docs/1.12/thermal-foundation/pulped-bioblend/). It can be processed into
[grassoline](/docs/1.12/thermal-foundation/grassoline/).


Obtaining
---------

### Magma Crucible
{% include recipe-table.html type='te5-crucible' recipes=page.recipes.crucible %}

### Fluid Transposer
{% include recipe-table.html type='te5-transposer-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Biocrude cannot be placed as a block.

### Fluid Transposer ingredient
{% include recipe-table.html type='te5-transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Fractionating Still ingredient
{% include recipe-table.html type='te5-refinery' recipes=page.usage-recipes.refinery %}
