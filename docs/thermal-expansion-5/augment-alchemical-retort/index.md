---
title: 'Augment: Alchemical Retort'
nav: thermal-expansion-5
image:
- alt: Alchemical retort augment
  file: thermal-expansion-5/augment-machine-refinery-potion.png
redirect_from:
- /docs/augment-alchemical-retort/
- /docs/thermal-expansion/augment-alchemical-retort/
recipes:
  crafting:
  - te5-augment-machine-refinery-potion
---

An **alchemical retort** is an [augment](/docs/thermal-expansion-5/augments/) that allows for a
[fractionating still](/docs/thermal-expansion-5/fractionating-still/) to refine [fluid
potions](/docs/thermal-foundation-2/potion-fluid/), increasing their potency to levels that cannot be
obtained through [brewing](https://minecraft.gamepedia.com/Brewing).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
An alchemical retort can be installed in the Augmentation tab in a
[fractionating still](/docs/thermal-expansion-5/fractionating-still/)'s GUI. It is a specialization
that cannot be installed together with other specialization augments.

### Effects
A [fractionating still](/docs/thermal-expansion-5/fractionating-still/) with an alchemical retort
installed can refine level II [fluid potions](/docs/thermal-foundation-2/potion-fluid/) to increase
their potency to [levels up to IV](/docs/cofh-core-4/potions/#stronger-potions).
It can also refine the extended versions of potions (brewed using
[redstone](https://minecraft.gamepedia.com/Redstone)) to increase their potency
to [levels up to III](/docs/cofh-core-4/potions/#stronger-potions). However, the
machine cannot process anything other than potions.

Refining a fluid potion requires 2,500 RF per operation. The amount of fluid
consumed and produced per operation differs depending on the potency level of
the potion that is being refined.

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Level increase | Input amount | Output amount |
|---
| II to III | 250 mB | 200 mB |
| III to IV | 200 mB | 150 mB |
| I to II (extended) | 250 mB | 200 mB |
| II to III (extended) | 200 mB | 150 mB |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}
