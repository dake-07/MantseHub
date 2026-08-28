const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

async function fullAudit() {
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

  console.log(`\nTotal products in Airtable: ${allRecords.length}\n`);
  console.log('=== ALL PRODUCTS ===\n');
  
  allRecords.forEach(r => {
    const f = r.fields;
    const hasImage = f.image && f.image.length > 0;
    const imageStatus = hasImage ? '✅' : '❌ NO IMAGE';
    const variants = f.variants || 'N/A';
    const prices = f.variant_prices || f.price || 'N/A';
    console.log(`${imageStatus} ${f.name}`);
    console.log(`   Category: ${f.category} | Price: GH₵${f.price} | Variants: ${variants} | Prices: ${prices}`);
    console.log(`   Active: ${f.is_active !== false ? 'Yes' : 'No'}`);
  });
}

fullAudit().catch(console.error);
