---
title: Fluid Allocator
nav: thermal-expansion
image:
  - alt: Fluid allocator
    file: thermal-expansion/fluid-allocator.png
redirect_from:
  - /docs/fluid-allocator/
recipes:
  crafting:
    - device-fluid-buffer
---

> It's like a [hopper](https://minecraft.gamepedia.com/Hopper), for fluids!


A **fluid allocator** (also known as a **fluid buffer**) is a
[device](/docs/thermal-expansion/devices/) that stores and transfers fluids between adjacent
blocks or transport systems.


Obtaining
---------

A placed fluid allocator can be instantly picked up by dismantling it with a
[wrench](/docs/wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe).

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Placement
When placed, a fluid allocator faces the player. It can face any of the four
cardinal directions, and can be rotated using a [wrench](/docs/wrenches/).

### Operation
Fluids can enter and exit a fluid allocator through its sides. It can store
fluids in 3 buffer tanks. These tanks can be locked to only accept the fluids
that are currently stored inside.

A fluid allocator can automatically transfer fluids out of any configured output
sides, evenly dividing them if multiple output sides are configured. This is
called auto-output. It can also transfer fluids from adjacent blocks into any
configured input sides. This is called auto-input. Auto-output and auto-input
occur every tick (0.05 seconds) if the fluid allocator is active.

The amount of fluid that a fluid allocator transfers per cycle can be configured
separately for auto-output and auto-input. It can, at most, transfer 8,000 mB of
fluid at a time.

Which sides can output and/or accept fluids and whether auto-output and
auto-input are enabled can be configured using the Configuration tab in the
device's GUI.

### Redstone control
A fluid allocator may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The fluid allocator is always active. This is
the default mode.

Low
: The fluid allocator works when *not* powered. When powered, it stops working.

High
: The fluid allocator only works when powered.

The current mode can be set using the Redstone Control tab in the device's GUI.

### Security
A fluid allocator can have a [signalum security
lock](/docs/thermal-foundation/signalum-security-lock/) installed to restrict who can access it.

### Redprints
A fluid allocator's configuration can be saved on a [redprint](/docs/thermal-foundation/redprint/)
to be copied to other fluid allocators.

### Light source
When a fluid allocator is active, it emits a light level of 5.
