---
title: Flux Capacitor
image:
- alt: Flux capacitor (Basic)
  file: thermal-expansion-5/flux-capacitor-basic.png
- alt: Flux capacitor (Hardened)
  file: thermal-expansion-5/flux-capacitor-hardened.png
- alt: Flux capacitor (Reinforced)
  file: thermal-expansion-5/flux-capacitor-reinforced.png
- alt: Flux capacitor (Signalum)
  file: thermal-expansion-5/flux-capacitor-signalum.png
- alt: Flux capacitor (Resonant)
  file: thermal-expansion-5/flux-capacitor-resonant.png
- alt: Flux capacitor (Creative)
  file: thermal-expansion-5/flux-capacitor-creative.png
redirect_from:
- /docs/thermal-expansion/storage/flux-capacitors/
- /docs/thermal-expansion/storage/flux-capacitor/
- /docs/flux-capacitor/
- /docs/thermal-expansion/flux-capacitor/
- /docs/thermal-expansion-5/flux-capacitor/
- /docs/1.12/thermal-expansion-5/flux-capacitor/
recipes:
  crafting:
  - te-1-12-flux-capacitor-basic
  - te-1-12-flux-capacitor-hardened
  - te-1-12-flux-capacitor-reinforced
  - te-1-12-flux-capacitor-signalum
  - te-1-12-flux-capacitor-resonant
---

A **flux capacitor** is an item that stores [Redstone
Flux](../../../redstone-flux/) and can use it to charge items in a player's
inventory.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Redstone Flux battery
A flux capacitor can be charged with [Redstone Flux](../../../redstone-flux/) using
an [energetic infuser](../energetic-infuser/), another flux capacitor or
similar. It can be placed in [machines](../machines/) or [enervation
dynamos](../enervation-dynamo/) to provide them with energy.

A basic flux capacitor can hold up to 1,000,000 RF, can be charged at up to
2,000 RF/t, and can be discharged at up to 1,000 RF/t. This can be increased by
upgrading the flux capacitor to a higher [tier](#tiers).

### Charging items
A charged flux capacitor can be activated and deactivated by using it while
sneaking. When active, a flux capacitor charges items that can hold [Redstone
Flux](../../../redstone-flux/) in a player's inventory.

A flux capacitor can be set to charge a player's held and worn items (the
default mode), other items in their inventory that are not equipped, or all
items in their inventory. The current charging mode of a flux capacitor can be
switched by pressing "Cycle Item Mode" (V by default) while holding it.

If [Baubles](https://www.curseforge.com/minecraft/mc-mods/baubles) is installed,
flux capacitors can be equipped as baubles in any slot.

### Wireless charging
An [energetic infuser](../energetic-infuser/) with [parabolic flux
coupling](../augment-parabolic-flux-coupling/) installed can wirelessly
recharge flux capacitors of players within a radius of 32 blocks.

### Dyeing
A flux capacitor can be dyed by combining it with a
[dye](https://minecraft.gamepedia.com/Dye) in a crafting grid. The dye can be
removed by placing the flux capacitor in a crafting grid.

### Enchantments
A flux capacitor can be enchanted with [Holding](../../cofh-core/holding/) to increase its
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

Flux capacitors come in six [tiers](../../thermal-foundation/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Capacity | Max. charge rate | Max. discharge rate | Note |
|---
| Basic | 1,000,000 RF | 2,000 RF/t | 1,000 RF/t |
| Hardened | 4,000,000 RF | 8,000 RF/t | 4,000 RF/t |
| Reinforced | 9,000,000 RF | 18,000 RF/t | 9,000 RF/t |
| Signalum | 16,000,000 RF | 32,000 RF/t | 16,000 RF/t |
| Resonant | 25,000,000 RF | 50,000 RF/t | 25,000 RF/t |
| Creative | N/A | N/A | 250,000 RF/t | Provides an unlimited amount of energy. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}
