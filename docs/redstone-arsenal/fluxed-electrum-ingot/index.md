---
title: Fluxed Electrum Ingot
nav: redstone-arsenal
image:
  - alt: Fluxed electrum ingot
    file: redstone-arsenal/ingot-fluxed-electrum.gif
redirect_from:
  - /docs/redstone-arsenal/materials/fluxed-electrum-ingot/
  - /docs/fluxed-electrum-ingot/
recipes:
  smelter:
    - ra-dust-smelting-fluxed-electrum
  crafting:
    - ra-ingot-fluxed-electrum-from-nuggets
    - ra-ingot-fluxed-electrum-from-block
usage-recipes:
  crafting:
    - ra-nugget-fluxed-electrum
    - ra-gear-fluxed-electrum
    - ra-storage-block-fluxed-electrum
    - ra-tool-pickaxe
    - ra-tool-shovel
    - ra-tool-axe
    - ra-tool-fishing-rod
    - ra-tool-hammer
    - ra-tool-excavator
    - ra-tool-sickle
    - ra-tool-wrench
    - ra-weapon-sword
    - ra-weapon-bow
    - ra-weapon-quiver
    - ra-weapon-shield
    - ra-weapon-battlewrench
  pulverizer:
    - dust-fluxed-electrum
  compactor:
    - plate-fluxed-electrum
  compactor-gear:
    - gear-fluxed-electrum
---

**Fluxed electrum ingots** are raw materials made from
[electrum](/docs/thermal-foundation/electrum-ingot/) and [destabilized
redstone](/docs/thermal-foundation/destabilized-redstone/).


Obtaining
---------

Fluxed electrum is an advanced alloy that can be obtained by crafting [fluxed
electrum blend](/docs/redstone-arsenal/fluxed-electrum-blend/). The blend can only be smelted
into ingots in an [induction smelter](/docs/thermal-expansion/induction-smelter/).

### Induction Smelter
{% include recipe-table.html type='smelter-te5' recipes=page.recipes.smelter no-result=true %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Pulverizer ingredient
{% include recipe-table.html type='pulverizer-te5' recipes=page.usage-recipes.pulverizer %}

### Compactor ingredient
{% include recipe-table.html type='compactor-te5' recipes=page.usage-recipes.compactor %}

### Compactor with Gearworking Die ingredient
{% include recipe-table.html type='compactor-te5-gear' recipes=page.usage-recipes.compactor-gear %}
