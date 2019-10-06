---
title: Steam
redirect_from:
- /docs/thermal-foundation/fluids/steam/
- /docs/thermal-foundation/fluids/other/steam/
- /docs/steam/
- /docs/thermal-foundation/steam/
- /docs/thermal-foundation-2/steam/
- /docs/1.12/thermal-foundation-2/steam/
recipes:
  transposer-empty:
  - bucket-steam
usage-recipes:
  transposer-fill:
  - bucket-steam
---

![Steam](/assets/images/thermal-foundation-2/steam.gif){:style="height: 128px"}


**Steam** is a fluid used by [steam dynamos](/docs/1.12/thermal-expansion/steam-dynamo/) with a
[turbine conversion](/docs/1.12/thermal-expansion/augment-turbine-conversion/) installed to generate
[Redstone Flux](/docs/redstone-flux/).


Obtaining
---------

### Dynamo with Boiler Conversion
A [steam](/docs/1.12/thermal-expansion/steam-dynamo/), [magmatic](/docs/1.12/thermal-expansion/magmatic-dynamo/) or
[compression dynamo](/docs/1.12/thermal-expansion/compression-dynamo/) with a [boiler
conversion](/docs/1.12/thermal-expansion/augment-boiler-conversion/) installed converts
[water](https://minecraft.gamepedia.com/Water) into steam instead of generating
[Redstone Flux](/docs/redstone-flux/).

### Fluid Transposer
{% include recipe-table.html type='te-1-12-transposer-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Steam cannot be placed as a block.

### Fluid Transposer ingredient
{% include recipe-table.html type='te-1-12-transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Steam Dynamo with Turbine Conversion
A [steam dynamo](/docs/1.12/thermal-expansion/steam-dynamo/) with a [turbine
conversion](/docs/1.12/thermal-expansion/augment-turbine-conversion/) installed generates 2 RF of
energy per mB of steam.
