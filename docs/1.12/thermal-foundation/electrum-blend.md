---
category: Materials
recipes:
  crafting-shapeless:
  - tf-1-12-dust-electrum
  pulverizer:
  - dust-electrum
show-image: false
subcategory: Dusts
subjects:
- tf-1-12-dust-electrum
title: Electrum Blend
usage-recipes:
  centrifuge:
  - dust-electrum
  crafting-shapeless:
  - tf-1-12-hardened-glass-electrum
  - ra-1-12-dust-fluxed-electrum-using-electrum
  smelter:
  - dust-smelting-electrum
  - hardened-glass-electrum
  smelting:
  - tf-1-12-ingot-electrum-from-dust
  transposer-fill:
  - ra-1-12-dust-fluxed-electrum
---

![Electrum blend](/assets/images/docs/1.12/thermal-foundation/dust-electrum.png){:style="height: 128px"}


**Electrum blend** is a raw material. It is the dust form of
[electrum](../electrum-ingot/).


Obtaining
---------

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.recipes.crafting-shapeless no-result=true %}

### Pulverizer
{% include docs/recipe/table/table.html recipe-type='pulverizer' recipe-ids=page.recipes.pulverizer no-result=true %}


Usage
-----

### Smelting ingredient
{% include docs/recipe/table/table.html recipe-type='smelting' recipe-ids=page.usage-recipes.smelting %}

### Crafting ingredient
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}

### Induction Smelter ingredient
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.usage-recipes.smelter %}

### Fluid Transposer ingredient
{% include docs/recipe/table/table.html recipe-type='transposer-fill' recipe-ids=page.usage-recipes.transposer-fill %}

### Centrifugal Separator ingredient
{% include docs/recipe/table/table.html recipe-type='centrifuge' recipe-ids=page.usage-recipes.centrifuge %}
