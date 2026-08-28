const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

const newProducts = [
  {
    fields: {
      "name": "Samsung Galaxy A17",
      "category": "Samsung",
      "price": 2100,
      "variants": "128/4GB, 128/6GB, 256/8GB",
      "variant_prices": "2100, 2400, 3000",
      "rating": 5,
      "is_active": true,
      "image": [{ url: "https://dake-07.github.io/MantseHub/new_images/samsung%20a17.avif" }]
    }
  },
  {
    fields: {
      "name": "Samsung Galaxy A26",
      "category": "Samsung",
      "price": 3600,
      "variants": "256/8GB",
      "variant_prices": "3600",
      "rating": 5,
      "is_active": true,
      "image": [{ url: "https://dake-07.github.io/MantseHub/new_images/Galaxy_A26.avif" }]
    }
  },
  {
    fields: {
      "name": "Samsung Galaxy A37",
      "category": "Samsung",
      "price": 4990,
      "variants": "256/8GB",
      "variant_prices": "4990",
      "rating": 5,
      "is_active": true,
      "image": [{ url: "https://dake-07.github.io/MantseHub/new_images/galaxy%20A37.jpg" }]
    }
  },
  {
    fields: {
      "name": "Samsung Galaxy A57",
      "category": "Samsung",
      "price": 5800,
      "variants": "256/8GB",
      "variant_prices": "5800",
      "rating": 5,
      "is_active": true,
      "image": [{ url: "https://dake-07.github.io/MantseHub/new_images/galaxy%20a57.avif" }]
    }
  }
];

async function updateAirtable() {
  // 1. Fetch all records
  let allRecords = [];
  let offset = undefined;
  do {
    const url = `https://api.airtable.com/v0/${BASE_ID}/Products` + (offset ? `?offset=${offset}` : '');
    const res = await fetch(url, { headers: { 'Authorization': `Bearer ${TOKEN}` } });
    const data = await res.json();
    allRecords = allRecords.concat(data.records);
    offset = data.offset;
  } while (offset);

  // 2. Find records with wrong categories
  const patches = [];
  for (const r of allRecords) {
    const name = r.fields.name || '';
    const cat = r.fields.category || '';
    
    let newCat = null;
    if (cat === 'PHONES') {
      if (name.toLowerCase().includes('google') || name.toLowerCase().includes('pixel')) {
        newCat = 'Google';
      } else if (name.toLowerCase().includes('samsung') || name.toLowerCase().includes('s26')) {
        newCat = 'Samsung';
      }
    } else if (cat === 'Gaming') {
      newCat = 'Gaming Consoles';
    }

    if (newCat) {
      patches.push({ id: r.id, fields: { category: newCat } });
    }
  }

  // 3. Patch categories
  console.log(`Found ${patches.length} products to re-categorize...`);
  for (let i = 0; i < patches.length; i += 10) {
    const batch = patches.slice(i, i + 10);
    const patchRes = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
      method: 'PATCH',
      headers: { 'Authorization': `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ records: batch })
    });
    const patchData = await patchRes.json();
    if (!patchRes.ok) console.error('Patch Error:', patchData);
  }

  // 4. Create new products
  console.log(`Adding ${newProducts.length} new Samsung phones...`);
  const postRes = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ records: newProducts })
  });
  const postData = await postRes.json();
  if (postRes.ok) {
    console.log(`Successfully added!`);
  } else {
    console.error('Post Error:', postData);
  }
}

updateAirtable().catch(console.error);
