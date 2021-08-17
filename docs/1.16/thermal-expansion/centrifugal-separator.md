---
title: Centrifugal Separator
subjects: [machine_centrifuge]
types: [centrifuge]
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
- fluid_tank_augment
- machine_speed_augment
- machine_efficiency_augment
---
> Spin to win!

A **centrifugal separator**, or **centrifuge** for short, is a
[machine](../machines/) that separates items into their components.

Obtaining
---------

A placed centrifugal separator can be instantly picked up by dismantling it with
a [crescent hammer](../../thermal-foundation/crescent-hammer/). It can also be
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
When placed, a centrifugal separator faces the player. It can face any of the
four cardinal directions, and can be rotated using a
[crescent hammer](../../thermal-foundation/crescent-hammer/).

### Processing
A centrifugal separator has one input slot, four output slots, and one output tank.

When a centrifugal separator's input slot is filled with an item, the machine
will start consuming [Redstone Flux](/docs/redstone-flux/) to process it. Every
processed item requires a certain amount of energy. When enough energy has been
consumed for an item, the input is consumed and the output is placed in
the output slots. Some items may have a fluid output as well, which is placed in
the output tank.

An unaugmented centrifugal separator separate items at a fixed 20 RF/t. If its
internal RF buffer runs out before the process is complete, the centrifuge stops
and the progress bar resets.

The processing speed of the centrifugal separator can be increased by installing 
[integral components](#augmentation) and certain [augments](#augmentation).

### Input and output
Fluids and items can enter and exit a centrifugal separator through any of its
sides. Every side of of a centrifuge may be configured to input items and
fluids, output items and fluids, or input and output at the same time. This is
described in more detail [here](../../thermal-expansion/machines#configuration).

A centrifugal separator can automatically transfer up to 1,000 mB of fluid and
up to 64 items at a time.

### Augmentation
A centrifugal separator can have augments installed to improve certain
properties. It can have a max of 4 augments installed.

Augments can be installed in the **Augmentation** tab in the centrifugal
separator’s GUI.
{% include docs/id-link-list.html ids=page.augments %}

### Recipes
{% include docs/recipe/recipe-list.html recipe-types=page.types %}