export async function GET() {
  const baseUrl = 'https://www.driveitcars.in';
  
  let content = `# DriveItCars - Knowledge Base\n\n`;
  content += `DriveItCars offers self drive cars and luxury car rentals in Hyderabad, with daily, weekly and monthly rental enquiries.\n\n`;
  
  // You can fetch dynamic sanity content here in the future
  // const posts = await fetchSanityPosts();
  // content += `## Latest Blog Posts\n`;
  // posts.forEach(post => {
  //   content += `- [${post.title}](${baseUrl}/blog/${post.slug})\n`;
  // });
  
  content += `## Important Links\n`;
  content += `- [Home](${baseUrl}/)\n`;
  content += `- [Self Drive Cars](${baseUrl}/self-drive-car)\n`;
  content += `- [Luxury Cars](${baseUrl}/luxurycars)\n`;
  content += `- [Luxury Buses](${baseUrl}/luxury-buses)\n`;
  content += `- [Rental Guides](${baseUrl}/blog)\n`;
  content += `- [Contact Us](${baseUrl}/contact)\n`;
  
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
