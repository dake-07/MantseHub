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


import iphoneAirBlueImg from '../assets/product images/apple-iphone-17-air-blue.png';
import iphone17ProMaxOrangeImg from '../assets/product images/iphone 17promax_orange.jpg';
import iphone17AirGoldImg from '../assets/product images/iphone-17-air-lightgold.webp';
import iphone17AirBlackImg from '../assets/product images/iphone-17-air-spaceblack.webp';
import iphone17AirWhiteImg from '../assets/product images/iphone-17-air-cloud-white.png';
import iphone17BlackImg from '../assets/product images/iphone-17-black.webp';
import iphone17LavenderImg from '../assets/product images/iphone-17-lavender.webp';
import iphone17MistblueImg from '../assets/product images/iphone-17-mistblue.webp';
import iphone17ProDeepblueImg from '../assets/product images/iphone-17-pro-deepblue.webp';
import iphone17ProSilverImg from '../assets/product images/iphone-17-pro-silver.webp';
import iphone17SageImg from '../assets/product images/iphone-17-sage.webp';
import iphone17WhiteImg from '../assets/product images/iphone-17-white.webp';
import iphone16eImg from '../assets/product images/iphone_16e.jpg';
import macbookAirMidnightImg from '../assets/product images/macbook-air-13inch-midnight.webp';
import macbookAirSkyblueImg from '../assets/product images/macbook-air-13inch-skyblue_.webp';
import macbookAirStarlightImg from '../assets/product images/macbook-air-13inch-starlight.webp';
import macbookNeoBlushImg from '../assets/product images/macbook-neo-blush.webp';
import macbookNeoCitrusImg from '../assets/product images/macbook-neo-citrus.webp';
import macbookNeoIndigoImg from '../assets/product images/macbook-neo-indigo.webp';
import macbookNeoSilverImg from '../assets/product images/macbook-neo-silver.webp';

