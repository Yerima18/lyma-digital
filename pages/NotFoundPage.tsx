
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-aura-beige">
      <div className="text-center px-6">
        <p className="text-aura-accent font-bold uppercase tracking-[0.2em] text-xs mb-6">Error 404</p>
        <h1 className="text-7xl md:text-9xl font-serif font-bold mb-6">
          Lost<span className="text-aura-accent">.</span>
        </h1>
        <p className="text-xl text-aura-black/60 mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-10 py-4 bg-aura-black text-aura-beige font-bold uppercase tracking-widest hover:bg-aura-accent transition-all duration-300 text-sm"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
