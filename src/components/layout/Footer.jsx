import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-oasis-black text-oasis-cream pt-24 pb-8 border-t border-oasis-gold/10 relative overflow-hidden">
      {/* Subtle background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-oasis-burgundy/10 to-transparent pointer-events-none" />

      <div className="max-w-desktop mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col">
            <a href="#" className="font-serif text-3xl text-oasis-cream tracking-wide uppercase mb-1 hover:text-oasis-gold transition-colors duration-500">
              Culinary Oasis
            </a>
            <span className="text-oasis-gold text-xs italic font-serif tracking-widest opacity-80 mb-8">
              Flavours You Will Never Forget.
            </span>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-auto">
              {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
                <motion.a 
                  key={social} 
                  href="#" 
                  aria-label={social}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border border-oasis-cream/10 flex items-center justify-center hover:border-oasis-gold hover:text-oasis-gold hover:bg-oasis-gold/5 transition-colors duration-300 text-xs"
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-widest uppercase mb-6 text-oasis-gold">Explore</h4>
            <ul className="space-y-4 text-sm font-light text-oasis-cream/70">
              {['Home', 'About', 'Products', 'Experiences', 'Services', 'Contact'].map(link => (
                <li key={link}>
                  <motion.a 
                    href={`#${link.toLowerCase()}`} 
                    className="inline-block hover:text-oasis-gold transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-widest uppercase mb-6 text-oasis-gold">Services</h4>
            <ul className="space-y-4 text-sm font-light text-oasis-cream/70">
              {[
                { name: 'Hotel Management Consulting', href: '#services' },
                { name: 'Hospitality Manpower', href: '#services' },
                { name: 'Food Festivals', href: '#experiences' },
                { name: 'Culinary Events', href: '#experiences' }
              ].map(service => (
                <li key={service.name}>
                  <motion.a 
                    href={service.href} 
                    className="inline-block hover:text-oasis-gold transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {service.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-widest uppercase mb-6 text-oasis-gold">Contact</h4>
            <ul className="space-y-4 text-sm font-light text-oasis-cream/70">
              <li>+91-9953294105</li>
              <li>
                <motion.a href="mailto:vinita@v-culinary.com" className="inline-block hover:text-oasis-gold transition-colors" whileHover={{ x: 4 }}>
                  vinita@v-culinary.com
                </motion.a>
              </li>
              <li>
                <motion.a href="http://www.v-culinary.com" target="_blank" rel="noopener noreferrer" className="inline-block hover:text-oasis-gold transition-colors" whileHover={{ x: 4 }}>
                  www.v-culinary.com
                </motion.a>
              </li>
              <li className="pt-2 text-xs text-oasis-cream/40">Gurgaon, Haryana</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-oasis-cream/10 text-[10px] tracking-widest uppercase text-oasis-cream/40">
          <p>© 2026 Culinary Oasis Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a href="#" className="hover:text-oasis-gold transition-colors" whileHover={{ y: -2 }}>Privacy Policy</motion.a>
            <motion.a href="#" className="hover:text-oasis-gold transition-colors" whileHover={{ y: -2 }}>Terms & Conditions</motion.a>
          </div>
        </div>

      </div>
    </footer>
  );
}
