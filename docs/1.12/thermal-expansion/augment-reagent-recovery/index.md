---
title: 'Augment: Reagent Recovery'
image:
- alt: Reagent recovery augment
  file: thermal-expansion-5/augment-machine-brewer-reagent.png
redirect_from:
- /docs/augment-reagent-recovery/
- /docs/thermal-expansion/augment-reagent-recovery/
- /docs/thermal-expansion-5/augment-reagent-recovery/
- /docs/1.12/thermal-expansion-5/augment-reagent-recovery/
recipes:
  crafting:
  - te-1-12-augment-machine-brewer-reagent
---

A **reagent recovery** [augment](/docs/1.12/thermal-expansion/augments/) provides a chance for an
[alchemical imbuer](/docs/1.12/thermal-expansion/alchemical-imbuer/) to not consume reagents
([brewing](https://minecraft.gamepedia.com/Brewing) ingredients).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
A reagent recovery augment can be installed in the Augmentation tab in an
[alchemical imbuer](/docs/1.12/thermal-expansion/alchemical-imbuer/)'s GUI. It can be installed
multiple times, stacking its effects.

### Effects
Installed reagent recovery augments provide a chance for a [alchemical
imbuer](/docs/1.12/thermal-expansion/alchemical-imbuer/) to not consume a reagent
([brewing](https://minecraft.gamepedia.com/Brewing) ingredient) after an
operation. However, they also increase the amount of energy required per
operation.

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Installed amount | Reagent reuse chance | Energy increase |
|---
| 1 | 15% | + 15% |
| 2 | 30% | + 30% |
| 3 | 45% | + 45% |
| 4 | 60% | + 60% |
| 5 | 75% | + 75% |
| 6 | 90% | + 90% |
| 7 | 95% | + 105% |
| 8 | 95% | + 120% |
| 9 | 95% | + 135% |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

If reagent recovery augments are installed together with other augments that
increase the amount of energy required per operation, their energy increase
percentages are added together before being applied to the amount of energy.
