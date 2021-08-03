---
category: Materials
recipes:
  crafting-shapeless:
  - tf-1-12-coal-coke-from-block
  redstone-furnace-pyrolysis:
  - coal-coke
show-image: false
subcategory: Other
subjects:
- tf-1-12-coal-coke
title: Coal Coke
usage-recipes:
  crafting-shaped:
  - tf-1-12-storage-block-coal-coke
  smelter:
  - ingot-steel-from-dust-iron-and-coal-coke
  - ingot-steel-from-ingot-iron-and-coal-coke
---

![Coal coke](/assets/images/docs/1.12/thermal-foundation/coal-coke.png){:style="height: 128px"}


**Coal coke** is a material obtained by processing
[coal](https://minecraft.gamepedia.com/Coal) in a [redstone
furnace](../../thermal-expansion/redstone-furnace/) with [pyrolytic
conversion](../../thermal-expansion/augment-pyrolytic-conversion/) installed. It can be used as
fuel, or as an ingredient to produce [steel](../steel-ingot/).


Obtaining
---------

### Redstone Furnace with Pyrolytic Conversion
{% include docs/recipe/table/table.html recipe-type='redstone-furnace-pyrolysis' recipe-ids=page.recipes.redstone-furnace-pyrolysis no-result=true %}

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.recipes.crafting-shapeless no-result=true %}


Usage
-----

### Fuel
When used as fuel in a [furnace](https://minecraft.gamepedia.com/Furnace), one
piece of coal coke lasts 160 seconds, which is enough to smelt up to 16 items.
It lasts twice as long as regular [coal](https://minecraft.gamepedia.com/Coal).

### Crafting ingredient
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.usage-recipes.crafting-shaped %}

### Induction Smelter ingredient
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.usage-recipes.smelter %}
