import React from 'react';

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark' | 'color';
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = "w-12 h-12", showText = false, variant = 'color' }) => {
  const colors = {
    navy: '#0F4C81',
    gold: '#D4AF37',
    emerald: '#2D6A4F',
    black: '#0a0a0a',
    gray: '#4B5563', // Gray-600
    text: variant === 'light' ? '#F4F1DE' : '#1D1D1D'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Container for Logo & Text - Logo is always first in DOM, layout controlled via flex or parent */}
      <div className="relative w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl overflow-visible">
          
          <defs>
             <linearGradient id="globe-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2c2c2c" />
                <stop offset="100%" stopColor="#000000" />
             </linearGradient>
          </defs>

          {/* Globe Container */}
          <g>
            {/* Base Sphere (Black) */}
            <circle cx="50" cy="50" r="36" fill="url(#globe-gradient)" stroke={colors.black} strokeWidth="0.5" />
            
            {/* Longitude & Latitude Wireframe Lines (Golden) */}
            <g stroke={colors.gold} strokeWidth="0.8" strokeOpacity="0.8" fill="none">
                {/* Longitude (Vertical Ellipses) */}
                <ellipse cx="50" cy="50" rx="12" ry="36" />
                <ellipse cx="50" cy="50" rx="24" ry="36" />
                <path d="M50 14 L50 86" /> {/* Center Meridian */}

                {/* Latitude (Horizontal Curves for 3D effect) */}
                <path d="M14 50 L86 50" /> {/* Equator */}
                
                {/* Northern Hemisphere */}
                <path d="M16 38 Q50 44 84 38" />
                <path d="M23 26 Q50 30 77 26" />
                
                {/* Southern Hemisphere */}
                <path d="M16 62 Q50 56 84 62" />
                <path d="M23 74 Q50 70 77 74" />
            </g>

            {/* Gloss Highlight (Top Right) */}
            <path d="M50 14 C 70 14, 86 30, 86 50" stroke="white" strokeWidth="0.8" opacity="0.15" strokeLinecap="round" />
          </g>

          {/* Orbital Path Line (Dotted) */}
          <circle cx="50" cy="50" r="46" stroke={colors.gold} strokeWidth="0.5" strokeDasharray="3 3" opacity="0.4" />

          {/* Styles for animation */}
          <style>
            {`
              @keyframes orbit-cw {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              .orbit-anim {
                transform-origin: 50px 50px;
                animation: orbit-cw 12s linear infinite;
              }
              .plane-bold {
                filter: drop-shadow(0px 2px 2px rgba(0,0,0,0.6));
              }
            `}
          </style>

          {/* Orbiting Plane (Clockwise) */}
          <g className="orbit-anim">
             <g transform="translate(50, 4)"> {/* Position at Top (Radius 46) */}
                {/* Plane Icon - Solid Silhouette matching the requested design */}
                <path 
                  className="plane-bold"
                  d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                  fill={colors.gold}
                  stroke="#000000"
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                  transform="scale(1.3) rotate(90) translate(-12, -12)" 
                />
             </g>
          </g>
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col -ml-1">
          <span className="font-sans text-3xl md:text-4xl font-black tracking-tight uppercase leading-[0.85]" style={{ color: colors.text }}>
            Mihret Bekalu
          </span>
          <div className="flex items-center gap-1 mt-1.5">
            <div className="h-[2px] w-4 bg-brand-accent"></div>
            <span className="text-[8px] uppercase font-bold tracking-[0.25em] text-brand-accent">
              Visa Form and Consultancy
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandLogo;