import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagneticButton from '../ui/MagneticButton';

const services = [
  {
    num: '01',
    title: 'HOTEL MANAGEMENT CONSULTING',
    desc: 'Consulting solutions designed to help hospitality businesses plan, improve and operate with greater clarity and precision.',
    cta: 'Discuss Consulting',
    image: '/images/service_consulting.jpg'
  },
  {
    num: '02',
    title: 'HOSPITALITY MANPOWER',
    desc: 'Professional manpower solutions designed around the operational requirements of hospitality businesses.',
    cta: 'Discuss Manpower',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-oasis-black text-oasis-cream py-24 lg:py-32">
      <div className="max-w-desktop mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-oasis-gold font-serif text-xl italic">05</span>
            <div className="h-[1px] w-8 bg-oasis-gold/50"></div>
            <span className="text-xs font-semibold tracking-[0.2em] text-oasis-cream/60 uppercase">
              Hospitality Services
            </span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] max-w-2xl">
            Expertise Behind<br />
            <span className="italic text-oasis-gold">Better Hospitality.</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="group flex flex-col hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-8 border border-oasis-cream/10 rounded-sm">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-oasis-black/30 group-hover:bg-oasis-black/10 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-oasis-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Discover Overlay */}
                <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-center text-oasis-gold text-xs font-semibold tracking-widest uppercase">
                  <span>Discover More</span>
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </div>
              </div>
              
              <div className="flex flex-col flex-grow">
                <span className="text-oasis-gold font-serif italic text-2xl mb-4 group-hover:scale-110 origin-left transition-transform duration-300">{service.num}</span>
                <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-oasis-cream group-hover:text-oasis-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm font-light text-oasis-cream/70 leading-relaxed mb-8 max-w-md flex-grow">
                  {service.desc}
                </p>
                
                <div>
                  <MagneticButton>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center justify-center space-x-2 text-oasis-gold text-xs font-semibold tracking-widest uppercase px-6 py-4 border border-oasis-gold/30 hover:border-oasis-gold hover:bg-oasis-gold/10 transition-colors duration-300 group/btn"
                    >
                      <span>{service.cta}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
