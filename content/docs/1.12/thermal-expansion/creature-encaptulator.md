---
category: Devices
image:
- alt: Creature encaptulator
  file: thermal-expansion/creature-encaptulator.png
recipes:
  crafting-shaped:
  - te-1-12-device-mob-catcher
subjects:
- te-1-12-device-mob-catcher
title: Creature Encaptulator
---

> Gotta catch 'em all!


A **creature encaptulator** (also known as a **mob catcher**) is a
[device](../devices/) that captures nearby
[mobs](https://minecraft.gamepedia.com/Mob) using [morbs](../morb/).


Obtaining
---------

A placed creature encaptulator can be instantly picked up by dismantling it with
a [wrench](../../wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe).

### Crafting
{{<recipe_table type="crafting-shaped" ids_param="recipes.crafting-shaped">}}


Usage
-----

### Placement
When placed, a creature encaptulator faces the player. It can face any of the
four cardinal directions, and can be rotated using a [wrench](../../wrenches/).

### Operation
When empty [morbs](../morb/) are supplied to a creature
encaptulator, it will begin using them to capture
[mobs](https://minecraft.gamepedia.com/Mob) in a 11x11x11 area. The device
attempts to capture mobs every 32 ticks (1.6 seconds), or directly after it is
activated by a [redstone signal](#redstone-control). It captures up to 4 mobs at
a time.

A creature encaptulator can be configured to only capture hostile or passive
mobs. It never captures tamed mobs, mobs that are being ridden or mobs that are
riding other mobs.

### Input and output
Items can enter and exit a creature encaptulator through its sides. Every side
of the device may correspond to its input slot, its output slots, or both at the
same time.

A creature encaptulator can automatically transfer items out of any sides that
directly correspond to its output slots. This is called auto-output. It can also
transfer items from adjacent inventories into any sides that directly correspond
to its input slot. This is called auto-input. Auto-output and auto-input occur
every 32 ticks (1.6 seconds), right before mobs are captured. The device can
automatically transfer up to 16 items at a time.

Which sides correspond to which slots and whether auto-output and auto-input are
enabled can be configured using the Configuration tab in the device's GUI.

### Redstone control
A creature encaptulator may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The creature encaptulator works whenever
possible. This is the default mode.

Low
: The creature encaptulator works when *not* powered. When powered, it stops
working.

High
: The creature encaptulator only works when powered.

The current mode can be set using the Redstone Control tab in the device's GUI.

### Security
A creature encaptulator can have a [signalum security
lock](../../thermal-foundation/signalum-security-lock/) installed to restrict who can access it.

### Redprints
A creature encaptulator's configuration can be saved on a
[redprint](../../thermal-foundation/redprint/) to be copied to other creature encaptulators.
