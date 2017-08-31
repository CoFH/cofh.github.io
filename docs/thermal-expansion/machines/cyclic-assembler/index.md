--- 
title: Cyclic Assembler 
--- 




**This machine is not implemented in Thermal Expansion after 1.8, KingLemming has stated that there will probably be an auto-crafting mechanic later.**



![](/assets/images/thermal-expansion/cyclic-assembler.png "Cyclic Assembler")

> No, it won't craft that.

The **Cyclic Assembler** is one of the Machines added by Thermal Expansion. It uses [Redstone Flux](/docs/redstone-flux/) to craft items, using crafting recipes stored on [Schematics](/docs/thermal-expansion/storage/schematic/).

## Operation

In order for the Cyclic Assembler to craft items, it must be given a written [Schematic](/docs/thermal-expansion/storage/schematic/) to tell it what crafting recipe to use. This is done by placing one in the Schematic slot in the Machine's [GUI](#gui).

Once given a Schematic, the Cyclic Assembler will try to perform the recipe whenever enough crafting ingredients are stored in its input slots, using 20 RF per craft. The Machine can perform a recipe once per tick, meaning that the Machine consumes 20 RF per tick when working constantly (as indicated by the Energy Tab in the GUI).

If a recipe produces leftover items upon crafting, like the three empty Buckets when crafting Cake, these items are placed back into the Machine's input slots.

Other than input slots for items, the Machine has an input tank for fluids. Fluids in this tank can be used by the Assembler to replace filled fluid container-type ingredients like Buckets when crafting. This way, leftover items like empty Buckets are not an issue.

For example, [Enderium Blends](/docs/thermal-foundation/alloys/enderium/#crafting) can be produced by placing [Pulverized](/docs/thermal-foundation/materials/pulverized-materials/) [Tin](/docs/thermal-foundation/base-metals/tin/), [Silver](/docs/thermal-foundation/base-metals/silver/) and [Shiny Metal](/docs/thermal-foundation/base-metals/shiny-metal/) in the Machine's input slots, and pumping buckets worth of [Resonant Ender](/docs/thermal-foundation/fluids/resonant-ender/) into the Assembler instead of putting Resonant Ender Buckets in its input slots.

## GUI

![](/assets/images/thermal-expansion/cyclic-assembler-gui.png "Cyclic Assembler GUI")

<dl class="uk-description-list-line">

<dt>1\. Schematic Slot</dt>

<dd>[Schematics](/docs/thermal-expansion/storage/schematic/) in this slot determine the crafting recipe the Assembler uses to craft items.</dd>

<dt>2\. Upper Input Slots</dt>

<dd>Items placed in these slots are used as crafting ingredients by the Assembler. The Assembler can be configured so that items that enter a certain side of the Machine can only end up in these upper slots, and not in the lower ones.</dd>

<dt>3\. Lower Input Slots</dt>

<dd>Items placed in these slots are used as crafting ingredients by the Assembler. The Assembler can be configured so that items that enter a certain side of the Machine can only end up in these lower slots, and not in the upper ones.</dd>

<dt>4\. Input Tank</dt>

<dd>Fluids in this tank can be used by the Assembler to replace filled fluid container-type ingredients like Buckets when crafting.</dd>

<dt>5\. Output Slot</dt>

<dd>Crafted items end up in this slot.</dd>

<dt>6\. Energy Gauge</dt>

<dd>Displays how much Redstone Flux is currently stored in the Assembler.</dd>

<dt>7\. Charging Slot</dt>

<dd>Items that store Redstone Flux that are placed here are discharged by the Assembler to charge itself.</dd>

<dt>8\. Energy Tab</dt>

<dd>Displays how much power the Assembler uses, and how much Redstone Flux is currently stored in it.</dd>

<dt>9\. Information Tab</dt>

<dd>Displays a bit of information about the Assembler.</dd>

<dt>10\. Tutorial Tab</dt>

<dd>Explains various things about the Assembler and the other tabs in the GUI.</dd>

<dt>11\. Augmentation Tab</dt>

<dd>Allows installing [Augments](/docs/thermal-expansion/augments/augmentation/) in the Machine.</dd>

<dt>12\. Security Tab</dt>

<dd>Allows setting who is allowed to access the Assembler. Only available if a [Signalum Security Lock](/docs/thermal-expansion/materials/signalum-security-lock/) is installed.</dd>

<dt>13\. Redstone Control Tab</dt>

<dd>Allows setting how the Assembler responds to Redstone signals. Only available if the [Integrated Redstone Circuit](/docs/thermal-expansion/augments/redstone-control/) [Augment](/docs/thermal-expansion/augments/augmentation/) is installed.</dd>

<dt>14\. Configuration Tab</dt>

<dd>Allows configuring the [input/output](#input-output) behavior of the sides of the Assembler. Only available if the [Integrated Modular Framework](/docs/thermal-expansion/augments/reconfigurable-sides/) [Augment](/docs/thermal-expansion/augments/augmentation/) is installed.</dd>

<dt>15\. Schematic Tab</dt>

<dd>Allows writing or editing [Schematics](/docs/thermal-expansion/storage/schematic/) that are in the Schematic slot.</dd>

<dt>16\. Player Inventory</dt>

<dd>The inventory and hotbar of the player that is accessing the Assembler.</dd>

</dl>

## Input/Output

The different sides of the Cyclic Assembler correspond to different color-coded slots and tanks in its GUI. These sides can be identified by color-coded openings in the sides of the Assembler. This is used for handling input and output with ducts/pipes/conduits/tubes, other Machines and other types of inventories and/or tanks.

If the [Integrated Modular Framework](/docs/thermal-expansion/augments/reconfigurable-sides/) [Augment](/docs/thermal-expansion/augments/augmentation/) is installed, this feature of the Assembler can be configured. Some things can be inserted from any side.

If the [Integrated Servo Mechanism](/docs/thermal-expansion/augments/automated-output/) [Augment](/docs/thermal-expansion/augments/augmentation/) is installed, output items are automatically ejected from the corresponding sides of the Assembler, evenly divided between the available outputs.

<div class="uk-overflow-container">

<table class="uk-table uk-table-condensed uk-table-striped cofh-table-compress">

<thead>

<tr>

<th>Type</th>

<th>Color</th>

<th>Default Sides</th>

</tr>

</thead>

<tbody>

<tr>

<td>Item/fluid input</td>

<td>Blue</td>

<td>Top, Bottom</td>

</tr>

<tr>

<td>Item input (upper input slots)</td>

<td>Green</td>

<td>(not set)</td>

</tr>

<tr>

<td>Item input (lower input slots)</td>

<td>Purple</td>

<td>(not set)</td>

</tr>

<tr>

<td>Item output</td>

<td>Orange</td>

<td>Left, Right, Back</td>

</tr>

<tr>

<td>Any item input/output*</td>

<td>(colorless)</td>

<td>(not set)</td>

</tr>

<tr>

<td>Redstone Flux input</td>

<td>-</td>

<td>(any side)</td>

</tr>

</tbody>

</table>

</div>

<small>*: Cannot be automatically ejected from.</small>