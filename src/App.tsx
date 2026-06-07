/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Showcase from './components/Showcase';
import Brands from './components/Brands';
import Footer from './components/Footer';

interface CartItem {
  product: any;
  quantity: number;
}

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: any) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
    // Auto-open the cart drawer to prompt checkout immediately
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.product.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.product.id !== id));
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const generateWhatsAppLink = () => {
    let text = `Hello Mantse Electronics Hub! 👋\nI would like to place an order for the following items:\n\n`;
    cartItems.forEach(item => {
      text += `${item.quantity}x ${item.product.name} - GH₵ ${item.product.price.toLocaleString()}\n`;
    });
    text += `\n*Estimated Total: GH₵ ${totalCartPrice.toLocaleString()}*\n\nAre these items currently in stock, and how do we proceed with payment/delivery?`;
    return `https://wa.me/233271292016?text=${encodeURIComponent(text)}`;
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

  const handleSearchSubmit = () => {
    if (selectedCategory !== 'All') {
      setSelectedCategory('All');
    }
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
    <div className="min-h-screen bg-premium-bg font-sans text-premium-black relative overflow-x-hidden">
      <Navbar 
        cartCount={totalCartCount} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onCartClick={() => setIsCartOpen(true)}
        onSearchSubmit={handleSearchSubmit}
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
        <Showcase onProductSelect={(query) => {
          setSearchQuery(query);
          setSelectedCategory('All');
          const element = document.getElementById('products');
          if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            window.scrollTo({
              top: (elementRect - bodyRect) - offset,
              behavior: 'smooth'
            });
          }
        }} />
        <Brands onBrandClick={(brand) => {
          setSearchQuery(brand);
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
        }} />
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
            
            <div className="flex-1 overflow-y-auto p-6 flex flex-col">
              {cartItems.length === 0 ? (
                <div className="text-center m-auto">
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
                <div className="flex flex-col h-full">
                  <div className="flex-1 overflow-y-auto pr-2 space-y-4 mb-4">
                    {cartItems.map((item) => (
                      <div key={item.product.id} className="flex gap-4 p-4 bg-white rounded-2xl border border-black/5 shadow-sm relative group/cartitem">
                        <button 
                          onClick={() => removeFromCart(item.product.id)}
                          className="absolute top-2 right-2 text-premium-gray/50 hover:text-red-500 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>
                        <div className="w-20 h-20 bg-black/5 rounded-xl flex items-center justify-center p-2 shrink-0">
                          <img src={item.product.image} alt={item.product.name} className="max-w-full max-h-full object-contain mix-blend-darken" />
                        </div>
                        <div className="flex flex-col justify-between flex-1 py-1">
                          <div className="pr-6">
                            <h4 className="text-sm font-bold text-premium-black line-clamp-1">{item.product.name}</h4>
                            <div className="text-sm font-black text-premium-gold mt-1">GH₵ {item.product.price.toLocaleString()}</div>
                          </div>
                          <div className="flex items-center gap-3 mt-2">
                            <div className="flex items-center bg-black/5 rounded-full border border-black/10">
                              <button onClick={() => updateQuantity(item.product.id, -1)} className="w-8 h-8 flex items-center justify-center text-premium-black font-bold hover:bg-black/5 rounded-l-full transition-colors">-</button>
                              <span className="w-6 text-center text-sm font-bold">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.product.id, 1)} className="w-8 h-8 flex items-center justify-center text-premium-black font-bold hover:bg-black/5 rounded-r-full transition-colors">+</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-black/10 mt-auto shrink-0">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg font-bold text-premium-gray">Estimated Total</span>
                      <span className="text-2xl font-black text-premium-black">GH₵ {totalCartPrice.toLocaleString()}</span>
                    </div>
                    <a 
                      href={generateWhatsAppLink()}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full bg-premium-black text-white text-center py-4 px-4 rounded-xl font-bold text-lg shadow-lg shadow-black/20 hover:bg-black/80 hover:-translate-y-0.5 transition-all"
                    >
                      Checkout via WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
