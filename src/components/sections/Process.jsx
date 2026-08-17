import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'UNDERSTAND',
    desc: 'We understand the requirement, audience and objective.',
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8 currentColor" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M12 16V12" />
        <circle cx="12" cy="8" r="1" />
      </svg>
    )
  },
  {
    num: '02',
    title: 'CURATE',
    desc: 'We develop the right culinary concept, product or solution.',
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8 currentColor" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19V5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V19" />
        <path d="M4 15H20" />
        <path d="M9 3V9" />
        <path d="M15 3V9" />
      </svg>
    )
  },
  {
    num: '03',
    title: 'CREATE',
    desc: 'Our team brings the idea together with careful planning and execution.',
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8 currentColor" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2V22" />
        <path d="M17 5H9.5A3.5 3.5 0 0 0 9.5 12H14.5A3.5 3.5 0 0 1 14.5 19H6" />
      </svg>
    )
  },
  {
    num: '04',
    title: 'DELIVER',
    desc: 'We deliver an experience designed to leave a lasting impression.',
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8 currentColor" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 12L10 17L20 7" />
      </svg>
    )
  }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="bg-oasis-cream text-oasis-black py-24 lg:py-32 overflow-hidden">
      <div className="max-w-desktop mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-oasis-gold font-serif text-xl italic">04</span>
            <div className="h-[1px] w-8 bg-oasis-gold/50"></div>
            <span className="text-xs font-semibold tracking-[0.2em] text-oasis-black/60 uppercase">
              Our Process
            </span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            From Concept<br />
            <span className="italic text-oasis-burgundy">To Experience.</span>
          </h2>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[5%] right-[5%] h-[2px] bg-oasis-black/10 z-0">
            <motion.div 
              className="absolute top-0 left-0 bottom-0 bg-oasis-gold origin-left"
              style={{ scaleX }}
            />
          </div>
          {/* Mobile Connecting Line */}
          <div className="lg:hidden absolute top-[4.5rem] bottom-12 left-[3.25rem] w-[2px] bg-oasis-black/10 z-0">
             <motion.div 
              className="absolute top-0 left-0 right-0 bg-oasis-gold origin-top"
              style={{ scaleY: scaleX }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, i) => {
              const isActive = activeStep === i;
              
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-row lg:flex-col items-start gap-6 lg:gap-8 relative cursor-pointer group"
                  onMouseEnter={() => setActiveStep(i)}
                  onClick={() => setActiveStep(i)}
                >
                  {/* Number & Icon Container */}
                  <div className="flex flex-col items-center flex-shrink-0 bg-oasis-cream px-2">
                    <span className={`font-serif italic text-2xl lg:text-3xl mb-4 lg:mb-6 transition-colors duration-300 ${isActive ? 'text-oasis-burgundy' : 'text-oasis-gold'}`}>
                      {step.num}
                    </span>
                    <motion.div 
                      className={`w-16 h-16 rounded-full border flex items-center justify-center bg-oasis-cream transition-all duration-500 ${isActive ? 'border-oasis-burgundy text-oasis-burgundy shadow-lg scale-110' : 'border-oasis-black/10 text-oasis-gold group-hover:border-oasis-gold'}`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="pt-4 lg:pt-0">
                    <h3 className={`text-sm font-bold tracking-widest uppercase mb-3 transition-colors duration-300 ${isActive ? 'text-oasis-burgundy' : 'text-oasis-black'}`}>
                      {step.title}
                    </h3>
                    <motion.p 
                      animate={{ opacity: isActive ? 1 : 0.6 }}
                      className="text-sm font-light text-oasis-black/70 leading-relaxed"
                    >
                      {step.desc}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
