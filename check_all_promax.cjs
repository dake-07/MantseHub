const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

async function checkAllProMax() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  const data = await res.json();
  const records = data.records;
  
  const iphones = records.filter(r => r.fields.name && r.fields.name.includes('iPhone 17 Pro Max'));
  iphones.forEach(iphone => {
    console.log(iphone.fields.name);
    console.log('Color variants field:', iphone.fields.color_variants ? iphone.fields.color_variants.substring(0, 150) + '...' : 'undefined');
  });
}
checkAllProMax().catch(console.error);
