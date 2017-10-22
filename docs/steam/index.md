---
title: Steam
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/fluids/steam/
  - /docs/thermal-foundation/fluids/other/steam/
recipes:
  transposer-empty:
    - bucket-steam
usage-recipes:
  transposer-fill:
    - bucket-steam
---

![Steam](/assets/images/thermal-foundation/steam.gif){:style="height: 128px"}


**Steam** is a fluid used by [steam dynamos](/docs/steam-dynamo/) to generate
energy.


Obtaining
---------

### Steam Dynamo
A [steam dynamo](/docs/steam-dynamo/) produces its own steam internally using
[water](https://minecraft.gamepedia.com/Water) and solid fuel.

### Dynamo with Boiler Conversion
A [steam](/docs/steam-dynamo/), [magmatic](/docs/magmatic-dynamo/) or
[compression dynamo](/docs/compression-dynamo/) with a [boiler
conversion](/docs/augment-boiler-conversion/) installed produces steam instead
of [Redstone Flux](/docs/redstone-flux/).

### Fluid Transposer
{% include recipe-table.html type='transposer-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Steam cannot be placed as a block.

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Steam Dynamo with Turbine Conversion
A [steam dynamo](/docs/steam-dynamo/) with a [turbine
conversion](/docs/augment-turbine-conversion/) installed cannot produce its own
steam, and relies on steam to be supplied from an external source.
