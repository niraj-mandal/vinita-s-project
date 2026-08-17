import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/sections/Services';
import Process from '../components/sections/Process';
import FinalCTA from '../components/sections/FinalCTA';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20 bg-oasis-black">
      {/* Sub-hero section for Services page */}
      <section className="bg-oasis-black text-oasis-cream py-24 border-b border-oasis-gold/10">
        <div className="max-w-desktop mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Hospitality <span className="italic text-oasis-gold">Expertise.</span>
            </h1>
            <p className="text-base md:text-lg font-light text-oasis-cream/80 max-w-2xl mx-auto">
              Professional solutions designed around the operational requirements of modern hospitality businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reuse components */}
      <ServicesSection />
      <Process />
      <FinalCTA />
    </main>
  );
}
