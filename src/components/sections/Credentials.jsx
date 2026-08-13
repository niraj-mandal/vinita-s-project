import React from 'react';
import { motion } from 'framer-motion';
import { CREDENTIALS } from '../../config/data';
import './Credentials.css';

const Credentials = () => {
  return (
    <section className="section credentials-section">
      <div className="container credentials-container">
        
        <div className="credentials-header">
          <h2 className="heading-md">Awards & Recognition</h2>
          <span className="label-small text-muted">A SELECTED HISTORY</span>
        </div>

        <div className="credentials-list">
          {CREDENTIALS.map((cred, index) => (
            <motion.div 
              key={cred.id} 
              className="credential-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="credential-year label-small">{cred.year}</div>
              <div className="credential-title-wrapper">
                <h3 className="credential-title">{cred.title}</h3>
                <span className="credential-org text-muted">{cred.organization}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Credentials;
