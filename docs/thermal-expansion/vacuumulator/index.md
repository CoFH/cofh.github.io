---
title: Vacuumulator
nav: thermal-expansion
image:
  - alt: Vacuumulator
    file: thermal-expansion/vacuumulator.png
recipes:
  crafting:
    - te5-device-item-collector
---

> Yes, this block sucks.


A **vacuumulator** (also known as an **item collector**) is a
[device](/docs/thermal-expansion/devices/) that collects nearby dropped items.


Obtaining
---------

A placed vacuumulator can be instantly picked up by dismantling it with a
[wrench](/docs/wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe).

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Placement
When placed, a vacuumulator faces the player. It can face any of the four
cardinal directions, and can be rotated using a [wrench](/docs/wrenches/).

### Operation
A vacuumulator collects dropped items in an 11x11x11 area. It attempts to
collect items every 16 ticks (0.8 seconds), or directly after it is activated by
a [redstone signal](#redstone-control).

### Input and output
Items can exit a vacuumulator through its sides. Every side of the device may be
configured to be able to output items.

A vacuumulator can automatically transfer items out of any configured output
sides. This is called auto-output, and occurs every 16 ticks (0.8 seconds),
right before more items are collected. The device can automatically transfer up
to 64 items at a time.

Which sides can output items and whether auto-output is enabled can be
configured using the Configuration tab in the device's GUI.

### Filtering
A vacuumulator can be configured to only collect items that match a given list
of items. This can be done by using the placed vacuumulator while sneaking. It
has various options that determine how this list is used to match items.

Blacklist/Whitelist
: Treat the list of items as a blacklist (collect all items except these) or as
a whitelist (only collect these items). The list is used as a blacklist by
default.

Ore Dictionary
: Match items that are considered equivalent, like the various versions of
copper and tin ingots added by different mods. This is ignored by default.

Metadata
: Match items by their exact metadata / damage value. This is ignored by
default.

NBT
: Match items by their exact NBT data. This is ignored by default.

### Redstone control
A vacuumulator may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The vacuumulator is always active. This is the
default mode.

Low
: The vacuumulator works when *not* powered. When powered, it stops working.

High
: The vacuumulator only works when powered.

The current mode can be set using the Redstone Control tab in the device's GUI.

### Security
A vacuumulator can have a [signalum security
lock](/docs/thermal-foundation/signalum-security-lock/) installed to restrict
who can access it.

### Redprints
A vacuumulator's configuration can be saved on a
[redprint](/docs/thermal-foundation/redprint/) to be copied to other
vacuumulators.
