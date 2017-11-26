---
title: Servos
nav: thermal-dynamics
image:
  - alt: Servo
    file: thermal-dynamics/servo-basic.png
  - alt: Hardened servo
    file: thermal-dynamics/servo-hardened.png
  - alt: Reinforced servo
    file: thermal-dynamics/servo-reinforced.png
  - alt: Signalum servo
    file: thermal-dynamics/servo-signalum.png
  - alt: Resonant servo
    file: thermal-dynamics/servo-resonant.png
redirect_from:
  - /docs/thermal-dynamics/attachments/servos/
recipes:
  crafting:
    - servo-basic
    - servo-hardened
    - servo-reinforced
    - servo-signalum
    - servo-resonant
  crafting-upgrading:
    - servo-hardened-upgrade
    - servo-reinforced-upgrade
    - servo-signalum-upgrade
    - servo-resonant-upgrade
---

**Servos** are items that can be installed on [itemduct](/docs/itemduct/) and
[fluiduct](/docs/fluiduct/) connections. They extract items or fluids from
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
A servo can be installed on an [itemduct](/docs/itemduct/) or
[fluiduct](/docs/fluiduct/) connection by using it on the connection. It can be
removed by using a [crescent hammer](/docs/crescent-hammer/) or similar on it.

### Configuration
An installed servo can be configured by using it. The available options depend
on whether the servo is installed on an [itemduct](/docs/itemduct/) or on a
[fluiduct](/docs/fluiduct/).

A servo's configuration also affects items or fluids that are inserted into the
duct by the connected block.

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

### Item extraction
When installed on an [itemduct](/docs/itemduct/) connection, an active servo
extracts items from the block it is connected to.

Items are extracted from a block in stacks. The maximum size of each stack and
the speed at which stacks are extracted depends on the servo's [tier](#tiers).
The maximum stack size can be configured to be lower.

Servos at higher tiers give extracted items a speed boost, causing them to move
faster through the itemducts.

### Item filtering
A servo can be configured to only extract items that match a given list of
items. The servo has various options that determine how this list is used to
match items. Some of these are only available at higher [tiers](#tiers).

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
A servo can be configured to prefer sending items to certain blocks in the
network.

Nearest-First
: Items are sent to the nearest connected block first. This is the default mode.

Furthest-First
: Items are sent to the furthest connected block first.

Random
: Each item is sent to a random connected block.

Round Robin
: Items are evenly divided over each connected block.

### Fluid extraction
When installed on a [fluiduct](/docs/fluiduct/) connection, an active servo
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

Servos come in six tiers. These tiers are mostly equivalent to the
[tiers](/docs/tiers/) used by [Thermal Expansion](/docs/thermal-expansion/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Item extraction rate | Max. item stack size | Item speed boost | Item filter options | Extracts from multiple slots | Fluid extraction rate |
|---
| Basic | 3s | 8 | - | Blacklist/Whitelist | No | 50% |
| Hardened | 2s | 16 | - | Blacklist/Whitelist, Metadata | No | 75% |
| Reinforced | 1s | 32 | - | All | No | 100% |
| Signalum | 0.5s | 64 | × 2 | All | Yes | 150% |
| Resonant | 0.5s | 64 | × 3 | All | Yes | 200% |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}
