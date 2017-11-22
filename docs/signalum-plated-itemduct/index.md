---
title: Signalum-Plated Itemduct
nav: thermal-dynamics
image:
  - alt: Signalum-plated itemduct
    file: thermal-dynamics/itemduct-signalum-plated.png
  - alt: Signalum-plated itemduct (opaque)
    file: thermal-dynamics/itemduct-signalum-plated-opaque.png
recipes:
  crafting:
    - itemduct-energy-one
    - itemduct-energy-three
    - itemduct-energy-opaque-one
    - itemduct-energy-opaque-three
    - itemduct-energy-opaque-from-transparent
    - itemduct-energy-transparent-from-opaque
usage-recipes:
  transposer-fill:
    - itemduct-energy-fast
    - itemduct-energy-fast-opaque
---

A **signalum-plated itemduct** is a type of [itemduct](/docs/itemduct/) that
transfers both items and [Redstone Flux](/docs/redstone-flux/).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Item and energy transfer
A signalum-plated itemduct works the same way as a regular
[itemduct](/docs/itemduct/). However, it also transfers [Redstone
Flux](/docs/redstone-flux/) like a [fluxduct](/docs/fluxducts/), at up to 4,000
RF/t per connection.

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-fill' recipes=page.usage-recipes.transposer-fill %}
