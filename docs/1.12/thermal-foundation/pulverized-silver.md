---
category: Materials
recipes:
  centrifuge:
  - dust-electrum
  - dust-signalum
  - dust-lumium
  crafting-shapeless:
  - tf-1-12-petrotheum-ingot-silver
  - tf-1-12-petrotheum-ore-silver
  pulverizer:
  - dust-silver
  - ore-processing-silver
  - ore-processing-lead
show-image: false
subcategory: Dusts
subjects:
- tf-1-12-dust-silver
title: Pulverized Silver
usage-recipes:
  crafting-shapeless:
  - tf-1-12-pyrotheum-dust-silver
  - tf-1-12-dust-electrum
  - tf-1-12-dust-signalum
  - tf-1-12-dust-lumium
  - tf-1-12-hardened-glass-silver
  - ra-1-12-dust-fluxed-electrum-using-gold-and-silver
  smelter:
  - dust-smelting-silver
  - ingot-electrum-from-dust-gold-and-dust-silver
  - ingot-electrum-from-ingot-gold-and-dust-silver
  - hardened-glass-silver
  smelting:
  - tf-1-12-ingot-silver-from-dust
---

![Pulverized silver](/assets/images/docs/1.12/thermal-foundation/dust-silver.png){:style="height: 128px"}


**Pulverized silver** is a raw material. It is the dust form of
[silver](../silver-ingot/).


Obtaining
---------

### Pulverizer
{% include docs/recipe/table/table.html recipe-type='pulverizer' recipe-ids=page.recipes.pulverizer no-result=true %}

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.recipes.crafting-shapeless no-result=true %}

### Centrifugal Separator
{% include docs/recipe/table/table.html recipe-type='centrifuge' recipe-ids=page.recipes.centrifuge no-result=true %}

### Smashing
When [silver ore](../silver-ore/) is broken using a
[Smashing](../../cofh-core/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized silver are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include docs/recipe/table/table.html recipe-type='smelting' recipe-ids=page.usage-recipes.smelting %}

### Crafting ingredient
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}

### Induction Smelter ingredient
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.usage-recipes.smelter %}
