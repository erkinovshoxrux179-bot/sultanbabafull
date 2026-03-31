import React from 'react';
import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <span className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 block">Atmosphere</span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">Visual Journey</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 px-1 md:px-2">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative aspect-square overflow-hidden group"
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-gold-400 font-serif italic text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                Sultanbaba
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
