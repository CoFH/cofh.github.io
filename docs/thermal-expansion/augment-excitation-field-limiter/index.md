---
title: 'Augment: Excitation Field Limiter'
nav: thermal-expansion
image:
- alt: Excitation field limiter augment
  file: thermal-expansion/augment-dynamo-throttle.png
redirect_from:
  - /docs/thermal-expansion/augments/dynamo-advanced-throttling/
  - /docs/augment-excitation-field-limiter/
recipes:
  crafting:
    - augment-dynamo-throttle
---

An **excitation field limiter** is an [augment](/docs/thermal-expansion/augments/) that prevents a
[dynamo](/docs/thermal-expansion/dynamos/) from wasting generated [Redstone
Flux](/docs/redstone-flux/) when it cannot be emitted.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
An excitation field limiter can be installed in the Augmentation tab in a
[dynamo](/docs/thermal-expansion/dynamos/)'s GUI.

### Effects
An installed excitation field limiter lowers the minimum power output of a
[dynamo](/docs/thermal-expansion/dynamos/) to zero.

Normally, when an active dynamo cannot emit the energy it generates, it will
keep working at its minimum power output. Any more [Redstone
Flux](/docs/redstone-flux/) that is generated in this case is lost. An installed
excitation field limiter prevents this energy loss.
