import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { Link } from 'react-router-dom';

export default function ExperienceModal({ experience, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && experience && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-oasis-black/95 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            layoutId={`experience-card-${experience.title}`}
            className="relative w-full max-w-5xl bg-oasis-burgundy border border-oasis-gold/20 overflow-hidden flex flex-col md:flex-row h-full max-h-[90vh] md:max-h-[70vh] shadow-2xl"
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-[35vh] md:h-full relative overflow-hidden bg-oasis-black">
              <motion.img
                layoutId={`experience-image-${experience.title}`}
                src={experience.image}
                alt={experience.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oasis-burgundy to-transparent md:bg-gradient-to-r opacity-80" />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto bg-gradient-to-br from-oasis-burgundy to-oasis-black">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.2 }}
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border border-oasis-cream/20 hover:border-oasis-gold hover:text-oasis-gold transition-colors text-oasis-cream z-10 rounded-full bg-oasis-black/50 backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </motion.button>
              
              <motion.h2 
                layoutId={`experience-title-${experience.title}`}
                className="text-2xl md:text-3xl lg:text-4xl font-serif text-oasis-gold mb-6 tracking-wide uppercase mt-4"
              >
                {experience.title}
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="text-oasis-cream/80 font-sans text-sm md:text-base leading-relaxed mb-8"
              >
                {experience.desc}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="mb-10 flex-grow"
              >
                 <h4 className="text-xs tracking-[0.2em] uppercase text-oasis-gold mb-4">Service Details</h4>
                 <ul className="space-y-3 text-sm text-oasis-cream/60">
                   <li className="flex items-start gap-2">
                     <div className="w-1 h-1 rounded-full bg-oasis-gold mt-1.5" />
                     <span>End-to-end conceptualisation</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <div className="w-1 h-1 rounded-full bg-oasis-gold mt-1.5" />
                     <span>Curated menu development</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <div className="w-1 h-1 rounded-full bg-oasis-gold mt-1.5" />
                     <span>Vendor and talent curation</span>
                   </li>
                 </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                className="mt-auto pt-6 border-t border-oasis-cream/10"
              >
                <MagneticButton>
                  <Link 
                    to="/contact" 
                    onClick={onClose}
                    className="inline-flex items-center space-x-2 bg-oasis-cream text-oasis-burgundy text-xs font-semibold tracking-widest uppercase px-6 py-4 hover:bg-oasis-gold transition-colors duration-300 group"
                  >
                    <span>Discuss Your Event</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
