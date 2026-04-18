import { ShoppingCart, Search, Menu, User, X, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ cartCount }: { cartCount: number }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      {/* Light-colored announcement banner */}
      <div className="bg-slate-50 border-b border-gray-100 text-gray-800 text-center text-xs sm:text-sm py-2.5 font-medium px-4">
        <span className="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold mr-3 tracking-wider uppercase">SALE</span>
        Summer Sale For All Electronics And Free Express Delivery - <span className="font-bold text-blue-600">OFF 50%!</span>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center text-lg sm:text-xl md:text-2xl font-extrabold tracking-tighter">
              <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-1.5 flex-shrink-0" fill="currentColor" />
              MANTSE<span className="text-blue-600 mx-1">ELECTRONICS</span>HUB
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
            <a href="#categories" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Categories</a>
            <a href="#products" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Shop</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <input type="text" placeholder="Search products..." className="bg-gray-50 border border-gray-200 rounded-full py-2 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white w-48 lg:w-64 transition-all" />
              <Search className="absolute right-4 top-2 h-4 w-4 text-gray-400" />
            </div>
            <button className="text-gray-600 hover:text-blue-600 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-blue-600 relative transition-colors" onClick={() => alert('Cart opened!')}>
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="flex md:hidden items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-600 relative transition-colors" onClick={() => alert('Cart opened!')}>
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-blue-600 transition-colors">
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-4 space-y-1 shadow-lg absolute w-full">
          <a href="#" className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg">Home</a>
          <a href="#categories" className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg">Categories</a>
          <a href="#products" className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg">Shop</a>
          <a href="#contact" className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg">Contact</a>
          <div className="mt-4 relative px-2">
            <input type="text" placeholder="Search..." className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white" />
            <Search className="absolute right-5 top-3 h-4 w-4 text-gray-400" />
          </div>
        </div>
      )}
    </nav>
  );
}
