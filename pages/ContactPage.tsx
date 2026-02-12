
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    budget: '$5k - $10k',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate form submission (replace with actual API endpoint)
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', service: 'Web Development', budget: '$5k - $10k', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-aura-accent font-bold uppercase tracking-[0.2em] text-xs block mb-4">Connect</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Let's build <br />something <span className="italic font-light">iconic.</span></h1>

            <div className="space-y-12 mt-16">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-aura-accent mb-4">Project Inquiries</h4>
                <p className="text-2xl font-serif">adamabagrilafia@gmail.com</p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-aura-accent mb-4">Our Studios</h4>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-bold mb-1">Istanbul</h5>
                    <p className="text-aura-black/60 text-sm">Istanbul, Turkey</p>
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Phone</h5>
                    <p className="text-aura-black/60 text-sm">+90 537-973-2964</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-aura-beige p-8 md:p-12 shadow-sm border border-aura-black/5">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <svg className="w-16 h-16 text-aura-accent mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="text-2xl font-serif font-bold mb-3">Thank you!</h3>
                <p className="text-aura-black/60 mb-8">A Lyma strategist will contact you shortly.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-xs font-bold uppercase tracking-widest text-aura-accent hover:text-aura-black transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs uppercase tracking-widest font-bold mb-2">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      className="w-full bg-white border border-aura-black/10 px-4 py-3 focus:outline-none focus:border-aura-accent transition-colors"
                      placeholder="Enter your name"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs uppercase tracking-widest font-bold mb-2">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      className="w-full bg-white border border-aura-black/10 px-4 py-3 focus:outline-none focus:border-aura-accent transition-colors"
                      placeholder="Email address"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-xs uppercase tracking-widest font-bold mb-2">Service of Interest</label>
                  <select
                    id="contact-service"
                    className="w-full bg-white border border-aura-black/10 px-4 py-3 focus:outline-none focus:border-aura-accent transition-colors"
                    value={formState.service}
                    onChange={(e) => setFormState({...formState, service: e.target.value})}
                  >
                    <option>Web Development</option>
                    <option>UI/UX Design</option>
                    <option>E-commerce Solution</option>
                    <option>Brand Identity</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-budget" className="block text-xs uppercase tracking-widest font-bold mb-2">Estimated Budget</label>
                  <select
                    id="contact-budget"
                    className="w-full bg-white border border-aura-black/10 px-4 py-3 focus:outline-none focus:border-aura-accent transition-colors"
                    value={formState.budget}
                    onChange={(e) => setFormState({...formState, budget: e.target.value})}
                  >
                    <option>$5k - $10k</option>
                    <option>$10k - $25k</option>
                    <option>$25k - $50k</option>
                    <option>$50k+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs uppercase tracking-widest font-bold mb-2">Project Brief</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    className="w-full bg-white border border-aura-black/10 px-4 py-3 focus:outline-none focus:border-aura-accent transition-colors"
                    placeholder="Tell us about your vision..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-aura-black text-aura-beige text-xs font-bold uppercase tracking-[0.2em] hover:bg-aura-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
