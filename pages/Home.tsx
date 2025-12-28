import React, { useEffect, useRef } from 'react';
/* Added @ts-ignore to bypass false positive type error for Link export from react-router-dom */
// @ts-ignore
import { Link } from 'react-router-dom';
import { 
  ChevronRight, MapPin, Globe, ShieldCheck, FileText, Headphones, Star
} from 'lucide-react';
import { SERVICES, FALLBACK_IMAGE } from '../constants';
import { useAppContext } from '../contexts/AppContext';
import { LocalizedString } from '../types';

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
  }, [language]); // Re-observe when language changes as DOM might update

  const getLang = (content: string | LocalizedString | undefined) => {
    if (!content) return '';
    if (typeof content === 'string') return content;
    return content[language] || content.EN;
  };

  const steps = [
    { icon: FileText, title: { EN: 'Form Audit', AM: 'የቅጽ ኦዲት' }, desc: { EN: 'Detailed review of your background to ensure 100% compliance with visa requirements.', AM: 'ከቪዛ መስፈርቶች ጋር 100% ተጣጥሞ መገኘቱን ለማረጋገጥ የታሪክዎ ዝርዝር ግምገማ።' } },
    { icon: Star, title: { EN: 'Strategy', AM: 'ስትራቴጂ' }, desc: { EN: 'Crafting the strongest narrative for your visa purpose and ties to your home country.', AM: 'ለቪዛ አላማዎ እና ከሀገርዎ ጋር ላለዎት ግንኙነት ጠንካራ ትረካ መገንባት።' } },
    { icon: Headphones, title: { EN: 'Mock Prep', AM: 'የሙከራ ዝግጅት' }, desc: { EN: 'Intensive mock interviews focusing on high-frequency questions and confidence.', AM: 'በተደጋጋሚ በሚነሱ ጥያቄዎች እና በራስ መተማመን ላይ ያተኮረ ከፍተኛ የቃለ መጠይቅ ዝግጅት።' } },
    { icon: Globe, title: { EN: 'Submission', desc: 'Guided submission with full checklist audit for complete peace of mind.', AM: 'ለሙሉ ሰላም ከዝርዝር ኦዲት ጋር የሚደረግ የታጀበ ማመልከቻ።' }, desc: { EN: 'Guided submission with full checklist audit for complete peace of mind.', AM: 'ለሙሉ ሰላም ከዝርዝር ኦዲት ጋር የሚደረግ የታጀበ ማመልከቻ።' } }
  ];

  return (
    <div className="bg-brand-sand dark:bg-brand-ink selection:bg-brand-accent selection:text-brand-ink">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1600&q=70" 
            className="w-full h-full object-cover"
            alt="International Travel Strategy"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMAGE; }}
          />
          <div className="absolute inset-0 bg-brand-ink/40 dark:bg-brand-ink/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-transparent to-transparent opacity-90"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl reveal">
            <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[11px] mb-8 block drop-shadow-sm">
              {t('hero.tag')}
            </span>
            <h1 className="font-serif text-6xl md:text-[8rem] text-brand-sand leading-[0.95] mb-12">
              {t('hero.title')} <br /> 
              <span className="italic font-light text-brand-accent">{t('hero.accent')}</span>
            </h1>
            <p className="text-xl md:text-3xl text-brand-sand font-light max-w-2xl mb-16 leading-relaxed">
              {t('hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link to="/book" className="bg-brand-accent text-brand-ink px-14 py-7 font-black uppercase text-[11px] tracking-[0.4em] shadow-2xl hover:bg-brand-sand transition-all flex items-center justify-center gap-4 hover:-translate-y-1">
                {t('hero.cta.consult')} <ChevronRight size={18} />
              </Link>
              <Link to="/contact" className="backdrop-blur-md border border-brand-sand/30 text-brand-sand px-14 py-7 font-black uppercase text-[11px] tracking-[0.4em] hover:bg-brand-sand/10 transition-all flex items-center justify-center gap-4 hover:-translate-y-1">
                {t('contact.visit_us')} <MapPin size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 bg-white dark:bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative group reveal">
                 <div className="premium-card rounded-[4rem] aspect-square shadow-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=70"
                      alt="Office" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                 </div>
                 <div className="absolute -bottom-10 -left-10 bg-brand-ink p-12 rounded-[3rem] shadow-2xl hidden md:block border border-white/10">
                    <span className="text-brand-accent font-black uppercase tracking-widest text-xs mb-4 block italic">Ethical Leadership</span>
                    <h4 className="font-serif text-2xl text-brand-sand">"Defining the future of <br/>Ethiopian travel."</h4>
                 </div>
              </div>

              <div className="reveal">
                 <span className="text-brand-primary font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">{t('section.ethos')}</span>
                 <h2 className="font-serif text-5xl md:text-7xl text-brand-ink dark:text-brand-sand mb-10 leading-tight">{t('section.integrity')} <br/><span className="italic font-light text-brand-secondary">{t('section.trust')}</span></h2>
                 <p className="text-lg text-brand-ink/60 dark:text-brand-sand/60 font-light leading-relaxed mb-12">
                   At Mhiret Bekalu Travel, we believe every traveler's journey should start with professional, honest guidance. We bridge the gap between dreams and reality through precise documentation and ethical strategy.
                 </p>
                 <div className="grid grid-cols-2 gap-8 mb-12">
                    <div className="flex items-center gap-4">
                       <ShieldCheck className="text-brand-accent" size={24} />
                       <span className="text-[10px] font-black uppercase tracking-widest">Ethical Guidance</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <Globe className="text-brand-accent" size={24} />
                       <span className="text-[10px] font-black uppercase tracking-widest">US Embassy Specialist</span>
                    </div>
                 </div>
                 <Link to="/about" className="bg-brand-ink text-brand-sand dark:bg-brand-sand dark:text-brand-ink px-10 py-5 font-black uppercase text-[10px] tracking-widest hover:bg-brand-primary dark:hover:bg-brand-accent transition-all">{t('nav.about')}</Link>
              </div>
           </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-40 bg-brand-sand/30 dark:bg-brand-ink">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-32 reveal">
            <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[11px] mb-4 block">Our Pillars of Excellence</span>
            <h2 className="font-serif text-6xl md:text-8xl text-brand-ink dark:text-brand-sand">Mastery in Every Field.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={service.id} className="premium-card group reveal bg-white dark:bg-zinc-900 border border-brand-ink/5 dark:border-white/5 rounded-[2rem] p-10 overflow-visible h-full flex flex-col shadow-lg" style={{ animationDelay: `${idx * 0.1}s` }}>
                 <div className="w-16 h-16 bg-brand-sand dark:bg-brand-sand/10 flex items-center justify-center text-brand-primary dark:text-brand-accent mb-8 rounded-2xl group-hover:bg-brand-accent group-hover:text-brand-ink transition-all shadow-lg">
                   <service.icon size={32} />
                 </div>
                 <h3 className="font-serif text-3xl mb-4 text-brand-ink dark:text-brand-sand">{getLang(service.title)}</h3>
                 <p className="text-sm font-light text-brand-ink/60 dark:text-brand-sand/60 mb-8 leading-relaxed flex-grow">{getLang(service.description)}</p>
                 <ul className="space-y-3 mb-8">
                    {service.details.map((d, i) => (
                      <li key={i} className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-brand-ink/40 dark:text-brand-sand/40">
                         <div className="w-1 h-1 bg-brand-accent rounded-full"></div>
                         {getLang(d)}
                      </li>
                    ))}
                 </ul>
                 <Link to="/services" className="text-[9px] font-black uppercase tracking-[0.3em] border-b border-brand-accent pb-1 inline-block hover:text-brand-accent transition-colors">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-40 bg-zinc-900 text-brand-sand relative overflow-hidden">
        <div className="absolute inset-0 bg-tibeb-pattern opacity-10 scale-[2]"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-32 reveal">
            <h2 className="font-serif text-6xl md:text-8xl mb-8">Diplomatic Lane.</h2>
            <p className="text-xl font-light opacity-50 max-w-2xl mx-auto">Operating in the heart of the diplomatic district to provide unmatched visa and academic support.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((p, i) => (
              <div key={i} className="reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 bg-brand-accent text-brand-ink flex items-center justify-center mb-8 rounded-xl shadow-xl">
                  <p.icon size={28} />
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-brand-accent opacity-50">Stage 0{i+1}</div>
                <h4 className="font-serif text-2xl mb-4">{getLang(p.title)}</h4>
                <p className="text-sm font-light opacity-40 leading-relaxed">{getLang(p.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;