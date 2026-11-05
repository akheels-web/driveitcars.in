import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { createClient } from 'next-sanity';
import { blogArticles } from './blog-articles-data.mjs';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'g0myfztr',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-10-02',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const imagePaths = {
  image1: 'C:\\Users\\Akheel\\.gemini\\antigravity\\brain\\8b4b59e3-ccdf-4bdc-ac35-37f55ac12e2f\\blog_weekend_road_trips_hyderabad_1793877750380.jpg',
  image2: 'C:\\Users\\Akheel\\.gemini\\antigravity\\brain\\8b4b59e3-ccdf-4bdc-ac35-37f55ac12e2f\\blog_airport_car_rental_hyderabad_1793877771137.jpg',
  image3: 'C:\\Users\\Akheel\\.gemini\\antigravity\\brain\\8b4b59e3-ccdf-4bdc-ac35-37f55ac12e2f\\blog_luxury_wedding_car_rental_1793877797055.jpg',
  image4: 'C:\\Users\\Akheel\\.gemini\\antigravity\\brain\\8b4b59e3-ccdf-4bdc-ac35-37f55ac12e2f\\blog_monthly_corporate_car_rental_1793877816943.jpg',
  image5: 'C:\\Users\\Akheel\\.gemini\\antigravity\\brain\\8b4b59e3-ccdf-4bdc-ac35-37f55ac12e2f\\blog_hyderabad_orr_cable_bridge_1793877839683.jpg',
};

function randomKey() {
  return crypto.randomBytes(8).toString('hex');
}

function parseParagraphLine(text, style = 'normal', listItem = undefined) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const children = [];
  const markDefs = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      children.push({
        _key: randomKey(),
        _type: 'span',
        text: text.slice(lastIndex, match.index),
        marks: [],
      });
    }
    const markKey = 'link_' + randomKey();
    markDefs.push({
      _key: markKey,
      _type: 'link',
      href: match[2],
    });
    children.push({
      _key: randomKey(),
      _type: 'span',
      text: match[1],
      marks: [markKey],
    });
    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    children.push({
      _key: randomKey(),
      _type: 'span',
      text: text.slice(lastIndex),
      marks: [],
    });
  }

  const block = {
    _key: randomKey(),
    _type: 'block',
    style: style === 'bullet' ? 'normal' : style,
    children: children.length > 0 ? children : [{ _key: randomKey(), _type: 'span', text: '', marks: [] }],
    markDefs,
  };

  if (style === 'bullet') {
    block.listItem = 'bullet';
    block.level = 1;
  }

  return block;
}

function parseMarkdownToBlocks(markdown) {
  const lines = markdown.split('\n');
  const blocks = [];

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i].trim();
    if (!rawLine || rawLine === '---') continue;

    if (rawLine.startsWith('### ')) {
      blocks.push({
        _key: randomKey(),
        _type: 'block',
        style: 'h3',
        children: [{ _key: randomKey(), _type: 'span', text: rawLine.replace(/^###\s+/, ''), marks: [] }],
        markDefs: [],
      });
    } else if (rawLine.startsWith('## ')) {
      blocks.push({
        _key: randomKey(),
        _type: 'block',
        style: 'h2',
        children: [{ _key: randomKey(), _type: 'span', text: rawLine.replace(/^##\s+/, ''), marks: [] }],
        markDefs: [],
      });
    } else if (rawLine.startsWith('- ') || rawLine.startsWith('* ')) {
      const itemText = rawLine.replace(/^[-*]\s+/, '');
      blocks.push(parseParagraphLine(itemText, 'bullet'));
    } else {
      blocks.push(parseParagraphLine(rawLine, 'normal'));
    }
  }

  return blocks;
}

async function uploadImageToSanity(filePath, filename) {
  console.log(`Uploading ${filename} to Sanity...`);
  const stream = fs.createReadStream(filePath);
  const asset = await client.assets.upload('image', stream, {
    filename: filename,
    contentType: 'image/jpeg',
  });
  console.log(`Uploaded ${filename} => Asset ID: ${asset._id}`);
  return asset;
}

async function publishAll() {
  console.log('=== STARTING 5 BLOG PUBLICATION VIA SANITY CMS ===');

  for (let i = 0; i < blogArticles.length; i++) {
    const article = blogArticles[i];
    console.log(`\nProcessing [${i + 1}/5]: ${article.title}`);

    // 1. Upload image
    const imgPath = imagePaths[article.imageKey];
    const asset = await uploadImageToSanity(imgPath, `${article.slug}.jpg`);

    // 2. Parse body blocks
    const bodyBlocks = parseMarkdownToBlocks(article.content);
    console.log(`Generated ${bodyBlocks.length} content blocks.`);

    // 3. Prepare document
    const docId = `driveitcars-guide-${article.slug}`;
    const doc = {
      _id: docId,
      _type: 'post',
      title: article.title,
      slug: {
        _type: 'slug',
        current: article.slug,
      },
      excerpt: article.excerpt,
      seoTitle: article.seoTitle,
      seoDescription: article.seoDescription,
      author: 'DriveItCars',
      keywords: article.keywords,
      publishedAt: new Date().toISOString(),
      mainImage: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: asset._id,
        },
        alt: article.alt,
        caption: 'DriveItCars editorial guide illustration.',
      },
      body: bodyBlocks,
    };

    // 4. Create or replace in Sanity
    console.log(`Writing document ${docId} to Sanity...`);
    const result = await client.createOrReplace(doc);
    console.log(`Successfully published: ${result._id} (Slug: /blog/${article.slug})`);
  }

  console.log('\n=== ALL 5 BLOGS PUBLISHED SUCCESSFULLY ===');
}

publishAll().catch((err) => {
  console.error('Fatal error during publication:', err);
  process.exit(1);
});
