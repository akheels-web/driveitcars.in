import { client } from '../../../sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const builder = imageUrlBuilder(client);
function urlFor(source) { return builder.image(source); }

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug });

  if (!post) {
    return <div className="container py-5 text-center"><h1>Post not found</h1></div>;
  }

  return (
    <>
      <section className="gauto-breadcromb-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcromb-box">
                <h3>{post.title}</h3>
                <ul>
                  <li><i className="fa fa-home" /></li>
                  <li><Link href="/">Home</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li><Link href="/blog">Blogs</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li>{post.title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gauto-blog-page-area section_70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="single-blog">
                {post.mainImage && (
                  <div className="blog-image mb-4">
                    <img src={urlFor(post.mainImage).url()} alt={post.title} style={{width:'100%', borderRadius:'12px'}} />
                  </div>
                )}
                <div className="blog-text">
                  <p className="text-muted mb-3">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}</p>
                  
                  <div className="sanity-content">
                    {post.body ? <PortableText value={post.body} /> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
