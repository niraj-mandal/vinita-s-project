import React from 'react';
import { motion } from 'framer-motion';
import './AboutVinita.css';

const AboutVinita = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        
        <div className="about-image-column">
          <div className="about-image-wrapper">
            <motion.img 
              src="https://placehold.co/800x1200/141414/d9d4c7?text=FOUNDER+PORTRAIT" 
              alt="Vinita - Founder" 
              className="about-image"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <div className="about-image-caption">
            <span className="label-small">FOUNDER & CULINARY DIRECTOR</span>
          </div>
        </div>

        <div className="about-text-column">
          <div className="signature-line-group" style={{ marginBottom: '2rem' }}>
            <span className="signature-line"></span>
            <span className="signature-marker"></span>
            <span className="label-small">THE FOUNDER</span>
          </div>
          
          <h2 className="heading-lg title">
            A lifelong dedication<br />to culinary excellence.
          </h2>
          
          <div className="about-prose">
            <p className="text-body">
              With decades of experience spanning luxury hotels and boutique culinary concepts, Vinita brings a rare combination of operational precision and creative vision. Her approach is rooted in the belief that true hospitality is an art form—one that requires an uncompromising commitment to quality, from the sourcing of ingredients to the final presentation.
            </p>
            <p className="text-body">
              She has dedicated her career to understanding what makes a dining experience truly memorable, and now translates that knowledge into crafted products and strategic consulting for the next generation of hospitality brands.
            </p>
          </div>

          <motion.div 
            className="founder-signature"
            initial={{ opacity: 0, pathLength: 0 }}
            whileInView={{ opacity: 1, pathLength: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          >
            {/* SVG Signature Placeholder */}
            <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" className="signature-svg">
              <path 
                d="M10,40 C30,10 50,10 70,40 C90,10 110,50 130,20 C150,-10 170,40 190,30" 
                fill="none" 
                stroke="var(--foreground)" 
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutVinita;
