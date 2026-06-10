const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

const mappings = {
  "163x346_Titanium-Gray_Galaxy_S24_Ultra.avif": "Samsung Galaxy S24 Ultra",
  "hp omnibook flip 360.jpg": "HP OmniBook Flip360",
  "samsung galaxy a16.avif": "Samsung Galaxy A16",
  "samsung galaxy s25 ultra.webp": "Samsung Galaxy S25 Ultra",
  "samsung galaxy s25+.webp": "Samsung Galaxy S25+",
  "samsung galaxy watch 8.webp": "Samsung Galaxy Watch 8",
  "samsung tab s11 ultra.webp": "Samsung Galaxy Tab S11 Ultra 5G",
  "tcl qled 98.webp": 'TCL QLED TV 98"',
  "samsung A56 5G.jpeg": "Samsung Galaxy A56 5G",
  "apple_pencil_2.jpg": "Apple Pencil 2 Normal",
  "apple_pencil_usbc.jpg": "Apple Pencil 2 Type-C",
  "apple_pencil_pro.jpg": "Apple Pencil Pro"
};

async function fetchWithRetry(url, options, retries = 5) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, options);
      return res;
    } catch (e) {
      console.log(`Fetch failed, retrying (${i + 1}/${retries})...`);
      await new Promise(r => setTimeout(r, 2000));
    }
  }
  throw new Error('Max retries reached');
}

async function updateImages() {
  const res = await fetchWithRetry(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  const data = await res.json();
  const records = data.records;
  
  const updates = [];

  for (const r of records) {
    const name = r.fields.name;
    const matchedFilename = Object.keys(mappings).find(key => mappings[key] === name);
    
    if (matchedFilename) {
      const newUrl = `https://dake-07.github.io/MantseHub/new_images/${matchedFilename.replace(/ /g, '%20')}`;
      
      let currentImages = r.fields.image || [];
      if (!currentImages.some(img => img.url === newUrl || img.filename === matchedFilename)) {
        const newImageArray = [{ url: newUrl }, ...currentImages];
        updates.push({
          id: r.id,
          fields: {
            image: newImageArray
          }
        });
      }
    }
  }

  if (updates.length > 0) {
    console.log(`Found ${updates.length} records to update.`);
    for (let i = 0; i < updates.length; i += 10) {
      const batch = updates.slice(i, i + 10);
      const patchRes = await fetchWithRetry(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ records: batch })
      });
      const resData = await patchRes.json();
      if (!patchRes.ok) {
        console.error('Patch error:', resData);
      } else {
        console.log(`Successfully patched batch of ${batch.length}`);
      }
    }
  } else {
    console.log('No records needed updating (or they were already updated).');
  }
}

updateImages().catch(console.error);
