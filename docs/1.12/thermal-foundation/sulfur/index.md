---
title: Sulfur
redirect_from:
- /docs/thermal-foundation/materials/sulfur/
- /docs/thermal-foundation/items/materials/other/sulfur/
- /docs/sulfur/
- /docs/thermal-foundation/sulfur/
- /docs/thermal-foundation-2/sulfur/
- /docs/1.12/thermal-foundation-2/sulfur/
recipes:
  pulverizer:
  - ore-processing-lapis-lazuli
  - ore-processing-nether-quartz
  - fluid-ore-processing-glowstone
  - gravel-from-netherrack
  - dust-coal
  - blaze-powder
  smelter:
  - nether-brick
  refinery:
  - refined-fuel
  centrifuge:
  - dust-pyrotheum
usage-recipes:
  crafting:
  - tf-1-12-gunpowder-using-coal
  - tf-1-12-gunpowder-using-charcoal
  - tf-1-12-dust-pyrotheum
  - te-1-12-flux-capacitor-basic
  transposer-fill:
  - blaze-powder
---

![Sulfur](/assets/images/thermal-foundation-2/sulfur.png){:style="height: 128px"}


**Sulfur** is a byproduct of various different processes. It may also be dropped
by mobs that are immune to fire. It can be used to craft
[gunpowder](https://minecraft.wiki/w/Gunpowder), [pyrotheum
dust](../pyrotheum-dust/) and [flux capacitors](../../thermal-expansion/flux-capacitor/).


Obtaining
---------

### Pulverizer
{% include recipe-table.html type='te-1-12-pulverizer' recipes=page.recipes.pulverizer no-result=true %}

### Induction Smelter
{% include recipe-table.html type='te-1-12-smelter' recipes=page.recipes.smelter no-result=true %}

### Fractionating Still
{% include recipe-table.html type='te-1-12-refinery' recipes=page.recipes.refinery no-result=true %}

### Mobs
Mobs that are immune to fire have a chance to drop sulfur on death. This mostly
includes mobs from the [Nether](https://minecraft.wiki/w/The_Nether).

### Centrifugal Separator
{% include recipe-table.html type='te-1-12-centrifuge' recipes=page.recipes.centrifuge no-result=true %}


Usage
-----

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Fluid Transposer ingredient
{% include recipe-table.html type='te-1-12-transposer-fill' recipes=page.usage-recipes.transposer-fill %}
