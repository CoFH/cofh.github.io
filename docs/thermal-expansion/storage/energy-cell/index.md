--- 
title: Energy Cell 
recipes: 
  crafting: 
    - 'energy-cell-basic'
--- 

![Leadstone Energy Cell](/assets/images/thermal-expansion/energy-cell-leadstone.png) ![Hardened Energy Cell](/assets/images/thermal-expansion/energy-cell-hardened.png) ![Redstone Energy Cell](/assets/images/thermal-expansion/energy-cell-redstone.png) !["Resonant Energy Cell"](/assets/images/thermal-expansion/energy-cell-resonant.png) !["Creative Energy Cell"](/assets/images/thermal-expansion/energy-cell-creative.png)

**Energy Cells** are a type of block added by [Thermal Expansion](/docs/thermal-expansion/). They can store large amounts of [Redstone Flux](/docs/redstone-flux/) (by Thermal standards).

Energy Cells can be moved around without losing any stored energy by dismantling them with a [Crescent Hammer](/docs/thermal-expansion/tools/crescent-hammer/). In item form, Energy Cells work as handheld batteries and can be filled or emptied by other devices. However, they cannot charge items in a player's inventory, like [Flux Capacitors](/docs/thermal-expansion/storage/flux-capacitor/) can.

When placed, Energy Cells display a gauge on their front side, which tells roughly how full they are:

![Energy Cell gauge](/assets/images/thermal-expansion/energy-cell-redstone-gauge.png)

Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}

## Input/Output

The different sides of Energy Cells can be configured to accept energy from external sources, to emit energy to adjacent devices, or to be closed. These sides can be identified by the color of their corners: blue for 'input', orange for 'output' and yellow for 'closed'.

The amount of power that Energy Cells may receive and/or emit is limited, but configurable. This allows Energy Cells to be used to control flows of Redstone Flux. These limits apply even in item form.

## Tiers

Energy Cells follow Thermal Expansion's [tier system](/docs/thermal-expansion/tiers-and-augments/tiers/). Energy Cells can be upgraded using [Upgrade Kits](/docs/thermal-expansion/tiers-and-augments/upgrade-kits/).

The tier of a Energy Cell determines its storage capacity, and the limits of how much power it may receive and/or emit.

The Creative Energy Cell can emit an infinite amount of Redstone Flux. For obvious reasons, this Energy Cell tier cannot be legitimately obtained.

The following table shows the capacity and power limits of Energy Cells, depending on tier.

<div class="uk-overflow-container">

<table class="uk-table uk-table-striped uk-table-condensed uk-text-small cofh-table-compress">

<thead>

<tr>

<th>Tier</th>

<th>Capacity</th>

<th>Max Input</th>

<th>Max Output</th>

</tr>

</thead>

<tbody>

<tr>

<td>Leadstone</td>

<td>400000 RF</td>

<td>200 RF/t</td>

<td>200 RF/t</td>

</tr>

<tr>

<td>Hardened</td>

<td>2000000 RF</td>

<td>800 RF/t</td>

<td>800 RF/t</td>

</tr>

<tr>

<td>Redstone</td>

<td>20000000 RF</td>

<td>8000 RF/t</td>

<td>8000 RF/t</td>

</tr>

<tr>

<td>Resonant</td>

<td>80000000 RF</td>

<td>32000 RF/t</td>

<td>32000 RF/t</td>

</tr>

<tr>

<td>Creative</td>

<td>-</td>

<td>100000 RF/t</td>

<td>100000 RF/t</td>

</tr>

</tbody>

</table>

</div>

The Creative Energy Cell cannot actually store any energy; it can receive it, but any received energy is simply lost.

## GUI

![](/assets/images/thermal-expansion/energy-cell-gui.png "Energy Cell GUI")

<dl class="uk-description-list-line">

<dt>1\. Energy Gauge</dt>

<dd>Displays how much Redstone Flux is currently stored in the Energy Cell.</dd>

<dt>2\. Input Power Controls</dt>

<dd>Allows configuring how much power may enter the Energy Cell at once. Clicking the buttons increases or reduces the amount. Holding Shift or Ctrl while clicking the buttons allows for changing the value by bigger or smaller numbers.</dd>

<dt>3\. Output Power Controls</dt>

<dd>Allows configuring how much power may leave the Energy Cell at once. Clicking the buttons increases or reduces the amount. Holding Shift or Ctrl while clicking the buttons allows for changing the value by bigger or smaller numbers.</dd>

<dt>4\. Information Tab</dt>

<dd>Displays a bit of information about the Energy Cell.</dd>

<dt>5\. Tutorial Tab</dt>

<dd>Explains various things about the Energy Cell and the other tabs in the GUI.</dd>

<dt>6\. Redstone Control Tab</dt>

<dd>Allows setting how the Energy Cell responds to Redstone signals. For instance, the Energy Cell can be set to not accept or emit any energy when powered by Redstone.</dd>

<dt>7\. Configuration Tab</dt>

<dd>Allows configuring the [input/output](#input-output) behavior of the sides of the Energy Cell.</dd>

<dt>8\. Security Tab</dt>

<dd>Allows setting who is allowed to access the Energy Cell. Only available if a [Signalum Security Lock](/docs/thermal-expansion/materials/signalum-security-lock/) is installed.</dd>

<dt>9\. Player Inventory</dt>

<dd>The inventory and hotbar of the player that is accessing the Energy Cell.</dd>

</dl>