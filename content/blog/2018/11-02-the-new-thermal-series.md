---
author: King Lemming
author_url: http://www.twitter.com/KingLemmingCoFH
date: "2018-11-02T00:00:00Z"
published: true
title: The New Thermal Series
---

Okay, so I've been working on a branch that I unofficially call "1.13-pre" for a
while now. And while it's nowhere near complete, I wanted to let everyone know
my thought process and where I'd like to take the mods in the future. Depending
on how long Forge takes to get a 1.13 release out (and the team is doing a good
job on it, really), there will be a release for 1.12.2.

This post is sort of a weird thing - on one hand I legitimately feel that the
Thermal Series is in its most polished and complete state ever, and yet I'm
really not super happy with it. So I'm rewriting it mostly from scratch.

Let's get the big one out of the way - totally revamped dependency structure. I
don't want to make grand promises as far as external libraries, but at least on
the surface, the *required* dependency structure will be this, as long as FML
allows for it:

CoFH Core -> Everything Else

That's it. The Thermal mods are being broken down and put back together in some
different ways, and they'll all be able to run independently of one another.
I'll go over the details of that in a bit. To make this work, however, there's a
little bit of trickery under the hood. CoFH Core is going to be *very* crucial
to this process and almost without question when you update any Thermal mod
moving forward, you'll have to update CoFH Core. The reason for this is sort of
a "Thermal Core" mod which - again, Forge allowing - will ship inside the CoFH
Core jar. It will only be active if any other actual Thermal mod is found and
registered. This mod will provide the basics of the Thermal Series - basic items
and blocks.

Here's the current breakdown of features. Please keep in mind that a lot of this
is drawing board stages and the code is either splayed out on the cutting room
floor at this time or just doesn't exist yet:

### General Design / Notes:
- All content mods have a global config option to disable ALL of their recipes.
- Mods not requiring CoFH Core will ship with some internals (CoFH Lib).
- CoFHLib is not an official mod, just a bunch of shared code that won't require
  CoFH Core.
- CoFH World will still exist; plans are to allow it to be a soft yet highly
  recommended dependency.
- Thermal Series Recipes will dynamically adjust based on available
  OreDictionary / Tags.
  - This makes it entirely possible to do Vanilla + Thermal Expansion.
- There are plans for a couple more Thermal mods but I'm not doing to really get
  into them just yet, sorry.
- Vazkii's amazing new Book API - Patchouli - will be used to provide a manual
  for everything. It will be a *soft dependency.*

#### CoFH Core:
- Increased focus on "library" style code.
- Removal of Enchantments (Moved to *Ensorcellment*).
- Removal of Potion Effects (Handled in Thermal Series).
- Tentatively includes resources for all CoFH mods.

#### Thermal Series / Core
- Ships inside CoFH Core; not a "child" mod.
- Includes basic tools and items (Crescent Hammer, Tome of Knowledge).
- Adds core Thermal fluids and alloys (Redstone, Glowstone, Ender).
- In general, hardcoded levels / tiers will be less prominent.
  - Working on a way to allow modpack makers to configure / add tiers.

#### Thermal Foundation
- Focus will be on world generation; biomes, mobs, villages, etc.
- Removal of Tools and Armor (Moved to *Quartermastery*).
- Adds lots of different metals - ores, blocks, and items.
  - Gems and plants TBD.
- Will ship with some default world generation which can be easily disabled.
  - CoFH World will be a soft dependency and will take over generation if
    present.

#### Thermal Expansion
- Renewed focus on being a core processing mod - Machines / Dynamos ONLY.
  - Intent is to unify Machines + Devices
- Machines are being Streamlined / redone:
  - Total rework of Recipes under the hood.
  - Fewer side config options - In / Out / Both / Open / None.
  - Machines with Primary / Secondary outputs have 4 now.
  - Plans for advanced filtering / logistics support.
- Specialization Augments going away.
  - Replaced by adjacent "companion" blocks or other machines where appropriate.
- Dynamos will have a dedicated "Coil" slot to change the type of resource they
  generate.
- Tanks and Caches are becoming Fluid and Item "Cells" - name and mod TBD.

#### Thermal Dynamics
- Focus still only on moving things from A -> B.
- Idea is to provide more progress in not only Ducts but types of transport:
  - Conveyor Belts
  - Ducts
  - Ender Routing
- Ideally, entities can be utilized with all of these.
- That's the rough idea at this time, anyways.

#### Thermal Innovation
- Acquiring all of the tools from Thermal Expansion.
- Tool progress intended to be more freeform - TBD on that though.
  - Modular Tools might happen, if it makes sense.
  - Tool Augments might happen, again if it's balanced / fun.
- If armor ends up being made, it will go here.

#### Thermal Cultivation
- Watering Cans probably going to stay here.
- New Crops, probably five or so initially.
  - Artwork is limiting factor here, when it comes down to it.
- Brewing and Baking systems.

#### Redstone Arsenal
- This one is staying mostly the same.
- There will be a couple of new items.

### New Mods
- Some things are being moved for better Vanilla+ style play.

#### Ensorcellment
- Adds all of the enchantments from CoFH Core, and some more.
- Shield and Horse Armor Enchants. :)
- Capability-based Enchantment compatibility (part of CoFHLib).

#### Enstoragement
- Strongboxes.
- Satchels.
- Ideally, a bit more customization and power for both of these things.
- Will effectively replace Vanilla+ Satchels and provide Thermal compat.

#### Orbulation
- Florbs.
- Morbs.
- That's it for now. Blocks dealing with these *might* be added, if it feels
  thematically appropriate.

#### Quartermastery
- General Tool / Armor mod.
- Will enable vanilla-style tools and armor depending on what materials are
  present.
- Will effectively replace Vanilla+ Tools and provide Thermal compat.

At this time, the stuff under "New Mods" is mostly complete. So is much of CoFH
Core and Thermal Series / Core. Thermal Foundation has a lot of the current
stuff, but not any new biomes yet.

Read through all that? Okay cool - let's talk .jar files. Again, this is all
sort of contigent on Forge providing the means for us to do this, but the
general plan is this:

- Two combined "large" jar files:
  - Combined Thermal jar.
  - Combined Everything Else jar.

So again, CoFH Core will be required as a base. It just isn't really super
feasible to bundle it *inside* those jars because it would end up duplicated and
Forge will throw a tantrum.

Unfortunately, if there's something in those jars that you *don't* like, you'll
have to do individual downloads or specifically disable mods in-game. On our
end, there's just a balancing act of being accommodating and also the number of
projects we have to manage.

Whew, that was long. Again, please understand that this is a statement of
intent, and while there's a lot of code laid down, almost all of it is certainly
subject to change.

If you're interested in knowing more, please drop by our [Discord](https://discordapp.com/invite/uRKrnbH).
