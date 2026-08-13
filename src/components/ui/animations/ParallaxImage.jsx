import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxImage = ({ src, alt, className = '', offset = 50 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={`parallax-image-container ${className}`} style={{ overflow: 'hidden', position: 'relative' }}>
      <motion.img 
        src={src} 
        alt={alt}
        style={{ 
          y,
          width: '100%',
          height: `calc(100% + ${offset * 2}px)`,
          objectFit: 'cover',
          position: 'absolute',
          top: -offset,
          left: 0
        }} 
      />
    </div>
  );
};

export default ParallaxImage;
