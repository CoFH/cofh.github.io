---
category: Materials
recipes:
  centrifuge:
  - dust-bronze
  - dust-constantan
  - dust-signalum
  crafting-shapeless:
  - tf-1-12-petrotheum-ingot-copper
  - tf-1-12-petrotheum-ore-copper
  pulverizer:
  - dust-copper
  - ore-processing-copper
show_image: false
subcategory: Dusts
subjects:
- tf-1-12-dust-copper
title: Pulverized Copper
usage-recipes:
  crafting-shapeless:
  - tf-1-12-pyrotheum-dust-copper
  - tf-1-12-dust-bronze
  - tf-1-12-dust-constantan
  - tf-1-12-dust-signalum
  - tf-1-12-hardened-glass-copper
  smelter:
  - dust-smelting-copper
  - ingot-bronze-from-dust-copper-and-dust-tin
  - ingot-bronze-from-dust-copper-and-ingot-tin
  - ingot-constantan-from-dust-copper-and-dust-nickel
  - ingot-constantan-from-dust-copper-and-ingot-nickel
  - hardened-glass-copper
  smelting:
  - tf-1-12-ingot-copper-from-dust
---

![Pulverized copper](/images/docs/1.12/thermal-foundation/dust-copper.png){:style="height: 128px"}


**Pulverized copper** is a raw material. It is the dust form of
[copper](../copper-ingot/).


Obtaining
---------

### Pulverizer
{{<recipe_table type="pulverizer" ids_param="recipes.pulverizer">}}

### Crafting
{{<recipe_table type="crafting-shapeless" ids_param="recipes.crafting-shapeless">}}

### Centrifugal Separator
{{<recipe_table type="centrifuge" ids_param="recipes.centrifuge">}}

### Smashing
When [copper ore](../copper-ore/) is broken using a
[Smashing](../../cofh-core/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized copper are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{{<recipe_table type="smelting' recipe-ids=page.usage-recipes.smelting">}}

### Crafting ingredient
{{<recipe_table type="crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless">}}

### Induction Smelter ingredient
{{<recipe_table type="smelter' recipe-ids=page.usage-recipes.smelter">}}
