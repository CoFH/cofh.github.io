---
title: Resin
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/fluids/tree/resin/
recipes:
  sawmill-tapper:
    - wood-processing-spruce
    - wood-processing-birch
    - wood-processing-jungle
    - wood-processing-acacia
  transposer-empty:
    - bucket-resin
usage-recipes:
  transposer-fill:
    - bucket-resin
  refinery:
    - tree-oil
---

![Resin](/assets/images/thermal-foundation/resin.gif){:style="height: 128px"}


**Resin** is a fluid obtained from spruce, birch, jungle and acacia
[trees](https://minecraft.gamepedia.com/Tree). It can be processed into [tree
oil](/docs/tree-oil/) and [rosin](/docs/rosin/).


Obtaining
---------

### Arboreal Extractor
An [arboreal extractor](/docs/arboreal-extractor/) will produce resin when
placed next to a spruce, birch, jungle or acacia
[tree](https://minecraft.gamepedia.com/Tree). Spruce trees produce twice as much
resin as other trees.

### Sawmill with Resin Funnel
{% include recipe-table.html type='sawmill-tapper' recipes=page.recipes.sawmill-tapper %}

### Fluid Transposer
{% include recipe-table.html type='transposer-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Resin cannot be placed as a block.

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Fractionating Still ingredient
{% include recipe-table.html type='refinery' recipes=page.usage-recipes.refinery %}
