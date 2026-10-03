import fs from 'fs';
import path from 'path';

export default async function sitemap() {
  const baseUrl = 'https://www.driveitcars.in';
  
  // Recursively get all HTML files from public directory
  const publicDir = path.join(process.cwd(), 'public');
  
  function walk(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList;
    fs.readdirSync(dir).forEach(file => {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        walk(filePath, fileList);
      } else if (file.endsWith('.html')) {
        // Convert backslashes to forward slashes for URLs
        const relativePath = path.relative(publicDir, filePath).replace(/\\/g, '/');
        fileList.push(relativePath);
      }
    });
    return fileList;
  }

  const htmlFiles = walk(publicDir);

  const staticRoutes = htmlFiles.map((file) => ({
    url: `${baseUrl}/${file === 'index.html' ? '' : file}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: file === 'index.html' ? 1.0 : 0.8,
  }));

  // TODO: Add your Sanity posts here in the future
  // const sanityPosts = await fetchSanityPosts();
  // const dynamicRoutes = sanityPosts.map(post => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  // }));

  return [
    ...staticRoutes,
    // ...dynamicRoutes
  ];
}
