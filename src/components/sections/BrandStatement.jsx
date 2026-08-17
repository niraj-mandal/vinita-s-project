import React from 'react';
import { motion } from 'framer-motion';

export default function BrandStatement() {
  return (
    <section className="bg-oasis-cream flex flex-col lg:flex-row min-h-[80vh]">
      {/* Left: Cinematic Image */}
      <div className="lg:w-1/2 h-[50vh] lg:h-auto relative overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src="/images/brand_statement.jpg"
          alt="Cinematic food preparation"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Content */}
      <div className="lg:w-1/2 flex items-center justify-center py-20 px-8 md:px-16 lg:px-24">
        <motion.div 
          className="max-w-xl w-full"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-oasis-black leading-[1.1] mb-8">
            Food Should Be<br />
            <span className="italic text-oasis-burgundy">Remembered.</span>
          </h2>
          
          <p className="text-base md:text-lg font-light text-oasis-black/80 leading-relaxed mb-16">
            From bold pickles and artisanal chutneys to indulgent dry fruits and thoughtfully crafted products, every creation is designed to bring something distinctive to the table.
          </p>

          <div className="flex items-center space-x-4 text-xs font-bold tracking-[0.2em] text-oasis-burgundy uppercase">
            <span>Crafted</span>
            <span className="text-oasis-gold/50">•</span>
            <span>Curated</span>
            <span className="text-oasis-gold/50">•</span>
            <span>Distinctive</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
