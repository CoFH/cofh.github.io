---
category: Materials
recipes:
  centrifuge:
  - dust-bronze
  - dust-lumium
  crafting-shapeless:
  - tf-1-12-petrotheum-ingot-tin
  - tf-1-12-petrotheum-ore-tin
  pulverizer:
  - dust-tin
  - ore-processing-tin
show-image: false
subcategory: Dusts
subjects:
- tf-1-12-dust-tin
title: Pulverized Tin
usage-recipes:
  crafting-shapeless:
  - tf-1-12-pyrotheum-dust-tin
  - tf-1-12-dust-bronze
  - tf-1-12-dust-lumium
  - tf-1-12-hardened-glass-tin
  smelter:
  - dust-smelting-tin
  - ingot-bronze-from-dust-copper-and-dust-tin
  - ingot-bronze-from-ingot-copper-and-dust-tin
  - hardened-glass-tin
  smelting:
  - tf-1-12-ingot-tin-from-dust
---

![Pulverized tin](/assets/images/docs/1.12/thermal-foundation/dust-tin.png){:style="height: 128px"}


**Pulverized tin** is a raw material. It is the dust form of
[tin](../tin-ingot/).


Obtaining
---------

### Pulverizer
{% include docs/recipe/table/table.html recipe-type='pulverizer' recipe-ids=page.recipes.pulverizer no-result=true %}

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.recipes.crafting-shapeless no-result=true %}

### Centrifugal Separator
{% include docs/recipe/table/table.html recipe-type='centrifuge' recipe-ids=page.recipes.centrifuge no-result=true %}

### Smashing
When [tin ore](../tin-ore/) is broken using a
[Smashing](../../cofh-core/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized tin are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include docs/recipe/table/table.html recipe-type='smelting' recipe-ids=page.usage-recipes.smelting %}

### Crafting ingredient
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}

### Induction Smelter ingredient
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.usage-recipes.smelter %}
