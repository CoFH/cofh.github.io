--- 
title: Energetic Infuser 
recipes: 
  crafting: 
    - 'machine-charger' 
--- 

![Energetic Infuser](/assets/images/thermal-expansion/energetic-infuser.png)

> Flux knows no bounds, so watch your hands.

The **Energetic Infuser** is one of the Machines added by Thermal Expansion. It uses [Redstone Flux](/docs/redstone-flux/) to charge compatible items. Using this Machine is one of the best ways to charge RF-powered tools and armor, as it is easy to automate and doesn't rely on users hurting themselves.

Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}

## Power

When working at maximum speed, the Energetic Infuser charges items at 8000 RF per tick. This rate may however be limited by items that are being charged. When the Infuser's internal energy storage is starting to deplete, item charging will gradually slow down.

## GUI

![Energetic Infuser GUI](/assets/images/thermal-expansion/energetic-infuser-gui.png)

<dl class="uk-description-list-line">

<dt>1. Input Slot</dt>

<dd>Items placed in this slot are to be charged by the Infuser.</dd>

<dt>2. Processing Slot</dt>

<dd>Items cannot be manually placed in this slot. When starting to charge an item, the Infuser moves it from the input slot to this slot. It then remains here until it is fully charged. After that, the item is moved to the output slot, if possible.</dd>

<dt>3. Output Slot</dt>

<dd>Fully charged items end up in this slot.</dd>

<dt>4. Progress Gauge</dt>

<dd>Displays the progress of the item currently being charged. If [Just Enough Items](https://minecraft.curseforge.com/projects/just-enough-items-jei?gameCategorySlug=mc-mods&projectID=238222)  is installed, the arrow can be clicked to look up the Infuser's [recipes](#recipes) (if any are registered).</dd>

<dt>5. Energy Gauge</dt>

<dd>Displays how much Redstone Flux is currently stored in the Infuser.</dd>

<dt>6. Charging Slot</dt>

<dd>Items that store Redstone Flux that are placed here are discharged by the Infuser to charge itself.</dd>

<dt>7. Energy Tab</dt>

<dd>Displays how much power the Infuser uses, and how much Redstone Flux is currently stored in it.</dd>

<dt>8. Information Tab</dt>

<dd>Displays a bit of information about the Infuser.</dd>

<dt>9. Tutorial Tab</dt>

<dd>Explains various things about the Infuser and the other tabs in the GUI.</dd>

<dt>10. Augmentation Tab</dt>

<dd>Allows installing [Augments](/docs/thermal-expansion/augments/augmentation/) in the Machine.</dd>

<dt>11. Security Tab</dt>

<dd>Allows setting who is allowed to access the Infuser. Only available if a [Signalum Security Lock](/docs/thermal-expansion/materials/signalum-security-lock/) is installed.</dd>

<dt>12. Redstone Control Tab</dt>

<dd>Allows setting how the Infuser responds to Redstone signals.</dd>

<dt>13. Configuration Tab</dt>

<dd>Allows configuring the [input/output](#input-output) behavior of the sides of the Infuser.</dd>

<dt>14. Player Inventory</dt>

<dd>The inventory and hotbar of the player that is accessing the Infuser.</dd>

</dl>