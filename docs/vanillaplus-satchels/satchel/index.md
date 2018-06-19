---
title: Satchel (Vanilla+ Satchels)
nav: vanillaplus-satchels
image:
  - alt: Satchel
    file: vanillaplus-satchels/satchel-basic.png
  - alt: Iron satchel
    file: vanillaplus-satchels/satchel-iron.png
  - alt: Gold satchel
    file: vanillaplus-satchels/satchel-gold.png
  - alt: Diamond satchel
    file: vanillaplus-satchels/satchel-diamond.png
  - alt: Emerald satchel
    file: vanillaplus-satchels/satchel-emerald.png
recipes:
  crafting:
    - vps-satchel-basic
    - vps-satchel-iron
    - vps-satchel-gold
    - vps-satchel-diamond
    - vps-satchel-emerald
---

A **satchel** is an item that stores other items. It is able to automatically
store picked up items.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Item storage
A satchel can be opened by using it. When opened, items can be put in or taken
out, like with [chests](https://minecraft.gamepedia.com/Chest).

Satchels cannot store certain items that can themselves store items, such as
other satchels.

### Item transfer
A satchel's contents can be transferred into a block that stores items by using
the satchel on the block while sneaking.

### Auto-collect
A satchel is able to automatically store items picked up by its user. This is
called auto-collect. Auto-collect can be enabled and disabled by pressing "Cycle
Item Mode" (V by default) while holding the satchel.

A satchel can be configured to only auto-collect items that match a given list
of items. This can be done by using the satchel while sneaking. It has various
options that determine how this list is used to match items.

Blacklist/Whitelist
: Treat the list of items as a blacklist (store all items except these) or as a
whitelist (only store these items). The list is used as a blacklist by default.

Ore Dictionary
: Match items that are considered equivalent, like the various versions of
copper and tin ingots added by different mods. This is ignored by default.

Metadata
: Match items by their exact metadata / damage value. This is ignored by
default.

NBT
: Match items by their exact NBT data. This is ignored by default.

### Dyeing
The body and flap of a satchel can be dyed by combining the satchel with
[dyes](https://minecraft.gamepedia.com/Dye) in a crafting grid. The body and/or
flap are dyed depending on the dyes' positions around the satchel in the
crafting grid. The dyes can be removed by placing the satchel in a crafting
grid.

### Security
A satchel can be secured to restrict who can access it. This is done by
combining the satchel with [obsidian](https://minecraft.gamepedia.com/Obsidian)
in a crafting grid. A secured satchel can be in one of three modes:

Public Access
: Anyone can access the satchel. This is the default mode.

Restricted
: The owner and any of their [friends](/docs/cofh-core/friend-list/) can access
the satchel.

Owner Only
: Only the owner can access the satchel.

The current mode can be set using the Security tab in the satchel's GUI.

When dropped, a secured satchel cannot be destroyed by things like
[lava](https://minecraft.gamepedia.com/Lava) and
[cacti](https://minecraft.gamepedia.com/Cactus). However, it still despawns
after a while.

### Enchantments
A satchel can be enchanted with [Holding](/docs/cofh-core/holding/) to increase
its capacity.

| Holding level | Capacity increase (slots) |
|---
| I | + 9 |
| II | + 18 |
| III | + 27 |
| IV | + 36 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}


Tiers
-----

Satchels come in five tiers.

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Type | Capacity (slots) | Auto-collect filter slots |
|---
| Basic | 9 | 3 |
| Iron | 18 | 6 |
| Gold | 27 | 9 |
| Diamond | 36 | 12 |
| Emerald | 45 | 15 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}
