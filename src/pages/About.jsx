import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AboutOasis from '../components/sections/AboutOasis';
import AboutVinita from '../components/sections/AboutVinita';
import FinalCTA from '../components/sections/FinalCTA';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20">
      {/* Sub-hero section for About page */}
      <section className="bg-oasis-black text-oasis-cream py-24 border-b border-oasis-gold/10">
        <div className="max-w-desktop mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Our <span className="italic text-oasis-gold">Story.</span>
            </h1>
            <p className="text-base md:text-lg font-light text-oasis-cream/80 max-w-2xl mx-auto">
              A journey of flavours, craftsmanship, and a deep dedication to creating memorable experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reuse components to maintain design consistency */}
      <AboutOasis />
      <AboutVinita />
      <FinalCTA />
    </main>
  );
}
