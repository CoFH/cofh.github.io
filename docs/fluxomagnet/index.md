---
title: Fluxomagnet
nav: thermal-innovation
image:
  - alt: Fluxomagnet (Basic)
    file: thermal-innovation/magnet-basic.png
  - alt: Fluxomagnet (Hardened)
    file: thermal-innovation/magnet-hardened.png
  - alt: Fluxomagnet (Reinforced)
    file: thermal-innovation/magnet-reinforced.png
  - alt: Fluxomagnet (Signalum)
    file: thermal-innovation/magnet-signalum.png
  - alt: Fluxomagnet (Resonant)
    file: thermal-innovation/magnet-resonant.png
  - alt: Fluxomagnet (Creative)
    file: thermal-innovation/magnet-creative.png
recipes:
  crafting:
    - magnet-basic
    - magnet-hardened
    - magnet-reinforced
    - magnet-signalum
    - magnet-resonant
---

A **fluxomagnet**, or **magnet** for short, is a tool that attracts dropped
items using [Redstone Flux](/docs/redstone-flux/).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Charging
A fluxomagnet can be charged with [Redstone Flux](/docs/redstone-flux/) using an
[energetic infuser](/docs/energetic-infuser/), a [flux
capacitor](/docs/flux-capacitor/) or similar.

A basic fluxomagnet can hold up to 40,000 RF and can be charged at up to 1,000
RF/t. This can be increased by upgrading the magnet to a higher [tier](#tiers).

### Attraction
A charged fluxomagnet can attract dropped items in a certain radius by
teleporting them to the wielder. It consumes 25 RF per attracted item.

A basic fluxomagnet can attract items within a radius of 6 blocks. This can be
increased by upgrading the magnet to a higher [tier](#tiers).

When used, a fluxomagnet attracts items within the radius around a point which
it is aimed at. This point can be up to 64 blocks away. The magnet consumes 250
RF (in addition to the energy consumed per attracted item) when used manually.

A fluxomagnet is also capable of automatically attracting items within its
radius around the wielder. This can be enabled and disabled by pressing "Cycle
Item Mode" (V by default) while holding the magnet.

A fluxomagnet set to automatically attract items attempts to do so every 8 ticks
(0.4 seconds). This can be temporarily disabled by sneaking.

### Filtering
A fluxomagnet can be configured to only attract items that match a given list of
items. This can be done by using the magnet while sneaking. It has various
options that determine how this list is used to match items.

Blacklist/Whitelist
: Treat the list of items as a blacklist (attract all items except these) or as
a whitelist (only attract these items). The list is used as a blacklist by
default.

Ore Dictionary
: Match items that are considered equivalent, like the various versions of
copper and tin ingots added by different mods. This is ignored by default.

Metadata
: Match items by their exact metadata / damage value. This is ignored by
default.

NBT
: Match items by their exact NBT data. This is ignored by default.

### Enchantments
A fluxomagnet can be enchanted with [Holding](/docs/holding/) to increase its
capacity.

| Holding level | Capacity multiplier |
|---
| I | × 1.5 |
| II | × 2 |
| III | × 2.5 |
| IV | × 3 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}


Tiers
-----

Fluxomagnets come in six [tiers](/docs/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Capacity | Max. charge rate | Radius | Filter slots | Note |
|---
| Basic | 40,000 RF | 1,000 RF/t | 6 blocks | 3 |
| Hardened | 120,000 RF | 4,000 RF/t | 7 blocks | 6 |
| Reinforced | 240,000 RF | 9,000 RF/t | 8 blocks | 9 |
| Signalum | 400,000 RF | 16,000 RF/t | 9 blocks | 12 |
| Resonant | 600,000 RF | 25,000 RF/t | 10 blocks | 15 |
| Creative | N/A | N/A | 10 blocks | 15 | Does not consume energy. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}
