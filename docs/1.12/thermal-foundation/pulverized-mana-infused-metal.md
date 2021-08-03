---
category: Materials
recipes:
  crafting-shapeless:
  - tf-1-12-petrotheum-ingot-mithril
  - tf-1-12-petrotheum-ore-mithril
  pulverizer:
  - dust-mithril
  - ore-processing-mithril
show-image: false
subcategory: Dusts
subjects:
- tf-1-12-dust-mithril
title: Pulverized Mana Infused Metal
usage-recipes:
  crafting-shapeless:
  - tf-1-12-pyrotheum-dust-mithril
  - tf-1-12-hardened-glass-mithril
  smelter:
  - dust-smelting-mithril
  - hardened-glass-mithril
  smelting:
  - tf-1-12-ingot-mithril-from-dust
---

![Pulverized mana infused metal](/assets/images/docs/1.12/thermal-foundation/dust-mithril.png){:style="height: 128px"}


**Pulverized mana infused metal** is a raw material. It is the dust form of
[mana infused metal](../mana-infused-ingot/).


Obtaining
---------

### Pulverizer
{% include docs/recipe/table/table.html recipe-type='pulverizer' recipe-ids=page.recipes.pulverizer no-result=true %}

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.recipes.crafting-shapeless no-result=true %}

### Smashing
When [mana infused ore](../mana-infused-ore/) is broken
using a [Smashing](../../cofh-core/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized mana infused metal are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include docs/recipe/table/table.html recipe-type='smelting' recipe-ids=page.usage-recipes.smelting %}

### Crafting ingredient
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}

### Induction Smelter ingredient
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.usage-recipes.smelter %}
