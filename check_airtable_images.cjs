const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

async function checkAirtable() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  const data = await res.json();
  const records = data.records;

  const names = ['A26', 'A37', 'S24 Ultra', 'S25 Ultra'];
  for (const name of names) {
    const match = records.find(r => r.fields.name && r.fields.name.toLowerCase().includes(name.toLowerCase()));
    if (match) {
      console.log(`Product: ${match.fields.name}`);
      console.log(`Image:`, JSON.stringify(match.fields.image, null, 2));
    } else {
      console.log(`Product containing '${name}' not found.`);
    }
  }
}

checkAirtable().catch(console.error);
