---
category: Materials
recipes:
  centrifuge:
  - dust-electrum
  crafting-shapeless:
  - tf-1-12-petrotheum-ingot-gold
  - tf-1-12-petrotheum-ore-gold
  pulverizer:
  - dust-gold
  - ore-processing-gold
  - ore-processing-copper
  - ore-processing-mithril
show-image: false
subcategory: Dusts
subjects:
- tf-1-12-dust-gold
title: Pulverized Gold
usage-recipes:
  crafting-shapeless:
  - tf-1-12-pyrotheum-dust-gold
  - tf-1-12-dust-electrum
  - ra-1-12-dust-fluxed-electrum-using-gold-and-silver
  smelter:
  - dust-smelting-gold
  - ingot-electrum-from-dust-gold-and-dust-silver
  - ingot-electrum-from-dust-gold-and-ingot-silver
  smelting:
  - tf-1-12-ingot-gold-from-dust
---

![Pulverized gold](/assets/images/docs/1.12/thermal-foundation/dust-gold.png){:style="height: 128px"}


**Pulverized gold** is a raw material. It is the dust form of
[gold](https://minecraft.gamepedia.com/Gold_Ingot).


Obtaining
---------

### Pulverizer
{% include docs/recipe/table/table.html recipe-type='pulverizer' recipe-ids=page.recipes.pulverizer no-result=true %}

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.recipes.crafting-shapeless no-result=true %}

### Centrifugal Separator
{% include docs/recipe/table/table.html recipe-type='centrifuge' recipe-ids=page.recipes.centrifuge no-result=true %}

### Smashing
When [gold ore](https://minecraft.gamepedia.com/Gold_Ore) is broken using a
[Smashing](../../cofh-core/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized gold are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include docs/recipe/table/table.html recipe-type='smelting' recipe-ids=page.usage-recipes.smelting %}

### Crafting ingredient
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}

### Induction Smelter ingredient
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.usage-recipes.smelter %}
