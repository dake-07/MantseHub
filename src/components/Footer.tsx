import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#f0eeeb] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-12">
          {/* Brand + Social */}
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-premium-gray text-sm mb-6 leading-relaxed">
              Your one-stop shop for premium electronics, gaming consoles, and accessories. Experience the best in technology.
            </p>
            <div className="flex space-x-1">
              <a href="#" className="text-premium-gray hover:text-premium-black min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-black/5 transition-all"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-premium-gray hover:text-premium-black min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-black/5 transition-all"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-premium-gray hover:text-premium-black min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-black/5 transition-all"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-premium-gray hover:text-premium-black min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-black/5 transition-all"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          
          {/* Categories + Contact Info */}
          <div>
            <h4 className="text-xs font-bold text-premium-black uppercase tracking-wider mb-4">Categories</h4>
            <ul className="space-y-2 mb-8">
              <li><a href="#" className="text-sm text-premium-gray hover:text-premium-black transition-colors py-1 inline-block">iPhones & Samsung</a></li>
              <li><a href="#" className="text-sm text-premium-gray hover:text-premium-black transition-colors py-1 inline-block">Laptops & Tablets</a></li>
              <li><a href="#" className="text-sm text-premium-gray hover:text-premium-black transition-colors py-1 inline-block">Gaming Consoles</a></li>
              <li><a href="#" className="text-sm text-premium-gray hover:text-premium-black transition-colors py-1 inline-block">Televisions & Speakers</a></li>
              <li><a href="#" className="text-sm text-premium-gray hover:text-premium-black transition-colors py-1 inline-block">Accessories & More</a></li>
            </ul>

            <h4 className="text-xs font-bold text-premium-black uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-premium-gray">
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-premium-gold mr-2.5 flex-shrink-0" />
                <span>+233 27 129 2016</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-premium-gold mr-2.5 flex-shrink-0" />
                <span>support@mantsehub.com</span>
              </li>
            </ul>
          </div>
          
          {/* Map + Location */}
          <div>
            <h4 className="text-xs font-bold text-premium-black uppercase tracking-wider mb-4">Visit Our Store</h4>
            <div className="rounded-2xl overflow-hidden border border-black/10 shadow-sm mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7225!2d-0.2167!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMTMuMyJOIDDCsDEzJzAwLjEiVw!5e0!3m2!1sen!2sgh!4v1"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mantse Electronics Hub Location"
                className="w-full"
              />
            </div>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-premium-gold mr-2.5 flex-shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-sm text-premium-black">Mantse Electronics Hub</span>
                <span className="block text-sm text-premium-gray mt-0.5">Accra, Ghana</span>
                <a 
                  href="https://maps.app.goo.gl/aZG3pdxx1eFWmuhTA" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-premium-gold hover:text-premium-black font-bold text-xs mt-1.5 inline-flex items-center transition-colors"
                >
                  Get Directions &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-premium-gray mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Mantse Electronics Hub. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-xs text-premium-gray hover:text-premium-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-premium-gray hover:text-premium-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
