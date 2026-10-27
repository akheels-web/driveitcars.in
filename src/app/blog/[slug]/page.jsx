import { client } from '../../../sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { cache } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SeoSchema, { buildBreadcrumbSchema } from '../../../components/SeoSchema';
import { ArrowIcon, GuideCard, PostMeta, RentalCallout } from '../BlogChrome';
import { articleSections, postImage, postText, sectionId } from '../blog-utils';
import styles from '../blog.module.css';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const baseUrl = 'https://www.driveitcars.in';
const getPost = cache(async (slug) => {
  if (typeof slug !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    notFound();
  }

  const post = await client.fetch(
    `*[_type == "post" && defined(slug.current) && slug.current == $slug && !(_id in path("drafts.**"))][0]`,
    { slug },
    { perspective: 'published' }
  );

  if (!post) {
    notFound();
  }

  return post;
});

function descriptionFor(post) {
  return post.seoDescription || post.excerpt || postText(post).slice(0, 160);
}

function coverFor(post) {
  return postImage(post) || undefined;
}

const portableTextComponents = {
  block: {
    h1: ({ children, value }) => <h2 id={sectionId(value)}>{children}</h2>,
    h2: ({ children, value }) => <h2 id={sectionId(value)}>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === 'string' ? value.href.trim() : '';
      const isInternal = href.startsWith('/') && !/^[\\/]{2}/.test(href);
      const isAllowed = isInternal || href.startsWith('#') || /^(https:\/\/|mailto:|tel:)/i.test(href);
      return isAllowed ? <a href={href}>{children}</a> : <span>{children}</span>;
    },
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  const title = post.seoTitle || `${post.title} | DriveItCars`;
  const description = descriptionFor(post);
  const url = `${baseUrl}/blog/${slug}`;
  const image = coverFor(post);
  const images = image ? [{ url: image, width: 1200, height: 630, alt: post.mainImage.alt || post.title }] : [];

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'DriveItCars',
      locale: 'en_IN',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      images,
    },
    twitter: { card: 'summary_large_image', title, description, images },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  const url = `${baseUrl}/blog/${slug}`;
  const image = coverFor(post);
  const sections = articleSections(post);
  let relatedPosts = [];

  try {
    relatedPosts = await client.fetch(
      `*[_type == "post" && defined(slug.current) && _id != $id && !(_id in path("drafts.**"))] | order(publishedAt desc, title asc)[0...3]`,
      { id: post._id },
      { perspective: 'published' }
    );
  } catch {
    // Recommendations are optional; a failure must not hide the article.
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: descriptionFor(post),
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    datePublished: post.publishedAt,
    dateModified: post._updatedAt,
    author: { '@type': 'Organization', name: post.author || 'DriveItCars', url: baseUrl },
    publisher: {
      '@type': 'Organization',
      name: 'DriveItCars',
      url: baseUrl,
      logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` },
    },
    ...(image ? { image: { '@type': 'ImageObject', url: image, width: 1200, height: 630, caption: post.mainImage.caption || post.mainImage.alt || post.title } } : {}),
  };

  return (
    <>
      <SeoSchema schema={articleSchema} />
      <SeoSchema schema={buildBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Journal', url: '/blog' },
        { name: post.title, url },
      ])} />
      <main className={styles.page}>
        <a className={styles.skipLink} href="#article-body">Skip to article</a>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog">Journal</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Rental guide</span>
          </nav>

          <header className={styles.articleHeader}>
            <Link className={styles.backLink} href="/blog"><ArrowIcon /> Back to all guides</Link>
            <div className={styles.eyebrow}>DRIVEITCARS / RENTAL GUIDES</div>
            <h1 className={styles.articleTitle}>{post.title}</h1>
            {post.excerpt && <p className={styles.articleDeck}>{post.excerpt}</p>}
            <div className={styles.articleByline}>
              <div className={styles.authorMark} aria-hidden="true">D</div>
              <div>
                <p className={styles.authorName}>{post.author || 'DriveItCars'}</p>
                <PostMeta post={post} />
              </div>
            </div>
          </header>

          {image && (
            <figure className={styles.articleCover}>
              <img src={image} alt={post.mainImage.alt || post.title} width={1200} height={630} loading="eager" fetchPriority="high" />
              {post.mainImage.caption && <figcaption className={styles.caption}>{post.mainImage.caption}</figcaption>}
            </figure>
          )}

          <div className={styles.readingLayout}>
            <aside className={styles.sidebar}>
              {sections.length > 0 && (
                <nav className={styles.contents} aria-label="On this page">
                  <p className={styles.contentsTitle}>ON THIS PAGE</p>
                  <ul>
                    {sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}
                  </ul>
                </nav>
              )}
              <div className={styles.sideNote}>
                <p>Planning your own drive?</p>
                <Link className={styles.textLink} href="/self-drive-car">Explore the fleet <ArrowIcon /></Link>
                <Link className={styles.button} href="/contact">Talk to our team <ArrowIcon /></Link>
              </div>
            </aside>

            <article id="article-body" className={styles.prose}>
              {post.body?.length
                ? <PortableText value={post.body} components={portableTextComponents} />
                : <p>This guide is being updated. <Link href="/blog">Explore our other rental guides</Link> or <Link href="/contact">contact our team</Link> for help with your trip.</p>}
            </article>
          </div>

          {relatedPosts.length > 0 && (
            <section className={styles.related} aria-labelledby="related-guides-title">
              <div className={styles.sectionHeading}>
                <h2 id="related-guides-title">Keep exploring</h2>
                <Link className={styles.textLink} href="/blog">All guides <ArrowIcon /></Link>
              </div>
              <div className={styles.grid}>
                {relatedPosts.map((relatedPost) => <GuideCard key={relatedPost._id} post={relatedPost} />)}
              </div>
            </section>
          )}

          <RentalCallout />
        </div>
      </main>
    </>
  );
}
