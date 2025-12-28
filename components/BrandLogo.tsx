
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
    gray: '#4B5563', 
    text: variant === 'light' ? '#F4F1DE' : '#1D1D1D'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Container for Logo & Text */}
      <div className="relative w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl overflow-visible">
          <defs>
             <linearGradient id="globe-gradient-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2a2a2a" />
                <stop offset="50%" stopColor="#111111" />
                <stop offset="100%" stopColor="#000000" />
             </linearGradient>
             
             {/* Defined Orbit Paths - Ellipses (Invisible but used for motion) */}
             <path id="orbit1" d="M 50 50 m -46 0 a 46 15 0 1 0 92 0 a 46 15 0 1 0 -92 0" />
             <path id="orbit2" d="M 50 50 m -46 0 a 46 15 0 1 0 92 0 a 46 15 0 1 0 -92 0" transform="rotate(60 50 50)" />
             <path id="orbit3" d="M 50 50 m -46 0 a 46 15 0 1 0 92 0 a 46 15 0 1 0 -92 0" transform="rotate(-60 50 50)" />
          </defs>

          {/* 
            LAYER 1: GLOBE (Slightly Smaller & Darker)
          */}
          <g style={{ filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.6))' }}>
            {/* Main Globe Sphere */}
            <circle cx="50" cy="50" r="36" fill="url(#globe-gradient-dark)" stroke={colors.black} strokeWidth="2" />
            
            {/* Thin Elegant Outer Stroke */}
            <circle cx="50" cy="50" r="42" stroke={colors.gold} strokeWidth="0.5" opacity="0.6" strokeDasharray="4 2" />

            {/* Lat/Long Grid - BOLDER LINES & MORE DENSITY */}
            <g stroke={colors.gold} strokeWidth="0.8" strokeOpacity="1" fill="none">
                {/* Longitudes */}
                <ellipse cx="50" cy="50" rx="7.5" ry="36" transform="rotate(0 50 50)" />
                <ellipse cx="50" cy="50" rx="17" ry="36" transform="rotate(0 50 50)" />
                <ellipse cx="50" cy="50" rx="26.5" ry="36" transform="rotate(0 50 50)" />
                <path d="M50 14 L50 86" />
                
                {/* Latitudes */}
                <path d="M14 50 L86 50" />
                <path d="M17 36 Q50 42 83 36" />
                <path d="M17 64 Q50 58 83 64" />
                <path d="M24 24 Q50 29 76 24" />
                <path d="M24 76 Q50 71 76 76" />
            </g>
          </g>

          {/* 
            LAYER 2: PLANES
            Smooth continuous orbital movement on invisible paths
          */}
          
          {/* Plane 1 */}
          <g>
             <path 
               d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
               fill={colors.gold}
               transform="scale(0.5) translate(-12, -12) rotate(90 12 12)" 
             />
             <animateMotion dur="14s" repeatCount="indefinite" rotate="auto" calcMode="linear">
               <mpath href="#orbit1" />
             </animateMotion>
          </g>

          {/* Plane 2 */}
          <g>
             <path 
               d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
               fill={colors.gold}
               transform="scale(0.4) translate(-12, -12) rotate(90 12 12)" 
             />
             <animateMotion dur="18s" begin="-3s" repeatCount="indefinite" rotate="auto" calcMode="linear">
               <mpath href="#orbit2" />
             </animateMotion>
          </g>

           {/* Plane 3 */}
           <g>
             <path 
               d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
               fill={colors.gold}
               transform="scale(0.45) translate(-12, -12) rotate(90 12 12)" 
             />
             <animateMotion dur="22s" begin="-7s" repeatCount="indefinite" rotate="auto" calcMode="linear">
               <mpath href="#orbit3" />
             </animateMotion>
          </g>

        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col -ml-1 text-left">
          <span className="font-sans text-3xl md:text-4xl font-black tracking-tight uppercase leading-[0.85]" style={{ color: colors.text }}>
            MIHRET BEKALU
          </span>
          <div className="flex items-center gap-1 mt-1">
            <div className="h-[1px] w-3 bg-brand-accent"></div>
            <span className="text-[7px] uppercase font-medium tracking-[0.2em] text-brand-accent">
              Visa Form & Consultancy
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandLogo;
