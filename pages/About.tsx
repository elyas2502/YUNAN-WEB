import React from 'react';
import { CONSULTANTS, FALLBACK_IMAGE, COMPANY_INFO } from '../constants';
import { useAppContext } from '../contexts/AppContext';
import { LocalizedString } from '../types';
import { CheckCircle, Globe, ShieldCheck, Zap, Award, MapPin, Target, Eye, Star } from 'lucide-react';

const About: React.FC = () => {
  const { language } = useAppContext();

  const getLang = (content: string | LocalizedString) => {
    if (typeof content === 'string') return content;
    return content[language] || content.EN;
  };

  const values = [
    { title: 'Integrity and transparency', desc: 'Operating with absolute honesty in every client interaction.' },
    { title: 'Professional excellence', desc: 'Delivering world-class advisory services backed by deep research.' },
    { title: 'Respect for aspirations', desc: 'Treating every client’s global dream with the importance it deserves.' },
    { title: 'Accuracy and accountability', desc: 'Precision in documentation and accountability in our guidance.' },
    { title: 'Long-term client success', desc: 'Focusing on the journey beyond just the initial approval.' }
  ];

  return (
    <div className="bg-brand-sand/20 dark:bg-brand-ink min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Intro Section */}
        <div className="max-w-5xl mx-auto mb-40 text-center">
          <span className="text-brand-secondary font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block animate-fade-in-up">The Mhiret Bekalu Story</span>
          <h1 className="font-serif text-6xl md:text-9xl text-brand-ink dark:text-brand-sand mb-12 leading-[1.1] animate-fade-in-up">
            Global Access. <br /> <span className="italic font-light text-brand-primary">Ethiopian Excellence.</span>
          </h1>
          <div className="max-w-4xl mx-auto text-xl md:text-2xl font-light text-brand-ink/60 dark:text-brand-sand/60 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <p className="mb-8">
              Mhiret Bekalu Travel and Consultancy was founded to bridge global opportunities with Ethiopian potential. The company was established with a clear mission: to provide Ethiopians with accurate, ethical, and professional access to international education and travel opportunities.
            </p>
            <p>
              We understand the challenges Ethiopian applicants face — documentation, eligibility clarity, and process complexity — and we provide solutions rooted in experience and research.
            </p>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
           <div className="bg-brand-primary p-16 text-brand-sand reveal active rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110"></div>
              <Target size={48} className="text-brand-accent mb-8" />
              <h2 className="font-serif text-4xl mb-6">Our Mission</h2>
              <p className="text-xl font-light leading-relaxed opacity-80">
                To empower Ethiopians with reliable access to international education, scholarships, and travel opportunities through professional advisory services.
              </p>
           </div>
           <div className="bg-white dark:bg-zinc-900 p-16 text-brand-ink dark:text-brand-sand reveal active rounded-[3rem] shadow-2xl border border-brand-ink/5 group">
              <Eye size={48} className="text-brand-primary mb-8" />
              <h2 className="font-serif text-4xl mb-6">Our Vision</h2>
              <p className="text-xl font-light leading-relaxed opacity-60">
                To become one of Ethiopia’s most trusted and internationally recognized travel and education consultancy firms.
              </p>
           </div>
        </div>

        {/* Core Values */}
        <div className="mb-40">
           <div className="text-center mb-24 reveal active">
              <h2 className="font-serif text-6xl text-brand-ink dark:text-brand-sand mb-4">Our Core Values</h2>
              <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <div key={i} className="bg-white dark:bg-zinc-900/50 p-12 border border-brand-ink/5 reveal active hover:border-brand-accent/30 transition-all rounded-3xl" style={{ animationDelay: `${i * 0.1}s` }}>
                   <div className="w-12 h-12 bg-brand-sand dark:bg-white/5 flex items-center justify-center text-brand-accent mb-8 rounded-xl">
                      <Star size={24} />
                   </div>
                   <h3 className="font-serif text-2xl mb-4">{v.title}</h3>
                   <p className="text-sm font-light text-brand-ink/50 dark:text-brand-sand/50">{v.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Advisors Section */}
        <div className="pt-20">
           <div className="mb-24 reveal active text-center lg:text-left">
              <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Meet Our Advisors</span>
              <h2 className="font-serif text-6xl md:text-8xl text-brand-ink dark:text-brand-sand mb-6">Our Leadership Team.</h2>
              <p className="max-w-2xl text-lg font-light text-brand-ink/50 dark:text-brand-sand/50">Our advisory team consists of experienced professionals committed to delivering accurate, ethical, and personalized guidance.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 items-start">
             {CONSULTANTS.map((c, i) => (
               <div key={c.id} className="flex flex-col reveal active" style={{ animationDelay: `${i * 0.1}s` }}>
                 <div className="premium-card aspect-[4/5] rounded-[2.5rem] mb-8 shadow-2xl group border-2 border-brand-ink/5 dark:border-white/5">
                   <img 
                    src={c.image} 
                    alt={c.name} 
                    loading="lazy"
                    decoding="async"
                    onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMAGE; }}
                   />
                   <div className="premium-card-content absolute bottom-0 left-0 p-8 w-full">
                      <h3 className="font-serif text-2xl text-brand-sand leading-tight mb-2">{c.name}</h3>
                   </div>
                 </div>

                 <div className="px-4">
                   <p className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-4 bg-brand-accent/10 px-3 py-1.5 inline-block rounded-lg">
                     {getLang(c.role)}
                   </p>
                   <p className="text-[11px] font-light text-brand-ink/60 dark:text-brand-sand/60 leading-relaxed">
                     {getLang(c.bio)}
                   </p>
                 </div>
               </div>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default About;