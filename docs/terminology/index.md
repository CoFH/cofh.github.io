---
title: Terminology
---

This is a list of terms that frequently appear in modded Minecraft.


### Energy
Various implementations of energy systems exist in modded Minecraft, like steam
power, Energy Units, Charge and Joules. The various Team CoFH mods typically use
the [Redstone Flux](/docs/redstone-flux/) system, which is also supported by a
wide variety of other mods.

### Fluid
Type of matter that cannot be stored in inventories like items, but must be
stored in tanks instead, or in fluid container items like buckets. Fluid amounts
are expressed in [millibuckets](#millibucket-mb). [Thermal
Foundation](/docs/thermal-foundation/) adds various kinds of fluids. Water and
lava from vanilla Minecraft are also considered fluids.

### Inventory
Anything that can hold items is considered an inventory. This includes chests,
furnaces and most kinds of machines added by mods.

### Millibucket (mB)
Unit used to express amounts of [fluid](#fluid). Derived from buckets, the
original fluid containers. One bucket can store 1000 mB of fluid.

### Power (RF/t)
The rate of [energy](#energy) being transferred or converted. In the [Redstone
Flux](/docs/redstone-flux/) energy system, this is expressed as RF/t, which
stands for [RF](#rf) per [tick](#tick-t).

### RF
Can be one of two things depending on context: an abbreviation for [Redstone
Flux](/docs/redstone-flux/), or a unit used to express amounts of Redstone Flux
energy.

### Tank
Anything that can store [fluids](#fluid) is considered a type of tank. Tanks may
consist of entire blocks, but certain blocks or items that work with fluids may
also have internal tanks of their own.

### Tick (t)
The most basic unit of time in Minecraft. If the game or server is running at an
optimal tick rate, one tick is equal to 1/20 of a second. Ticks are commonly
used to express rates like [RF/t](#power-rft) or [mB](#millibucket-mb)/t. Using
seconds would be unreliable, due to the possibility of a fluctuating [tick
rate](#tick-rate-tps).

### Tick rate (TPS)
How many times the game ticks per second. Optimally, the tick rate is 20 ticks
per second. However, if the computer running the game or server cannot keep up,
the amount of ticks per second decreases, making the game run slower. If this
happens often, it may harm the game's playability.

### Vanilla Minecraft
Minecraft without any mods installed, or at least without mods that add new
content to the game.
