---
title: Portable Tank
nav: thermal-expansion
image:
  - alt: Portable tank (Basic)
    file: thermal-expansion/portable-tank-basic.png
  - alt: Portable tank (Hardened)
    file: thermal-expansion/portable-tank-hardened.png
  - alt: Portable tank (Reinforced)
    file: thermal-expansion/portable-tank-reinforced.png
  - alt: Portable tank (Signalum)
    file: thermal-expansion/portable-tank-signalum.png
  - alt: Portable tank (Resonant)
    file: thermal-expansion/portable-tank-resonant.png
  - alt: Portable tank (Creative)
    file: thermal-expansion/portable-tank-creative.png
redirect_from:
  - /docs/thermal-expansion/storage/portable-tanks/
  - /docs/thermal-expansion/storage/portable-tank/
recipes:
  crafting:
    - portable-tank-basic
---

A **portable tank** is a block that stores a large amount of a fluid.


Obtaining
---------

A placed portable tank can be instantly picked up by dismantling it with a
[crescent hammer](/docs/crescent-hammer/). Its stored fluid and configuration
are preserved in the item. It can also be mined using a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe), though this can be much
slower.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
A portable tank is initially at the lowest [tier](#tiers) (basic). It can be
upgraded to higher tiers using [upgrade kits](/docs/upgrade-kits/) and
[conversion kits](/docs/conversion-kits/).


Usage
-----

### Manual usage
Fluids can be put in and taken out of a portable tank using
[buckets](https://minecraft.gamepedia.com/Buckets) or other items that can hold
fluids.

### Configuration
A portable tank can be configured by using a [multimeter](/docs/multimeter/) on
it while sneaking, which opens the tank's GUI. Some aspects of the tank can also
be configured without opening the GUI.

### Input and output
Fluids can enter and exit a portable tank through its sides.

A placed portable tank can automatically transfer fluids out of the bottom. This
is called auto-output. Auto-output can be enabled in the tank's GUI, or by using
a [crescent hammer](/docs/crescent-hammer/) or similar. When a portable tank is
placed on top of another portable tank, auto-output is enabled automatically for
the upper tank.

A placed portable tank can be locked to only accept the fluid it currently
holds, even when it becomes empty. This can be toggled in the tank's GUI, or by
using it while sneaking.

### Item form
A portable tank in item form can be filled and emptied using a [fluid
transposer](/docs/fluid-transposer/). It can be used on placed portable tanks to
move fluids around. It can also be used to more quickly craft things that
require fluids to craft, like [signalum blend](/docs/signalum-blend/).

### Redstone control
A placed portable tank may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. When auto-output is enabled, the tank outputs
fluid whenever possible. This is the default mode.

Low
: When auto-output is enabled, the tank outputs fluid when *not* powered. When
powered, it stops outputting fluid.

High
: When auto-output is enabled, the tank only outputs fluid when powered.

The current mode can be set using the Redstone Control tab in the portable
tank's GUI.

### Security
A portable tank can have a [signalum security
lock](/docs/signalum-security-lock/) installed to restrict who can access it.

### Enchantments
A portable tank can be enchanted with [Holding](/docs/holding/) to increase its
capacity.

| Holding level | Capacity multiplier |
|---
| I | × 1.5 |
| II | × 2 |
| III | × 2.5 |
| IV | × 3 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}

### Redprints
A portable tank's configuration can be saved on a [redprint](/docs/redprint/) to
be copied to other portable tanks.

### Light source
A portable tank will emit light when it contains a fluid that emits light, like
[lava](https://minecraft.gamepedia.com/Lava) or [energized
glowstone](/docs/energized-glowstone/).

### Redstone comparators
When placed next to a portable tank, a [redstone
comparator](https://minecraft.gamepedia.com/Redstone_Comparator) emits a signal
strength of between 0 and 15, depending on how full the tank is.


Tiers
-----

Portable tanks come in six [tiers](/docs/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Capacity | Note |
|---
| Basic | 20,000 mB |
| Hardened | 80,000 mB |
| Reinforced | 180,000 mB |
| Signalum | 320,000 mB |
| Resonant | 500,000 mB |
| Creative | N/A | Provides an unlimited amount of the fluid it stores. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}
