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
show_image: false
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

![Pulverized iron](/images/docs/1.12/thermal-foundation/dust-iron.png){:style="height: 128px"}


**Pulverized iron** is a raw material. It is the dust form of
[iron](https://minecraft.gamepedia.com/Iron_Ingot).


Obtaining
---------

### Pulverizer
{{<recipe_table type="pulverizer" ids_param="recipes.pulverizer">}}

### Crafting
{{<recipe_table type="crafting-shapeless" ids_param="recipes.crafting-shapeless">}}

### Centrifugal Separator
{{<recipe_table type="centrifuge" ids_param="recipes.centrifuge">}}

### Smashing
When [iron ore](https://minecraft.gamepedia.com/Iron_Ore) is broken using a
[Smashing](../../cofh-core/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized iron are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{{<recipe_table type="smelting' recipe-ids=page.usage-recipes.smelting">}}

### Crafting ingredient
{{<recipe_table type="crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless">}}

### Induction Smelter ingredient
{{<recipe_table type="smelter' recipe-ids=page.usage-recipes.smelter">}}
