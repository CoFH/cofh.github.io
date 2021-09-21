---
category: Items
recipes:
  crafting-shapeless:
  - tf-1-12-redprint
show_image: false
subcategory: Utilities
subjects:
- tf-1-12-redprint
title: Redprint
---

![Redprint](/images/docs/1.12/thermal-foundation/redprint.png){:style="height: 128px"}


**Redprints** are items that can copy the configuration of certain blocks to
other blocks of the same type.


Obtaining
---------

### Crafting
{{<recipe_table type="crafting-shapeless" ids_param="recipes.crafting-shapeless">}}


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

All configurable blocks in [Thermal Expansion](../../thermal-expansion/) and
[Thermal Dynamics](../../thermal-dynamics/) support redprints.
