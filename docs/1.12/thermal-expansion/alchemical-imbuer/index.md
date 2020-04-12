---
title: Alchemical Imbuer
image:
- alt: Alchemical imbuer
  file: thermal-expansion-5/alchemical-imbuer.png
redirect_from:
- /docs/alchemical-imbuer/
- /docs/thermal-expansion/alchemical-imbuer/
- /docs/thermal-expansion-5/alchemical-imbuer/
- /docs/1.12/thermal-expansion-5/alchemical-imbuer/
recipes:
  crafting:
  - te-1-12-machine-brewer
augments:
- machine-power
- machine-brewer-reagent
---

> Bottles not included.


An **alchemical imbuer**, also known as a **brewer**, is a
[machine](../machines/) that brews
[potions](https://minecraft.gamepedia.com/Potion). It works with potions in
their [fluid forms](../../thermal-foundation/potion-fluid/).


Obtaining
---------

A placed alchemical imbuer can be instantly picked up by dismantling it with a
[wrench](../../wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe), though
this can be much slower.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
An alchemical imbuer is initially at the lowest [tier](#tiers) (basic). It can
be upgraded to higher tiers using [upgrade kits](../../thermal-foundation/upgrade-kits/) and
[conversion kits](../../thermal-foundation/conversion-kits/).


Usage
-----

### Placement
When placed, an alchemical imbuer faces the player. It can face any of the four
cardinal directions, and can be rotated using a [wrench](../../wrenches/).

### Processing
When an alchemical imbuer's input tank is filled with
[water](https://minecraft.gamepedia.com/Water) or a [fluid
potion](../../thermal-foundation/potion-fluid/) and a reagent
([brewing](https://minecraft.gamepedia.com/Brewing) ingredient) is placed in its
input slot, the machine will start consuming [Redstone
Flux](../../../redstone-flux/) to brew the corresponding potion. Potions are brewed
in batches of 500 mB (2 [bottles](https://minecraft.gamepedia.com/Glass_Bottles)
worth), with each batch costing 4,800 RF. When enough energy has been consumed
for a batch, the input is consumed and the resulting fluid potion is placed in
the output tank.

The speed at which an alchemical imbuer brews potions depends on how much energy
it can use per tick. This in turn depends on how much power is being supplied,
and on the machine's maximum power usage. A basic brewer has a maximum power
usage of 20 RF/t. This can be increased by upgrading the machine to a higher
[tier](#tiers), and by installing certain [augments](#augmentation).

### Input and output
Fluids and items can enter and exit an alchemical imbuer through its sides.
Every side of a brewer may correspond to its input tank, its input slot, its
output tank, or certain tanks/slots at the same time.

An alchemical imbuer can automaticaly transfer fluids out of any sides that
directly correspond to its output tank. This is called auto-output. The machine
can also transfer items from adjacent inventories into any sides that directly
correspond to its input slot. This is called auto-input. Auto-output and
auto-input occur whenever the machine finishes brewing a potion. Auto-output
also occurs every 4 ticks (0.2 seconds). Auto-input also occurs every 32 ticks
(1.6 seconds) if the machine is inactive.

A basic alchemical imbuer can automatically transfer up to 1,000 mB of fluid and
up to 16 items at a time. These amounts can be increased by upgrading the
machine to a higher [tier](#tiers).

Which sides correspond to which tanks/slots and whether auto-output and
auto-input are enabled can be configured using the Configuration tab in the
machine's GUI.

### Redstone control
An alchemical imbuer may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The brewer works whenever possible. This is the
default mode.

Low
: The brewer works when *not* powered. When powered, it stops working.

High
: The brewer only works when powered.

The current mode can be set using the Redstone Control tab in the machine's GUI.

### Security
An alchemical imbuer can have a [signalum security
lock](../../thermal-foundation/signalum-security-lock/) installed to restrict who can access it.

### Redprints
An alchemical imbuer's configuration can be saved on a
[redprint](../../thermal-foundation/redprint/) to be copied to other alchemical imbuers.

### Light source
When an alchemical imbuer is active, it emits a light level of 12.


Tiers
-----

Alchemical imbuers come in five [tiers](../../thermal-foundation/tiers/).

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

An alchemical imbuer can have [augments](../augments/) installed to improve
certain properties or to change how it works. The amount of augments that can be
installed depends on the machine's [tier](#tiers). A basic alchemical imbuer
cannot be augmented.

Augments can be installed in the Augmentation tab in an alchemical imbuer's GUI.

{% include te-1-12-augment-table.html augments=page.augments %}
