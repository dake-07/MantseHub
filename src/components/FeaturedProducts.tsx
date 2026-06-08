import { useState, useEffect } from 'react';
import { Star, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useProducts } from '../hooks/useProducts';
import ProductSkeleton from './ProductSkeleton';


interface FeaturedProps {
  addToCart: (product: any) => void;
  selectedCategory: string;
  onClearFilter: () => void;
  searchQuery?: string;
}

const ProductCard = ({ product, setSelectedProduct, setModalVariantIndex, addToCart }: { product: any, setSelectedProduct: (p: any) => void, setModalVariantIndex: (i: number) => void, addToCart: (p: any) => void }) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  if (!product) return null;

  const activePrice = product.variant_prices ? product.variant_prices[selectedVariantIndex] : product.price;
  const activeImage = product.color_variants && product.color_variants[selectedColorIndex] ? product.color_variants[selectedColorIndex].image : product.image;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-shadow duration-300 group flex flex-col h-full">
      <div className="relative aspect-square sm:aspect-w-1 sm:aspect-h-1 bg-gradient-to-tr from-black/5 to-transparent overflow-hidden shrink-0">
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10">
          <span className="bg-premium-black/90 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider py-1 px-2 sm:px-3 rounded-full shadow-sm">
            {product.name?.includes('Pro') || product.name?.includes('Ultra') || product.name?.includes('Fold') ? 'Pro Series' : product.rating === 5 ? 'Top Rated' : 'New Release'}
          </span>
        </div>
        <img
          src={activeImage}
          alt={product.name}
          className="w-full h-full object-contain object-center p-4 sm:p-6 group-hover:scale-105 transition-transform duration-500 mix-blend-darken"
          loading="lazy"
        />
      </div>
      <div className="p-3 sm:p-5 flex flex-col flex-grow">
        <div className="text-[10px] sm:text-xs font-bold tracking-wider text-premium-gray/60 uppercase mb-1 sm:mb-2">{product.category}</div>
        <h3 className="text-sm sm:text-lg font-bold text-premium-black mb-1.5 sm:mb-2 line-clamp-2 sm:truncate leading-tight">{product.name}</h3>
        
        <div className="flex flex-col gap-2 mb-2 sm:mb-3">
          <div className="flex items-center bg-black/5 w-fit px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md max-w-full">
            <span className="text-[9px] sm:text-[11px] font-bold text-premium-black/70 truncate">
              {product.detailed_specs ? (Object.values(product.detailed_specs)[0] as string) : 'Specs unavailable'}
            </span>
          </div>
          
          {product.color_variants && (
            <div className="flex gap-2 items-center mt-1">
              {product.color_variants.map((color: any, idx: number) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setSelectedColorIndex(idx); }}
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
          <button 
            onClick={() => {
              setSelectedProduct({
                ...product,
                displayImage: activeImage
              });
              setModalVariantIndex(selectedVariantIndex);
            }}
            className="text-xs sm:text-sm font-bold text-premium-black hover:text-premium-gray transition-colors group/link w-fit flex items-center py-2 min-h-[44px]"
          >
            Details 
            <span className="ml-1 inline-block transition-transform group-hover/link:translate-x-1">→</span>
          </button>
          <button 
            onClick={() => addToCart({
              ...product,
              price: activePrice,
              selected_variant: product.variants ? product.variants[selectedVariantIndex] : null
            })}
            className="w-full bg-premium-black text-white text-center py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl font-bold text-xs sm:text-base hover:bg-black/80 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 transition-all active:scale-[0.98] min-h-[44px]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default function FeaturedProducts({ addToCart, selectedCategory, onClearFilter, searchQuery = '' }: FeaturedProps) {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [modalVariantIndex, setModalVariantIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(8);
  const { products, isLoading, error } = useProducts();

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(8);
  }, [selectedCategory, searchQuery]);

  const filteredProducts = products.filter(p => {
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
          <h2 className="text-3xl font-extrabold text-premium-black">
            {selectedCategory === 'All' ? 'Featured Products' : `${selectedCategory}`}
          </h2>
          {selectedCategory === 'All' ? (
            <p className="mt-4 text-base sm:text-lg text-premium-gray">Top picks from Mantse Electronic Hub.</p>
          ) : (
            <button onClick={onClearFilter} className="mt-4 text-sm font-medium text-premium-black hover:text-premium-gray bg-black/5 hover:bg-black/10 px-4 py-2 rounded-full transition-colors">
              View All Products
            </button>
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
                        <ProductCard product={product} setSelectedProduct={setSelectedProduct} setModalVariantIndex={setModalVariantIndex} addToCart={addToCart} />
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
                            <ProductCard product={product} setSelectedProduct={setSelectedProduct} setModalVariantIndex={setModalVariantIndex} addToCart={addToCart} />
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
                        <ProductCard key={product.id} product={product} setSelectedProduct={setSelectedProduct} setModalVariantIndex={setModalVariantIndex} addToCart={addToCart} />
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
                    <ProductCard key={product.id} product={product} setSelectedProduct={setSelectedProduct} setModalVariantIndex={setModalVariantIndex} addToCart={addToCart} />
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

      {/* Pop-up Drawer for Specs */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            <motion.div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
            />
            <motion.div 
              className="fixed top-0 right-0 h-full w-full sm:max-w-md bg-premium-bg shadow-2xl z-50 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="flex items-center justify-between p-6 pb-4 shrink-0">
                <h2 className="text-2xl font-black text-premium-black">Device Specs</h2>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center hover:bg-black/5 rounded-full transition-colors -mr-2"
                  aria-label="Close Specs"
                >
                  <X className="w-6 h-6 text-premium-gray" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto px-6 hide-scrollbar pb-4">
                <div className="mb-6 rounded-2xl overflow-hidden bg-white/80 border border-black/5 p-4 aspect-video flex items-center justify-center">
                  <img src={selectedProduct.displayImage || selectedProduct.image} alt={selectedProduct.name} className="h-full w-full object-contain mix-blend-darken" loading="lazy" />
                </div>

                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-premium-black">{selectedProduct.name}</h3>
                  <span className="text-xl font-black text-premium-gold whitespace-nowrap ml-4">GH₵ {selectedProduct.price.toLocaleString()}</span>
                </div>

                <div className="space-y-4 mb-8">
                  {Object.entries(selectedProduct.detailed_specs || {}).map(([key, value]) => (
                    <div key={key} className="border-b border-black/5 pb-3">
                      <span className="block text-xs font-bold text-premium-gray/70 uppercase tracking-wider mb-1">
                        {key.replace('_', ' ')}
                      </span>
                      <span className="block text-sm font-medium text-premium-black">{String(value)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="shrink-0 p-6 pt-4 bg-premium-bg/90 backdrop-blur-md border-t border-black/5">
                <button 
                  onClick={() => {
                    addToCart({
                      ...selectedProduct,
                      price: selectedProduct.variant_prices ? selectedProduct.variant_prices[modalVariantIndex] : selectedProduct.price,
                      selected_variant: selectedProduct.variants ? selectedProduct.variants[modalVariantIndex] : null
                    });
                    setSelectedProduct(null);
                  }}
                  className="w-full bg-premium-black text-white text-center py-4 px-4 rounded-xl font-bold text-lg shadow-lg shadow-black/20 hover:bg-black/80 hover:-translate-y-0.5 transition-all"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
