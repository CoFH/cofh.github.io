# CoFH Website Repository
http://cofh.github.io/

# Developing the site
Read this before starting to work on the site! It'll save you and everyone else a lot of headaches.

## Used techniques
- You'll need a good understanding of HTML and CSS. JavaScript is not required, but will help in some cases.
- You will also need to know how to use [Git](http://git-scm.com/) to work on the site with others properly. Using a GUI-based Git client like [SmartGit](http://www.syntevo.com/smartgit/) is recommended for beginners.
- The site is built using [Jekyll](http://jekyllrb.com/), a static website generator that uses the [Liquid](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) template engine. Template engines compile bits and pieces of website together into a working one. As a result, this repo too contains various bits and pieces like that. Make sure to understand well how Jekyll and Liquid work, it will save you a lot of time.
- Jekyll makes use of the [YAML](http://yaml.org/) markup language for describing metadata. It's pretty intuitive, but try to read the documentation either way.
- We use [UIkit](http://getuikit.com/docs/core.html) to help build the website. UIkit is a powerful framework that contains a lot of pre-written goodies to build interfaces with. It's like Twitter Bootstrap, except cleaner. When designing a page, always try to use UIkit for the desired result first! Most of the time you won't have to write any custom CSS.

## Testing changes to the site
Before pushing changes to the live site, you should test them locally. Jekyll is a Ruby _gem_ that be [installed locally](http://jekyllrb.com/docs/installation/) on Linux, and also on Windows with a bit more effort.  
Once it's installed, run ```jekyll serve``` in the repository folder to launch a local web server that hosts the generated website. It should also automatically regenerate the site when you make changes in the files.

## Adding new pages
Adding new pages to the site is pretty simple. Just follow these steps.  
- Create a new _.html_ file. Put it in a folder if possible, to keep the file structure clean.
- Make sure the new file is encoded in UTF-8 (without BOM). Most civilized text editors let you set this. Windows tends to set the encoding to ANSI; try to avoid this.
- Add the [front matter](http://jekyllrb.com/docs/front) of the new page at the top of the file. The front matter is a piece of YAML-formatted data that describes the page you are creating. The front matter should at least contain the title of the new page:
```
---
title: Hello World!
---
```
- After the front matter is in place, you can start writing your own HTML code below. The code will be automatically put into the site's layout when the site is generated, so you don't need to insert _html_ or _body_ tags or anything like it.
- (Optional) Add the new page to the menu tree. To do this, read the below section on how to edit the menu.

## Editing the menu
The menu used to navigate the site is dynamically generated using a YAML-formatted file: *_data/tree.yml*. You can define the name and URL of the menu items there. It is also possible to give them [icons from UIkit](http://getuikit.com/docs/icon.html) or 32x32 images from the _images/icons-32_ folder. Check out the items that are already there for examples of the format.

## Rules
- Always try using UIkit components before writing custom CSS. UIkit offers a _lot_ to help design pages, so take your time to get used to it.
- All custom CSS must be done in the file _css/cofh.css_. Overriding styling from UIkit or similar must also be done there. Any other CSS files may be overwritten when updating UIkit or the menu system!
- Use [includes](http://jekyllrb.com/docs/templates/#includes) where possible when writing a lot of repetitive code. Also try to make use of the includes already there! For example, there is an include to create a thumbnail image that, when clicked, displays the image in a larger window.
- Use relative URLs to link to other things on the site. You shouldn't use ```http://cofh.github.io/``` or similar in URLs, as that breaks local testing among other things. Remember that a single slash at the front of URLs points to the root of the website.
- Use the attribute ```target="_blank"``` on hyperlinks to external websites, so the destinations open in new tabs.
- Give header tags (_h1, h2, h3,_ etc) an _id_ attribute where possible to improve linking to the site.
- When mentioning an object described on another page on the site, be sure to make the mention a hyperlink to the object mentioned.