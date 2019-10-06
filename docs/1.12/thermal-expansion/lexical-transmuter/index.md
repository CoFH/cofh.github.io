---
title: Lexical Transmuter
redirect_from:
- /docs/lexical-transmuter/
- /docs/thermal-expansion/lexical-transmuter/
- /docs/thermal-expansion-5/lexical-transmuter/
- /docs/1.12/thermal-expansion-5/lexical-transmuter/
image:
- alt: Lexical transmuter
  file: thermal-expansion-5/lexical-transmuter.png
recipes:
  crafting:
  - te-1-12-device-lexicon
---

A **lexical transmuter** is a [device](/docs/1.12/thermal-expansion/devices/) that converts items into
other items that are considered equivalent. Examples of equivalent items are the
various versions of copper and tin ingots added by different mods.

A lexical transmuter is essentially a [Forge Lexicon](/docs/1.12/thermal-foundation/forge-lexicon/) in
block form.


Obtaining
---------

A placed lexical transmuter can be instantly picked up by dismantling it with a
[wrench](/docs/1.12/wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe).

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Placement
When placed, a lexical transmuter faces the player. It can face any of the four
cardinal directions, and can be rotated using a [wrench](/docs/1.12/wrenches/).

### Operation
A lexical transmuter allows users to configure a list of preferred items to
convert equivalent items into.

When an active lexical transmuter receives items for which preferred equivalent
items are configured, it converts the items into the preferred equivalents. The
device attempts to convert items every 16 ticks (0.8 seconds).

### Input and output
Items can enter and exit a lexical transmuter through its sides. Every side of
the device may correspond to its input slot, its output slot, or both at the
same time.

A lexical transmuter can automatically transfer items out of any sides that
directly correspond to its output slot. This is called auto-output. It can also
transfer items from adjacent inventories into any sides that directly correspond
to its input slot. This is called auto-input. Auto-output and auto-input occur
every 16 ticks (0.8 seconds). Auto-output occurs after items are converted, and
auto-input occurs right before items are converted. The device can automatically
transfer up to 64 items at a time.

Which sides correspond to which slots and whether auto-output and auto-input are
enabled can be configured using the Configuration tab in the device's GUI.

### Redstone control
A lexical transmuter may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The lexical transmuter works whenever possible.
This is the default mode.

Low
: The lexical transmuter works when *not* powered. When powered, it stops
working.

High
: The lexical transmuter only works when powered.

The current mode can be set using the Redstone Control tab in the device's GUI.

### Security
A lexical transmuter can have a [signalum security
lock](/docs/1.12/thermal-foundation/signalum-security-lock/) installed to restrict who can access it.

### Redprints
A lexical transmuter's configuration can be saved on a
[redprint](/docs/1.12/thermal-foundation/redprint/) to be copied to other lexical transmuters.

### Light source
When a lexical transmuter is active, it emits a light level of 12.
