import { type CollectionEntry, getCollection } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export function getPostDate(post: Post): Date {
  return new Date(`${post.id.slice(0, 10)}T00:00:00Z`);
}

export function getPostURL(post: Post): string {
  return `/posts/${post.id.slice(0, 10).replaceAll('-', '/')}/${post.id.slice(11)}/`;
}

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');

  return posts.sort((a, b) => b.id.localeCompare(a.id));
}

export function formatPostDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function getPostExcerpt(post: Post): string {
  const html = post.rendered?.html ?? '';
  const firstBlock = /^\s*<(\w+)[\s>][\s\S]*?<\/\1>/.exec(html)?.[0] ?? html;

  return firstBlock
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
