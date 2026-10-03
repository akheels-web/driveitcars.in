export default function robots() {
  return {
    rules: {
      userAgent: '*',
      disallow: ['/cgi-bin/', '/api/'],
    },
    sitemap: 'https://www.driveitcars.in/sitemap.xml',
  }
}
