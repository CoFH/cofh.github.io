---
category: Ducts
subcategory: Energy
image:
- alt: Cryo-stabilized fluxduct
  file: thermal-dynamics/fluxduct-cryo-stabilized.png
recipes:
  crafting-shaped:
  - td-1-12-fluxduct-super-empty
  transposer-fill:
  - td-1-12-fluxduct-super
subjects:
- td-1-12-fluxduct-super
title: Cryo-Stabilized Fluxduct
---

A **cryo-stabilized fluxduct** is a [fluxduct](../fluxducts/) of the sixth and
highest tier. It can transfer any amount of power up to 2,147,483,647 RF/t. It 
does not store any power internally.


Obtaining
---------

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.recipes.crafting-shaped %}

### Fluid Transposer
{% include docs/recipe/table/table.html recipe-type='transposer-fill' recipe-ids=page.recipes.transposer-fill %}


Usage
-----

### Energy transfer
A cryo-stabilized fluxduct works mostly the same way as other
[fluxducts](../fluxducts/). However, it can transfer a practically unlimited amount of
[Redstone Flux](/docs/redstone-flux/) per tick. A network of cryo-stabilized
fluxducts also does not store any energy.
