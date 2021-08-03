---
category: Materials
recipes:
  crafting-shaped:
  - tf-1-12-ingot-mithril-from-nuggets
  crafting-shapeless:
  - tf-1-12-pyrotheum-ore-mithril
  - tf-1-12-petrotheum-pyrotheum-ore-mithril
  - tf-1-12-pyrotheum-dust-mithril
  - tf-1-12-ingot-mithril-from-block
  smelter:
  - ore-processing-sand-mithril
  - ore-processing-rich-slag-mithril
  - ore-processing-cinnabar-mithril
  - dust-smelting-mithril
  - recycling-gear-mithril
  - recycling-plate-mithril
  smelting:
  - tf-1-12-ore-processing-mithril
  - tf-1-12-ingot-mithril-from-dust
show-image: false
subcategory: Ingots
subjects:
- tf-1-12-ingot-mithril
title: Mana Infused Ingot
usage-recipes:
  compactor:
  - plate-mithril
  compactor-coin:
  - coin-mithril
  compactor-gear:
  - gear-mithril
  crafting-shaped:
  - tf-1-12-gear-mithril
  - tf-1-12-storage-block-mithril
  crafting-shapeless:
  - tf-1-12-petrotheum-ingot-mithril
  - tf-1-12-nugget-mithril
  pulverizer:
  - dust-mithril
---

![Mana infused ingot](/assets/images/docs/1.12/thermal-foundation/ingot-mithril.png){:style="height: 128px"}


**Mana infused ingots** are raw materials obtained from [mana infused
ore](../mana-infused-ore/). They are unobtainable by default, because mana
infused ore does not generate in the world by default.


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

* Mana infused ingots are internally registered as "mithril ingots".
