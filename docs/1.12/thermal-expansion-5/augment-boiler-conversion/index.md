---
title: 'Augment: Boiler Conversion'
image:
- alt: Boiler conversion augment
  file: thermal-expansion-5/augment-dynamo-boiler.gif
redirect_from:
- /docs/augment-boiler-conversion/
- /docs/thermal-expansion/augment-boiler-conversion/
- /docs/thermal-expansion-5/augment-boiler-conversion/
recipes:
  crafting:
  - te5-augment-dynamo-boiler
---

A **boiler conversion** is an [augment](/docs/1.12/thermal-expansion-5/augments/) that converts a
[steam](/docs/1.12/thermal-expansion-5/steam-dynamo/), [magmatic](/docs/1.12/thermal-expansion-5/magmatic-dynamo/) or [compression
dynamo](/docs/1.12/thermal-expansion-5/compression-dynamo/) into a [steam](/docs/1.12/thermal-foundation-2/steam/) boiler.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
A boiler conversion can be installed in the Augmentation tab in a
[steam](/docs/1.12/thermal-expansion-5/steam-dynamo/), [magmatic](/docs/1.12/thermal-expansion-5/magmatic-dynamo/) or [compression
dynamo](/docs/1.12/thermal-expansion-5/compression-dynamo/)'s GUI. It is a specialization that cannot be
installed together with other specialization augments.

### Effects
A [steam](/docs/1.12/thermal-expansion-5/steam-dynamo/), [magmatic](/docs/1.12/thermal-expansion-5/magmatic-dynamo/) or
[compression dynamo](/docs/1.12/thermal-expansion-5/compression-dynamo/) with a boiler conversion
installed uses fuel to convert [water](https://minecraft.gamepedia.com/Water)
into [steam](/docs/1.12/thermal-foundation-2/steam/) instead of generating [Redstone
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
| Dynamo | Max. power output modifier | Energy modifier | Note |
|---
| [Steam Dynamo](/docs/1.12/thermal-expansion-5/steam-dynamo/) | × 4 | + 15% |
| [Magmatic Dynamo](/docs/1.12/thermal-expansion-5/magmatic-dynamo/) | × 2 | - 40% |
| [Compression Dynamo](/docs/1.12/thermal-expansion-5/compression-dynamo/) | × 2 | - 40% | Coolant fuel efficiency bonus is removed. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}

If a boiler conversion is installed together with other augments that affect the
amount of energy generated from each unit of fuel, their energy
increase/decrease percentages are added together before being applied to the
amount of energy.

Generating energy using dynamos with boiler conversions installed and steam
dynamos with [turbine conversions](/docs/1.12/thermal-expansion-5/augment-turbine-conversion/) installed
is more fuel efficient than using dynamos to generate energy directly. A dynamo
with a boiler conversion installed produces steam at the same rates at which it
would normally generate energy (replacing RF with mB), while a steam dynamo with
a turbine conversion installed generates 2 RF of energy per mB of steam.
