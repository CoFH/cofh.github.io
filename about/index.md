---
title: About
layout: simple_info
redirect_from: /about.html
---

This page contains general information about Team CoFH. It describes the history
of the team, and the people that are currently part of it.


History
-------

The name <dfn>Cult of the Full Hub</dfn> dates all the way back to the late
'90s. Originally, it was the name of King Lemming and Cynycal's LAN gaming group
(also known as a hub). The initial goal of the group was to fill it up to the
cap of 8 people. Eventually, that goal was accomplished quite routinely.

In the year 2012, the name CoFH was used once again when King Lemming teamed up
with Cynycal as <dfn>Team CoFH</dfn> to start modding for Minecraft, mostly for
King Lemming to learn how to program in Java. The two were originally working on
Brewcraft: a farming mod that contained a brewing overhaul for potions, as well
as a way to make alcoholic beverages.

As King Lemming was still figuring out how to create Tile Entities, he created a
[furnace](/docs/thermal-expansion/machines/redstone-furnace/) that worked on
Minecraft Joules instead of items as fuel. He then figured he might as well make
more blocks like that. Eventually, this development led to the release of the
first version of Thermal Expansion for Minecraft 1.2, leaving Brewcraft
abandoned. Back then, the mod contained about 7 machines and a few other things
like Rockwool and Hardened Glass. TE was a BuildCraft addon: it required
BuildCraft itself or addons like Forestry in order to power the machines with
Minecraft Joules, BuildCraft's old power system. It wasn't until the third
iteration that the mod became fully independent.

Since then, more people joined the team, Thermal Expansion got rewritten a bunch
of times, new mods were made, some were abandoned again, and Minecraft Joules
got replaced with the new [Redstone Flux](/docs/redstone-flux/). Team CoFH is
still around today, with their various mods still alive and being worked on.


Team members
------------

The definition of who is a member of Team CoFH and who isn't has always been a
bit vague. These are the currently confirmed members of the team.

<div markdown="0">
{% for member in site.data.team-members %}
    <div class="uk-panel uk-panel-box uk-margin-bottom">
        <div class="uk-clearfix">
            {% if member.avatar %}
                <div class="uk-float-left uk-margin-right">
                    <img src="/assets/images/avatars/{{member.avatar}}" class="uk-border-rounded" width="150" />
                </div>
            {% endif %}

            <h1 class="uk-panel-title uk-margin-remove">{{member.name}}</h1>

            <p>{{ member.about }}</p>

            <div class="uk-text-right uk-margin-large-top">
                <div class="uk-button-group">
                    {% if member.social.twitter %}
                        <a class="uk-button" href="https://twitter.com/{{member.social.twitter}}" target="_blank">
                            <i class="uk-icon-twitter"></i> Twitter
                        </a>
                    {% endif %}

                    {% if member.social.github %}
                        <a class="uk-button" href="https://github.com/{{member.social.github}}" target="_blank">
                            <i class="uk-icon-github"></i> GitHub
                        </a>
                    {% endif %}

                    {% if member.social.redit %}
                        <a class="uk-button" href="http://www.reddit.com/user/{{member.social.reddit}}" target="_blank">
                            <i class="uk-icon-reddit"></i> reddit
                        </a>
                    {% endif %}
                </div>
            </div>
        </div>
    </div>
{% endfor %}
</div>