const products = [
  {
    id: 1,
    name: "Samsung Galaxy Fold7",
    category: "Samsung",
    rating: 5,
    reviews: 124,
    price: 24000,
    image: fold7Img,
    detailed_specs: { display: "7.6-inch Foldable Dynamic AMOLED 2X", processor: "Snapdragon 8 Gen 5", camera: "50MP Triple Rear Camera", battery: "4400mAh with 45W Fast Charging" }
  },
  {
    id: 2,
    name: "Samsung Galaxy Z Tri-Fold",
    category: "Samsung",
    rating: 5,
    reviews: 89,
    price: 30000,
    image: zTriFoldImg,
    detailed_specs: { display: "10.2-inch Triple-Folding Screen", hinge: "Dual-Axis Elite Hinge", os: "Android", durability: "IPX8 Water Resistance" }
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    category: "Samsung",
    rating: 5,
    reviews: 342,
    price: 18000,
    image: s26UltraImg,
    detailed_specs: { display: "6.8-inch QHD+ 120Hz AMOLED", processor: "Snapdragon 8 Gen 3", camera: "200MP Main + 100x Space Zoom", build: "Titanium Frame" }
  },
  {
    id: 4,
    name: "Samsung Galaxy Watch 8",
    category: "SmartWatches",
    rating: 4,
    reviews: 210,
    price: 4500,
    image: watch8Img,
    variants: ["40mm", "44mm"],
    detailed_specs: { sensors: "BioActive Health Sensor Suite", battery: "Up to 80 hours", screen: "Sapphire Crystal Glass", os: "WearOS" }
  },
  {
    id: 8,
    name: "Samsung Galaxy A16",
    category: "Samsung",
    rating: 4,
    reviews: 42,
    price: 2500,
    image: a07Img,
    detailed_specs: { display: "6.5-inch Infinity-V Display", battery: "5000mAh Battery", storage: "Expandable via MicroSD" }
  },
  {
    id: 9,
    name: "Samsung Galaxy Tab S11 Ultra 5G",
    category: "Tablets",
    rating: 5,
    reviews: 156,
    price: 21000,
    image: tabS11UltraImg,
    detailed_specs: { display: "14.6-inch Dynamic AMOLED", processor: "Snapdragon 8 Gen 4", memory: "16GB RAM", storage: "1TB" }
  },
  {
    id: 11,
    name: "HP OmniBook Flip360",
    category: "Laptops",
    rating: 4,
    reviews: 78,
    price: 14500,
    image: hpFlipImg,
    detailed_specs: { processor: "Intel Core Ultra 7", memory: "16GB RAM", display: "14-inch OLED Touch", battery: "All-day Battery" }
  },
  {
    id: 12,
    name: "Beats Pill",
    category: "Accessories & More",
    rating: 5,
    reviews: 312,
    price: 2500,
    image: beatsPillImg,
    detailed_specs: { audio: "Room-filling Sound", battery: "24-hour Battery", connection: "Bluetooth 5.3", durability: "IP67 Dust & Water" }
  },
  {
    id: 13,
    name: "TCL QLED TV 98\"",
    category: "Televisions",
    rating: 5,
    reviews: 45,
    price: 45000,
    image: tclTvImg,
    detailed_specs: { display: "98-inch 4K QLED", refresh_rate: "144Hz VRR", audio: "Dolby Atmos 2.1.2", smart: "Google TV" }
  },
  {
    id: 14,
    name: "Samsung Galaxy S25+",
    category: "Samsung",
    rating: 5,
    reviews: 189,
    price: 14000,
    image: s25Img,
    variants: ["128GB", "512GB"],
    variant_prices: [14000, 16000],
    detailed_specs: { display: "6.7-inch Dynamic AMOLED", processor: "Snapdragon 8 Gen 4", camera: "50MP Main", ai: "Galaxy AI Features" }
  },
  {
    id: 15,
    name: "Samsung Galaxy S25 Ultra",
    category: "Samsung",
    rating: 5,
    reviews: 420,
    price: 19500,
    image: s25UltraImg,
    detailed_specs: { display: "6.8-inch Dynamic AMOLED", camera: "200MP + AI Zoom", processor: "Snapdragon 8 Gen 4", build: "Titanium Armor" }
  },
  {
    id: 19,
    name: "Samsung Galaxy A56 5G",
    category: "Samsung",
    rating: 4,
    reviews: 56,
    price: 4500,
    image: a07Img,
    detailed_specs: { display: "6.6-inch Super AMOLED", battery: "5000mAh Battery", camera: "50MP Main Camera", network: "5G Ready" }
  },
  {
    id: 21,
    name: "Samsung Tab A9",
    category: "Tablets",
    rating: 4,
    reviews: 94,
    price: 3500,
    image: tabA11Img,
    detailed_specs: { display: "8.7-inch LCD", storage: "64GB / 128GB", battery: "5100mAh Battery", audio: "Dual Speakers" }
  },
  
  // NEW MASSIVE CATALOG CONDENSED
  {
    id: 22,
    name: "iPhone 17 Air 256GB (eSIM Unlocked)",
    category: "iPhones",
    rating: 5,
    reviews: 178,
    price: 11700,
    image: iphone17AirBlackImg,
    color_variants: [
      { name: "Gold", hex: "#E6D5B8", image: iphone17AirGoldImg },
      { name: "Black", hex: "#2C2C2C", image: iphone17AirBlackImg },
      { name: "White", hex: "#F5F5F5", image: iphone17AirWhiteImg }
    ],
    detailed_specs: { storage: "256GB", network: "eSIM Unlocked", processor: "A19 Bionic Chip" }
  },
  {
    id: 23,
    name: "iPhone 17 Air 512GB (eSIM Unlocked)",
    category: "iPhones",
    rating: 5,
    reviews: 145,
    price: 13900,
    image: iphone17AirBlackImg,
    color_variants: [
      { name: "Gold", hex: "#E6D5B8", image: iphone17AirGoldImg },
      { name: "Black", hex: "#2C2C2C", image: iphone17AirBlackImg },
      { name: "Blue", hex: "#00008B", image: iphoneAirBlueImg }
    ],
    detailed_specs: { storage: "512GB", network: "eSIM Unlocked", processor: "A19 Bionic Chip" }
  },
  {
    id: 24,
    name: "iPhone 17 Pro 256GB (eSIM Unlocked)",
    category: "iPhones",
    rating: 5,
    reviews: 89,
    price: 14800,
    image: iphone17ProMaxOrangeImg,
    variants: ["Orange/Blue", "Silver"], 
    variant_prices: [14800, 15000],
    color_variants: [
      { name: "Orange", hex: "#FF7F50", image: iphone17ProMaxOrangeImg },
      { name: "Blue", hex: "#1E90FF", image: iphone17ProDeepblueImg },
      { name: "Silver", hex: "#C0C0C0", image: iphone17ProSilverImg }
    ],
    detailed_specs: { storage: "256GB", network: "eSIM Unlocked", processor: "A19 Pro Chip" }
  },
  {
    id: 25,
    name: "iPhone 17 Pro Max 256GB (eSIM Unlocked)",
    category: "iPhones",
    rating: 5,
    reviews: 130,
    price: 16100,
    image: iphone17ProMaxOrangeImg,
    variants: ["Orange/Blue", "Silver"],
    variant_prices: [16100, 16500],
    color_variants: [
      { name: "Orange", hex: "#FF7F50", image: iphone17ProMaxOrangeImg },
      { name: "Blue", hex: "#1E90FF", image: iphone17ProDeepblueImg },
      { name: "Silver", hex: "#C0C0C0", image: iphone17ProSilverImg }
    ],
    detailed_specs: { storage: "256GB", network: "eSIM Unlocked", processor: "A19 Pro Chip" }
  },
  {
    id: 26,
    name: "iPhone 17 Pro Max 512GB (eSIM Unlocked)",
    category: "iPhones",
    rating: 5,
    reviews: 95,
    price: 18900,
    image: iphone17ProMaxOrangeImg,
    detailed_specs: { storage: "512GB", network: "eSIM Unlocked", processor: "A19 Pro Chip" }
  },
  {
    id: 27,
    name: "iPhone 17 Pro Max 1TB (eSIM Unlocked)",
    category: "iPhones",
    rating: 5,
    reviews: 42,
    price: 19900,
    image: iphone17ProMaxOrangeImg,
    detailed_specs: { storage: "1TB", color: "Orange", network: "eSIM Unlocked", processor: "A19 Pro Chip" }
  },
  {
    id: 28,
    name: "iPhone 17 256GB (SIM+eSIM)",
    category: "iPhones",
    rating: 5,
    reviews: 65,
    price: 10800,
    image: iphone17BlackImg,
    color_variants: [
      { name: "Black", hex: "#2C2C2C", image: iphone17BlackImg },
      { name: "Lavender", hex: "#E6E6FA", image: iphone17LavenderImg },
      { name: "Mistblue", hex: "#B0E0E6", image: iphone17MistblueImg },
      { name: "Sage", hex: "#8A9A5B", image: iphone17SageImg },
      { name: "White", hex: "#F5F5F5", image: iphone17WhiteImg }
    ],
    detailed_specs: { storage: "256GB", network: "SIM + eSIM", processor: "A19 Chip" }
  },
  {
    id: 29,
    name: "iPhone 17 Pro 256GB (SIM+eSIM)",
    category: "iPhones",
    rating: 5,
    reviews: 78,
    price: 16500,
    image: iphone17ProDeepblueImg,
    color_variants: [
      { name: "Blue", hex: "#1E90FF", image: iphone17ProDeepblueImg },
      { name: "Orange", hex: "#FF7F50", image: iphone17ProMaxOrangeImg },
      { name: "Silver", hex: "#C0C0C0", image: iphone17ProSilverImg }
    ],
    detailed_specs: { storage: "256GB", network: "SIM + eSIM", processor: "A19 Pro Chip" }
  },
  {
    id: 30,
    name: "iPhone 17 Pro Max 256GB (SIM+eSIM)",
    category: "iPhones",
    rating: 5,
    reviews: 112,
    price: 17500,
    image: iphone17ProMaxOrangeImg,
    variants: ["Orange/Blue", "Silver"],
    variant_prices: [17500, 17800],
    color_variants: [
      { name: "Orange", hex: "#FF7F50", image: iphone17ProMaxOrangeImg },
      { name: "Blue", hex: "#1E90FF", image: iphone17ProDeepblueImg },
      { name: "Silver", hex: "#C0C0C0", image: iphone17ProSilverImg }
    ],
    detailed_specs: { storage: "256GB", network: "SIM + eSIM", processor: "A19 Pro Chip" }
  },
  {
    id: 31,
    name: "iPhone 17 Pro Max 512GB (SIM+eSIM)",
    category: "iPhones",
    rating: 5,
    reviews: 84,
    price: 20200,
    image: iphone17ProDeepblueImg,
    variants: ["Blue/Orange", "Silver"],
    variant_prices: [20200, 20500],
    color_variants: [
      { name: "Blue", hex: "#1E90FF", image: iphone17ProDeepblueImg },
      { name: "Orange", hex: "#FF7F50", image: iphone17ProMaxOrangeImg },
      { name: "Silver", hex: "#C0C0C0", image: iphone17ProSilverImg }
    ],
    detailed_specs: { storage: "512GB", network: "SIM + eSIM", processor: "A19 Pro Chip" }
  },
  {
    id: 32,
    name: "iPhone 17 Pro Max 1TB (SIM+eSIM)",
    category: "iPhones",
    rating: 5,
    reviews: 36,
    price: 23500,
    image: iphone17ProDeepblueImg,
    variants: ["Blue/Orange", "Silver"],
    variant_prices: [23500, 24200],
    color_variants: [
      { name: "Blue", hex: "#1E90FF", image: iphone17ProDeepblueImg },
      { name: "Orange", hex: "#FF7F50", image: iphone17ProMaxOrangeImg },
      { name: "Silver", hex: "#C0C0C0", image: iphone17ProSilverImg }
    ],
    detailed_specs: { storage: "1TB", network: "SIM + eSIM", processor: "A19 Pro Chip" }
  },
  {
    id: 33,
    name: "iPad 11th Gen 128GB WIFI",
    category: "Tablets",
    rating: 5,
    reviews: 40,
    price: 4800,
    image: ipadA16Img,
    variants: ["Blue/Silver", "Pink"],
    variant_prices: [4800, 4900],
    color_variants: [
      { name: "Blue", hex: "#1E90FF", image: ipadA16Img },
      { name: "Silver", hex: "#C0C0C0", image: ipadA16Img },
      { name: "Pink", hex: "#FFC0CB", image: ipadA16Img }
    ],
    detailed_specs: { display: "10.9-inch Liquid Retina", storage: "128GB", network: "WIFI" }
  },
  {
    id: 34,
    name: "iPad 11th Gen 128GB Cellular",
    category: "Tablets",
    rating: 5,
    reviews: 25,
    price: 6500,
    image: ipadA16Img,
    detailed_specs: { display: "10.9-inch Liquid Retina", color: "Pink", storage: "128GB", network: "Cellular" }
  },
  {
    id: 35,
    name: "Apple Pencil 2 Normal",
    category: "Accessories & More",
    rating: 5,
    reviews: 210,
    price: 1300,
    image: beatsPillImg,
    detailed_specs: { feature: "Pixel-perfect precision", compatibility: "Select iPads" }
  },
  {
    id: 36,
    name: "Apple Pencil 2 Type-C",
    category: "Accessories & More",
    rating: 5,
    reviews: 140,
    price: 1400,
    image: beatsPillImg,
    detailed_specs: { connection: "USB-C", latency: "Industry-leading low latency" }
  },
  {
    id: 37,
    name: "Apple Pencil Pro",
    category: "Accessories & More",
    rating: 5,
    reviews: 90,
    price: 1800,
    image: beatsPillImg,
    detailed_specs: { feature: "Advanced Gestures", latency: "Ultra-low latency" }
  },
  {
    id: 38,
    name: "13” Macbook NEO 8GB/256GB",
    category: "Laptops",
    rating: 5,
    reviews: 80,
    price: 9500,
    image: macbookNeoSilverImg,
    color_variants: [
      { name: "Blush", hex: "#DE5D83", image: macbookNeoBlushImg },
      { name: "Citrus", hex: "#E4D00A", image: macbookNeoCitrusImg },
      { name: "Indigo", hex: "#4B0082", image: macbookNeoIndigoImg },
      { name: "Silver", hex: "#C0C0C0", image: macbookNeoSilverImg }
    ],
    detailed_specs: { display: "13.6-inch Liquid Retina", memory: "8GB", storage: "256GB" }
  },
  {
    id: 39,
    name: "13” Macbook NEO 8GB/512GB",
    category: "Laptops",
    rating: 5,
    reviews: 65,
    price: 10700,
    image: macbookNeoSilverImg,
    color_variants: [
      { name: "Blush", hex: "#DE5D83", image: macbookNeoBlushImg },
      { name: "Citrus", hex: "#E4D00A", image: macbookNeoCitrusImg },
      { name: "Indigo", hex: "#4B0082", image: macbookNeoIndigoImg },
      { name: "Silver", hex: "#C0C0C0", image: macbookNeoSilverImg }
    ],
    detailed_specs: { display: "13.6-inch Liquid Retina", memory: "8GB", storage: "512GB" }
  },
  {
    id: 40,
    name: "13” M5 Macbook Air 16GB/512GB",
    category: "Laptops",
    rating: 5,
    reviews: 120,
    price: 14500,
    image: macbookAirMidnightImg,
    color_variants: [
      { name: "Midnight", hex: "#191970", image: macbookAirMidnightImg },
      { name: "Skyblue", hex: "#87CEEB", image: macbookAirSkyblueImg },
      { name: "Starlight", hex: "#F8F8FF", image: macbookAirStarlightImg }
    ],
    detailed_specs: { display: "13.6-inch Liquid Retina", processor: "Apple M5 Chip", storage: "512GB" }
  },
  {
    id: 41,
    name: "iPhone 16e 128GB (Physical Sim)",
    category: "iPhones",
    rating: 5,
    reviews: 0,
    price: 0,
    image: iphone16eImg,
    detailed_specs: { storage: "128GB", network: "Physical SIM", processor: "A18 Chip" }
  }
];


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
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
                  className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-black/20 shadow-sm transition-all duration-200 ${selectedColorIndex === idx ? 'ring-2 ring-premium-black ring-offset-2 scale-110' : 'hover:scale-110'}`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={`Select color ${color.name}`}
                />
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
            className="text-xs sm:text-sm font-bold text-premium-black hover:text-premium-gray transition-colors group/link w-fit flex items-center"
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
            className="w-full bg-premium-black text-white text-center py-2 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl font-bold text-xs sm:text-base hover:bg-black/80 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 transition-all active:scale-[0.98]"
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
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <h3 className="text-lg sm:text-2xl font-bold text-premium-black">More Top Picks</h3>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                      {theGrid.map((product) => (
                        <ProductCard key={product.id} product={product} setSelectedProduct={setSelectedProduct} setModalVariantIndex={setModalVariantIndex} addToCart={addToCart} />
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                {theGrid.map((product) => (
                  <ProductCard key={product.id} product={product} setSelectedProduct={setSelectedProduct} setModalVariantIndex={setModalVariantIndex} addToCart={addToCart} />
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
                  <img src={selectedProduct.displayImage || selectedProduct.image} alt={selectedProduct.name} className="h-full w-full object-contain mix-blend-darken" />
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
