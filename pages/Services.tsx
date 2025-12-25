
import React from 'react';
import { SERVICES } from '../constants';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { LocalizedString } from '../types';

const Services: React.FC = () => {
  const { language, t } = useAppContext();

  const getText = (content: string | LocalizedString) => {
    if (typeof content === 'string') return content;
    return content[language] || content.EN;
  }

  return (
    <div className="bg-brand-sand/20 dark:bg-brand-ink min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-4xl mb-32 reveal active">
          <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">
            {t('nav.services')}
          </span>
          <h1 className="font-serif text-6xl md:text-8xl text-brand-ink dark:text-brand-sand mb-10 leading-[1.1]">
            {t('services.header')} <br/><span className="italic font-light text-brand-primary dark:text-brand-accent">{t('services.accent')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-ink/70 dark:text-brand-sand/70 font-light leading-relaxed max-w-2xl">
            {t('services.desc')}
          </p>
          <div className="mt-12 flex flex-wrap gap-8">
             <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-brand-accent">
                <Check size={16} strokeWidth={3} /> {t('services.no_reg')}
             </div>
             <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-brand-accent">
                <Check size={16} strokeWidth={3} /> {t('services.free_mock')}
             </div>
          </div>
        </div>

        {/* Detailed Services */}
        <div className="space-y-40">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-20 lg:gap-32 items-center`}>
              
              <div className="w-full md:w-1/2 relative group reveal">
                <div className={`absolute top-6 ${index % 2 === 0 ? '-left-6' : '-right-6'} w-full h-full border border-brand-accent/30 z-0`}></div>
                
                <div className="aspect-[4/3] relative overflow-hidden bg-white dark:bg-zinc-900 z-10 shadow-2xl">
                  {service.image ? (
                    <img 
                      src={service.image} 
                      alt={getText(service.title)} 
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-brand-sand/20 flex items-center justify-center text-brand-ink/20">
                      Image Unavailable
                    </div>
                  )}
                  <div className="absolute inset-0 bg-brand-ink/5 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
              </div>

              <div className="w-full md:w-1/2 reveal">
                <div className="text-[11px] font-black tracking-[0.4em] uppercase text-brand-ink/40 dark:text-brand-sand/40 mb-6 flex items-center gap-4">
                   <div className="w-12 h-px bg-brand-accent/50"></div>
                   {t('services.pillar')} 0{index + 1}
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-ink dark:text-brand-sand mb-8 leading-tight">
                  {getText(service.title)}
                </h2>
                
                <p className="text-brand-ink/70 dark:text-brand-sand/60 text-lg leading-relaxed mb-12 font-light">
                  {getText(service.description)}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white dark:bg-zinc-900 p-6 border border-brand-ink/5 dark:border-white/5 hover:border-brand-accent/30 transition-all">
                      <Check size={14} className="text-brand-accent" strokeWidth={3} />
                      <span className="text-brand-ink/90 dark:text-brand-sand/80 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                        {getText(detail)}
                      </span>
                    </div>
                  ))}
                </div>

                <Link to="/book" className="inline-flex items-center gap-4 text-brand-ink dark:text-brand-sand font-black text-[11px] uppercase tracking-[0.4em] group hover:text-brand-primary dark:hover:text-brand-accent transition-colors">
                  {t('services.initiate')} <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Advantage Recap */}
        <div className="mt-60 bg-brand-ink p-16 md:p-32 relative overflow-hidden text-center reveal">
           <div className="absolute inset-0 bg-tibeb-pattern opacity-10 scale-[2]"></div>
           <div className="relative z-10">
              <span className="text-brand-accent font-bold tracking-[0.5em] uppercase text-[11px] mb-12 block">
                {t('hero.tag')}
              </span>
              <h3 className="font-serif text-4xl md:text-7xl text-brand-sand mb-20 leading-tight">
                {t('services.advantage')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20">
                 <div className="space-y-4">
                    <div className="text-4xl md:text-6xl font-serif text-brand-accent mb-2">92%</div>
                    <div className="text-[10px] uppercase font-black tracking-[0.3em] text-brand-sand/40">
                      {language === 'AM' ? 'የቪዛ ስኬት' : 'Visa Mastery'}
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="text-4xl md:text-6xl font-serif text-brand-accent mb-2">0 ETB</div>
                    <div className="text-[10px] uppercase font-black tracking-[0.3em] text-brand-sand/40">
                      {language === 'AM' ? 'ምንም የምዝገባ ክፍያ' : 'Reg. Fee'}
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="text-4xl md:text-6xl font-serif text-brand-accent mb-2">150+</div>
                    <div className="text-[10px] uppercase font-black tracking-[0.3em] text-brand-sand/40">
                      {language === 'AM' ? 'ተባባሪ ተቋማት' : 'Partner Uni\'s'}
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="text-4xl md:text-6xl font-serif text-brand-accent mb-2">Free</div>
                    <div className="text-[10px] uppercase font-black tracking-[0.3em] text-brand-sand/40">
                      {language === 'AM' ? 'የሙከራ ስልጠና' : 'Mock Coaching'}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
