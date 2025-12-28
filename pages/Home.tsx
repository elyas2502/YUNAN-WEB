
import React, { useEffect, useRef } from 'react';
/* Added @ts-ignore to bypass false positive type error for Link export from react-router-dom */
// @ts-ignore
import { Link } from 'react-router-dom';
import { 
  ChevronRight, MapPin, Globe, ShieldCheck, FileText, Headphones, Star, ArrowRight, Compass, Users, CheckCircle, Award, Zap, ClipboardList, Map, MessageCircle, Stamp
} from 'lucide-react';
import { SERVICES, FALLBACK_IMAGE, COUNTRIES } from '../constants';
import { useAppContext } from '../contexts/AppContext';
import { LocalizedString } from '../types';
import LazyImage from '../components/LazyImage';

const Home: React.FC = () => {
  const { language, t } = useAppContext();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, [language]); 

  const getLang = (content: string | LocalizedString | undefined) => {
    if (!content) return '';
    if (typeof content === 'string') return content;
    return content[language] || content.EN;
  };

  const steps = [
    { icon: ClipboardList, title: { EN: 'Fill & Check Form', AM: 'Fill & Check Form' }, desc: { EN: 'You fill out a short form with your personal and travel details. We carefully review your answers and correct any mistakes to make sure the form is accurate.', AM: 'You fill out a short form with your personal and travel details. We carefully review your answers and correct any mistakes to make sure the form is accurate.' } },
    { icon: Map, title: { EN: 'Planning', AM: 'Planning' }, desc: { EN: 'We create a clear plan based on your visa type and travel purpose. You receive a simple list of documents to prepare.', AM: 'We create a clear plan based on your visa type and travel purpose. You receive a simple list of documents to prepare.' } },
    { icon: MessageCircle, title: { EN: 'Interview Preparation', AM: 'Interview Preparation' }, desc: { EN: 'We practice common visa interview questions with you. We help you give clear and confident answers.', AM: 'We practice common visa interview questions with you. We help you give clear and confident answers.' } },
    { icon: Stamp, title: { EN: 'Submission', AM: 'Submission' }, desc: { EN: 'We guide you step by step through the application submission process. We do a final check to make sure everything is complete before you submit.', AM: 'We guide you step by step through the application submission process. We do a final check to make sure everything is complete before you submit.' } }
  ];

  const HERO_IMAGE = "https://images.unsplash.com/photo-1503220317375-aaad61436b1b";

  // Filter top destinations for the home page preview
  const featuredCountries = COUNTRIES.slice(0, 8);

  const trustPoints = [
    { id: 'excellence', icon: Award, titleKey: 'trust.excellence', descKey: 'trust.desc_excellence' },
    { id: 'ethical', icon: ShieldCheck, titleKey: 'trust.ethical', descKey: 'trust.desc_ethical' },
    { id: 'insight', icon: Compass, titleKey: 'trust.insight', descKey: 'trust.desc_insight' },
    { id: 'partnership', icon: Users, titleKey: 'trust.partnership', descKey: 'trust.desc_partnership' },
  ];

  return (
    <div className="bg-brand-sand dark:bg-brand-ink selection:bg-brand-accent selection:text-brand-ink">
      
      {/* Hero Section - Expanded to full dynamic viewport height */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <LazyImage 
            src={HERO_IMAGE}
            alt="International Travel Strategy"
            className="w-full h-full object-cover"
            wrapperClassName="w-full h-full"
          />
          <div className="absolute inset-0 bg-brand-ink/40 dark:bg-brand-ink/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-transparent to-transparent opacity-90"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
          <div className="max-w-5xl reveal active">
            
            {/* Reduced from [7.5rem] to 8xl max */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-sand leading-[0.95] mb-6">
              {t('hero.title')} <br /> 
              <span className="font-script text-brand-accent md:text-[1.2em]">{t('hero.accent')}</span>
            </h1>
            <h3 className="text-xl md:text-2xl text-brand-sand/90 font-bold mb-6 max-w-2xl leading-snug">
              {t('hero.sub')}
            </h3>
            <p className="text-lg md:text-xl text-brand-sand/80 font-light max-w-2xl mb-12 leading-relaxed">
              {t('hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link to="/book" className="bg-brand-accent text-brand-ink px-8 py-4 font-black uppercase text-[11px] tracking-[0.4em] shadow-2xl hover:bg-brand-sand transition-all flex items-center justify-center gap-4 hover:-translate-y-1 rounded-full">
                {t('hero.cta.consult')} <ChevronRight size={18} />
              </Link>
              <Link to="/contact" className="backdrop-blur-md border border-brand-sand/30 text-brand-sand px-8 py-4 font-black uppercase text-[11px] tracking-[0.4em] hover:bg-brand-sand/10 transition-all flex items-center justify-center gap-4 hover:-translate-y-1 rounded-full">
                {t('contact.visit_us')} <MapPin size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Mastery Section (Refined Philosophy) with Background Texture */}
      <section className="py-24 md:py-32 bg-white dark:bg-zinc-950 overflow-hidden relative">
        {/* Background Texture for White Blank */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative group reveal">
                 <div className="premium-card rounded-[4rem] aspect-square shadow-2xl overflow-hidden bg-brand-ink/5 border border-brand-ink/5 dark:border-white/10">
                    <LazyImage 
                      src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
                      alt="Office" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      wrapperClassName="w-full h-full"
                    />
                 </div>
                 <div className="absolute -bottom-10 -left-10 bg-brand-ink p-12 rounded-[3rem] shadow-2xl hidden md:block border border-white/30">
                    <span className="text-brand-accent font-black uppercase tracking-widest text-xs mb-4 block italic">{t('home.ethical_leader')}</span>
                    <h4 className="font-serif text-2xl text-brand-sand">{t('home.future_quote')}</h4>
                 </div>
              </div>

              <div className="reveal">
                 <span className="text-brand-primary font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">{t('section.ethos')}</span>
                 <h2 className="font-serif text-4xl md:text-6xl text-brand-ink dark:text-brand-sand mb-8 leading-none">
                    {t('section.integrity')} <br/>
                    <span className="font-script text-6xl md:text-8xl text-brand-secondary block mt-2">{t('section.trust')}</span>
                 </h2>
                 <p className="text-lg text-brand-ink/60 dark:text-brand-sand/60 font-light leading-relaxed mb-12">
                   {t('section.desc')}
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                    {trustPoints.map((point) => (
                      <div key={point.id} className="flex flex-col gap-3">
                         <div className="flex items-center gap-3 mb-1">
                            <point.icon className="text-brand-accent" size={24} />
                            <span className="text-sm font-black uppercase tracking-widest text-brand-ink dark:text-brand-sand">{t(point.titleKey)}</span>
                         </div>
                         <p className="text-xs font-light text-brand-ink/60 dark:text-brand-sand/60 leading-relaxed border-l border-brand-ink/10 dark:border-white/10 pl-4">
                           {t(point.descKey)}
                         </p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Services Section (Redesigned with Pop-out Images) and Background Texture */}
      <section className="py-24 md:py-32 bg-brand-sand/30 dark:bg-brand-ink relative overflow-hidden">
        {/* Background Texture for Services Blank */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply dark:mix-blend-overlay">
           <img 
             src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
             alt=""
             className="w-full h-full object-cover grayscale"
           />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-24 reveal">
            <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[11px] mb-4 block">{t('home.pillars')}</span>
            {/* Reduced text size */}
            <h2 className="font-serif text-4xl md:text-6xl text-brand-ink dark:text-brand-sand">{t('home.mastery')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, idx) => (
              <div key={service.id} className="group relative bg-white dark:bg-zinc-900 border border-brand-ink/30 dark:border-white/30 rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col reveal" style={{ animationDelay: `${idx * 0.1}s` }}>
                 
                 {/* Image Header with Pop-out effect */}
                 <div className="h-72 overflow-hidden relative">
                    <LazyImage 
                      src={service.image || FALLBACK_IMAGE}
                      alt={getLang(service.title)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      wrapperClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-brand-ink/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    
                    {/* Floating Icon Badge */}
                    <div className="absolute bottom-6 right-6 w-16 h-16 bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-2xl flex items-center justify-center text-brand-primary dark:text-brand-accent shadow-xl group-hover:scale-110 transition-transform duration-500">
                        <service.icon size={28} strokeWidth={1.5} />
                    </div>
                 </div>

                 <div className="p-10 flex-col flex-grow">
                    <h3 className="font-serif text-3xl mb-4 text-brand-ink dark:text-brand-sand leading-tight">{getLang(service.title)}</h3>
                    <p className="text-sm font-light text-brand-ink/60 dark:text-brand-sand/60 mb-8 leading-relaxed flex-grow">{getLang(service.description)}</p>
                    
                    <ul className="space-y-3 mb-10 border-t border-brand-ink/10 dark:border-white/10 pt-6">
                        {service.details.slice(0, 3).map((d, i) => (
                          <li key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-brand-ink/40 dark:text-brand-sand/40">
                             <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>
                             {getLang(d)}
                          </li>
                        ))}
                    </ul>

                    <Link to="/services" className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-brand-ink dark:text-brand-sand group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
                        {t('home.learn_more')} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Location Timeline Section */}
      <section className="py-24 md:py-32 bg-zinc-900 text-brand-sand relative overflow-hidden">
        <div className="absolute inset-0 bg-tibeb-pattern opacity-10 scale-[2]"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-24 reveal">
            {/* Reduced text size */}
            <h2 className="font-serif text-4xl md:text-6xl mb-8">{t('home.dip_lane')}</h2>
            <p className="text-xl font-light opacity-50 max-w-2xl mx-auto">{t('home.dip_desc')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((p, i) => (
              <div key={i} className="reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 bg-brand-accent text-brand-ink flex items-center justify-center mb-8 rounded-xl shadow-xl">
                  <p.icon size={28} />
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-brand-accent opacity-50">{t('home.stage_label')} 0{i+1}</div>
                <h4 className="font-serif text-2xl mb-4">{getLang(p.title)}</h4>
                <p className="text-sm font-light opacity-40 leading-relaxed">{getLang(p.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Global Destinations Preview Section (Inserted below Strategic Location) */}
      <section className="py-24 md:py-32 bg-brand-sand/20 dark:bg-brand-ink relative overflow-hidden">
        {/* Background Texture for Destinations Blank */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-multiply dark:mix-blend-overlay">
           <img 
             src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
             alt=""
             className="w-full h-full object-cover grayscale"
           />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 reveal">
            <div className="max-w-2xl">
               <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[11px] mb-4 block">{t('dest.network')}</span>
               <h2 className="font-serif text-4xl md:text-6xl text-brand-ink dark:text-brand-sand leading-tight">
                  {t('dest.horizons')}
               </h2>
               <p className="text-lg text-brand-ink/60 dark:text-brand-sand/60 font-light mt-6 max-w-xl">
                 {t('dest.desc')}
               </p>
            </div>
            <Link to="/destinations" className="hidden md:flex items-center gap-4 bg-brand-ink dark:bg-brand-sand text-brand-sand dark:text-brand-ink px-10 py-5 font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-brand-primary dark:hover:bg-brand-accent transition-all shadow-xl hover:-translate-y-1">
               {t('dest.explore')} <Compass size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
             {featuredCountries.map((country, idx) => (
               <div key={country.id} className="group relative bg-brand-ink/5 dark:bg-white/5 rounded-[2rem] overflow-hidden aspect-[3/4] shadow-xl reveal hover:-translate-y-2 transition-transform duration-500" style={{ animationDelay: `${idx * 0.05}s` }}>
                  {/* Fallback pattern background if image fails/loads */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 dark:opacity-5"></div>
                  
                  <LazyImage 
                    src={country.image || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828'}
                    alt={getLang(country.name)}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    wrapperClassName="absolute inset-0 w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full text-brand-sand">
                     <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{country.flag}</span>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-brand-accent bg-black/30 px-2 py-1 rounded backdrop-blur-sm">{country.continent}</span>
                     </div>
                     <h3 className="font-serif text-2xl group-hover:text-brand-accent transition-colors">{getLang(country.name)}</h3>
                  </div>
                  
                  <Link to={`/destinations/${country.id}`} className="absolute inset-0 z-10" aria-label={`Explore ${getLang(country.name)}`}></Link>
               </div>
             ))}
          </div>

          <div className="text-center md:hidden reveal">
             <Link to="/destinations" className="inline-flex items-center gap-4 bg-brand-ink dark:bg-brand-sand text-brand-sand dark:text-brand-ink px-10 py-5 font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-brand-primary transition-all shadow-xl">
               {t('dest.explore')} <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* Authority Call to Action Banner */}
      <section className="bg-brand-ink dark:bg-white/5 py-24 border-t border-white/10 relative overflow-hidden">
        {/* Black Pattern Overlay */}
        <div className="absolute inset-0 bg-tibeb-pattern opacity-10 bg-repeat pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 text-center reveal relative z-10">
           <div className="max-w-3xl mx-auto">
             <h2 className="font-serif text-3xl md:text-5xl text-brand-sand mb-6">{t('home.cta_auth_title')}</h2>
             <p className="text-brand-sand/60 text-lg font-light mb-12">{t('home.cta_auth_desc')}</p>
             <Link to="/book" className="inline-flex items-center gap-4 bg-brand-accent text-brand-ink px-8 py-4 font-black uppercase text-[11px] tracking-[0.4em] shadow-2xl hover:bg-brand-sand transition-all hover:-translate-y-1 rounded-full">
                {t('home.cta_btn')} <ArrowRight size={18} />
             </Link>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
