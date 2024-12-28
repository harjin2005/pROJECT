import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Heart className="h-6 w-6 text-rose-500" />
            <span className="ml-2 text-xl font-serif">Eternal Moments</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-rose-500 transition-colors">Home</a>
            <a href="#services" className="hover:text-rose-500 transition-colors">Services</a>
            <a href="#gallery" className="hover:text-rose-500 transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-rose-500 transition-colors">Contact</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#home" className="hover:text-rose-500 transition-colors">Home</a>
              <a href="#services" className="hover:text-rose-500 transition-colors">Services</a>
              <a href="#gallery" className="hover:text-rose-500 transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-rose-500 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;