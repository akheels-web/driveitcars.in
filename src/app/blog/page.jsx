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
const PAGE_SIZE = 6;

export async function generateMetadata(props) {
  const searchParams = await props?.searchParams;
  const rawPage = parseInt(searchParams?.page, 10);
  const pageNum = Number.isInteger(rawPage) && rawPage > 1 ? rawPage : 1;
  const pageSuffix = pageNum > 1 ? ` - Page ${pageNum}` : '';
  const pageUrl = pageNum > 1 ? `${url}?page=${pageNum}` : url;

  return {
    title: `${title}${pageSuffix}`,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${title}${pageSuffix}`,
      description,
      url: pageUrl,
      siteName: 'DriveItCars',
      locale: 'en_IN',
      type: 'website',
    },
    twitter: { card: 'summary', title: `${title}${pageSuffix}`, description },
  };
}

export default async function BlogIndex(props) {
  const searchParams = await props?.searchParams;
  const rawPage = parseInt(searchParams?.page, 10);
  const requestedPage = Number.isInteger(rawPage) && rawPage > 0 ? rawPage : 1;

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

  const [featured, ...allGuides] = posts || [];
  const totalGuides = allGuides.length;
  const totalPages = Math.max(1, Math.ceil(totalGuides / PAGE_SIZE));
  const currentPage = Math.min(requestedPage, totalPages);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const displayedGuides = allGuides.slice(startIndex, startIndex + PAGE_SIZE);
  const featuredImage = featured ? postImage(featured, 1200, 720) : null;

  return (
    <main className={styles.page}>
      <a href="#guides" className={styles.skipLink}>Skip to rental guides</a>
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          {currentPage > 1 ? (
            <>
              <Link href="/blog">Journal</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Page {currentPage}</span>
            </>
          ) : (
            <span aria-current="page">Journal</span>
          )}
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
            {currentPage === 1 && (
              <article className={styles.featured} id={allGuides.length ? undefined : 'guides'}>
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
            )}

            {currentPage > 1 && (
              <div className={styles.pageBanner}>
                <span>Viewing Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong></span>
                <Link href="/blog#guides" className={styles.pageBannerLink}>
                  &larr; Return to Featured Guide (Page 1)
                </Link>
              </div>
            )}

            {displayedGuides.length > 0 && (
              <section id="guides" className={styles.guides} aria-labelledby="more-guides-heading">
                <div className={styles.sectionHeading}>
                  <h2 id="more-guides-heading">{currentPage === 1 ? 'More for the road' : `All Guides — Page ${currentPage}`}</h2>
                  <span>Showing {startIndex + 1}–{Math.min(startIndex + PAGE_SIZE, totalGuides)} of {totalGuides} {totalGuides === 1 ? 'guide' : 'guides'}</span>
                </div>
                <div className={styles.grid}>
                  {displayedGuides.map((post) => <GuideCard key={post._id} post={post} />)}
                </div>

                {totalPages > 1 && (
                  <nav className={styles.pagination} aria-label="Guides pagination">
                    {currentPage > 1 ? (
                      <Link
                        href={currentPage === 2 ? '/blog#guides' : `/blog?page=${currentPage - 1}#guides`}
                        className={styles.pageNavBtn}
                        aria-label="Previous page"
                      >
                        <i className="fa fa-angle-left" aria-hidden="true" /> Previous
                      </Link>
                    ) : (
                      <span className={`${styles.pageNavBtn} ${styles.pageNavDisabled}`} aria-disabled="true">
                        <i className="fa fa-angle-left" aria-hidden="true" /> Previous
                      </span>
                    )}

                    <div className={styles.pageNumbers}>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
                        const isCurrent = p === currentPage;
                        const href = p === 1 ? '/blog#guides' : `/blog?page=${p}#guides`;
                        return isCurrent ? (
                          <span key={p} className={`${styles.pageNum} ${styles.pageNumActive}`} aria-current="page">
                            {p}
                          </span>
                        ) : (
                          <Link key={p} href={href} className={styles.pageNum}>
                            {p}
                          </Link>
                        );
                      })}
                    </div>

                    {currentPage < totalPages ? (
                      <Link
                        href={`/blog?page=${currentPage + 1}#guides`}
                        className={styles.pageNavBtn}
                        aria-label="Next page"
                      >
                        Next <i className="fa fa-angle-right" aria-hidden="true" />
                      </Link>
                    ) : (
                      <span className={`${styles.pageNavBtn} ${styles.pageNavDisabled}`} aria-disabled="true">
                        Next <i className="fa fa-angle-right" aria-hidden="true" />
                      </span>
                    )}
                  </nav>
                )}
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
