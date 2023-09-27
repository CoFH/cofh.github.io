---
title: underfluid
redirect_from:
- /docs/cofh-world/world-generator-configuration/distribution-types/underfluid/
---

**`underfluid`** is one of the [distribution types](../) provided by [CoFH
World](../../../). It distributes features at the bottom of bodies of certain
types of fluid. It does so by randomly picking X and Z coordinates and placing
features below the highest fluid block or column of fluid blocks at those
coordinates, if any.

If there are no fluid blocks at randomly chosen X and Z coordinates, it still
counts towards the value `cluster-count` of the [feature
entry](../../feature-format/#features).

When using this distribution type, the feature type
[`cluster`](../../feature-types/cluster/) is used by default, and the value
`material` of [feature type
configurations](../../feature-format/#feature-type-configuration) is set to
[dirt](https://minecraft.wiki/w/Dirt) and [grass
blocks](https://minecraft.wiki/w/Grass_Block) (and all variations of
these blocks) by default.


Options
-------

When using this distribution type, the following values must be added to the
[feature entry](../../feature-format/#features).

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
                <td markdown="span">`fluid`</td>
                <td markdown="span">String / array of strings</td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The type(s) of fluid below which features may be placed.
                    Fluid types are referred to by their internally registered
                    name, such as `"water"`, `"lava"` and `"pyrotheum"`.
                </td>
            </tr>
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
                    coordinates if the type of the highest block below a fluid
                    at those coordinates is specified here. Otherwise, the
                    feature is skipped, but still counts towards the value
                    `cluster-count` of the
                    [feature entry](../../feature-format/#features).
                </td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

Coming soon...
