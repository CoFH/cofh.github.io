--- 
title: Phytogenic Insolator 
recipes: 
  crafting: 
    - 'machine-insolator'
--- 

![Phytogenic Insolator](/assets/images/thermal-expansion/phytogenic-insolator.png)

> Definitely not organic.

The **Phytogenic Insolator** is one of the Machines added by Thermal Expansion. It uses [Redstone Flux](/docs/redstone-flux/) to infuse plants with 'sunlight', Water and [fertilizer](/docs/thermal-expansion/materials/phyto-gro/). The Machine can be used to grow plants at a steady rate and in an organized way.

Because simulating sunlight takes a lot of energy and growing plants still takes some time, the Phytogenic Insolator is somewhat slower than most other Machines in the mod.

Installing [Augments](/docs/thermal-expansion/tiers-and-augments/augments/) allows the Machine to work much faster or change its behavior.

Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}

## Power

When working at maximum speed, the Phytogenic Insolator consumes 20 RF per tick. When its internal energy storage is starting to deplete, the Machine will slow down and use less power. This prevents sudden interruptions of the Phytogenic Insolator's work when its power supply cuts short.

## GUI

![Phytogenic Insolator GUI](/assets/images/thermal-expansion/phytogenic-insolator-gui.png)

<dl class="uk-description-list-line">

<dt>1\. Primary Input Slot / Fertilizer Slot</dt>

<dd>Items placed in this slot are used together with items placed in the next slot to grow plants. Can be locked so that only fertilizer-type items can enter this slot. Currently the only items that can be used as fertilizer are [Phyto-Gro](/docs/thermal-expansion/materials/phyto-gro/) and [Rich Phyto-Gro](/docs/thermal-expansion/materials/phyto-gro/).</dd>

<dt>2\. Secondary Input Slot</dt>

<dd>Items placed in this slot are used together with items placed in the previous slot to grow plants.</dd>

<dt>3\. Lock/Unlock Fertilizer Slot Button</dt>

<dd>This button can be clicked to lock the primary input slot / fertilizer slot to only accept fertilizer-type items (see 1).</dd>

<dt>4\. Water Tank</dt>

<dd>Stores Water that is to be used to grow plants.</dd>

<dt>5\. Primary Output Slot</dt>

<dd>Fully grown plants end up in this slot.</dd>

<dt>6\. Secondary Output Slot</dt>

<dd>Possible byproducts of plants being grown (mostly seeds) end up in this slot.</dd>

<dt>7\. Progress Arrow</dt>

<dd>Displays the progress of the plant currently being grown. If [Just Enough Items](https://minecraft.curseforge.com/projects/just-enough-items-jei?gameCategorySlug=mc-mods&projectID=238222) is installed, the arrow can be clicked to look up the Insolator's [recipes](#recipes).</dd>

<dt>8\. Power Gauge</dt>

<dd>Displays how fast the Insolator is working in relation to its maximum speed.</dd>

<dt>9\. Energy Gauge</dt>

<dd>Displays how much Redstone Flux is currently stored in the Insolator.</dd>

<dt>10\. Charging Slot</dt>

<dd>Items that store Redstone Flux that are placed here are discharged by the Insolator to charge itself.</dd>

<dt>11\. Energy Tab</dt>

<dd>Displays how much power the Insolator uses, and how much Redstone Flux is currently stored in it.</dd>

<dt>12\. Information Tab</dt>

<dd>Displays a bit of information about the Insolator.</dd>

<dt>13\. Tutorial Tab</dt>

<dd>Explains various things about the Insolator and the other tabs in the GUI.</dd>

<dt>14\. Augmentation Tab</dt>

<dd>Allows installing [Augments](/docs/thermal-expansion/augments/augmentation/) in the Machine.</dd>

<dt>15\. Security Tab</dt>

<dd>Allows setting who is allowed to access the Insolator. Only available if a [Signalum Security Lock](/docs/thermal-expansion/materials/signalum-security-lock/) is installed.</dd>

<dt>16\. Redstone Control Tab</dt>

<dd>Allows setting how the Insolator responds to Redstone signals.</dd>

<dt>17\. Configuration Tab</dt>

<dd>Allows configuring the [input/output](#input-output) behavior of the sides of the Insolator.</dd>

<dt>18\. Player Inventory</dt>

<dd>The inventory and hotbar of the player that is accessing the Insolator.</dd>

</dl>