---
title: Fluiduct
nav: thermal-dynamics
redirect_from:
  - /thermal-expansion/fluids/fluiducts/
  - /docs/thermal-dynamics/ducts/fluiducts/
  - /docs/fluiducts/
recipes:
  crafting:
    - fluiduct-basic
    - fluiduct-basic-opaque
    - fluiduct-basic-opaque-from-transparent
    - fluiduct-basic-transparent-from-opaque
    - fluiduct-hardened
    - fluiduct-hardened-opaque
    - fluiduct-hardened-opaque-from-transparent
    - fluiduct-hardened-transparent-from-opaque
    - fluiduct-energy-one
    - fluiduct-energy-three
    - fluiduct-energy-opaque-one
    - fluiduct-energy-opaque-three
    - fluiduct-energy-opaque-from-transparent
    - fluiduct-energy-transparent-from-opaque
    - fluiduct-super
    - fluiduct-super-opaque
    - fluiduct-super-opaque-from-transparent
    - fluiduct-super-transparent-from-opaque
---

![Regular, Hardened, Signalum-Plated and Super-Laminar](/assets/images/thermal-dynamics/fluiducts.png)


**Fluiducts** are blocks added by Thermal Dynamics. They transport fluids
between tanks and blocks that needs fluids. There are several types of
Fluiducts, including ones that can move fluids at faster speeds, or ones that
double as [Fluxducts](/docs/fluxducts/).

Every type of Fluiduct has a transparent version and an opaque version. Opaque
Fluiducts do not render any fluids that flow through them.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


## Operation
When placed, Fluiducts connect to adjacent tanks and other Fluiducts. Networks
of Fluiducts are able to transport fluids between tanks if at least one route of
connected Fluiducts is available. Fluiduct connections can be closed and
reopened by using a [Crescent Hammer](/docs/crescent-hammer/) on them.

[Servos](/docs/servos/) and [Retrievers](/docs/retrievers/) can be used to
extract fluids from tanks and run them through a Fluiduct network. Other devices
that have explicit support for Fluiducts can also eject fluids into them. All
devices in the CoFH mods that can eject fluids have support for Fluiducts.
