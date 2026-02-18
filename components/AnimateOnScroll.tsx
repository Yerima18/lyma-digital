
import React, { useEffect, useRef, useState } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, className = '', delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const triggerVisible = () => {
      // Double rAF ensures the browser has painted the hidden state first,
      // so the CSS transition actually animates instead of popping
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTimeout(() => setVisible(true), delay);
        });
      });
    };

    // If the element is already in the viewport on mount, trigger with rAF
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      triggerVisible();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0, rootMargin: '0px 0px 50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${visible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
