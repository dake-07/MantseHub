const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

async function checkPS5() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  const data = await res.json();
  const ps5s = data.records.filter(r => r.fields.name && r.fields.name.includes('PlayStation'));
  ps5s.forEach(r => {
    console.log(r.fields.name);
    console.log('Image:', JSON.stringify(r.fields.image, null, 2));
    console.log('Variants:', r.fields.variants);
  });
}
checkPS5().catch(console.error);
