import React from 'react';
import '../index.css';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import VerticalTabs from '../components/VerticalTabs';
import ColorSystem from '../components/ColorSystem';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="app">
      <div className="app-meta">
        <h1 style={{ display: 'none' }}>临在清单 - 智能任务管理工具</h1>
      </div>
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