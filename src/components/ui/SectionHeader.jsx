import React from 'react';
import { motion } from 'framer-motion';
import './SectionHeader.css';

const SectionHeader = ({ eyebrow, title, description, align = 'left', light = false }) => {
  return (
    <motion.div 
      className={`section-header align-${align} ${light ? 'light-mode' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {eyebrow && <span className="label-small eyebrow">{eyebrow}</span>}
      <h2 className="heading-xl title">{title}</h2>
      {description && <p className="text-body-large description">{description}</p>}
    </motion.div>
  );
};

export default SectionHeader;
