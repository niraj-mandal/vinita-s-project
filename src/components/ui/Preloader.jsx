import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';
    
    let timer;
    const updateProgress = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) onComplete();
            document.body.style.overflow = '';
          }, 800); // Wait a bit after hitting 100%
          return 100;
        }
        // Random progress increments for realistic feel
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    };

    timer = setInterval(updateProgress, 100);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-oasis-black text-oasis-cream"
      initial={{ y: 0 }}
      exit={{ 
        y: '-100%', 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="w-full max-w-sm px-6 flex flex-col items-center">
        {/* Wordmark / Logo */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif text-3xl md:text-4xl tracking-widest text-oasis-gold mb-2 uppercase">
            Culinary Oasis
          </h1>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-oasis-cream/60">
            A Journey of Flavours
          </p>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 bottom-0 bg-oasis-gold"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        </div>
        
        {/* Progress Text */}
        <div className="w-full flex justify-between mt-4">
          <span className="font-serif italic text-oasis-cream/50 text-sm">Loading</span>
          <span className="font-sans text-xs text-oasis-gold tracking-widest">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
