---
title: Sulfur
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/materials/sulfur/
  - /docs/thermal-foundation/items/materials/other/sulfur/
  - /docs/sulfur/
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
    - gunpowder-using-coal-sulfur-and-niter
    - gunpowder-using-charcoal-sulfur-and-niter
    - dust-pyrotheum
    - flux-capacitor-basic
  transposer-fill:
    - blaze-powder
---

![Sulfur](/assets/images/thermal-foundation/sulfur.png){:style="height: 128px"}


**Sulfur** is a byproduct of various different processes. It may also be dropped
by mobs that are immune to fire. It can be used to craft
[gunpowder](https://minecraft.gamepedia.com/Gunpowder), [pyrotheum
dust](/docs/pyrotheum-dust/) and [flux capacitors](/docs/flux-capacitor/).


Obtaining
---------

### Pulverizer
{% include recipe-table.html type='pulverizer' recipes=page.recipes.pulverizer no-result=true %}

### Induction Smelter
{% include recipe-table.html type='smelter' recipes=page.recipes.smelter no-result=true %}

### Fractionating Still
{% include recipe-table.html type='refinery' recipes=page.recipes.refinery no-result=true %}

### Mobs
Mobs that are immune to fire have a chance to drop sulfur on death. This mostly
includes mobs from the [Nether](https://minecraft.gamepedia.com/The_Nether).

### Centrifugal Separator
{% include recipe-table.html type='centrifuge' recipes=page.recipes.centrifuge no-result=true %}


Usage
-----

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-fill' recipes=page.usage-recipes.transposer-fill %}
