const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

async function checkFold7() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  const data = await res.json();
  const fold7 = data.records.find(r => r.fields.name === 'Samsung Galaxy Fold7');
  console.log(JSON.stringify(fold7.fields, null, 2));
}
checkFold7().catch(console.error);
