--- 
title: Redstone Furnace 
search_headers:
 - title: 'Powered Furnace' 
recipes: 
  crafting: 
    - 'machine-furnace'
--- 

![Redstone Furnace](/assets/images/thermal-expansion/redstone-furnace.png)

> Coal is for chumps!

The **Redstone Furnace** is one of the Machines added by Thermal Expansion. It is very similar to the Furnace in vanilla Minecraft, except that it works faster and requires [Redstone Flux](/docs/redstone-flux/) instead of solid fuel to operate. Like the Furnace, it smelts items into other items, but it also has some recipes of its own that cannot be performed in a regular Furnace.

The Machine was previously called the **Powered Furnace**. This was changed in the third iteration of the mod, when it moved from the Minecraft Joules power system to the Redstone Flux power system.

Installing [Augments](/docs/thermal-expansion/tiers-and-augments/augments/) allows the Machine to work much faster or change its behavior.

Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}

## Power

When working at maximum speed, the Redstone Furnace consumes 20 RF per tick. When its internal energy storage is starting to deplete, the Furnace will slow down and use less power. This prevents sudden interruptions of the Furnace's work when its power supply cuts short.

## GUI

![Redstone Furnace GUI](/assets/images/thermal-expansion/redstone-furnace-gui.png)

<dl class="uk-description-list-line">

<dt>1\. Input Slot</dt>

<dd>Items placed in this slot are processed by the Furnace.</dd>

<dt>2\. Output Slot</dt>

<dd>Fully processed items end up in this slot.</dd>

<dt>3\. Progress Arrow</dt>

<dd>Displays the progress of the item currently being processed. If [Just Enough Items](https://minecraft.curseforge.com/projects/just-enough-items-jei?gameCategorySlug=mc-mods&projectID=238222) is installed, the arrow can be clicked to look up the Furnace's [recipes](#recipes).</dd>

<dt>4\. Power Gauge</dt>

<dd>Displays how fast the Furnace is working in relation to its maximum speed.</dd>

<dt>5\. Energy Gauge</dt>

<dd>Displays how much Redstone Flux is currently stored in the Furnace.</dd>

<dt>6\. Charging Slot</dt>

<dd>Items that store Redstone Flux that are placed here are discharged by the Furnace to charge itself.</dd>

<dt>7\. Energy Tab</dt>

<dd>Displays how much power the Furnace uses, and how much Redstone Flux is currently stored in it.</dd>

<dt>8\. Information Tab</dt>

<dd>Displays a bit of information about the Furnace.</dd>

<dt>9\. Tutorial Tab</dt>

<dd>Explains various things about the Furnace and the other tabs in the GUI.</dd>

<dt>10\. Augmentation Tab</dt>

<dd>Allows installing [Augments](/docs/thermal-expansion/augments/augmentation/) in the Machine.</dd>

<dt>11\. Security Tab</dt>

<dd>Allows setting who is allowed to access the Furnace. Only available if a [Signalum Security Lock](/docs/thermal-expansion/materials/signalum-security-lock/) is installed.</dd>

<dt>12\. Redstone Control Tab</dt>

<dd>Allows setting how the Furnace responds to Redstone signals.</dd>

<dt>13\. Configuration Tab</dt>

<dd>Allows configuring the [input/output](#input-output) behavior of the sides of the Furnace.</dd>

<dt>14\. Player Inventory</dt>

<dd>The inventory and hotbar of the player that is accessing the Furnace.</dd>

</dl>