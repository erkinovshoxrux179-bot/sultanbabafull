import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const menuData = {
  Starters: [
    { name: 'Mezze Platter', description: 'Hummus, baba ganoush, tzatziki, warm pita', price: '$18' },
    { name: 'Crispy Calamari', description: 'Lightly dusted, lemon aioli, fresh herbs', price: '$16' },
    { name: 'Stuffed Vine Leaves', description: 'Rice, pine nuts, currants, aromatic herbs', price: '$14' },
    { name: 'Roasted Eggplant', description: 'Tahini, pomegranate seeds, mint', price: '$15' },
  ],
  Mains: [
    { name: 'Sultan\'s Kebab', description: 'Char-grilled lamb, roasted vegetables, saffron rice', price: '$34' },
    { name: 'Pan-Seared Sea Bass', description: 'Asparagus, lemon butter caper sauce', price: '$32' },
    { name: 'Truffle Mushroom Risotto', description: 'Arborio rice, wild mushrooms, parmesan crisp', price: '$28' },
    { name: 'Slow-Cooked Beef Rib', description: 'Root vegetable mash, red wine reduction', price: '$38' },
  ],
  Desserts: [
    { name: 'Pistachio Baklava', description: 'Filo pastry, honey syrup, clotted cream', price: '$12' },
    { name: 'Rosewater Panna Cotta', description: 'Mixed berry compote, crushed pistachios', price: '$11' },
    { name: 'Dark Chocolate Fondant', description: 'Vanilla bean ice cream, raspberry coulis', price: '$14' },
  ]
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof menuData>('Mains');

  return (
    <section id="menu" className="py-24 md:py-32 bg-charcoal-950 relative">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 block">Discover</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8">Our Menu</h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12">
            {(Object.keys(menuData) as Array<keyof typeof menuData>).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm uppercase tracking-widest pb-2 border-b-2 transition-all duration-300 ${
                  activeCategory === category 
                    ? 'border-gold-400 text-gold-400' 
                    : 'border-transparent text-cream-50/50 hover:text-cream-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
            >
              {menuData[activeCategory].map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="flex justify-between items-baseline mb-2 border-b border-cream-50/10 pb-2 group-hover:border-gold-400/50 transition-colors duration-300">
                    <h3 className="font-serif text-xl md:text-2xl text-cream-50 group-hover:text-gold-400 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <span className="font-serif text-xl text-gold-400 ml-4">{item.price}</span>
                  </div>
                  <p className="text-cream-50/60 font-light text-sm">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-block px-8 py-4 border border-cream-50/30 hover:border-gold-400 hover:text-gold-400 transition-colors duration-300 text-sm uppercase tracking-widest"
          >
            Download Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
