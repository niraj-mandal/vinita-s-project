import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'PRODUCTS', href: '/products' },
  { name: 'EXPERIENCES', href: '/experiences' },
  { name: 'SERVICES', href: '/services' },
  { name: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use a solid background if not on Home, or if scrolled
  const headerBgClass = (isScrolled || !isHome)
    ? 'bg-oasis-black/95 backdrop-blur-md py-4 border-oasis-gold/20'
    : 'bg-transparent py-6 border-transparent';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${headerBgClass}`}
    >
      <div className="max-w-desktop mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo area */}
        <div className="flex flex-col">
          <Link to="/" className="font-serif text-2xl md:text-3xl text-oasis-cream tracking-wide uppercase group">
            Culinary Oasis
          </Link>
          <span className="text-oasis-gold text-[10px] md:text-xs italic font-serif tracking-widest mt-1 opacity-80">
            Flavours You Will Never Forget
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `text-xs font-semibold tracking-widest transition-colors duration-300 ${
                  isActive ? 'text-oasis-gold' : 'text-oasis-cream/80 hover:text-oasis-gold'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <MagneticButton>
            <Link
              to="/contact"
              className="flex items-center space-x-2 text-oasis-gold text-xs font-semibold tracking-widest uppercase border border-oasis-gold/30 hover:border-oasis-gold px-5 py-3 transition-all duration-300 group"
            >
              <span>Talk To Us</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-oasis-cream p-2"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-oasis-black flex flex-col pt-6 px-6 pb-12"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-oasis-cream tracking-wide uppercase">
                  Culinary Oasis
                </span>
                <span className="text-oasis-gold text-[10px] italic font-serif tracking-widest mt-1">
                  Flavours You Will Never Forget
                </span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-oasis-cream p-2"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 flex-grow">
              {navLinks.map((link, i) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-serif text-3xl transition-colors ${
                      isActive ? 'text-oasis-gold' : 'text-oasis-cream hover:text-oasis-gold'
                    }`
                  }
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {link.name}
                  </motion.div>
                </NavLink>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 text-oasis-black bg-oasis-gold text-sm font-semibold tracking-widest uppercase py-4 w-full"
              >
                <span>Talk To Us</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
