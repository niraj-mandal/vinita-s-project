import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MANPOWER_CATEGORIES } from '../../config/data';
import './ManpowerSection.css';

const ManpowerSection = () => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} id="manpower" className="section manpower-section">
      <motion.div 
        className="manpower-full-bg"
        style={{ y: backgroundY }}
      >
        <img 
          src="/images/site/manpower.jpg" 
          alt="Professional Kitchen Staff" 
          className="manpower-image"
        />
        <div className="manpower-overlay"></div>
      </motion.div>

      <div className="container manpower-container">
        <motion.div
          className="manpower-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="signature-line-group" style={{ marginBottom: '2rem' }}>
            <span className="signature-line" style={{ backgroundColor: 'var(--background)' }}></span>
            <span className="signature-marker" style={{ backgroundColor: 'var(--background)' }}></span>
            <span className="label-small" style={{ color: 'var(--background)' }}>02 — MANPOWER</span>
          </div>
          
          <h2 className="heading-xl title">
            Great hospitality<br />starts with great people.
          </h2>
        </motion.div>

        <div className="manpower-list">
          {MANPOWER_CATEGORIES.map((cat, index) => (
            <motion.div 
              key={cat}
              className="manpower-list-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              {cat}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManpowerSection;
