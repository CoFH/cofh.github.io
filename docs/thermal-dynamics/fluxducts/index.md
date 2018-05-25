---
title: Fluxducts
nav: thermal-dynamics
image:
  - alt: Leadstone fluxduct
    file: thermal-dynamics/fluxduct-leadstone.png
  - alt: Hardened fluxduct
    file: thermal-dynamics/fluxduct-hardened.png
  - alt: Redstone energy fluxduct
    file: thermal-dynamics/fluxduct-redstone-energy.png
  - alt: Signalum fluxduct
    file: thermal-dynamics/fluxduct-signalum.png
  - alt: Resonant fluxduct
    file: thermal-dynamics/fluxduct-resonant.png
  - alt: Cryo-stabilized fluxduct
    file: thermal-dynamics/fluxduct-cryo-stabilized.png
redirect_from:
  - /thermal-expansion/energy/energy-conduits/
  - /docs/thermal-dynamics/ducts/fluxducts/
  - /docs/fluxducts/
---

**Fluxducts** are blocks that transfer [Redstone Flux](/docs/redstone-flux/)
between blocks.


Obtaining
---------

Fluxducts come in six [tiers](#tiers), each with their own recipes.

A placed fluxduct can be instantly picked up by dismantling it with a
[wrench](/docs/wrenches/). It can also be mined using a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe).


Usage
-----

### Placement
When placed, a fluxduct connects to any adjacent fluxducts and blocks that can
transmit or receive [Redstone Flux](/docs/redstone-flux/). Any connected side of
a fluxduct can be disconnected and reconnected by using a
[wrench](/docs/wrenches/) on it.

### Energy transfer
When a block transmits [Redstone Flux](/docs/redstone-flux/) through a fluxduct,
the energy is distributed to all connected blocks that can receive it, as evenly
as possible.

A limited amount of energy per tick can be transferred through each fluxduct
connection. However, there is no limit on how much power can travel through a
fluxduct itself.

A network of fluxducts can store a certain amount of energy, so that unloaded
[chunks](https://minecraft.gamepedia.com/Chunk) do not immediately cause it to
stop supplying energy. The energy capacity of a network is proportional to the
amount of blocks connected to it.


Tiers
-----

Fluxducts come in six [tiers](/docs/thermal-foundation/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Max. transfer per connection | Note |
|---
| [Leadstone](/docs/thermal-dynamics/leadstone-fluxduct/) | 1,000 RF/t |
| [Hardened](/docs/thermal-dynamics/hardened-fluxduct/) | 4,000 RF/t |
| [Redstone Energy](/docs/thermal-dynamics/redstone-energy-fluxduct/) | 9,000 RF/t |
| [Signalum](/docs/thermal-dynamics/signalum-fluxduct/) | 16,000 RF/t |
| [Resonant](/docs/thermal-dynamics/resonant-fluxduct/) | 25,000 RF/t |
| [Cryo-Stabilized](/docs/thermal-dynamics/cryo-stabilized-fluxduct/) | N/A | No transfer limit; does not store energy. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}
