---
title: Pulverized Silver
nav: thermal-foundation-2
redirect_from:
- /docs/thermal-foundation/items/materials/dusts/pulverized-silver/
- /docs/pulverized-silver/
- /docs/thermal-foundation/pulverized-silver/
recipes:
  crafting:
  - tf2-petrotheum-ingot-silver
  - tf2-petrotheum-ore-silver
  pulverizer:
  - dust-silver
  - ore-processing-silver
  - ore-processing-lead
  centrifuge:
  - dust-electrum
  - dust-signalum
  - dust-lumium
usage-recipes:
  crafting:
  - tf2-pyrotheum-dust-silver
  - tf2-dust-electrum
  - tf2-dust-signalum
  - tf2-dust-lumium
  - tf2-hardened-glass-silver
  - ra2-dust-fluxed-electrum-using-gold-and-silver
  smelting:
  - tf2-ingot-silver-from-dust
  smelter:
  - dust-smelting-silver
  - ingot-electrum-from-dust-gold-and-dust-silver
  - ingot-electrum-from-ingot-gold-and-dust-silver
  - hardened-glass-silver
---

![Pulverized silver](/assets/images/thermal-foundation/dust-silver.png){:style="height: 128px"}


**Pulverized silver** is a raw material. It is the dust form of
[silver](/docs/thermal-foundation-2/silver-ingot/).


Obtaining
---------

### Pulverizer
{% include recipe-table.html type='pulverizer-te5' recipes=page.recipes.pulverizer no-result=true %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Centrifugal Separator
{% include recipe-table.html type='centrifuge-te5' recipes=page.recipes.centrifuge no-result=true %}

### Smashing
When [silver ore](/docs/thermal-foundation-2/silver-ore/) is broken using a
[Smashing](/docs/cofh-core-4/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized silver are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include recipe-table.html type='smelting' recipes=page.usage-recipes.smelting %}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter-te5' recipes=page.usage-recipes.smelter %}
