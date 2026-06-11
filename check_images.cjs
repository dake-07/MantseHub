const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

async function checkImages() {
  // Airtable paginates at 100 records. Fetch all pages.
  let allRecords = [];
  let offset = undefined;
  do {
    const url = `https://api.airtable.com/v0/${BASE_ID}/Products` + (offset ? `?offset=${offset}` : '');
    const res = await fetch(url, {
      headers: { 'Authorization': `Bearer ${TOKEN}` }
    });
    const data = await res.json();
    allRecords = allRecords.concat(data.records);
    offset = data.offset;
  } while (offset);

  // Check the new products
  const targets = [
    'Samsung Galaxy S26', 'Samsung Galaxy S26+', 'Samsung Galaxy S26 Ultra',
    'Google Pixel 10 Pro XL', 'Google Pixel 10 Pro Fold', 'Google Pixel 10', 'Google Pixel 10a',
    'Google Pixel 9', 'Google Pixel 9 Pro XL', 'Google Pixel 9 Pro Fold'
  ];

  for (const target of targets) {
    const record = allRecords.find(r => r.fields.name === target);
    if (record) {
      const images = record.fields.image || [];
      const variants = record.fields.variants || '';
      const prices = record.fields.variant_prices || '';
      console.log(`\n${record.fields.name} (ID: ${record.id})`);
      console.log(`  Variants: ${variants}`);
      console.log(`  Prices: ${prices}`);
      console.log(`  Images: ${images.length > 0 ? images.map(i => i.url || i.filename).join(', ') : 'NO IMAGES'}`);
    } else {
      console.log(`\n${target}: NOT FOUND IN AIRTABLE`);
    }
  }
}

checkImages().catch(console.error);
