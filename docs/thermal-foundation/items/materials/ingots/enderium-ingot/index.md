---
title: Enderium Ingot
redirect_from:
  - /docs/thermal-foundation/alloys/enderium/
  - /docs/thermal-foundation/metals-and-alloys/enderium/
recipes:
  crafting:
    - ingot-enderium-from-nuggets
    - ingot-enderium-from-block
  smelter:
    - dust-smelting-enderium
usage-recipes:
  crafting:
    - nugget-enderium
    - gear-enderium
    - storage-block-enderium
    - flux-capacitor-resonant
    - satchel-resonant
    - upgrade-kit-resonant
    - fluxduct-resonant-empty-three
    - fluxduct-resonant-three
    - servo-resonant
    - servo-resonant-upgrade
    - filter-resonant
    - filter-resonant-upgrade
    - retriever-resonant
    - retriever-resonant-upgrade
    - watering-can-resonant
  pulverizer:
    - dust-enderium
  compactor-plate:
    - plate-enderium-from-ingot
  compactor-mint:
    - coin-enderium-from-ingot
---

![Enderium ingot](/assets/images/thermal-foundation/ingot-enderium.png){:style="height: 128px"}


**Enderium ingots** are raw materials made from
[lead](/docs/thermal-foundation/items/materials/ingots/lead-ingot/),
[platinum](/docs/thermal-foundation/items/materials/ingots/platinum-ingot/) and
[resonant ender](/docs/thermal-foundation/fluids/molten/resonant-ender/).


Obtaining
---------

Enderium is an advanced alloy that can be obtained by crafting [enderium
blend](/docs/thermal-foundation/items/materials/dusts/enderium-blend/). The
blend can only be smelted into ingots in an [induction
smelter](/docs/thermal-expansion/machines/induction-smelter/).

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Induction Smelter
{% include recipe-table.html type='smelter' recipes=page.recipes.smelter no-result=true %}


Usage
-----

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Pulverizer ingredient
{% include recipe-table.html type='pulverizer' recipes=page.usage-recipes.pulverizer %}

### Compactor ingredient
{% include recipe-table.html type='compactor-plate' recipes=page.usage-recipes.compactor-plate %}

### Compactor with Numismatic Press ingredient
{% include recipe-table.html type='compactor-mint' recipes=page.usage-recipes.compactor-mint %}
