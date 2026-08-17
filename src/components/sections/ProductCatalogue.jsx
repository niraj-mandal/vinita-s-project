import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductModal from '../ui/ProductModal';

const products = [
  {
    id: '01',
    name: 'NON-VEG PICKLES',
    desc: 'Bold, traditional recipes crafted for intense, authentic flavours.',
    image: '/images/product_pickle.jpg',
  },
  {
    id: '02',
    name: 'ARTISANAL CHUTNEYS',
    desc: 'Handcrafted chutneys with distinctive flavour profiles.',
    image: '/images/product_chutney.jpg',
  },
  {
    id: '03',
    name: 'HONEY-SOAKED DRY FRUITS',
    desc: 'Premium dry fruits soaked in honey for a naturally indulgent experience.',
    image: '/images/product_honey.jpg',
  },
  {
    id: '04',
    name: 'HEALTHY DRY SWEETS',
    desc: 'A modern approach to traditional sweets with better ingredients.',
    image: '/images/product_sweets.jpg',
  },
  {
    id: '05',
    name: 'PROTEIN-POWERED PRODUCTS',
    desc: 'Thoughtfully developed products designed around protein-rich ingredients.',
    image: '/images/product_protein.jpg',
  }
];

export default function ProductCatalogue() {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
    
    // Recalculate on resize
    const handleResize = () => {
      if (carouselRef.current) {
        setCarouselWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="products" className="bg-oasis-black text-oasis-cream py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-desktop mx-auto px-6 md:px-12">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-oasis-gold font-serif text-xl italic">02</span>
                <div className="h-[1px] w-8 bg-oasis-gold/50"></div>
                <span className="text-xs font-semibold tracking-[0.2em] text-oasis-cream/60 uppercase">
                  Our Products
                </span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
                Crafted With Care.<br />
                <span className="italic text-oasis-burgundy">Made To Be Remembered.</span>
              </h2>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/3 flex md:justify-end flex-col items-start md:items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm md:text-base font-light text-oasis-cream/70 mb-6 md:text-right max-w-sm">
              Discover our range of thoughtfully crafted products, created with a focus on distinctive flavours and memorable food experiences.
            </p>
            <div className="flex gap-4">
              <div className="hidden lg:flex gap-2">
                <div className="w-10 h-10 rounded-full border border-oasis-cream/20 flex items-center justify-center text-oasis-cream/50 pointer-events-none">
                  <ChevronLeft className="w-4 h-4" />
                </div>
                <div className="w-10 h-10 rounded-full border border-oasis-cream/20 flex items-center justify-center text-oasis-cream/50 pointer-events-none">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          <motion.div 
            ref={carouselRef}
            className="cursor-grab active:cursor-grabbing overflow-hidden"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div 
              drag="x"
              dragConstraints={{ right: 0, left: -carouselWidth }}
              dragElastic={0.1}
              dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
              className="flex gap-6 pb-8"
            >
              {products.map((product, i) => (
                <motion.div
                  key={product.id}
                  layoutId={`product-card-${product.id}`}
                  onClick={() => setSelectedProduct(product)}
                  data-cursor="view"
                  className="min-w-[85vw] sm:min-w-[350px] lg:min-w-[400px] flex flex-col group border border-oasis-cream/10 hover:border-oasis-gold transition-all duration-500 bg-oasis-black relative hover:-translate-y-2 hover:shadow-2xl hover:shadow-oasis-gold/5"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-oasis-dark pointer-events-none">
                    <motion.img 
                      layoutId={`product-image-${product.id}`}
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-oasis-black/90 via-transparent to-transparent opacity-80"></div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow relative z-10 -mt-20 bg-gradient-to-t from-oasis-black via-oasis-black to-transparent pt-20 pointer-events-none">
                    <span className="text-oasis-gold font-serif italic text-lg mb-2">{product.id}</span>
                    <motion.h3 
                      layoutId={`product-title-${product.id}`}
                      className="text-sm md:text-base font-bold tracking-widest uppercase mb-3 text-oasis-cream group-hover:text-oasis-gold transition-colors"
                    >
                      {product.name}
                    </motion.h3>
                    <p className="text-xs md:text-sm text-oasis-cream/60 leading-relaxed mb-6 flex-grow">
                      {product.desc}
                    </p>
                    
                    <div className="mt-auto flex justify-end">
                      <div className="w-8 h-8 rounded-full border border-oasis-cream/20 flex items-center justify-center group-hover:border-oasis-gold group-hover:bg-oasis-gold group-hover:text-oasis-black transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

      </div>

      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
}
