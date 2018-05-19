---
title: 'Augment: Pyrolytic Conversion'
nav: thermal-expansion
image:
  - alt: Pyrolytic conversion augment
    file: thermal-expansion/augment-machine-furnace-pyrolysis.png
redirect_from:
  - /docs/augment-pyrolytic-conversion/
recipes:
  crafting:
    - augment-machine-furnace-pyrolysis
recipe-list:
  - coal-coke
  - storage-block-coal-coke
  - charcoal-from-wood-log
  - charcoal-from-hay-bale
  - charcoal-from-cactus
  - charcoal-from-sugar-canes
  - charcoal-from-sawdust
---

A **pyrolytic conversion** [augment](/docs/thermal-expansion/augments/) allows for a [redstone
furnace](/docs/thermal-expansion/redstone-furnace/) to process various plant-based materials into
[charcoal](https://minecraft.gamepedia.com/Charcoal), and
[coal](https://minecraft.gamepedia.com/Coal) into [coal coke](/docs/thermal-foundation/coal-coke/),
with [creosote oil](/docs/thermal-foundation/creosote-oil/) as a byproduct.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
A pyrolytic conversion augment can be installed in the Augmentation tab in a
[redstone furnace](/docs/thermal-expansion/redstone-furnace/)'s GUI. It is a specialization that
cannot be installed together with other specialization augments.

### Effects
An installed pyrolytic conversion augment replaces a [redstone
furnace](/docs/thermal-expansion/redstone-furnace/)'s recipe set with [its own](#recipes). This
recipe set consists of processing various plant-based materials into
[charcoal](https://minecraft.gamepedia.com/Charcoal), and
[coal](https://minecraft.gamepedia.com/Coal) into [coal coke](/docs/thermal-foundation/coal-coke/).
The redstone furnace also gains the ability to produce [creosote
oil](/docs/thermal-foundation/creosote-oil/) as a byproduct.

However, an installed pyrolytic conversion augment decreases a redstone
furnace's maximum power usage by a factor of 10, thereby greatly reducing its
processing speed. It also increases the amount of energy required per operation
by 50%.

If pyrolytic conversion is installed together with other augments that increase
the amount of energy required per operation, their energy increase percentages
are added together before being applied to the amount of energy.


Recipes
-------

{% include recipe-table.html type='redstone-furnace-pyrolysis' recipes=page.recipe-list %}
