---
title: Pulverizer
subjects: [machine_pulverizer]
types: [pulverizer]
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
- machine_output_augment
- machine_catalyst_augment
---
> MACHINE SMASH! Puny ore.

A **pulverizer** is a [machine](../machines/) that crushes items. It is commonly
used to process ores and other items more efficiently, and to recycle certain items.

Obtaining
---------

A placed pulverizer can be instantly picked up by dismantling it with a
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
When placed, a pulverizer faces the player. It can face any of the four cardinal
directions, and can be rotated using a
[crescent hammer](../../thermal-foundation/crescent-hammer/).

### Processing
A pulverizer has two input slots (one of which is for a
[catalyst](../../thermal-expansion/catalysts#pulverizer)), and four output slots.

When a pulverizer's input slot is filled with an item, the machine will start
consuming [Redstone Flux](/docs/redstone-flux/) to process it. Every item
requires a certain amount of energy to process. When enough energy has been
consumed for an item, the input is consumed and the output is placed in the
output slots. Secondary items may also be produced, which are
placed in the output slots.
[Catalysts](../../thermal-expansion/catalysts#pulverizer) may be added
to change the number of items produced and the energy consumed.

An unaugmented pulverizer pulverizes items at a fixed 20 RF/t. If its internal
RF buffer runs out before the process is complete, the pulverizer stops and the
progress bar resets.

The processing speed of the pulverizer can be increased by installing
[integral components](#augmentation) and certain [augments](#augmentation).

### Input and output
Fluids and items can enter and exit a pulverizer through any of its sides. Every
side of of a pulverizer may be configured to input items and fluids, output
items and fluids, or input and output at the same time. This is described in
more detail [here](../../thermal-expansion/machines#configuration).

A pulverizer can automatically transfer up to 1,000 mB of fluid and up to 64
items at a time.

### Augmentation
A pulverizer can have augments installed to improve certain properties. It can
have a max of 4 augments installed.

Augments can be installed in the **Augmentation** tab in the pulverizer’s GUI.
{% include docs/id-link-list.html ids=page.augments %}

### Recipes
{{<recipe_list types_param="types">}}