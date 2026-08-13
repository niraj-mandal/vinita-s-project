import React from 'react';
import { BRAND } from '../../config/data';
import WhatsAppCTA from '../ui/WhatsAppCTA';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        
        <div className="contact-content">
          <div className="signature-line-group" style={{ marginBottom: '3rem' }}>
            <span className="signature-line" style={{ backgroundColor: 'var(--background)' }}></span>
            <span className="signature-marker" style={{ backgroundColor: 'var(--background)' }}></span>
            <span className="label-small" style={{ color: 'var(--background)' }}>START A CONVERSATION</span>
          </div>

          <h2 className="heading-display contact-title">
            Let's build something<br />
            <span className="text-accent">extraordinary</span> together.
          </h2>

          <div className="contact-actions">
            <WhatsAppCTA 
              text="Connect on WhatsApp" 
              variant="light"
              className="contact-main-cta"
            />
            
            <a href={`mailto:${BRAND.contact.email}`} className="contact-email-link">
              Or email us at {BRAND.contact.email}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
