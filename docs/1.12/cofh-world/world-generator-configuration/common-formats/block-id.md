---
category: Configuration
show-image: false
subcategory: Common formats
title: Block ID
---

A **block ID** is a format used while describing
[features](../../feature-format/) to specify a type of
[block](https://minecraft.gamepedia.com/Block) in the world.


Format
------

A block ID is an object with the following values.

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
                <td markdown="span">`name`</td>
                <td markdown="span">String</td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The internal name (ID) of the block, such as
                    `minecraft:stone`. The ID of a block in the world can be
                    seen ingame by looking at it while the
                    [debug screen](https://minecraft.gamepedia.com/Debug_screen)
                    is active. If the block is from the base game, the
                    `minecraft:` prefix is not required.
                </td>
            </tr>
            <tr>
                <td markdown="span">`properties` (optional)</td>
                <td markdown="span">Object</td>
                <td markdown="span">(See description)</td>
                <td markdown="span">
                    The
                    [block states](https://minecraft.gamepedia.com/block_states)
                    of the block, specified as an object in which the keys are
                    the names of the block states. The block states of a block
                    in the world can be seen ingame by looking at it while the
                    [debug screen](https://minecraft.gamepedia.com/Debug_screen)
                    is active.<br />
                    <br />
                    If `properties` is not specified and the block ID is used to
                    generate blocks, the default block states for the block type
                    are used. If the block ID is used to match existing blocks,
                    block states are ignored while matching blocks.
                </td>
            </tr>
            <tr>
                <td markdown="span">`data-tag` (optional)</td>
                <td markdown="span">Object</td>
                <td markdown="span">`null`</td>
                <td markdown="span">
                    The [NBT data](https://minecraft.gamepedia.com/NBT_format)
                    of the block, specified as JSON. Only used for blocks that
                    have
                    [block entities](https://minecraft.gamepedia.com/Chunk_format#Block_entity_format).
                </td>
            </tr>
            <tr>
                <td markdown="span">`weight` (optional)</td>
                <td markdown="span">Number</td>
                <td markdown="span">`100`</td>
                <td markdown="span">
                    How likely the block ID is to be selected when it is part of
                    an array of block IDs to randomly choose from. Block IDs
                    with a greater weight have a higher chance of being
                    selected.
                </td>
            </tr>
        </tbody>
    </table>
</div>

A block ID may also be specified as a single string. In that case, it is read as
the `name` value.


Examples
--------

Coming soon...
