const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

async function checkIpadColors() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  const data = await res.json();
  
  const ipads = data.records.filter(r => r.fields.name && r.fields.name.toLowerCase().includes('ipad 11th'));
  
  ipads.forEach(r => {
    console.log(`\nProduct: ${r.fields.name}`);
    console.log(`ID: ${r.id}`);
    console.log(`Color Variants:`, r.fields.color_variants);
  });
}

checkIpadColors().catch(console.error);
