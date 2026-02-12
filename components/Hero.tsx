
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-aura-beige">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-serif font-bold leading-[1.1] mb-8 hero-animate">
            We architect <br />
            <span className="italic font-light text-aura-accent">digital distinction.</span>
          </h1>
          <p className="text-xl md:text-2xl text-aura-black/70 mb-10 max-w-2xl text-balance leading-relaxed hero-animate hero-animate-delay-1">
            A premium development studio by Lyma Digital dedicated to crafting high-performance digital experiences that elevate brands and exceed market expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 hero-animate hero-animate-delay-2">
            <Link
              to="/projects"
              className="px-10 py-4 bg-aura-black text-aura-beige font-bold uppercase tracking-widest hover:bg-aura-accent transition-all duration-300 text-sm text-center"
            >
              Explore Our Work
            </Link>
            <Link
              to="/contact"
              className="px-10 py-4 border border-aura-black/20 text-aura-black font-bold uppercase tracking-widest hover:border-aura-black transition-all duration-300 text-sm text-center"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-96 h-96 bg-aura-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 text-aura-black/5 font-serif text-[20vw] select-none pointer-events-none hero-animate hero-animate-delay-3">LYMA</div>
    </section>
  );
};

export default Hero;
