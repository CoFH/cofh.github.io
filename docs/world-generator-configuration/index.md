---
title: World Generator Configuration
nav: cofh-world
redirect_from:
  - /mods/cofh-core/custom-world-generation.html
  - /docs/cofh-core/features/custom-world-generation/
  - /docs/cofh-core/features/custom-world-generation-1-7/
  - /docs/cofh-core/features/custom-world-generation-1-10/
  - /docs/cofh-world/guides/world-generator-configuration/
  - /docs/cofh-world/world-generator-configuration/
_todo:
  - add number entries
  - add examples
---

[CoFH World](/docs/cofh-world/) allows configuring custom types of ores, plants,
boulders, spikes, lakes and more to be generated in the world. They are
configured using a [JSON](http://www.json.org/) (or
[HOCON](https://github.com/lightbend/config/blob/master/HOCON.md)) format.


---


File structure
--------------

Custom world generation is specified by `.json` files in the `cofh/world` folder
inside Minecraft Forge's `config` folder. By default, this folder contains one
or more files: `00_minecraft.json`, and several files for [Thermal
Foundation](/docs/thermal-foundation/) if it is also installed.

These files may be edited to change the default types of world generation. It is
also possible to add new `.json` files to be read by CoFH World. This is not
required when adding more world generation types, but can improve readability.
The folder is read recursively, so the `.json` files may be grouped in
subfolders.

Only files with the `.json` extension are read. This means that entire
configuration files can be disabled by simply changing the extension to
something else.

Editing `00_minecraft.json` will only have effect if the option
`ReplaceStandardGeneration` is set to `true` in CoFH World's configuration file.
It is set to `false` by default.

If world generation is not working as intended, try checking the log. Any errors
that are found in the files are logged while the game starts.


---


File format
-----------

Every world generation file consists of one root object. This object must
contain a value `populate`, which describes the things to generate in the world.
The object may also contain a value `dependencies`, describing what mods must be
loaded in order to read the world generation file.


### populate {#file-format-populate}
The `populate` value is another object, whose values are [generation
entries](#generation-entry-format). It describes the features to populate the
world with.


### dependencies {#file-format-dependencies}
The `dependencies` value is either a single [Forge mod entry](#forge-mod-entry),
or an array of them. If one of the specified dependencies is not loaded, the
entire file will be skipped by CoFH World.


---


Generation entry format
-----------------------

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


---


Distribution and generator types
--------------------------------

This section lists the available distribution and generator types that may be
used.


### Distribution types
Click on the name of a distribution type to see information about it.

{% include worldgen-tables/distribution-types.html %}


### Generator types
Click on the name of a generator type to see information about it.

{% include worldgen-tables/generator-types.html %}


---


Other formats
-------------

This section describes other kinds of formats that are used throughout the JSON
files.


### Weighted array
This format describes an array with items to randomly choose from.

Weighted arrays may contain any kind of item. However, objects in a weighted
array may contain the value `weight`, which specifies how likely the item is to
be picked compared to other items in the array. The default weight of each item
is `100`.


### Uniform Range
This format describes a range for the parameter to choose from.

Parameters with a range will select a random value between the `min` and `max` values specified. This random value is chosen once per chunk. For example, if you set the `max-height` parameter with a `min` of 20 and a `max` of 60, then the height distribution will vary between 20 and 60 for different chunks. This can also be useful to vary the size of ore deposits, and the number of veins in a chunk.

Syntax example:
`"min-height": {min:20, max:60},`


### Block entry
This format describes a certain type of block.

A block entry can be specified either as an object or as a string. If specified
as an object, said object can contain the following values.

{% include worldgen-tables/block-entry.html %}

If specified as a string, the value `name` seen above can be used directly. The
other values will be set to their defaults.


### Biome entry
This format describes a specific biome, or a way to match biomes by certain
properties.

A biome entry can be specified either as an object or as a string. If specified
as an object, said object can contain the following values.

{% include worldgen-tables/biome-entry.html %}

If specified as a string, the entry specifies a single biome by its full name.


### Forge mod entry
This format describes a Minecraft Forge mod, optionally with a certain version.

Forge mod entries are objects that can contain the following values.

{% include worldgen-tables/forge-mod-entry.html %}


---


Links
-----

This section lists some links that can be useful when setting up world
generation with CoFH World.

* [IDs of blocks in vanilla Minecraft](http://minecraft.gamepedia.com/Data_values#Block_IDs)
* [Block states of blocks in vanilla Minecraft](http://minecraft.gamepedia.com/Block_states#List_of_block_states)
* [Names of biomes in vanilla Minecraft](http://minecraft.gamepedia.com/Data_values#Biome_IDs)
* [Forge biome tags](https://pastebin.com/0NH383ps)
