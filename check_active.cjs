const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

async function checkActive() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  const data = await res.json();
  const records = data.records;

  const activeUndefined = records.filter(r => r.fields.is_active === undefined);
  console.log(`There are ${activeUndefined.length} products with is_active: undefined`);
  activeUndefined.slice(0, 5).forEach(m => {
    console.log(`Name: ${m.fields.name}`);
  });
}

checkActive().catch(console.error);
