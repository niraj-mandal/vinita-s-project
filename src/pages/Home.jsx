import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import AboutOasis from '../components/sections/AboutOasis';
import ProductCatalogue from '../components/sections/ProductCatalogue';
import BrandStatement from '../components/sections/BrandStatement';
import Experiences from '../components/sections/Experiences';
import Process from '../components/sections/Process';
import Services from '../components/sections/Services';
import AboutVinita from '../components/sections/AboutVinita';
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <AboutOasis />
      <ProductCatalogue />
      <BrandStatement />
      <Experiences />
      <Process />
      <Services />
      <AboutVinita />
      <FinalCTA />
    </main>
  );
}
