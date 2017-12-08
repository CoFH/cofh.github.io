---
title: Aqueous Accumulator
nav: thermal-expansion
redirect_from:
  - /docs/thermal-expansion/machines/aqueous-accumulator/
  - /docs/thermal-expansion/devices/aqueous-accumulator/
recipes:
  crafting:
    - device-water-gen
---

![Aqueous accumulator](/assets/images/thermal-expansion/aqueous-accumulator.png){:style="height: 128px"}

> No, it does not work with lava. You monster.


An **aqueous accumulator** is a [device](/docs/devices/) that generates
[water](https://minecraft.gamepedia.com/Water) by extracting it from the
device's surroundings.


Obtaining
---------

A placed aqueous accumulator can be instantly picked up by dismantling it with a
[crescent hammer](/docs/crescent-hammer/). Its configuration is preserved in the
item. It can also be mined using a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe).

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Placement
When placed, an aqueous accumulator faces the player. It can face any of the
four cardinal directions, and can be rotated using a [crescent
hammer](/docs/crescent-hammer/) or similar.

### Operation
When placed between at least two [water](https://minecraft.gamepedia.com/Water)
source blocks, an aqueous accumulator will start producing water. The rate at
which water is produced depends on the amount of adjacent water sources.

| Adjacent water sources | Production rate |
|---
| 2 | 100 mB/t |
| 3 | 200 mB/t |
| 4 | 300 mB/t |
| 5 | 400 mB/t |
| 6 | 500 mB/t |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}

Water is not actually produced every tick, but in batches every 40 ticks (2
seconds).

An aqueous accumulator will also produce water when it
[rains](https://minecraft.gamepedia.com/Rain) on top of it. In this case, water
is produced at a rate of 100 mB/t.

If enabled, an aqueous accumulator will also produce water without adjacent
water sources or rain. In this case, water is produced at a rate of 2 mB/t. This
is disabled by default.

Aqueous accumulators do not work in the
[Nether](https://minecraft.gamepedia.com/The_Nether).

### Output
[Water](https://minecraft.gamepedia.com/Water) can exit an aqueous accumulator
through its sides. Every side of an aqueous accumulator may be configured to be
able to output water.

An aqueous accumulator can automatically transfer water out of any configured
output sides. This is called auto-output, and occurs every 40 ticks (2 seconds),
after water is produced.

Which sides can output water and whether auto-output is enabled can be
configured using the Configuration tab in the device's GUI.

### Redstone control
An aqueous accumulator may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The aqueous accumulator works whenever possible.
This is the default mode.

Low
: The aqueous accumulator works when *not* powered. When powered, it stops
working.

High
: The aqueous accumulator only works when powered.

The current mode can be set using the Redstone Control tab in the device's GUI.

### Security
An aqueous accumulator can have a [signalum security
lock](/docs/signalum-security-lock/) installed to restrict who can access it.

### Redprints
An aqueous accumulator's configuration can be saved on a
[redprint](/docs/redprint/) to be copied to other aqueous accumulators.


Trivia
------

* Aqueous accumulators take advantage of the fact that two
  [water](https://minecraft.gamepedia.com/Water) source blocks will fill an
  empty space between them by creating another water source, which makes it
  possible to obtain infinite water.
