import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './VerticalsOverview.css';

const verticals = [
  {
    id: "consulting",
    title: "CULINARY CONSULTING",
    number: "01",
    image: "/images/site/consulting.jpg",
    href: "#consulting"
  },
  {
    id: "manpower",
    title: "MANPOWER SOURCING",
    number: "02",
    image: "/images/site/manpower.jpg",
    href: "#manpower"
  },
  {
    id: "products",
    title: "ARTISANAL PRODUCTS",
    number: "03",
    image: "/images/site/products.jpg",
    href: "#products"
  }
];

const VerticalsOverview = () => {
  const { scrollYProgress } = useScroll();
  const bridgeX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section className="section verticals-section">
      <div className="verticals-container">
        {verticals.map((vertical, index) => (
          <a key={vertical.id} href={vertical.link} className="vertical-panel">
            <div className="vertical-bg-wrapper">
              <img src={vertical.image} alt={vertical.title} className="vertical-bg" />
              <div className="vertical-overlay"></div>
            </div>
            
            <div className="vertical-content">
              <span className="vertical-number">{vertical.id}</span>
              <div className="vertical-bottom">
                <h3 className="vertical-title">{vertical.title}</h3>
                <div className="vertical-explore">
                  <span className="explore-line"></span>
                  <span className="explore-text label-small">Explore</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="transition-bridge">
        <motion.div className="atmospheric-text bridge-text" style={{ x: bridgeX }}>
          HOSPITALITY
        </motion.div>
      </div>
    </section>
  );
};

export default VerticalsOverview;
