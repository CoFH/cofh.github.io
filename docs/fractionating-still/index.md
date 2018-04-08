---
title: Fractionating Still
nav: thermal-expansion
recipes:
  crafting:
    - machine-refinery
augments:
  - machine-power
  - machine-secondary
  - machine-secondary-null
  - machine-refinery-oil
  - machine-refinery-potion
recipe-list:
  - naphtha-from-coal
  - naphtha-from-crude-oil
  - refined-fuel
  - tree-oil
---

![Fractionating still](/assets/images/thermal-expansion/fractionating-still.png){:style="height: 128px"}

> Products may or may not be drinkable.


A **fractionating still** (or **still** for short, also known as a **refinery**)
is a [machine](/docs/machines/) that refines fluids.


Obtaining
---------

A placed fractionating still can be instantly picked up by dismantling it with a
[wrench](/docs/wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe), though
this can be much slower.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
A fractionating still is initially at the lowest [tier](#tiers) (basic). It can
be upgraded to higher tiers using [upgrade kits](/docs/upgrade-kits/) and
[conversion kits](/docs/conversion-kits/).


Usage
-----

### Placement
When placed, a fractionating still faces the player. It can face any of the four
cardinal directions, and can be rotated using a [wrench](/docs/wrenches/).

### Processing
When a fractionating still's input tank is filled with a fluid, the machine will
start consuming [Redstone Flux](/docs/redstone-flux/) to process it. Each batch
of fluid requires a certain amount of energy to process. When enough energy has
been consumed for a batch of fluid, the fluid is consumed and the output is
placed in the output tank. A secondary item output may be produced, which is
placed in the secondary output slot.

The speed at which a fractionating still processes fluids depends on how much
energy it can use per tick. This in turn depends on how much power is being
supplied, and on the machine's maximum power usage. A basic still has a maximum
power usage of 20 RF/t. This can be increased by upgrading the machine to a
higher [tier](#tiers), and by installing certain [augments](#augmentation).

### Input and output
Fluids and items can enter and exit a fractionating still through its sides.
Every side of a still may correspond to its input tank, its output tank, its
secondary output slot, or certain tanks/slots at the same time.

A fractionating still can automatically transfer fluids or items out of any
sides that directly correspond to its output tank or secondary output slot. This
is called auto-output. Auto-output occurs whenever the machine finishes
processing a batch of fluid, as well as every 4 ticks (0.2 seconds).

A basic fractionating still can automatically output up to 1,000 mB of fluid and
up to 16 items at a time. These amounts can be increased by upgrading the
machine to a higher [tier](#tiers).

Which sides correspond to which tanks/slots and whether auto-output is enabled
can be configured using the Configuration tab in the machine's GUI.

### Redstone control
A fractionating still may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The still works whenever possible. This is the
default mode.

Low
: The still works when *not* powered. When powered, it stops working.

High
: The still only works when powered.

The current mode can be set using the Redstone Control tab in the machine's GUI.

When a fractionating still must stop working due to a redstone signal and is
still processing a batch of fluid, it will finish processing that batch before
stopping.

### Security
A fractionating still can have a [signalum security
lock](/docs/signalum-security-lock/) installed to restrict who can access it.

### Redprints
A fractionating still's configuration can be saved on a
[redprint](/docs/redprint/) to be copied to other stills.


Tiers
-----

Fractionating stills come in five [tiers](/docs/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Max. power usage | Augment slots | Max. fluid per auto-transfer | Max. items per auto-transfer |
|---
| Basic | 20 RF/t | 0 | 1,000 mB | 16 |
| Hardened | 30 RF/t | 1 | 1,000 mB | 16 |
| Reinforced | 40 RF/t | 2 | 3,000 mB | 28 |
| Signalum | 50 RF/t | 3 | 6,000 mB | 44 |
| Resonant | 60 RF/t | 4 | 10,000 mB | 64 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}


Augmentation
------------

A fractionating still can have [augments](/docs/augments/) installed to improve
certain properties or to change how it works. The amount of augments that can be
installed depends on the machine's [tier](#tiers). A basic still cannot be
augmented.

Augments can be installed in the Augmentation tab in a still's GUI.

{% include augment-table.html augments=page.augments %}


Recipes
-------

{% include recipe-table.html type='refinery' recipes=page.recipe-list %}
