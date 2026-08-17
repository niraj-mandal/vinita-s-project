import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagneticButton from '../ui/MagneticButton';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.15,
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1]
      }
    })
  };

  return (
    <section ref={containerRef} className="relative min-h-screen bg-oasis-black text-oasis-cream flex items-center pt-20 overflow-hidden">
      {/* Background Image / Split Right */}
      <div className="absolute inset-0 lg:left-1/2 lg:w-1/2 h-full z-0 overflow-hidden">
        <motion.div style={{ y: yBg, height: "120%", top: "-10%" }} className="absolute inset-0 w-full">
          <motion.img 
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
            src="/images/hero_bg.jpg"
            alt="Premium food composition"
            className="w-full h-full object-cover opacity-40 lg:opacity-100"
          />
        </motion.div>
        {/* Gradient overlay for mobile readability and edge blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-oasis-black via-oasis-black/80 to-transparent lg:bg-gradient-to-r lg:from-oasis-black lg:via-oasis-black/50 lg:to-transparent z-10" />
      </div>

      <div className="max-w-desktop mx-auto w-full px-6 md:px-12 relative z-10">
        <motion.div 
          className="lg:w-[55%] flex flex-col justify-center min-h-[70vh]"
          style={{ opacity: opacityText, y: yText }}
        >
          <div className="overflow-hidden mb-8">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1]">
              <motion.div custom={0} variants={textVariants} initial="hidden" animate="visible">
                Flavours
              </motion.div>
              <motion.div custom={1} variants={textVariants} initial="hidden" animate="visible">
                <span className="text-oasis-gold italic font-medium">You Will</span>
              </motion.div>
              <motion.div custom={2} variants={textVariants} initial="hidden" animate="visible">
                <span className="text-oasis-gold italic font-medium">Never Forget.</span>
              </motion.div>
            </h1>
          </div>
          
          <motion.p 
            custom={3} variants={textVariants} initial="hidden" animate="visible"
            className="text-base md:text-lg text-oasis-cream/80 max-w-md font-sans font-light leading-relaxed mb-12"
          >
            Thoughtfully crafted food products, distinctive culinary experiences, and hospitality expertise — brought together under one roof.
          </motion.p>
          
          <motion.div 
            custom={4} variants={textVariants} initial="hidden" animate="visible"
            className="flex flex-col sm:flex-row gap-4 sm:items-center"
          >
            <MagneticButton>
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center space-x-2 bg-oasis-gold text-oasis-black text-xs font-semibold tracking-widest uppercase px-6 py-4 hover:bg-oasis-cream transition-colors duration-300 group w-full sm:w-auto"
              >
                <span>Explore Products</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center space-x-2 text-oasis-gold text-xs font-semibold tracking-widest uppercase px-6 py-4 border border-oasis-gold/30 hover:border-oasis-gold transition-colors duration-300 group w-full sm:w-auto"
              >
                <span>Discover Culinary Oasis</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
