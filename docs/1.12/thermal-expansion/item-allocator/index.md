---
title: Item Allocator
redirect_from:
- /docs/thermal-expansion/devices/item-allocator/
- /docs/item-allocator/
- /docs/thermal-expansion/item-allocator/
- /docs/thermal-expansion-5/item-allocator/
- /docs/1.12/thermal-expansion-5/item-allocator/
recipes:
  crafting:
  - te-1-12-device-item-buffer
---

![Item allocator](/assets/images/thermal-expansion-5/item-allocator.png){:style="height: 128px"}

> Better than a [hopper](https://minecraft.gamepedia.com/Hopper), really!


An **item allocator** (also known as an **item buffer**) is a
[device](/docs/1.12/thermal-expansion/devices/) that stores and transfers items between adjacent blocks
or transport systems.


Obtaining
---------

A placed item allocator can be instantly picked up by dismantling it with a
[wrench](/docs/1.12/wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe).

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Placement
When placed, an item allocator faces the player. It can face any of the four
cardinal directions, and can be rotated using a [wrench](/docs/1.12/wrenches/).

### Operation
Items can enter and exit an item allocator through its sides. It can store items
in 9 buffer slots.

An item allocator can automatically transfer items out of any configured output
sides, evenly dividing them if multiple output sides are configured. This is
called auto-output. It can also transfer items from adjacent inventories into
any configured input sides. This is called auto-input. Auto-output and
auto-input occur every 16 ticks (0.8 seconds) if the item allocator is active.

The amount of items that an item allocator transfers per cycle can be configured
separately for auto-output and auto-input. It can, at most, transfer one full
stack at a time.

Which sides can output and/or accept items and whether auto-output and
auto-input are enabled can be configured using the Configuration tab in the
device's GUI.

### Filtering
An item allocator can be configured to only accept and transfer items that match
a given list of items. This can be done by using the placed item allocator while
sneaking. It has various options that determine how this list is used to match
items.

Blacklist/Whitelist
: Treat the list of items as a blacklist (store all items except these) or as a
whitelist (only store these items). The list is used as a blacklist by default.

Ore Dictionary
: Match items that are considered equivalent, like the various versions of
copper and tin ingots added by different mods. This is ignored by default.

Metadata
: Match items by their exact metadata / damage value. This is ignored by
default.

NBT
: Match items by their exact NBT data. This is ignored by default.

### Redstone control
An item allocator may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The item allocator is always active. This is the
default mode.

Low
: The item allocator works when *not* powered. When powered, it stops working.

High
: The item allocator only works when powered.

The current mode can be set using the Redstone Control tab in the device's GUI.

### Security
An item allocator can have a [signalum security
lock](/docs/1.12/thermal-foundation/signalum-security-lock/) installed to restrict who can access it.

### Redprints
An item allocator's configuration can be saved on a [redprint](/docs/1.12/thermal-foundation/redprint/)
to be copied to other item allocators.

### Light source
When an item allocator is active, it emits a light level of 5.

### Redstone comparators
When placed next to an item allocator, a [redstone
comparator](https://minecraft.gamepedia.com/Redstone_Comparator) emits a signal
strength of between 0 and 15, depending on how full the item allocator's buffer
slots are.
