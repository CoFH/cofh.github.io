---
title: Sequential Fabricator
subjects: [machine_crafter]
types: [crafter]
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
> Automate all the things! Then do it again!

A **sequential fabricator**, also known as a **crafter**, is a
[machine](../machines/) that
[crafts](https://minecraft.fandom.com/wiki/Crafting) items.

Obtaining
---------

A placed sequential fabricator can be instantly picked up by dismantling it with
a [crescent hammer](../../thermal-foundation/crescent-hammer/). It can also be
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
When placed, a sequential fabricator faces the player. It can face any of the
four cardinal directions, and can be rotated using a
[crescent hammer](../../thermal-foundation/crescent-hammer/).

### Processing
A sequential fabricator has nine input slots, a crafting grid, one input
tank, and one output slot.

A sequential fabricator must be configured to perform a specific
[crafting](https://minecraft.fandom.com/wiki/Crafting) recipe in order to
function. This may be done by placing items into the crafting grid and clicking
the green tick to set the recipe. Items and/or fluids may then be inserted into
the machine.

When a sequential fabricator's input slots are filled with a number of items,
and a valid recipe has been set, the machine will start consuming
[Redstone Flux](/docs/redstone-flux/) to craft items. The machine requires
400 RF per operation. When enough energy has been consumed for an item, the
input is consumed and the output is placed in the output slot.

An unaugmented sequential fabricator crafter items at a fixed 20 RF/t. If its
internal RF buffer runs out before the process is complete, the crafter stops
and the progress bar resets.

The processing speed of the sequential fabricator can be increased by
installing [integral components](#augmentation) and certain
[augments](#augmentation).

### Input and output
Fluids and items can enter and exit a sequential fabricator through any of its
sides. Every side of of a crafter may be configured to input items and fluids,
output items and fluids, or input and output at the same time. This is described
in more detail [here](../../thermal-expansion/machines#configuration).

A sequential fabricator can automatically transfer up to 1,000 mB of fluid and
up to 64 items at a time.

### Augmentation
A sequential fabricator can have augments installed to improve certain
properties. It can have a max of 4 augments installed.

Augments can be installed in the **Augmentation** tab in the sequential fabricator’s GUI.
{% include docs/id-link-list.html ids=page.augments %}

### Recipes
{{<recipe_list types_param="types">}}