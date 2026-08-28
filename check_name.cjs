const dotenv = require('dotenv');
dotenv.config();
const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;
fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, { headers: { 'Authorization': `Bearer ${TOKEN}` } })
.then(res => res.json())
.then(data => {
  const matches = data.records
    .filter(r => r.fields.name && r.fields.name.includes('Pencil'))
    .map(r => ({ name: r.fields.name, images: r.fields.image }));
  console.log('Matches:', JSON.stringify(matches, null, 2));
});
