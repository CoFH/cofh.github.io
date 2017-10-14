---
title: Igneous Extruder
nav: thermal-expansion
redirect_from:
  - /thermal-expansion/machines/igneous-extruder/
  - /docs/thermal-expansion/machines/igneous-extruder/
recipes:
  crafting:
    - machine-extruder
augments:
  - machine-power
  - machine-extruder-no-water
  - machine-extruder-granite
  - machine-extruder-diorite
  - machine-extruder-andesite
---

![Igneous extruder](/assets/images/thermal-expansion/igneous-extruder.png){:style="height: 128px"}

> Minecraft physics are fun!


An **igneous extruder**, or **extruder** for short, is a
[machine](/docs/machines/) that mixes
[water](https://minecraft.gamepedia.com/Water) and
[lava](https://minecraft.gamepedia.com/Lava) into
[cobblestone](https://minecraft.gamepedia.com/Cobblestone),
[stone](https://minecraft.gamepedia.com/Stone) and
[obsidian](https://minecraft.gamepedia.com/Obsidian).


Obtaining
---------

A placed igneous extruder can be instantly picked up by dismantling it with a
[crescent hammer](/docs/crescent-hammer/). Its configuration is preserved in the
item. It can also be mined using a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe), though this is quite slow.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
An igneous extruder is initially at the lowest [tier](#tiers) (basic). It can be
upgraded to higher tiers using [upgrade kits](/docs/upgrade-kits/) and
[conversion kits](/docs/conversion-kits/).


Usage
-----

### Processing
An igneous extruder can be configured to produce
[cobblestone](https://minecraft.gamepedia.com/Cobblestone),
[stone](https://minecraft.gamepedia.com/Stone) or
[obsidian](https://minecraft.gamepedia.com/Obsidian). When its input tanks are
filled with at least 1000 mB of [water](https://minecraft.gamepedia.com/Water)
and [lava](https://minecraft.gamepedia.com/Lava), the machine will start
consuming [Redstone Flux](/docs/redstone-flux/) to produce the chosen item.
Every produced item requires certain amounts of energy, water and lava. When
enough energy has been consumed for an item, the required amounts of water and
lava are consumed and the output is placed in the output slot.

The amounts of water, lava and energy required depend on the chosen output:

| Output | Water | Lava | Energy |
|---
| Cobblestone | 0 mB | 0 mB | 400 RF |
| Stone | 1000 mB | 0 mB | 800 RF |
| Obsidian | 1000 mB | 1000 mB | 1600 RF |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}

The speed at which an igneous extruder produces items depends on how much energy
it can use per tick. This in turn depends on how much power is being supplied,
and on the machine's maximum power usage. A basic extruder has a maximum power
usage of 20 RF/t. This can be increased by upgrading the machine to a higher
[tier](#tiers), and by installing certain [augments](#augmentation).

### Input and output
Fluids and items can enter and exit an igneous extruder through its sides. Every
side of an extruder may correspond to its input tanks, its output slot, or both
at the same time.

An igneous extruder can automatically transfer items out of any sides that
directly correspond to its output slot. This is called auto-output, and occurs
whenever the machine finishes processing an item, or every 32 ticks (1.6
seconds) if the machine is inactive.

Which sides correspond to which tanks/slots and whether auto-output is enabled
can be configured using the Configuration tab in the machine's GUI.

### Redstone control
An igneous extruder may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The extruder works whenever possible. This is
the default mode.

Low
: The extruder works when *not* powered. When powered, it stops working.

High
: The extruder only works when powered.

The current mode can be set using the Redstone Control tab in the machine's GUI.

When an igneous extruder must stop working due to a redstone signal and is still
producing an item, it will finish producing that item before stopping.

### Security
An igneous extruder can have a [signalum security
lock](/docs/signalum-security-lock/) installed to restrict who can access it.

### Redprints
An igneous extruder's configuration can be saved on a
[redprint](/docs/redprint/) to be copied to other extruders.

### Light source
When an igneous extruder is active, it emits a light level of 14.


Tiers
-----

Igneous extruders come in six [tiers](/docs/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Max. power usage | Augment slots | Max. items per auto-output | Note |
|---
| Basic | 20 RF/t | 0 | 8 |
| Hardened | 30 RF/t | 1 | 16 |
| Reinforced | 40 RF/t | 2 | 28 |
| Signalum | 50 RF/t | 3 | 44 |
| Resonant | 60 RF/t | 4 | 64 |
| Creative | 60 RF/t | 4 | 64 | Only obtainable in creative mode. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}


Augmentation
------------

An igneous extruder can have [augments](/docs/augments/) installed to improve
certain properties or to change how it works. Augments can be installed in the
Augmentation tab in an extruder's GUI.

{% include augment-table.html augments=page.augments %}