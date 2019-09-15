---
title: Factorizer
redirect_from:
- /docs/factorizer/
- /docs/thermal-expansion/factorizer/
- /docs/thermal-expansion-5/factorizer/
image:
- alt: Factorizer
  file: thermal-expansion-5/factorizer.png
recipes:
  crafting:
  - te5-device-factorizer
---

> Refactor your storage!


A **factorizer** is a [device](/docs/1.12/thermal-expansion-5/devices/) that combines and splits various
items.


Obtaining
---------

A placed factorizer can be instantly picked up by dismantling it with a
[wrench](/docs/1.12/wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe).

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Placement
When placed, a factorizer faces the player. It can face any of the four cardinal
directions, and can be rotated using a [wrench](/docs/1.12/wrenches/).

### Operation
A factorizer can be in one of two modes: Combine or Split. In Combine mode, a
factorizer combines batches of 9 items into single items. In Split mode, it
splits single items into batches of 9 items. A factorizer uses 'storage'
crafting recipes (storage blocks, nuggets, etc.) to determine which items can be
combined and/or split.

A factorizer attempts to combine a batch of 9 items or split an item every 16
ticks (0.8 seconds).

### Input and output
Items can enter and exit a factorizer through its sides. Every side of the
device may correspond to its input slot, its output slot, or both at the same
time.

A factorizer can automatically transfer items out of any sides that directly
correspond to its output slot. This is called auto-output. It can also transfer
items from adjacent inventories into any sides that directly correspond to its
input slot. This is called auto-input. Auto-output and auto-input occur every 16
ticks (0.8 seconds). Auto-output occurs after items are combined or split, and
auto-input occurs right before items are combined or split. The device can
automatically transfer up to 64 items at a time.

Which sides correspond to which slots and whether auto-output and auto-input are
enabled can be configured using the Configuration tab in the device's GUI.

### Redstone control
A factorizer may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The factorizer works whenever possible. This is
the default mode.

Low
: The factorizer works when *not* powered. When powered, it stops working.

High
: The factorizer only works when powered.

The current mode can be set using the Redstone Control tab in the device's GUI.

### Security
A factorizer can have a [signalum security lock](/docs/1.12/thermal-foundation-2/signalum-security-lock/)
installed to restrict who can access it.

### Redprints
A factorizer's configuration can be saved on a [redprint](/docs/1.12/thermal-foundation-2/redprint/) to be
copied to other factorizers.

### Light source
When a factorizer is active, it emits a light level of 4.
