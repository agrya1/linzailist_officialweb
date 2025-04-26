import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import VerticalTabs from './components/VerticalTabs';
import ColorSystem from './components/ColorSystem';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <VerticalTabs />
        <ColorSystem />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App; 