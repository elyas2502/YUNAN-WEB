
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, ArrowRight, ChevronRight, MapPin, 
  CheckCircle2, Star, BookOpen, Headphones, PenTool, Lightbulb,
  Globe, ShieldCheck, Zap, Users 
} from 'lucide-react';
import { COUNTRIES, SERVICES, COMPANY_INFO } from '../constants';
import { useAppContext } from '../contexts/AppContext';
import { LocalizedString, Continent } from '../types';

const Home: React.FC = () => {
  const { language, t } = useAppContext();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [selectedContinent, setSelectedContinent] = useState<Continent | 'All'>('All');

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const getLang = (content: string | LocalizedString) => {
    if (typeof content === 'string') return content;
    return content[language] || content.EN;
  };

  const filteredCountries = selectedContinent === 'All'
    ? COUNTRIES
    : COUNTRIES.filter(c => c.continent === selectedContinent);

  const steps = [
    { icon: Lightbulb, title: 'Consultation', desc: 'Identify your goals and academic potential with our expert advisors.' },
    { icon: PenTool, title: 'Admissions', desc: 'Strategic school matching and professional application preparation.' },
    { icon: Star, title: 'Visa Mastery', desc: 'Rigorous mock interviews and document audit for total embassy readiness.' },
    { icon: Globe, title: 'Fly High', desc: 'Pre-departure orientation and full logistics support for your move.' }
  ];

  const continents: (Continent | 'All')[] = ['All', 'Africa', 'Europe', 'North America', 'South America', 'Asia', 'Oceania'];

  return (
    <div className="bg-brand-sand dark:bg-brand-ink selection:bg-brand-accent selection:text-brand-ink">
      
      {/* Premium Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover"
            alt="Global Journey"
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
              <Link to="/scholarships" className="backdrop-blur-md border border-brand-sand/30 text-brand-sand px-14 py-7 font-black uppercase text-[11px] tracking-[0.4em] hover:bg-brand-sand/10 transition-all flex items-center justify-center gap-4 hover:-translate-y-1">
                {t('hero.cta.hub')} <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* University Partners Marquee */}
      <div className="bg-brand-ink py-10 border-y border-white/5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-20 items-center">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex gap-20 items-center">
              <span className="text-brand-accent font-serif text-2xl opacity-40 uppercase tracking-widest">Oxford University</span>
              <span className="text-brand-accent font-serif text-2xl opacity-40 uppercase tracking-widest">MIT</span>
              <span className="text-brand-accent font-serif text-2xl opacity-40 uppercase tracking-widest">University of Toronto</span>
              <span className="text-brand-accent font-serif text-2xl opacity-40 uppercase tracking-widest">ETH Zurich</span>
              <span className="text-brand-accent font-serif text-2xl opacity-40 uppercase tracking-widest">Munich Tech</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4-Step Success Process (Maraki Inspired) */}
      <section className="py-40 bg-white dark:bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 text-center reveal">
          <span className="text-brand-primary font-bold tracking-[0.5em] uppercase text-[11px] mb-8 block">Our Methodology</span>
          <h2 className="font-serif text-5xl md:text-8xl text-brand-ink dark:text-brand-sand mb-32">The 4 Steps to <br/><span className="italic font-light text-brand-accent">Global Excellence.</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-brand-ink/5 dark:bg-white/5 -z-10"></div>
            {steps.map((p, i) => (
              <div key={i} className="bg-brand-sand/30 dark:bg-brand-ink/40 p-12 border border-brand-ink/5 dark:border-white/5 hover:border-brand-accent transition-all group reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-20 h-20 bg-brand-sand dark:bg-brand-sand/10 flex items-center justify-center text-brand-primary dark:text-brand-accent mb-10 group-hover:bg-brand-accent group-hover:text-brand-ink transition-all">
                  <p.icon size={32} strokeWidth={1.5} />
                </div>
                <div className="text-brand-accent font-black text-[10px] mb-4 uppercase tracking-[0.4em]">Step 0{i+1}</div>
                <h4 className="font-serif text-2xl text-brand-ink dark:text-brand-sand mb-6">{p.title}</h4>
                <p className="text-brand-ink/50 dark:text-brand-sand/50 font-light leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footprint - Massive Destination Database */}
      <section className="py-40 bg-brand-sand/30 dark:bg-brand-ink">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8 reveal">
            <div className="max-w-xl">
              <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[11px] mb-4 block">Destination Hub</span>
              <h2 className="font-serif text-6xl md:text-[5.5rem] leading-none text-brand-ink dark:text-brand-sand">120+ Countries. <br/><span className="italic font-light opacity-50">One Bridge.</span></h2>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar py-2 max-w-full lg:max-w-4xl">
              {continents.map(c => (
                <button 
                  key={c}
                  onClick={() => setSelectedContinent(c)}
                  className={`px-8 py-4 text-[10px] font-black uppercase tracking-widest border transition-all whitespace-nowrap ${
                    selectedContinent === c 
                      ? 'bg-brand-ink dark:bg-brand-sand text-brand-sand dark:text-brand-ink border-brand-ink dark:border-brand-sand shadow-xl' 
                      : 'border-brand-ink/10 dark:border-white/10 opacity-40 hover:opacity-100 dark:text-brand-sand'
                  }`}
                >
                  {c === 'All' ? (language === 'AM' ? 'ሁሉም' : 'All') : c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredCountries.length > 0 ? filteredCountries.map((country, idx) => (
              <div key={country.id} className="group relative aspect-[3/4] overflow-hidden reveal shadow-xl bg-zinc-200 dark:bg-zinc-800" style={{ animationDelay: `${idx * 0.02}s` }}>
                <img 
                  src={country.image} 
                  className="w-full h-full object-cover transition-all duration-[2s] group-hover:scale-110" 
                  alt={getLang(country.name)} 
                />
                <div className="absolute inset-0 bg-brand-ink/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform bg-gradient-to-t from-brand-ink/90 via-brand-ink/40 to-transparent">
                  <span className="text-3xl block mb-2">{country.flag}</span>
                  <div className="flex items-center gap-2 mb-1 opacity-70">
                    <MapPin size={8} className="text-brand-accent" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-brand-sand">{country.continent}</span>
                  </div>
                  <span className="font-serif text-lg text-brand-sand block leading-tight">{getLang(country.name)}</span>
                </div>
              </div>
            )) : (
              <div className="col-span-full py-40 text-center text-brand-ink/20 dark:text-brand-sand/20 font-serif text-4xl">
                Coming Soon to this Region.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Test Prep Hub (Maraki Style) */}
      <section className="py-40 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="reveal">
            <span className="text-brand-emerald font-bold tracking-[0.4em] uppercase text-[11px] mb-8 block">Academic Readiness</span>
            <h2 className="font-serif text-5xl md:text-8xl text-brand-ink dark:text-brand-sand mb-12">IELTS, SAT & GRE Prep Center.</h2>
            <p className="text-lg text-brand-ink/60 dark:text-brand-sand/60 font-light mb-12 leading-relaxed">
              Achieve your target score with our certified language instructors. We offer free weekly mock tests for all registered students.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
              {[
                { icon: Headphones, title: 'IELTS Listening', desc: 'Strategy sessions for native accents.' },
                { icon: BookOpen, title: 'TOEFL Reading', desc: 'Comprehensive text analysis drills.' },
                { icon: PenTool, title: 'SAT Math', desc: 'Step-by-step quantitative solutions.' },
                { icon: Zap, title: 'GRE Verbal', desc: 'High-frequency vocabulary mastery.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 border border-brand-ink/5 dark:border-white/5 bg-brand-sand/30 dark:bg-white/5">
                  <div className="w-12 h-12 bg-brand-emerald/10 flex items-center justify-center text-brand-emerald shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[10px] uppercase tracking-widest mb-1">{item.title}</h5>
                    <p className="text-[11px] opacity-50 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/book" className="bg-brand-emerald text-brand-sand px-12 py-5 font-black uppercase text-[10px] tracking-[0.4em] hover:bg-brand-ink transition-all inline-block shadow-xl">
              Reserve Your Mock Test
            </Link>
          </div>
          <div className="relative reveal active" style={{ animationDelay: '0.2s' }}>
             <div className="aspect-[4/5] relative overflow-hidden shadow-2xl">
               <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-brand-emerald/20 mix-blend-multiply"></div>
             </div>
             <div className="absolute -bottom-10 -right-10 bg-brand-accent p-12 shadow-2xl animate-float">
                <div className="text-center">
                  <div className="text-6xl font-serif text-brand-ink mb-1">98%</div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-brand-ink/60">Success Rate</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Trust & Ethics Indicators */}
      <section className="py-60 bg-brand-ink text-brand-sand relative overflow-hidden">
        <div className="absolute inset-0 bg-tibeb-pattern opacity-10 scale-[2]"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-5xl">
          <span className="text-brand-accent font-black tracking-[0.5em] uppercase text-[11px] mb-12 block reveal">Global Standards</span>
          <h2 className="font-serif text-5xl md:text-[7rem] mb-24 leading-[1.1] reveal">The Yunan <br /> <span className="italic font-light text-brand-accent">Integrity.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 reveal">
            <div className="space-y-8">
              <ShieldCheck size={64} className="mx-auto text-brand-accent" strokeWidth={1} />
              <h4 className="font-serif text-3xl">Absolute Honesty.</h4>
              <p className="opacity-40 font-light leading-relaxed">No false promises. Transparent application tracking from day one. No registration fees ever.</p>
            </div>
            <div className="space-y-8">
              <Zap size={64} className="mx-auto text-brand-accent" strokeWidth={1} />
              <h4 className="font-serif text-3xl">92% Approval.</h4>
              <p className="opacity-40 font-light leading-relaxed">Our rigorous pre-visa documentation audit ensures the highest possible success rate at the embassy.</p>
            </div>
            <div className="space-y-8">
              <Users size={64} className="mx-auto text-brand-accent" strokeWidth={1} />
              <h4 className="font-serif text-3xl">Expert Network.</h4>
              <p className="opacity-40 font-light leading-relaxed">Direct institutional partnerships with top-tier universities across 5 continents for exclusive admissions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
