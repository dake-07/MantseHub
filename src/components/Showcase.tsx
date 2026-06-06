import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import iphoneProImg from '../assets/products/iphone_17_pro_max_1776976341649.png';
import fold7Img from '../assets/product images/samsung galaxy fold 7.png';
import macbookImg from '../assets/product images/macbook-neo-silver.webp';
import watch8Img from '../assets/products/samsung_galaxy_watch_8_1776976282015.png';

export default function Showcase() {
  return (
    <section className="py-12 md:py-24 bg-premium-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-premium-black tracking-tight">The Premium Showcase</h2>
          <p className="mt-4 text-base sm:text-lg text-premium-gray max-w-2xl mx-auto">Experience the absolute peak of innovation. Uncompromised performance, stunning design.</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[320px] md:auto-rows-[380px]">
          
          {/* Tile 1: Hero (Span 2 cols, 2 rows) - iPhone 17 Pro */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden bg-[#0C0A09] group cursor-pointer shadow-2xl shadow-black/10"
            onClick={() => {
              const el = document.getElementById('products');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none"></div>
              <img 
                src={iphoneProImg} 
                alt="iPhone 17 Pro Max" 
                className="w-[120%] h-[120%] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-lighten opacity-80"
              />
            </div>
            <div className="relative z-20 p-8 md:p-12 h-full flex flex-col justify-end">
              <div className="inline-flex items-center space-x-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-white tracking-widest uppercase border border-white/20">A19 Pro Chip</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">iPhone 17 Pro Max</h3>
              <p className="text-lg md:text-xl text-white/70 mb-8 max-w-sm">Titanium built. The ultimate powerhouse.</p>
              <div>
                <button className="inline-flex items-center text-sm font-bold text-white hover:text-premium-gold transition-colors">
                  Explore <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Tile 2: Medium (Span 2 cols, 1 row) - Samsung Galaxy Fold 7 */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:col-span-2 md:row-span-1 relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#FAFAF9] to-[#E7E5E4] group cursor-pointer border border-black/5"
            onClick={() => {
              const el = document.getElementById('products');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="absolute inset-0 z-0 flex items-center justify-end pr-8 md:pr-16">
              <img 
                src={fold7Img} 
                alt="Galaxy Fold 7" 
                className="h-[120%] md:h-[140%] w-auto object-contain group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 ease-out drop-shadow-2xl translate-x-12 md:translate-x-0"
              />
            </div>
            <div className="relative z-20 p-8 md:p-10 h-full flex flex-col justify-center w-[70%]">
              <h3 className="text-3xl md:text-4xl font-extrabold text-premium-black mb-3 tracking-tight">Galaxy Z Fold7</h3>
              <p className="text-premium-gray mb-8 text-sm md:text-base leading-relaxed">Unfold your world. PC-like power in your pocket.</p>
              <div>
                <button className="inline-flex items-center px-6 py-3 bg-premium-black text-white text-sm font-bold rounded-full hover:bg-black/80 transition-colors shadow-xl shadow-black/10 hover:-translate-y-0.5 active:scale-95">
                  Shop Foldables
                </button>
              </div>
            </div>
          </motion.div>

          {/* Tile 3: Small (Span 1 col, 1 row) - MacBook Neo */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:col-span-1 md:row-span-1 relative rounded-[2rem] overflow-hidden bg-white group cursor-pointer border border-black/5 flex flex-col"
            onClick={() => {
              const el = document.getElementById('products');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="relative z-20 p-8 pt-10 flex flex-col justify-start text-center shrink-0">
              <h3 className="text-2xl font-extrabold text-premium-black tracking-tight mb-1">MacBook NEO</h3>
              <p className="text-premium-gold text-xs font-bold uppercase tracking-widest">M5 Era</p>
            </div>
            <div className="relative flex-grow flex items-end justify-center pb-0">
              <img 
                src={macbookImg} 
                alt="MacBook Neo" 
                className="w-[90%] h-auto object-contain group-hover:-translate-y-4 transition-transform duration-700 ease-out origin-bottom translate-y-4"
              />
            </div>
          </motion.div>

          {/* Tile 4: Small (Span 1 col, 1 row) - Galaxy Watch */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:col-span-1 md:row-span-1 relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#1C1917] to-[#292524] group cursor-pointer"
            onClick={() => {
              const el = document.getElementById('products');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img 
                src={watch8Img} 
                alt="Galaxy Watch 8" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-70 mix-blend-screen"
              />
            </div>
            <div className="relative z-20 p-8 h-full flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 self-end">
                <ArrowRight className="w-5 h-5 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight mb-1">Galaxy Watch 8</h3>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Pro Health</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
