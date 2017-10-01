---
title: Steam
redirect_from:
  - /docs/thermal-foundation/fluids/steam/
recipes:
  transposer-empty:
    - bucket-steam
usage-recipes:
  transposer-fill:
    - bucket-steam
---

![Steam](/assets/images/thermal-foundation/steam.gif){:style="height: 128px"}


**Steam** is a fluid used by [steam
dynamos](/docs/thermal-expansion/dynamos/steam-dynamo/) to generate energy.


Obtaining
---------

### Steam Dynamo
A [steam dynamo](/docs/thermal-expansion/dynamos/steam-dynamo/) produces its own
steam internally by default.

### Dynamo with Boiler Conversion
A [steam](/docs/thermal-expansion/dynamos/steam-dynamo/),
[magmatic](/docs/thermal-expansion/dynamos/magmatic-dynamo/) or [compression
dynamo](/docs/thermal-expansion/dynamos/compression-dynamo/) with a [boiler
conversion](/docs/thermal-expansion/augments/dynamo/boiler-conversion/)
installed will produce steam instead of energy.

### Fluid Transposer
{% include recipe-table.html type='transposer-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Steam cannot be placed as a block.

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Steam Dynamo with Turbine Conversion
A [steam dynamo](/docs/thermal-expansion/dynamos/steam-dynamo/) with a [turbine
conversion](/docs/thermal-expansion/augments/dynamo/turbine-conversion/)
installed cannot produce its own steam, and relies on steam to be supplied from
an external source.
