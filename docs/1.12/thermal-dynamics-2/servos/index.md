---
title: Servos
image:
- alt: Servo
  file: thermal-dynamics-2/servo-basic.png
- alt: Hardened servo
  file: thermal-dynamics-2/servo-hardened.png
- alt: Reinforced servo
  file: thermal-dynamics-2/servo-reinforced.png
- alt: Signalum servo
  file: thermal-dynamics-2/servo-signalum.png
- alt: Resonant servo
  file: thermal-dynamics-2/servo-resonant.png
redirect_from:
- /docs/thermal-dynamics/attachments/servos/
- /docs/servos/
- /docs/thermal-dynamics/servos/
- /docs/thermal-dynamics-2/servos/
recipes:
  crafting:
  - td2-servo-basic
  - td2-servo-hardened
  - td2-servo-reinforced
  - td2-servo-signalum
  - td2-servo-resonant
  crafting-upgrading:
  - td2-servo-hardened-upgrade
  - td2-servo-reinforced-upgrade
  - td2-servo-signalum-upgrade
  - td2-servo-resonant-upgrade
---

**Servos** are items that can be installed on [itemduct](/docs/1.12/thermal-dynamics-2/itemduct/) and
[fluiduct](/docs/1.12/thermal-dynamics-2/fluiduct/) connections. They extract items or fluids from
adjacent blocks and insert them into the ducts.


Obtaining
--------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}

### Upgrading
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting-upgrading %}


Usage
-----

### Installation
A servo can be installed on an [itemduct](/docs/1.12/thermal-dynamics-2/itemduct/) or
[fluiduct](/docs/1.12/thermal-dynamics-2/fluiduct/) connection by using it on the connection. It can be
removed by using a [wrench](/docs/1.12/wrenches/) on it.

### Configuration
An installed servo can be configured by using it. The available options depend
on whether the servo is installed on an [itemduct](/docs/1.12/thermal-dynamics-2/itemduct/) or on a
[fluiduct](/docs/1.12/thermal-dynamics-2/fluiduct/).

A servo's configuration also affects items or fluids that are inserted into the
duct by the connected block.

A servo's configuration can be saved on a [redprint](/docs/1.12/thermal-foundation-2/redprint/) to be
copied to other servos, [filters](/docs/1.12/thermal-dynamics-2/filters/) or
[retrievers](/docs/1.12/thermal-dynamics-2/retrievers/).

### Redstone control
By default, a servo is only active when powered with
[redstone](https://minecraft.gamepedia.com/Redstone). However, this is
configurable. A servo can be in one of three modes:

Ignored
: Redstone control is disabled. The servo is always active.

Low
: The servo is active when *not* powered. When powered, it becomes inactive.

High
: The servo is only active when powered. This is the default mode.

### Item transfer
When installed on an [itemduct](/docs/1.12/thermal-dynamics-2/itemduct/) connection, an active servo
extracts items from the block it is connected to.

Items are extracted from a block in stacks. The maximum size of each stack and
the speed at which stacks are extracted depends on the servo's [tier](#tiers).
The maximum stack size can be configured to be lower.

Servos at higher tiers give extracted items a speed boost, causing them to move
faster through the itemducts.

### Item filtering
A servo can be configured to only extract items that match a given list of
items. It has various options that determine how this list is used to match
items. Some of these are only available at higher [tiers](#tiers).

Blacklist/Whitelist
: Treat the list of items as a blacklist (extract all items except these) or as
a whitelist (only extract these items). The list is used as a blacklist by
default.

Metadata
: Match items by their exact metadata / damage value. This is used by default.

NBT
: Match items by their exact NBT data. This is used by default.

Ore Dictionary
: Match items that are considered equivalent, like the various versions of
copper and tin ingots added by different mods. This is ignored by default.

Mod Owner
: Match items that are added by the same mod. This is ignored by default.

### Item routing
At higher [tiers](#tiers), a servo can be configured to prefer sending items to
certain blocks in the network.

Nearest-First
: Items are sent to the connected block that has the shortest path to it first,
taking into account [dense and vacuum itemducts](/docs/1.12/thermal-dynamics-2/itemduct/#item-transfer).
This is the default mode.

Furthest-First
: Items are sent to the connected block that has the longest path to it first,
taking into account [dense and vacuum itemducts](/docs/1.12/thermal-dynamics-2/itemduct/#item-transfer).

Random
: Each item is sent to a random connected block.

Round Robin
: Items are sent to each connected block in a repeating order.

### Fluid transfer
When installed on a [fluiduct](/docs/1.12/thermal-dynamics-2/fluiduct/) connection, an active servo
extracts fluids from the block it is connected to. The rate at which fluids are
extracted depends on the servo's [tier](#tiers).

### Fluid filtering
A servo can be configured to only extract fluids that match a given list of
fluids. The servo has various options that determine how this list is used to
match fluids.

Blacklist/Whitelist
: Treat the list of fluids as a blacklist (extract all fluids except these) or
as a whitelist (only extract these fluids). The list is used as a blacklist by
default.

NBT
: Match fluids by their exact NBT data. This is used by default.


Tiers
-----

Servos come in five [tiers](/docs/1.12/thermal-foundation-2/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Item extraction rate | Max. item stack size | Item speed boost | Item filter options | Extracts from multiple slots | Configurable item routing | Fluid extraction rate | Filter slots |
|---
| Basic | 3s | 8 | - | Blacklist/Whitelist | No | No | 50% | 3 |
| Hardened | 2s | 16 | - | Blacklist/Whitelist, Metadata | No | No | 75% | 6 |
| Reinforced | 1s | 32 | - | All | No | Yes | 100% | 9 |
| Signalum | 0.5s | 64 | × 2 | All | Yes | Yes | 150% | 12 |
| Resonant | 0.5s | 64 | × 3 | All | Yes | Yes | 200% | 15 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small}
</div>
{::options parse_block_html="false" /}
