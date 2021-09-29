---
category: Materials
recipes:
  centrifuge:
  - dust-invar
  - dust-constantan
  crafting-shapeless:
  - tf-1-12-petrotheum-ingot-nickel
  - tf-1-12-petrotheum-ore-nickel
  pulverizer:
  - dust-nickel
  - ore-processing-nickel
  - ore-processing-iron
show_image: false
subcategory: Dusts
subjects:
- tf-1-12-dust-nickel
title: Pulverized Nickel
usage-recipes:
  crafting-shapeless:
  - tf-1-12-pyrotheum-dust-nickel
  - tf-1-12-dust-invar
  - tf-1-12-dust-constantan
  - tf-1-12-hardened-glass-nickel
  smelter:
  - dust-smelting-nickel
  - ingot-invar-from-dust-iron-and-dust-nickel
  - ingot-invar-from-ingot-iron-and-dust-nickel
  - ingot-constantan-from-dust-copper-and-dust-nickel
  - ingot-constantan-from-ingot-copper-and-dust-nickel
  - hardened-glass-nickel
  smelting:
  - tf-1-12-ingot-nickel-from-dust
---

![Pulverized nickel](/images/docs/1.12/thermal-foundation/dust-nickel.png)


**Pulverized nickel** is a raw material. It is the dust form of
[nickel](../nickel-ingot/).


Obtaining
---------

### Pulverizer
{{<recipe_table type="pulverizer" ids_param="recipes.pulverizer">}}

### Crafting
{{<recipe_table type="crafting-shapeless" ids_param="recipes.crafting-shapeless">}}

### Centrifugal Separator
{{<recipe_table type="centrifuge" ids_param="recipes.centrifuge">}}

### Smashing
When [nickel ore](../nickel-ore/) is broken using a
[Smashing](../../cofh-core/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized nickel are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{{<recipe_table type="smelting" ids_param="usage-recipes.smelting">}}

### Crafting ingredient
{{<recipe_table type="crafting-shapeless" ids_param="usage-recipes.crafting-shapeless">}}

### Induction Smelter ingredient
{{<recipe_table type="smelter" ids_param="usage-recipes.smelter">}}
