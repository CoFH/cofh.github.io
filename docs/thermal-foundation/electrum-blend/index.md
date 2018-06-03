---
title: Electrum Blend
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/items/materials/dusts/electrum-blend/
  - /docs/electrum-blend/
recipes:
  crafting:
    - tf2-dust-electrum
  pulverizer:
    - dust-electrum
usage-recipes:
  crafting:
    - tf2-hardened-glass-electrum
    - ra-dust-fluxed-electrum-using-electrum
  smelting:
    - tf2-ingot-electrum-from-dust
  smelter:
    - dust-smelting-electrum
    - hardened-glass-electrum
  transposer-fill:
    - ra-dust-fluxed-electrum
  centrifuge:
    - dust-electrum
---

![Electrum blend](/assets/images/thermal-foundation/dust-electrum.png){:style="height: 128px"}


**Electrum blend** is a raw material. It is the dust form of
[electrum](/docs/thermal-foundation/electrum-ingot/).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Pulverizer
{% include recipe-table.html type='pulverizer-te5' recipes=page.recipes.pulverizer no-result=true %}


Usage
-----

### Smelting ingredient
{% include recipe-table.html type='smelting' recipes=page.usage-recipes.smelting %}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter-te5' recipes=page.usage-recipes.smelter %}

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-te5-fill' recipes=page.usage-recipes.transposer-fill %}

### Centrifugal Separator ingredient
{% include recipe-table.html type='centrifuge-te5' recipes=page.usage-recipes.centrifuge %}
