import React from 'react';

// Import Components
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Features from './components/Features';
import Advantages from './components/Advantages';
import Footer from './components/Footer';

// Import global styles
import './styles.css';


function App() {
  return (
    <div className="bg-[var(--primary-bg)]">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Features />
        <Advantages />
      </main>
      <Footer />
    </div>
  );
}

export default App;
