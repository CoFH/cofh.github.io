---
title: Compactor
recipes:
  crafting:
    - machine-compactor
augments:
  - machine-power
  - machine-compactor-mint
recipe-list:
  press:
    - plate-from-ingot
    - plate-from-block
    - plate-fluxed-electrum-from-ingot
    - plate-fluxed-electrum-from-block
---

![Compactor](/assets/images/thermal-expansion/compactor.png){:style="height: 128px"}


A **compactor** is a [machine](/docs/thermal-expansion/machines/) that applies
pressure to items to change their form. It can be used to automate storage
crafting recipes, and to make metal plates and coins.


Obtaining
---------

A placed compactor can be instantly picked up by dismantling it with a [crescent
hammer](/docs/thermal-foundation/items/tools/crescent-hammer/). Its
configuration is preserved in the item. It can also be mined using a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe), though this is quite slow.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
A compactor is initially at the lowest [tier](#tiers) (basic). It can be
upgraded to higher tiers using [upgrade
kits](/docs/thermal-expansion/tiers/upgrade-kits/) and [conversion
kits](/docs/thermal-expansion/tiers/conversion-kits/).


Usage
-----

### Processing
When items are placed in a compactor's input slot, the machine will start
consuming [Redstone Flux](/docs/redstone-flux/) to process them. Every item
requires a certain amount of energy to process. When enough energy has been
consumed for an item, the input is consumed and the output is placed in the
output slot.

The speed at which a compactor processes items depends on how much energy it can
use per tick. This in turn depends on how much power is being supplied, and on
the machine's maximum power usage. A basic compactor has a maximum power usage
of 20 RF/t. This can be increased by upgrading the machine to a higher
[tier](#tiers), and by installing certain [augments](#augmentation).

### Input and output
Items can enter and exit a compactor through its sides. Every side of a
compactor may correspond to its input slot, its output slot, or both at the same
time.

A compactor can automatically transfer items out of any sides that directly
correspond to its output slot. This is called auto-output. It can also transfer
items from adjacent inventories into any sides that directly correspond to its
input slot. This is called auto-input. Auto-output and auto-input occur whenever
the machine finishes processing an item, or every 32 ticks (1.6 seconds) if the
machine is inactive.

Which sides correspond to which slots and whether auto-output and auto-input are
enabled can be configured using the Configuration tab in the machine's GUI.

### Redstone control
A compactor may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The compactor works whenever possible. This is
the default mode.

Low
: The compactor works when *not* powered. When powered, it stops working.

High
: The compactor only works when powered.

The current mode can be set using the Redstone Control tab in the machine's GUI.

When a compactor must stop working due to a redstone signal and is still
processing an item, it will finish processing that item before stopping.

### Security
A compactor can have a [signalum security
lock](/docs/thermal-foundation/items/other/signalum-security-lock/) installed to
restrict who can access it.

### Redprints
A compactor's configuration can be saved on a
[redprint](/docs/thermal-foundation/items/tools/redprint/) to be copied to other
compactors.


Tiers
-----

Compactors come in six [tiers](/docs/thermal-expansion/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Max. power usage | Augment slots | Max. items per auto-transfer | Note |
|---
| Basic | 20 RF/t | 0 | 8 |
| Hardened | 30 RF/t | 1 | 16 |
| Reinforced | 40 RF/t | 2 | 28 |
| Signalum | 50 RF/t | 3 | 44 |
| Resonant | 60 RF/t | 4 | 64 |
| Creative | 60 RF/t | 4 | 64 | Only obtainable in creative mode. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}


Augmentation
------------

A compactor can have [augments](/docs/thermal-expansion/augments/) installed to
improve certain properties or to change how it works. Augments can be installed
in the Augmentation tab in a compactor's GUI.

{% include augment-table.html augments=page.augments %}


Recipes
-------

A compactor can be in two modes, each with a different set of recipes: Storage
and Press.

If a [numismatic
press](/docs/thermal-expansion/augments/machine/numismatic-press/) is installed,
the Mint mode is also available with the recipes added by this augment.

### Storage
When in Storage mode, a compactor's recipes are based on storage
[crafting](https://minecraft.gamepedia.com/Crafting) recipes. These are any
recipes that consist of 4 or 9 of a single ingredient, like the recipes of
[glowstone](https://minecraft.gamepedia.com/Glowstone) and [blocks of
iron](https://minecraft.gamepedia.com/Block_of_Iron).

Every storage recipe can be performed in a compactor for 400 RF.

### Press
{% include recipe-table.html type='compactor-plate' recipes=page.recipe-list.press %}
