
import React from 'react';
import BrandLogo from './BrandLogo';

const GlobalLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-brand-sand dark:bg-brand-ink flex flex-col items-center justify-center transition-colors duration-500">
      <div className="relative">
        {/* Pulsing Glow */}
        <div className="absolute inset-0 bg-brand-accent/20 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Logo Animation */}
        <div className="relative z-10 animate-bounce">
          <BrandLogo className="w-16 h-16 md:w-20 md:h-20" variant="color" />
        </div>
      </div>
      
      {/* Loading Text */}
      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="h-0.5 w-24 bg-brand-ink/10 dark:bg-brand-sand/10 rounded-full overflow-hidden">
          <div className="h-full bg-brand-accent w-1/2 animate-marquee"></div>
        </div>
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-ink/40 dark:text-brand-sand/40 animate-pulse">
          Initializing
        </span>
      </div>
    </div>
  );
};

export default GlobalLoader;
