---
category: Materials
recipes:
  crafting-shapeless:
  - tf-1-12-petrotheum-ingot-iridium
  - tf-1-12-petrotheum-ore-iridium
  pulverizer:
  - dust-iridium
  - ore-processing-iridium
  - ore-processing-platinum
show-image: false
subcategory: Dusts
subjects:
- tf-1-12-dust-iridium
title: Pulverized Iridium
usage-recipes:
  crafting-shapeless:
  - tf-1-12-pyrotheum-dust-iridium
  - tf-1-12-hardened-glass-iridium
  smelter:
  - dust-smelting-iridium
  - hardened-glass-iridium
  smelting:
  - tf-1-12-ingot-iridium-from-dust
---

![Pulverized iridium](/assets/images/docs/1.12/thermal-foundation/dust-iridium.png){:style="height: 128px"}


**Pulverized iridium** is a raw material. It is the dust form of
[iridium](../iridium-ingot/).


Obtaining
---------

### Pulverizer
{% include docs/recipe/table/table.html recipe-type='pulverizer' recipe-ids=page.recipes.pulverizer no-result=true %}

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.recipes.crafting-shapeless no-result=true %}

### Smashing
When [iridium ore](../iridium-ore/) is broken using a
[Smashing](../../cofh-core/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized iridium are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include docs/recipe/table/table.html recipe-type='smelting' recipe-ids=page.usage-recipes.smelting %}

### Crafting ingredient
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}

### Induction Smelter ingredient
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.usage-recipes.smelter %}
