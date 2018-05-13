---
title: Feature format
nav: cofh-world
---

A generation entry describes a feature to generate in the world. It is an object
that can contain the following values.

{% include worldgen-tables/generation-entry.html %}


### Generator entries
A generator entry specifies which generator to use to generate a feature, and
also configures said generator. Not to be confused with *generation* entries. It
is an object that can contain the following values.

{% include worldgen-tables/generator-entry.html %}


### Biome restriction entries
A biome restriction entry specifies the biomes in which a feature may be
generated. It is an object that contains the following values.

{% include worldgen-tables/biome-restriction-entry.html %}


### Dimension restriction entries
A dimension restriction entry specifies the dimensions in which a feature may be
generated. It is an object that contains the following values.

{% include worldgen-tables/dimension-restriction-entry.html %}


### Biome entry
This format describes a specific biome, or a way to match biomes by certain
properties.

A biome entry can be specified either as an object or as a string. If specified
as an object, said object can contain the following values.

{% include worldgen-tables/biome-entry.html %}

If specified as a string, the entry specifies a single biome by its full name.


Links
-----

* [IDs of biomes in vanilla Minecraft](http://minecraft.gamepedia.com/Data_values#Biome_IDs)
* [Forge biome tags](https://pastebin.com/0NH383ps)
