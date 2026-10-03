const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'g0myfztr',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skDsU28Ysci8eTtiSHp6BW7dY48bTFyqvXy7WcyMtU2RLODfPj8cWPNkZlSchnoEwCkmiSZ3uT9khkVSXFi5psGmfbixC1LMsl9fQuV6MykF6MCq6fDcgBMmwPOtx4zziYTEGmZ67BiFHaAbFb0iAHdFgeCtfjr5CxUj9fgKnsUJY62BMz7y'
});

async function main() {
  const docs = await client.fetch('*[!(_type match "system.*")]{ _id, _type, title, name }');
  console.log('Total documents:', docs.length);
  console.log(JSON.stringify(docs, null, 2));
}

main().catch(console.error);
