const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

const newProducts = [
  {
    fields: {
      "name": "PlayStation 5 Slim",
      "category": "Gaming",
      "price": 6900,
      "variants": "Digital, Standard",
      "variant_prices": "6900, 7700",
      "rating": 5,
      "is_active": true,
      "image": [{ url: "https://dake-07.github.io/MantseHub/new_images/ps5%20slim%201TB%20STANDARD.webp" }]
    }
  },
  {
    fields: {
      "name": "PlayStation 5 Pro",
      "category": "Gaming",
      "price": 9700,
      "rating": 5,
      "is_active": true,
      "image": [{ url: "https://dake-07.github.io/MantseHub/new_images/PlayStation-5-Pro.webp" }]
    }
  }
];

async function addPS5() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ records: newProducts })
  });
  
  const data = await res.json();
  if (res.ok) {
    console.log(`Successfully added ${data.records.length} PS5 products!`);
  } else {
    console.error('Error adding products:', data);
  }
}

addPS5().catch(console.error);
