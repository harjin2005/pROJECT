import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VenueSection from './components/venue/VenueSection';
import Services from './components/Services';
import PlanningTools from './components/planners/PlanningTools';
import VendorSection from './components/VendorSection';
import CulturalWeddings from './components/cultural/CulturalWeddings';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <VenueSection />
      <Services />
      <PlanningTools />
      <VendorSection />
      <CulturalWeddings />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;