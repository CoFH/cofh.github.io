---
title: Feature format
nav: cofh-world
---

This page describes the [JSON](http://www.json.org/) format that [CoFH
World](/docs/cofh-world/) uses for describing features to generate in the world.
Features are described inside the `populate` value of [world generation
files](/docs/cofh-world/world-generator-configuration/files/).


Features
--------

Features are described as objects with the following values.

<div class="uk-overflow-container">
    <table class="uk-table uk-table-striped uk-text-small">
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td markdown="span">`generator`</td>
                <td markdown="span">
                    [Feature type configuration](#feature-type-configuration) /
                    [weighted array](/docs/cofh-world/world-generator-configuration/common-formats/weighted-array/)
                    of feature type configurations
                </td>
                <td>-</td>
                <td>
                    The type of feature to generate. When specified as a
                    weighted array, a feature type configuration is chosen
                    randomly each time the feature is generated.
                </td>
            </tr>
            <tr>
                <td markdown="span">`distribution`</td>
                <td>String</td>
                <td>-</td>
                <td markdown="span">
                    The
                    [distribution type](/docs/cofh-world/world-generator-configuration/distribution-types/)
                    used to distribute the feature in the world. The used
                    distribution type may require additional values to be added
                    to the feature entry.
                </td>
            </tr>
            <tr>
                <td markdown="span">`cluster-count`</td>
                <td>Number</td>
                <td>-</td>
                <td>
                    How many attempts to generate the feature are done in a
                    chunk.
                </td>
            </tr>
            <tr>
                <td markdown="span">`chunk-chance` (optional)</td>
                <td>Number</td>
                <td markdown="span">`1`</td>
                <td>
                    The chance of a chunk containing the feature at all. Read
                    as follows: one in [chance] chunks contain the feature.
                </td>
            </tr>
            <tr>
                <td markdown="span">`in-village` (optional)</td>
                <td>Boolean</td>
                <td markdown="span">`true`</td>
                <td>
                    Whether the feature may be generated in the same area as a
                    village.
                </td>
            </tr>
            <tr>
                <td markdown="span">`biome` (optional)</td>
                <td><a href="#biome-restriction">Biome restriction</a></td>
                <td>(Any biome)</td>
                <td>The biomes in which the feature may be generated.</td>
            </tr>
            <tr>
                <td markdown="span">`dimension` (optional)</td>
                <td><a href="#dimension-restriction">Dimension restriction</a></td>
                <td>(Any dimension)</td>
                <td>The dimensions in which the feature may be generated.</td>
            </tr>
            <tr>
                <td markdown="span">`retrogen` (optional)</td>
                <td>Boolean</td>
                <td markdown="span">`false`</td>
                <td markdown="span">
                    Whether to generate the feature in previously generated
                    chunks where the feature wasn't already generated (with the
                    same name). This will only work if `RetroactiveGeneration`
                    is set to `true` in CoFH World's configuration file.
                </td>
            </tr>
            <tr>
                <td markdown="span">`enabled` (optional)</td>
                <td>Boolean</td>
                <td markdown="span">`true`</td>
                <td>Whether to generate the feature at all.</td>
            </tr>
        </tbody>
    </table>
</div>

### Feature type configuration
A feature type configuration specifies and configures the type of feature to
generate. It is an object with the following values.

<div class="uk-overflow-container">
    <table class="uk-table uk-table-striped uk-text-small">
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td markdown="span">`type` (optional)</td>
                <td>String</td>
                <td markdown="span">
                    (Set by
                    [distribution type](/docs/cofh-world/world-generator-configuration/distribution-types/))
                </td>
                <td markdown="span">
                    The [feature type](/docs/cofh-world/world-generator-configuration/feature-types/)
                    used to generate the feature. The used feature type may
                    require additional values to be added to the feature type
                    configuration.
                </td>
            </tr>
            <tr>
                <td markdown="span">`block`</td>
                <td markdown="span">
                    [Block ID](/docs/cofh-world/world-generator-configuration/common-formats/block-id/)
                    /
                    [weighted array](/docs/cofh-world/world-generator-configuration/common-formats/weighted-array/)
                    of block IDs
                </td>
                <td>-</td>
                <td markdown="span">
                    The type(s) of block that the feature primarily consists of.
                    When specified as a weighted array, a block type is chosen
                    randomly for each generated block.<br />
                    <br />
                    When using
                    [`sequential`](/docs/cofh-world/world-generator-configuration/feature-types/sequential/)
                    or
                    [`structure`](/docs/cofh-world/world-generator-configuration/feature-types/structure/),
                    this value does not need to be specified.
                </td>
            </tr>
            <tr>
                <td markdown="span">`material` (optional)</td>
                <td markdown="span">
                    [Block ID](/docs/cofh-world/world-generator-configuration/common-formats/block-id/)
                    / array of block IDs
                </td>
                <td markdown="span">
                    (Set by
                    [distribution type](/docs/cofh-world/world-generator-configuration/distribution-types/))
                </td>
                <td>
                    The type(s) of block that may be replaced to generate the
                    feature, such as stone for ore blocks.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Biome restriction
