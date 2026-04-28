/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Deals from './components/Deals';
import Brands from './components/Brands';
import Footer from './components/Footer';

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    const element = document.getElementById('products');
    if (element) {
      const offset = 80; // approximate navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-premium-bg font-sans text-premium-black relative">
      <Navbar 
        cartCount={cartCount} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onCartClick={() => setIsCartOpen(true)}
      />
      <main>
        <Hero />
        <Categories onSelectCategory={handleSelectCategory} />
        <FeaturedProducts 
          addToCart={addToCart} 
          selectedCategory={selectedCategory} 
          onClearFilter={() => setSelectedCategory('All')} 
          searchQuery={searchQuery}
        />
        <Deals />
        <Brands />
      </main>
      <Footer />

      {/* Simple Cart Drawer */}
      {isCartOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-full sm:max-w-md bg-premium-bg shadow-2xl z-50 flex flex-col transform transition-transform duration-300">
            <div className="flex items-center justify-between p-6 pb-4 shrink-0 border-b border-black/5">
              <h2 className="text-2xl font-black text-premium-black">Your Cart</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center hover:bg-black/5 rounded-full transition-colors -mr-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-premium-gray"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center justify-center">
              {cartCount === 0 ? (
                <div className="text-center">
                  <div className="w-20 h-20 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-premium-gray"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                  </div>
                  <h3 className="text-xl font-bold text-premium-black mb-2">Your cart is empty</h3>
                  <p className="text-premium-gray">Looks like you haven't added any products yet.</p>
                  <button 
                    onClick={() => {
                      setIsCartOpen(false);
                      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-6 bg-premium-black text-white px-8 py-3 rounded-full font-bold hover:bg-black/80 transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="text-center w-full">
                  <h3 className="text-xl font-bold text-premium-black mb-2">You have {cartCount} items</h3>
                  <p className="text-premium-gray mb-8">Ready to complete your order?</p>
                  <a 
                    href={`https://wa.me/233271292016?text=${encodeURIComponent(`Hi! I have ${cartCount} items in my cart and I'd like to checkout.`)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-premium-black text-white text-center py-4 px-4 rounded-xl font-bold text-lg shadow-lg shadow-black/20 hover:bg-black/80 hover:-translate-y-0.5 transition-all"
                  >
                    Checkout via WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
