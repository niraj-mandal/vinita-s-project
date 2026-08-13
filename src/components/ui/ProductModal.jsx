import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import WhatsAppCTA from './WhatsAppCTA';
import './ProductModal.css';

const ProductModal = ({ product, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <motion.div 
            className="modal-container glass-panel"
            onClick={e => e.stopPropagation()}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
          >
            <button className="modal-close" onClick={onClose}>
              <X size={24} />
            </button>
            
            <div className="modal-content">
              <div className="modal-image-container">
                <img src={product.image} alt={product.name} className="modal-image" />
              </div>
              
              <div className="modal-details">
                <span className="label-small modal-category">Product Details</span>
                <h3 className="heading-md modal-title">{product.name}</h3>
                <p className="text-body modal-description">{product.description}</p>
                
                <div className="modal-specs">
                  <div className="spec-row">
                    <span className="label-small">Ingredients</span>
                    <span className="spec-value">{product.ingredients}</span>
                  </div>
                  <div className="spec-row">
                    <span className="label-small">Available Formats</span>
                    <span className="spec-value">{product.formats}</span>
                  </div>
                  <div className="spec-row">
                    <span className="label-small">Price</span>
                    <span className="spec-value">{product.price}</span>
                  </div>
                </div>
                
                <div className="modal-actions">
                  <WhatsAppCTA 
                    text="Enquire on WhatsApp" 
                    message={`Hello, I would like to enquire about your product: ${product.name}`}
                    className="full-width"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
