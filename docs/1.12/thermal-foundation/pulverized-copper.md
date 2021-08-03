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
show-image: false
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

![Pulverized copper](/assets/images/docs/1.12/thermal-foundation/dust-copper.png){:style="height: 128px"}


**Pulverized copper** is a raw material. It is the dust form of
[copper](../copper-ingot/).


Obtaining
---------

### Pulverizer
{% include docs/recipe/table/table.html recipe-type='pulverizer' recipe-ids=page.recipes.pulverizer no-result=true %}

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.recipes.crafting-shapeless no-result=true %}

### Centrifugal Separator
{% include docs/recipe/table/table.html recipe-type='centrifuge' recipe-ids=page.recipes.centrifuge no-result=true %}

### Smashing
When [copper ore](../copper-ore/) is broken using a
[Smashing](../../cofh-core/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized copper are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include docs/recipe/table/table.html recipe-type='smelting' recipe-ids=page.usage-recipes.smelting %}

### Crafting ingredient
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}

### Induction Smelter ingredient
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.usage-recipes.smelter %}
