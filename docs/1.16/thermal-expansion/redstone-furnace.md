---
title: Redstone Furnace
subjects: [machine_furnace]
types: [furnace]
category: blocks
subcategory: machines
augments:
- upgrade_augment_1
- upgrade_augment_2
- upgrade_augment_3
- item_filter_augment
- xp_storage_augment
- rf_coil_augment
- rf_coil_storage_augment
- rf_coil_xfer_augment
- machine_speed_augment
- machine_efficiency_augment
---
> Coal is for chumps!

A **redstone furnace** is a [machine](../machines/) that
[smelts](https://minecraft.fandom.com/wiki/Smelting) items.

Obtaining
---------

A placed redstone furnace can be instantly picked up by dismantling it with a
[crescent hammer](../../thermal-foundation/crescent-hammer/). It can also be
mined using a [pickaxe](https://minecraft.fandom.com/wiki/Pickaxe) or by hand,
though this can be much slower.

When mined, its configuration, power, and augments are preserved in the item
form. Any items inside will drop, and any fluids will be voided. This behaviour
can be changed in the [configs](../../faq#configs).

### Crafting
{% include docs/recipe/recipe-list.html show="makes" subjects=page.subjects %}

Usage
-----

### Placement
When placed, a redstone furnace faces the player. It can face any of the four
cardinal directions, and can be rotated using a
[crescent hammer](../../thermal-foundation/crescent-hammer/).

### Processing
A redstone furnace has one input slot and one output slot.

When a redstone furnace's input slot is filled with an item, the machine will
start consuming [Redstone Flux](/docs/redstone-flux/) to smelt it. Every smelted
item requires a certain amount of energy. When enough energy has been
consumed for an item, the input is consumed and the output is placed in the
output slot.

An unaugmented redstone furnace smelts items at a fixed 20 RF/t. If its internal
RF buffer runs out before the process is complete, the redstone furnace stops
and the progress bar resets.

The processing speed of the redstone furnace can be increased by installing
[integral components](#augmentation) and certain [augments](#augmentation).

### Input and output
Fluids and items can enter and exit a redstone furnace through any of its sides.
Every side of of a redstone furnace may be configured to input items and fluids,
output items and fluids, or input and output at the same time. This is described
in more detail [here](../../thermal-expansion/machines#configuration).

A redstone furnace can automatically transfer up to 1,000 mB of fluid and up to
64 items at a time.

### Augmentation
A redstone furnace can have augments installed to improve certain properties.
It can have a max of 4 augments installed.

Augments can be installed in the **Augmentation** tab in the redstone furnace’s GUI.
{% include docs/id-link-list.html ids=page.augments %}

### Recipes
{% include docs/recipe/recipe-list.html recipe-types=page.types %}