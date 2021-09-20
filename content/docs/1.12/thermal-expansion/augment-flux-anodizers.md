---
category: Augments
image:
- alt: Flux anodizers augment
  file: thermal-expansion/augment-machine-furnace-ore.png
recipes:
  crafting-shaped:
  - te-1-12-augment-machine-furnace-ore
subcategory: Machine
subjects:
- te-1-12-augment-machine-furnace-ore
title: 'Augment: Flux Anodizers'
---

A **flux anodizers** [augment](../augments/) allows for a [redstone
furnace](../redstone-furnace/) to process ores more efficiently.


Obtaining
---------

### Crafting
{{<recipe_table type="crafting-shaped" ids_param="recipes.crafting-shaped">}}


Usage
-----

### Installation
A flux anodizers augment can be installed in the Augmentation tab in a [redstone
furnace](../redstone-furnace/)'s GUI. It is a specialization that cannot be
installed together with other specialization augments.

### Effects
A [redstone furnace](../redstone-furnace/) with flux anodizers installed
produces 1.5 as much of the product of processing any ore. The output amount is
rounded down when necessary, but is always at least 2.

However, a redstone furnace with flux anodizers installed cannot process
anything other than ores, and the amount of energy required per operation is
increased by 50%.

If flux anodizers are installed together with other augments that increase the
amount of energy required per operation, their energy increase percentages are
added together before being applied to the amount of energy.
