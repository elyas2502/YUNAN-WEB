
import React from 'react';
import { CONSULTANTS, FALLBACK_IMAGE, COMPANY_INFO } from '../constants';
import { useAppContext } from '../contexts/AppContext';
import { LocalizedString } from '../types';
import { CheckCircle, Globe, ShieldCheck, Zap, Award, MapPin, Target, Eye, Star } from 'lucide-react';

const About: React.FC = () => {
  const { language, t } = useAppContext();

  const getLang = (content: string | LocalizedString) => {
    if (typeof content === 'string') return content;
    return content[language] || content.EN;
  };

  // Helper for optimization
  const getOptimizedUrl = (url: string, width: number) => {
    if (!url || !url.includes('images.unsplash.com')) return url;
    const baseUrl = url.split('?')[0];
    return `${baseUrl}?auto=format&fit=crop&w=${width}&q=80`;
  };

  const getSrcSet = (url: string) => {
    if (!url || !url.includes('images.unsplash.com')) return undefined;
    return `
      ${getOptimizedUrl(url, 400)} 400w,
      ${getOptimizedUrl(url, 800)} 800w
    `;
  };

  const values = [
    { 
      title: { EN: 'Integrity and transparency', AM: 'ታማኝነት እና ግልጽነት' }, 
      desc: { EN: 'Operating with absolute honesty in every client interaction.', AM: 'በእያንዳንዱ የደንበኛ ግንኙነት ውስጥ በፍጹም ታማኝነት መስራት።' }
    },
    { 
      title: { EN: 'Professional excellence', AM: 'ሙያዊ ልህቀት' }, 
      desc: { EN: 'Delivering world-class advisory services backed by deep research.', AM: 'በጥልቅ ጥናት የተደገፈ ዓለም አቀፍ ደረጃውን የጠበቀ የምክር አገልግሎት መስጠት።' } 
    },
    { 
      title: { EN: 'Respect for aspirations', AM: 'ለህልሞች ክብር' }, 
      desc: { EN: 'Treating every client’s global dream with the importance it deserves.', AM: 'የእያንዳንዱን ደንበኛ ዓለም አቀፍ ህልም በሚገባው ክብር ማስተናገድ።' } 
    },
    { 
      title: { EN: 'Accuracy and accountability', AM: 'ትክክለኛነት እና ተጠያቂነት' }, 
      desc: { EN: 'Precision in documentation and accountability in our guidance.', AM: 'በሰነድ ዝግጅት ላይ ትክክለኛነት እና በመመሪያችን ላይ ተጠያቂነት።' } 
    },
    { 
      title: { EN: 'Long-term client success', AM: 'የረጅም ጊዜ የደንበኛ ስኬት' }, 
      desc: { EN: 'Focusing on the journey beyond just the initial approval.', AM: 'ከመጀመሪያው ፍቃድ በላይ ባለው የጉዞ ስኬት ላይ ማተኮር።' } 
    }
  ];

  // Separate the Founder (c1) from other consultants
  const founder = CONSULTANTS.find(c => c.id === 'c1');
  const advisors = CONSULTANTS.filter(c => c.id !== 'c1');

  return (
    <div className="bg-brand-sand/20 dark:bg-brand-ink min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Intro Section */}
        <div className="max-w-5xl mx-auto mb-20 text-center">
          <span className="text-brand-secondary font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block animate-fade-in-up">{t('about.story')}</span>
          <h1 className="font-serif text-5xl md:text-7xl text-brand-ink dark:text-brand-sand mb-12 leading-[1.1] animate-fade-in-up">
            {t('about.title')} <br /> <span className="italic font-light text-brand-primary">{t('about.subtitle')}</span>
          </h1>
          <div className="max-w-4xl mx-auto text-xl md:text-2xl font-light text-brand-ink/60 dark:text-brand-sand/60 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <p className="mb-8">
              {t('about.desc1')}
            </p>
            <p>
              {t('about.desc2')}
            </p>
          </div>
        </div>

        {/* FOUNDER PROFILE SECTION */}
        {founder && (
          <section className="mb-24 reveal active">
            <div className="max-w-[900px] w-full bg-white dark:bg-zinc-900 flex flex-col md:flex-row gap-10 p-10 rounded-[2rem] shadow-xl items-center mx-auto border border-brand-ink/5 dark:border-white/5">
              <div className="shrink-0">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-[240px] h-auto rounded-[10px] object-cover shadow-[0_6px_16px_rgba(0,0,0,0.15)]"
                  onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMAGE; }}
                  loading="lazy"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-serif text-brand-ink dark:text-brand-sand mb-1">{founder.name}</h2>
                <h4 className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-6">{getLang(founder.role)}</h4>
                <p className="text-base leading-relaxed text-brand-ink/70 dark:text-brand-sand/70 font-light">
                  {getLang(founder.bio)}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
           <div className="bg-brand-primary p-16 text-brand-sand reveal active rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110"></div>
              <Target size={48} className="text-brand-accent mb-8" />
              <h2 className="font-serif text-4xl mb-6">{t('about.mission')}</h2>
              <p className="text-xl font-light leading-relaxed opacity-80">
                {t('about.mission_desc')}
              </p>
           </div>
           <div className="bg-white dark:bg-zinc-900 p-16 text-brand-ink dark:text-brand-sand reveal active rounded-[3rem] shadow-2xl border border-brand-ink/30 dark:border-white/30 group">
              <Eye size={48} className="text-brand-primary mb-8" />
              <h2 className="font-serif text-4xl mb-6">{t('about.vision')}</h2>
              <p className="text-xl font-light leading-relaxed opacity-60">
                {t('about.vision_desc')}
              </p>
           </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
           <div className="text-center mb-16 reveal active">
              <h2 className="font-serif text-6xl text-brand-ink dark:text-brand-sand mb-4">{t('about.values')}</h2>
              <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <div key={i} className="bg-white dark:bg-zinc-900/50 p-12 border border-brand-ink/30 dark:border-white/30 reveal active hover:border-brand-accent/40 transition-all rounded-3xl" style={{ animationDelay: `${i * 0.1}s` }}>
                   <div className="w-12 h-12 bg-brand-sand dark:bg-white/5 flex items-center justify-center text-brand-accent mb-8 rounded-xl">
                      <Star size={24} />
                   </div>
                   <h3 className="font-serif text-2xl mb-4">{getLang(v.title)}</h3>
                   <p className="text-sm font-light text-brand-ink/50 dark:text-brand-sand/50">{getLang(v.desc)}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Advisors Section (Filtered) */}
        <div className="pt-10">
           <div className="mb-16 reveal active text-center lg:text-left">
              <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">{t('about.advisors')}</span>
              <h2 className="font-serif text-5xl md:text-7xl text-brand-ink dark:text-brand-sand mb-6">{t('about.leadership')}</h2>
              <p className="max-w-2xl text-lg font-light text-brand-ink/50 dark:text-brand-sand/50">{t('about.leadership_desc')}</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start">
             {advisors.map((c, i) => (
               <div key={c.id} className="flex flex-col reveal active" style={{ animationDelay: `${i * 0.1}s` }}>
                 <div className="premium-card aspect-[4/5] rounded-[2.5rem] mb-8 shadow-2xl group border-2 border-brand-ink/30 dark:border-white/30 bg-brand-ink/5">
                   <img 
                    src={getOptimizedUrl(c.image, 400)}
                    srcSet={getSrcSet(c.image)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    alt={c.name} 
                    loading="lazy"
                    decoding="async"
                    onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMAGE; }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
