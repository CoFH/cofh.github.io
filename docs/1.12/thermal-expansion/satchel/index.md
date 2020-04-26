---
title: Satchel
image:
- alt: Satchel (Basic)
  file: thermal-expansion-5/satchel-basic.png
- alt: Satchel (Hardened)
  file: thermal-expansion-5/satchel-hardened.png
- alt: Satchel (Reinforced)
  file: thermal-expansion-5/satchel-reinforced.png
- alt: Satchel (Signalum)
  file: thermal-expansion-5/satchel-signalum.png
- alt: Satchel (Resonant)
  file: thermal-expansion-5/satchel-resonant.png
- alt: Satchel (Void)
  file: thermal-expansion-5/satchel-void.gif
- alt: Satchel (Creative)
  file: thermal-expansion-5/satchel-creative.png
redirect_from:
- /docs/thermal-expansion/storage/satchels/
- /docs/thermal-expansion/storage/satchel/
- /docs/satchel/
- /docs/thermal-expansion/satchel/
- /docs/thermal-expansion-5/satchel/
- /docs/1.12/thermal-expansion-5/satchel/
recipes:
  crafting:
  - te-1-12-satchel-basic-using-leather
  - te-1-12-satchel-basic-using-rockwool
  - te-1-12-satchel-hardened
  - te-1-12-satchel-reinforced
  - te-1-12-satchel-signalum
  - te-1-12-satchel-resonant
  - te-1-12-satchel-void-using-leather
  - te-1-12-satchel-void-using-rockwool
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
other satchels or [strongboxes](../strongbox/).

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
A satchel can have a [signalum security lock](../../thermal-foundation/signalum-security-lock/)
installed to restrict who can access it.

### Enchantments
A satchel can be enchanted with [Holding](../../cofh-core/holding/) to increase its
capacity.

| Holding level | Capacity increase (slots) |
|---
| I | + 9 |
| II | + 18 |
| III | + 27 |
| IV | + 36 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}


Types
-----

There are seven different satchel types, most of which are
[tiers](../../thermal-foundation/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Type | Capacity (slots) | Auto-collect filter slots | Note |
|---
| Basic | 9 | 3 |
| Hardened | 18 | 6 |
| Reinforced | 27 | 9 |
| Signalum | 36 | 12 |
| Resonant | 45 | 15 |
| Void | 1 | 15 | Destroys any items it receives. |
| Creative | 1 | N/A | Provides an unlimited amount of the item it stores. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}
