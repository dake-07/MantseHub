const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

async function deactivate16e() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  const data = await res.json();
  const records = data.records;

  const matches = records.filter(r => r.fields.name && r.fields.name.toLowerCase().includes('16e'));
  
  if (matches.length === 0) {
    console.log("No 16e found.");
    return;
  }

  const toUpdate = matches.map(match => ({
    id: match.id,
    fields: {
      is_active: false
    }
  }));

  console.log(`Deactivating ${toUpdate.length} records:`, matches.map(m => m.fields.name));

  const patchRes = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ records: toUpdate })
  });
  
  if (patchRes.ok) {
    console.log(`Successfully deactivated 16e.`);
  } else {
    const err = await patchRes.json();
    console.error(`Error updating batch:`, err);
  }
}

deactivate16e().catch(console.error);
