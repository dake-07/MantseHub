const categories = [
  { name: 'iPhones', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'Samsung', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'Google', image: 'https://images.unsplash.com/photo-1635870723802-e88d76ae324e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'Tablets', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'Laptops', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'Gaming Consoles', image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'Handheld Consoles', image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'Televisions', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'Speakers', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'SmartWatches', image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'Accessories & More', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
];

interface CategoriesProps {
  onSelectCategory: (category: string) => void;
}

export default function Categories({ onSelectCategory }: CategoriesProps) {
  return (
    <section id="categories" className="py-10 md:py-16 bg-premium-bg scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-premium-black tracking-tight">Product Categories</h2>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar gap-4 sm:gap-6 md:grid md:grid-cols-4 lg:grid-cols-5 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 will-change-scroll">
          {categories.map((category) => (
            <div 
              key={category.name} 
              className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-[4/5] bg-white/95 border border-black/5 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 flex-shrink-0 w-40 sm:w-48 md:w-auto will-change-transform" 
              onClick={() => onSelectCategory(category.name)}
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center px-3">
                <div className="bg-white/95 rounded-full py-2 px-5 shadow-sm max-w-full border border-black/5">
                  <h3 className="text-sm font-medium text-premium-black truncate">{category.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
