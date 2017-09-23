---
title: Itemducts
redirect_from:
  - /thermal-expansion/items/itemducts/
  - /thermal-expansion/transportation/itemducts/
recipes:
  crafting:
    - itemduct
    - itemduct-opaque
    - itemduct-opaque-from-transparent
    - itemduct-transparent-from-opaque
    - itemduct-fast-opaque-from-transparent
    - itemduct-fast-transparent-from-opaque
    - itemduct-energy-one
    - itemduct-energy-three
    - itemduct-energy-opaque-one
    - itemduct-energy-opaque-three
    - itemduct-energy-opaque-from-transparent
    - itemduct-energy-transparent-from-opaque
    - itemduct-energy-fast-one
    - itemduct-energy-fast-three
    - itemduct-energy-fast-opaque-one
    - itemduct-energy-fast-opaque-three
    - itemduct-energy-fast-opaque-from-transparent
    - itemduct-energy-fast-transparent-from-opaque
---

![](/assets/images/thermal-dynamics/itemducts.png "Regular, Dense, Vacuum, Impulse, Fluctuating and Warp Itemducts")

**Itemducts** are blocks added by Thermal Dynamics. They transport items between inventories. There are several types of Itemducts, including ones that can move items at faster speeds, or ones that double as [Fluxducts](/docs/thermal-dynamics/ducts/fluxducts/).

Every type of Itemduct has a transparent version and an opaque version. Opaque Itemducts do not render any items that move through them.

Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


## Crafting


**Impulse Itemduct**
![](/assets/images/recipes/itemduct-impulse.png "Impulse Itemduct recipe")
[Fluid Transposer](/docs/thermal-expansion/machines/fluid-transposer/)

*   Itemduct (may be Opaque)
*   200 mB [Energized Glowstone](/docs/thermal-foundation/fluids/energized-glowstone/)


**Fluctuating Itemduct**
![](/assets/images/recipes/itemduct-flux.png "Fluctuating Itemduct recipe")
[Fluid Transposer](/docs/thermal-expansion/machines/fluid-transposer/)

*   Itemduct (may be Opaque)
*   200 mB [Destabilized Redstone](/docs/thermal-foundation/fluids/destabilized-redstone/)


## Operation

When placed, Itemducts connect to adjacent inventories and other Itemducts. Networks of Itemducts are able to transport items between inventories if at least one route of connected Itemducts is available. Itemduct connections can be closed and reopened by using a [Crescent Hammer](/docs/thermal-expansion/tools/crescent-hammer/) on them.

[Servos](/docs/thermal-dynamics/duct-attachments/servos/) and [Retrievers](/docs/thermal-dynamics/duct-attachments/retrievers/) can be used to extract items from inventories and run them through an Itemduct network. Other devices that have explicit support for Itemducts can also eject items into them. All devices in the CoFH mods that can eject items have support for Itemducts.

Before an item enters a network of Itemducts, the network first attempts to find a valid destination for the item. Valid destinations are inventories that allow the item to enter and have space for it. [Filters](/docs/thermal-dynamics/duct-attachments/filters/) connected to destinations may add more limitations to that.

If a valid destination is found for an item, the item enters the Itemduct network and is moved to the destination. Items always take the shortest possible route to their destinations. If no destination is found, the item is not allowed to enter the network.

The default speed of an item when moving through a network is about 1 block per 40 ticks (2 seconds). [Servos](/docs/thermal-dynamics/duct-attachments/servos/) and [Retrievers](/docs/thermal-dynamics/duct-attachments/retrievers/) of higher [tiers](/docs/thermal-expansion/other/tier-system/) may add a significant speed boost to this.

### Routing

It may happen that multiple destinations are available for an item. Which destination the item is moved to depends on the device that inserts the item into the network. The way [Servos](/docs/thermal-dynamics/duct-attachments/servos/) determine this can be configured in said devices' GUIs. When done by any other device, the item is simply moved to the nearest valid destination.

Which destinations are considered nearer or further away than others is determined by the length in blocks of the shortest possible routes to them. Placing Dense or Vacuum Itemducts along the way can change this. These change the calculated length of routes by +1000 and -1000 blocks respectively, greatly prioritizing some destinations over others.

### Backstuffing

When an item is about to enter a destination, and the destination suddenly can't accept the item anymore, different things can happen depending on the device that inserted the item into the network. [Servos](/docs/thermal-dynamics/duct-attachments/servos/) and [Retrievers](/docs/thermal-dynamics/duct-attachments/retrievers/) may take the item back and keep it in an internal buffer until a destination becomes available (this is called backstuffing). If any other device is used, the item is simply ejected from the Itemduct network.

If all possible destinations of a traveling item are removed from the Itemduct network it is in instead of just becoming unavailable, the item is ejected from the network.

Problems like this should usually be prevented, as Itemducts take moving items into account when determining if a destination is valid for an item (this behavior may be changed with [Filters](/docs/thermal-dynamics/duct-attachments/filters/)).

## Types

There are three special types of Itemducts that are all unique in some way:

*   **Impulse Itemducts** move items at four times the speed.
*   **Fluctuating Itemducts** can transfer [Redstone Flux](/docs/redstone-flux/) as well as items. They work just like [Fluxducts](/docs/thermal-dynamics/ducts/fluxducts/) in that regard. They can transfer 2000 RF/t per input/output.
*   **Warp Itemducts** work just like regular Itemducts. However, when powered with [Redstone Flux](/docs/redstone-flux/), they transfer items instantly instead of gradually moving them. This costs 50 RF per moved item. They also affect [route length](#routing): groups of powered Warp Itemducts are each counted as only one block long.

![](/assets/images/thermal-dynamics/itemducts-warp-powered.png "Powered Warp Itemducts")
