---
category: World
show-image: false
subcategory: Ores
subjects:
- tf-1-12-ore-lead
title: Lead Ore
usage-recipes:
  crafting-shapeless:
  - tf-1-12-pyrotheum-ore-lead
  - tf-1-12-petrotheum-ore-lead
  - tf-1-12-petrotheum-pyrotheum-ore-lead
  pulverizer:
  - ore-processing-lead
  smelter:
  - ore-processing-sand-lead
  - ore-processing-rich-slag-lead
  - ore-processing-cinnabar-lead
  smelting:
  - tf-1-12-ore-processing-lead
---

![Lead ore](/assets/images/docs/1.12/thermal-foundation/ore-lead.png){:style="height: 128px"}


**Lead ore** is a somewhat uncommon [ore](https://minecraft.gamepedia.com/Ore)
that yields [lead](../lead-ingot/) and small amounts of
[silver](../silver-ingot/).


Obtaining
---------

Lead ore is less common than [iron
ore](https://minecraft.gamepedia.com/Iron_Ore), but more common than [gold
ore](https://minecraft.gamepedia.com/Gold_Ore). It occurs at relatively low
levels in the world (layers 15-35). Lead ore veins are slightly smaller than
iron ore veins, and may contain one or two blocks of [silver
ore](../silver-ore/) as well. Similarly, silver ore veins may contain one or
two blocks of lead ore.

Lead ore must be mined with an [iron
pickaxe](https://minecraft.gamepedia.com/Pickaxe) or better. If it is mined, it
drops itself as an item.


Usage
-----

### Smelting
{% include docs/recipe/table/table.html recipe-type='smelting' recipe-ids=page.usage-recipes.smelting %}

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}

### Pulverizer
{% include docs/recipe/table/table.html recipe-type='pulverizer' recipe-ids=page.usage-recipes.pulverizer %}

### Induction Smelter
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.usage-recipes.smelter %}

### Smashing
When lead ore is broken using a [Smashing](../../cofh-core/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
[pulverized lead](../pulverized-lead/) are dropped instead
of the ore.


Trivia
------

* Lead ore is generated in the world using [CoFH World](../../cofh-world/) by
  default. The world generation can be tweaked or disabled using CoFH World's
  [configuration](../../cofh-world/world-generator-configuration/).
