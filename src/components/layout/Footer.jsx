import React from 'react';
import { BRAND, NAVIGATION } from '../../config/data';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        
        <div className="footer-top">
          <div className="footer-signature">
            <span className="label-small">HOSPITALITY • CULINARY • CONSULTING</span>
          </div>
        </div>

        <div className="footer-middle">
          <h2 className="footer-brand-name">{BRAND.name}</h2>
          <p className="footer-tagline text-body-large">{BRAND.tagline}</p>
        </div>

        <div className="footer-bottom">
          <div className="footer-nav">
            {NAVIGATION.map(item => (
              <a key={item.label} href={item.href} className="footer-link">
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="footer-social">
            <a href="#" className="footer-link">Instagram</a>
            <a href="#" className="footer-link">LinkedIn</a>
            <a href={`https://wa.me/${BRAND.contact.whatsapp}`} className="footer-link">WhatsApp</a>
          </div>

          <div className="footer-legal">
            <span className="footer-copy">&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
            <div className="footer-legal-links">
              <a href="#" className="footer-link-small">Privacy</a>
              <a href="#" className="footer-link-small">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
