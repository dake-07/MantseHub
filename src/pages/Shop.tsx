import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FeaturedProducts from '../components/FeaturedProducts';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';
  const queryParam = searchParams.get('q') || '';

  const handleClearFilter = () => {
    setSearchParams(prev => {
      prev.delete('category');
      return prev;
    });
  };

  const handleClearSearch = () => {
    setSearchParams(prev => {
      prev.delete('q');
      return prev;
    });
  };

  return (
    <div className="pt-8">
      <FeaturedProducts 
        selectedCategory={categoryParam} 
        searchQuery={queryParam} 
        onClearFilter={handleClearFilter}
        onClearSearch={handleClearSearch}
      />
    </div>
  );
}
