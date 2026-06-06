const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

async function fixVariants() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  const data = await res.json();
  const records = data.records;
  
  const updates = [];

  for (const r of records) {
    if (r.fields.color_variants && r.fields.color_variants.includes('tmpfiles.org')) {
      try {
        let cvs = JSON.parse(r.fields.color_variants);
        let changed = false;

        for (const cv of cvs) {
          if (cv.image && cv.image.includes('tmpfiles.org')) {
            const parts = cv.image.split('/');
            const filename = parts[parts.length - 1];
            cv.image = `https://dake-07.github.io/MantseHub/variants/${filename}`;
            changed = true;
          }
        }

        if (changed) {
          updates.push({
            id: r.id,
            fields: { color_variants: JSON.stringify(cvs) }
          });
        }
      } catch (e) {
        console.error('Failed to parse color_variants for', r.fields.name);
      }
    }
  }

  if (updates.length > 0) {
    for (let i = 0; i < updates.length; i += 10) {
      const batch = updates.slice(i, i + 10);
      const patchRes = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ records: batch })
      });
      console.log('Patch response:', patchRes.status);
    }
    console.log(`Updated ${updates.length} records.`);
  } else {
    console.log('No records needed fixing.');
  }
}

fixVariants().catch(console.error);
