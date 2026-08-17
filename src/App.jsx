import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis, useLenis } from 'lenis/react';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Preloader from './components/ui/Preloader';
import CustomCursor from './components/ui/CustomCursor';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Experiences from './pages/Experiences';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  // Re-enable global styles when loader finishes
  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <Router>
        <CustomCursor />
        
        <AnimatePresence mode="wait">
          {loading && <Preloader onComplete={handleLoaderComplete} />}
        </AnimatePresence>

        <div className={`bg-oasis-black min-h-screen font-sans text-oasis-cream selection:bg-oasis-gold selection:text-white flex flex-col transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ReactLenis>
  );
}

export default App;
