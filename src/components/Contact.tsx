import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal-950 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 block">Visit Us</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-10">Make a Reservation</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <MapPin className="text-gold-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-xl mb-1">Location</h4>
                  <p className="text-cream-50/60 font-light">123 Culinary Avenue, Gourmet District<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="text-gold-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-xl mb-1">Reservations</h4>
                  <p className="text-cream-50/60 font-light">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="text-gold-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-xl mb-1">Opening Hours</h4>
                  <p className="text-cream-50/60 font-light">
                    Mon - Thu: 11:30 AM - 10:00 PM<br />
                    Fri - Sat: 11:30 AM - 11:00 PM<br />
                    Sun: 12:00 PM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-charcoal-900 p-8 md:p-10 border border-cream-50/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-cream-50/50 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-transparent border-b border-cream-50/20 py-2 focus:outline-none focus:border-gold-400 transition-colors text-cream-50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-cream-50/50 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-transparent border-b border-cream-50/20 py-2 focus:outline-none focus:border-gold-400 transition-colors text-cream-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-xs uppercase tracking-widest text-cream-50/50 mb-2">Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full bg-transparent border-b border-cream-50/20 py-2 focus:outline-none focus:border-gold-400 transition-colors text-cream-50 [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-xs uppercase tracking-widest text-cream-50/50 mb-2">Guests</label>
                  <select 
                    id="guests" 
                    className="w-full bg-transparent border-b border-cream-50/20 py-2 focus:outline-none focus:border-gold-400 transition-colors text-cream-50 appearance-none"
                  >
                    <option value="1" className="bg-charcoal-900">1 Person</option>
                    <option value="2" className="bg-charcoal-900">2 People</option>
                    <option value="3" className="bg-charcoal-900">3 People</option>
                    <option value="4" className="bg-charcoal-900">4 People</option>
                    <option value="5+" className="bg-charcoal-900">5+ People</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-cream-50/50 mb-2">Special Requests</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-transparent border-b border-cream-50/20 py-2 focus:outline-none focus:border-gold-400 transition-colors text-cream-50 resize-none"
                  placeholder="Any dietary requirements or special occasions?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-gold-500 text-charcoal-950 hover:bg-gold-400 transition-colors duration-300 text-sm uppercase tracking-widest font-medium mt-4"
              >
                Request Reservation
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
