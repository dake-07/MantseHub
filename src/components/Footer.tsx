import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <a href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
              MANTSE<span className="text-blue-600">HUB</span>
            </a>
            <p className="text-gray-500 text-sm mb-6">
              Your one-stop shop for premium electronics, gaming consoles, and accessories. Experience the best in technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-black"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-black"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-black"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-black"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Categories</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-black">iPhones & Samsung</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-black">Laptops & Tablets</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-black">Gaming Consoles</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-black">Televisions & Speakers</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-black">Accessories & More</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-black">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-black">Contact</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-black">Store Locations</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-black">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>Mantse Electronic Hub</li>
              <li>Shopping & Retail</li>
              <li>support@mantsehub.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Mantse Electronic Hub. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-black">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-black">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
