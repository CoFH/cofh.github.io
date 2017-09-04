---
title: Cinnabar
recipes:
  pulverizer:
    - ore-processing-redstone
    - ore-processing-gold
    - fluid-ore-processing-redstone
  pulverizer-petrotheum:
    - ore-processing-redstone
    - ore-processing-gold
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

### Pulverizer with Tectonic Initiator
{% include recipe-table.html type='pulverizer-petrotheum' recipes=page.recipes.pulverizer-petrotheum no-result=true %}


Usage
-----

### Induction Smelter ingredient
{% include recipe-table.html type='smelter' recipes=page.usage-recipes.smelter %}

### Induction Smelter with Pyro-Concentrator ingredient
{% include recipe-table.html type='smelter-pyrotheum' recipes=page.usage-recipes.smelter-pyrotheum %}
