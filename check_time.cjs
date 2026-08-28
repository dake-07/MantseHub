const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

async function checkCreatedTime() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  const data = await res.json();
  const sorted = data.records.sort((a, b) => new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime());
  console.log('Top 5 newest:');
  sorted.slice(0, 5).forEach(r => console.log(r.fields.name, r.createdTime));
  console.log('Top 5 oldest:');
  sorted.slice(-5).forEach(r => console.log(r.fields.name, r.createdTime));
}
checkCreatedTime().catch(console.error);
