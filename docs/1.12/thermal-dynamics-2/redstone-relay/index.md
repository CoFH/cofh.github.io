---
title: Redstone Relay
image:
- alt: Redstone relay
  file: thermal-dynamics-2/redstone-relay.png
redirect_from:
- /docs/redstone-relay/
- /docs/thermal-dynamics/redstone-relay/
- /docs/thermal-dynamics-2/redstone-relay/
recipes:
  crafting:
  - td2-redstone-relay
---

A **redstone relay** is an item that can be installed on
[fluxducts](/docs/1.12/thermal-dynamics-2/fluxducts/), [fluiducts](/docs/1.12/thermal-dynamics-2/fluiduct/),
[itemducts](/docs/1.12/thermal-dynamics-2/itemduct/) and [structuralducts](/docs/1.12/thermal-dynamics-2/structuralduct/). It
transmits [redstone](https://minecraft.gamepedia.com/Redstone) signals through a
duct network.


Obtaining
--------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
A redstone relay can be installed on a [fluxduct](/docs/1.12/thermal-dynamics-2/fluxducts/),
[fluiduct](/docs/1.12/thermal-dynamics-2/fluiduct/), [itemduct](/docs/1.12/thermal-dynamics-2/itemduct/) or
[structuralduct](/docs/1.12/thermal-dynamics-2/structuralduct/) connection by using it on the
connection. It can be removed by using a [wrench](/docs/1.12/wrenches/) on it.

### Configuration
An installed redstone relay can be configured by using it.

A redstone relay's configuration can be saved on a [redprint](/docs/1.12/thermal-foundation-2/redprint/)
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
