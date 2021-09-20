---
title: Alchemical Imbuer
subjects: [machine_brewer]
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
> Bottles not included.

An **alchemical imbuer**, also known as a **brewer**, is a
[machine](../machines/) that brews
[potions](https://minecraft.fandom.com/wiki/Potion). It works with potions in
their [fluid forms](../../cofh-core/potion-fluid/).

Obtaining
---------

A placed alchemical imbuer can be instantly picked up by dismantling it with a
[crescent hammer](../../thermal-foundation/crescent-hammer/). It can also be
mined using a [pickaxe](https://minecraft.fandom.com/wiki/Pickaxe) or by hand,
though this can be much slower.

When mined, its configuration, power, and augments are preserved in the item form.
Any items inside will drop, and any fluids will be voided. This behaviour can
be changed in the [configs](../../faq#configs).

### Crafting
{{<recipe_list makes_param="subjects">}}

Usage
-----

### Placement
When placed, an alchemical imbuer faces the player. It can face any of the four
cardinal directions, and can be rotated using a
[crescent hammer](../../thermal-foundation/crescent-hammer/).

### Processing
An alchemical imbuer has one input tank, one input slot, and one output slot.

When an alchemical imbuer's input tank is filled with
[water](https://minecraft.fandom.com/wiki/Water) or
[potion fluid](../../thermal-foundation/potion-fluid/) and a reagent
([brewing](https://minecraft.fandom.com/wiki/Brewing) ingredient) is placed in its
input slot, the machine will start consuming [Redstone Flux](/docs/redstone-flux/)
to brew the corresponding potion. Potions are brewed in batches of 1000 mB
(4 [bottles](https://minecraft.fandom.com/wiki/Glass_Bottles) worth), with each
batch costing 4,000 RF. When enough energy has been consumed for a batch, the
input is consumed and the resulting potion fluid is placed in the output tank.

An unaugmented alchemical imbuer brews potions at a fixed 20 RF/t. If its
internal RF buffer runs out before the process is complete, the brewer stops
and the progress bar resets.

The processing speed of the brewer can be increased by installing 
[integral components](#augmentation) and certain [augments](#augmentation).

### Input and output
Fluids and items can enter and exit an alchemical imbuer through any of its sides.
Every side of of a brewer may be configured to input items and fluids, output
items and fluids, or input and output at the same time. This is described in more
detail [here](../../thermal-expansion/machines#configuration).

An alchemical imbuer can automatically transfer up to 1,000 mB of fluid and
up to 64 items at a time.

### Augmentation
An alchemical imbuer can have augments installed to improve certain properties.
It can have a max of 4 augments installed.

Augments can be installed in the **Augmentation** tab in the alchemical imbuer’s GUI.
{% include docs/id-link-list.html ids=page.augments %}