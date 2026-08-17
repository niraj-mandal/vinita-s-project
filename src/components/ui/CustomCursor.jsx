import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hoverType, setHoverType] = useState(null); // 'view', 'explore', 'link'
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Set up hover tracking via dataset attributes
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setHoverType(target.getAttribute('data-cursor'));
      } else {
        const isClickable = e.target.closest('a, button, input, select, textarea');
        if (isClickable) {
          setHoverType('link');
        } else {
          setHoverType(null);
        }
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    return null; // Don't render custom cursor on mobile
  }

  const variants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: '#FAFAFA',
      mixBlendMode: 'difference',
      opacity: isVisible ? 1 : 0
    },
    link: {
      width: 40,
      height: 40,
      backgroundColor: 'transparent',
      border: '1px solid #B08A57',
      mixBlendMode: 'normal',
      opacity: isVisible ? 1 : 0
    },
    view: {
      width: 80,
      height: 80,
      backgroundColor: '#B08A57',
      border: 'none',
      mixBlendMode: 'normal',
      opacity: isVisible ? 1 : 0
    },
    explore: {
      width: 80,
      height: 80,
      backgroundColor: '#B08A57',
      border: 'none',
      mixBlendMode: 'normal',
      opacity: isVisible ? 1 : 0
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full overflow-hidden text-oasis-black font-sans text-[10px] font-bold tracking-widest uppercase"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%'
      }}
      variants={variants}
      animate={hoverType || 'default'}
      transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: (hoverType === 'view' || hoverType === 'explore') ? 1 : 0,
          scale: (hoverType === 'view' || hoverType === 'explore') ? 1 : 0
        }}
        transition={{ duration: 0.2 }}
      >
        {hoverType === 'view' && 'View'}
        {hoverType === 'explore' && 'Explore'}
      </motion.div>
    </motion.div>
  );
}
