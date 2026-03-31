import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop"
                alt="Chef preparing food"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square border border-gold-400/30 p-2 hidden md:block bg-charcoal-900">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop"
                alt="Spices and ingredients"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 block">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              A Legacy of <br />
              <span className="italic text-gold-400">Culinary Excellence</span>
            </h2>
            <div className="space-y-6 text-cream-50/70 font-light leading-relaxed">
              <p>
                Founded in the heart of the city, Sultanbaba brings together generations of culinary wisdom and a passion for authentic flavors. Our journey began with a simple philosophy: to serve food that speaks to the soul.
              </p>
              <p>
                Every dish we create is a testament to our heritage, meticulously prepared using time-honored techniques and the freshest, locally-sourced ingredients. We believe that dining is not just about sustenance, but an experience to be savored and shared.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-cream-50/10 pt-8">
              <div>
                <h4 className="font-serif text-3xl text-gold-400 mb-2">15+</h4>
                <p className="text-sm uppercase tracking-wider text-cream-50/50">Years of Experience</p>
              </div>
              <div>
                <h4 className="font-serif text-3xl text-gold-400 mb-2">50+</h4>
                <p className="text-sm uppercase tracking-wider text-cream-50/50">Signature Dishes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
