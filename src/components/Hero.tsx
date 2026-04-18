import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="relative bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Adjusted top padding strictly to max exactly 40px (pt-10) below navbar */}
        <div className="grid grid-cols-1 items-center pt-10 md:pt-16 pb-20 lg:pb-28 relative z-10">
          
          {/* Text Content */}
          <div className="flex flex-col items-center text-center z-30 w-full max-w-3xl mx-auto">
            {/* Headline constrained: max 52px, single line forced to prevent 'of' orphan */}
            <h1 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] leading-[1.1] font-extrabold text-gray-900 tracking-tight">
              <span className="block whitespace-nowrap mb-1">Unbox the Future of</span>
              <span className="block text-blue-600">Technology</span>
            </h1>
            
            <p className="mt-5 text-[16px] sm:text-[18px] leading-relaxed text-gray-500">
              Welcome to Mantse Electronics Hub. Get your hands on trending gadgets, premium smartphones, gaming consoles, and must-have electronics—shipped fast, priced right.
            </p>

            {/* Social Proof */}
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="flex items-center gap-1.5 sm:ml-2">
                <span className="text-gray-900 font-bold">4.9/5</span>
                <span className="text-gray-300 hidden sm:inline">•</span>
                <span className="text-gray-600 font-medium">Trusted by 12,000+ customers</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors w-full sm:w-auto whitespace-nowrap shadow-lg shadow-blue-600/30"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold rounded-full text-gray-900 bg-transparent border-2 border-gray-200 hover:border-gray-900 hover:bg-white transition-colors w-full sm:w-auto whitespace-nowrap"
              >
                View Today's Deals
              </a>
            </div>
          </div>

          {/* Hero text takes full width now */}

        </div>
      </div>
    </div>
  );
}
