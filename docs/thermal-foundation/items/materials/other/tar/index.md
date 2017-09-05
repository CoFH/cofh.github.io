---
title: Tar
recipes:
  pulverizer:
    - fluid-ore-processing-oil-sand
  pulverizer-petrotheum:
    - fluid-ore-processing-oil-sand
  refinery:
    - naphtha-from-coal
    - naphtha-from-crude-oil
usage-recipes:
  crafting:
    - torch-using-tar
    - piston-sticky-using-tar
    - lead-using-tar
  crucible:
    - creosote-oil-from-tar
---

![Tar](/assets/images/thermal-foundation/tar.png){:style="height: 128px"}


**Tar** is a byproduct of processing [oil
sand](/docs/thermal-foundation/world/fluid-ores/oil-sand/) in a
[pulverizer](/docs/thermal-expansion/machines/pulverizer/), and of processing
[liquifacted coal](/docs/thermal-foundation/fluids/fuel/liquifacted-coal/) or
[crude oil](/docs/thermal-foundation/fluids/fuel/crude-oil/) in a [fractionating
still](/docs/thermal-expansion/machines/fractionating-still/). It can be used to
craft [torches](https://minecraft.gamepedia.com/Torches), and can replace
[slimeballs](https://minecraft.gamepedia.com/Slimeball) in some recipes. It can
also be processed into [creosote
oil](/docs/thermal-foundation/fluids/other/creosote-oil/).


Obtaining
---------

### Pulverizer
{% include recipe-table.html type='pulverizer' recipes=page.recipes.pulverizer no-result=true %}

### Pulverizer with Tectonic Initiator
{% include recipe-table.html type='pulverizer-petrotheum' recipes=page.recipes.pulverizer-petrotheum no-result=true %}

### Fractionating Still
{% include recipe-table.html type='refinery' recipes=page.recipes.refinery no-result=true %}


Usage
-----

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Magma Crucible ingredient
{% include recipe-table.html type='crucible' recipes=page.usage-recipes.crucible %}
