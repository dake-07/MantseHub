export default function Brands({ onBrandClick }: { onBrandClick?: (brand: string) => void }) {
  const brands = [
    { name: 'Apple', logo: 'https://cdn.simpleicons.org/apple' },
    { name: 'Samsung', logo: 'https://cdn.simpleicons.org/samsung' },
    { name: 'Google', logo: 'https://cdn.simpleicons.org/google' },
    { name: 'HP', logo: 'https://cdn.simpleicons.org/hp' },
    { name: 'Beats', logo: 'https://cdn.simpleicons.org/beats' },
    { name: 'TCL', logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40"><text x="50" y="32" font-family="Arial, sans-serif" font-weight="900" font-size="32" text-anchor="middle" fill="%23E51937">TCL</text></svg>' },
    { name: 'Sony', logo: 'https://cdn.simpleicons.org/sony' },
  ];

  return (
    <section className="py-10 md:py-16 bg-premium-bg border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-extrabold text-premium-black mb-4 md:mb-0">Shop By Brands</h2>
          <button onClick={() => onBrandClick && onBrandClick('')} className="text-sm font-bold text-premium-gray hover:text-premium-black transition-colors">View All Brands &rarr;</button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center mt-8">
          {brands.map((brand) => (
            <div key={brand.name} onClick={() => onBrandClick && onBrandClick(brand.name)} className="w-full py-6 flex items-center justify-center px-4 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 cursor-pointer">
              <img src={brand.logo} alt={brand.name} className="max-h-12 md:max-h-14 lg:max-h-16 max-w-[80%] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

