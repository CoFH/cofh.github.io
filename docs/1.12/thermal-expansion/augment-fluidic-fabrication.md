---
category: Augments
image:
- alt: Fluidic fabrication augment
  file: thermal-expansion/augment-machine-crafter-tank.png
recipes:
  crafting-shaped:
  - te-1-12-augment-machine-crafter-tank
subcategory: Machine
subjects:
- te-1-12-augment-machine-crafter-tank
title: 'Augment: Fluidic Fabrication'
---

A **fluidic fabrication** [augment](../augments/) allows for a [sequential
fabricator](../sequential-fabricator/) to craft recipes that include a fluid
container item (such as a filled
[bucket](https://minecraft.gamepedia.com/Bucket)) using fluids from an added
input tank.


Obtaining
---------

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.recipes.crafting-shaped no-result=true %}


Usage
-----

### Installation
A fluidic fabrication augment can be installed in the Augmentation tab in a
[sequential fabricator](../sequential-fabricator/)'s GUI.

### Effects
An installed fluidic fabrication augment adds a fluid tank to a [sequential
fabricator](../sequential-fabricator/). When the machine is configured to use
a crafting recipe that includes a fluid container item (such as a filled
[bucket](https://minecraft.gamepedia.com/Bucket)), it can craft using fluid from
the tank instead of using the fluid container item.

As an example, this augment can be used to simplify producing [signalum
blend](../../thermal-foundation/signalum-blend/). In this case, [destabilized
redstone](../../thermal-foundation/destabilized-redstone/) can be pumped into the machine directly,
instead of supplying filled buckets and extracting empty ones.
