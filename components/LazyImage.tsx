
import React, { useEffect, useRef, useState } from 'react';
import { FALLBACK_IMAGE } from '../constants';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  className?: string;
  wrapperClassName?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, wrapperClassName, ...props }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const [hasError, setHasError] = useState(false);

  // Generate low-res placeholder for Unsplash images automatically
  const lowResSrc = src && src.includes('images.unsplash.com') 
    ? `${src.split('?')[0]}?auto=format&fit=crop&w=20&q=10&blur=20`
    : src; // Use original as placeholder if not unsplash, or a generic placeholder could be used

  useEffect(() => {
    // Reset state when src prop changes
    setIsLoaded(false);
    setHasError(false);
    
    // Start with low-res if available
    setCurrentSrc(lowResSrc);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasError) {
          const highRes = new Image();
          highRes.src = src;
          
          highRes.onload = () => {
            setCurrentSrc(src);
            setIsLoaded(true);
          };
          
          highRes.onerror = () => {
            console.warn('Failed to load image:', src);
            setHasError(true);
            setCurrentSrc(FALLBACK_IMAGE);
            setIsLoaded(true); // Treat fallback as loaded to remove blur
          };
          
          if (imgRef.current) {
            observer.unobserve(imgRef.current);
          }
        }
      });
    }, { rootMargin: '100px' }); // Load a bit earlier

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src, lowResSrc, hasError]);

  return (
    <div className={`relative overflow-hidden bg-brand-ink/5 dark:bg-white/5 ${wrapperClassName}`}>
      {/* Background blur layer for immediate preview */}
      {!isLoaded && !hasError && (
        <img 
          src={lowResSrc} 
          className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
          alt="" 
          aria-hidden="true"
        />
      )}
      
      <img
        ref={imgRef}
        src={currentSrc || lowResSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
          isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-lg scale-110'
        } ${className}`}
        {...props}
        onError={() => {
            if (!hasError) {
                setHasError(true);
                setCurrentSrc(FALLBACK_IMAGE);
                setIsLoaded(true);
            }
        }}
      />
    </div>
  );
};

export default LazyImage;
