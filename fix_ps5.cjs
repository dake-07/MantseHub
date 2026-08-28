const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

async function fixPS5() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  const data = await res.json();
  const ps5Slim = data.records.find(r => r.fields.name === 'PlayStation 5 Slim');
  const ps5Pro = data.records.find(r => r.fields.name === 'PlayStation 5 Pro');

  const updates = [];
  if (ps5Slim) {
    updates.push({
      id: ps5Slim.id,
      fields: {
        image: [{ url: "https://dake-07.github.io/MantseHub/new_images/PS5%20SLIM%20DIGITAL.webp" }]
      }
    });
  }
  if (ps5Pro) {
    updates.push({
      id: ps5Pro.id,
      fields: {
        image: [{ url: "https://dake-07.github.io/MantseHub/new_images/PlayStation-5-Pro.webp" }]
      }
    });
  }

  if (updates.length > 0) {
    const patchRes = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ records: updates })
    });
    const patchData = await patchRes.json();
    console.log('Update response:', patchData);
  }
}
fixPS5().catch(console.error);
