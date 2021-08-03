---
category: Materials
recipes:
  centrifuge:
  - dust-pyrotheum
  pulverizer:
  - ore-processing-lapis-lazuli
  - ore-processing-nether-quartz
  - fluid-ore-processing-glowstone
  - gravel-from-netherrack
  - dust-coal
  - blaze-powder
  refinery:
  - refined-fuel
  smelter:
  - nether-brick
show-image: false
subcategory: Other
subjects:
- tf-1-12-sulfur
title: Sulfur
usage-recipes:
  crafting-shaped:
  - te-1-12-flux-capacitor-basic
  crafting-shapeless:
  - tf-1-12-gunpowder-using-coal
  - tf-1-12-gunpowder-using-charcoal
  - tf-1-12-dust-pyrotheum
  transposer-fill:
  - blaze-powder
---

![Sulfur](/assets/images/docs/1.12/thermal-foundation/sulfur.png){:style="height: 128px"}


**Sulfur** is a byproduct of various different processes. It may also be dropped
by mobs that are immune to fire. It can be used to craft
[gunpowder](https://minecraft.gamepedia.com/Gunpowder), [pyrotheum
dust](../pyrotheum-dust/) and [flux capacitors](../../thermal-expansion/flux-capacitor/).


Obtaining
---------

### Pulverizer
{% include docs/recipe/table/table.html recipe-type='pulverizer' recipe-ids=page.recipes.pulverizer no-result=true %}

### Induction Smelter
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.recipes.smelter no-result=true %}

### Fractionating Still
{% include docs/recipe/table/table.html recipe-type='refinery' recipe-ids=page.recipes.refinery no-result=true %}

### Mobs
Mobs that are immune to fire have a chance to drop sulfur on death. This mostly
includes mobs from the [Nether](https://minecraft.gamepedia.com/The_Nether).

### Centrifugal Separator
{% include docs/recipe/table/table.html recipe-type='centrifuge' recipe-ids=page.recipes.centrifuge no-result=true %}


Usage
-----

### Crafting ingredient
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.usage-recipes.crafting-shaped %}
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}

### Fluid Transposer ingredient
{% include docs/recipe/table/table.html recipe-type='transposer-fill' recipe-ids=page.usage-recipes.transposer-fill %}
