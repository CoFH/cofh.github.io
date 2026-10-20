import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

import { getPosts, getPostDate, getPostURL } from '../lib/posts.ts';

export async function GET(context: APIContext) {
  const posts = await getPosts();

  return rss({
    title: 'Team CoFH',
    description: 'News about the Team CoFH Minecraft mods.',
    site: context.site!,
    items: posts.slice(0, 10).map((post) => ({
      title: post.data.title,
      link: getPostURL(post),
      pubDate: getPostDate(post),
      author: post.data.author,
      content: post.rendered?.html,
    })),
  });
}
