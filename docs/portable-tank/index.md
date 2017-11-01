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

### Input and output
Fluids can enter and exit a portable tank through its sides.

A portable tank can be configured to automatically emit fluids through the
bottom using a [crescent hammer](/docs/crescent-hammer/) or similar. When placed
on top of another portable tank, it will automatically be configured to do this.

### Item form
A portable tank in item form can be filled and emptied using a [fluid
transposer](/docs/fluid-transposer/). It can be used on placed portable tanks to
move fluids around. It can also be used to more quickly craft things that
require fluids to craft, like [signalum blend](/docs/signalum-blend/).

### Enchantments
A portable tank can be enchanted with [Holding](/docs/holding/) to increase its
capacity.

| Holding level | Capacity multiplier |
|---
| I | 1.5x |
| II | 2x |
| III | 2.5x |
| IV | 3x |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}

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
| Creative | N/A | Provides an unlimited amount of a fluid when filled. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}
