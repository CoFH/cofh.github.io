---
category: Augments
image:
- alt: Pyrolytic conversion augment
  file: thermal-expansion/augment-machine-furnace-pyrolysis.png
recipe-list:
- coal-coke
- storage-block-coal-coke
- charcoal-from-wood-log
- charcoal-from-hay-bale
- charcoal-from-cactus
- charcoal-from-sugar-canes
- charcoal-from-sawdust
recipes:
  crafting-shaped:
  - te-1-12-augment-machine-furnace-pyrolysis
subcategory: Machine
subjects:
- te-1-12-augment-machine-furnace-pyrolysis
title: 'Augment: Pyrolytic Conversion'
---

A **pyrolytic conversion** [augment](../augments/) allows for a [redstone
furnace](../redstone-furnace/) to process various plant-based materials into
[charcoal](https://minecraft.gamepedia.com/Charcoal), and
[coal](https://minecraft.gamepedia.com/Coal) into [coal coke](../../thermal-foundation/coal-coke/),
with [creosote oil](../../thermal-foundation/creosote-oil/) as a byproduct.


Obtaining
---------

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.recipes.crafting-shaped no-result=true %}


Usage
-----

### Installation
A pyrolytic conversion augment can be installed in the Augmentation tab in a
[redstone furnace](../redstone-furnace/)'s GUI. It is a specialization that
cannot be installed together with other specialization augments.

### Effects
An installed pyrolytic conversion augment replaces a [redstone
furnace](../redstone-furnace/)'s recipe set with [its own](#recipes). This
recipe set consists of processing various plant-based materials into
[charcoal](https://minecraft.gamepedia.com/Charcoal), and
[coal](https://minecraft.gamepedia.com/Coal) into [coal coke](../../thermal-foundation/coal-coke/).
The redstone furnace also gains the ability to produce [creosote
oil](../../thermal-foundation/creosote-oil/) as a byproduct.

However, an installed pyrolytic conversion augment decreases a redstone
furnace's maximum power usage by a factor of 10, thereby greatly reducing its
processing speed. It also increases the amount of energy required per operation
by 50%.

If pyrolytic conversion is installed together with other augments that increase
the amount of energy required per operation, their energy increase percentages
are added together before being applied to the amount of energy.


Recipes
-------

{% include docs/recipe/table/table.html recipe-type='redstone-furnace-pyrolysis' recipe-ids=page.recipe-list %}
