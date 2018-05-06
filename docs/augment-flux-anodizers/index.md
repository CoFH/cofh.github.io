---
title: 'Augment: Flux Anodizers'
nav: thermal-expansion
image:
  - alt: Flux anodizers augment
    file: thermal-expansion/augment-machine-furnace-ore.png
recipes:
  crafting:
    - augment-machine-furnace-ore
---

A **flux anodizers** [augment](/docs/augments/) allows for a [redstone
furnace](/docs/redstone-furnace/) to process ores more efficiently.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
A flux anodizers augment can be installed in the Augmentation tab in a [redstone
furnace](/docs/redstone-furnace/)'s GUI. It is a specialization that cannot be
installed together with other specialization augments.

### Effects
A [redstone furnace](/docs/redstone-furnace/) with flux anodizers installed
produces 1.5 as much of the product of processing any ore. The output amount is
rounded down when necessary, but is always at least 2.

However, a redstone furnace with flux anodizers installed cannot process
anything other than ores, and the amount of energy required per operation is
increased by 50%.

If flux anodizers are installed together with other augments that increase the
amount of energy required per operation, their energy increase percentages are
added together before being applied to the amount of energy.
