---
category: Attachments
image:
- alt: Redstone relay
  file: thermal-dynamics/redstone-relay.png
recipes:
  crafting-shaped:
  - td-1-12-redstone-relay
subjects:
- td-1-12-redstone-relay
title: Redstone Relay
---

A **redstone relay** is an item that can be installed on
[fluxducts](../fluxducts/), [fluiducts](../fluiduct/),
[itemducts](../itemduct/) and [structuralducts](../structuralduct/). It
transmits [redstone](https://minecraft.gamepedia.com/Redstone) signals through a
duct network.


Obtaining
--------

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.recipes.crafting-shaped no-result=true %}


Usage
-----

### Installation
A redstone relay can be installed on a [fluxduct](../fluxducts/),
[fluiduct](../fluiduct/), [itemduct](../itemduct/) or
[structuralduct](../structuralduct/) connection by using it on the
connection. It can be removed by using a [wrench](../../wrenches/) on it.

### Configuration
An installed redstone relay can be configured by using it.

A redstone relay's configuration can be saved on a [redprint](../../thermal-foundation/redprint/)
to be copied to other redstone relays.

### Transfer modes
A redstone relay can be configured to be in one of three transfer modes:

Redstone Input
: The relay transfers signals it receives through the duct network. This is the
default mode.

Redstone Output
: The relay receives signals from the duct network and transfers them into the
adjacent block.

Comparator Input
: The relay measures the adjacent block like a [redstone
comparator](https://minecraft.gamepedia.com/Redstone_Comparator) and transfers
the resulting signal strength through the duct network.

### Signal modes
A redstone relay can be configured to be in one of four signal modes:

Scaled
: The relay transfers/outputs the same signal strength. This is the default
mode.

Inverted Scaled
: The relay inverts the signal strength before transferring/outputting it. For
example, 0 becomes 15 and 14 becomes 1.

Threshold
: The relay transfers/outputs a signal at full strength if the signal strength
is greater than or equal to a configured threshold.

Inverted Threshold
: Similar to the Threshold mode, except the transferred/outputted signal is
inverted.

### Channels
A redstone relay can be configured to be in one of 16 different channels, each
of which has a corresponding color. Relays in a duct network will only transfer
signals to each other if they are in the same channel. This allows for
transferring up to 16 different redstone signals through the same duct network.
