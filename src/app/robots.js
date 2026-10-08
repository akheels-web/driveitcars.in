export default function robots() {
  return {
    rules: {
      userAgent: '*',
      disallow: ['/cgi-bin/', '/api/', '/studio/', '/studio'],
    },
    sitemap: 'https://www.driveitcars.in/sitemap.xml',
  }
}
