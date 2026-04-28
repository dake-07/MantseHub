import { ArrowRight } from 'lucide-react';

export default function Deals() {
  return (
    <section className="py-10 md:py-16 bg-premium-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-premium-black">Deals Of The Day</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="relative rounded-2xl overflow-hidden bg-black/5 group">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Smart Watches" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative z-10 p-8 h-72 md:h-80 flex flex-col justify-center">
              <div className="text-xs font-bold tracking-wider text-white/70 uppercase mb-2">Today's Best Deal</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">All Smart Watches</h3>
              <div className="text-base text-white/90 mb-6">Get the best price today</div>
              <div>
                <a href="#products" className="inline-flex items-center px-6 py-3 text-sm font-bold rounded-full text-premium-black bg-white hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg">
                  Shop now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden bg-black/5 group">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Earbuds" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative z-10 p-8 h-72 md:h-80 flex flex-col justify-center">
              <div className="text-xs font-bold tracking-wider text-white/70 uppercase mb-2">Today's Best Deal</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">All Headphones</h3>
              <div className="text-base text-white/90 mb-6">Get the best price today</div>
              <div>
                <a href="#products" className="inline-flex items-center px-6 py-3 text-sm font-bold rounded-full text-premium-black bg-white hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg">
                  Shop now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

