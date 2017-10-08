---
title: Energetic Infuser
nav: thermal-expansion
redirect_from:
  - /thermal-expansion/machines/energetic-infuser/
  - /docs/thermal-expansion/machines/energetic-infuser/
recipes:
  crafting:
    - machine-charger
augments:
  - machine-power
  - machine-charger-throughput
recipe-list:
  - phyto-gro-fluxed
---

![Energetic infuser](/assets/images/thermal-expansion/energetic-infuser.png){:style="height: 128px"}

> Feel the hum.


An **energetic infuser** (also known as a **charger**) is a
[machine](/docs/machines/) that charges items with [Redstone
Flux](/docs/redstone-flux/).


Obtaining
---------

A placed energetic infuser can be instantly picked up by dismantling it with a
[crescent hammer](/docs/crescent-hammer/). Its configuration is preserved in the
item. It can also be mined using a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe), though this is quite slow.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
An energetic infuser is initially at the lowest [tier](#tiers) (basic). It can
be upgraded to higher tiers using [upgrade kits](/docs/upgrade-kits/) and
[conversion kits](/docs/conversion-kits/).


Usage
-----

### Processing
When items that hold energy are placed in an energetic infuser's input slot, the
machine will start consuming [Redstone Flux](/docs/redstone-flux/) to charge
them. The machine will keep charging an item until it is fully charged. Once an
item is fully charged, it is moved to the output slot.

Some items that do not hold energy can be processed into different items by an
energetic infuser. In this case, every item requires a certain amount of energy
to process. When enough energy has been consumed for an item, the input is
consumed and the output is placed in the output slot.

The speed at which an energetic infuser charges items depends on how much energy
it can use per tick. This in turn depends on how much power is being supplied,
and on the machine's maximum power usage. A basic energetic infuser has a
maximum power usage of 50 RF/t. This can be increased by upgrading the machine
to a higher [tier](#tiers), and by installing certain [augments](#augmentation).

The speed at which an energetic infuser charges items that hold energy may be
limited by the maximum charging rate of those items.

### Input and output
Items can enter and exit an energetic infuser through its sides. Every side of
an energetic infuser may correspond to its input slot, its output slot, or both
at the same time.

An energetic infuser can automatically transfer items out of any sides that
directly correspond to its output slot. This is called auto-output. It can also
transfer items from adjacent inventories into any sides that directly correspond
to its input slot. This is called auto-input. Auto-output and auto-input occur
whenever the machine finishes charging an item, or every 32 ticks (1.6 seconds)
if the machine is inactive.

Which sides correspond to which slots and whether auto-output and auto-input are
enabled can be configured using the Configuration tab in the machine's GUI.

### Redstone control
An energetic infuser may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The energetic infuser works whenever possible.
This is the default mode.

Low
: The energetic infuser works when *not* powered. When powered, it stops
working.

High
: The energetic infuser only works when powered.

The current mode can be set using the Redstone Control tab in the machine's GUI.

When an energetic infuser must stop working due to a redstone signal and is
still processing an item, it will finish processing that item before stopping.

### Security
An energetic infuser can have a [signalum security
lock](/docs/signalum-security-lock/) installed to restrict who can access it.

### Redprints
An energetic infuser's configuration can be saved on a
[redprint](/docs/redprint/) to be copied to other energetic infusers.

### Light source
When an energetic infuser is active, it emits a light level of 7.


Tiers
-----

Energetic infusers come in six [tiers](/docs/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Max. power usage | Augment slots | Max. items per auto-transfer | Note |
|---
| Basic | 50 RF/t | 0 | 8 |
| Hardened | 75 RF/t | 1 | 16 |
| Reinforced | 100 RF/t | 2 | 28 |
| Signalum | 125 RF/t | 3 | 44 |
| Resonant | 150 RF/t | 4 | 64 |
| Creative | 150 RF/t | 4 | 64 | Only obtainable in creative mode. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}


Augmentation
------------

An energetic infuser can have [augments](/docs/augments/) installed to improve
certain properties or to change how it works. Augments can be installed in the
Augmentation tab in an energetic infuser's GUI.

{% include augment-table.html augments=page.augments %}


Recipes
-------

An energetic infuser can process the following items that do not hold [Redstone
Flux](/docs/redstone-flux/) into different items.

{% include recipe-table.html type='charger' recipes=page.recipe-list %}
