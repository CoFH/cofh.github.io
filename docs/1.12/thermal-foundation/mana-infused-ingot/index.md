---
title: Mana Infused Ingot
redirect_from:
- /docs/thermal-foundation/base-metals/mana-infused-metal/
- /docs/thermal-foundation/metals-and-alloys/mana-infused-metal/
- /docs/thermal-foundation/items/materials/ingots/mana-infused-ingot/
- /docs/mana-infused-ingot/
- /docs/thermal-foundation/mana-infused-ingot/
- /docs/thermal-foundation-2/mana-infused-ingot/
- /docs/1.12/thermal-foundation-2/mana-infused-ingot/
recipes:
  smelting:
  - tf-1-12-ore-processing-mithril
  - tf-1-12-ingot-mithril-from-dust
  crafting:
  - tf-1-12-pyrotheum-ore-mithril
  - tf-1-12-petrotheum-pyrotheum-ore-mithril
  - tf-1-12-pyrotheum-dust-mithril
  - tf-1-12-ingot-mithril-from-nuggets
  - tf-1-12-ingot-mithril-from-block
  smelter:
  - ore-processing-sand-mithril
  - ore-processing-rich-slag-mithril
  - ore-processing-cinnabar-mithril
  - dust-smelting-mithril
  - recycling-gear-mithril
  - recycling-plate-mithril
usage-recipes:
  crafting:
  - tf-1-12-petrotheum-ingot-mithril
  - tf-1-12-nugget-mithril
  - tf-1-12-gear-mithril
  - tf-1-12-storage-block-mithril
  pulverizer:
  - dust-mithril
  compactor:
  - plate-mithril
  compactor-coin:
  - coin-mithril
  compactor-gear:
  - gear-mithril
---

![Mana infused ingot](/assets/images/thermal-foundation-2/ingot-mithril.png){:style="height: 128px"}


**Mana infused ingots** are raw materials obtained from [mana infused
ore](/docs/1.12/thermal-foundation/mana-infused-ore/). They are unobtainable by default, because mana
infused ore does not generate in the world by default.


Obtaining
---------

### Smelting
{% include recipe-table.html type='smelting' recipes=page.recipes.smelting no-result=true %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Induction Smelter
{% include recipe-table.html type='te-1-12-smelter' recipes=page.recipes.smelter no-result=true %}


Usage
-----

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Pulverizer ingredient
{% include recipe-table.html type='te-1-12-pulverizer' recipes=page.usage-recipes.pulverizer %}

### Compactor ingredient
{% include recipe-table.html type='te-1-12-compactor' recipes=page.usage-recipes.compactor %}

### Compactor with Numismatic Press ingredient
{% include recipe-table.html type='te-1-12-compactor-coin' recipes=page.usage-recipes.compactor-coin %}

### Compactor with Gearworking Die ingredient
{% include recipe-table.html type='te-1-12-compactor-gear' recipes=page.usage-recipes.compactor-gear %}


Trivia
------

* Mana infused ingots are internally registered as "mithril ingots".
