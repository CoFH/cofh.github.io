---
title: Coolants
nav: thermal-expansion-5
redirect_from:
- /docs/coolants/
- /docs/thermal-expansion/coolants/
- /docs/thermal-expansion-5/coolants/
---

In [Thermal Expansion](/docs/1.12/thermal-expansion-5/), certain fluids are registered
as **coolants**. They may be used when generating or consuming [Redstone
Flux](/docs/redstone-flux/).


Usage
-----

Coolants are used by [compression dynamos](/docs/1.12/thermal-expansion-5/compression-dynamo/), [magmatic
dynamos](/docs/1.12/thermal-expansion-5/magmatic-dynamo/) with [isentropic
reservoirs](/docs/1.12/thermal-expansion-5/augment-isentropic-reservoir/) installed and [thermal
mediators](/docs/1.12/thermal-expansion-5/thermal-mediator/).

Every coolant has a thermal capacity (TC), which specifies for how long a
certain amount of it is effective before being consumed, and a coolant factor,
which specifies how effective it is.

| Fluid | Thermal capacity (1,000 mB) | Coolant factor |
|---
| [Water](https://minecraft.gamepedia.com/Water) | 250,000 TC | 20% |
| [Gelid Cryotheum](/docs/1.12/thermal-foundation-2/gelid-cryotheum/) | 3,000,000 TC | 60% |
| Crushed Ice ([Forestry](https://forestryforminecraft.info/)) | 1,500,000 TC | 40% |
| Distilled Water ([IndustrialCraft²](https://www.industrial-craft.net/)) | 300,000 TC | 30% |
| Coolant ([IndustrialCraft²](https://www.industrial-craft.net/)) | 2,000,000 TC | 50% |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
