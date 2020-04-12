---
title: Pulverized Silver
redirect_from:
- /docs/thermal-foundation/items/materials/dusts/pulverized-silver/
- /docs/pulverized-silver/
- /docs/thermal-foundation/pulverized-silver/
- /docs/thermal-foundation-2/pulverized-silver/
- /docs/1.12/thermal-foundation-2/pulverized-silver/
recipes:
  crafting:
  - tf-1-12-petrotheum-ingot-silver
  - tf-1-12-petrotheum-ore-silver
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
  - tf-1-12-pyrotheum-dust-silver
  - tf-1-12-dust-electrum
  - tf-1-12-dust-signalum
  - tf-1-12-dust-lumium
  - tf-1-12-hardened-glass-silver
  - ra-1-12-dust-fluxed-electrum-using-gold-and-silver
  smelting:
  - tf-1-12-ingot-silver-from-dust
  smelter:
  - dust-smelting-silver
  - ingot-electrum-from-dust-gold-and-dust-silver
  - ingot-electrum-from-ingot-gold-and-dust-silver
  - hardened-glass-silver
---

![Pulverized silver](/assets/images/thermal-foundation-2/dust-silver.png){:style="height: 128px"}


**Pulverized silver** is a raw material. It is the dust form of
[silver](../silver-ingot/).


Obtaining
---------

### Pulverizer
{% include recipe-table.html type='te-1-12-pulverizer' recipes=page.recipes.pulverizer no-result=true %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Centrifugal Separator
{% include recipe-table.html type='te-1-12-centrifuge' recipes=page.recipes.centrifuge no-result=true %}

### Smashing
When [silver ore](../silver-ore/) is broken using a
[Smashing](../../cofh-core/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized silver are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include recipe-table.html type='smelting' recipes=page.usage-recipes.smelting %}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Induction Smelter ingredient
{% include recipe-table.html type='te-1-12-smelter' recipes=page.usage-recipes.smelter %}
