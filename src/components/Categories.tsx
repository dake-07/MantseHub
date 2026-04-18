const categories = [
  { name: 'iPhones', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'Samsung', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'Tablets', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'Laptops', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'Gaming Consoles', image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'Handheld Consoles', image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'Televisions', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'Speakers', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'SmartWatches', image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'Accessories & More', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
];

export default function Categories() {
  return (
    <section id="categories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Product Categories</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((category) => (
            <div 
              key={category.name} 
              className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-[4/5] bg-gray-100" 
              onClick={() => alert(`Viewing ${category.name}`)}
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center px-3">
                <div className="bg-white rounded-full py-2 px-5 shadow-sm max-w-full">
                  <h3 className="text-sm font-medium text-gray-900 truncate">{category.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
