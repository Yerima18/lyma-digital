
import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ variant = 'light', size = 36 }) => {
  const bgColor = variant === 'light' ? '#0F0F0F' : '#F5F2ED';
  const textColor = variant === 'light' ? '#F5F2ED' : '#0F0F0F';

  return (
    <svg width={size} height={size} viewBox="0 0 70 70" fill="none">
      <rect width="70" height="70" fill={bgColor} />
      <text
        x="16"
        y="52"
        fontFamily="'Playfair Display', serif"
        fontSize="48"
        fontWeight="700"
        fill={textColor}
      >
        L
      </text>
      <rect x="42" y="44" width="14" height="4" fill="#C5A059" />
    </svg>
  );
};

export default Logo;
