---
title: Cache
image:
- alt: Cache (Basic)
  file: thermal-expansion-5/cache-basic.png
- alt: Cache (Hardened)
  file: thermal-expansion-5/cache-hardened.png
- alt: Cache (Reinforced)
  file: thermal-expansion-5/cache-reinforced.png
- alt: Cache (Signalum)
  file: thermal-expansion-5/cache-signalum.png
- alt: Cache (Resonant)
  file: thermal-expansion-5/cache-resonant.png
- alt: Cache (Creative)
  file: thermal-expansion-5/cache-creative.png
redirect_from:
- /docs/thermal-expansion/storage/caches/
- /thermal-expansion/items/cache-2/
- /docs/thermal-expansion/storage/cache/
- /docs/cache/
- /docs/thermal-expansion/cache/
- /docs/thermal-expansion-5/cache/
- /docs/1.12/thermal-expansion-5/cache/
recipes:
  crafting:
  - te5-cache-basic
---

A **cache** is a block that stores a large amount of a single item.


Obtaining
---------

A placed cache can be instantly picked up by dismantling it with a
[wrench](/docs/1.12/wrenches/). Its stored items and configuration are preserved in
the item.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
A cache is initially at the lowest [tier](#tiers) (basic). It can be upgraded to
higher tiers using [upgrade kits](/docs/1.12/thermal-foundation/upgrade-kits/) and [conversion
kits](/docs/1.12/thermal-foundation/conversion-kits/).


Usage
-----

### Placement
When placed, a cache faces the player. It can face any of the four cardinal
directions, and can be rotated using a [wrench](/docs/1.12/wrenches/).

The front of a cache displays the item it stores and roughly how full it is.

### Manual usage
Items can be stored in a cache by using them on the cache. Up to a full stack of
items is stored at a time. When this is done twice in rapid succession, all
items of the same type in the player's inventory are stored in the cache.

Items can be taken out of a cache by punching it. A single item is taken out at
a time. Full stacks can be taken out by punching the cache while sneaking.

The exact amount of items that a cache stores can be read using a
[multimeter](/docs/1.12/thermal-foundation/multimeter/).

### Input and output
Items can enter and exit a cache through any of its sides.

A cache can be locked to only accept the currently stored item, even when it
becomes empty. This can be toggled by using the cache while sneaking.

### Enchantments
A cache can be enchanted with [Holding](/docs/1.12/cofh-core/holding/) to increase its
capacity.

| Holding level | Capacity multiplier |
|---
| I | × 1.5 |
| II | × 2 |
| III | × 2.5 |
| IV | × 3 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}

### Redstone comparators
When placed next to a cache, a [redstone
comparator](https://minecraft.gamepedia.com/Redstone_Comparator) emits a signal
strength of between 0 and 15, depending on how full the cache is.


Tiers
-----

Caches come in six [tiers](/docs/1.12/thermal-foundation/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Capacity | Note |
|---
| Basic | 20,000 |
| Hardened | 80,000 |
| Reinforced | 180,000 |
| Signalum | 320,000 |
| Resonant | 500,000 |
| Creative | N/A | Provides an unlimited amount of the item it stores. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}
