const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

async function splitPS5() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  const data = await res.json();
  const ps5Slim = data.records.find(r => r.fields.name === 'PlayStation 5 Slim');

  if (ps5Slim) {
    // 1. Update the existing one to be the Digital edition
    await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
      method: 'PATCH',
      headers: { 'Authorization': `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        records: [{
          id: ps5Slim.id,
          fields: {
            name: "PlayStation 5 Slim Digital",
            price: 6900,
            variants: null,
            variant_prices: null,
            image: [{ url: "https://dake-07.github.io/MantseHub/new_images/PS5%20SLIM%20DIGITAL.webp" }]
          }
        }]
      })
    });
    console.log("Updated existing PS5 to Digital edition.");

    // 2. Create the Standard edition as a new product
    await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        records: [{
          fields: {
            name: "PlayStation 5 Slim Standard",
            category: "Gaming Consoles",
            price: 7700,
            rating: 5,
            is_active: true,
            image: [{ url: "https://dake-07.github.io/MantseHub/new_images/ps5%20slim%201TB%20STANDARD.webp" }]
          }
        }]
      })
    });
    console.log("Created new PS5 Standard edition.");
  } else {
    console.log("Could not find PlayStation 5 Slim to split.");
  }
}

splitPS5().catch(console.error);
