---
title: Decoctive Diffuser
nav: thermal-expansion
redirect_from:
  - /docs/decoctive-diffuser/
image:
  - alt: Decoctive diffuser
    file: thermal-expansion/decoctive-diffuser.png
recipes:
  crafting:
    - te5-device-diffuser
---

A **decoctive diffuser**, or **diffuser** for short, is a
[device](/docs/thermal-expansion/devices/) that spreads the effects of [fluid
potions](/docs/thermal-foundation/potion-fluid/) in an area.


Obtaining
---------

A placed decoctive diffuser can be instantly picked up by dismantling it with a
[wrench](/docs/wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe).

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Placement
When placed, a decoctive diffuser faces the player. It can face any of the four
cardinal directions, and can be rotated using a [wrench](/docs/wrenches/).

### Operation
When a [fluid potion](/docs/thermal-foundation/potion-fluid/) is supplied to a decoctive diffuser,
it will begin applying the potion's
[effect](https://minecraft.gamepedia.com/Status_effect) to nearby entities in a
certain area (9x9x9 for [potions](https://minecraft.gamepedia.com/Potion),
13x13x13 for [splash potions](https://minecraft.gamepedia.com/Splash_Potion) and
17x17x17 for [lingering
potions](https://minecraft.gamepedia.com/Lingering_Potion)) centered on the
device. The duration of the applied effect is one fourth of the duration of the
potion itself. The device spreads potion effects every 60 ticks (3 seconds),
consuming 50 mB of potion per cycle.

The effects of a decoctive diffuser can be boosted by placing reagent items in
its reagent slot. Reagent will boost the device's effects for 15 cycles per
item.

| Reagent type | Effect |
|---
| [Redstone](https://minecraft.gamepedia.com/Redstone) | Doubles the duration of the applied effect. |
| [Glowstone Dust](https://minecraft.gamepedia.com/Glowstone_Dust) | Increases the potency of the applied effect by one level. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}

Effects applied by decoctive diffusers are limited to durations up to 6 minutes
and levels up to IV, regardless of the supplied potion or reagent.

### Input
Fluids and items can enter a decoctive diffuser through its sides. Every side of
a decoctive diffuser may correspond to its input tank, its reagent slot, or both
at the same time.

A decoctive diffuser can automatically transfer items from adjacent inventories
into any sides that directly correspond to its reagent slot. This is called
auto-input, and occurs every 60 ticks (3 seconds).

Which sides correspond to which tanks/slots and whether auto-input is enabled
can be configured using the Configuration tab in the device's GUI.

### Redstone control
A decoctive diffuser may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The diffuser works whenever possible. This is
the default mode.

Low
: The diffuser works when *not* powered. When powered, it stops working.

High
: The diffuser only works when powered.

The current mode can be set using the Redstone Control tab in the device's GUI.

### Security
A decoctive diffuser can have a [signalum security
lock](/docs/thermal-foundation/signalum-security-lock/) installed to restrict who can access it.

### Redprints
A decoctive diffuser's configuration can be saved on a
[redprint](/docs/thermal-foundation/redprint/) to be copied to other diffusers.

### Light source
When a decoctive diffuser is active, it emits a light level of 5.
