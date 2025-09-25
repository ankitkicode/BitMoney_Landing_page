import React from 'react';

// Import Components
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Features from './components/Features';
import Advantages from './components/Advantages';
import Footer from './components/Footer';
import Steps from './components/Steps';
import Roadmap from './components/Roadmap';
import Tokens from './components/Tokens';
import Advisors from './components/Advisors';
import News from './components/News';




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
        <Steps />
        <Roadmap/>
        <Tokens/>
        <Advisors/>
        <News/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
