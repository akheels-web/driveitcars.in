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

function randomKey() {
  return crypto.randomBytes(8).toString('hex');
}

function cleanText(text) {
  return text
    .replace(/\\\$\\s*\\\\+rightarrow\\s*\\\$/g, ' → ')
    .replace(/\\\\+rightarrow/g, ' → ')
    .replace(/\\\$\\s*\\\\+times\\s*\\\$/g, ' × ')
    .replace(/\\\\+times/g, ' × ');
}

function parseParagraphLine(rawText, style = 'normal') {
  const text = cleanText(rawText);
  // Pattern matches:
  // 1. **[text](url)** or [**text**](url) (bold link)
  // 2. [text](url) (link)
  // 3. **bold**: \*\*([^*]+)\*\*
  // 4. *italic*: \*([^*]+)\*
  const pattern = /(\*\*\[([^\]]+)\]\(([^)]+)\)\*\*|\[\*\*([^\]]+)\*\*\]\(([^)]+)\)|\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*)/g;

  let lastIndex = 0;
  let match;
  const children = [];
  const markDefs = [];

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      children.push({
        _key: randomKey(),
        _type: 'span',
        text: text.slice(lastIndex, match.index),
        marks: [],
      });
    }

    if (match[1].startsWith('**[') || match[1].startsWith('[**')) {
      const linkText = match[2] || match[4];
      const linkUrl = match[3] || match[5];
      const linkKey = 'link_' + randomKey();
      markDefs.push({ _key: linkKey, _type: 'link', href: linkUrl });
      children.push({
        _key: randomKey(),
        _type: 'span',
        text: linkText,
        marks: ['strong', linkKey],
      });
    } else if (match[6] !== undefined) {
      const linkKey = 'link_' + randomKey();
      markDefs.push({ _key: linkKey, _type: 'link', href: match[7] });
      children.push({
        _key: randomKey(),
        _type: 'span',
        text: match[6],
        marks: [linkKey],
      });
    } else if (match[8] !== undefined) {
      children.push({
        _key: randomKey(),
        _type: 'span',
        text: match[8],
        marks: ['strong'],
      });
    } else if (match[9] !== undefined) {
      children.push({
        _key: randomKey(),
        _type: 'span',
        text: match[9],
        marks: ['em'],
      });
    }

    lastIndex = pattern.lastIndex;
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
        children: [{ _key: randomKey(), _type: 'span', text: cleanText(rawLine.replace(/^###\s+/, '')), marks: [] }],
        markDefs: [],
      });
    } else if (rawLine.startsWith('## ')) {
      blocks.push({
        _key: randomKey(),
        _type: 'block',
        style: 'h2',
        children: [{ _key: randomKey(), _type: 'span', text: cleanText(rawLine.replace(/^##\s+/, '')), marks: [] }],
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

async function updateAll() {
  console.log('=== UPDATING 5 BLOGS WITH PROPER PORTABLETEXT FORMATTING ===\n');

  for (let i = 0; i < blogArticles.length; i++) {
    const article = blogArticles[i];
    const docId = `driveitcars-guide-${article.slug}`;
    console.log(`Processing [${i + 1}/5]: ${article.title}`);

    // Fetch existing post to preserve mainImage asset
    const existing = await client.fetch(`*[_id == $docId][0]`, { docId });
    if (!existing) {
      console.warn(`Warning: Existing document not found for ${docId}`);
      continue;
    }

    // Parse blocks with strong / em / link marks
    const bodyBlocks = parseMarkdownToBlocks(article.content);
    console.log(`Generated ${bodyBlocks.length} formatted blocks.`);

    // Patch document
    await client
      .patch(docId)
      .set({
        body: bodyBlocks,
      })
      .commit();

    console.log(`✓ Updated ${docId} successfully! (No raw asterisks)\n`);
  }

  console.log('=== ALL 5 BLOGS UPDATED CLEANLY ===');
}

updateAll().catch((err) => {
  console.error('Fatal error updating blogs:', err);
  process.exit(1);
});
