
import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { SERVICES, PROJECTS } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-aura-beige">
      <Hero />

      {/* Services Snapshot */}
      <section className="py-24 border-y border-aura-black/5">
        <div className="container mx-auto px-6">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-start mb-16">
              <div className="max-w-xl">
                <span className="text-aura-accent font-bold uppercase tracking-[0.2em] text-xs block mb-4">Expertise</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Comprehensive digital mastery.</h2>
              </div>
              <Link to="/services" className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-widest group flex items-center">
                All Services
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {SERVICES.map((s, index) => (
              <AnimateOnScroll key={s.id} delay={index * 100}>
                <div className="group cursor-default p-6 -m-6 hover:-translate-y-2 hover:shadow-lg transition-all duration-500">
                  <div className="w-12 h-12 bg-aura-black text-aura-beige flex items-center justify-center mb-6 group-hover:bg-aura-accent transition-colors duration-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={s.icon}></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-4">{s.title}</h3>
                  <p className="text-aura-black/60 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Snapshot */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <span className="text-aura-accent font-bold uppercase tracking-[0.2em] text-xs block mb-4">Selected Work</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Excellence in practice.</h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PROJECTS.slice(0, 2).map((p, index) => (
              <AnimateOnScroll key={p.id} delay={index * 150}>
                <Link to="/projects" className="group block overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden mb-6">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-aura-accent font-bold">{p.category}</span>
                      <h3 className="text-2xl font-serif font-bold mt-1">{p.title}</h3>
                    </div>
                    <div className="w-10 h-10 border border-aura-black/10 flex items-center justify-center group-hover:bg-aura-black group-hover:text-aura-beige transition-all">
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <div className="text-center mt-16">
              <Link
                to="/projects"
                className="px-10 py-4 bg-aura-black text-aura-beige font-bold uppercase tracking-widest hover:bg-aura-accent transition-all duration-300 text-sm"
              >
                View Portfolio
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Testimonials />
      <Pricing />

      {/* Final CTA */}
      <section className="py-24 border-t border-aura-black/5">
        <div className="container mx-auto px-6 text-center">
          <AnimateOnScroll>
            <h2 className="text-4xl md:text-7xl font-serif font-bold mb-10 leading-tight">
              Ready to <span className="italic font-light">elevate</span> your <br className="hidden md:block"/> digital presence?
            </h2>
            <Link
              to="/contact"
              className="inline-block px-12 py-5 bg-aura-black text-aura-beige font-bold uppercase tracking-widest hover:bg-aura-accent transition-all duration-300 text-sm shadow-xl"
            >
              Start Your Journey
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Home;
