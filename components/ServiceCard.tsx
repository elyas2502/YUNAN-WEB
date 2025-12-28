
import React from 'react';
import { ArrowUpRight, ShieldCheck, Check } from 'lucide-react';
import { Service, LocalizedString } from '../types';
import { useAppContext } from '../contexts/AppContext';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;
  const { language, t } = useAppContext();
  const isEmbassyGuidance = service.id === 'embassy-guidance';

  const getText = (content: string | LocalizedString) => {
    if (typeof content === 'string') return content;
    return content[language] || content.EN;
  };
  
  return (
    <div className={`group relative bg-white dark:bg-brand-ink/40 rounded-[2rem] border transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 overflow-hidden flex flex-col h-full ${
      isEmbassyGuidance 
        ? 'border-brand-accent/50 dark:border-brand-accent/20 border-[0.5px]' // Thinner border for this card
        : 'border-brand-ink/10 dark:border-brand-sand/10'
    }`}>
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -mr-32 -mt-32 transition-all group-hover:bg-brand-accent/15"></div>

      {/* SPECIAL: Embassy Guidance Image Overlay */}
      {isEmbassyGuidance && (
        <div className="absolute top-0 left-0 w-full h-48 z-0 overflow-hidden opacity-10 pointer-events-none">
           {/* Animated Passports Layer */}
           <div className="relative w-full h-full">
              {/* Floating Passport 1 */}
              <div className="absolute top-4 right-10 w-12 h-16 bg-brand-emerald rounded border border-white/20 rotate-12 shadow-lg animate-float" style={{animationDelay: '0s'}}>
                 <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="w-6 h-6 rounded-full border border-brand-accent/50 flex items-center justify-center">
                       <div className="w-4 h-4 rounded-full bg-brand-accent"></div>
                    </div>
                    <div className="w-8 h-1 bg-white/20 mt-2 rounded"></div>
                 </div>
              </div>
              
              {/* Floating Passport 2 */}
              <div className="absolute top-12 left-10 w-10 h-14 bg-brand-primary rounded border border-white/20 -rotate-12 shadow-lg animate-float" style={{animationDelay: '1.5s'}}>
                 <div className="w-full h-full flex flex-col items-center justify-center">
                     <div className="w-4 h-4 rounded-full border border-white/30"></div>
                     <div className="w-6 h-0.5 bg-white/20 mt-2 rounded"></div>
                 </div>
              </div>

              {/* Floating Passport 3 */}
              <div className="absolute bottom-4 right-24 w-8 h-12 bg-red-800 rounded border border-white/20 rotate-45 shadow-lg animate-float" style={{animationDelay: '0.5s'}}></div>
           </div>
        </div>
      )}

      {/* SPECIAL: Verified Badge for Embassy Guidance */}
      {isEmbassyGuidance && (
        <div className="absolute top-6 right-6 z-20 bg-brand-accent text-brand-ink px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
           <ShieldCheck size={12} fill="currentColor" className="text-brand-ink" />
           <span className="text-[9px] font-black uppercase tracking-widest">Verified</span>
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full p-10">
        <div className={`w-16 h-16 flex items-center justify-center mb-10 text-brand-primary dark:text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-ink transition-all duration-500 shadow-sm rounded-2xl ${isEmbassyGuidance ? 'bg-brand-accent/10 dark:bg-brand-accent/10' : 'bg-brand-sand dark:bg-brand-sand/10'}`}>
          <Icon size={32} strokeWidth={isEmbassyGuidance ? 0.8 : 1.2} />
        </div>
        
        <h3 className={`font-serif text-3xl mb-6 group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors leading-tight ${
          isEmbassyGuidance 
            ? 'font-thin text-brand-ink dark:text-brand-sand' // Thinner font specifically for this card
            : 'font-medium text-brand-ink dark:text-brand-sand'
        }`}>
          {getText(service.title)}
        </h3>
        
        <p className="text-brand-ink/60 dark:text-brand-sand/50 leading-relaxed mb-10 font-light text-sm flex-grow">
          {getText(service.description)}
        </p>
        
        <div className="space-y-4 mb-10 border-t border-brand-ink/10 dark:border-white/10 pt-8">
          {service.details.map((detail, idx) => (
            <div key={idx} className="flex items-start gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-brand-ink/60 dark:text-brand-sand/60">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${isEmbassyGuidance ? 'bg-brand-emerald text-white' : 'bg-brand-ink/5 dark:bg-white/10 text-brand-accent'}`}>
                 <Check size={8} strokeWidth={4} />
              </div>
              <span className="mt-0.5">{getText(detail)}</span>
            </div>
          ))}
        </div>
        
        <button className={`w-full py-4 flex items-center justify-center gap-4 font-black text-[10px] uppercase tracking-[0.4em] transition-all rounded-xl ${
          isEmbassyGuidance 
            ? 'bg-brand-ink text-brand-sand dark:bg-brand-sand dark:text-brand-ink hover:bg-brand-accent hover:text-brand-ink dark:hover:bg-brand-accent border border-brand-ink/10' 
            : 'border border-brand-ink/10 dark:border-white/10 text-brand-ink dark:text-brand-sand hover:bg-brand-ink hover:text-brand-sand dark:hover:bg-white dark:hover:text-brand-ink'
        }`}>
          {t('serv.view_roadmap')}
          <ArrowUpRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
