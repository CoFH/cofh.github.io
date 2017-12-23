---
title: Flux Capacitor
nav: thermal-expansion
image:
  - alt: Flux capacitor (Basic)
    file: thermal-expansion/flux-capacitor-basic.png
  - alt: Flux capacitor (Hardened)
    file: thermal-expansion/flux-capacitor-hardened.png
  - alt: Flux capacitor (Reinforced)
    file: thermal-expansion/flux-capacitor-reinforced.png
  - alt: Flux capacitor (Signalum)
    file: thermal-expansion/flux-capacitor-signalum.png
  - alt: Flux capacitor (Resonant)
    file: thermal-expansion/flux-capacitor-resonant.png
  - alt: Flux capacitor (Creative)
    file: thermal-expansion/flux-capacitor-creative.png
redirect_from:
  - /docs/thermal-expansion/storage/flux-capacitors/
  - /docs/thermal-expansion/storage/flux-capacitor/
recipes:
  crafting:
    - flux-capacitor-basic
    - flux-capacitor-hardened
    - flux-capacitor-reinforced
    - flux-capacitor-signalum
    - flux-capacitor-resonant
---

A **flux capacitor** is an item that stores [Redstone
Flux](/docs/redstone-flux/) and can use it to charge items in a player's
inventory.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Redstone Flux battery
A flux capacitor can be charged with [Redstone Flux](/docs/redstone-flux/) using
an [energetic infuser](/docs/energetic-infuser/) or similar. It can be placed in
[machines](/docs/machines/) or [enervation dynamos](/docs/enervation-dynamo/) to
provide them with energy.

A basic flux capacitor can be charged at up to 2,000 RF/t, and can be discharged
at up to 1,000 RF/t. This can be increased by upgrading the flux capacitor to a
higher [tier](#tiers).

### Charging items
A charged flux capacitor can be activated and deactivated by using it while
sneaking. When active, a flux capacitor charges certain items that can hold
[Redstone Flux](/docs/redstone-flux/) in a player's inventory.

A flux capacitor can be set to charge a player's currently held item (the
default mode), the items they are currently wearing, or both at the same time.
The current charging mode of a flux capacitor can be switched by pressing "Cycle
Item Mode" (V by default) while holding it.

### Enchantments
A flux capacitor can be enchanted with [Holding](/docs/holding/) to increase its
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

Flux capacitors come in six [tiers](/docs/tiers/).

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
