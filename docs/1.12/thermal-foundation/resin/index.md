---
title: Resin
redirect_from:
- /docs/thermal-foundation/fluids/tree/resin/
- /docs/resin/
- /docs/thermal-foundation/resin/
- /docs/thermal-foundation-2/resin/
- /docs/1.12/thermal-foundation-2/resin/
recipes:
  transposer-empty:
  - bucket-resin
usage-recipes:
  transposer-fill:
  - bucket-resin
  refinery:
  - tree-oil
---

![Resin](/assets/images/thermal-foundation-2/resin.gif){:style="height: 128px"}


**Resin** is a fluid obtained from spruce, birch, jungle and acacia
[trees](https://minecraft.gamepedia.com/Tree). It can be processed into [tree
oil](/docs/1.12/thermal-foundation/tree-oil/) and [rosin](/docs/1.12/thermal-foundation/rosin/).


Obtaining
---------

### Arboreal Extractor
An [arboreal extractor](/docs/1.12/thermal-expansion/arboreal-extractor/) will produce resin when
placed next to a spruce, birch, jungle or acacia
[tree](https://minecraft.gamepedia.com/Tree). Spruce trees produce twice as much
resin as other trees.

### Sawmill with Resin Funnel
A [sawmill](/docs/1.12/thermal-expansion/sawmill/) with a [resin funnel](/docs/1.12/thermal-expansion/augment-resin-funnel/)
installed produces resin as a byproduct when processing spruce, birch, jungle or
acacia [wood](https://minecraft.gamepedia.com/Wood). Spruce wood yields twice as
much resin as other types of wood.

### Fluid Transposer
{% include recipe-table.html type='te-1-12-transposer-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Resin cannot be placed as a block.

### Fluid Transposer ingredient
{% include recipe-table.html type='te-1-12-transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Fractionating Still ingredient
{% include recipe-table.html type='te-1-12-refinery' recipes=page.usage-recipes.refinery %}
