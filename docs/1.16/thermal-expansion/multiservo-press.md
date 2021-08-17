---
title: Multiservo Press
subjects: [machine_press]
types: [press]
packing_3x3_die: [press_packing_3x3_die]
packing_2x2_die: [press_packing_2x2_die]
unpacking_die: [press_unpacking_die]
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
> More gentle than a pulverizer.

# TODO: Smarter recipe splitting

A **multiservo press**, or **press** for short, is a [machine](../machines/)
that applies pressure to items to change their form.
[Dies](../../thermal-expansion/dies) may be used to change the shape of the
processed item.

Obtaining
---------

A placed multiservo press can be instantly picked up by dismantling it with a
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
When placed, a multiservo press faces the player. It can face any of the four
cardinal directions, and can be rotated using a
[crescent hammer](../../thermal-foundation/crescent-hammer/).

### Processing
A multiservo press has two input slot (one of which is for
[dies](../../thermal-expansion/dies)), one output slot, and one output tank.

When a multiservo press's input slot is filled with an item, the machine will
start consuming [Redstone Flux](/docs/redstone-flux/) to process it.
Every processed item requires a certain amount of energy. When enough energy has
been consumed for an item, the input is consumed and the output is placed in the
output slot. Some items may have a fluid output as well, which is placed in the
output tank. [Dies](../../thermal-expansion/dies) may be used to change the
result of a recipe.

An unaugmented multiservo press processes items at a fixed 20 RF/t. If its
internal RF buffer runs out before the process is complete, the press stops
and the progress bar resets.

The processing speed of the multiservo press can be increased by installing
[integral components](#augmentation) and certain [augments](#augmentation).

### Input and output
Fluids and items can enter and exit a multiservo press through any of its sides.
Every side of of a press may be configured to input items and fluids, output
items and fluids, or input and output at the same time. This is described in
more detail [here](../../thermal-expansion/machines#configuration).

A multiservo press can automatically transfer up to 1,000 mB of fluid and up to
64 items at a time.

### Augmentation
A multiservo press can have augments installed to improve certain properties.
It can have a max of 4 augments installed.

Augments can be installed in the **Augmentation** tab in the multiservo press’s GUI.
{% include docs/id-link-list.html ids=page.augments %}

### Recipes
{% include docs/recipe/recipe-list.html subjects=page.packing_3x3_die recipe-types=page.types %}
{% include docs/recipe/recipe-list.html subjects=page.packing_2x2_die recipe-types=page.types %}
{% include docs/recipe/recipe-list.html subjects=page.unpacking_die recipe-types=page.types %}