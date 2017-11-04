---
title: Devices
nav: thermal-expansion
image:
  - alt: Aqueous accumulator
    file: thermal-expansion/aqueous-accumulator.png
  - alt: Nullifier
    file: thermal-expansion/nullifier.png
  - alt: Thermal mediator
    file: thermal-expansion/thermal-mediator.png
  - alt: Arboreal extractor
    file: thermal-expansion/arboreal-extractor.png
  - alt: Aquatic entangler
    file: thermal-expansion/aquatic-entangler.png
  - alt: Item allocator
    file: thermal-expansion/item-allocator.png
frame-recipes:
  crafting:
    - frame-device
---

**Devices** are blocks that perform various functions involving items and/or
fluids. Unlike [machines](/docs/machines/), they do not use [Redstone
Flux](/docs/redstone-flux/), and cannot be [upgraded](/docs/tiers/) or
[augmented](/docs/augments/).


List of devices
---------------

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Device | Description |
|---
| [Aqueous Accumulator](/docs/aqueous-accumulator/) | Extracts [water](https://minecraft.gamepedia.com/Water) from its surroundings. |
| [Nullifier](/docs/nullifier/) | Destroys items and fluids. |
| [Thermal Mediator](/docs/thermal-mediator/) | Speeds up adjacent [machines](/docs/machines/) and [dynamos](/docs/dynamos/) using [coolants](/docs/coolants/). |
| [Arboreal Extractor](/docs/arboreal-extractor/) | Extracts a fluid from an adjacent [tree](https://minecraft.gamepedia.com/Tree). |
| [Aquatic Entangler](/docs/aquatic-entangler/) | Catches [fish](https://minecraft.gamepedia.com/Fish). |
| [Item Allocator](/docs/item-allocator/) | Stores and transfers items. |
{:.uk-table .uk-table-striped .uk-table-condensed .cofh-table-semi-compress .uk-text-small}
</div>
{::options parse_block_html="false" /}


Device Frame
------------

All devices are crafted from **device frames**.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.frame-recipes.crafting %}
