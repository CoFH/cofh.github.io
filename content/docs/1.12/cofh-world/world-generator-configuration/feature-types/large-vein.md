---
category: Configuration
show_image: false
subcategory: Feature types
title: large-vein
---

**`large-vein`** is one of the [feature types](../) provided by [CoFH
World](../../../). It generates deposits of blocks as a group of branches that
start from a center point. These types of deposits can get very large.

A deposit of blocks generated using `large-vein` consists of 'main branches' and
'sub-branches'. Main branches start from the center point of the deposit.
Sub-branches have a 1 in 3 chance of being generated from each block in a main
branch. Both types of branches are generated as strings of blocks that 'grow' in
random directions.


Options
-------

When using this feature type, the following values must be added to the [feature
type configuration](../../feature-format/#feature-type-configuration).


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`block`|[Block ID](../../common-formats/block-id/) / array of block IDs|-|The type(s) of block that the deposits consist of. When specified as an array, a block type is selected randomly for each generated block.|
|`cluster-size`|Number|-|The maximum amount of main branches that generated deposits consist of.  `cluster-size` also determines the maximum lengths of branches. Each main branch consists of up to `1 + ([cluster-size] / 30)` blocks, and each sub-branch consists of up to `1 + ([max. main branch length] / 5)` blocks.|
|`sparse` (optional)|Boolean|`true`|If `true`, the total amount of main branches in deposits and the amount of blocks in a main branch is reduced by 1 for each block generated as part of a sub-branch. This causes less main branches to be generated and makes them shorter, while sub-branches keep the same maximum length.|
|`spindly` (optional)|Boolean|`false`|If `true`, the amount of main branches in deposits is reduced by 1 for each block generated as part of a main branch. This causes less main branches to be generated, though they keep the same maximum length.|



Examples
--------

Coming soon...
