import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import BrandStatement from './components/sections/BrandStatement';
import VerticalsOverview from './components/sections/VerticalsOverview';
import ConsultingSection from './components/sections/ConsultingSection';
import ManpowerSection from './components/sections/ManpowerSection';
import ProductCatalogue from './components/sections/ProductCatalogue';
import AboutVinita from './components/sections/AboutVinita';
import Credentials from './components/sections/Credentials';
import SelectedWork from './components/sections/SelectedWork';
import FutureExperiences from './components/sections/FutureExperiences';
import ContactSection from './components/sections/ContactSection';
import CustomCursor from './components/ui/CustomCursor';

function App() {
  return (
    <div className="app-wrapper">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <BrandStatement />
        <VerticalsOverview />
        <ConsultingSection />
        <ManpowerSection />
        <ProductCatalogue />
        <AboutVinita />
        <Credentials />
        <SelectedWork />
        <FutureExperiences />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
