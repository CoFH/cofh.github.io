---
title: Nullifier
nav: thermal-expansion
redirect_from:
  - /thermal-expansion/devices/nullifier/
  - /docs/thermal-expansion/devices/nullifier/
recipes:
  crafting:
    - device-nullifier
---

![Nullifier](/assets/images/thermal-expansion/nullifier.png){:style="height: 128px"}

> Sends all the things to `/dev/null`!


A **nullifier** is a [device](/docs/devices/) that destroys any items and fluids
it receives.


Obtaining
---------

A placed nullifier can be instantly picked up by dismantling it with a [crescent
hammer](/docs/crescent-hammer/). Its configuration is preserved in the item. It
can also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe).

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Operation
When a nullifier receives items or fluids, they are instantly destroyed. Items
and fluids can be supplied to a nullifier manually or automatically.

### Input
Items and fluids can enter a nullifier through the front, which displays
[lava](https://minecraft.gamepedia.com/Lava) when the device is active. Other
sides of a nullifier can also be configured to accept items and fluids in the
device's GUI.

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
A nullifier can have a [signalum security lock](/docs/signalum-security-lock/)
installed to restrict who can access it.

### Redprints
A nullifier's configuration can be saved on a [redprint](/docs/redprint/) to be
copied to other nullifiers.

### Light source
When a nullifier is active, it emits a light level of 15.


Trivia
------

* A nullifier works by "sending things to `/dev/null`". On Unix-like operating
  systems, `/dev/null` is a [null
  device](https://en.wikipedia.org/wiki/Null_device), which discards any data
  that is written to it.
