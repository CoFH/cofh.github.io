---
title: Aquatic Entangler
redirect_from:
- /docs/aquatic-entangler/
- /docs/thermal-expansion/aquatic-entangler/
- /docs/thermal-expansion-5/aquatic-entangler/
recipes:
  crafting:
  - te5-device-fisher
---

![Aquatic entangler](/assets/images/thermal-expansion-5/aquatic-entangler.png){:style="height: 128px"}

> Hang up your fishing rod.


An **aquatic entangler** (also known as a **fisher**) is a
[device](/docs/1.12/thermal-expansion-5/devices/) that catches
[fish](https://minecraft.gamepedia.com/Fish).


Obtaining
---------

A placed aquatic entangler can be instantly picked up by dismantling it with a
[wrench](/docs/1.12/wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe).

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Placement
When placed, an aquatic entangler faces the player. It can face any of the four
cardinal directions, and can be rotated using a [wrench](/docs/1.12/wrenches/).

### Operation
When placed in a body of [water](https://minecraft.gamepedia.com/Water), an
aquatic entangler will start catching fish. It must be surrounded by at least 10
water blocks in a 5x5x2 area (the device being at the top of the area).

An active aquatic entangler catches one fish every 7,200 ticks (6 minutes) by
default. This speed can be increased by various factors.

| Factor | Speed multiplier |
|---
| Placed in a [river](https://minecraft.gamepedia.com/River) | × 2 |
| Placed in an [ocean](https://minecraft.gamepedia.com/Ocean) | × 3 |
| Surrounded by 10-20 water blocks ([raining](https://minecraft.gamepedia.com/Rain)) | × 2 |
| Surrounded by 20-30 water blocks | × 2 |
| Surrounded by 20-30 water blocks ([raining](https://minecraft.gamepedia.com/Rain)) | × 3 |
| Surrounded by 30 or more water blocks | × 3 |
| Surrounded by 30 or more water blocks ([raining](https://minecraft.gamepedia.com/Rain)) | × 4 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}

The amount of fish an aquatic entangler catches per cycle can be increased by
placing bait items in its bait slot. Bait will boost the amount of fish caught
for 8 cycles per item.

| Bait type | Production multiplier |
|---
| [Aqua-Chow](/docs/1.12/thermal-foundation-2/aqua-chow/) | × 2 |
| [Rich Aqua-Chow](/docs/1.12/thermal-foundation-2/rich-aqua-chow/) | × 3 |
| [Fluxed Aqua-Chow](/docs/1.12/thermal-foundation-2/fluxed-aqua-chow/) | × 4 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}

### Input and output
Items can enter and exit an aquatic entangler through its sides. Every side of
the device may correspond to its bait slot, its output slots, or both at the
same time.

An aquatic entangler can automatically transfer items out of any sides that
directly correspond to its output slots. This is called auto-output. It can also
transfer items from adjacent inventories into any sides that directly correspond
to its bait slot. This is called auto-input. Auto-output and auto-input occur at
the same speed at which fish is caught. Auto-output occurs after fish is caught,
and auto-input occurs right before fish is caught. The device can automatically
transfer up to 16 items at a time.

Which sides correspond to which slots and whether auto-output and auto-input are
enabled can be configured using the Configuration tab in the device's GUI.

### Redstone control
An aquatic entangler may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The aquatic entangler works whenever possible.
This is the default mode.

Low
: The aquatic entangler works when *not* powered. When powered, it stops
working.

High
: The aquatic entangler only works when powered.

The current mode can be set using the Redstone Control tab in the device's GUI.

### Security
An aquatic entangler can have a [signalum security
lock](/docs/1.12/thermal-foundation-2/signalum-security-lock/) installed to restrict who can access it.

### Redprints
An aquatic entangler's configuration can be saved on a
[redprint](/docs/1.12/thermal-foundation-2/redprint/) to be copied to other aquatic entanglers.


Products
--------

An aquatic entangler can catch various kinds of
[fish](https://minecraft.gamepedia.com/Fish). Every kind of fish has a certain
'weight', which specifies the chance of it being caught. Products with a greater
weight are more likely to be caught.

| Product | Weight |
|---
| [Raw Fish](https://minecraft.gamepedia.com/Raw_Fish) | 120 |
| [Raw Salmon](https://minecraft.gamepedia.com/Raw_Salmon) | 50 |
| [Clownfish](https://minecraft.gamepedia.com/Clownfish) | 4 |
| [Pufferfish](https://minecraft.gamepedia.com/Pufferfish) | 26 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
