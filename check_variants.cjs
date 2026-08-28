const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

async function checkVariants() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  const data = await res.json();
  const withVariants = data.records.filter(r => r.fields.variants && r.fields.variants.includes(','));
  console.log(`Found ${withVariants.length} products to split:`);
  withVariants.forEach(r => console.log(`- ${r.fields.name} (${r.fields.variants})`));
}
checkVariants().catch(console.error);
