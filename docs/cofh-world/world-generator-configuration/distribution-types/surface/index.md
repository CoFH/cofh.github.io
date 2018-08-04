---
title: surface
nav: cofh-world
---

**`surface`** is one of the [distribution
types](/docs/cofh-world/world-generator-configuration/distribution-types/)
provided by [CoFH World](/docs/cofh-world/). It distributes features on the
surface. It does so by randomly picking X and Z coordinates and placing features
on top of the highest blocks at those coordinates.

When using this distribution type, the feature type
[`cluster`](/docs/cofh-world/world-generator-configuration/feature-types/cluster/)
is used by default, and the value `material` of [feature type
configurations](/docs/cofh-world/world-generator-configuration/feature-format/#feature-type-configuration)
is set to [stone](https://minecraft.gamepedia.com/Stone),
[dirt](https://minecraft.gamepedia.com/Dirt), [grass
blocks](https://minecraft.gamepedia.com/Grass_Block),
[sand](https://minecraft.gamepedia.com/Sand),
[gravel](https://minecraft.gamepedia.com/Gravel),
[snow](https://minecraft.gamepedia.com/Snow_Block),
[air](https://minecraft.gamepedia.com/Air) and
[water](https://minecraft.gamepedia.com/Water) (and all variations of these
blocks) by default. Note that air is included because air blocks must be
replaced when generating features on the surface.


Options
-------

When using this distribution type, the following values may be added to the
[feature
entry](/docs/cofh-world/world-generator-configuration/feature-format/#features).

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
                <td markdown="span">`material` (optional)</td>
                <td markdown="span">
                    [Block ID](/docs/cofh-world/world-generator-configuration/common-formats/block-id/)
                    / array of block IDs
                </td>
                <td markdown="span">
                    (Same as default `material` value of
                    [feature type configurations](/docs/cofh-world/world-generator-configuration/feature-format/#feature-type-configuration),
                    described above)
                </td>
                <td markdown="span">
                    The type(s) of block that features may be placed on top of.
                    A feature will only be generated at randomly chosen X and Z
                    coordinates if the type of the highest block at those
                    coordinates is specified here. Otherwise, the feature is
                    skipped, but still counts towards the value `cluster-count`
                    of the
                    [feature entry](/docs/cofh-world/world-generator-configuration/feature-format/#features).
                </td>
            </tr>
            <tr>
                <td markdown="span">`follow-terrain` (optional)</td>
                <td markdown="span">Boolean</td>
                <td markdown="span">`false`</td>
                <td markdown="span">
                    If `false`, only 'terrain' blocks count when finding the
                    highest block at randomly chosen X and Z coordinates. Blocks
                    that make up trees, as well as 'replaceable' blocks such as
                    small plants and fluids, are ignored. If `true`, any block
                    counts when finding the highest block.<br />
                    <br />
                    (Yes, the effects of `true` and `false` are the wrong way
                    around. It's kept this way for now to not break existing
                    configurations.)
                </td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

Coming soon...
