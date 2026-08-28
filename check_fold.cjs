const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

async function checkFold() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  const data = await res.json();
  const folds = data.records.filter(r => r.fields.name && r.fields.name.toLowerCase().includes('fold'));
  console.log('All Fold records:');
  folds.forEach(r => console.log(r.fields.name));
}
checkFold().catch(console.error);
