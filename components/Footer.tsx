
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const SOCIAL_LINKS = [
  { name: 'Instagram', url: 'https://www.instagram.com/lymaab_/' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lafia-adam-bagri-1b0a73263/' },
  { name: 'GitHub', url: 'https://github.com/Yerima18' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-aura-black text-aura-beige pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Logo variant="dark" size={42} />
              <span className="text-2xl font-serif font-bold tracking-tighter">LYMA</span>
            </Link>
            <p className="text-aura-beige/60 max-w-sm mb-8">
              Bespoke digital architecture for brands that demand excellence. Based globally, serving visionaries everywhere.
            </p>
            <div className="flex space-x-6">
              {SOCIAL_LINKS.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.name} page`}
                  className="text-xs uppercase tracking-widest font-bold hover:text-aura-accent transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-aura-accent">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map(item => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-aura-beige/60 hover:text-aura-beige transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-aura-accent">Contact</h4>
            <ul className="space-y-4 text-aura-beige/60">
              <li>adambagrilafia@gmail.com</li>
              <li>+90 537-973-2964</li>
              <li>Istanbul, Turkey</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-aura-beige/40 tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} Lyma Digital Studio. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Designed by{' '}
            <a
              href="https://github.com/Yerima18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-aura-accent hover:text-aura-beige transition-colors"
            >
              LAFIA ADAM BAGRI
            </a>
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link to="/contact" className="hover:text-aura-beige transition-colors">Get in Touch</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
