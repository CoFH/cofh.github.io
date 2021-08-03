---
category: Materials
recipes:
  centrifuge:
  - dust-enderium
  crafting-shapeless:
  - tf-1-12-petrotheum-ingot-platinum
  - tf-1-12-petrotheum-ore-platinum
  pulverizer:
  - dust-platinum
  - ore-processing-nickel
  - ore-processing-platinum
  - ore-processing-iridium
show-image: false
subcategory: Dusts
subjects:
- tf-1-12-dust-platinum
title: Pulverized Platinum
usage-recipes:
  crafting-shapeless:
  - tf-1-12-pyrotheum-dust-platinum
  - tf-1-12-dust-enderium
  - tf-1-12-hardened-glass-platinum
  smelter:
  - dust-smelting-platinum
  - hardened-glass-platinum
  smelting:
  - tf-1-12-ingot-platinum-from-dust
---

![Pulverized platinum](/assets/images/docs/1.12/thermal-foundation/dust-platinum.png){:style="height: 128px"}


**Pulverized platinum** is a raw material. It is the dust form of
[platinum](../platinum-ingot/).


Obtaining
---------

### Pulverizer
{% include docs/recipe/table/table.html recipe-type='pulverizer' recipe-ids=page.recipes.pulverizer no-result=true %}

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.recipes.crafting-shapeless no-result=true %}

### Centrifugal Separator
{% include docs/recipe/table/table.html recipe-type='centrifuge' recipe-ids=page.recipes.centrifuge no-result=true %}

### Smashing
When [platinum ore](../platinum-ore/) is broken using a
[Smashing](../../cofh-core/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized platinum are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include docs/recipe/table/table.html recipe-type='smelting' recipe-ids=page.usage-recipes.smelting %}

### Crafting ingredient
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}

### Induction Smelter ingredient
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.usage-recipes.smelter %}
