---
title: Glacial Precipitator
nav: thermal-expansion
redirect_from:
  - /thermal-expansion/machines/glacial-precipitator/
  - /docs/thermal-expansion/machines/glacial-precipitator/
recipes:
  crafting:
    - machine-precipitator
augments:
  - machine-power
  - machine-precipitator-snow-layer
  - machine-precipitator-packed-ice
---

![Glacial precipitator](/assets/images/thermal-expansion/glacial-precipitator.png){:style="height: 128px"}

> Have a snowball fight!


A **glacial precipitator**, or **precipitator** for short, is a
[machine](/docs/machines/) that freezes
[water](https://minecraft.gamepedia.com/Water) into
[snow](https://minecraft.gamepedia.com/Snow),
[ice](https://minecraft.gamepedia.com/Ice) and similar items.


Obtaining
---------

A placed glacial precipitator can be instantly picked up by dismantling it with
a [crescent hammer](/docs/crescent-hammer/). Its configuration is preserved in
the item. It can also be mined using a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe), though this can be much
slower.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
A glacial precipitator is initially at the lowest [tier](#tiers) (basic). It can
be upgraded to higher tiers using [upgrade kits](/docs/upgrade-kits/) and
[conversion kits](/docs/conversion-kits/).


Usage
-----

### Placement
When placed, a glacial precipitator faces the player. It can face any of the
four cardinal directions, and can be rotated using a [crescent
hammer](/docs/crescent-hammer/) or similar.

### Processing
A glacial precipitator can be configured to produce
[snowballs](https://minecraft.gamepedia.com/Snowball),
[snow](https://minecraft.gamepedia.com/Snow) or
[ice](https://minecraft.gamepedia.com/Ice). When its input tank is filled with
[water](https://minecraft.gamepedia.com/Water), the machine will start consuming
[Redstone Flux](/docs/redstone-flux/) to produce the chosen item. Every produced
item requires a certain amount of energy and water. When enough energy has been
consumed for an item, the required amount of water is consumed and the output is
placed in the output slot.

The amount of water and energy required depends on the chosen output:

| Output | Water | Energy |
|---
| Snowball x4 | 500 mB | 800 RF |
| Snow | 500 mB | 800 RF |
| Ice | 1,000 mB | 1,600 RF |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}

The speed at which a glacial precipitator produces items depends on how much
energy it can use per tick. This in turn depends on how much power is being
supplied, and on the machine's maximum power usage. A basic precipitator has a
maximum power usage of 20 RF/t. This can be increased by upgrading the machine
to a higher [tier](#tiers), and by installing certain [augments](#augmentation).

### Input and output
Fluids and items can enter and exit a glacial precipitator through its sides.
Every side of a precipitator may correspond to its input tank, its output slot,
or both at the same time.

A glacial precipitator can automatically transfer items out of any sides that
directly correspond to its output slot. This is called auto-output, and occurs
whenever the machine finishes processing an item, or every 32 ticks (1.6
seconds) if the machine is inactive.

A basic glacial precipitator can automatically output up to 8 items at a time.
This amount can be increased by upgrading the machine to a higher
[tier](#tiers).

Which sides correspond to which tanks/slots and whether auto-output is enabled
can be configured using the Configuration tab in the machine's GUI.

### Redstone control
A glacial precipitator may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The precipitator works whenever possible. This
is the default mode.

Low
: The precipitator works when *not* powered. When powered, it stops working.

High
: The precipitator only works when powered.

The current mode can be set using the Redstone Control tab in the machine's GUI.

When a glacial precipitator must stop working due to a redstone signal and is
still producing an item, it will finish producing that item before stopping.

### Security
A glacial precipitator can have a [signalum security
lock](/docs/signalum-security-lock/) installed to restrict who can access it.

### Redprints
A glacial precipitator's configuration can be saved on a
[redprint](/docs/redprint/) to be copied to other precipitators.


Tiers
-----

Glacial precipitators come in six [tiers](/docs/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Max. power usage | Augment slots | Max. items per auto-output |
|---
| Basic | 20 RF/t | 0 | 8 |
| Hardened | 30 RF/t | 1 | 16 |
| Reinforced | 40 RF/t | 2 | 28 |
| Signalum | 50 RF/t | 3 | 44 |
| Resonant / Creative | 60 RF/t | 4 | 64 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}


Augmentation
------------

A glacial precipitator can have [augments](/docs/augments/) installed to improve
certain properties or to change how it works. The amount of augments that can be
installed depends on the machine's [tier](#tiers). A basic precipitator cannot
be augmented.

Augments can be installed in the Augmentation tab in a precipitator's GUI.

{% include augment-table.html augments=page.augments %}