A biome restriction specifies the biomes in which a feature may or may not be
generated. It is an object with the following values.

<div class="uk-overflow-container">
    <table class="uk-table uk-table-striped uk-text-small">
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td markdown="span">`restriction`</td>
                <td>String</td>
                <td markdown="span">
                    Whether the given list of biomes should be treated as a
                    blacklist or as a whitelist. Can be either `"blacklist"` or
                    `"whitelist"`.
                </td>
            </tr>
            <tr>
                <td markdown="span">`value`</td>
                <td>Array of biome entries</td>
                <td>The biomes that the restriction applies to.</td>
            </tr>
        </tbody>
    </table>
</div>

A biome entry describes a way to match one or more biomes. It is an object with
the following values.

<div class="uk-overflow-container">
    <table class="uk-table uk-table-striped uk-text-small">
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td markdown="span">`type`</td>
                <td>String</td>
                <td>-</td>
                <td markdown="span">
                    The method used to match biomes. May be `"id"`,
                    `"temperature"` or `"dictionary"`.
                </td>
            </tr>
            <tr>
                <td markdown="span">`entry`</td>
                <td>String / array of strings</td>
                <td>-</td>
                <td>
                    The value used to match biomes. Uses different values
                    depending on the value of <code>type</code>:
                    <ul>
                        <li>
                            <code>id</code>: Internally registered IDs of
                            biomes.
                        </li>
                        <li>
                            <code>temperature</code>: Temperature categories
                            that biomes can be in. Possible temperature
                            categories are <code>COLD</code>,
                            <code>MEDIUM</code>, <code>WARM</code> and
                            <code>OCEAN</code>.
                        </li>
                        <li>
                            <code>dictionary</code>: Minecraft Forge biome tags
                            that biomes may be internally registered with. A
                            list of possible biome tags can be found
                            <a href="https://pastebin.com/0NH383ps">here</a>.
                        </li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td markdown="span">`whitelist` (optional)</td>
                <td>Boolean</td>
                <td markdown="span">`true`</td>
                <td markdown="span">
                    If `false`, the biome entry is treated as an exception to
                    the blacklist or whitelist it is in.
                </td>
            </tr>
            <tr>
                <td markdown="span">`rarity` (optional)</td>
                <td>Number (integer)</td>
                <td markdown="span">`-1`</td>
                <td markdown="span">
                    If greater than `1`, a random chance is added to determining
                    whether a biome matches the entry. One in [rarity] attempts
                    to match a matching biome will go through. This can be used
                    to make a feature generate more rarely in certain biomes.
                </td>
            </tr>
        </tbody>
    </table>
</div>

A biome entry may also be specified as a single string. In this case, it
specifies a single biome by its ID.

### Dimension restriction
A dimension restriction specifies the dimensions in which a feature may or may
not be generated. It is an object with the following values.

<div class="uk-overflow-container">
    <table class="uk-table uk-table-striped uk-text-small">
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td markdown="span">`restriction`</td>
                <td>String</td>
                <td markdown="span">
                    Whether the given list of dimensions should be treated as a
                    blacklist or as a whitelist. Can be either `"blacklist"` or
                    `"whitelist"`.
                </td>
            </tr>
            <tr>
                <td markdown="span">`value`</td>
                <td>Array of numbers</td>
                <td markdown="span">
                    The IDs of the dimensions that the restriction applies to.
                    The vanilla dimension IDs are as follows: `0` for the
                    Overworld, `-1` for the Nether and `1` for the End.
                </td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

Coming soon...


Links
-----

* [IDs of biomes in vanilla Minecraft](http://minecraft.gamepedia.com/Data_values#Biome_IDs)
* [Forge biome tags](https://pastebin.com/0NH383ps)
