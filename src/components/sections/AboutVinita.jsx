import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { Link } from 'react-router-dom';

export default function AboutVinita() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about-vinita" className="bg-[#080808] text-oasis-cream border-t border-oasis-cream/5 relative overflow-hidden flex justify-center min-h-[600px]">
      
      {/* Absolute Image of Vinita anchored to bottom center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[105%] pointer-events-none z-0 flex flex-col justify-end items-center">
         
         <motion.img 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2 }}
           src="/images/vinita_portrait_new.png" 
           alt="Vinita Srivastava" 
           className="w-auto h-full max-w-none object-contain object-bottom opacity-90 drop-shadow-2xl" 
           style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)' }}
         />
         
         {/* Signature Overlay */}
         <motion.div 
           className="absolute bottom-12 lg:bottom-16 right-[15%] md:right-[20%] lg:right-[25%] xl:right-[28%] z-20"
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.4 }}
         >
           <span className="font-serif italic text-6xl md:text-[6rem] text-oasis-gold drop-shadow-lg">Vinita</span>
         </motion.div>
      </div>

      <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch justify-between">
          
          {/* Left Column */}
          <div className="lg:w-[35%] py-16 lg:py-32 flex flex-col justify-center lg:pr-8 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent lg:bg-none">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-oasis-gold font-serif italic text-lg">06</span>
                <span className="text-oasis-gold/50 text-sm">/</span>
                <span className="text-[10px] font-bold tracking-[0.25em] text-oasis-gold uppercase">About Vinita</span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-8 text-white/90">
                A Lifelong Dedication<br />
                To Culinary <span className="text-oasis-gold italic">Excellence.</span>
              </h2>
              
              <p className="text-sm font-light text-oasis-cream/60 leading-relaxed mb-10 max-w-sm">
                With years of experience across hospitality, culinary arts and business advisory, Vinita brings together creativity, execution and uncompromising standards.
              </p>
              
              <div>
                <MagneticButton>
                  <Link 
                    to="/about" 
                    className="inline-flex items-center justify-center space-x-2 border border-oasis-gold/50 text-oasis-gold text-[10px] font-bold tracking-widest uppercase px-6 py-3 hover:bg-oasis-gold hover:text-oasis-black transition-colors duration-300 group"
                  >
                    <span>Meet Vinita</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>
          </div>

          {/* Center Spacer */}
          <div className="hidden lg:block lg:w-[30%]"></div>

          {/* Right Column */}
          <div className="lg:w-[35%] py-16 lg:py-32 flex flex-col justify-center lg:pl-12 bg-gradient-to-l from-[#080808] via-[#080808]/80 to-transparent lg:bg-none">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-14">
                <h3 className="text-oasis-gold font-bold tracking-widest text-xs md:text-sm uppercase mb-2">Vinita Srivastava</h3>
                <p className="text-oasis-cream/70 text-xs md:text-sm font-light">Managing Director</p>
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-row justify-between items-start"
              >
                {/* Item 1 */}
                <motion.div variants={itemVariants} className="flex-1 pr-4 md:pr-6 group cursor-default">
                  <div className="h-8 mb-4 flex items-center transform group-hover:-translate-y-1 transition-transform duration-300">
                    <svg className="w-7 h-7 text-oasis-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M2 10h20M5 10a7 7 0 0 0 14 0" />
                      <path d="M16 4l-2 6" />
                      <path d="M8 4l2 6" />
                    </svg>
                  </div>
                  <h4 className="text-oasis-gold text-[10px] md:text-xs font-bold tracking-widest uppercase mb-3 group-hover:text-oasis-cream transition-colors duration-300">Passion</h4>
                  <p className="text-[10px] md:text-xs font-light text-oasis-cream/60 leading-relaxed pr-2 group-hover:text-oasis-cream/90 transition-colors duration-300">Driven by a deep passion for food and people.</p>
                </motion.div>
                
                {/* Item 2 */}
                <motion.div variants={itemVariants} className="flex-1 px-4 md:px-6 border-l border-oasis-gold/20 group cursor-default">
                  <div className="h-8 mb-4 flex items-center transform group-hover:-translate-y-1 transition-transform duration-300">
                    <svg className="w-7 h-7 text-oasis-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <rect x="4" y="10" width="16" height="10" rx="2" />
                      <path d="M2 12h2M20 12h2" />
                      <path d="M7 10V8a5 5 0 0 1 10 0v2" />
                    </svg>
                  </div>
                  <h4 className="text-oasis-gold text-[10px] md:text-xs font-bold tracking-widest uppercase mb-3 group-hover:text-oasis-cream transition-colors duration-300">Experience</h4>
                  <p className="text-[10px] md:text-xs font-light text-oasis-cream/60 leading-relaxed pr-2 group-hover:text-oasis-cream/90 transition-colors duration-300">Decades of hands-on experience across industries.</p>
                </motion.div>
                
                {/* Item 3 */}
                <motion.div variants={itemVariants} className="flex-1 pl-4 md:pl-6 border-l border-oasis-gold/20 group cursor-default">
                  <div className="h-8 mb-4 flex items-center transform group-hover:-translate-y-1 transition-transform duration-300">
                    <svg className="w-7 h-7 text-oasis-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M18 10h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" />
                      <path d="M6 10H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2" />
                      <path d="M12 4a6 6 0 0 0-6 6v4h12v-4a6 6 0 0 0-6-6z" />
                      <path d="M12 2v2" />
                    </svg>
                  </div>
                  <h4 className="text-oasis-gold text-[10px] md:text-xs font-bold tracking-widest uppercase mb-3 group-hover:text-oasis-cream transition-colors duration-300">Vison</h4>
                  <p className="text-[10px] md:text-xs font-light text-oasis-cream/60 leading-relaxed group-hover:text-oasis-cream/90 transition-colors duration-300">Building experiences that are memorable and meaningful.</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
