import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-cream-50/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="font-serif text-2xl font-bold tracking-wider text-gold-400 mb-6">
              SULTANBABA
            </a>
            <p className="text-cream-50/50 font-light text-sm max-w-xs">
              A premium dining experience celebrating authentic flavors and culinary traditions in an elegant atmosphere.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm uppercase tracking-widest text-cream-50 mb-6">Quick Links</h4>
            <ul className="space-y-3 text-cream-50/50 font-light text-sm">
              <li><a href="#home" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-gold-400 transition-colors">Our Menu</a></li>
              <li><a href="#gallery" className="hover:text-gold-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Reservations</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm uppercase tracking-widest text-cream-50 mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-cream-50/20 flex items-center justify-center text-cream-50/70 hover:text-gold-400 hover:border-gold-400 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-cream-50/20 flex items-center justify-center text-cream-50/70 hover:text-gold-400 hover:border-gold-400 transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-cream-50/20 flex items-center justify-center text-cream-50/70 hover:text-gold-400 hover:border-gold-400 transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-cream-50/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-cream-50/40 font-light">
          <p>&copy; {new Date().getFullYear()} Sultanbaba Restaurant. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-cream-50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream-50 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
