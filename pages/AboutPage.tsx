
import React from 'react';
import AnimateOnScroll from '../components/AnimateOnScroll';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-aura-beige">
      <div className="container mx-auto px-6">
        <AnimateOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <span className="text-aura-accent font-bold uppercase tracking-[0.2em] text-xs block mb-4">Our Essence</span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 italic">Bespoke.</h1>
              <p className="text-xl text-aura-black/70 leading-relaxed mb-6">
                Lyma Digital was founded by Lyma Adam Bagri on the principle that digital experiences should be as unique and refined as the brands they represent. I believe in quality over quantity, precision over speed, and strategy over guesswork.
              </p>
              <p className="text-aura-black/60 leading-relaxed">
                Based in Istanbul, I handle every project end-to-end — from strategy and design to development and deployment. This hands-on approach means every detail gets the attention it deserves, with no compromises along the way.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-aura-black overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=1000&fit=crop&q=80" alt="Istanbul - Lyma Digital Studio" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-aura-accent p-8 text-aura-beige hidden md:block">
                <p className="text-4xl font-serif font-bold mb-2">50+</p>
                <p className="text-xs uppercase tracking-widest font-bold">Projects Delivered</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-aura-black/10 pt-20 mb-32">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4 italic">The Mission</h3>
              <p className="text-sm text-aura-black/60 leading-relaxed">To elevate the standard of the internet through purposeful design and uncompromising performance.</p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold mb-4 italic">The Vision</h3>
              <p className="text-sm text-aura-black/60 leading-relaxed">To be the silent partner behind the world's most influential and aesthetically driven digital brands.</p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold mb-4 italic">The Values</h3>
              <p className="text-sm text-aura-black/60 leading-relaxed">Minimalism, Integrity, Innovation, and a relentless pursuit of perfection in every pixel.</p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Skills & Expertise */}
        <div className="border-t border-aura-black/10 pt-20">
          <AnimateOnScroll>
            <div className="mb-16">
              <span className="text-aura-accent font-bold uppercase tracking-[0.2em] text-xs block mb-4">What I Do</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Skills & expertise.</h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { skill: 'Frontend Development', tools: 'React, Next.js, TypeScript, Tailwind CSS' },
              { skill: 'UI/UX Design', tools: 'Figma, Wireframing, Prototyping, Design Systems' },
              { skill: 'Backend & APIs', tools: 'Node.js, Express, PostgreSQL, Firebase' },
              { skill: 'SEO & Performance', tools: 'Core Web Vitals, Lighthouse, Analytics' },
            ].map((item, index) => (
              <AnimateOnScroll key={item.skill} delay={index * 100}>
                <div className="p-8 bg-white border border-aura-black/5 hover:-translate-y-2 hover:shadow-lg transition-all duration-500">
                  <h3 className="text-lg font-serif font-bold mb-3">{item.skill}</h3>
                  <p className="text-sm text-aura-black/50 leading-relaxed">{item.tools}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
