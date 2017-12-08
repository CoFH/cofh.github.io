---
title: 'Augment: Turbine Conversion'
nav: thermal-expansion
image:
- alt: Turbine conversion augment
  file: thermal-expansion/augment-dynamo-steam-turbine.png
recipes:
  crafting:
    - augment-dynamo-steam-turbine
---

A **turbine conversion** is an [augment](/docs/augments/) that changes a [steam
dynamo](/docs/steam-dynamo/) to work on [steam](/docs/steam/) supplied from an
external source.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
A turbine conversion can be installed in the Augmentation tab in a [steam
dynamo](/docs/steam-dynamo/)'s GUI. It is a specialization that cannot be
installed together with other specialization augments.

### Effects
A [steam dynamo](/docs/steam-dynamo/) with a turbine conversion installed
generates [Redstone Flux](/docs/redstone-flux/) using [steam](/docs/steam/)
instead of [water](https://minecraft.gamepedia.com/Water) and solid fuel. It
generates 2 RF of energy per mB of steam, regardless of other installed
[augments](/docs/augments/).

When the dynamo is inactive, any steam stored inside gradually dissipates. This
can cause energy loss when steam is being supplied while the dynamo is inactive.

An installed turbine conversion quadruples the maximum power output of a steam
dynamo.

Generating energy using dynamos with [boiler
conversions](/docs/augment-boiler-conversion/) installed and steam dynamos with
turbine conversions installed is more fuel efficient than using dynamos to
generate energy directly. A dynamo with a boiler conversion installed produces
steam at the same rates at which it would normally generate energy (replacing RF
with mB), while a steam dynamo with a turbine conversion installed generates 2
RF of energy per mB of steam.
