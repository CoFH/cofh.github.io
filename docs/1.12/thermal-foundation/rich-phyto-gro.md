---
category: Items
subcategory: Utilities
recipes:
  crafting-shapeless:
  - tf-1-12-phyto-gro-rich-using-sawdust
  - tf-1-12-phyto-gro-rich-using-charcoal
  transposer-fill:
  - phyto-gro-rich
show-image: false
subjects:
- tf-1-12-phyto-gro-rich
title: Rich Phyto-Gro
usage-recipes:
  charger:
  - phyto-gro-fluxed
  crafting-shaped:
  - te-1-12-augment-machine-insolator-fertilizer
  - tc-1-12-watering-can-signalum
  crafting-shapeless:
  - tf-1-12-podzol-using-phyto-gro
  - tf-1-12-mycelium-using-phyto-gro
  insolator:
  - beetroot-rich
  - cactus-rich
  - carrot-rich
  - cocoa-beans-rich
  - flower-rich
  - tall-flower-rich
  - lily-pad-rich
  - melon-rich
  - potato-rich
  - pumpkin-rich
  - sugar-canes-rich
  - vines-rich
  - wheat-rich
  - mushroom-rich
  - nether-wart-rich
  - chorus-fruit-rich
  insolator-tree:
  - wood-rich
---

![Rich Phyto-Gro](/assets/images/docs/1.12/thermal-foundation/phyto-gro-rich.png){:style="height: 128px"}


**Rich Phyto-Gro** is a type of fertilizer. It is stronger than the
[regular](../phyto-gro/) version, but weaker than the
[fluxed](../fluxed-phyto-gro/) version.


Obtaining
---------

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.recipes.crafting-shapeless no-result=true %}

### Fluid Transposer
{% include docs/recipe/table/table.html recipe-type='transposer-fill' recipe-ids=page.recipes.transposer-fill no-result=true %}


Usage
-----

### Fertilizer
When used on blocks, rich Phyto-Gro grows plants like [bone
meal](https://minecraft.gamepedia.com/Bone_Meal), but in a 5x5 area.

### Crafting ingredient
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.usage-recipes.crafting-shaped %}
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}

### Phytogenic Insolator ingredient
{% include docs/recipe/table/table.html recipe-type='insolator' recipe-ids=page.usage-recipes.insolator %}

### Phytogenic Insolator with Sapling Infuser ingredient
{% include docs/recipe/table/table.html recipe-type='insolator-tree' recipe-ids=page.usage-recipes.insolator-tree %}

### Energetic Infuser ingredient
{% include docs/recipe/table/table.html recipe-type='charger' recipe-ids=page.usage-recipes.charger %}

### Arboreal Extractor
When rich Phyto-Gro is used in an [arboreal
extractor](../../thermal-expansion/arboreal-extractor/), it produces three times as much fluid.
