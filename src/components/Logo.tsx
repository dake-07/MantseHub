import React from 'react';
import logoUrl from '../assets/logo_transparent.png';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`flex items-center group transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] ${className}`}>
      {/* The Logo Graphic (Image Mask) */}
      <div 
        className="bg-premium-gold mr-1.5 sm:mr-2 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10"
        style={{
          maskImage: `url(${logoUrl})`,
          WebkitMaskImage: `url(${logoUrl})`,
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
        aria-hidden="true"
      />
      
      {/* The Restored Text Layout */}
      <div className="flex flex-col sm:flex-row sm:items-center text-[13px] min-[375px]:text-[14px] leading-[1.1] sm:leading-tight sm:text-xl lg:text-2xl font-extrabold tracking-tighter justify-center">
        <span className="text-premium-black">MANTSE</span>
        <div className="flex items-center">
          <span className="text-premium-gray font-normal sm:mx-1">ELECTRONICS</span>
          <span className="text-premium-black ml-1 sm:ml-0">HUB</span>
        </div>
      </div>
    </a>
  );
}
