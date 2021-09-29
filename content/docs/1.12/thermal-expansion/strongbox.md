---
category: Storage
subjects:
 - te-1-12-strongbox-basic
image:
- alt: Strongbox (Basic)
  file: thermal-expansion/strongbox-basic.png
- alt: Strongbox (Hardened)
  file: thermal-expansion/strongbox-hardened.png
- alt: Strongbox (Reinforced)
  file: thermal-expansion/strongbox-reinforced.png
- alt: Strongbox (Signalum)
  file: thermal-expansion/strongbox-signalum.png
- alt: Strongbox (Resonant)
  file: thermal-expansion/strongbox-resonant.png
- alt: Strongbox (Creative)
  file: thermal-expansion/strongbox-creative.png
recipes:
  crafting-shaped:
  - te-1-12-strongbox-basic
title: Strongbox
---

A **strongbox** is a block that stores items. It is functionally similar to a
[chest](https://minecraft.gamepedia.com/Chest), but can be moved and
[secured](../../thermal-foundation/signalum-security-lock/). At higher [tiers](#tiers), it also
stores more items.


Obtaining
---------

A placed strongbox can be instantly picked up by dismantling it with a
[wrench](../../wrenches/). Its stored items and configuration are preserved in
the item. It can also be mined using a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe), though this can be much
slower.

### Crafting
{{<recipe_table type="crafting-shaped" ids_param="recipes.crafting-shaped">}}

### Upgrading
A strongbox is initially at the lowest [tier](#tiers) (basic). It can be
upgraded to higher tiers using [upgrade kits](../../thermal-foundation/upgrade-kits/) and
[conversion kits](../../thermal-foundation/conversion-kits/).


Usage
-----

### Placement
When placed, a strongbox faces the player. It can face any of the four cardinal
directions, and can be rotated using a [wrench](../../wrenches/).

### Manual usage
A placed strongbox is functionally similar to a
[chest](https://minecraft.gamepedia.com/Chest). When used, it is opened so that
items can be manually put in or taken out.

Strongboxes cannot store certain items that can themselves store items, like
other strongboxes or [satchels](../satchel/).

### Input and output
Items can enter and exit a strongbox through any of its sides.

### Security
A strongbox can have a [signalum security lock](../../thermal-foundation/signalum-security-lock/)
installed to restrict who can access it.

### Enchantments
A strongbox can be enchanted with [Holding](../../cofh-core/holding/) to increase its
capacity.

| Holding level | Capacity increase (slots) |
|---|---|
| I | +9 |
| II | +18 |
| III | +27 |
| IV | +36 |


### Redstone comparators
When placed next to a strongbox with public access, a [redstone
comparator](https://minecraft.gamepedia.com/Redstone_Comparator) emits a signal
strength of between 0 and 15, depending on how full the strongbox is.


Tiers
-----

Strongboxes come in six [tiers](../../thermal-foundation/tiers/).



| Tier | Capacity (slots) | Note |
|---|---|---|
| Basic | 18 |
| Hardened | 36 |
| Reinforced | 54 |
| Signalum | 72 |
| Resonant | 90 |
| Creative | 1 | Provides an unlimited amount of the item it stores. |



