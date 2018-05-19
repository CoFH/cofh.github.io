---
title: 'Augment: Boiler Conversion'
nav: thermal-expansion
image:
- alt: Boiler conversion augment
  file: thermal-expansion/augment-dynamo-boiler.gif
redirect_from:
  - /docs/augment-boiler-conversion/
recipes:
  crafting:
    - augment-dynamo-boiler
---

A **boiler conversion** is an [augment](/docs/augments/) that converts a
[steam](/docs/steam-dynamo/), [magmatic](/docs/magmatic-dynamo/) or [compression
dynamo](/docs/compression-dynamo/) into a [steam](/docs/steam/) boiler.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
A boiler conversion can be installed in the Augmentation tab in a
[steam](/docs/steam-dynamo/), [magmatic](/docs/magmatic-dynamo/) or [compression
dynamo](/docs/compression-dynamo/)'s GUI. It is a specialization that cannot be
installed together with other specialization augments.

### Effects
A [steam](/docs/steam-dynamo/), [magmatic](/docs/magmatic-dynamo/) or
[compression dynamo](/docs/compression-dynamo/) with a boiler conversion
installed uses fuel to convert [water](https://minecraft.gamepedia.com/Water)
into [steam](/docs/steam/) instead of generating [Redstone
Flux](/docs/redstone-flux/). It produces and outputs steam at the same rates at
which it would normally generate and emit energy, replacing the energy unit RF
with the fluid unit mB.

A dynamo with a boiler conversion installed always produces steam at its maximum
power output, even if it cannot output the steam it produces. This can cause
energy loss if the produced steam is not used or stored.

An installed boiler conversion increases the maximum power output of a dynamo,
and changes the amount of energy it would generate from each unit of fuel. This
differs depending on the type of dynamo.

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Dynamo | Max. power output modifier | Energy modifier |
|---
| [Steam Dynamo](/docs/steam-dynamo/) | × 4 | + 15% |
| [Magmatic Dynamo](/docs/magmatic-dynamo/) | × 2 | - 30% |
| [Compression Dynamo](/docs/compression-dynamo/) | × 2 | - 40% |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

If a boiler conversion is installed together with other augments that affect the
amount of energy generated from each unit of fuel, their energy
increase/decrease percentages are added together before being applied to the
amount of energy.

Generating energy using dynamos with boiler conversions installed and steam
dynamos with [turbine conversions](/docs/augment-turbine-conversion/) installed
is more fuel efficient than using dynamos to generate energy directly. A dynamo
with a boiler conversion installed produces steam at the same rates at which it
would normally generate energy (replacing RF with mB), while a steam dynamo with
a turbine conversion installed generates 2 RF of energy per mB of steam.
