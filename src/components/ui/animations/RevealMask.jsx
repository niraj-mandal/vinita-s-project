import React from 'react';
import { motion } from 'framer-motion';

const RevealMask = ({ children, delay = 0, duration = 0.8, className = '' }) => {
  return (
    <div className={`reveal-mask-container ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealMask;
