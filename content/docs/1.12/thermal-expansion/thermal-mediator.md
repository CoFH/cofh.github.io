---
category: Devices
recipes:
  crafting-shaped:
  - te-1-12-device-heat-sink
show_image: false
subjects:
- te-1-12-device-heat-sink
title: Thermal Mediator
---

![Thermal mediator](/images/docs/1.12/thermal-expansion/thermal-mediator.png){:style="height: 128px"}


A **thermal mediator** (also known as a **heat sink**) is a
[device](../devices/) that uses [coolants](../coolants/) to speed up
adjacent [machines](../machines/) and [dynamos](../dynamos/).


Obtaining
---------

A placed thermal mediator can be instantly picked up by dismantling it with a
[wrench](../../wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe).

### Crafting
{{<recipe_table type="crafting-shaped" ids_param="recipes.crafting-shaped">}}


Usage
-----

### Placement
When placed, a thermal mediator faces the player. It can face any of the four
cardinal directions, and can be rotated using a [wrench](../../wrenches/).

### Operation
When a fluid [coolant](../coolants/) is supplied to a thermal mediator, it
will begin consuming it to speed up any adjacent [machines](../machines/) and
[dynamos](../dynamos/). The rate at which coolant is consumed depends on the
[thermal capacity](../coolants/#usage) of the used coolant.

Every tick, blocks adjacent to an active thermal mediator have a chance to
perform additional work during that tick. This chance is equal to the [coolant
factor](../coolants/#usage) of the used coolant.

### Input
Fluids can enter a thermal mediator through its sides. Which sides of the device
accept fluids may be configured using the Configuration tab in the device's GUI.

### Redstone control
A thermal mediator may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The thermal mediator works whenever possible.
This is the default mode.

Low
: The thermal mediator works when *not* powered. When powered, it stops working.

High
: The thermal mediator only works when powered.

The current mode can be set using the Redstone Control tab in the device's GUI.

### Security
A thermal mediator can have a [signalum security
lock](../../thermal-foundation/signalum-security-lock/) installed to restrict who can access it.

### Redprints
A thermal mediator's configuration can be saved on a [redprint](../../thermal-foundation/redprint/)
to be copied to other thermal mediators.

### Light source
When a thermal mediator is active, it emits a light level of 3.
