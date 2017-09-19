--- 
title: Fluid Transposer 
recipes: 
  crafting: 
    - 'machine-transposer'
--- 

![](/assets/images/thermal-expansion/fluid-transposer.png "Fluid Transposer")

> Filling buckets by hand is hard work.

The **Fluid Transposer** is one of the Machines added by Thermal Expansion. It uses [Redstone Flux](/docs/redstone-flux/) to fill items like Buckets or [Portable Tanks](/docs/thermal-expansion/storage/portable-tank/) with fluids, or to drain fluids from them. It can also be used to infuse certain items with fluids. The Machine can essentially be seen as a glorified 'bucket filler'.

Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}

## Power

When working at maximum speed, the Fluid Transposer consumes 40 RF per tick. When its internal energy storage is starting to deplete, the Machine will slow down and use less power. This prevents sudden interruptions of the Fluid Transposer's work when its power supply cuts short.

## GUI

![Fluid Transposer GUI](/assets/images/thermal-expansion/fluid-transposer-gui.png)

<dl class="uk-description-list-line">

<dt>1\. Input Slot</dt>

<dd>Items placed in this slot are to be filled, infused or drained by the Fluid Transposer.</dd>

<dt>2\. Processing Slot</dt>

<dd>Items cannot be manually placed in this slot. When starting to process an item, the Fluid Transposer moves it from the input slot to this slot. It then remains here until it is completely full, infused or empty. After that, the item is moved to the output slot, if possible.</dd>

<dt>3\. Fill/Empty Toggle Button</dt>

<dd>This button can be clicked to set the Fluid Transposer to fill/infuse items with fluids or to drain fluids from items.</dd>

<dt>4\. Output Slot</dt>

<dd>Fully processed items end up in this slot.</dd>

<dt>5\. Fluid Tank</dt>

<dd>When filling/infusing items with fluids, this tank provides the fluids to use. When instead draining fluids from items, those fluids are moved to this tank.</dd>

<dt>6\. Progress Arrow</dt>

<dd>Displays the progress of the item currently being processed. If [Just Enough Items](https://minecraft.curseforge.com/projects/just-enough-items-jei?gameCategorySlug=mc-mods&projectID=238222) is installed, the arrow can be clicked to look up the Fluid Transposer's [recipes](#recipes).</dd>

<dt>7\. Power Gauge</dt>

<dd>Displays how fast the Fluid Transposer is working in relation to its maximum speed.</dd>

<dt>8\. Energy Gauge</dt>

<dd>Displays how much Redstone Flux is currently stored in the Fluid Transposer.</dd>

<dt>9\. Charging Slot</dt>

<dd>Items that store Redstone Flux that are placed here are discharged by the Fluid Transposer to charge itself.</dd>

<dt>10\. Energy Tab</dt>

<dd>Displays how much power the Fluid Transposer uses, and how much Redstone Flux is currently stored in it.</dd>

<dt>11\. Information Tab</dt>

<dd>Displays a bit of information about the Fluid Transposer.</dd>

<dt>12\. Tutorial Tab</dt>

<dd>Explains various things about the Fluid Transposer and the other tabs in the GUI.</dd>

<dt>13\. Augmentation Tab</dt>

<dd>Allows installing [Augments](/docs/thermal-expansion/augments/augmentation/) in the Machine.</dd>

<dt>14\. Security Tab</dt>

<dd>Allows setting who is allowed to access the Fluid Transposer. Only available if a [Signalum Security Lock](/docs/thermal-expansion/materials/signalum-security-lock/) is installed.</dd>

<dt>15\. Redstone Control Tab</dt>

<dd>Allows setting how the Fluid Transposer responds to Redstone signals.</dd>

<dt>16\. Configuration Tab</dt>

<dd>Allows configuring the [input/output](#input-output) behavior of the sides of the Fluid Transposer.</dd>

<dt>17\. Player Inventory</dt>

<dd>The inventory and hotbar of the player that is accessing the Fluid Transposer.</dd>

</dl>

## Recipes

The Fluid Transposer can fill or empty any registered fluid container that has a set fluid amount, and can only be either completely full or empty. This includes things like Buckets, Bottles, Cans, Capsules and Cells.

For Buckets, this always takes 800 RF. For any other fluid container types, this takes 1600 RF.

The Machine also works with any item that can contain a variable amount of fluid, like [Portable Tanks](/docs/thermal-expansion/storage/portable-tank/) or soaked [Sponges](/docs/thermal-expansion/tools/sponges/). When the Fluid Transposer is working at maximum speed (without [Augments](/docs/thermal-expansion/tiers-and-augments/augments/)), fluids are moved to or from these items at 40 mB per tick.