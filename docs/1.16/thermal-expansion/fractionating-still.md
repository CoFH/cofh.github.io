---
title: Fractionating Still
subjects: [machine_refinery]
types: [refinery]
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
---
> Products may or may not be drinkable.

A **fractionating still**, or **still** for short (also known as a **refinery**),
is a [machine](../machines/) that refines fuels.

Obtaining
---------

A placed fractionating still can be instantly picked up by dismantling it with a
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
When placed, a fractionating still faces the player. It can face any of the four
cardinal directions, and can be rotated using a
[crescent hammer](../../thermal-foundation/crescent-hammer/).

### Processing
A fractionating still has one input tank, one output slots, and two output tanks.

When a fractionating still's input tank is filled with a fluid, the machine will
start consuming [Redstone Flux](/docs/redstone-flux/) to refine it. Every batch
of fluid processed requires a certain amount of energy and fluid. When enough
energy has been consumed for a batch of fluid, the input is consumed and the
output is placed in the output tank. Secondary items may also be produced,
which are placed in the output slots.

An unaugmented fractionating still refines fluids at a fixed 20 RF/t. If its
internal RF buffer runs out before the process is complete, the still stops and
the progress bar resets.

The processing speed of the fractionating still can be increased by installing 
[integral components](#augmentation) and certain [augments](#augmentation).

### Input and output
Fluids and items can enter and exit a fractionating still through any of its
sides. Every side of of a still may be configured to input items and fluids,
output items and fluids, or input and output at the same time. This is described
in more detail [here](../../thermal-expansion/machines#configuration).

A fractionating still can automatically transfer up to 1,000 mB of fluid and up
to 64 items at a time.

### Augmentation
A fractionating still can have augments installed to improve certain properties.
It can have a max of 4 augments installed.

Augments can be installed in the **Augmentation** tab in the fractionating
still’s GUI.
{% include docs/id-link-list.html ids=page.augments %}

### Recipes
{% include docs/recipe/recipe-list.html recipe-types=page.types %}