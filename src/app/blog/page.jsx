import { client } from '../../sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const builder = imageUrlBuilder(client);
function urlFor(source) { return builder.image(source); }

export default async function BlogIndex() {
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc)`);

  return (
    <>
      <section className="gauto-breadcromb-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcromb-box">
                <h3>Our Blogs</h3>
                <ul>
                  <li><i className="fa fa-home" /></li>
                  <li><Link href="/">Home</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li>Blogs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="gauto-blog-page-area section_70">
        <div className="container">
          <div className="row">
            {posts.length > 0 ? posts.map((post) => (
              <div className="col-lg-4 col-md-6" key={post._id}>
                <div className="single-blog">
                  <div className="blog-image">
                    <Link href={`/blog/${post.slug.current}`}>
                      {post.mainImage && (
                        <img src={urlFor(post.mainImage).width(400).height(250).url()} alt={post.title} style={{width:'100%', objectFit:'cover', height:'250px'}} />
                      )}
                    </Link>
                  </div>
                  <div className="blog-text">
                    <h3><Link href={`/blog/${post.slug.current}`}>{post.title}</Link></h3>
                    <p>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}</p>
                    <Link href={`/blog/${post.slug.current}`} className="gauto-btn">Read More</Link>
                  </div>
                </div>
              </div>
            )) : (
              <div className="col-12 text-center">
                <p>No blogs published yet. Add one in Sanity Studio!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
