import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GALLERY_IMAGES } from '../../config/data';
import SectionHeader from '../ui/SectionHeader';
import './SelectedWork.css';

const SelectedWork = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section className="section selected-work-section">
      <div className="container">
        <SectionHeader 
          title="Selected Work"
          description="Projects, collaborations and hospitality experiences will be showcased here."
        />
        
      </div>

      <div className="gallery-carousel-wrapper">
        <motion.div 
          className="gallery-carousel"
          style={{ x }}
        >
          {GALLERY_IMAGES.map((img) => (
            <div key={img.id} className="gallery-item">
              <img src={img.src} alt={img.alt} className="gallery-image" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWork;
