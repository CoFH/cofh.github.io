---
title: Pulverized Gold
nav: thermal-foundation-2
redirect_from:
- /docs/thermal-foundation/items/materials/dusts/pulverized-gold/
- /docs/pulverized-gold/
- /docs/thermal-foundation/pulverized-gold/
recipes:
  crafting:
  - tf2-petrotheum-ingot-gold
  - tf2-petrotheum-ore-gold
  pulverizer:
  - dust-gold
  - ore-processing-gold
  - ore-processing-copper
  - ore-processing-mithril
  centrifuge:
  - dust-electrum
usage-recipes:
  crafting:
  - tf2-pyrotheum-dust-gold
  - tf2-dust-electrum
  - ra2-dust-fluxed-electrum-using-gold-and-silver
  smelting:
  - tf2-ingot-gold-from-dust
  smelter:
  - dust-smelting-gold
  - ingot-electrum-from-dust-gold-and-dust-silver
  - ingot-electrum-from-dust-gold-and-ingot-silver
---

![Pulverized gold](/assets/images/thermal-foundation-2/dust-gold.png){:style="height: 128px"}


**Pulverized gold** is a raw material. It is the dust form of
[gold](https://minecraft.gamepedia.com/Gold_Ingot).


Obtaining
---------

### Pulverizer
{% include recipe-table.html type='pulverizer-te5' recipes=page.recipes.pulverizer no-result=true %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Centrifugal Separator
{% include recipe-table.html type='centrifuge-te5' recipes=page.recipes.centrifuge no-result=true %}

### Smashing
When [gold ore](https://minecraft.gamepedia.com/Gold_Ore) is broken using a
[Smashing](/docs/cofh-core-4/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized gold are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include recipe-table.html type='smelting' recipes=page.usage-recipes.smelting %}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter-te5' recipes=page.usage-recipes.smelter %}
