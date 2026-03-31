import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop"
          alt="Restaurant Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-charcoal-950/70"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-gold-400 text-sm md:text-base uppercase tracking-[0.3em] mb-4 block">
            A Culinary Journey
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6">
            Taste the Essence of <br />
            <span className="italic text-gold-400">Authenticity</span>
          </h1>
          <p className="text-cream-50/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Experience a symphony of flavors crafted with passion, tradition, and the finest ingredients in an atmosphere of refined elegance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              className="px-8 py-4 bg-gold-500 text-charcoal-950 hover:bg-gold-400 transition-colors duration-300 text-sm uppercase tracking-widest font-medium w-full sm:w-auto"
            >
              Explore Menu
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-cream-50/30 hover:border-gold-400 hover:text-gold-400 transition-colors duration-300 text-sm uppercase tracking-widest w-full sm:w-auto"
            >
              Reserve a Table
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest text-cream-50/50 mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-gold-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
