Contributing to the CoFH Docs
=================
https://teamcofh.com/

Hi! This guide should contain everything about adding new documentation I found worth mentioning, from simply creating a new page to generating data for new Minecraft versions. I hope you find everything you were looking for in here, but if not, feel free to message Hekera#0727 on Discord. 

Basics
-----------
Follow the instructions in the README to set up a local server, if you have not already. All documentation pages (docs) are in the `docs` folder. A basic understanding of how to write Jekyll pages is recommended, but looking at pre-existing files will give you a good idea of how to write docs. Be sure to look at docs from the latest version only, since they include the most up-to-date features.

The directory path of the doc file will determine the resulting url; for example, the file `/docs/1.16/thermal-expansion/redstone-furnace.md` will have the url `/docs/1.16/thermal-expansion/redstone-furnace/`. Doc files named `index.md` will take the url of their parent folder, e.g. `/docs/1.16/ensorcellation/index.md` will be `/docs/1.16/ensorcellation/`. 

Because of how big the website is (and definitely not how poorly I coded it), generation may take a few minutes. This can be rather unwieldy when making changes, so you can take the versions you are not currently working on out of the `docs` folder. This should greatly decrease regeneration speeds in some cases.

Terminology
-----------
Below is a quick list of important terms and their definitions that will be used throughout this file.
- BIF: Block/item/fluid. These are the main resources, besides RF, that are used in recipes.
- BIF ID string: A case-sensitive string that is the ID of a fluid, block, or item. For MC versions 1.13+, this should be the same ID that shows in-game, except without a namespace (`machine_smelter`, not `thermal:machine_smelter`). Fluids will have `fluid_` prepended, so creosote oil would be `fluid_creosote`. For MC 1.12 and prior, IDs follow a different convention due to a combination of pre-[flattening](https://minecraft.fandom.com/wiki/Java_Edition_1.13/Flattening) weirdness and my laziness. 
- Array: Arrays can be represented in two ways, both of which are acceptable. Single-line: `[dynamo_stirling, bitumen]` and multi-line:
```
- dynamo_stirling
- bitumen
```
- Cycling: When a number of elements, often images/icons, are displayed one after another in a repeating fashion. This is most often used in crafting recipes; recipes that accept multiple possible items (e.g. all wood planks) will cycle through the icons for the accepted items. The website will move to the next step in the cycle once every 1.5s.
- Slugify: Converting a string to a url slug. All alphabetic characters are lowercased and non-alphanumeric characters are converted to dashes (`-`). For example, `Archer's Paradox` becomes `archer-s-paradox` and `machine_speed_augment` becomes `machine-speed-augment`.
- Navbox: The box at the bottom of most docs that allows a reader to navigate to other docs in the same mod.

Front Matter
-----------
Front matter is extremely important to docs. There are a few specific front matter keys that you should be aware of when writing docs, listed below.

#### Title (required)
The `title` key takes a string to be displayed as the title of the doc.

#### Subjects
The `subjects` key only takes an array of BIF ID strings. This determines what BIFs the doc is about, allowing the system to link to that doc when those items/fluids are referenced (in crafting recipes and such). It is highly recommended that, for a given Minecraft version, each BIF is the subject for at most one doc. 

The icon for the doc in the navbox will default to cycling between the subjects; to override this behavior, look at the `icon` key below. The main image at the top of the doc will default to cycling img tags based on the subjects, with src in the format `/assets/images/docs/[version]/[mod]/[slugified subject].png`; to override this behavior, look at the `image`, `show-image`, and `cycle-image` keys below.

#### Icon
The `icon` key takes an BIF ID string or an array thereof. Setting this to a non-null value will override the default navbox behavior of showing the subjects as the navbox icon. Use an empty string (`icon: ""`) if you want to hide the icon in the navbox.

#### Image
The `image` key takes an array of partial URL strings. Setting this to a non-null value will override the default behavior of cycling between img tags based on the subjects. Instead, they will be generated based on the partial URL strings provided. These strings should contain the mod and file name (`image: [/thermal-innovation/rf-drill.gif]` for the image `/assets/images/docs/1.16/thermal-innovation/rf-drill.gif`). 

The `show-image` key takes a boolean value (default: `true`). Setting this to false will prevent the main image(s) from being automatically generated based on the `subjects` and `image` keys.

The `cycle-image` key takes a boolean value (default: `true`). Setting this to false will change how the main image(s) will be displayed, presenting them in a row instead of cycling between them.

Note: `image` is simply a convenience thing! If you want images from a different location (e.g. `/assets/logos/`) you can set `show-image: false` and use the conventional markdown for an image.

#### Category/Subcategory
The `category` and `subcategory` keys take case-sensitive strings (default: `null`). They determine where the doc will appear in the navbox. Setting `subcategory` to a value but not `category` is accepted. If you're wondering why I only coded in support for these two, and not sub-subcategories and more, visit the Styles section below.

The `category-main` and `subcategory-main` keys take boolean values (default: `null`). Setting one of these to true will remove the doc link from the conventional position in the navbox and will instead make the (sub)category label a link to the doc.

#### Hide from Navbox
The `navbox-hidden` key takes a boolean value (default: `null`). Setting this to true will prevent the doc from showing up in the conventional navbox position. Does not prevent a (sub)category label being a link to the doc if the `category-main` or `subcategory-main` keys are set to true.

Includes
-----------
There are various includes at your disposal, listed below.

#### Recipes
In order to display a list of recipe tables, you can use the `docs/recipe/recipe-list.html` include. With no arguments, it will display *every* recipe for the doc's MC version. Of course, this is not particularly useful, so you can add up to 4 optional arguments to "filter" the output.

- `recipe-types`: Takes an array of strings representing recipe types. Restricts the recipe list to only these recipe types.

- `recipe-ids`: Takes an array of strings representing recipe IDs. Restricts the recipe list to only these recipe IDs. It is highly recommended to use this in conjunction with `recipe-types`, because if multiple recipes have the same ID they will all be displayed.

- `subjects`: Takes an array of BIF ID strings. This does not necessarily have to be the same as the subjects for the doc. Restricts the recipe list to only recipes that use these BIFs.

- `show`: Takes an string equaling `"makes"` or `"uses"`. This *must* be used with the `subjects` argument, otherwise it has no effect. It will restrict the recipe table to only recipes that *make* or *use* the subjects.

Examples: Take a situation where the front matter looks like this:
```
ingots: [invar_ingot, gold_ingot, enderium_ingot]
types: [smelter, press]
smelter-ids: [smelter_alloy_bronze, smelter_alloy_electrum, smelter_alloy_enderium]
```
and the include looks like this: `{% include docs/recipe/recipe-list.html subjects=page.ingots recipe-types=page.types %}`. This would show all multiservo press and induction smelter recipes involving gold, invar, and enderium ingots. Adding the argument `recipe-ids=page.smelter-ids` would result in only the electrum and enderium alloying recipes to appear, since the bronze recipe does not involve invar, gold, or enderium. Adding a fourth argument `show="makes"` would only show the enderium recipe, since that's the only recipe of the 3 that makes invar, gold, or enderium ingots.

#### List of Links
There are two convenience includes for adding lists of links. `docs/id-link-list.html` takes an array of BIF ID strings and produces a list of their icons and localized names with links to their associated doc. `docs/doc-link-list.html` takes an array of URLs (in the Jekyll format) and produces a list of their icons and titles with links to the associated doc.

Style
-----------
This section is about my philosophy when it comes to writing docs. These aren't strict rules, but more like guidelines for what I think makes for a good reading experience. 

#### Content
In general, docs should be **relevant**, **explicit**, and **comprehensive**. 

- Relevant: An obvious one, a doc should stay on topic to its subject(s) and to Minecraft/CoFH mods as a whole.

- Explicit: Make no assumptions as to what is obvious to readers from context. The docs should be able to serve veterans and newbies alike, so avoid ambiguity, jargon, and vague or unnecessarily complicated wording. Explaining a concept fully, or at the very least offering links to the Minecraft Wiki/Wikipedia, is preferable to concise prose that is dense and jargon-filled.

- Comprehensive: A doc should contain any and all details about its subject matter that may be helpful to a reader. This includes links to other docs where they may be discussed in more detail. 

#### Length
Doc length/scope is very important to the usability of the website. On one hand, docs that are too long are hard for a reader to navigate and find the information they're looking for. On the other, too many short docs clutter the navbox and can cause the reader to have to click many more links than necessary. Because of this I have implemented the navbox such that there are only categories and subcategories — no sub-subcategories and beyond. As a general rule of thumb, if you find yourself wanting a sub-subcategory, ask yourself if you *really* need it, or if you can include all that information in one doc or otherwise reorganize things.

Data and Datagen
-----------
Data are a central part of the inner workings of the docs, primarily concerning recipes. A lot of features can be added simply through data — new BIFs, new recipes, and even new machines/recipe types. The data folder for each Minecraft version should contain the following:

- `items-fluids.yml`: This file contains data related to BIFs such as their localized name, mod namespace, and position in the spritesheet. Some BIFs may have `inputs` and `outputs` keys, which contain the recipe IDs of the recipes that the BIF is used in/made by. For some versions whose documentation is considered "complete", each BIF may also have a URL.
- `recipe-types.yml`: This is where you can define new recipe types. The `display-type` key under each recipe type tells the code how to render the recipe. Putting `type: machine` lets you control the number of input and output slots in the rendered GUI, so you do not need to write any new code to add a new machine recipe type. Adding a new `type`, however, does require new code and will be covered in the Adding New Features and Code section below.
- `recipes` folder: This file contains the actual recipes for each recipe type. It is important that the name of the yaml file matches the name of the recipe type. The data for recipes have a very particular structure that is different from the structure of the recipe JSONs from the mod source code. Each crafting/machine recipe has `input` and `output` maps that can each have `item` and/or `fluid` arrays. Each element in these arrays is a map that represents an item slot/fluid gauge in the machine. These maps can have a quantity (`count` and `chance` for items, `amount` for fluids) and an `id` array representing all the possible ingredients that satisfy the recipe. Maps that omit a quantity default to `count: 1`. Note that `count` and `chance` here do not necessarily mean the same thing as in the mod source code! For MC 1.12 and below, `chance` is for fractional/decimal values, while `count` is for integer values. However, for MC 1.15+, `chance` is for any item that are affected by catalysts, while `count` is for items that are *not*.

Data are typically not created by hand; instead, they are generated from various other data using scripts. This makes it easy to update textures, modify recipes, and add new BIFs as the CoFH mods get updated. The current datagen script for MC 1.16 (`/assets/datagen/datagen.py`) needs a few important ingredients in the `data_input` folder to work:

- An exported folder of sprites generated by the [Iconexporter mod by Kroeser](https://www.curseforge.com/minecraft/mc-mods/iconexporter). This folder should be named `sprites`, but does not need any modification otherwise.
- An unzipped copy of King Lemming's [1.16 workspace from Github](https://github.com/KingLemming/1.16). This is so that the program has access to the mods' recipe data, lang files, and tags.
- An unzipped copy of Forge's [data folder from Github](https://github.com/MinecraftForge/MinecraftForge/tree/1.16.x/src/generated/resources/data/). This *must* be the entire folder named `data`, not just the folder titled `forge`!
- A copy of Minecraft's data folder. This *must* be the entire folder named `data`, not just the folder titled `minecraft`!

The datagen will not run properly without all these things. Once it's done, it will produce all the data files mentioned above as well as a spritesheet in the `data_output` folder. Unfortunately, a few small bits of information will still not be datagenned but can be added manually. Known ones are: adding a "?" sprite to the upper left corner of the spritesheet and localized names for `fluid_water`, `fluid_lava`, and most of the OMGourd pumpkins in `items-fluids.yml`.

Adding New Mods/Versions
-----------
Adding new mods or MC versions requires that you specify new defaults in the `_config.yml` file. The pattern should be pretty self-evident. You only ever need to do this once per mod, regardless of any MC versions, and vice versa. 

Adding New Features and Code
-----------
Of course, as much as I may try to make my code flexible and data-driven, there will always come a time when a new feature or recipe type comes by and requires new code. Change is inevitable, so I wanted to write this section to detail some notable spots in code as well as some of its quirks.

#### Recipes
##### Notable files/folders
- `_includes/docs/recipe/table/`: This folder has important files for what the recipe table looks like for each recipe display type. The `caption.html`, `caption.html`, and `caption.html` files are the components that get assembled into a table with `table.html`. These 3 components each have if chains that change how the table looks depending on the recipe type's display type. For example, machine recipes have 3 columns, while catalyst recipes only have 2. When adding a new recipe display type, you must add to these if chains.
- `_includes/docs/recipe/display/`: This folder contains includes for rendering the GUI for each of the recipe display types. When adding a new recipe display type, it is recommended that you put the include for rendering the GUI in this folder.
- `_includes/docs/recipe/elements/`: This folder contains a bunch of components to use when rendering a GUI for a recipe.
- `_includes/docs/get-link.html`: This include takes a single BIF ID and, based on its mod (MC wiki for vanilla, docs for modded) will produce and display the appropriate link. It will look through all the docs to find one that has the BIF as a subject.

As you may be able to tell, the get-link include is not particularly efficient for modded IDs. However, because doc URLs can change as docs get changed, hardcoding which URLs are for which BIF is impractical. Therefore, it is a sort of necessary evil, at least until a particular version's docs are considered truly "done" and the URLs can be hardcoded into the `sprite.yml` data. To counteract the negative performance effects of this, the various recipe includes work together to have a cache system, so the URL for a particular BIF only needs to be looked up once.

#### Everything Else
##### Notable files/folders
- `_includes/elements`: This folder contains includes for a lot of smaller features, such as widgets and buttons.