import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import laptopImg from '../assets/macbook_placeholder (1).png';
import consoleImg from '../assets/ps5_placeholder (1).png';

const avatars = [
  'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?w=80&h=80&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=80&h=80&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=80&h=80&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=80&h=80&fit=crop&crop=face',
];

export default function Hero() {
  return (
    <div className="relative bg-premium-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8 md:items-center pt-4 md:pt-0 pb-12 md:pb-20 lg:pb-28 relative z-10">
          
          {/* Text Content */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left z-30 w-full max-w-xl mx-auto md:mx-0 mt-0 gap-5">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-extrabold text-premium-black tracking-tight">
              <span className="block mb-2 sm:mb-1">Unbox the Future of</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-premium-black to-premium-gray">Technology</span>
            </h1>
            
            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-premium-gray font-medium">
              Get your hands on trending gadgets, premium smartphones, gaming consoles, and must-have electronics—shipped fast, priced right.
            </p>

            {/* Social Proof with Stacked Avatars */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-3">
              <div className="flex items-center">
                <div className="flex -space-x-2.5">
                  {avatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Happy customer ${i + 1}`}
                      className="w-9 h-9 rounded-full border-2 border-premium-bg object-cover"
                    />
                  ))}
                </div>
                <div className="flex items-center ml-3 space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-premium-gold fill-current" />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-premium-black font-bold text-sm tracking-tight">4.9/5</span>
                <span className="text-black/10">·</span>
                <span className="text-premium-gray font-semibold text-sm tracking-tight">Trusted by 12,000+ customers</span>
              </div>
            </div>

            {/* Premium CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-1">
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold rounded-full text-white bg-premium-black hover:bg-black/90 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 w-full sm:w-auto whitespace-nowrap group"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold rounded-full text-premium-black bg-white/40 backdrop-blur-md border border-black/10 hover:border-black/30 hover:bg-white/60 hover:shadow-md transition-all duration-300 w-full sm:w-auto whitespace-nowrap shadow-sm"
              >
                View Today's Deals
              </a>
            </div>
          </div>

          {/* Right Column Layout: Layered Gadget Composition */}
          <div className="relative w-full mt-0 flex flex-col items-center">
            <div className="flex justify-center relative w-full pt-0 overflow-visible">
              
              {/* Complex Studio Lighting (Multiple Orbs) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[600px] md:h-[600px] bg-gradient-to-tr from-premium-gold/20 via-transparent to-transparent rounded-full blur-[80px] animate-pulse z-0 pointer-events-none"></div>
              <div className="absolute top-[20%] right-[10%] w-[150px] h-[150px] bg-blue-400/10 rounded-full blur-[60px] animate-pulse z-0 pointer-events-none"></div>
              
              <div className="relative w-full max-w-[280px] sm:max-w-md lg:max-w-lg xl:max-w-xl lg:scale-110 xl:scale-125 aspect-square sm:aspect-[4/3] z-10 origin-center transition-transform duration-700 overflow-visible group">
                
                {/* Layer 1: Laptop (Back) */}
                <motion.div
                  className="absolute w-[80%] sm:w-[85%] lg:w-[88%] top-[2%] sm:top-[5%] left-0 z-0"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1], delay: 0 }}
                >
                  <motion.img 
                    src={laptopImg} 
                    alt="Premium Laptop" 
                    className="w-full h-auto drop-shadow-2xl object-contain relative group-hover:-translate-y-2 group-hover:rotate-1 transition-transform duration-700 ease-out"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: 0 }}
                  />
                </motion.div>
                
                {/* Layer 2: Gaming Console (Middle) */}
                <motion.div
                  className="absolute w-[45%] sm:w-[50%] lg:w-[55%] bottom-[12%] sm:bottom-[5%] right-0 sm:-right-[5%] z-10"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1], delay: 0.15 }}
                >
                  <motion.img 
                    src={consoleImg} 
                    alt="Gaming Console" 
                    className="w-full h-auto drop-shadow-2xl object-contain relative group-hover:translate-x-2 group-hover:-rotate-2 transition-transform duration-700 ease-out"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 0.2 }}
                  />
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
