---
category: Materials
recipes:
  crafting-shaped:
  - tf-1-12-ingot-aluminum-from-nuggets
  crafting-shapeless:
  - tf-1-12-pyrotheum-ore-aluminum
  - tf-1-12-petrotheum-pyrotheum-ore-aluminum
  - tf-1-12-pyrotheum-dust-aluminum
  - tf-1-12-ingot-aluminum-from-block
  smelter:
  - ore-processing-sand-aluminum
  - ore-processing-rich-slag-aluminum
  - ore-processing-cinnabar-aluminum
  - dust-smelting-aluminum
  - recycling-gear-aluminum
  - recycling-plate-aluminum
  - recycling-tool-pickaxe-aluminum
  - recycling-tool-shovel-aluminum
  - recycling-tool-axe-aluminum
  - recycling-tool-hoe-aluminum
  - recycling-tool-fishing-rod-aluminum
  - recycling-tool-shears-aluminum
  - recycling-tool-hammer-aluminum
  - recycling-tool-excavator-aluminum
  - recycling-tool-sickle-aluminum
  - recycling-weapon-sword-aluminum
  - recycling-weapon-bow-aluminum
  - recycling-weapon-shield-aluminum
  - recycling-armor-helmet-aluminum
  - recycling-armor-chestplate-aluminum
  - recycling-armor-leggings-aluminum
  - recycling-armor-boots-aluminum
  - recycling-horse-armor-aluminum
  smelting:
  - tf-1-12-ore-processing-aluminum
  - tf-1-12-ingot-aluminum-from-dust
show-image: false
subcategory: Ingots
subjects:
- tf-1-12-ingot-aluminum
title: Aluminum Ingot
usage-recipes:
  compactor:
  - plate-aluminum
  compactor-coin:
  - coin-aluminum
  compactor-gear:
  - gear-aluminum
  crafting-shaped:
  - tf-1-12-gear-aluminum
  - tf-1-12-storage-block-aluminum
  - tf-1-12-tool-pickaxe-aluminum
  - tf-1-12-tool-shovel-aluminum
  - tf-1-12-tool-axe-aluminum
  - tf-1-12-tool-hoe-aluminum
  - tf-1-12-tool-fishing-rod-aluminum
  - tf-1-12-tool-shears-aluminum
  - tf-1-12-tool-hammer-aluminum
  - tf-1-12-tool-excavator-aluminum
  - tf-1-12-tool-sickle-aluminum
  - tf-1-12-weapon-sword-aluminum
  - tf-1-12-weapon-bow-aluminum
  - tf-1-12-weapon-shield-aluminum
  - tf-1-12-armor-helmet-aluminum
  - tf-1-12-armor-chestplate-aluminum
  - tf-1-12-armor-leggings-aluminum
  - tf-1-12-armor-boots-aluminum
  - tf-1-12-horse-armor-aluminum
  crafting-shapeless:
  - tf-1-12-petrotheum-ingot-aluminum
  - tf-1-12-nugget-aluminum
  pulverizer:
  - dust-aluminum
---

![Aluminum ingot](/assets/images/docs/1.12/thermal-foundation/ingot-aluminum.png){:style="height: 128px"}


**Aluminum ingots** are raw materials obtained from [aluminum
ore](../aluminum-ore/). They are unobtainable by default, because aluminum
ore does not generate in the world by default.


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
