---
category: Materials
recipes:
  centrifuge:
  - dust-invar
  crafting-shapeless:
  - tf-1-12-petrotheum-ingot-iron
  - tf-1-12-petrotheum-ore-iron
  pulverizer:
  - dust-iron
  - ore-processing-iron
  - ore-processing-tin
  - ore-processing-aluminum
show-image: false
subcategory: Dusts
subjects:
- tf-1-12-dust-iron
title: Pulverized Iron
usage-recipes:
  crafting-shapeless:
  - tf-1-12-pyrotheum-dust-iron
  - tf-1-12-dust-invar
  smelter:
  - dust-smelting-iron
  - ingot-steel-from-dust-iron-and-coal-coke
  - ingot-steel-from-dust-iron-and-dust-coal
  - ingot-steel-from-dust-iron-and-dust-charcoal
  - ingot-invar-from-dust-iron-and-dust-nickel
  - ingot-invar-from-dust-iron-and-ingot-nickel
  smelting:
  - tf-1-12-ingot-iron-from-dust
---

![Pulverized iron](/assets/images/docs/1.12/thermal-foundation/dust-iron.png){:style="height: 128px"}


**Pulverized iron** is a raw material. It is the dust form of
[iron](https://minecraft.gamepedia.com/Iron_Ingot).


Obtaining
---------

### Pulverizer
{% include docs/recipe/table/table.html recipe-type='pulverizer' recipe-ids=page.recipes.pulverizer no-result=true %}

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.recipes.crafting-shapeless no-result=true %}

### Centrifugal Separator
{% include docs/recipe/table/table.html recipe-type='centrifuge' recipe-ids=page.recipes.centrifuge no-result=true %}

### Smashing
When [iron ore](https://minecraft.gamepedia.com/Iron_Ore) is broken using a
[Smashing](../../cofh-core/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized iron are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include docs/recipe/table/table.html recipe-type='smelting' recipe-ids=page.usage-recipes.smelting %}

### Crafting ingredient
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}

### Induction Smelter ingredient
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.usage-recipes.smelter %}
