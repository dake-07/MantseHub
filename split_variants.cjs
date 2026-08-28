const dotenv = require('dotenv');
dotenv.config();

const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = process.env.VITE_AIRTABLE_API_KEY;

async function splitVariants() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  const data = await res.json();
  
  // Find products that have memory variants (containing 'GB' or 'TB')
  const toSplit = data.records.filter(r => {
    const v = r.fields.variants || '';
    return v.includes(',') && (v.toUpperCase().includes('GB') || v.toUpperCase().includes('TB'));
  });

  console.log(`Found ${toSplit.length} products with memory variants to split.`);

  for (const product of toSplit) {
    const variants = product.fields.variants.split(',').map(s => s.trim());
    const prices = product.fields.variant_prices.split(',').map(s => parseInt(s.trim()));
    const baseName = product.fields.name;

    console.log(`\nSplitting ${baseName}...`);

    // 1. Update the original product to be the FIRST variant
    const patchBody = {
      records: [{
        id: product.id,
        fields: {
          name: `${baseName} ${variants[0]}`,
          price: prices[0],
          variants: null,
          variant_prices: null
        }
      }]
    };
    await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
      method: 'PATCH',
      headers: { 'Authorization': `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(patchBody)
    });
    console.log(`- Updated original to: ${baseName} ${variants[0]} (GH₵ ${prices[0]})`);

    // 2. Create NEW products for the REMAINING variants
    const newRecords = [];
    for (let i = 1; i < variants.length; i++) {
      const newFields = { ...product.fields };
      newFields.name = `${baseName} ${variants[i]}`;
      newFields.price = prices[i];
      newFields.variants = null;
      newFields.variant_prices = null;
      // Copy image format correctly
      if (newFields.image && newFields.image.length > 0 && newFields.image[0].url) {
        newFields.image = [{ url: newFields.image[0].url }];
      } else {
        delete newFields.image;
      }
      newRecords.push({ fields: newFields });
    }

    if (newRecords.length > 0) {
      const postBody = { records: newRecords };
      const postRes = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Products`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(postBody)
      });
      const postData = await postRes.json();
      if (!postRes.ok) {
         console.error('Error creating new variants:', postData);
      } else {
         newRecords.forEach(r => console.log(`- Created new: ${r.fields.name} (GH₵ ${r.fields.price})`));
      }
    }
  }
}

splitVariants().catch(console.error);
