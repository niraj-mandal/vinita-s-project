import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ExperienceModal from '../ui/ExperienceModal';
import MagneticButton from '../ui/MagneticButton';

const experiences = [
  {
    title: 'CUISINE EXPERIENCES',
    desc: 'Curated experiences around specific cuisines and culinary traditions.',
    image: '/images/experience_cuisine.jpg'
  },
  {
    title: 'FOOD FESTIVALS',
    desc: 'Conceptualisation and organisation of cuisine-focused food festivals.',
    image: '/images/experience_festival.jpg'
  },
  {
    title: 'CULINARY EVENTS',
    desc: 'Food-led experiences designed around unique themes and audiences.',
    image: '/images/experience_event.jpg'
  }
];

export default function Experiences() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <section id="experiences" className="bg-oasis-burgundy text-oasis-cream py-24 lg:py-32 relative">
      <div className="max-w-desktop mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-oasis-gold font-serif text-xl italic">03</span>
                <div className="h-[1px] w-8 bg-oasis-gold/50"></div>
                <span className="text-xs font-semibold tracking-[0.2em] text-oasis-cream/60 uppercase">
                  Culinary Experiences
                </span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                Bringing Cuisines<br />
                <span className="italic text-oasis-gold">To Life.</span>
              </h2>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/2 flex md:justify-end flex-col md:items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm md:text-base font-light text-oasis-cream/80 mb-6 md:text-right max-w-md">
              We create and organise cuisine-focused food festivals and culinary events that bring authentic flavours, people and experiences together.
            </p>
            <MagneticButton>
              <a 
                href="#all-experiences" 
                className="inline-flex items-center space-x-2 text-oasis-gold text-xs font-semibold tracking-widest uppercase hover:text-oasis-cream transition-colors duration-300 group border border-oasis-gold/30 px-6 py-4 hover:border-oasis-cream"
              >
                <span>Explore Experiences</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              layoutId={`experience-card-${exp.title}`}
              onClick={() => setSelectedExperience(exp)}
              data-cursor="explore"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group flex flex-col bg-oasis-black/40 border border-oasis-gold/10 hover:border-oasis-gold transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-oasis-gold/10"
            >
              <div className="relative h-64 overflow-hidden pointer-events-none">
                <motion.img 
                  layoutId={`experience-image-${exp.title}`}
                  src={exp.image} 
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-oasis-black/30 group-hover:bg-oasis-black/50 transition-colors duration-500" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow relative pointer-events-none">
                <motion.h3 
                  layoutId={`experience-title-${exp.title}`}
                  className="text-sm font-bold tracking-widest uppercase mb-4 text-oasis-cream group-hover:text-oasis-gold transition-colors"
                >
                  {exp.title}
                </motion.h3>
                <p className="text-sm font-light text-oasis-cream/70 leading-relaxed mb-6 flex-grow transition-opacity group-hover:opacity-100">
                  {exp.desc}
                </p>
                <div className="flex items-center text-oasis-gold text-xs font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span>Discover More</span>
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <ExperienceModal 
        experience={selectedExperience} 
        isOpen={!!selectedExperience} 
        onClose={() => setSelectedExperience(null)} 
      />
    </section>
  );
}
