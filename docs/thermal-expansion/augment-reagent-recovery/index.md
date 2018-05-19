---
title: 'Augment: Reagent Recovery'
nav: thermal-expansion
image:
  - alt: Reagent recovery augment
    file: thermal-expansion/augment-machine-brewer-reagent.png
redirect_from:
  - /docs/augment-reagent-recovery/
recipes:
  crafting:
    - augment-machine-brewer-reagent
---

A **reagent recovery** [augment](/docs/augments/) provides a chance for an
[alchemical imbuer](/docs/alchemical-imbuer/) to not consume reagents
([brewing](https://minecraft.gamepedia.com/Brewing) ingredients).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
A reagent recovery augment can be installed in the Augmentation tab in an
[alchemical imbuer](/docs/alchemical-imbuer/)'s GUI. It can be installed
multiple times, stacking its effects.

### Effects
Installed reagent recovery augments provide a chance for a [alchemical
imbuer](/docs/alchemical-imbuer/) to not consume a reagent
([brewing](https://minecraft.gamepedia.com/Brewing) ingredient) after an
operation. However, they also increase the amount of energy required per
operation.

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Installed amount | Reagent reuse chance | Energy increase |
|---
| 1 | 15% | + 10% |
| 2 | 30% | + 20% |
| 3 | 45% | + 30% |
| 4 | 60% | + 40% |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

If reagent recovery augments are installed together with other augments that
increase the amount of energy required per operation, their energy increase
percentages are added together before being applied to the amount of energy.
