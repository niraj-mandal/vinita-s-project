import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import FinalCTA from '../components/sections/FinalCTA';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20 bg-oasis-cream">
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-desktop mx-auto px-6 md:px-12">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Column: Info */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-8 bg-oasis-gold/50"></div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-oasis-black/60 uppercase">
                    Get In Touch
                  </span>
                </div>
                
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-oasis-black">
                  Let's <span className="italic text-oasis-burgundy">Talk.</span>
                </h1>
                
                <p className="text-base md:text-lg font-light text-oasis-black/80 max-w-md leading-relaxed mb-16">
                  Whether you're looking to explore our food products, conceptualise a food festival, or require professional hospitality consulting, we'd love to hear from you.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-oasis-gold mt-1" />
                    <div>
                      <h4 className="text-xs font-bold tracking-widest uppercase mb-1 text-oasis-black">Phone</h4>
                      <p className="text-sm font-light text-oasis-black/70">+91-9953294105</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-oasis-gold mt-1" />
                    <div>
                      <h4 className="text-xs font-bold tracking-widest uppercase mb-1 text-oasis-black">Email</h4>
                      <p className="text-sm font-light text-oasis-black/70">vinita@v-culinary.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-oasis-gold mt-1" />
                    <div>
                      <h4 className="text-xs font-bold tracking-widest uppercase mb-1 text-oasis-black">Location</h4>
                      <p className="text-sm font-light text-oasis-black/70">Gurgaon, Haryana</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-oasis-black p-10 md:p-14"
              >
                <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold tracking-widest uppercase text-oasis-cream/60">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="bg-transparent border-b border-oasis-cream/20 py-3 text-oasis-cream focus:outline-none focus:border-oasis-gold transition-colors font-light"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold tracking-widest uppercase text-oasis-cream/60">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      className="bg-transparent border-b border-oasis-cream/20 py-3 text-oasis-cream focus:outline-none focus:border-oasis-gold transition-colors font-light"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="inquiry" className="text-xs font-semibold tracking-widest uppercase text-oasis-cream/60">Subject</label>
                    <select 
                      id="inquiry"
                      className="bg-transparent border-b border-oasis-cream/20 py-3 text-oasis-cream focus:outline-none focus:border-oasis-gold transition-colors font-light appearance-none"
                    >
                      <option value="products" className="bg-oasis-black">Food Products</option>
                      <option value="experiences" className="bg-oasis-black">Culinary Experiences</option>
                      <option value="consulting" className="bg-oasis-black">Hospitality Consulting</option>
                      <option value="other" className="bg-oasis-black">Other Inquiry</option>
                    </select>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-semibold tracking-widest uppercase text-oasis-cream/60">Message</label>
                    <textarea 
                      id="message"
                      rows="4"
                      className="bg-transparent border-b border-oasis-cream/20 py-3 text-oasis-cream focus:outline-none focus:border-oasis-gold transition-colors font-light resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="inline-flex items-center justify-center space-x-2 bg-oasis-gold text-oasis-black text-xs font-semibold tracking-widest uppercase px-8 py-5 mt-4 hover:bg-oasis-cream transition-colors duration-300 group"
                  >
                    <span>Send Message</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  
                </form>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
