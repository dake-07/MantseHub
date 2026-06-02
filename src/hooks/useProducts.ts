import { useState, useEffect } from 'react';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  variants?: string[];
  variant_prices?: number[];
  color_variants?: { name: string; hex: string; image: string }[];
  detailed_specs?: { [key: string]: string };
}

const CACHE_KEY = 'mantsehub_products_cache';
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      // 1. Check Cache
      const cachedData = localStorage.getItem(CACHE_KEY);
      let hasValidCache = false;

      if (cachedData) {
        try {
          const { timestamp, data } = JSON.parse(cachedData);
          if (Date.now() - timestamp < CACHE_TTL_MS) {
            setProducts(data);
            setIsLoading(false);
            hasValidCache = true;
            return; // Cache hit and fresh
          } else {
            // Serve stale cache immediately while background fetching
            setProducts(data);
            hasValidCache = true;
          }
        } catch (e) {
          console.error("Failed to parse cache", e);
        }
      }

      // 2. Fetch from Airtable
      try {
        const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
        const tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME || 'Products';
        const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY;

        if (!baseId || !apiKey) {
          throw new Error("Airtable environment variables missing");
        }

        const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`Airtable fetch failed: ${response.status}`);
        }

        const json = await response.json();
        
        // Transform Airtable records to our Product type
        const fetchedProducts: Product[] = json.records
          .filter((record: any) => record.fields.is_active !== false) // Only active
          .map((record: any) => {
            const f = record.fields;
            
            // Build detailed specs
            const specs: any = {};
            if (f.spec_1) { const idx = f.spec_1.indexOf(':'); if(idx>-1) specs[f.spec_1.substring(0,idx).trim()] = f.spec_1.substring(idx+1).trim(); }
            if (f.spec_2) { const idx = f.spec_2.indexOf(':'); if(idx>-1) specs[f.spec_2.substring(0,idx).trim()] = f.spec_2.substring(idx+1).trim(); }
            if (f.spec_3) { const idx = f.spec_3.indexOf(':'); if(idx>-1) specs[f.spec_3.substring(0,idx).trim()] = f.spec_3.substring(idx+1).trim(); }
            if (f.spec_4) { const idx = f.spec_4.indexOf(':'); if(idx>-1) specs[f.spec_4.substring(0,idx).trim()] = f.spec_4.substring(idx+1).trim(); }

            let colorVariants;
            if (f.color_variants) {
              try { colorVariants = JSON.parse(f.color_variants); } catch (e) { console.error('Failed to parse color variants', e); }
            }

            return {
              id: f.id || record.id,
              name: f.name || 'Unnamed Product',
              category: f.category || 'Uncategorized',
              price: f.price || 0,
              image: f.image && f.image.length > 0 ? f.image[0].url : '',
              rating: f.rating || 5,
              reviews: f.reviews || 0,
              variants: f.variants ? f.variants.split(',').map((s: string) => s.trim()) : undefined,
              variant_prices: f.variant_prices ? f.variant_prices.split(',').map((s: string) => parseInt(s.trim())) : undefined,
              color_variants: colorVariants,
              detailed_specs: Object.keys(specs).length > 0 ? specs : undefined
            };
          })
          .sort((a: Product, b: Product) => a.id - b.id); // Sort by original ID

        setProducts(fetchedProducts);
        
        // Update cache
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          timestamp: Date.now(),
          data: fetchedProducts
        }));
        
        setIsLoading(false);
      } catch (err: any) {
        console.error("Error fetching products:", err);
        setError(err.message);
        if (!hasValidCache) {
          setIsLoading(false);
        }
      }
    }

    fetchProducts();
  }, []);

  return { products, isLoading, error };
}
