import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Demo from './components/Demo';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'CT College Bot — твій помічник у навчанні';
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Demo />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;