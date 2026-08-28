import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts, Product } from '../hooks/useProducts';
import { useCart } from '../context/CartContext';
import { ShoppingBag, ChevronLeft, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { products, isLoading } = useProducts();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  useEffect(() => {
    if (products.length > 0 && id) {
      const found = products.find(p => p.id === id);
      setProduct(found || null);
    }
  }, [products, id]);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-premium-bg">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-premium-gold border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-premium-gray font-medium">Loading premium experience...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center bg-premium-bg text-center px-4">
        <h1 className="text-4xl font-black text-premium-black mb-4">Product Not Found</h1>
        <p className="text-premium-gray mb-8">The flagship you are looking for doesn't exist or has been removed.</p>
        <Link to="/shop" className="bg-premium-black text-white px-8 py-3 rounded-full font-bold hover:bg-black/80 transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  const activePrice = product.variant_prices ? product.variant_prices[selectedVariantIndex] : product.price;
  const activeImage = product.color_variants && product.color_variants[selectedColorIndex] ? product.color_variants[selectedColorIndex].image : product.image;

  return (
    <div className="min-h-screen bg-premium-bg pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back */}
        <div className="py-6">
          <Link to="/shop" className="inline-flex items-center text-sm font-bold text-premium-gray hover:text-premium-black transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Image Gallery */}
          <div className="relative">
            <div className="sticky top-32 bg-white rounded-[2.5rem] shadow-xl shadow-black/5 p-8 sm:p-12 border border-black/5 flex items-center justify-center min-h-[50vh] lg:min-h-[70vh]">
              <img 
                src={activeImage} 
                alt={product.name} 
                className="w-full h-full max-h-[600px] object-contain drop-shadow-2xl mix-blend-darken animate-in fade-in zoom-in duration-500" 
                key={activeImage}
              />
            </div>
          </div>

          {/* Right Column: Product Info & Config */}
          <div className="flex flex-col pt-4 lg:pt-12">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xs font-black tracking-widest text-premium-gray/60 uppercase">{product.category}</span>
              {product.rating === 5 && (
                <span className="bg-premium-gold/10 text-premium-gold text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider">Top Rated</span>
              )}
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-black text-premium-black leading-tight mb-4">
              {product.name}
            </h1>
            
            <div className="text-3xl font-black text-premium-black mb-8">
              GH₵ {activePrice.toLocaleString()}
            </div>

            {/* Colors */}
            {product.color_variants && (
              <div className="mb-8">
                <h3 className="text-sm font-bold text-premium-black mb-3">Color - {product.color_variants[selectedColorIndex].name}</h3>
                <div className="flex flex-wrap gap-4">
                  {product.color_variants.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColorIndex(idx)}
                      className={`w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center ${selectedColorIndex === idx ? 'border-premium-black scale-110' : 'border-transparent hover:scale-105'}`}
                      title={color.name}
                    >
                      <span className="w-9 h-9 rounded-full shadow-inner border border-black/10" style={{ backgroundColor: color.hex }}></span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Storage/Variants */}
            {product.variants && (
              <div className="mb-10">
                <h3 className="text-sm font-bold text-premium-black mb-3">Storage / Capacity</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.variants.map((variant, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`py-4 px-4 rounded-2xl border-2 text-center transition-all ${
                        selectedVariantIndex === idx 
                          ? 'border-premium-black bg-premium-black/5 text-premium-black' 
                          : 'border-black/10 bg-white text-premium-gray hover:border-premium-black/50'
                      }`}
                    >
                      <span className="block font-bold text-lg">{variant}</span>
                      {product.variant_prices && (
                        <span className="block text-xs mt-1">GH₵ {product.variant_prices[idx].toLocaleString()}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart Action */}
            <div className="bg-white/50 backdrop-blur-md rounded-[2rem] p-6 border border-black/5 mb-10 shadow-sm">
              <button 
                onClick={() => {
                  addToCart({
                    ...product,
                    price: activePrice,
                    selected_variant: product.variants ? product.variants[selectedVariantIndex] : null,
                    image: activeImage
                  });
                }}
                className="w-full bg-premium-black text-white py-5 rounded-full font-black text-lg hover:bg-black/80 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
              >
                <ShoppingBag className="w-6 h-6" />
                Add to Cart — GH₵ {activePrice.toLocaleString()}
              </button>
            </div>

            {/* Specs / Features */}
            {product.detailed_specs && (
              <div className="mt-8 border-t border-black/10 pt-8">
                <h3 className="text-xl font-bold text-premium-black mb-6">Technical Specifications</h3>
                <div className="space-y-4">
                  {Object.entries(product.detailed_specs).map(([key, value]) => (
                    <div key={key} className="flex flex-col sm:flex-row sm:items-start py-3 border-b border-black/5">
                      <span className="text-sm font-bold text-premium-gray uppercase tracking-wider w-1/3 mb-1 sm:mb-0">{key.replace('_', ' ')}</span>
                      <span className="text-base font-medium text-premium-black w-2/3">{value as React.ReactNode}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 border-t border-black/10 pt-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-3">
                  <Truck className="w-6 h-6 text-premium-black" />
                </div>
                <h4 className="font-bold text-sm mb-1">Free Delivery</h4>
                <p className="text-xs text-premium-gray">Nationwide on all flagships</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-3">
                  <ShieldCheck className="w-6 h-6 text-premium-black" />
                </div>
                <h4 className="font-bold text-sm mb-1">Genuine Products</h4>
                <p className="text-xs text-premium-gray">100% authentic with warranty</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-3">
                  <RefreshCw className="w-6 h-6 text-premium-black" />
                </div>
                <h4 className="font-bold text-sm mb-1">Easy Returns</h4>
                <p className="text-xs text-premium-gray">7-day return policy</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
