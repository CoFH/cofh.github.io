---
category: Fluids
recipes:
  transposer-empty:
  - bucket-steam
show_image: false
subcategory: Other
subjects:
- tf-1-12-steam
title: Steam
usage-recipes:
  transposer-fill:
  - bucket-steam
---

![Steam](/assets/images/docs/1.12/thermal-foundation/steam.gif){:style="height: 128px"}


**Steam** is a fluid used by [steam dynamos](../../thermal-expansion/steam-dynamo/) with a
[turbine conversion](../../thermal-expansion/augment-turbine-conversion/) installed to generate
[Redstone Flux](/docs/redstone-flux/).


Obtaining
---------

### Dynamo with Boiler Conversion
A [steam](../../thermal-expansion/steam-dynamo/), [magmatic](../../thermal-expansion/magmatic-dynamo/) or
[compression dynamo](../../thermal-expansion/compression-dynamo/) with a [boiler
conversion](../../thermal-expansion/augment-boiler-conversion/) installed converts
[water](https://minecraft.gamepedia.com/Water) into steam instead of generating
[Redstone Flux](/docs/redstone-flux/).

### Fluid Transposer
{{<recipe_table type="transposer-empty" ids_param="recipes.transposer-empty">}}


Usage
-----

Steam cannot be placed as a block.

### Fluid Transposer ingredient
{{<recipe_table type="transposer-fill' recipe-ids=page.usage-recipes.transposer-fill">}}

### Steam Dynamo with Turbine Conversion
A [steam dynamo](../../thermal-expansion/steam-dynamo/) with a [turbine
conversion](../../thermal-expansion/augment-turbine-conversion/) installed generates 2 RF of
energy per mB of steam.
