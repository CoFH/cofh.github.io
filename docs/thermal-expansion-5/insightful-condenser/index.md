---
title: Insightful Condenser
nav: thermal-expansion-5
redirect_from:
- /docs/insightful-condenser/
- /docs/thermal-expansion/insightful-condenser/
image:
- alt: Insightful condenser
  file: thermal-expansion/insightful-condenser.png
recipes:
  crafting:
  - te5-device-xp-collector
---

An **insightful condenser** is a [device](/docs/thermal-expansion-5/devices/) that collects nearby
[experience orbs](https://minecraft.gamepedia.com/Experience) and converts them
into [essence of knowledge](/docs/thermal-foundation-2/essence-of-knowledge/).


Obtaining
---------

A placed insightful condenser can be instantly picked up by dismantling it with
a [wrench](/docs/wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe).

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Placement
When placed, an insightful condenser faces the player. It can face any of the
four cardinal directions, and can be rotated using a [wrench](/docs/wrenches/).

### Operation
An active insightful condenser collects any [experience
orbs](https://minecraft.gamepedia.com/Experience) in a 5x5x5 area centered on
the device. The experience it collects is converted into [essence of
knowledge](/docs/thermal-foundation-2/essence-of-knowledge/) (20 mB per experience
point) and stored in the device's output tank. The device attempts to collect
and convert experience every 16 ticks (0.8 seconds), or directly after it is
activated by a [redstone signal](#redstone-control).

The amount of essence of knowledge an insightful condenser produces per
experience point can be increased by placing catalyst items in its catalyst
slot. Each item works for a certain amount of collected experience after being
consumed.

| Catalyst type | Production multiplier | Experience per unit |
|---
| [Soul Sand](https://minecraft.gamepedia.com/Soul_Sand) | × 1.5 | 50 XP |
| [Lapis Lazuli](https://minecraft.gamepedia.com/Lapis_Lazuli) | × 2 | 100 XP |
| [Mana Dust](/docs/thermal-foundation-2/mana-dust/) | × 2.5 | 200 XP |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}

### Input and output
Items and fluids can enter and exit an insightful condenser through its sides.
Every side of an insightful condenser may correspond to its catalyst slot, its
output tank, or both at the same time.

An insightful condenser can automatically transfer fluids out of any sides that
directly correspond to its output tank. This is called auto-output. It can also
transfer items from adjacent inventories into any sides that directly correspond
to its catalyst slot. This is called auto-input. Auto-output and auto-input
occur every 16 ticks (0.8 seconds).

Which sides correspond to which slots/tanks and whether auto-output and
auto-input are enabled can be configured using the Configuration tab in the
device's GUI.

### Redstone control
An insightful condenser may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The insightful condenser works whenever
possible. This is the default mode.

Low
: The insightful condenser works when *not* powered. When powered, it stops
working.

High
: The insightful condenser only works when powered.

The current mode can be set using the Redstone Control tab in the device's GUI.

### Security
An insightful condenser can have a [signalum security
lock](/docs/thermal-foundation-2/signalum-security-lock/) installed to restrict who can access it.

### Redprints
An insightful condenser's configuration can be saved on a
[redprint](/docs/thermal-foundation-2/redprint/) to be copied to other insightful condensers.

### Light source
When an insightful condenser is active, it emits a light level of 2.
