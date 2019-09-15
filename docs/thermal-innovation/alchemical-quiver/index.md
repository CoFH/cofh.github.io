---
title: Alchemical Quiver
nav: thermal-innovation
redirect_from:
  - /docs/alchemical-quiver/
image:
  - alt: Alchemical quiver (Basic)
    file: thermal-innovation/alchemical-quiver-basic.png
  - alt: Alchemical quiver (Hardened)
    file: thermal-innovation/alchemical-quiver-hardened.png
  - alt: Alchemical quiver (Reinforced)
    file: thermal-innovation/alchemical-quiver-reinforced.png
  - alt: Alchemical quiver (Signalum)
    file: thermal-innovation/alchemical-quiver-signalum.png
  - alt: Alchemical quiver (Resonant)
    file: thermal-innovation/alchemical-quiver-resonant.png
  - alt: Alchemical quiver (Creative)
    file: thermal-innovation/alchemical-quiver-creative.png
recipes:
  crafting:
    - ti-alchemical-quiver-basic
    - ti-alchemical-quiver-hardened
    - ti-alchemical-quiver-reinforced
    - ti-alchemical-quiver-signalum
    - ti-alchemical-quiver-resonant
---

An **alchemical quiver** is an item that stores
[arrows](https://minecraft.gamepedia.com/Arrows) and can automatically imbue
them with [fluid potions](/docs/thermal-foundation/potion-fluid/).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Arrow storage
When an alchemical quiver is used,
[arrows](https://minecraft.gamepedia.com/Arrow) in the user's inventory are
stored in it. The quiver can then be used as ammunition for
[bows](https://minecraft.gamepedia.com/Bow). When the quiver is used while
sneaking, stored arrows are removed from it.

A basic alchemical quiver can store up to 40 arrows. This can be increased by
upgrading the quiver to a higher [tier](#tiers).

### Filling and draining
An alchemical quiver can hold the [fluid form](/docs/thermal-foundation/potion-fluid/) or any
regular [potion](https://minecraft.gamepedia.com/Potion). It can be filled and
drained manually by using it on a block that can hold fluid potions, or
automatically using a [fluid transposer](/docs/thermal-expansion/fluid-transposer/) or similar. It
can also be filled by combining it with a potion in a crafting grid.

A basic alchemical quiver can store up to 8 bottles worth of a potion (2,000
mB). This can be increased by upgrading the alchemical quiver to a higher
[tier](#tiers).

An alchemical quiver only works with regular potions; it does not work with
[splash potions](https://minecraft.gamepedia.com/Splash_Potion) or [lingering
potions](https://minecraft.gamepedia.com/Lingering_Potion).

### Imbuing arrows
A filled alchemical quiver is capable of automatically imbuing
[arrows](https://minecraft.gamepedia.com/Arrow) with the contained potion. This
can be enabled and disabled by pressing "Cycle Item Mode" (V by default) while
holding the quiver.

When used as ammunition for a [bow](https://minecraft.gamepedia.com/Bow), an
active alchemical quiver imbues a stored arrow with 50 mB of the contained
potion, turning the arrow into a [tipped
arrow](https://minecraft.gamepedia.com/Tipped_Arrow) before it is fired.

### Dyeing
The top and bottom parts of an alchemical quiver can be dyed by combining the
quiver with [dyes](https://minecraft.gamepedia.com/Dye) in a crafting grid. The
top and/or bottom parts are dyed depending on the dyes' positions around the
quiver in the crafting grid. The dyes can be removed by placing the quiver in a
crafting grid.

### Enchantments
An alchemical quiver can be enchanted with [Holding](/docs/cofh-core-4/holding/) to increase
its arrow and potion capacity.

| Holding level | Capacity multiplier |
|---
| I | × 1.5 |
| II | × 2 |
| III | × 2.5 |
| IV | × 3 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}


Tiers
-----

Alchemical quivers come in six [tiers](/docs/thermal-foundation/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Arrow capacity | Potion capacity | (bottles) | Note |
|---
| Basic | 40 | 2,000 mB | 8 |
| Hardened | 120 | 6,000 mB | 24 |
| Reinforced | 240 | 12,000 mB | 48 |
| Signalum | 400 | 20,000 mB | 80 |
| Resonant | 600 | 30,000 mB | 120 |
| Creative | N/A | N/A | | Provides infinite arrows and an unlimited amount of the potion it holds. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small}
</div>
{::options parse_block_html="false" /}
