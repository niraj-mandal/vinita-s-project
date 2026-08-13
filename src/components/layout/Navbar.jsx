import React, { useState, useEffect } from 'react';
import { BRAND, NAVIGATION } from '../../config/data';
import WhatsAppCTA from '../ui/WhatsAppCTA';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <div className="nav-logo">
            <a href="#">{BRAND.name}</a>
          </div>
          
          <nav className="nav-links desktop-only">
            {NAVIGATION.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions desktop-only">
            <WhatsAppCTA text="TALK TO US" variant={scrolled ? "primary" : "secondary"} />
          </div>

          <button 
            className="mobile-menu-toggle mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`hamburger-icon ${mobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: "tween", duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-menu-content">
              <nav className="mobile-nav-links">
                {NAVIGATION.map((item, index) => (
                  <motion.a 
                    key={item.label} 
                    href={item.href} 
                    className="mobile-nav-link heading-md"
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div 
                className="mobile-nav-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <WhatsAppCTA className="full-width" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
