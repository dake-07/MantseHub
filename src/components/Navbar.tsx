import { ShoppingCart, Search, Menu, User, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

export default function Navbar({ cartCount, searchQuery, setSearchQuery, onCartClick }: { cartCount: number, searchQuery: string, setSearchQuery: (query: string) => void, onCartClick: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <>
      {/* Minimalist Announcement Banner */}
      <div className="bg-premium-black text-white/90 text-center text-xs sm:text-sm py-2.5 font-medium px-4 tracking-wide w-full relative z-40 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
        <span>Complimentary premium delivery nationwide on all flagship devices.</span>
        <a href="#products" className="font-bold text-premium-gold hover:text-white transition-colors inline-flex items-center">
          Shop Flagships <span className="ml-1 text-lg leading-none">&rarr;</span>
        </a>
      </div>
      
      <nav className="sticky top-4 z-50 mx-4 md:mx-auto max-w-7xl transition-all duration-300 mt-4 bg-white/70 backdrop-blur-xl border border-white/20 shadow-xl shadow-black/5 rounded-full">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:h-20 items-center">
            <div className="flex items-center min-w-0 mr-1">
              <Logo />
            </div>
            
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              {['Home', 'Categories', 'Shop', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={item === 'Home' ? '#' : item === 'Shop' ? '#products' : `#${item.toLowerCase()}`} 
                  className="relative group px-4 py-2 text-sm font-bold text-premium-gray transition-all duration-300"
                >
                  <span className="relative z-10 group-hover:text-premium-black transition-colors">{item}</span>
                  <span className="absolute inset-0 bg-black/5 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 rounded-full transition-all duration-300 ease-out"></span>
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/50 backdrop-blur-md border border-black/10 shadow-inner rounded-full py-2 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-premium-gold/50 focus:border-premium-gold focus:bg-white text-premium-black placeholder:text-premium-gray w-48 lg:w-64 transition-all" 
                />
                <Search className="absolute right-4 top-2 h-4 w-4 text-premium-gray" />
              </div>
              <button className="text-premium-gray hover:text-premium-black transition-colors">
                <User className="h-5 w-5" />
              </button>
              <button className="text-premium-gray hover:text-premium-black relative transition-colors" onClick={onCartClick}>
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-premium-gold text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            <div className="flex md:hidden items-center space-x-0.5 -mr-2">
              <button 
                onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                className="text-premium-gray hover:text-premium-black transition-colors p-1.5 sm:p-2 flex items-center justify-center rounded-full hover:bg-black/5"
              >
                <Search className="h-5 w-5" />
              </button>
              <button className="text-premium-gray hover:text-premium-black relative transition-colors p-1.5 sm:p-2 flex items-center justify-center rounded-full hover:bg-black/5" onClick={onCartClick}>
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-premium-gold text-white text-[9px] font-bold rounded-full h-3.5 w-3.5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-premium-gray hover:text-premium-black transition-colors p-1.5 sm:p-2 flex items-center justify-center rounded-full hover:bg-black/5">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isMobileSearchOpen && (
          <div className="md:hidden px-4 pb-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/50 backdrop-blur-md border border-black/10 shadow-inner rounded-full py-3 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-premium-gold/50 focus:border-premium-gold focus:bg-white text-premium-black placeholder:text-premium-gray transition-all" 
                autoFocus 
              />
              <Search className="absolute right-4 top-3 h-5 w-5 text-premium-gray" />
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-3xl border border-black/10 px-4 pt-2 pb-4 space-y-1 shadow-2xl absolute w-full left-0 z-40 rounded-[2rem] mt-4">
            <a href="#" className="block px-3 py-3 text-base font-medium text-premium-gray hover:text-premium-black hover:bg-black/5 rounded-xl transition-colors">Home</a>
            <a href="#categories" className="block px-3 py-3 text-base font-medium text-premium-gray hover:text-premium-black hover:bg-black/5 rounded-xl transition-colors">Categories</a>
            <a href="#products" className="block px-3 py-3 text-base font-medium text-premium-gray hover:text-premium-black hover:bg-black/5 rounded-xl transition-colors">Shop</a>
            <a href="#contact" className="block px-3 py-3 text-base font-medium text-premium-gray hover:text-premium-black hover:bg-black/5 rounded-xl transition-colors">Contact</a>
          </div>
        )}
      </nav>
    </>
  );
}
