---
category: Items
recipes:
  crafting-shaped:
  - tf-1-12-signalum-security-lock
show-image: false
subcategory: Utilities
subjects:
- tf-1-12-signalum-security-lock
title: Signalum Security Lock
---

![Signalum security lock](/assets/images/docs/1.12/thermal-foundation/signalum-security-lock.png){:style="height: 128px"}


**Signalum security locks** are items that can be installed on certain blocks
and items to restrict who can access them.


Obtaining
---------

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.recipes.crafting-shaped no-result=true %}


Usage
-----

### Installation
A signalum security lock can be installed on a block by using it on the block.
It can be installed on an item by combining it with the item in a crafting grid.

When a signalum security lock is held in the player's offhand, it is
automatically installed on blocks when they are placed.

Installing signalum security locks only works on blocks and items that support
it. Most blocks and items in [Thermal Expansion](../../thermal-expansion/) that
can contain items or fluids support signalum security locks.

### Security
A secured block or item can be in one of three modes:

Public Access
: Anyone can access the block or item. This is the default mode.

Restricted
: The owner and any of their [friends](../../cofh-core/friend-list/) can access the block
or item.

Owner Only
: Only the owner can access the block or item.

The current mode can be set using the Security tab in the GUI of the block or
item.

When dropped, a secured block or item cannot be destroyed by things like
[lava](https://minecraft.gamepedia.com/Lava) and
[cacti](https://minecraft.gamepedia.com/Cactus). However, it still despawns
after a while.
