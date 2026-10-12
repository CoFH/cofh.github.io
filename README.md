Team CoFH Website
=================

https://teamcofh.com/


Development
-----------

The [Pages workflow](.github/workflows/pages.yml) builds and deploys the site
whenever commits are pushed to the `master` branch. You don't need to build and
run the site locally, but it's useful when developing large portions of the
site.

### Setting up
1. Install [Ruby](https://www.ruby-lang.org/) 3.3, the version GitHub Pages
   uses.
2. Run `bundle install` to install Jekyll and its plugins locally.

### Running locally
Run `bundle exec jekyll serve --incremental` in the repository folder to start a
local webserver. The website should be regenerated whenever a file is changed.
The `--incremental` flag is not required, but it decreases regeneration times.

To make sure the build is clean, delete `_site` and `.jekyll-metadata`
beforehand (if they exist).

### Writing blog posts
Files in the `_posts` folder are read as blog posts. To write a new blog post,
create a new file in said folder. Look at the files already present to see what
they should look like.


See also
--------

- [Jekyll](https://jekyllrb.com/)
- [UIkit](https://getuikit.com/v2/)
