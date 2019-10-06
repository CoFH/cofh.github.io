---
title: Redprint
redirect_from:
- /docs/thermal-expansion/storage/redprint/
- /docs/thermal-expansion/tools/redprint/
- /docs/thermal-foundation/items/redprint/
- /docs/thermal-foundation/items/tools/redprint/
- /docs/redprint/
- /docs/thermal-foundation/redprint/
- /docs/thermal-foundation-2/redprint/
- /docs/1.12/thermal-foundation-2/redprint/
recipes:
  crafting:
  - tf2-redprint
---

![Redprint](/assets/images/thermal-foundation-2/redprint.png){:style="height: 128px"}


**Redprints** are items that can copy the configuration of certain blocks to
other blocks of the same type.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

When a redprint is used on a configurable block in the world, the block's
configuration is stored on it. It can then be used on other blocks of the same
type to apply the stored configuration to them.

When a redprint is held in the player's offhand, the stored configuration is
automatically applied to blocks when they are placed.

A written redprint may be erased by using it while sneaking. When used on a
configurable block while sneaking, the redprint is overwritten with the
configuration of the block.

All configurable blocks in [Thermal Expansion](/docs/1.12/thermal-expansion/) and
[Thermal Dynamics](/docs/1.12/thermal-dynamics/) support redprints.
