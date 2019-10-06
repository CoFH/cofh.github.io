---
title: Long Range Linking Viaduct
image:
- alt: Long range linking viaduct
  file: thermal-dynamics-2/viaduct-long-range-linking.png
redirect_from:
- /docs/long-range-linking-viaduct/
- /docs/thermal-dynamics/long-range-linking-viaduct/
- /docs/thermal-dynamics-2/long-range-linking-viaduct/
- /docs/1.12/thermal-dynamics-2/long-range-linking-viaduct/
recipes:
  transposer-fill:
  - td2-viaduct-long-range-linking
---

A **long range linking viaduct** is a type of [viaduct](/docs/1.12/thermal-dynamics/viaduct/) used to
connect regular viaducts to [long range viaducts](/docs/1.12/thermal-dynamics/long-range-viaduct/).


Obtaining
---------

### Fluid Transposer
{% include recipe-table.html type='te5-transposer-fill' recipes=page.recipes.transposer-fill no-result=true %}


Usage
-----

### Placement
When placed, a long range linking viaduct connects to any adjacent viaducts.
When used by a player, the duct scans for other long range linking viaducts on
the other side of any connected sections of [long range
viaducts](/docs/1.12/thermal-dynamics/long-range-viaduct/). When these are found, the long range
linking viaduct becomes functional.

### Player transfer
A long range linking viaduct acts as a bridge between regular
[viaducts](/docs/1.12/thermal-dynamics/viaduct/) and [long range viaducts](/docs/1.12/thermal-dynamics/long-range-viaduct/).
Unlike regular viaducts, they cannot be used as entrances or destinations;
players can only move through them while traveling through a network of
viaducts.

When a player moves through a long range linking viaduct to enter a section of
long range viaducts, they are briefly stopped to 'charge' for 20 ticks (one
second).
