import React from 'react';
import { motion } from 'framer-motion';
import { CONSULTING_FEATURES } from '../../config/data';
import { ArrowRight } from 'lucide-react';
import './ConsultingSection.css';

const ConsultingSection = () => {
  return (
    <section id="consulting" className="section consulting-section">
      <div className="container consulting-container">
        
        <div className="consulting-image-wrapper">
          <motion.img 
            src="/images/site/consulting.jpg" 
            alt="Culinary Consulting" 
            className="consulting-image"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <motion.div 
          className="consulting-content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="signature-line-group">
            <span className="signature-line"></span>
            <span className="signature-marker"></span>
            <span className="label-small eyebrow">01 — CONSULTING</span>
          </div>
          
          <h2 className="heading-lg title">
            From the first idea<br />to a working kitchen.
          </h2>

          <div className="consulting-services">
            {CONSULTING_FEATURES.map((feature, index) => (
              <motion.div 
                key={feature.id} 
                className="consulting-service-item"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              >
                <div className="service-number label-small">0{index + 1}</div>
                <div className="service-text">
                  <h4 className="service-title">{feature.title}</h4>
                  <p className="service-desc">{feature.description}</p>
                </div>
                <ArrowRight size={16} className="service-arrow" />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ConsultingSection;
