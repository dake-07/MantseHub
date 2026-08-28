import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Star, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useProducts } from '../hooks/useProducts';
import ProductSkeleton from './ProductSkeleton';


interface FeaturedProps {
  addToCart: (product: any) => void;
  selectedCategory: string;
  onClearFilter: () => void;
  onClearSearch?: () => void;
  searchQuery?: string;
}

import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = React.memo(({ product }: { product: any }) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const { addToCart } = useCart();

  if (!product) return null;

  const activePrice = product.variant_prices ? product.variant_prices[selectedVariantIndex] : product.price;
  const activeImage = product.color_variants && product.color_variants[selectedColorIndex] ? product.color_variants[selectedColorIndex].image : product.image;

  // Extract memory size from name (e.g., "512/12GB", "1TB", "256GB")
  const memoryMatch = product.name?.match(/\b(\d+(?:\/\d+)?(?:GB|TB))\b/i);
  const memorySize = memoryMatch ? memoryMatch[0] : null;
  const cleanName = memorySize ? product.name.replace(memorySize, '').trim() : product.name;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-shadow duration-300 group flex flex-col h-full">
      <Link to={`/product/${product.id}`} className="relative aspect-square sm:aspect-w-1 sm:aspect-h-1 bg-gradient-to-tr from-black/5 to-transparent overflow-hidden shrink-0 block">
        {!product.color_variants && (
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 transform-gpu mix-blend-darken"
            loading="lazy"
          />
        )}
        {product.color_variants && product.color_variants.map((color: any, idx: number) => (
          <img
            key={idx}
            src={color.image}
            alt={`${product.name} ${color.name}`}
            className={`absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-opacity duration-300 transform-gpu mix-blend-darken ${selectedColorIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
            loading={idx === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </Link>
      <div className="p-3 sm:p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-1 sm:mb-2">
          <div className="text-[10px] sm:text-xs font-bold tracking-wider text-premium-gray/60 uppercase">{product.category}</div>
          {product.rating === 5 && (
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-premium-gold uppercase">Bestseller</span>
          )}
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm sm:text-lg font-bold text-premium-black mb-1.5 sm:mb-2 line-clamp-2 leading-tight min-h-[40px] sm:min-h-[56px] hover:text-premium-gray transition-colors">{cleanName}</h3>
        </Link>
        
        <div className="flex flex-col gap-2 mb-2 sm:mb-3">
          <div className="flex items-center bg-black/5 w-fit px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md max-w-full">
            <span className="text-[9px] sm:text-[11px] font-bold text-premium-black/70 truncate">
              {product.detailed_specs ? (Object.values(product.detailed_specs)[0] as string) : (memorySize || product.variants?.[0] || product.category)}
            </span>
          </div>
          
          {product.color_variants && (
            <div className="flex gap-2 items-center mt-1">
              {product.color_variants.map((color: any, idx: number) => (
                <button
                  key={idx}
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedColorIndex(idx); }}
                  className="p-1 -m-1"
                  title={color.name}
                  aria-label={`Select color ${color.name}`}
                >
                  <div
                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-black/20 shadow-sm transition-all duration-200 ${selectedColorIndex === idx ? 'ring-2 ring-premium-black ring-offset-2 scale-110' : 'hover:scale-110'}`}
                    style={{ backgroundColor: color.hex }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="mt-auto flex flex-col gap-2 sm:gap-3">
          <div className="text-lg font-black text-premium-black mb-1 transition-all duration-300">
            GH₵ {activePrice?.toLocaleString()}
          </div>
          <Link 
            to={`/product/${product.id}`}
            className="text-xs sm:text-sm font-bold text-premium-black hover:text-premium-gray transition-colors group/link w-fit flex items-center py-2 min-h-[44px]"
          >
            Details 
            <span className="ml-1 inline-block transition-transform group-hover/link:translate-x-1">→</span>
          </Link>
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart({
                ...product,
                price: activePrice,
                selected_variant: product.variants ? product.variants[selectedVariantIndex] : null
              });
            }}
            className="w-full bg-premium-black text-white text-center py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl font-bold text-xs sm:text-base hover:bg-black/80 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 transition-all active:scale-[0.98] min-h-[44px]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
});

export default function FeaturedProducts({ selectedCategory, onClearFilter, onClearSearch, searchQuery = '' }: Omit<FeaturedProps, 'addToCart'>) {
  const [visibleCount, setVisibleCount] = useState(8);
  const { products, isLoading, error } = useProducts();

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(8);
  }, [selectedCategory, searchQuery]);

  const filteredProducts = products.filter((p: any) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const safeName = p.name || '';
    const safeCategory = p.category || '';
    const matchesSearch = safeName.toLowerCase().includes(searchQuery.toLowerCase()) || safeCategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const isAllCategory = selectedCategory === 'All' && !searchQuery;
  const showstoppers = isAllCategory ? filteredProducts.slice(0, 2) : [];
  const swipeTrack = isAllCategory ? filteredProducts.slice(2, 8) : [];
  const theGrid = isAllCategory ? filteredProducts.slice(8) : filteredProducts;
  
  const displayedGrid = theGrid.slice(0, visibleCount);
  const hasMore = visibleCount < theGrid.length;

  return (
    <section id="products" className="py-10 md:py-16 bg-premium-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 flex flex-col items-center">
          {searchQuery ? (
            <>
              <h2 className="text-3xl font-extrabold text-premium-black">Search Results</h2>
              <p className="mt-4 text-base sm:text-lg text-premium-gray">Showing results for "{searchQuery}"</p>
              <button onClick={onClearSearch} className="mt-4 text-sm font-medium text-premium-black hover:text-premium-gray bg-black/5 hover:bg-black/10 px-6 py-2 rounded-full transition-colors">
                Clear Search
              </button>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-extrabold text-premium-black">
                {selectedCategory === 'All' ? 'Featured Products' : `${selectedCategory}`}
              </h2>
              {selectedCategory === 'All' ? (
                <p className="mt-4 text-base sm:text-lg text-premium-gray">Top picks from Mantse Electronic Hub.</p>
              ) : (
                <button onClick={onClearFilter} className="mt-4 text-sm font-medium text-premium-black hover:text-premium-gray bg-black/5 hover:bg-black/10 px-6 py-2 rounded-full transition-colors">
                  View All Products
                </button>
              )}
            </>
          )}
        </div>
        
        {isLoading ? (
          <div className="flex flex-col gap-10 sm:gap-16">
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              <ProductSkeleton />
              <ProductSkeleton />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          </div>
        ) : filteredProducts.length > 0 ? (
          <>
            {isAllCategory ? (
              <div className="flex flex-col gap-10 sm:gap-16">
                
                {/* 1. Showstoppers - Changed to 2 columns on mobile so they aren't massive */}
                {showstoppers.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 sm:gap-8">
                    {showstoppers.map(product => (
                      <div key={product.id} className="md:scale-[1.02] origin-top">
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                )}

                {/* 2. Swipe Track - Using fixed 150px min-width for true compact "normal size" */}
                {swipeTrack.length > 0 && (
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <h3 className="text-lg sm:text-2xl font-bold text-premium-black">Trending Now</h3>
                    </div>
                    <div className="-mx-4 px-4 sm:mx-0 sm:px-0">
                      <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">
                        {swipeTrack.map(product => (
                          <div key={product.id} className="w-[150px] min-w-[150px] sm:min-w-[200px] lg:min-w-[28%] snap-start shrink-0">
                            <ProductCard product={product} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. The Grid - Kept at 2 columns */}
                {theGrid.length > 0 && (
                  <div className="flex flex-col items-center">
                    <div className="w-full flex items-center justify-between mb-4 sm:mb-6">
                      <h3 className="text-lg sm:text-2xl font-bold text-premium-black">More Top Picks</h3>
                    </div>
                    <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-12">
                      {displayedGrid.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                    {hasMore && (
                      <button 
                        onClick={() => setVisibleCount(prev => prev + 12)}
                        className="bg-black/5 hover:bg-black/10 text-premium-black font-semibold py-3 px-8 rounded-full transition-colors active:scale-95 min-h-[44px]"
                      >
                        Load More Products
                      </button>
                    )}
                  </div>
                )}

              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-12">
                  {displayedGrid.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                {hasMore && (
                  <button 
                    onClick={() => setVisibleCount(prev => prev + 12)}
                    className="bg-black/5 hover:bg-black/10 text-premium-black font-semibold py-3 px-8 rounded-full transition-colors active:scale-95 min-h-[44px]"
                  >
                    Load More Products
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 bg-white/95 md:bg-white/70 md:backdrop-blur-md rounded-2xl border border-black/5">
            <p className="text-premium-gray text-lg">No products found for this category at the moment.</p>
            <button onClick={onClearFilter} className="mt-4 text-premium-black font-medium hover:underline">
              Browse all products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
