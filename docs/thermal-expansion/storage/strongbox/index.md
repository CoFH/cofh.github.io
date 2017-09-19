--- 
title: Strongbox 
recipes: 
  crafting: 
    - 'strongbox-basic'
--- 

![](/assets/images/thermal-expansion/strongbox-basic.png "Strongbox") ![](/assets/images/thermal-expansion/strongbox-hardened.png "Hardened Strongbox") ![](/assets/images/thermal-expansion/strongbox-reinforced.png "Reinforced Strongbox") ![](/assets/images/thermal-expansion/strongbox-resonant.png "Resonant Strongbox") ![](/assets/images/thermal-expansion/strongbox-creative.png "Creative Strongbox")

**Strongboxes** are a type of block added by [Thermal Expansion](/docs/thermal-expansion/). They store items, exactly like Chests do, but with several benefits.

Strongboxes are harder to break and more resistant to explosions. They can also have [Signalum Security Locks](/docs/thermal-expansion/materials/signalum-security-lock/) installed on them. Lastly, Strongboxes can be moved around without losing any stored items by dismantling them with a [Crescent Hammer](/docs/thermal-expansion/tools/crescent-hammer/). They can only be opened when placed in the world, though.

To prevent creating infinite storage, as well as some world-corrupting issues, Strongboxes cannot store items that can also store items themselves, like other Strongboxes and [Satchels](/docs/thermal-expansion/storage/satchel/).

Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}

## Tiers

Strongboxes follow Thermal Expansion's [tier system](/docs/thermal-expansion/tiers-and-augments/tiers/). Strongboxes can be upgraded using [Upgrade Kits](/docs/thermal-expansion/tiers-and-augments/upgrade-kits/).

The tier of a Strongbox determines several of its properties: storage capacity, block hardness and resistance to explosions.

The Creative Strongbox can have an infinite amount of a certain item taken out of it. For obvious reasons, this Strongbox tier cannot be legitimately obtained.

The following table shows the block hardness and explosion resistance of Strongboxes per tier. For comparison, see [Blocks by hardness](http://minecraft.gamepedia.com/Breaking#Blocks_by_hardness) and [Blast resistance](http://minecraft.gamepedia.com/Explosion#Blast_resistance) on the Minecraft Wiki.

<div class="uk-overflow-container">

<table class="uk-table uk-table-striped uk-table-condensed uk-text-small cofh-table-compress">

<thead>

<tr>

<th>Tier</th>

<th>Hardness</th>

<th>Blast resistance</th>

</tr>

</thead>

<tbody>

<tr>

<td>Basic</td>

<td>5</td>

<td>15</td>

</tr>

<tr>

<td>Hardened</td>

<td>15</td>

<td>90</td>

</tr>

<tr>

<td>Reinforced</td>

<td>20</td>

<td>120</td>

</tr>

<tr>

<td>Resonant</td>

<td>20</td>

<td>120</td>

</tr>

<tr>

<td>Creative</td>

<td>∞</td>

<td>1200</td>

</tr>

</tbody>

</table>

</div>

## Capacity

Strongboxes can be enchanted with the [Holding](/docs/cofh-core/enchantments/holding/) enchantment to increase their capacity. This means that the capacity of a Strongbox depends on two things: [tier](/docs/thermal-expansion/other/tier-system/) and Holding enchantment level.

The following table shows how many storage slots Strongboxes have, depending on tier and Holding enchantment level.

<div class="uk-overflow-container">

<table class="uk-table uk-table-striped uk-table-condensed uk-text-small cofh-table-semi-compress">

<thead>

<tr>

<th>Tier</th>

<th>Unenchanted</th>

<th>Holding I</th>

<th>Holding II</th>

<th>Holding III</th>

<th>Holding IV</th>

</tr>

</thead>

<tbody>

<tr>

<td>Basic</td>

<td>18</td>

<td>27 (Chest)</td>

<td>36</td>

<td>45</td>

<td>54</td>

</tr>

<tr>

<td>Hardened</td>

<td>36</td>

<td>45</td>

<td>54 (Large Chest)</td>

<td>63</td>

<td>72</td>

</tr>

<tr>

<td>Reinforced</td>

<td>54 (Large Chest)</td>

<td>63</td>

<td>72</td>

<td>80</td>

<td>88</td>

</tr>

<tr>

<td>Resonant</td>

<td>72</td>

<td>80</td>

<td>88</td>

<td>96</td>

<td>104</td>

</tr>

</tbody>

</table>

</div>

The Creative Strongbox always has only one slot, regardless of enchantments.

## GUI

Slots:  

*   <a>18</a>
*   <a>27</a>
*   <a>36</a>
*   <a>45</a>
*   <a>54</a>
*   <a>63</a>
*   <a>72</a>
*   <a>80</a>
*   <a>88</a>
*   <a>96</a>
*   <a>104</a>
*   <a>Creative</a>

*   ![](/assets/images/thermal-expansion/strongbox-gui-18.png "Strongbox GUI (18 slots)")
*   ![](/assets/images/thermal-expansion/strongbox-gui-27.png "Strongbox GUI (27 slots)")
*   ![](/assets/images/thermal-expansion/strongbox-gui-36.png "Strongbox GUI (36 slots)")
*   ![](/assets/images/thermal-expansion/strongbox-gui-45.png "Strongbox GUI (45 slots)")
*   ![](/assets/images/thermal-expansion/strongbox-gui-54.png "Strongbox GUI (54 slots)")
*   ![](/assets/images/thermal-expansion/strongbox-gui-63.png "Strongbox GUI (63 slots)")
*   ![](/assets/images/thermal-expansion/strongbox-gui-72.png "Strongbox GUI (72 slots)")
*   ![](/assets/images/thermal-expansion/strongbox-gui-80.png "Strongbox GUI (80 slots)")
*   ![](/assets/images/thermal-expansion/strongbox-gui-88.png "Strongbox GUI (88 slots)")
*   ![](/assets/images/thermal-expansion/strongbox-gui-96.png "Strongbox GUI (96 slots)")
*   ![](/assets/images/thermal-expansion/strongbox-gui-104.png "Strongbox GUI (104 slots)")
*   ![](/assets/images/thermal-expansion/strongbox-gui-creative.png "Creative Strongbox GUI")

<dl class="uk-description-list-line">

<dt>1\. Inventory Slots</dt>

<dd>Any items stored in the Strongbox are displayed here. In the Creative Strongbox, this consists of only one slot; attempting to place an item in it will set it to provide an infinite amount of that item.</dd>

<dt>2\. Information Tab</dt>

<dd>Displays a bit of information about the Strongbox.</dd>

<dt>3\. Security Tab</dt>

<dd>Allows setting who is allowed to access the Strongbox. Only available if a [Signalum Security Lock](/docs/thermal-expansion/materials/signalum-security-lock/) is installed.</dd>

<dt>4\. Player Inventory</dt>

<dd>The inventory and hotbar of the player that is accessing the Strongbox.</dd>

</dl>