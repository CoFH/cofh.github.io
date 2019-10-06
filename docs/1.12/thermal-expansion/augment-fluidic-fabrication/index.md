---
title: 'Augment: Fluidic Fabrication'
image:
- alt: Fluidic fabrication augment
  file: thermal-expansion-5/augment-machine-crafter-tank.png
redirect_from:
- /docs/augment-fluidic-fabrication/
- /docs/thermal-expansion/augment-fluidic-fabrication/
- /docs/thermal-expansion-5/augment-fluidic-fabrication/
- /docs/1.12/thermal-expansion-5/augment-fluidic-fabrication/
recipes:
  crafting:
  - te5-augment-machine-crafter-tank
---

A **fluidic fabrication** [augment](/docs/1.12/thermal-expansion/augments/) allows for a [sequential
fabricator](/docs/1.12/thermal-expansion/sequential-fabricator/) to craft recipes that include a fluid
container item (such as a filled
[bucket](https://minecraft.gamepedia.com/Bucket)) using fluids from an added
input tank.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
A fluidic fabrication augment can be installed in the Augmentation tab in a
[sequential fabricator](/docs/1.12/thermal-expansion/sequential-fabricator/)'s GUI.

### Effects
An installed fluidic fabrication augment adds a fluid tank to a [sequential
fabricator](/docs/1.12/thermal-expansion/sequential-fabricator/). When the machine is configured to use
a crafting recipe that includes a fluid container item (such as a filled
[bucket](https://minecraft.gamepedia.com/Bucket)), it can craft using fluid from
the tank instead of using the fluid container item.

As an example, this augment can be used to simplify producing [signalum
blend](/docs/1.12/thermal-foundation/signalum-blend/). In this case, [destabilized
redstone](/docs/1.12/thermal-foundation/destabilized-redstone/) can be pumped into the machine directly,
instead of supplying filled buckets and extracting empty ones.
