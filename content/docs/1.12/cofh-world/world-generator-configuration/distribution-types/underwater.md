---
category: Configuration
show_image: false
subcategory: Distribution types
title: underwater
---

**`underwater`** is one of the [distribution types](../) provided by [CoFH
World](../../../). It distributes features at the bottom of bodies of water. It
does so by randomly picking X and Z coordinates and placing features below the
highest water block or column of water blocks at those coordinates, if any. This
works with any block that has the 'water' material.

If there is no water at randomly chosen X and Z coordinates, it still counts
towards the value `cluster-count` of the [feature
entry](../../feature-format/#features).

When using this distribution type, the feature type
[`plate`](../../feature-types/plate/) is used by default, and the value
`material` of [feature type
configurations](../../feature-format/#feature-type-configuration) is set to
[dirt](https://minecraft.gamepedia.com/Dirt) and [grass
blocks](https://minecraft.gamepedia.com/Grass_Block) (and all variations of
these blocks) by default.


Options
-------

When using this distribution type, the following value may be added to the
[feature entry](../../feature-format/#features).


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
                <td markdown="span">`material` (optional)</td>
                <td markdown="span">
                    [Block ID](../../common-formats/block-id/)
                    / array of block IDs
                </td>
                <td markdown="span">
                    (Same as default `material` value of
                    [feature type configurations](../../feature-format/#feature-type-configuration),
                    described above)
                </td>
                <td markdown="span">
                    The type(s) of block that may be replaced with features.
                    A feature will only be generated at randomly chosen X and Z
                    coordinates if the type of the highest block below water at
                    those coordinates is specified here. Otherwise, the feature
                    is skipped, but still counts towards the value
                    `cluster-count` of the
                    [feature entry](../../feature-format/#features).
                </td>
            </tr>
        </tbody>
    </table>



Examples
--------

Coming soon...
