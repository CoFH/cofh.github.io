---
title: Phytogenic Insolator
subjects: [machine_insolator]
types: [insolator]
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
- machine_output_augment
- machine_catalyst_augment
- machine_cycle_augment
---
> Definitely not organic.

A **phytogenic insolator**, or **insolator** for short, is a
[machine](../machines/) that grows and multiplies plants using
[water](https://minecraft.fandom.com/wiki/Water),
[fertilizer](../../thermal-expansion/catalysts#fertilizer) and simulated sunlight.

Obtaining
---------

A placed phytogenic insolator can be instantly picked up by dismantling it with
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
When placed, a phytogenic insolator faces the player. It can face any of the
four cardinal directions, and can be rotated using a
[crescent hammer](../../thermal-foundation/crescent-hammer/).

### Processing
A phytogenic insolator has one input tank, two input slots (one of which is for
a [catalyst](../../thermal-expansion/catalysts#phytogenic-insolator)), and
four output slots.

When a phytogenic insolator's input slot is filled with a plant and the tank is
filled with [water](https://minecraft.fandom.com/wiki/Water), the machine will
start consuming [Redstone Flux](/docs/redstone-flux/) to grow more plants. Every
plant grown requires a certain amount of energy and water. When enough energy
has been consumed for an item, the input is consumed and the output is placed
in the output slots. Secondary items may also be produced, which are
placed in the output slots.
[Catalysts](../../thermal-expansion/catalysts#phytogenic-insolator) may be added
to change the number of items produced and the energy consumed.

An unaugmented phytogenic insolator grows plants at a fixed 20 RF/t. If its
internal RF buffer runs out before the process is complete, the insolator stops
and the progress bar resets.

The processing speed of the phytogenic insolator can be increased by installing
[integral components](#augmentation) and certain [augments](#augmentation).

### Input and output
Fluids and items can enter and exit a phytogenic insolator through any of its
sides. Every side of of a insolator may be configured to input items and fluids,
output items and fluids, or input and output at the same time. This is described
in more detail [here](../../thermal-expansion/machines#configuration).

A phytogenic insolator can automatically transfer up to 1,000 mB of fluid and up
to 64 items at a time.

### Augmentation
A phytogenic insolator can have augments installed to improve certain properties.
It can have a max of 4 augments installed.

Augments can be installed in the **Augmentation** tab in the phytogenic insolator’s GUI.
{% include docs/id-link-list.html ids=page.augments %}

### Recipes
{% include docs/recipe/recipe-list.html recipe-types=page.types %}