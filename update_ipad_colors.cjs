const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

const updatedColorVariants = [
  {
    "name": "Blue",
    "hex": "#1E90FF",
    "image": "https://dake-07.github.io/MantseHub/variants/ipad_a16_1776976497417.png"
  },
  {
    "name": "Silver",
    "hex": "#C0C0C0",
    "image": "https://dake-07.github.io/MantseHub/new_images/ipad-11th%20gen-silver-wifi.webp"
  },
  {
    "name": "Pink",
    "hex": "#FFC0CB",
    "image": "https://dake-07.github.io/MantseHub/new_images/ipad-11th-gen-pink-wifi.webp"
  }
];

async function updateIpadColors() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      records: [
        {
          id: "recQ04xDEAwdhDdZd",
          fields: {
            color_variants: JSON.stringify(updatedColorVariants)
          }
        }
      ]
    })
  });
  
  const data = await res.json();
  if (res.ok) {
    console.log(`Successfully updated iPad color variants!`);
  } else {
    console.error('Error updating products:', data);
  }
}

updateIpadColors().catch(console.error);
