const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

async function checkProMax() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  const data = await res.json();
  const records = data.records;
  
  const iphone = records.find(r => r.fields.name && r.fields.name.includes('iPhone 17 Pro Max'));
  if (iphone) {
    console.log('iPhone 17 Pro Max found!');
    console.log('Image field:', JSON.stringify(iphone.fields.image, null, 2));
    console.log('Color variants field:', iphone.fields.color_variants);
  } else {
    console.log('iPhone 17 Pro Max not found');
  }
}
checkProMax().catch(console.error);
