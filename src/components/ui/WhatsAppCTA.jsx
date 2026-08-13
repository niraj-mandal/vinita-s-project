import React from 'react';
import { BRAND } from '../../config/data';
import { ArrowRight } from 'lucide-react';
import './WhatsAppCTA.css';

const WhatsAppCTA = ({ 
  text = "Talk on WhatsApp", 
  message = "Hello, I am interested in learning more about your hospitality and culinary services.",
  variant = "primary", // primary, secondary, light
  className = "" 
}) => {
  
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BRAND.contact.whatsapp}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <a 
      href={`https://wa.me/${BRAND.contact.whatsapp}`} 
      onClick={handleWhatsAppClick}
      className={`btn btn-${variant} cta-interactive ${className}`}
    >
      <span className="btn-text">{text}</span>
      <span className="btn-icon-wrapper">
        <ArrowRight size={14} className="btn-arrow" />
      </span>
    </a>
  );
};

export default WhatsAppCTA;
