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
show-image: false
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

![Pulverized nickel](/assets/images/docs/1.12/thermal-foundation/dust-nickel.png){:style="height: 128px"}


**Pulverized nickel** is a raw material. It is the dust form of
[nickel](../nickel-ingot/).


Obtaining
---------

### Pulverizer
{% include docs/recipe/table/table.html recipe-type='pulverizer' recipe-ids=page.recipes.pulverizer no-result=true %}

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.recipes.crafting-shapeless no-result=true %}

### Centrifugal Separator
{% include docs/recipe/table/table.html recipe-type='centrifuge' recipe-ids=page.recipes.centrifuge no-result=true %}

### Smashing
When [nickel ore](../nickel-ore/) is broken using a
[Smashing](../../cofh-core/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized nickel are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include docs/recipe/table/table.html recipe-type='smelting' recipe-ids=page.usage-recipes.smelting %}

### Crafting ingredient
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}

### Induction Smelter ingredient
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.usage-recipes.smelter %}
