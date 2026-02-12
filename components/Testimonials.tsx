
import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(TESTIMONIALS.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const visibleTestimonials = TESTIMONIALS.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-24 bg-aura-black text-aura-beige">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-aura-accent font-bold uppercase tracking-[0.2em] text-xs block mb-4">Client Feedback</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Trusted by leaders.</h2>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-2">
              <button
                aria-label="Previous testimonial"
                onClick={handlePrev}
                className="p-3 border border-white/10 hover:bg-white/5 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button
                aria-label="Next testimonial"
                onClick={handleNext}
                className="p-3 border border-white/10 hover:bg-white/5 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleTestimonials.map((t) => (
            <div key={t.id} className="p-10 border border-white/5 bg-white/[0.02] flex flex-col justify-between">
              <p className="text-2xl font-serif italic mb-10 leading-relaxed text-aura-beige/90">
                "{t.content}"
              </p>
              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full grayscale" />
                <div>
                  <h4 className="font-bold text-sm tracking-wide">{t.name}</h4>
                  <p className="text-xs text-aura-accent uppercase tracking-widest">{t.role} of {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
