export default function Brands() {
  const brands = [
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
    { name: 'Sony', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Sony_logo.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'LG', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg' },
    { name: 'Bose', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Bose_logo.svg' },
  ];

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 md:mb-0">Shop By Brands</h2>
          <a href="#products" className="text-blue-600 hover:text-blue-800 font-medium">View All Brands &rarr;</a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
          {brands.map((brand) => (
            <div key={brand.name} className="w-24 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
