const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

async function check16e() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  const data = await res.json();
  const records = data.records;

  const matches = records.filter(r => r.fields.name && r.fields.name.toLowerCase().includes('16'));
  console.log("Found 16s:");
  matches.forEach(m => {
    console.log(`Name: ${m.fields.name}, is_active: ${m.fields.is_active}, keys: ${Object.keys(m.fields).join(', ')}`);
  });
}

check16e().catch(console.error);
