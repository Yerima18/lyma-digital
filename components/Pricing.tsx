
import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-aura-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-aura-accent font-bold uppercase tracking-[0.2em] text-xs block mb-4">Investment</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Simple, transparent value.</h2>
          <p className="text-aura-black/60 max-w-xl mx-auto">
            Choose a plan that fits your current needs. All plans include our premium design philosophy and technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.name}
              className={`p-10 flex flex-col transition-all duration-300 ${
                plan.recommended 
                  ? 'bg-aura-black text-aura-beige shadow-2xl scale-105 z-10' 
                  : 'bg-white border border-aura-black/5 hover:border-aura-black/20'
              }`}
            >
              <div className="mb-8">
                <h3 className="text-xl font-serif font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold tracking-tighter">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="ml-2 text-sm opacity-60">/ project</span>}
                </div>
                <p className={`mt-4 text-sm ${plan.recommended ? 'text-aura-beige/60' : 'text-aura-black/60'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <svg className={`w-4 h-4 mr-3 ${plan.recommended ? 'text-aura-accent' : 'text-aura-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact"
                className={`w-full py-4 text-center text-xs font-bold uppercase tracking-widest transition-colors ${
                  plan.recommended 
                    ? 'bg-aura-beige text-aura-black hover:bg-aura-accent hover:text-aura-beige' 
                    : 'bg-aura-black text-aura-beige hover:bg-aura-accent'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
