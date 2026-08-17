import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

const pillars = [
  {
    title: 'CULINARY',
    desc: 'Crafted food experiences & products',
    icon: (
      <svg className="w-8 h-8 mb-4 text-oasis-gold stroke-current" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.68629 2 6 4.68629 6 8V10C6 11.0927 6.42539 12.0864 7.12643 12.825C7.26284 12.9687 7.4101 13.1042 7.56708 13.2307L12 16.8L16.4329 13.2307C16.5899 13.1042 16.7372 12.9687 16.8736 12.825C17.5746 12.0864 18 11.0927 18 10V8C18 4.68629 15.3137 2 12 2Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16.8V22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 22H16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'HOSPITALITY',
    desc: 'Consulting & manpower solutions',
    icon: (
      <svg className="w-8 h-8 mb-4 text-oasis-gold stroke-current" viewBox="0 0 24 24" fill="none">
        <path d="M14.5 10C14.5 11.3807 13.3807 12.5 12 12.5C10.6193 12.5 9.5 11.3807 9.5 10C9.5 8.61929 10.6193 7.5 12 7.5C13.3807 7.5 14.5 8.61929 14.5 10Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2.5V7.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 14C4 18 8 21.5 12 21.5C16 21.5 20 18 20 14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'EXPERIENCES',
    desc: 'Food festivals & culinary events',
    icon: (
      <svg className="w-8 h-8 mb-4 text-oasis-gold stroke-current" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="15" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 10H21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 3V7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3V7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="15" r="1" fill="currentColor"/>
      </svg>
    )
  }
];

export default function AboutOasis() {
  return (
    <section id="about" className="bg-oasis-cream text-oasis-black py-24 lg:py-32 relative">
      <div className="max-w-desktop mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-oasis-gold font-serif text-xl italic">01</span>
                <div className="h-[1px] w-8 bg-oasis-gold/50"></div>
                <span className="text-xs font-semibold tracking-[0.2em] text-oasis-black/60 uppercase">
                  About Culinary Oasis
                </span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
                More Than Food.<br />
                <span className="italic text-oasis-burgundy">A Culinary Experience.</span>
              </h2>
              
              <p className="text-base md:text-lg font-light text-oasis-black/80 max-w-lg mb-10 leading-relaxed">
                Culinary Oasis brings together culinary craftsmanship and hospitality expertise to create distinctive food products, memorable culinary experiences, and professional solutions for the hospitality industry.
              </p>

              <MagneticButton>
                <a 
                  href="#about-vinita" 
                  className="inline-flex items-center space-x-2 text-oasis-black text-xs font-semibold tracking-widest uppercase border border-oasis-black/20 px-6 py-4 hover:bg-oasis-black hover:text-oasis-cream transition-colors duration-300 group"
                >
                  <span>Our Story</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column / Pillars */}
          <div className="lg:w-1/2 flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 w-full">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="group flex flex-col items-start p-6 rounded-lg hover:bg-white/50 transition-all duration-500 border border-transparent hover:border-oasis-gold/20 hover:shadow-lg relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-oasis-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                  
                  <div className="transform group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-500">
                    {pillar.icon}
                  </div>
                  
                  <h3 className="text-xs font-bold tracking-widest uppercase mb-3 mt-4 text-oasis-black group-hover:text-oasis-burgundy transition-colors duration-300 transform group-hover:translate-x-1">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-light text-oasis-black/70 leading-relaxed transform group-hover:translate-x-1 transition-transform duration-300 delay-75">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
