---
category: Materials
recipes:
  centrifuge:
  - dust-petrotheum
  pulverizer:
  - dust-obsidian
  - basalz-powder
show-image: false
subcategory: Dusts
subjects:
- tf-1-12-dust-obsidian
title: Pulverized Obsidian
usage-recipes:
  crafting-shaped:
  - ra-1-12-obsidian-rod
  crafting-shapeless:
  - tf-1-12-dust-petrotheum
  - tf-1-12-hardened-glass
  - tf-1-12-hardened-glass-metal
  smelter:
  - hardened-glass
  transposer-fill:
  - basalz-powder
---

![Pulverized obsidian](/assets/images/docs/1.12/thermal-foundation/dust-obsidian.png){:style="height: 128px"}


**Pulverized obsidian** is a raw material that is most commonly obtained by
processing [obsidian](https://minecraft.gamepedia.com/Obsidian) in a
[pulverizer](../../thermal-expansion/pulverizer/).


Obtaining
---------

### Pulverizer
{% include docs/recipe/table/table.html recipe-type='pulverizer' recipe-ids=page.recipes.pulverizer no-result=true %}

### Basalzes
A [basalz](../basalz/) may drop up to two pieces of pulverized obsidian when
killed by a player.

### Centrifugal Separator
{% include docs/recipe/table/table.html recipe-type='centrifuge' recipe-ids=page.recipes.centrifuge no-result=true %}


Usage
-----

### Crafting ingredient
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.usage-recipes.crafting-shaped %}
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}

### Brewing ingredient
When [brewing](https://minecraft.gamepedia.com/Brewing), pulverized obsidian can
be added to an [awkward
potion](https://minecraft.gamepedia.com/Potion#Base_potions) to make a [potion
of resistance](../../cofh-core/potions/).

### Induction Smelter ingredient
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.usage-recipes.smelter %}

### Fluid Transposer ingredient
{% include docs/recipe/table/table.html recipe-type='transposer-fill' recipe-ids=page.usage-recipes.transposer-fill %}
