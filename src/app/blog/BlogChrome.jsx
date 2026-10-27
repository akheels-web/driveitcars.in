import Link from 'next/link';
import { formatPostDate, postExcerpt, postImage, readingMinutes } from './blog-utils';
import styles from './blog.module.css';

export function ArrowIcon({ diagonal = false, className = '' }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h15m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PostMeta({ post }) {
  const date = formatPostDate(post.publishedAt);
  return (
    <div className={styles.meta}>
      {date && <time dateTime={post.publishedAt}>{date}</time>}
      {date && <span className={styles.metaDot} aria-hidden="true" />}
      <span>{readingMinutes(post)} min read</span>
    </div>
  );
}

export function GuideCard({ post }) {
  const image = postImage(post, 720, 420);
  return (
    <article className={styles.card}>
      <Link href={`/blog/${post.slug.current}`} className={styles.cardLink}>
        <div className={styles.cardImage}>
          {image ? (
            <img src={image} alt={post.mainImage.alt || post.title} width={720} height={420} loading="lazy" />
          ) : <span className={styles.imageFallback}>DriveItCars <span>Rental guides</span></span>}
          <span className={styles.imageArrow}><ArrowIcon diagonal /></span>
        </div>
        <div className={styles.cardBody}>
          <PostMeta post={post} />
          <h3>{post.title}</h3>
          <p>{postExcerpt(post)}</p>
          <span className={styles.cardAction}>Read the guide <ArrowIcon /></span>
        </div>
      </Link>
    </article>
  );
}

export function RentalCallout({ compact = false }) {
  return (
    <section className={compact ? styles.sideCallout : styles.callout} aria-label="Find your rental car">
      <div>
        <span className={styles.eyebrow}>FROM READING TO THE ROAD</span>
        <h2>A car for your kind of trip.</h2>
        <p>Tell us your dates, your plans and who’s coming along. We’ll help you find the right fit.</p>
      </div>
      <Link href="/contact" className={styles.button}>Plan your rental <ArrowIcon /></Link>
    </section>
  );
}
