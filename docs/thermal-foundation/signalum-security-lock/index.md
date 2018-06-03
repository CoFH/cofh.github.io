---
title: Signalum Security Lock
nav: thermal-foundation
redirect_from:
  - /docs/thermal-expansion/materials/signalum-security-lock/
  - /docs/thermal-foundation/items/signalum-security-lock/
  - /docs/thermal-foundation/items/other/signalum-security-lock/
  - /docs/signalum-security-lock/
recipes:
  crafting:
    - tf2-signalum-security-lock
---

![Signalum security lock](/assets/images/thermal-foundation/signalum-security-lock.png){:style="height: 128px"}


**Signalum security locks** are items that can be installed on certain blocks
and items to restrict who can access them.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
A signalum security lock can be installed on a block by using it on the block.
It can be installed on an item by combining it with the item in a crafting grid.

When a signalum security lock is held in the player's offhand, it is
automatically installed on blocks when they are placed.

Installing signalum security locks only works on blocks and items that support
it. Most blocks and items in [Thermal Expansion](/docs/thermal-expansion/) that
can contain items or fluids support signalum security locks.

### Security
A secured block or item can be in one of three modes:

Public Access
: Anyone can access the block or item. This is the default mode.

Restricted
: The owner and any of their [friends](/docs/cofh-core/friend-list/) can access the block
or item.

Owner Only
: Only the owner can access the block or item.

The current mode can be set using the Security tab in the GUI of the block or
item.

When dropped, a secured block or item cannot be destroyed by things like
[lava](https://minecraft.gamepedia.com/Lava) and
[cacti](https://minecraft.gamepedia.com/Cactus). However, it still despawns
after 5 minutes.
