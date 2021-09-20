---
title: Fluid Encapsulator
subjects: [machine_bottler]
types: [bottler]
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
> Filling buckets by hand is hard work.

A **fluid encapsulator**, or **encapsulator** for short, is a
[machine](../machines/) that fills things that hold fluids, like
[buckets](https://minecraft.fandom.com/wiki/Bucket) or
[bottles](https://minecraft.fandom.com/wiki/Glass_Bottle).

Obtaining
---------

A placed fluid encapsulator can be instantly picked up by dismantling it with a
[crescent hammer](../../thermal-foundation/crescent-hammer/). It can also be
mined using a [pickaxe](https://minecraft.fandom.com/wiki/Pickaxe) or by hand,
though this can be much slower.

When mined, its configuration, power, and augments are preserved in the item
form. Any items inside will drop, and any fluids will be voided. This behaviour
can be changed in the [configs](../../faq#configs).

### Crafting
{{<recipe_list makes_param="subjects">}}

Usage
-----

### Placement
When placed, a fluid encapsulator faces the player. It can face any of the four
cardinal directions, and can be rotated using a
[crescent hammer](../../thermal-foundation/crescent-hammer/).

### Processing
A fluid encapsulator has one input tank, one input slot, and one output slot.

When a fluid encapsulator's input slots are filled with fluid and an item, the
machine will start consuming [Redstone Flux](/docs/redstone-flux/) to
fill the item with the fluid. Every filled item requires a certain amount of
energy and fluid. When enough energy has been consumed for an item, the input
is consumed and the output is placed in the output slot.

An unaugmented fluid encapsulator fills items at a fixed 20 RF/t. If its
internal RF buffer runs out before the process is complete, the encapsulator
stops and the progress bar resets.

The processing speed of the fluid encapsulator can be increased by installing 
[integral components](#augmentation) and certain [augments](#augmentation).

### Input and output
Fluids and items can enter and exit a fluid encapsulator through any of its
sides. Every side of of a encapsulator may be configured to input items and
fluids, output items and fluids, or input and output at the same time. This is
described in more detail [here](../../thermal-expansion/machines#configuration).

A fluid encapsulator can automatically transfer up to 1,000 mB of fluid and up
to 64 items at a time.

### Augmentation
A fluid encapsulator can have augments installed to improve certain properties.
It can have a max of 4 augments installed.

Augments can be installed in the **Augmentation** tab in the fluid
encapsulator’s GUI.
{% include docs/id-link-list.html ids=page.augments %}

### Recipes
{{<recipe_list types_param="types">}}