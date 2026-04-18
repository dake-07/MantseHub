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

  const addToCart = () => {
    setCartCount(prev => prev + 1);
    alert('Added to cart!');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts addToCart={addToCart} />
        <Deals />
        <Brands />
      </main>
      <Footer />
    </div>
  );
}
