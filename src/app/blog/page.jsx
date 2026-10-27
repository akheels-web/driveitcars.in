import Link from 'next/link';
import { client } from '../../sanity/lib/client';
import { ArrowIcon, GuideCard, PostMeta, RentalCallout } from './BlogChrome';
import { postExcerpt, postImage } from './blog-utils';
import styles from './blog.module.css';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const title = 'Car Rental Guides in Hyderabad | DriveItCars';
const description = 'Explore DriveItCars guides to daily, weekly and monthly car rentals in Hyderabad, with practical advice on hatchbacks, sedans, SUVs and family travel.';
const url = 'https://www.driveitcars.in/blog';

export const metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: 'DriveItCars',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: { card: 'summary', title, description },
};

export default async function BlogIndex() {
  let posts = [];
  let unavailable = false;

  try {
    posts = await client.fetch(
      '*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))] | order(publishedAt desc, title asc) { _id, title, slug, body, excerpt, seoDescription, mainImage, publishedAt, author }',
      {},
      { perspective: 'published' }
    );
  } catch {
    unavailable = true;
  }

  const [featured, ...guides] = posts || [];
  const featuredImage = featured ? postImage(featured, 1200, 720) : null;

  return (
    <main className={styles.page}>
      <a href="#guides" className={styles.skipLink}>Skip to rental guides</a>
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Journal</span>
        </nav>

        <header className={styles.masthead}>
          <div>
            <span className={styles.eyebrow}>THE DRIVEITCARS JOURNAL</span>
            <h1>Your next drive, <span className={styles.headlineAccent}>better planned.</span></h1>
          </div>
          <p className={styles.mastheadIntro}>
            Find the right car, understand your rental and make more of your time in Hyderabad.
            A little reading before the road.
          </p>
        </header>

        {featured ? (
          <>
            <article className={styles.featured} id={guides.length ? undefined : 'guides'}>
              <Link href={'/blog/' + featured.slug.current} className={styles.featuredImage}>
                {featuredImage ? (
                  <img
                    src={featuredImage}
                    alt={featured.mainImage.alt || featured.title}
                    width={1200}
                    height={720}
                    loading="eager"
                    fetchPriority="high"
                  />
                ) : <span className={styles.imageFallback}>DriveItCars <span>Rental guides</span></span>}
              </Link>
              <div className={styles.featuredCopy}>
                <span className={styles.eyebrow}>FEATURED GUIDE</span>
                <PostMeta post={featured} />
                <h2><Link href={'/blog/' + featured.slug.current}>{featured.title}</Link></h2>
                <p className={styles.featuredExcerpt}>{postExcerpt(featured)}</p>
                <Link href={'/blog/' + featured.slug.current} className={styles.textLink}>
                  Read the guide <ArrowIcon />
                </Link>
              </div>
            </article>

            {guides.length > 0 && (
              <section id="guides" className={styles.guides} aria-labelledby="more-guides-heading">
                <div className={styles.sectionHeading}>
                  <h2 id="more-guides-heading">More for the road</h2>
                  <span>{guides.length} {guides.length === 1 ? 'guide' : 'guides'}</span>
                </div>
                <div className={styles.grid}>
                  {guides.map((post) => <GuideCard key={post._id} post={post} />)}
                </div>
              </section>
            )}
          </>
        ) : (
          <section id="guides" className={styles.empty} aria-labelledby="guides-status-heading">
            <h2 id="guides-status-heading">{unavailable ? 'Our guides are taking a short break.' : 'The next journey starts here.'}</h2>
            <p>{unavailable
              ? 'We couldn’t load the rental guides just now. Please try again shortly, or ask our team for help planning your trip.'
              : 'New rental guides are on the way. In the meantime, our team can help you choose a car for your plans.'}</p>
            <Link href="/contact" className={styles.textLink}>Talk to DriveItCars <ArrowIcon /></Link>
          </section>
        )}

        <RentalCallout />
      </div>
    </main>
  );
}
