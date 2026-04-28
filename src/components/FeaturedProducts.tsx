import { useState } from 'react';
import { Star, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import fold7Img from '../assets/products/samsung_galaxy_fold7_1776976230799.png';
import zTriFoldImg from '../assets/products/samsung_galaxy_z_trifold_1776976246202.png';
import s26UltraImg from '../assets/products/samsung_galaxy_s26_ultra_1776976262972.png';
import watch8Img from '../assets/products/samsung_galaxy_watch_8_1776976282015.png';
import iphoneAirImg from '../assets/products/iphone_air_1776976303802.png';
import iphone16Img from '../assets/products/iphone_16_1776976317553.png';
import iphone17ProMaxImg from '../assets/products/iphone_17_pro_max_1776976341649.png';
import a07Img from '../assets/products/samsung_galaxy_a07_1776976357572.png';
import tabS11UltraImg from '../assets/products/galaxy_tab_s11_ultra_1776976378633.png';
import tabA11Img from '../assets/products/tab_a11_1776976391847.png';
import hpFlipImg from '../assets/products/hp_omnibook_flip360_1776976404280.png';
import beatsPillImg from '../assets/products/beats_pill_1776976419138.png';
import tclTvImg from '../assets/products/tcl_qled_tv_1776976444967.png';
import s25Img from '../assets/products/samsung_galaxy_s25_1776976457490.png';
import s25UltraImg from '../assets/products/samsung_galaxy_s25_ultra_1776976470906.png';
import iphone16ProMaxImg from '../assets/products/iphone_16_pro_max_1776976482877.png';
import ipadA16Img from '../assets/products/ipad_a16_1776976497417.png';

const products = [
  {
    id: 1,
    name: "Samsung Galaxy Fold7",
    category: "Samsung",
    rating: 5,
    reviews: 124,
    image: fold7Img,
    detailed_specs: { display: "7.6-inch Foldable Dynamic AMOLED 2X", processor: "Snapdragon 8 Gen 5", camera: "50MP Triple Rear Camera", battery: "4400mAh with 45W Fast Charging" }
  },
  {
    id: 2,
    name: "Samsung Galaxy Z Tri-Fold",
    category: "Samsung",
    rating: 5,
    reviews: 89,
    image: zTriFoldImg,
    detailed_specs: { display: "10.2-inch Triple-Folding Screen", hinge: "Dual-Axis Elite Hinge", os: "Android 16 Optimized for Tri-Fold", durability: "IPX8 Water Resistance" }
  },
  {
    id: 3,
    name: "Samsung Galaxy S26 Ultra",
    category: "Samsung",
    rating: 5,
    reviews: 342,
    image: s26UltraImg,
    detailed_specs: { display: "6.8-inch QHD+ 144Hz AMOLED", processor: "Snapdragon 8 Gen 5", camera: "200MP Main + 100x Space Zoom", build: "Grade 5 Titanium Frame" }
  },
  {
    id: 4,
    name: "Samsung Galaxy Watch 8",
    category: "SmartWatches",
    rating: 4,
    reviews: 210,
    image: watch8Img,
    detailed_specs: { sensors: "BioActive Health Sensor Suite", battery: "Up to 80 hours", screen: "Sapphire Crystal Glass", os: "WearOS 6" }
  },
  {
    id: 5,
    name: "iPhone Air",
    category: "iPhones",
    rating: 5,
    reviews: 178,
    image: iphoneAirImg,
    detailed_specs: { design: "Ultra-Thin 5.1mm Chassis", processor: "A19 Bionic Chip", security: "FaceID 2.0 (Under-display)", weight: "Lightest iPhone ever" }
  },
  {
    id: 6,
    name: "iPhone 16",
    category: "iPhones",
    rating: 5,
    reviews: 312,
    image: iphone16Img,
    detailed_specs: { display: "6.1-inch Super Retina XDR", processor: "A18 Chip", camera: "48MP Dual Camera System", feature: "Action Button Integration" }
  },
  {
    id: 7,
    name: "iPhone 17 Pro Max",
    category: "iPhones",
    rating: 5,
    reviews: 145,
    image: iphone17ProMaxImg,
    detailed_specs: { display: "6.7-inch ProMotion 120Hz", processor: "A19 Pro Chip", zoom: "10x Optical Periscope Zoom", video: "8K ProRes @ 60fps" }
  },
  {
    id: 8,
    name: "Samsung Galaxy A07",
    category: "Samsung",
    rating: 4,
    reviews: 56,
    image: a07Img,
    detailed_specs: { display: "6.5-inch Infinity-V Display", battery: "5000mAh Massive Battery", storage: "Expandable via MicroSD", charger: "Includes 25W Wall Adapter" }
  },
  {
    id: 9,
    name: "Samsung Galaxy Tab S11 Ultra 5G",
    category: "Tablets",
    rating: 5,
    reviews: 94,
    image: tabS11UltraImg,
    detailed_specs: { display: "14.6-inch Super AMOLED", connectivity: "5G & WiFi 7 Ready", pen: "Low-Latency S-Pen Included", multitasking: "Samsung DeX Support" }
  },
  {
    id: 10,
    name: "Tab A11",
    category: "Tablets",
    rating: 4,
    reviews: 112,
    image: tabA11Img,
    detailed_specs: { screen: "11-inch WUXGA Display", battery: "7,040mAh", audio: "Dual Stereo Speakers", security: "Face Recognition" }
  },
  {
    id: 11,
    name: "HP OmniBook Flip360",
    category: "Laptops",
    rating: 5,
    reviews: 67,
    image: hpFlipImg,
    detailed_specs: { type: "2-in-1 Convertible Design", cpu: "Intel Core 5 (Series 1)", screen: "14-inch Touchscreen OLED", security: "Fingerprint Reader" }
  },
  {
    id: 12,
    name: "Beats Pill",
    category: "Speakers",
    rating: 5,
    reviews: 88,
    image: beatsPillImg,
    detailed_specs: { audio: "High-Excursion Woofer", battery: "24-Hour Battery Life", ruggedness: "IP67 Water/Dust Resistance", fast_charge: "10 mins = 2 hours play" }
  },
  {
    id: 13,
    name: "TCL QLED TV 98\"",
    category: "Televisions",
    rating: 5,
    reviews: 32,
    image: tclTvImg,
    detailed_specs: { panel: "Quantum Dot QLED 144Hz", gaming: "Game Master 2.0 Mode", audio: "Onkyo Surround Sound", os: "Google TV Built-in" }
  },
  {
    id: 14,
    name: "Samsung Galaxy S25",
    category: "Samsung",
    rating: 5,
    reviews: 142,
    image: s25Img,
    detailed_specs: { display: "6.2-inch Dynamic AMOLED", processor: "Snapdragon 8 Gen 4", camera: "50MP Main Camera", ai: "Galaxy AI Features" }
  },
  {
    id: 15,
    name: "Samsung Galaxy S25 Ultra",
    category: "Samsung",
    rating: 5,
    reviews: 215,
    image: s25UltraImg,
    detailed_specs: { display: "6.8-inch Flat Frame", build: "Titanium Construction", camera: "200MP Quad Zoom System", stylus: "Embedded S-Pen" }
  },
  {
    id: 16,
    name: "iPhone 16 Pro Max",
    category: "iPhones",
    rating: 5,
    reviews: 412,
    image: iphone16ProMaxImg,
    detailed_specs: { display: "6.9-inch Borderless Screen", processor: "A18 Pro Chip", camera: "Fusion 48MP Camera", connection: "WiFi 7 Ready" }
  },
  {
    id: 17,
    name: "iPad A16",
    category: "Tablets",
    rating: 4,
    reviews: 95,
    image: ipadA16Img,
    detailed_specs: { chip: "A16 Bionic (6-core CPU)", display: "10.9-inch Liquid Retina", ports: "USB-C Connectivity", video: "4K Video Recording" }
  }
];

interface FeaturedProps {
  addToCart: () => void;
  selectedCategory: string;
  onClearFilter: () => void;
  searchQuery?: string;
}

const ProductCard = ({ product, setSelectedProduct }: { product: any, setSelectedProduct: (p: any) => void }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-shadow duration-300 group flex flex-col h-full">
      <div className="relative aspect-square sm:aspect-w-1 sm:aspect-h-1 bg-gradient-to-tr from-black/5 to-transparent overflow-hidden shrink-0">
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10">
          <span className="bg-premium-black/90 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider py-1 px-2 sm:px-3 rounded-full shadow-sm">
            {product.name.includes('Pro') || product.name.includes('Ultra') || product.name.includes('Fold') ? 'Pro Series' : product.rating === 5 ? 'Top Rated' : 'New Release'}
          </span>
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-3 sm:p-5 flex flex-col flex-grow">
        <div className="text-[10px] sm:text-xs font-bold tracking-wider text-premium-gray/60 uppercase mb-1 sm:mb-2">{product.category}</div>
        <h3 className="text-sm sm:text-lg font-bold text-premium-black mb-1.5 sm:mb-2 line-clamp-2 sm:truncate leading-tight">{product.name}</h3>
        <div className="flex items-center mb-2 sm:mb-3 bg-black/5 w-fit px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md max-w-full">
          <span className="text-[9px] sm:text-[11px] font-bold text-premium-black/70 truncate">
            {Object.values(product.detailed_specs)[0] as string}
          </span>
        </div>
        
        <div className="mt-auto flex flex-col gap-2 sm:gap-3">
          <button 
            onClick={() => setSelectedProduct(product)}
            className="text-xs sm:text-sm font-bold text-premium-black hover:text-premium-gray transition-colors group/link w-fit flex items-center"
          >
            Details 
            <span className="ml-1 inline-block transition-transform group-hover/link:translate-x-1">→</span>
          </button>
          <a 
            href={`https://wa.me/233271292016?text=${encodeURIComponent(`Hi, I am interested in the ${product.name}. Is it available?`)}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-premium-black text-white text-center py-2 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl font-bold text-xs sm:text-base hover:bg-black/80 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 transition-all active:scale-[0.98]"
          >
            Shop
          </a>
        </div>
      </div>
    </div>
  );
};

export default function FeaturedProducts({ addToCart, selectedCategory, onClearFilter, searchQuery = '' }: FeaturedProps) {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const isAllCategory = selectedCategory === 'All' && !searchQuery;
  const showstoppers = isAllCategory ? filteredProducts.slice(0, 2) : [];
  const swipeTrack = isAllCategory ? filteredProducts.slice(2, 8) : [];
  const theGrid = isAllCategory ? filteredProducts.slice(8) : filteredProducts;

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
        
        {filteredProducts.length > 0 ? (
          <>
            {isAllCategory ? (
              <div className="flex flex-col gap-10 sm:gap-16">
                
                {/* 1. Showstoppers - Changed to 2 columns on mobile so they aren't massive */}
                {showstoppers.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 sm:gap-8">
                    {showstoppers.map(product => (
                      <div key={product.id} className="md:scale-[1.02] origin-top">
                        <ProductCard product={product} setSelectedProduct={setSelectedProduct} />
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
                            <ProductCard product={product} setSelectedProduct={setSelectedProduct} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. The Grid - Kept at 2 columns */}
                {theGrid.length > 0 && (
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <h3 className="text-lg sm:text-2xl font-bold text-premium-black">More Top Picks</h3>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                      {theGrid.map((product) => (
                        <ProductCard key={product.id} product={product} setSelectedProduct={setSelectedProduct} />
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                {theGrid.map((product) => (
                  <ProductCard key={product.id} product={product} setSelectedProduct={setSelectedProduct} />
                ))}
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
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="h-full w-full object-contain mix-blend-darken" />
                </div>

                <h3 className="text-xl font-bold text-premium-black mb-6">{selectedProduct.name}</h3>

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
                <a 
                  href={`https://wa.me/233271292016?text=${encodeURIComponent(`Hi, I am interested in the ${selectedProduct.name}. Is it available?`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-premium-black text-white text-center py-4 px-4 rounded-xl font-bold text-lg shadow-lg shadow-black/20 hover:bg-black/80 hover:-translate-y-0.5 transition-all"
                >
                  Order on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
