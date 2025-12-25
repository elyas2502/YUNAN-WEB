import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Service, LocalizedString } from '../types';
import { useAppContext } from '../contexts/AppContext';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;
  const { language } = useAppContext();

  const getText = (content: string | LocalizedString) => {
    if (typeof content === 'string') return content;
    return content[language] || content.EN;
  };
  
  return (
    <div className="group relative bg-white dark:bg-brand-ink/40 p-10 rounded-none border border-brand-ink/5 dark:border-brand-sand/5 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 overflow-hidden flex flex-col h-full">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -mr-32 -mt-32 transition-all group-hover:bg-brand-accent/15"></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="w-16 h-16 bg-brand-sand dark:bg-brand-sand/10 flex items-center justify-center mb-10 text-brand-primary dark:text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-ink transition-all duration-500 shadow-sm">
          <Icon size={32} strokeWidth={1.2} />
        </div>
        
        <h3 className="font-serif text-3xl font-medium text-brand-ink dark:text-brand-sand mb-6 group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors leading-tight">
          {getText(service.title)}
        </h3>
        
        <p className="text-brand-ink/60 dark:text-brand-sand/50 leading-relaxed mb-10 font-light text-sm flex-grow">
          {getText(service.description)}
        </p>
        
        <div className="space-y-4 mb-10 border-t border-brand-ink/5 dark:border-brand-sand/5 pt-8">
          {service.details.map((detail, idx) => (
            <div key={idx} className="flex items-start gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-brand-ink/40 dark:text-brand-sand/40">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1 shrink-0"></div>
              {getText(detail)}
            </div>
          ))}
        </div>
        
        <button className="flex items-center gap-4 text-brand-ink dark:text-brand-sand font-black text-[10px] uppercase tracking-[0.4em] group/btn transition-colors hover:text-brand-primary dark:hover:text-brand-accent">
          View Detailed Roadmap 
          <ArrowUpRight size={18} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;