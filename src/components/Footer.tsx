import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Footer() {
  const [showEgg, setShowEgg] = useState(false);
  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    // Delay loading the iframe map to prevent it from stealing focus on initial page load
    const timer = setTimeout(() => {
      setIsMapReady(true);
    }, 1500);

    let keySequence = '';
    const secretCode = 'saint';
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key && e.key.length === 1) {
        keySequence += e.key.toLowerCase();
        if (keySequence.length > secretCode.length) {
          keySequence = keySequence.slice(-secretCode.length);
        }
        if (keySequence === secretCode) {
          setShowEgg(true);
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, []);

  return (
    <footer className="bg-[#f0eeeb] pt-16 pb-8">
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
            <div className="rounded-2xl overflow-hidden border border-black/10 shadow-sm mb-4 min-h-[180px]">
              {isMapReady && (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7225!2d-0.2167!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMTMuMyJOIDDCsDEzJzAwLjEiVw!5e0!3m2!1sen!2sgh!4v1"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mantse Electronics Hub Location"
                  className="w-full"
                />
              )}
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
        
        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center relative">
          <p className="text-xs text-premium-gray mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Mantse Electronics Hub. All rights reserved.
          </p>
          
          {/* Subtle Trademark Signature */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 flex items-center group cursor-pointer"
            onClick={() => setShowEgg(true)}
          >
            <span className="text-[10px] text-premium-gray/50 tracking-widest uppercase transition-all duration-500 group-hover:text-premium-black">
              Built by <span className="font-bold relative">
                Saint
                <span className="absolute -inset-1 bg-premium-gold/20 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></span>
              </span>
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-premium-gold/50 ml-2 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
          </div>

          <div className="flex space-x-6 z-10">
            <a href="#" className="text-xs text-premium-gray hover:text-premium-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-premium-gray hover:text-premium-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* The Saint Developer Modal (Easter Egg) */}
      {showEgg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setShowEgg(false)}></div>
          <div className="relative bg-[#0C0A09] border border-white/10 rounded-3xl p-10 max-w-sm w-full shadow-2xl shadow-black/50 text-center animate-in zoom-in duration-300">
            <button 
              onClick={() => setShowEgg(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-premium-gold to-yellow-200 p-0.5 mb-6 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              <div className="w-full h-full rounded-full bg-[#0C0A09] flex items-center justify-center">
                <span className="text-3xl">😇</span>
              </div>
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight mb-2">Designed & Engineered by <span className="text-premium-gold">Saint</span></h3>
            <p className="text-white/60 text-sm mb-8 leading-relaxed">
              A premium digital experience crafted with passion, precision, and a touch of magic.
            </p>
            <button 
              onClick={() => setShowEgg(false)}
              className="w-full py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
