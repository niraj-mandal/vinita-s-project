import React from 'react';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '../ui/animations/StaggerChildren';
import './BrandStatement.css';

const BrandStatement = () => {
  return (
    <section className="section statement-section">
      <div className="container statement-container">
        
        <div className="statement-left">
          <div className="statement-eyebrow-wrapper">
            <motion.div 
              className="statement-vertical-line"
              initial={{ height: 0 }}
              whileInView={{ height: 60 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span 
              className="label-small statement-eyebrow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              OUR APPROACH
            </motion.span>
          </div>
        </div>

        <div className="statement-right">
          <StaggerContainer className="statement-content">
            <StaggerItem>
              <h2 className="heading-xl statement-text">
                From hospitality ideas<br />
                to experiences people remember.
              </h2>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-body-large statement-description">
                Building a culinary brand goes beyond the menu. It requires an alignment of craft, people, and place—creating spaces where every detail serves the larger vision.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
};

export default BrandStatement;
