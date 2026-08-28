import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Showcase from '../components/Showcase';
import Brands from '../components/Brands';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleSelectCategory = (category: string) => {
    navigate(`/shop?category=${encodeURIComponent(category)}`);
  };

  const handleProductSelect = (query: string) => {
    navigate(`/shop?q=${encodeURIComponent(query)}`);
  };

  const handleBrandClick = (brand: string) => {
    navigate(`/shop?q=${encodeURIComponent(brand)}`);
  };

  return (
    <main>
      <Hero />
      <Categories onSelectCategory={handleSelectCategory} />
      {/* We are removing FeaturedProducts from Home as per the plan, 
          or keeping a smaller version if needed. But the plan said Home gets Hero, Categories, Showcase, Brands. */}
      <Showcase onProductSelect={handleProductSelect} />
      <Brands onBrandClick={handleBrandClick} />
    </main>
  );
}
