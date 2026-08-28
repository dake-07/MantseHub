const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

async function checkiPhones() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  const data = await res.json();
  const iphones = data.records.filter(r => r.fields.name && r.fields.name.toLowerCase().includes('iphone'));
  console.log('All iPhones in Airtable:');
  iphones.forEach(r => console.log(r.fields.name, '| Category:', r.fields.category, '| Active:', r.fields.is_active));
}
checkiPhones().catch(console.error);
