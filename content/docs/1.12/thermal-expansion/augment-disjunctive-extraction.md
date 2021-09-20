---
category: Augments
image:
- alt: Disjunctive extraction augment
  file: thermal-expansion/augment-dynamo-enervation-enchant.png
recipes:
  crafting-shaped:
  - te-1-12-augment-dynamo-enervation-enchant
subcategory: Dynamo
subjects:
- te-1-12-augment-dynamo-enervation-enchant
title: 'Augment: Disjunctive Extraction'
---

A **disjunctive extraction** [augment](../augments/) allows for an
[enervation dynamo](../enervation-dynamo/) to use
[enchanted](https://minecraft.gamepedia.com/Enchanting) items as fuel.


Obtaining
---------

### Crafting
{{<recipe_table type="crafting-shaped" ids_param="recipes.crafting-shaped">}}


Usage
-----

### Installation
A disjunctive extraction augment can be installed in the Augmentation tab in an
[enervation dynamo](../enervation-dynamo/)'s GUI. It is a specialization that
cannot be installed together with other specialization augments.

### Effects
An installed disjunctive extraction augment allows for an [enervation
dynamo](../enervation-dynamo/) to use
[enchanted](https://minecraft.gamepedia.com/Enchanting) items as fuel. The items
are consumed completely. The augment also quintuples the dynamo's maximum power
output. However, the dynamo can only generate energy using enchanted items.

The energy value of an enchanted item depends on the amount of different
enchantments on the item, and on the [minimum modified enchantment
level](https://minecraft.gamepedia.com/Enchanting/Levels) of those enchantments
at their corresponding levels.

    energyRF = 5,000 * ([sum of minimum modified enchantment levels] + (numEnchantments * (numEnchantments + 1) / 2))
