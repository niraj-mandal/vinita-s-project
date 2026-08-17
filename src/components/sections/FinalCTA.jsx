import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  return (
    <section ref={containerRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-24 bg-oasis-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div style={{ y: yBg, height: "120%", top: "-10%" }} className="absolute inset-0 w-full">
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Cinematic luxury dining"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Dark overlay for readability and dramatic effect */}
        <div className="absolute inset-0 bg-oasis-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-oasis-black via-transparent to-transparent opacity-80" />
      </div>

      <div className="max-w-desktop mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] text-oasis-cream mb-8">
            Let's Create Something<br />
            <span className="italic text-oasis-gold">Worth Experiencing.</span>
          </h2>
          
          <p className="text-base md:text-lg font-light text-oasis-cream/80 max-w-xl mx-auto leading-relaxed mb-12">
            Whether it's a product, culinary experience, food festival or hospitality solution — let's create something memorable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center space-x-2 bg-oasis-gold text-oasis-black text-xs font-semibold tracking-widest uppercase px-8 py-4 hover:bg-oasis-cream transition-colors duration-300 group w-full sm:w-auto"
              >
                <span>Talk To Us</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center space-x-2 text-oasis-gold text-xs font-semibold tracking-widest uppercase px-8 py-4 border border-oasis-gold/30 hover:border-oasis-gold transition-colors duration-300 group w-full sm:w-auto backdrop-blur-sm"
              >
                <span>Explore Products</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
