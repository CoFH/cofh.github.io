---
title: Numismatic Dynamo
nav: thermal-expansion
image:
  - alt: Numismatic dynamo
    file: thermal-expansion/dynamo-numismatic-rf.png
recipes:
  crafting:
    - dynamo-numismatic
augments:
  - dynamo-power
  - dynamo-efficiency
  - dynamo-coil-duct
  - dynamo-throttle
  - dynamo-numismatic-gem
---

> Might be a portal to an alternate dimension of pure avarice. Don't overthink
> it, just insert coins.


A **numismatic dynamo** is a [dynamo](/docs/dynamos/) fueled by currency, like
[emeralds](https://minecraft.gamepedia.com/Emerald) and metal coins.


Obtaining
---------

A placed numismatic dynamo can be instantly picked up by dismantling it with a
[crescent hammer](/docs/crescent-hammer/). Its configuration is preserved in the
item. It can also be mined using a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe), though this can be much
slower.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
A numismatic dynamo is initially at the lowest [tier](#tiers) (basic). It can be
upgraded to higher tiers using [upgrade kits](/docs/upgrade-kits/) and
[conversion kits](/docs/conversion-kits/).


Usage
-----

### Placement
When placed, a numismatic dynamo faces up. It can face any direction, and can be
rotated using a [crescent hammer](/docs/crescent-hammer/) or similar.

### Energy generation
When [fuel](#fuels) is placed in a numismatic dynamo's fuel slot, it will start
consuming it to generate [Redstone Flux](/docs/redstone-flux/). Every unit of
fuel yields a certain amount of energy when consumed.

The speed at which energy is generated and fuel is consumed depends on how much
power can be emitted, and on the dynamo's maximum power output. A basic
numismatic dynamo has a maximum power output of 40 RF/t. This can be increased
by upgrading the dynamo to a higher [tier](#tiers), and by installing certain
[augments](#augmentation).

When an active numismatic dynamo cannot emit the energy it generates, it will
keep working at its minimum power output (a tenth of its maximum power output).
Any more energy that is generated in this case is lost. This can be resolved by
installing an [excitation field
limiter](/docs/augment-excitation-field-limiter/).

### Input and output
A numismatic dynamo emits [Redstone Flux](/docs/redstone-flux/) from its coil,
which points in the direction the dynamo is facing. It only emits energy when it
is active. Items can enter a numismatic dynamo through its sides. They cannot
enter it through the coil, unless [transmission coil
ducting](/docs/augment-transmission-coil-ducting/) is installed.

### Redstone control
A numismatic dynamo may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The dynamo works whenever possible. This is the
default mode.

Low
: The dynamo works when *not* powered. When powered, it stops working.

High
: The dynamo only works when powered.

The current mode can be set using the Redstone Control tab in the dynamo's GUI.

When a numismatic dynamo must stop working due to a redstone signal and is still
generating energy from a consumed unit of fuel, it will finish generating energy
from that unit of fuel before stopping.

### Security
A numismatic dynamo can have a [signalum security
lock](/docs/signalum-security-lock/) installed to restrict who can access it.

### Redprints
A numismatic dynamo's configuration can be saved on a
[redprint](/docs/redprint/) to be copied to other dynamos.

### Light source
When a numismatic dynamo is active, it emits a light level of 7.


Tiers
-----

Numismatic dynamos come in six [tiers](/docs/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Max. power output | Augment slots |
|---
| Basic | 40 RF/t | 0 |
| Hardened | 60 RF/t | 1 |
| Reinforced | 80 RF/t | 2 |
| Signalum | 100 RF/t | 3 |
| Resonant / Creative | 120 RF/t | 4 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}


Augmentation
------------

A numismatic dynamo can have [augments](/docs/augments/) installed to improve
certain properties or to change how it works. The amount of augments that can be
installed depends on the dynamo's [tier](#tiers). A basic numismatic dynamo
cannot be augmented.

Augments can be installed in the Augmentation tab in a numismatic dynamo's GUI.

{% include augment-table.html augments=page.augments %}


Fuels
-----

The following items can be consumed by a numismatic dynamo to generate varying
amounts of energy.

| Fuel | Energy per unit |
|---
| [Emerald](https://minecraft.gamepedia.com/Emerald) | 200,000 RF |
| [Iron Coin](/docs/iron-coin/) | 30,000 RF |
| [Gold Coin](/docs/gold-coin/) | 40,000 RF |
| [Copper Coin](/docs/copper-coin/) | 30,000 RF |
| [Tin Coin](/docs/tin-coin/) | 30,000 RF |
| [Silver Coin](/docs/silver-coin/) | 40,000 RF |
| [Lead Coin](/docs/lead-coin/) | 40,000 RF |
| [Aluminum Coin](/docs/aluminum-coin/) | 40,000 RF |
| [Nickel Coin](/docs/nickel-coin/) | 60,000 RF |
| [Platinum Coin](/docs/platinum-coin/) | 80,000 RF |
| [Iridium Coin](/docs/iridium-coin/) | 100,000 RF |
| [Mana Infused Coin](/docs/mana-infused-coin/) | 150,000 RF |
| [Steel Coin](/docs/steel-coin/) | 40,000 RF |
| [Electrum Coin](/docs/electrum-coin/) | 40,000 RF |
| [Invar Coin](/docs/invar-coin/) | 40,000 RF |
| [Bronze Coin](/docs/bronze-coin/) | 30,000 RF |
| [Constantan Coin](/docs/constantan-coin/) | 45,000 RF |
| [Signalum Coin](/docs/signalum-coin/) | 100,000 RF |
| [Lumium Coin](/docs/lumium-coin/) | 100,000 RF |
| [Enderium Coin](/docs/enderium-coin/) | 150,000 RF |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
