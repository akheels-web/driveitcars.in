import fs from 'fs';
import path from 'path';

export async function GET() {
  const baseUrl = 'https://www.driveitcars.in';
  
  let content = `# DriveIt Cars - Knowledge Base\n\n`;
  content += `Welcome to the LLM optimized knowledge base for DriveIt Cars.\n`;
  content += `DriveIt offers self drive cars, monthly car rentals and luxury car rentals in Hyderabad.\n\n`;
  
  // You can fetch dynamic sanity content here in the future
  // const posts = await fetchSanityPosts();
  // content += `## Latest Blog Posts\n`;
  // posts.forEach(post => {
  //   content += `- [${post.title}](${baseUrl}/blog/${post.slug})\n`;
  // });
  
  content += `## Important Links\n`;
  content += `- [Home](${baseUrl}/)\n`;
  content += `- [Self Drive Cars](${baseUrl}/self-drive-car.html)\n`;
  content += `- [Luxury Cars](${baseUrl}/luxurycars.html)\n`;
  content += `- [Luxury Buses](${baseUrl}/luxury-buses.html)\n`;
  content += `- [Contact Us](${baseUrl}/contact.html)\n`;
  
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
