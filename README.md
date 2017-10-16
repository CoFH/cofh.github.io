# Team CoFH Website
https://teamcofh.com/

## Development
GitHub automatically builds the site whenever commits are pushed to the `master`
branch. You don't need to build and run the site locally, but it's useful when
developing large portions of the site.

### Setting up
1. [Install Jekyll](https://jekyllrb.com/docs/installation/) if you haven't yet.
2. Install the Ruby gems of the Jekyll plugins used on the site:
  - `gem install jekyll-paginate jekyll-sitemap jekyll-feed
    jekyll-redirect-from`

### Running locally
Run `jekyll serve` in the repository folder to start a local webserver. The
website should be regenerated whenever a file is changed.

### Writing blog posts
Files in the `_posts` folder are read as blog posts. To write a new blog post,
create a new file in said folder. Look at the files already present to see what
they should look like.

## See also
- [Jekyll](http://jekyllrb.com/)
- [UIkit](https://getuikit.com/v2/)
