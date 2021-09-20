---
category: Augments
image:
- alt: Excitation field limiter augment
  file: thermal-expansion/augment-dynamo-throttle.png
recipes:
  crafting-shaped:
  - te-1-12-augment-dynamo-throttle
subcategory: Dynamo
subjects:
- te-1-12-augment-dynamo-throttle
title: 'Augment: Excitation Field Limiter'
---

An **excitation field limiter** is an [augment](../augments/) that prevents a
[dynamo](../dynamos/) from wasting generated [Redstone
Flux](/docs/redstone-flux/) when it cannot be emitted.


Obtaining
---------

### Crafting
{{<recipe_table type="crafting-shaped" ids_param="recipes.crafting-shaped">}}


Usage
-----

### Installation
An excitation field limiter can be installed in the Augmentation tab in a
[dynamo](../dynamos/)'s GUI.

### Effects
An installed excitation field limiter lowers the minimum power output of a
[dynamo](../dynamos/) to zero.

Normally, when an active dynamo cannot emit the energy it generates, it will
keep working at its minimum power output. Any more [Redstone
Flux](/docs/redstone-flux/) that is generated in this case is lost. An installed
excitation field limiter prevents this energy loss.
