---
category: Devices
recipes:
  crafting-shaped:
  - te-1-12-device-nullifier
show_image: false
subjects:
- te-1-12-device-nullifier
title: Nullifier
---

![Nullifier](/images/docs/1.12/thermal-expansion/nullifier.png)

> Sends all the things to `/dev/null`!


A **nullifier** is a [device](../devices/) that destroys any items and fluids
it receives.


Obtaining
---------

A placed nullifier can be instantly picked up by dismantling it with a
[wrench](../../wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe).

### Crafting
{{<recipe_table type="crafting-shaped" ids_param="recipes.crafting-shaped">}}


Usage
-----

### Placement
When placed, a nullifier faces the player. It can face any of the four cardinal
directions, and can be rotated using a [wrench](../../wrenches/).

### Operation
When a nullifier receives items or fluids, they are instantly destroyed. Items
and fluids can be supplied to a nullifier manually or automatically.

### Input
Items and fluids can enter a nullifier through the front, which displays
[lava](https://minecraft.gamepedia.com/Lava) when the device is active. Other
sides of a nullifier can also be configured to accept items and fluids using the
Configuration tab in the device's GUI.

### Redstone control
A nullifier may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The nullifier is always active. This is the
default mode.

Low
: The nullifier is active when *not* powered. When powered, it becomes inactive.

High
: The nullifier is only active when powered.

The current mode can be set using the Redstone Control tab in the device's GUI.

### Security
A nullifier can have a [signalum security lock](../../thermal-foundation/signalum-security-lock/)
installed to restrict who can access it.

### Redprints
A nullifier's configuration can be saved on a [redprint](../../thermal-foundation/redprint/) to be
copied to other nullifiers.

### Light source
When a nullifier is active, it emits a light level of 15.


Trivia
------

* A nullifier works by "sending things to `/dev/null`". On Unix-like operating
  systems, `/dev/null` is a [null
  device](https://en.wikipedia.org/wiki/Null_device), which discards any data
  that is written to it.
