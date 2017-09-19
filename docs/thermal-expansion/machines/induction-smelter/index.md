--- 
title: Induction Smelter 
recipes: 
  crafting: 
    - 'machine-smelter'
--- 

![Induction Smelter](/assets/images/thermal-expansion/induction-smelter.png)

> Absolutely not for cooking food.

The **Induction Smelter** is one of the Machines added by Thermal Expansion. It uses [Redstone Flux](/docs/redstone-flux/) to smelt items together under extreme heat. It is capable of creating alloys without having to blend pulverized metals by hand, as well as creating materials that require high temperatures to do so. Lastly, it can process various types of [Ore](/docs/thermal-foundation/world-generation/ores/) blocks into [Ingots](/docs/thermal-foundation/materials/ingots/); sometimes even more efficiently than a [Pulverizer](/docs/thermal-expansion/machines/pulverizer/) can.

Installing [Augments](/docs/thermal-expansion/tiers-and-augments/augments/) allows the Machine to work much faster or change its behavior.

Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}

## Power

When working at maximum speed, the Induction Smelter consumes 40 RF per tick. When its internal energy storage is starting to deplete, the Machine will slow down and use less power. This prevents sudden interruptions of the Induction Smelter's work when its power supply cuts short.

## GUI

![Induction Smelter GUI](/assets/images/thermal-expansion/induction-smelter-gui.png)

<dl class="uk-description-list-line">

<dt>1\. Primary Input / Flux Slot</dt>

<dd>Items placed in this slot are smelted together with items placed in the next slot by the Smelter. Can be locked so that only fluxes can enter this slot.  
Fluxes are certain items that are commonly used in Smelter recipes: Sand, Soul Sand, [Cinnabar](/docs/thermal-foundation/materials/cinnabar/), [Pyrotheum Dust](/docs/thermal-foundation/elemental-materials/pyrotheum-dust/) and [Rich Slag](/docs/thermal-expansion/materials/slag/).</dd>

<dt>2\. Secondary Input Slot</dt>

<dd>Items placed in this slot are smelted together with items placed in the previous slot.</dd>

<dt>3\. Lock/Unlock Flux Slot Button</dt>

<dd>This button can be clicked to lock the primary input / flux slot to only accept fluxes. (see 1).</dd>

<dt>4\. Primary Output Slots</dt>

<dd>Fully processed items end up in these two slots.</dd>

<dt>5\. Secondary Output Slot</dt>

<dd>Possible byproducts of items being smelted together end up in this slot.</dd>

<dt>6\. Progress Arrow</dt>

<dd>Displays the progress of the item currently being processed. If [Just Enough Items](https://minecraft.curseforge.com/projects/just-enough-items-jei?gameCategorySlug=mc-mods&projectID=238222) is installed, the arrow can be clicked to look up the Smelter's [recipes](#recipes).</dd>

<dt>7\. Power Gauge</dt>

<dd>Displays how fast the Smelter is working in relation to its maximum speed.</dd>

<dt>8\. Energy Gauge</dt>

<dd>Displays how much Redstone Flux is currently stored in the Smelter.</dd>

<dt>9\. Charging Slot</dt>

<dd>Items that store Redstone Flux that are placed here are discharged by the Smelter to charge itself.</dd>

<dt>10\. Energy Tab</dt>

<dd>Displays how much power the Smelter uses, and how much Redstone Flux is currently stored in it.</dd>

<dt>11\. Information Tab</dt>

<dd>Displays a bit of information about the Smelter.</dd>

<dt>12\. Tutorial Tab</dt>

<dd>Explains various things about the Smelter and the other tabs in the GUI.</dd>

<dt>13\. Augmentation Tab</dt>

<dd>Allows installing [Augments](/docs/thermal-expansion/augments/augmentation/) in the Machine.</dd>

<dt>14\. Security Tab</dt>

<dd>Allows setting who is allowed to access the Smelter. Only available if a [Signalum Security Lock](/docs/thermal-expansion/materials/signalum-security-lock/) is installed.</dd>

<dt>15\. Redstone Control Tab</dt>

<dd>Allows setting how the Smelter responds to Redstone signals.</dd>

<dt>16\. Configuration Tab</dt>

<dd>Allows configuring the [input/output](#input-output) behavior of the sides of the Smelter.</dd>

<dt>17\. Player Inventory</dt>

<dd>The inventory and hotbar of the player that is accessing the Smelter.</dd>

</dl>