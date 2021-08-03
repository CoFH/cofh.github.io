---
category: Materials
recipes:
  crafting-shaped:
  - tf-1-12-ingot-iridium-from-nuggets
  crafting-shapeless:
  - tf-1-12-pyrotheum-ore-iridium
  - tf-1-12-petrotheum-pyrotheum-ore-iridium
  - tf-1-12-pyrotheum-dust-iridium
  - tf-1-12-ingot-iridium-from-block
  smelter:
  - ore-processing-sand-iridium
  - ore-processing-rich-slag-iridium
  - ore-processing-cinnabar-iridium
  - ore-processing-cinnabar-platinum
  - dust-smelting-iridium
  - recycling-gear-iridium
  - recycling-plate-iridium
  smelting:
  - tf-1-12-ore-processing-iridium
  - tf-1-12-ingot-iridium-from-dust
show-image: false
subcategory: Ingots
subjects:
- tf-1-12-ingot-iridium
title: Iridium Ingot
usage-recipes:
  compactor:
  - plate-iridium
  compactor-coin:
  - coin-iridium
  compactor-gear:
  - gear-iridium
  crafting-shaped:
  - tf-1-12-gear-iridium
  - tf-1-12-storage-block-iridium
  crafting-shapeless:
  - tf-1-12-petrotheum-ingot-iridium
  - tf-1-12-nugget-iridium
  pulverizer:
  - dust-iridium
---

![Iridium ingot](/assets/images/docs/1.12/thermal-foundation/ingot-iridium.png){:style="height: 128px"}


**Iridium ingots** are raw materials obtained from [iridium
ore](../iridium-ore/) and [platinum ore](../platinum-ore/). They are
unobtainable by default, because neither of these ores generate in the world by
default.


Obtaining
---------

### Smelting
{% include docs/recipe/table/table.html recipe-type='smelting' recipe-ids=page.recipes.smelting no-result=true %}

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.recipes.crafting-shaped no-result=true %}
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.recipes.crafting-shapeless no-result=true %}

### Induction Smelter
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.recipes.smelter no-result=true %}


Usage
-----

### Crafting ingredient
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.usage-recipes.crafting-shaped %}
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}

### Pulverizer ingredient
{% include docs/recipe/table/table.html recipe-type='pulverizer' recipe-ids=page.usage-recipes.pulverizer %}

### Compactor ingredient
{% include docs/recipe/table/table.html recipe-type='compactor' recipe-ids=page.usage-recipes.compactor %}

### Compactor with Numismatic Press ingredient
{% include docs/recipe/table/table.html recipe-type='compactor-coin' recipe-ids=page.usage-recipes.compactor-coin %}

### Compactor with Gearworking Die ingredient
{% include docs/recipe/table/table.html recipe-type='compactor-gear' recipe-ids=page.usage-recipes.compactor-gear %}


Trivia
------

* If [Tinkers'
  Construct](https://minecraft.curseforge.com/projects/tinkers-construct) is
  installed, iridium can be molten down in a smeltery.
