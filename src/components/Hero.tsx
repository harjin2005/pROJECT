import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 animate-fade-in">
          Create Your Perfect Day
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-delay">
          Let us transform your dream wedding into reality with our bespoke planning services
        </p>
        <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full transition-colors animate-fade-in-delay-2">
          Start Planning
        </button>

        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
}

export default Hero;