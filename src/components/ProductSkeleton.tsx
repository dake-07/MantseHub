import React from 'react';
import { motion } from 'motion/react';

export default function ProductSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden flex flex-col h-full animate-pulse">
      {/* Image Skeleton */}
      <div className="relative aspect-square sm:aspect-w-1 sm:aspect-h-1 bg-black/5 overflow-hidden shrink-0">
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10">
          <div className="bg-black/10 w-16 sm:w-20 h-4 sm:h-5 rounded-full" />
        </div>
      </div>
      
      {/* Content Skeleton */}
      <div className="p-3 sm:p-5 flex flex-col flex-grow">
        {/* Category */}
        <div className="bg-black/10 w-24 h-3 sm:h-4 rounded-md mb-2 sm:mb-3" />
        
        {/* Title */}
        <div className="bg-black/10 w-full h-5 sm:h-6 rounded-md mb-2" />
        <div className="bg-black/10 w-2/3 h-5 sm:h-6 rounded-md mb-3 sm:mb-4" />
        
        {/* Specs / Variants */}
        <div className="flex gap-2 mb-3 sm:mb-4">
          <div className="bg-black/5 w-12 h-4 sm:h-5 rounded-md" />
          <div className="bg-black/5 w-12 h-4 sm:h-5 rounded-md" />
        </div>
        
        <div className="mt-auto pt-3 sm:pt-4 border-t border-black/5 flex items-center justify-between">
          <div className="bg-black/10 w-20 h-6 sm:h-7 rounded-md" />
          <div className="bg-black/5 w-8 sm:w-10 h-8 sm:h-10 rounded-full" />
        </div>
      </div>
    </div>
  );
}
