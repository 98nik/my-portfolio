import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import About from './components/About';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize any global animations here
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="bg-white">
      <Hero />
      <About />
    </div>
  );
}

export default App;