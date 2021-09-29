---
category: Configuration
show_image: false
subcategory: Feature types
title: spike
---

**`spike`** is one of the [feature types](../) provided by [CoFH
World](../../../). It generates upwards pointing spikes, like the ones found in
[ice plains spikes biomes](https://minecraft.gamepedia.com/Ice_Plains_Spikes).

Spikes are only generated on top of a surface; they are never generated in
midair.


Options
-------

When using this feature type, the following values must be added to the [feature
type configuration](../../feature-format/#feature-type-configuration).


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
                <td markdown="span">`block`</td>
                <td markdown="span">
                    [Block ID](../../common-formats/block-id/)
                    / array of block IDs
                </td>
                <td>-</td>
                <td markdown="span">
                    The type(s) of block that spikes consist of. When specified
                    as an array, a block type is selected randomly for each
                    generated block.
                </td>
            </tr>
            <tr>
                <td markdown="span">`min-height` (optional)</td>
                <td markdown="span">Number</td>
                <td markdown="span">`7`</td>
                <td markdown="span">
                    The minimum height of a spike, in blocks.
                </td>
            </tr>
            <tr>
                <td markdown="span">`height-variance` (optional)</td>
                <td markdown="span">Number</td>
                <td markdown="span">`4`</td>
                <td markdown="span">
                    The maximum amount of blocks that may be randomly added to
                    the minimum height of a spike.
                </td>
            </tr>
            <tr>
                <td markdown="span">`size-variance` (optional)</td>
                <td markdown="span">Number</td>
                <td markdown="span">`2`</td>
                <td markdown="span">
                    The maximum amount of blocks that may be randomly added to
                    the radius of a spike at the bottom. The minimum radius is
                    equal to `[height] / ([min-height] / 2)`.
                </td>
            </tr>
            <tr>
                <td markdown="span">`position-variance` (optional)</td>
                <td markdown="span">Number</td>
                <td markdown="span">`3`</td>
                <td markdown="span">
                    A random offset in blocks along the Y axis used when placing
                    spikes.
                </td>
            </tr>
            <tr>
                <td markdown="span">`large-spikes` (optional)</td>
                <td markdown="span">Boolean</td>
                <td markdown="span">`true`</td>
                <td markdown="span">
                    Whether some spikes may be generated as 'large' spikes,
                    which are significantly taller.
                </td>
            </tr>
            <tr>
                <td markdown="span">`large-spike-chance` (optional)</td>
                <td markdown="span">Number</td>
                <td markdown="span">`60`</td>
                <td markdown="span">
                    The chance of a spike to be generated as a large spike. Read
                    as follows: one in [chance] spikes are large spikes.
                </td>
            </tr>
            <tr>
                <td markdown="span">`min-large-spike-height-gain` (optional)</td>
                <td markdown="span">Number</td>
                <td markdown="span">`10`</td>
                <td markdown="span">
                    The minimum amount of additional layers that large spikes
                    have compared to regular spikes.
                </td>
            </tr>
            <tr>
                <td markdown="span">`large-spike-height-variance` (optional)</td>
                <td markdown="span">Number</td>
                <td markdown="span">`30`</td>
                <td markdown="span">
                    The maximum amount of blocks that may be randomly added to
                    the minimum height gain of a large spike.
                </td>
            </tr>
            <tr>
                <td markdown="span">`large-spike-filler-size` (optional)</td>
                <td markdown="span">Number</td>
                <td markdown="span">`1`</td>
                <td markdown="span">
                    The radius of the additional layers of a large spike, in
                    blocks.
                </td>
            </tr>
        </tbody>
    </table>



Examples
--------

Coming soon...
