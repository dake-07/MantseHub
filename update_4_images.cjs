const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

const updates = [
  { match: 'A26', file: 'Galaxy_A26.avif' },
  { match: 'A37', file: 'galaxy%20A37.avif' },
  { match: 'S24 Ultra', file: 'samsung%20s24%20ultra.webp' },
  { match: 'S25 Ultra', file: 'galaxy%20s25%20ultra.png' }
];

async function updateImages() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  const data = await res.json();
  const records = data.records;

  const toUpdate = [];

  for (const update of updates) {
    const matches = records.filter(r => r.fields.name && r.fields.name.toLowerCase().includes(update.match.toLowerCase()));
    
    for (const match of matches) {
      toUpdate.push({
        id: match.id,
        fields: {
          image: [{ url: `https://dake-07.github.io/MantseHub/new_images/${update.file}` }]
        }
      });
      console.log(`Will update: ${match.fields.name} -> ${update.file}`);
    }
  }

  if (toUpdate.length === 0) {
    console.log("No matching products found to update.");
    return;
  }

  for (let i = 0; i < toUpdate.length; i += 10) {
    const batch = toUpdate.slice(i, i + 10);
    const patchRes = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ records: batch })
    });
    
    if (patchRes.ok) {
      console.log(`Successfully updated batch of ${batch.length} products.`);
    } else {
      const err = await patchRes.json();
      console.error(`Error updating batch:`, err);
    }
  }
}

updateImages().catch(console.error);
