---
title: Electrum Blend
redirect_from:
- /docs/thermal-foundation/items/materials/dusts/electrum-blend/
- /docs/electrum-blend/
- /docs/thermal-foundation/electrum-blend/
- /docs/thermal-foundation-2/electrum-blend/
- /docs/1.12/thermal-foundation-2/electrum-blend/
recipes:
  crafting:
  - tf-1-12-dust-electrum
  pulverizer:
  - dust-electrum
usage-recipes:
  crafting:
  - tf-1-12-hardened-glass-electrum
  - ra-1-12-dust-fluxed-electrum-using-electrum
  smelting:
  - tf-1-12-ingot-electrum-from-dust
  smelter:
  - dust-smelting-electrum
  - hardened-glass-electrum
  transposer-fill:
  - ra-1-12-dust-fluxed-electrum
  centrifuge:
  - dust-electrum
---

![Electrum blend](/assets/images/thermal-foundation-2/dust-electrum.png){:style="height: 128px"}


**Electrum blend** is a raw material. It is the dust form of
[electrum](/docs/1.12/thermal-foundation/electrum-ingot/).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Pulverizer
{% include recipe-table.html type='te-1-12-pulverizer' recipes=page.recipes.pulverizer no-result=true %}


Usage
-----

### Smelting ingredient
{% include recipe-table.html type='smelting' recipes=page.usage-recipes.smelting %}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Induction Smelter ingredient
{% include recipe-table.html type='te-1-12-smelter' recipes=page.usage-recipes.smelter %}

### Fluid Transposer ingredient
{% include recipe-table.html type='te-1-12-transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Centrifugal Separator ingredient
{% include recipe-table.html type='te-1-12-centrifuge' recipes=page.usage-recipes.centrifuge %}
