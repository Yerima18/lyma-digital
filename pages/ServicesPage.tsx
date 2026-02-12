
import React from 'react';
import { SERVICES } from '../constants';
import AnimateOnScroll from '../components/AnimateOnScroll';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-aura-beige">
      <div className="container mx-auto px-6">
        <AnimateOnScroll>
          <header className="max-w-3xl mb-24">
            <span className="text-aura-accent font-bold uppercase tracking-[0.2em] text-xs block mb-4">Capabilities</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">What we bring to the table.</h1>
            <p className="text-xl text-aura-black/70 leading-relaxed">
              We don't just build websites; we design digital experiences that perform. Our cross-disciplinary approach ensures every project is aesthetically refined and technically superior.
            </p>
          </header>
        </AnimateOnScroll>

        <div className="space-y-32">
          {SERVICES.map((s, index) => (
            <AnimateOnScroll key={s.id} delay={100}>
              <div className={`flex flex-col md:flex-row items-center gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                  <div className="aspect-square bg-white border border-aura-black/5 overflow-hidden flex items-center justify-center p-20 shadow-sm">
                     <svg className="w-full h-full text-aura-black/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d={s.icon}></path>
                    </svg>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <span className="text-aura-accent font-bold text-lg mb-4 block italic">0{index + 1}.</span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{s.title}</h2>
                  <p className="text-lg text-aura-black/60 mb-8 leading-relaxed">
                    {s.description} Our approach integrates advanced research with cutting-edge tools to deliver results that move the needle. From initial wireframing to final deployment, we ensure a seamless transition for your users.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 mb-10">
                    {['Discovery', 'Strategy', 'Design', 'Development'].map(step => (
                      <li key={step} className="flex items-center text-sm font-medium uppercase tracking-widest text-aura-black/80">
                        <span className="w-2 h-2 bg-aura-accent mr-3"></span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
