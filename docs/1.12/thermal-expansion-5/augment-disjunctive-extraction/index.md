---
title: 'Augment: Disjunctive Extraction'
nav: thermal-expansion-5
image:
- alt: Disjunctive extraction augment
  file: thermal-expansion-5/augment-dynamo-enervation-enchant.png
redirect_from:
- /docs/augment-disjunctive-extraction/
- /docs/thermal-expansion/augment-disjunctive-extraction/
- /docs/thermal-expansion-5/augment-disjunctive-extraction/
recipes:
  crafting:
  - te5-augment-dynamo-enervation-enchant
---

A **disjunctive extraction** [augment](/docs/1.12/thermal-expansion-5/augments/) allows for an
[enervation dynamo](/docs/1.12/thermal-expansion-5/enervation-dynamo/) to use
[enchanted](https://minecraft.gamepedia.com/Enchanting) items as fuel.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
A disjunctive extraction augment can be installed in the Augmentation tab in an
[enervation dynamo](/docs/1.12/thermal-expansion-5/enervation-dynamo/)'s GUI. It is a specialization that
cannot be installed together with other specialization augments.

### Effects
An installed disjunctive extraction augment allows for an [enervation
dynamo](/docs/1.12/thermal-expansion-5/enervation-dynamo/) to use
[enchanted](https://minecraft.gamepedia.com/Enchanting) items as fuel. The items
are consumed completely. The augment also quintuples the dynamo's maximum power
output. However, the dynamo can only generate energy using enchanted items.

The energy value of an enchanted item depends on the amount of different
enchantments on the item, and on the [minimum modified enchantment
level](https://minecraft.gamepedia.com/Enchanting/Levels) of those enchantments
at their corresponding levels.

    energyRF = 5000 * ([sum of minimum modified enchantment levels] + (numEnchantments * (numEnchantments + 1) / 2))
