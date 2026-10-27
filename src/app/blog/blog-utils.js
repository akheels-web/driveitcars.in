import { createImageUrlBuilder } from '@sanity/image-url';
import { client } from '../../sanity/lib/client';

const imageBuilder = createImageUrlBuilder(client);

export function postImage(post, width = 1200, height = 630) {
  return post.mainImage?.asset
    ? imageBuilder.image(post.mainImage).width(width).height(height).fit('crop').auto('format').url()
    : null;
}

export function postText(post) {
  return (post.body || [])
    .filter((block) => block._type === 'block')
    .map((block) => (block.children || []).map((child) => child.text || '').join(''))
    .join(' ');
}

export function readingMinutes(post) {
  return Math.max(1, Math.ceil(postText(post).trim().split(/\s+/).filter(Boolean).length / 200));
}

export function postExcerpt(post) {
  return post.excerpt || post.seoDescription || postText(post).slice(0, 180);
}

export function formatPostDate(value) {
  if (!value || Number.isNaN(new Date(value).getTime())) return null;
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Kolkata',
  }).format(new Date(value));
}

export function sectionId(block, index = 0) {
  return `section-${String(block._key || index).replace(/[^a-zA-Z0-9_-]/g, '')}`;
}

export function articleSections(post) {
  return (post.body || []).flatMap((block, index) => {
    if (block._type !== 'block' || block.style !== 'h2') return [];
    const title = (block.children || []).map((child) => child.text || '').join('');
    return title ? [{ id: sectionId(block, index), title }] : [];
  });
}
