const dotenv = require('dotenv');
dotenv.config();
const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, { headers: { 'Authorization': `Bearer ${TOKEN}` } })
.then(res => res.json())
.then(data => {
  const names = data.records.map(r => r.fields.name);
  console.log('All product names:', names);
});
