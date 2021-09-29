---
subjects:
- ti-1-12-fluxomagnet-basic
image:
- alt: Fluxomagnet (Basic)
  file: thermal-innovation/fluxomagnet-basic.png
- alt: Fluxomagnet (Hardened)
  file: thermal-innovation/fluxomagnet-hardened.png
- alt: Fluxomagnet (Reinforced)
  file: thermal-innovation/fluxomagnet-reinforced.png
- alt: Fluxomagnet (Signalum)
  file: thermal-innovation/fluxomagnet-signalum.png
- alt: Fluxomagnet (Resonant)
  file: thermal-innovation/fluxomagnet-resonant.png
- alt: Fluxomagnet (Creative)
  file: thermal-innovation/fluxomagnet-creative.png
recipes:
  crafting-shaped:
  - ti-1-12-fluxomagnet-basic
  - ti-1-12-fluxomagnet-hardened
  - ti-1-12-fluxomagnet-reinforced
  - ti-1-12-fluxomagnet-signalum
  - ti-1-12-fluxomagnet-resonant
title: Fluxomagnet
---

A **fluxomagnet**, or **magnet** for short, is a tool that attracts dropped
items using [Redstone Flux](/docs/redstone-flux/).


Obtaining
---------

### Crafting
{{<recipe_table type="crafting-shaped" ids_param="recipes.crafting-shaped">}}


Usage
-----

### Charging
A fluxomagnet can be charged with [Redstone Flux](/docs/redstone-flux/) using an
[energetic infuser](../../thermal-expansion/energetic-infuser/), a [flux
capacitor](../../thermal-expansion/flux-capacitor/) or similar.

A basic fluxomagnet can hold up to 40,000 RF and can be charged at up to 1,000
RF/t. This can be increased by upgrading the magnet to a higher [tier](#tiers).

### Attraction
A charged fluxomagnet can attract dropped items in a certain radius by
teleporting them to the wielder. It consumes 25 RF per attracted item.

A basic fluxomagnet can attract items within a radius of 4 blocks. This can be
increased by upgrading the magnet to a higher [tier](#tiers).

When used, a fluxomagnet attracts items within the radius around a point which
it is aimed at. This point can be up to 64 blocks away. The magnet consumes 250
RF (in addition to the energy consumed per attracted item) when used manually.

A fluxomagnet is also capable of automatically attracting items within its
radius around the wielder. This can be enabled and disabled by pressing "Cycle
Item Mode" (V by default) while holding the magnet.

A fluxomagnet set to automatically attract items attempts to do so every 8 ticks
(0.4 seconds). This can be temporarily disabled by sneaking.

If [Baubles](https://www.curseforge.com/minecraft/mc-mods/baubles) is installed,
fluxomagnets can be equipped as baubles in any slot.

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

### Dyeing
A fluxomagnet can be dyed by combining it with a
[dye](https://minecraft.gamepedia.com/Dye) in a crafting grid. The dye can be
removed by placing the fluxomagnet in a crafting grid.

### Enchantments
A fluxomagnet can be enchanted with [Holding](../../cofh-core/holding/) to increase its
capacity.

| Holding level | Capacity multiplier |
|---|---|
| I | × 1.5 |
| II | × 2 |
| III | × 2.5 |
| IV | × 3 |



Tiers
-----

Fluxomagnets come in six [tiers](../../thermal-foundation/tiers/).



| Tier | Capacity | Max. charge rate | Radius | Filter slots | Note |
|---|---|---|---|---|---|
| Basic | 40,000 RF | 1,000 RF/t | 4 blocks | 3 |
| Hardened | 120,000 RF | 4,000 RF/t | 5 blocks | 6 |
| Reinforced | 240,000 RF | 9,000 RF/t | 6 blocks | 9 |
| Signalum | 400,000 RF | 16,000 RF/t | 7 blocks | 12 |
| Resonant | 600,000 RF | 25,000 RF/t | 8 blocks | 15 |
| Creative | N/A | N/A | 8 blocks | 15 | Does not consume energy. |



