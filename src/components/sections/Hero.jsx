import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import RevealMask from '../ui/animations/RevealMask';
import './Hero.css';

const Hero = () => {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Scroll Parallax
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "7%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const floatingY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scrollLineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Mouse Parallax
  const mouseX = useSpring(useTransform(() => mousePosition.x), { damping: 50, stiffness: 400 });
  const mouseY = useSpring(useTransform(() => mousePosition.y), { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // max 20px movement
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={ref} id="home" className="hero-section">
      {/* Layer 1: Background Image with Mouse Parallax */}
      <motion.div 
        className="hero-layer hero-bg"
        style={{ 
          y: imageY,
          x: mouseX,
          scale: 1.05 // prevent clipping on move
        }}
      >
        <img 
          src="/images/site/hero.jpg" 
          alt="Premium Hospitality" 
        />
      </motion.div>

      {/* Layer 2: Dark Gradient */}
      <div className="hero-layer hero-gradient"></div>

      {/* Layer 3: Warm Light Radial */}
      <div className="hero-layer hero-light"></div>

      {/* Layer 4: Foreground Content */}
      <div className="hero-content container">
        <motion.div className="hero-text-wrapper" style={{ y: textY }}>
          
          <RevealMask delay={0.2} duration={1}>
            <span className="label-small hero-eyebrow">
              HOSPITALITY <span className="dot">•</span> CULINARY <span className="dot">•</span> CONSULTING
            </span>
          </RevealMask>

          <h1 className="heading-display hero-title">
            <RevealMask delay={0.4} duration={0.8} className="hero-title-line">
              Building better
            </RevealMask>
            <RevealMask delay={0.5} duration={0.8} className="hero-title-line">
              hospitality
            </RevealMask>
            <RevealMask delay={0.6} duration={0.8} className="hero-title-line">
              experiences.
            </RevealMask>
          </h1>

        </motion.div>
      </div>

      <div className="hero-scroll-indicator">
        <span className="label-small">SCROLL</span>
        <div className="scroll-line-track">
          <motion.div className="scroll-line-fill" style={{ height: scrollLineHeight }}></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
