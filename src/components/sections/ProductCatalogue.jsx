import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { PRODUCTS } from '../../config/data';
import WhatsAppCTA from '../ui/WhatsAppCTA';
import './ProductCatalogue.css';

const ProductCatalogue = () => {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const totalScroll = scrollWidth - clientWidth;
      const currentScroll = scrollLeft;
      
      let newProgress = Math.round((currentScroll / totalScroll) * (PRODUCTS.length - 1)) + 1;
      if (newProgress < 1) newProgress = 1;
      if (newProgress > PRODUCTS.length) newProgress = PRODUCTS.length;
      
      setProgress(newProgress);
    };

    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section id="products" className="section catalogue-section">
      <div className="catalogue-header container">
        <div className="signature-line-group" style={{ marginBottom: '2rem' }}>
          <span className="signature-line"></span>
          <span className="signature-marker"></span>
          <span className="label-small">03 — CRAFTED FOODS</span>
        </div>
        <h2 className="heading-lg">A collection made<br/>to be remembered.</h2>
        
        <div className="catalogue-progress desktop-only">
          <span className="label-small">
            0{progress} &mdash; 0{PRODUCTS.length}
          </span>
        </div>
      </div>

      <div className="catalogue-rail-wrapper">
        <div className="catalogue-rail" ref={scrollRef}>
          {PRODUCTS.map((product, index) => (
            <motion.div 
              key={product.id} 
              className="product-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="product-image-wrapper">
                <motion.img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="product-reflection"></div>
              </div>
              <div className="product-info">
                <span className="label-small product-number">{product.id}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                  
                <button className="product-cta">
                  ENQUIRE
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalogue;
