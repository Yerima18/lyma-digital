
import React, { useEffect, useRef, useState } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, className = '', delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  // Phase 1: After first paint, enable transitions
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Force the browser to compute the initial hidden styles
    // Reading a layout property triggers a synchronous reflow
    void el.offsetHeight;

    // Enable transitions after the browser has painted the hidden state
    requestAnimationFrame(() => {
      setReady(true);
    });
  }, []);

  // Phase 2: Once transitions are enabled, check visibility and observe
  useEffect(() => {
    if (!ready) return;
    const el = ref.current;
    if (!el) return;

    const show = () => setTimeout(() => setVisible(true), delay);

    // Check if already in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0, rootMargin: '0px 0px 50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ready, delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: ready
          ? 'opacity 0.8s ease-out, transform 0.8s ease-out'
          : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
