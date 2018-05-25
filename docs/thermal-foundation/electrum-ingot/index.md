---
title: Electrum Ingot
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/alloys/electrum/
  - /docs/thermal-foundation/metals-and-alloys/electrum/
  - /docs/thermal-foundation/items/materials/ingots/electrum-ingot/
  - /docs/electrum-ingot/
recipes:
  smelting:
    - tf2-ingot-electrum-from-dust
  crafting:
    - tf2-ingot-electrum-from-nuggets
    - tf2-ingot-electrum-from-block
  smelter:
    - dust-smelting-electrum
    - ingot-electrum-from-dust-gold-and-dust-silver
    - ingot-electrum-from-dust-gold-and-ingot-silver
    - ingot-electrum-from-ingot-gold-and-dust-silver
    - ingot-electrum-from-ingot-gold-and-ingot-silver
    - recycling-gear-electrum
    - recycling-plate-electrum
    - recycling-tool-pickaxe-electrum
    - recycling-tool-shovel-electrum
    - recycling-tool-axe-electrum
    - recycling-tool-hoe-electrum
    - recycling-tool-fishing-rod-electrum
    - recycling-tool-shears-electrum
    - recycling-tool-hammer-electrum
    - recycling-tool-sickle-electrum
    - recycling-weapon-sword-electrum
    - recycling-weapon-bow-electrum
    - recycling-weapon-shield-electrum
    - recycling-armor-helmet-electrum
    - recycling-armor-chestplate-electrum
    - recycling-armor-leggings-electrum
    - recycling-armor-boots-electrum
usage-recipes:
  crafting:
    - tf2-nugget-electrum
    - tf2-gear-electrum
    - tf2-storage-block-electrum
    - tf2-redstone-coil-electrum
    - tf2-upgrade-kit-reinforced
    - te5-dynamo-enervation
    - te5-flux-capacitor-reinforced
    - te5-reservoir-reinforced
    - te5-reservoir-signalum
    - te5-satchel-reinforced
    - te5-augment-dynamo-throttle
    - td2-fluxduct-reinforced-empty
    - td2-fluxduct-super-empty
    - td2-fluiduct-energy-three
    - td2-itemduct-energy-three
    - td2-itemduct-energy-fast-three
    - td2-servo-reinforced
    - td2-servo-reinforced-upgrade
    - td2-filter-reinforced
    - td2-filter-reinforced-upgrade
    - td2-retriever-reinforced
    - td2-retriever-reinforced-upgrade
    - tc-watering-can-reinforced
    - ti-fluxbore-reinforced
    - ti-fluxsaw-reinforced
    - ti-fluxomagnet-reinforced
    - ti-hypoinfuser-reinforced
    - ti-alchemical-quiver-reinforced
    - tf2-tool-pickaxe-electrum
    - tf2-tool-shovel-electrum
    - tf2-tool-axe-electrum
    - tf2-tool-hoe-electrum
    - tf2-tool-fishing-rod-electrum
    - tf2-tool-shears-electrum
    - tf2-tool-hammer-electrum
    - tf2-tool-sickle-electrum
    - tf2-weapon-sword-electrum
    - tf2-weapon-bow-electrum
    - tf2-weapon-shield-electrum
    - tf2-armor-helmet-electrum
    - tf2-armor-chestplate-electrum
    - tf2-armor-leggings-electrum
    - tf2-armor-boots-electrum
  pulverizer:
    - dust-electrum
  compactor:
    - plate-electrum
  compactor-coin:
    - coin-electrum
  compactor-gear:
    - gear-electrum
---

![Electrum ingot](/assets/images/thermal-foundation/ingot-electrum.png){:style="height: 128px"}


**Electrum ingots** are raw materials made from
[gold](https://minecraft.gamepedia.com/Gold_Ingot) and
[silver](/docs/thermal-foundation/silver-ingot/).


Obtaining
---------

Electrum can be obtained by combining
[gold](https://minecraft.gamepedia.com/Gold_Ingot) and
[silver](/docs/thermal-foundation/silver-ingot/), either by crafting [electrum
blend](/docs/thermal-foundation/electrum-blend/) or by using an [induction
smelter](/docs/thermal-expansion/induction-smelter/).

### Smelting
{% include recipe-table.html type='smelting' recipes=page.recipes.smelting no-result=true %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Induction Smelter
{% include recipe-table.html type='smelter-te5' recipes=page.recipes.smelter no-result=true %}


Usage
-----

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Pulverizer ingredient
{% include recipe-table.html type='pulverizer-te5' recipes=page.usage-recipes.pulverizer %}

### Compactor ingredient
{% include recipe-table.html type='compactor-te5' recipes=page.usage-recipes.compactor %}

### Compactor with Numismatic Press ingredient
{% include recipe-table.html type='compactor-te5-coin' recipes=page.usage-recipes.compactor-coin %}

### Compactor with Gearworking Die ingredient
{% include recipe-table.html type='compactor-te5-gear' recipes=page.usage-recipes.compactor-gear %}
