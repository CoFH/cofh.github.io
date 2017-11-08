---
title: 'Augment: Flux Anodizers'
nav: thermal-expansion
image:
  - alt: Flux anodizers augment
    file: thermal-expansion/augment-machine-furnace-ore.png
recipes:
  crafting:
    - augment-machine-furnace-ore
recipe-list:
  - ore-processing-iron
  - ore-processing-gold
  - ore-processing-copper
  - ore-processing-tin
  - ore-processing-silver
  - ore-processing-lead
  - ore-processing-nickel
  - ore-processing-platinum
---

A **flux anodizers** [augment](/docs/augments/) doubles the amount of ingots a
[redstone furnace](/docs/redstone-furnace/) produces when processing metal ores.


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
An installed flux anodizers augment replaces a [redstone
furnace](/docs/redstone-furnace/)'s recipe set with [its own](#recipes). This
recipe set consists only of smelting metal ores into ingots, though with double
the amount of output.

A flux anodizers augment also increases the amount of energy required per
operation by 50%. For convenience, the energy amounts shown below are the
resulting amounts after this increase is applied. The true energy amounts are
the listed amounts divided by 1.5. When other augments are installed that
increase the amount of energy required per operation, all the energy increase
percentages are added together before being applied to the true amount of
energy, including the 50% from this augment.


Recipes
-------

{% include recipe-table.html type='redstone-furnace-ore' recipes=page.recipe-list %}
