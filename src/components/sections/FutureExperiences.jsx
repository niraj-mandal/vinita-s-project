import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './FutureExperiences.css';

const FutureExperiences = () => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section ref={ref} className="section future-experiences">
      <motion.div 
        className="future-bg"
        style={{ y }}
      >
        <img 
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop" 
          alt="Future Experiences" 
        />
        <div className="future-overlay"></div>
      </motion.div>

      <div className="container future-container">
        <motion.div 
          className="future-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="label-small future-eyebrow">COMING SOON</span>
          <h3 className="heading-xl future-title">Food experiences<br />beyond the table.</h3>
          <p className="text-body-large future-description">
            Future culinary festivals and strategic experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureExperiences;
