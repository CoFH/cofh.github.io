---
category: Materials
subcategory: Other
recipes:
  smelter:
  - ore-processing-sand-iron
  - ore-processing-sand-gold
  - ore-processing-sand-copper
  - ore-processing-sand-tin
  - ore-processing-sand-silver
  - ore-processing-sand-lead
  - ore-processing-sand-aluminum
  - ore-processing-sand-nickel
  - ore-processing-sand-platinum
  - ore-processing-sand-iridium
  - ore-processing-sand-mithril
  - ore-processing-lapis-lazuli
  - ore-processing-redstone
  - ore-processing-nether-quartz
  - ore-processing-cinnabar-gold
  - hardened-glass-metal
  - recycling-clock
  - recycling-compass
show-image: false
subjects:
- tf-1-12-slag-rich
title: Rich Slag
usage-recipes:
  crafting-shaped:
  - te-1-12-augment-machine-smelter-flux
  crafting-shapeless:
  - tf-1-12-phyto-gro-rich-using-sawdust
  - tf-1-12-phyto-gro-rich-using-charcoal
  smelter:
  - ore-processing-rich-slag-iron
  - ore-processing-rich-slag-gold
  - ore-processing-rich-slag-copper
  - ore-processing-rich-slag-tin
  - ore-processing-rich-slag-silver
  - ore-processing-rich-slag-lead
  - ore-processing-rich-slag-aluminum
  - ore-processing-rich-slag-nickel
  - ore-processing-rich-slag-platinum
  - ore-processing-rich-slag-iridium
  - ore-processing-rich-slag-mithril
---

![Rich slag](/assets/images/docs/1.12/thermal-foundation/slag-rich.png){:style="height: 128px"}


**Rich slag** is a material obtained as a byproduct from [induction
smelters](../../thermal-expansion/induction-smelter/). It can be used to process ores more
efficiently in an induction smelter, or to craft [rich
Phyto-Gro](../rich-phyto-gro/).


Obtaining
---------

### Induction Smelter
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.recipes.smelter no-result=true %}


Usage
-----

### Induction Smelter ingredient
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.usage-recipes.smelter %}

### Crafting ingredient
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.usage-recipes.crafting-shaped %}
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}


Trivia
------

* Rich slag can be seen as a byproduct that still contains trace amounts of
  metal that hasn't been extracted yet. This explains how using it to process
  ore yields more metal.
