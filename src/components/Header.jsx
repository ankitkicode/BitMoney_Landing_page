import React, { useState, useEffect, useRef } from 'react';
import AuthModal from './AuthModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null); // Mobile menu reference
  const buttonRef = useRef(null); // Menu button reference
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsMenuOpen(false); // Close mobile menu if open
    setIsModalOpen(true);
  };

  const navLinks = ["HOME", "ABOUT", "FEATURES", "PROJECT", "STEPS", "ROAD MAP", "TOKENS", "NEWS"];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`py-6 px-6 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--primary-bg)] shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center space-x-3 z-50">
          <svg className="w-10 h-10 text-[var(--accent-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 10v-1m0 0c-1.11 0-2.08-.402-2.599-1M9.401 15c-.52-.598-.9-1.402-.9-2s.38-1.402.9-2m5.198 4c.52-.598.9-1.402.9-2s-.38-1.402-.9-2M12 6a6 6 0 100 12 6 6 0 000-12z"></path>
          </svg>
          <h1 className="text-3xl font-bold tracking-wider text-white">BIT <span className="font-light">MONEY.</span></h1>
        </div>

        {/* Desktop Navigation + Buttons */}
        <div className="hidden lg:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            {navLinks.map(link => (
              <a key={link} href="#" className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-cyan)] transition-colors duration-300">{link}</a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <i className="fas fa-globe text-xl text-[var(--text-secondary)] cursor-pointer hover:text-white"></i>
            <button
              onClick={handleLoginClick}
              className="px-8 py-3 rounded-full text-md font-semibold btn-gradient"
            >
              <i className="fas fa-user mr-2"></i>LOGIN
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none z-50 relative"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-3xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-0 left-0 h-full w-full flex transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Left Side: Logo */}
        {/* <div className="w-1/3 bg-[var(--primary-bg)] flex items-start justify-center py-6">
          <div className="flex flex-col items-center space-y-2">
            <svg className="w-10 h-10 text-[var(--accent-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 10v-1m0 0c-1.11 0-2.08-.402-2.599-1M9.401 15c-.52-.598-.9-1.402-.9-2s.38-1.402.9-2m5.198 4c.52-.598.9-1.402.9-2s-.38-1.402-.9-2M12 6a6 6 0 100 12 6 6 0 000-12z"></path>
            </svg>
            <h1 className="text-2xl font-bold text-white">BIT <span className="font-light">MONEY.</span></h1>
          </div>
        </div> */}

        {/* Right Side: Links + Buttons */}
        <div className="w-2/3 bg-[var(--secondary-bg)] p-6 flex flex-col justify-center space-y-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <a key={link} href="#" className="text-md font-medium text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:bg-white/5 rounded-lg p-2 transition-all duration-300">{link}</a>
            ))}
          </nav>
          <button
            onClick={handleLoginClick}
            className="px-8 py-3 rounded-full text-md font-semibold btn-gradient w-full"
          >
            <i className="fas fa-user mr-2"></i>LOGIN
          </button>
        </div>
      </div>

      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Header;
