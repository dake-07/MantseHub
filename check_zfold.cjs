const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

async function checkZFold() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  const data = await res.json();
  const zfold = data.records.filter(r => r.fields.name && r.fields.name.toLowerCase().includes('fold 7'));
  console.log('Z Fold 7 records:');
  zfold.forEach(r => console.log(JSON.stringify(r.fields, null, 2)));

  // Also print the first 10 products to see the default order
  console.log('\nFirst 10 products returned by Airtable:');
  data.records.slice(0, 10).forEach(r => console.log(r.fields.name));
}
checkZFold().catch(console.error);
