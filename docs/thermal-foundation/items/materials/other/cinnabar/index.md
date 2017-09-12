---
title: Cinnabar
redirect_from:
  - /docs/thermal-foundation/materials/cinnabar/
recipes:
  pulverizer:
    - ore-processing-gold
    - ore-processing-redstone
    - fluid-ore-processing-redstone
usage-recipes:
  smelter:
    - ore-processing-cinnabar-iron
    - ore-processing-cinnabar-gold
    - ore-processing-cinnabar-copper
    - ore-processing-cinnabar-tin
    - ore-processing-cinnabar-silver
    - ore-processing-cinnabar-lead
    - ore-processing-cinnabar-aluminum
    - ore-processing-cinnabar-nickel
    - ore-processing-cinnabar-platinum
    - ore-processing-cinnabar-iridium
    - ore-processing-cinnabar-mithril
  smelter-pyrotheum:
    - ore-processing-cinnabar-iron
    - ore-processing-cinnabar-gold
    - ore-processing-cinnabar-copper
    - ore-processing-cinnabar-tin
    - ore-processing-cinnabar-silver
    - ore-processing-cinnabar-lead
    - ore-processing-cinnabar-aluminum
    - ore-processing-cinnabar-nickel
    - ore-processing-cinnabar-platinum
    - ore-processing-cinnabar-iridium
    - ore-processing-cinnabar-mithril
---

![Cinnabar](/assets/images/thermal-foundation/cinnabar.png){:style="height: 128px"}


**Cinnabar** is a byproduct of processing certain ores in a
[pulverizer](/docs/thermal-expansion/machines/pulverizer/). It can be used for
processing metal ores in an [induction
smelter](/docs/thermal-expansion/machines/induction-smelter/) with a guaranteed
secondary metal output.


Obtaining
---------

### Pulverizer
{% include recipe-table.html type='pulverizer' recipes=page.recipes.pulverizer no-result=true %}

### Fluid Transposer
If another mod registers a cinnabar ore block, it can be processed into 2 pieces
of cinnabar using 200 mB of [gelid
cryotheum](/docs/thermal-foundation/fluids/elemental/gelid-cryotheum/) and 2000
RF in a [fluid transposer](/docs/thermal-expansion/machines/fluid-transposer/).


Usage
-----

### Induction Smelter ingredient
{% include recipe-table.html type='smelter' recipes=page.usage-recipes.smelter %}

### Induction Smelter with Pyro-Concentrator ingredient
{% include recipe-table.html type='smelter-pyrotheum' recipes=page.usage-recipes.smelter-pyrotheum %}


Trivia
------

* In real life, [cinnabar](https://en.wikipedia.org/wiki/Cinnabar) is a mineral
  form of [mercury](https://en.wikipedia.org/wiki/Mercury) (also known as
  quicksilver). Mercury forms
  [amalgams](https://en.wikipedia.org/wiki/Amalgam_(chemistry)) with metals, a
  process used in mining to purify metals from ores.
