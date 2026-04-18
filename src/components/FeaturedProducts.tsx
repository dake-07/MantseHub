import { Star, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: 1199.00,
    originalPrice: 1299.00,
    rating: 5,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'iPhones'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    price: 1299.00,
    originalPrice: 1399.00,
    rating: 5,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Samsung'
  },
  {
    id: 3,
    name: 'PlayStation 5 Console',
    price: 499.00,
    originalPrice: 549.00,
    rating: 5,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Gaming Consoles'
  },
  {
    id: 4,
    name: 'MacBook Pro 16"',
    price: 2499.00,
    originalPrice: 2699.00,
    rating: 5,
    reviews: 56,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Laptops'
  },
  {
    id: 5,
    name: 'Apple Watch Series 9',
    price: 399.00,
    originalPrice: 429.00,
    rating: 4,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'SmartWatches'
  },
  {
    id: 6,
    name: 'Sony WH-1000XM5',
    price: 348.00,
    originalPrice: 398.00,
    rating: 5,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Accessories & More'
  },
  {
    id: 7,
    name: 'iPad Pro 12.9"',
    price: 1099.00,
    originalPrice: 1199.00,
    rating: 5,
    reviews: 94,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Tablets'
  },
  {
    id: 8,
    name: 'LG OLED 65" 4K TV',
    price: 1799.00,
    originalPrice: 1999.00,
    rating: 5,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Televisions'
  }
];

export default function FeaturedProducts({ addToCart }: { addToCart: () => void }) {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Featured Products</h2>
          <p className="mt-4 text-lg text-gray-500">Top picks from Mantse Electronic Hub.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                {product.originalPrice > product.price && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    Sale
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{product.name}</h3>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                  <span className="text-xs text-gray-500 ml-2">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
                    )}
                  </div>
                  <button 
                    onClick={addToCart}
                    className="bg-black text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                    aria-label="Add to cart"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
