import React from 'react';
import { SERVICES } from '../constants';
import { Check, ArrowRight, ShieldCheck, Globe, Star } from 'lucide-react';
// @ts-ignore
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
        
        {/* Header Section */}
        <div className="max-w-4xl mb-32 reveal active">
          <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">
            Our Services
          </span>
          <h1 className="font-serif text-6xl md:text-8xl text-brand-ink dark:text-brand-sand mb-10 leading-[1.1]">
            Expert <span className="italic font-light text-brand-primary dark:text-brand-accent">Consultancy</span> <br/>
            for Every Journey.
          </h1>
          <p className="text-xl md:text-2xl text-brand-ink/70 dark:text-brand-sand/70 font-light leading-relaxed max-w-2xl">
            {language === 'AM' 
              ? 'በምሕረት በቀሉ የቪዛ ቅጽ እና አማካሪ ድርጅት ውስጥ አስተማማኝ እና ደንበኛ-ተኮር የቪዛ እና የጉዞ አገልግሎቶችን እንሰጣለን። ለትምህርት፣ ለሥራ፣ ለጉብኝት ወይም ቤተሰብን ለመጠየቅ ዓለም አቀፍ ግቦችዎን እንዲያሳኩ በእያንዳንዱ ደረጃ እንመራዎታለን። አቀራረባችን ሙያዊ፣ ጥንቃቄ የተሞላበት እና ለእያንዳንዱ ደንበኛ ፍላጎት የተመቻቸ ነው።'
              : 'At Mhiret Bekalu Visa Form and Consulting, we provide reliable and client-focused visa and travel services. We guide you through every step, helping you achieve your international goals—whether for study, work, tourism, or visiting family. Our approach is professional, careful, and tailored to each client’s needs.'}
          </p>
        </div>

        {/* Services List - Alternating Layout */}
        <div className="space-y-48">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 lg:gap-32 items-center py-24`}>
              
              {/* Background Theme Image (Blurred) */}
              {service.image && (
                <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.03] dark:opacity-[0.05] pointer-events-none rounded-[4rem]">
                   <img src={service.image} alt="" className="w-full h-full object-cover blur-[100px] scale-125" loading="lazy" />
                </div>
              )}

              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group reveal z-10">
                <div className={`absolute -top-6 ${index % 2 === 0 ? '-left-6' : '-right-6'} w-full h-full border border-brand-accent/20 z-0`}></div>
                <div className="aspect-[4/3] relative overflow-hidden bg-white dark:bg-zinc-900 z-10 shadow-2xl rounded-sm">
                  {service.image ? (
                    <img 
                      src={service.image} 
                      alt={getText(service.title)} 
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-full bg-brand-sand/20 flex items-center justify-center text-brand-ink/20">
                      <Globe size={64} strokeWidth={0.5} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-brand-ink/10 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 reveal z-10">
                <div className="text-[11px] font-black tracking-[0.4em] uppercase text-brand-ink/40 dark:text-brand-sand/40 mb-8 flex items-center gap-6">
                   <div className="w-16 h-px bg-brand-accent/50"></div>
                   Pillar 0{index + 1}
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-ink dark:text-brand-sand mb-10 leading-tight">
                  {getText(service.title)}
                </h2>
                <p className="text-brand-ink/70 dark:text-brand-sand/60 text-lg leading-relaxed mb-12 font-light">
                  {getText(service.description)}
                </p>
                
                {/* Detail Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-4 bg-white/50 dark:bg-zinc-900/50 p-6 border border-brand-ink/5 dark:border-white/5 hover:border-brand-accent/40 transition-all group/detail backdrop-blur-sm">
                      <div className="w-1.5 h-1.5 bg-brand-accent rounded-full group-hover/detail:scale-150 transition-transform mt-2"></div>
                      <span className="text-brand-ink/90 dark:text-brand-sand/80 text-[10px] font-black uppercase tracking-widest leading-relaxed">
                        {getText(detail)}
                      </span>
                    </div>
                  ))}
                </div>

                <Link to="/book" className="inline-flex items-center gap-6 text-brand-ink dark:text-brand-sand font-black text-[12px] uppercase tracking-[0.4em] group/btn hover:text-brand-primary dark:hover:text-brand-accent transition-colors">
                  Initiate Process <ArrowRight size={24} className="group-hover/btn:translate-x-4 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Call to Action */}
        <div className="mt-60 bg-brand-primary p-20 md:p-32 text-center rounded-[4rem] text-brand-sand reveal active relative overflow-hidden">
           <div className="absolute inset-0 bg-tibeb-pattern opacity-10"></div>
           <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="font-serif text-5xl md:text-7xl mb-12">Professional Guidance You Can Trust.</h2>
              <p className="text-xl font-light opacity-70 mb-16">Our team ensures every client receives dependable guidance from consultation to completion.</p>
              <Link to="/book" className="bg-brand-accent text-brand-ink px-16 py-6 font-black uppercase tracking-[0.3em] text-xs hover:bg-brand-sand transition-all shadow-2xl">
                Book a consultation
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Services;