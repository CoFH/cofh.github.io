---
title: Magma Crucible
subjects: [machine_crucible]
types: [crucible]
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
> Yes, it can make lava. You monster.

A **magma crucible**, or **crucible** for short, is a [machine](../machines/)
that melts items into fluids.

Obtaining
---------

A placed magma crucible can be instantly picked up by dismantling it with a
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
When placed, a magma crucible faces the player. It can face any of the four
cardinal directions, and can be rotated using a
[crescent hammer](../../thermal-foundation/crescent-hammer/).

### Processing
A magma crucible has one input slot, and one output tank.

When a magma crucible's input slot is filled with an item, the machine will
start consuming [Redstone Flux](/docs/redstone-flux/) to melt it. Every melted
item requires a certain amount of energy. When enough energy has been consumed
for an item, the input is consumed and the output is placed in the output tank.

An unaugmented magma crucible melts items at a fixed 20 RF/t. If its
internal RF buffer runs out before the process is complete, the crucible stops
and the progress bar resets.

The processing speed of the magma crucible can be increased by installing 
[integral components](#augmentation) and certain [augments](#augmentation).

### Input and output
Fluids and items can enter and exit a magma crucible through any of its sides.
Every side of of a crucible may be configured to input items and fluids, output
items and fluids, or input and output at the same time. This is described in
more detail [here](../../thermal-expansion/machines#configuration).

A magma crucible can automatically transfer up to 1,000 mB of fluid and up to
64 items at a time.

### Augmentation
A magma crucible can have augments installed to improve certain properties. It
can have a max of 4 augments installed.

Augments can be installed in the **Augmentation** tab in the magma crucible’s GUI.
{% include docs/id-link-list.html ids=page.augments %}

### Recipes
{{<recipe_list types_param="types">}}