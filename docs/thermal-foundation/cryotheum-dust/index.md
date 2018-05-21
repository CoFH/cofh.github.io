---
title: Cryotheum Dust
nav: thermal-foundation
redirect_from:
  - /thermal-expansion/items/cryotheum-dust/
  - /docs/thermal-foundation/elemental-materials/cryotheum-dust/
  - /docs/thermal-foundation/items/materials/elemental/cryotheum-dust/
  - /docs/thermal-foundation/materials/cryotheum-dust/
  - /docs/cryotheum-dust/
recipes:
  crafting:
    - dust-cryotheum
usage-recipes:
  crafting:
    - ice-using-cryotheum
    - packed-ice-using-cryotheum
    - redstone-from-fluid
    - glowstone-dust-from-fluid
    - ender-pearl-from-fluid
    - redstone-from-clathrate
    - glowstone-dust-from-clathrate
    - ender-pearl-from-clathrate
    - upgrade-kit-signalum
    - flux-capacitor-signalum
    - reservoir-signalum
    - augment-machine-extruder-no-water
    - augment-dynamo-magmatic-coolant
    - augment-dynamo-compression-coolant
    - watering-can-signalum
  crucible:
    - cryotheum
  transposer-fill:
    - ice
    - redstone-from-fluid
    - glowstone-dust-from-fluid
    - ender-pearl-from-fluid
  centrifuge:
    - dust-cryotheum
---

![Cryotheum dust](/assets/images/thermal-foundation/dust-cryotheum.gif){:style="height: 128px"}


**Cryotheum dust** is the ice elemental dust. It is most commonly used to make
[gelid cryotheum](/docs/thermal-foundation/gelid-cryotheum/). It can also be used to freeze some
fluids into solids, and is used in several advanced crafting recipes.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Magma Crucible ingredient
{% include recipe-table.html type='crucible-te5' recipes=page.usage-recipes.crucible %}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-te5-fill' recipes=page.usage-recipes.transposer-fill %}

### Centrifugal Separator ingredient
{% include recipe-table.html type='centrifuge-te5' recipes=page.usage-recipes.centrifuge %}

### Reactant Dynamo fuel
When used together with 100 mB of [blazing pyrotheum](/docs/thermal-foundation/blazing-pyrotheum/)
as fuel in a [reactant dynamo](/docs/thermal-expansion/reactant-dynamo/), cryotheum dust yields
400,000 RF per piece, or 500,000 RF if an [elemental
catalyzer](/docs/thermal-expansion/augment-elemental-catalyzer/) is installed.
