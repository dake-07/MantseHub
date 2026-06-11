const dotenv = require('dotenv');
dotenv.config();
const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

const newProducts = [
  {
    fields: {
      "name": "Samsung Galaxy S26",
      "category": "PHONES",
      "price": 9900,
      "variants": "256/12GB",
      "variant_prices": "9900",
      "rating": 5,
      "is_active": true,
      "image": [{ url: "https://dake-07.github.io/MantseHub/new_images/samsung%20galaxy%20s26_256-12GB.webp" }]
    }
  },
  {
    fields: {
      "name": "Samsung Galaxy S26+",
      "category": "PHONES",
      "price": 11800,
      "variants": "256/12GB, 512/12GB",
      "variant_prices": "11800, 13800",
      "rating": 5,
      "is_active": true,
      "image": [{ url: "https://dake-07.github.io/MantseHub/new_images/Samsung%20galaxy%20s26%2B.webp" }]
    }
  },
  {
    fields: {
      "name": "Samsung Galaxy S26 Ultra",
      "category": "PHONES",
      "price": 13900,
      "variants": "256/12GB, 512/12GB, 1TB/12GB",
      "variant_prices": "13900, 16200, 19200",
      "rating": 5,
      "is_active": true,
      "image": [{ url: "https://dake-07.github.io/MantseHub/new_images/samsung%20galaxy%20s26%20ultra.webp" }]
    }
  },
  {
    fields: {
      "name": "Google Pixel 10 Pro XL",
      "category": "PHONES",
      "price": 12000,
      "variants": "256GB eSIM, 256GB SIM",
      "variant_prices": "12000, 13000",
      "rating": 5,
      "is_active": true,
      "image": [{ url: "https://dake-07.github.io/MantseHub/new_images/google%20pixel%2010%20pro%20xl.png" }]
    }
  },
  {
    fields: {
      "name": "Google Pixel 10 Pro Fold",
      "category": "PHONES",
      "price": 15800,
      "variants": "256GB, 512GB",
      "variant_prices": "15800, 18800",
      "rating": 5,
      "is_active": true,
      "image": [{ url: "https://dake-07.github.io/MantseHub/new_images/google%20pixel%2010%20pro%20fold.png" }]
    }
  },
  {
    fields: {
      "name": "Google Pixel 10",
      "category": "PHONES",
      "price": 7700,
      "variants": "256GB eSIM",
      "variant_prices": "7700",
      "rating": 5,
      "is_active": true,
      "image": [{ url: "https://dake-07.github.io/MantseHub/new_images/google%20pixel%2010.png" }]
    }
  },
  {
    fields: {
      "name": "Google Pixel 10a",
      "category": "PHONES",
      "price": 7300,
      "variants": "256GB SIM",
      "variant_prices": "7300",
      "rating": 5,
      "is_active": true,
      "image": [{ url: "https://dake-07.github.io/MantseHub/new_images/google%20pixel%2010a.webp" }]
    }
  },
  {
    fields: {
      "name": "Google Pixel 9",
      "category": "PHONES",
      "price": 7500,
      "variants": "128GB",
      "variant_prices": "7500",
      "rating": 5,
      "is_active": true,
      "image": [{ url: "https://dake-07.github.io/MantseHub/new_images/google%20pixel%209.png" }]
    }
  },
  {
    fields: {
      "name": "Google Pixel 9 Pro XL",
      "category": "PHONES",
      "price": 10200,
      "variants": "128GB, 512GB",
      "variant_prices": "10200, 11900",
      "rating": 5,
      "is_active": true,
      "image": [{ url: "https://dake-07.github.io/MantseHub/new_images/google%209%20pro%20xl.png" }]
    }
  },
  {
    fields: {
      "name": "Google Pixel 9 Pro Fold",
      "category": "PHONES",
      "price": 14500,
      "variants": "256GB, 512GB",
      "variant_prices": "14500, 16600",
      "rating": 5,
      "is_active": true,
      "image": [{ url: "https://dake-07.github.io/MantseHub/new_images/google%209%20pro%20fold.webp" }]
    }
  }
];

async function createProducts() {
  const patchRes = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ records: newProducts })
  });
  
  const resData = await patchRes.json();
  if (!patchRes.ok) {
    console.error('Create error:', resData);
  } else {
    console.log(`Successfully created ${resData.records.length} records!`);
  }
}

createProducts();
