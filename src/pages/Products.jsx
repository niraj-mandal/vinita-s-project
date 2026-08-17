import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCatalogue from '../components/sections/ProductCatalogue';
import BrandStatement from '../components/sections/BrandStatement';
import FinalCTA from '../components/sections/FinalCTA';

export default function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20 bg-oasis-black">
      {/* Sub-hero section for Products page */}
      <section className="bg-oasis-black text-oasis-cream py-24 border-b border-oasis-gold/10">
        <div className="max-w-desktop mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Thoughtfully <span className="italic text-oasis-gold">Crafted.</span>
            </h1>
            <p className="text-base md:text-lg font-light text-oasis-cream/80 max-w-2xl mx-auto">
              Our curated collection of products, designed to elevate your culinary experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reuse components */}
      <ProductCatalogue />
      <BrandStatement />
      <FinalCTA />
    </main>
  );
}
