---
title: Iron Gear
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/materials/gears/
  - /docs/thermal-foundation/items/materials/gears/iron-gear/
  - /docs/iron-gear/
recipes:
  crafting:
    - tf2-gear-iron
    - tf2-gear-iron-using-copper
    - tf2-gear-iron-using-tin
    - tf2-gear-iron-using-bronze
  compactor-gear:
    - gear-iron
usage-recipes:
  crafting:
    - te5-device-water-gen
    - te5-device-nullifier
    - te5-device-heat-sink
    - te5-device-tapper
    - te5-device-fisher
    - te5-device-item-buffer
    - te5-device-fluid-buffer
    - te5-device-lexicon
    - te5-device-xp-collector
    - te5-device-diffuser
    - te5-device-factorizer
    - te5-device-mob-catcher
    - te5-augment-machine-compactor-gear
    - te5-augment-machine-charger-repair
    - te5-augment-dynamo-boiler
    - te5-augment-dynamo-steam-turbine
    - ti-fluxbore-basic
    - ti-fluxsaw-basic
  smelter:
    - recycling-gear-iron
---

![Iron gear](/assets/images/thermal-foundation/gear-iron.png){:style="height: 128px"}


**Iron gears** are crafting materials made of
[iron](https://minecraft.gamepedia.com/Iron_Ingot).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Compactor with Gearworking Die
{% include recipe-table.html type='compactor-te5-gear' recipes=page.recipes.compactor-gear no-result=true %}


Usage
-----

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter-te5' recipes=page.usage-recipes.smelter %}
