---
category: Materials
recipes:
  crafting-shapeless:
  - tf-1-12-petrotheum-ingot-aluminum
  - tf-1-12-petrotheum-ore-aluminum
  pulverizer:
  - dust-aluminum
  - ore-processing-aluminum
show-image: false
subcategory: Dusts
subjects:
- tf-1-12-dust-aluminum
title: Pulverized Aluminum
usage-recipes:
  crafting-shapeless:
  - tf-1-12-pyrotheum-dust-aluminum
  - tf-1-12-hardened-glass-aluminum
  smelter:
  - dust-smelting-aluminum
  - hardened-glass-aluminum
  smelting:
  - tf-1-12-ingot-aluminum-from-dust
---

![Pulverized aluminum](/assets/images/docs/1.12/thermal-foundation/dust-aluminum.png){:style="height: 128px"}


**Pulverized aluminum** is a raw material. It is the dust form of
[aluminum](../aluminum-ingot/).


Obtaining
---------

### Pulverizer
{% include docs/recipe/table/table.html recipe-type='pulverizer' recipe-ids=page.recipes.pulverizer no-result=true %}

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.recipes.crafting-shapeless no-result=true %}

### Smashing
When [aluminum ore](../aluminum-ore/) is broken using a
[Smashing](../../cofh-core/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized aluminum are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include docs/recipe/table/table.html recipe-type='smelting' recipe-ids=page.usage-recipes.smelting %}

### Crafting ingredient
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}

### Induction Smelter ingredient
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.usage-recipes.smelter %}
