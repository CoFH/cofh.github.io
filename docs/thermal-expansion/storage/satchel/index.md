--- 
title: Satchel 
recipes: 
  crafting: 
    - 'satchel-basic-using-leather'
    - 'satchel-basic-using-rockwool'
    - 'satchel-hardened'
    - 'satchel-reinforced'
    - 'satchel-signalum'
    - 'satchel-resonant'
--- 

![Satchel](/assets/images/thermal-expansion/satchel-basic.png) ![Hardened Satchel](/assets/images/thermal-expansion/satchel-hardened.png) ![Reinforced Satchel](/assets/images/thermal-expansion/satchel-reinforced.png) ![Resonant Satchel](/assets/images/thermal-expansion/satchel-resonant.png) ![Creative Satchel](/assets/images/thermal-expansion/satchel-creative.png)

**Satchels** are a type of item added by [Thermal Expansion](/docs/thermal-expansion/). They store items, exactly like Chests do, except portable. Satchels cannot be placed in the world like [Strongboxes](/docs/thermal-expansion/storage/strongbox/); they can only be opened when held.

Satchels can have [Signalum Security Locks](/docs/thermal-foundation/items/signalum-security-lock/) installed on them to configure who may access their contents.

To prevent creating infinite storage, as well as some world-corrupting issues, Satchels cannot store items that can also store items themselves, like other Satchels and Strongboxes.

Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}

## Tiers

Satchels follow Thermal Expansion's [tier system](/docs/thermal-expansion/tiers-and-augments/tiers/). The tier of a Satchel determines its base storage capacity.

The Creative Satchel duplicates items that are put in by turning them into full stacks. For obvious reasons, this Satchel tier cannot be legitimately obtained.

Satchels can be enchanted with the [Holding](/docs/cofh-core/enchantments/holding/) enchantment to increase their capacity. This means that the capacity of a Satchel depends on two things: tier and Holding enchantment level.

The following table shows how many storage slots Satchels have, depending on tier and Holding enchantment level.

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

<td>9</td>

<td>18</td>

<td>27 (Chest)</td>

<td>36</td>

<td>45</td>

</tr>

<tr>

<td>Hardened</td>

<td>18</td>

<td>27 (Chest)</td>

<td>36</td>

<td>45</td>

<td>54 (Large Chest)</td>

</tr>

<tr>

<td>Reinforced</td>

<td>27 (Chest)</td>

<td>36</td>

<td>45</td>

<td>54 (Large Chest)</td>

<td>63</td>

</tr>

<tr>

<td>Resonant</td>

<td>36</td>

<td>45</td>

<td>54 (Large Chest)</td>

<td>63</td>

<td>72</td>

</tr>

</tbody>

</table>

</div>

The Creative Satchel always has only one slot, regardless of enchantments.

## GUI

Slots:  

*   <a>9</a>
*   <a>18</a>
*   <a>27</a>
*   <a>36</a>
*   <a>45</a>
*   <a>54</a>
*   <a>63</a>
*   <a>72</a>
*   <a>Creative</a>

*   ![](/assets/images/thermal-expansion/satchel-gui-9.png "Satchel GUI (9 slots)")
*   ![](/assets/images/thermal-expansion/satchel-gui-18.png "Satchel GUI (18 slots)")
*   ![](/assets/images/thermal-expansion/satchel-gui-27.png "Satchel GUI (27 slots)")
*   ![](/assets/images/thermal-expansion/satchel-gui-36.png "Satchel GUI (36 slots)")
*   ![](/assets/images/thermal-expansion/satchel-gui-45.png "Satchel GUI (45 slots)")
*   ![](/assets/images/thermal-expansion/satchel-gui-54.png "Satchel GUI (54 slots)")
*   ![](/assets/images/thermal-expansion/satchel-gui-63.png "Satchel GUI (63 slots)")
*   ![](/assets/images/thermal-expansion/satchel-gui-72.png "Satchel GUI (72 slots)")
*   ![](/assets/images/thermal-expansion/satchel-gui-creative.png "Creative Satchel GUI")

<dl class="uk-description-list-line">

<dt>1\. Inventory Slots</dt>

<dd>Any items stored in the Satchel are displayed here. In the Creative Satchel, this consists of only one slot; placing an item in it results in a full stack of that item being stored inside.</dd>

<dt>2\. Information Tab</dt>

<dd>Displays a bit of information about the Satchel.</dd>

<dt>3\. Security Tab</dt>

<dd>Allows setting who is allowed to access the Satchel. Only available if a [Signalum Security Lock](/docs/thermal-expansion/materials/signalum-security-lock/) is installed.</dd>

<dt>4\. Player Inventory</dt>

<dd>The inventory and hotbar of the player that is accessing the Satchel.</dd>

</dl>