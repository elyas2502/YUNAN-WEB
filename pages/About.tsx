
import React from 'react';
import { CONSULTANTS, FALLBACK_IMAGE, COMPANY_INFO } from '../constants';
import { useAppContext } from '../contexts/AppContext';
import { LocalizedString } from '../types';
import { CheckCircle, Globe, ShieldCheck, Zap, Award, MapPin, Target, Eye, Star, Quote } from 'lucide-react';

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
      desc: { EN: 'Operating with absolute honesty in every client interaction. We believe that trust is the foundation of our business.', AM: 'በእያንዳንዱ የደንበኛ ግንኙነት ውስጥ በፍጹም ታማኝነት መስራት። እምነት የንግድ ስራችን መሰረት እንደሆነ እናምናለን።' }
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
      desc: { EN: 'Focusing on the journey beyond just the initial approval. We aim to build relationships that last a lifetime.', AM: 'ከመጀመሪያው ፍቃድ በላይ ባለው የጉዞ ስኬት ላይ ማተኮር። እድሜ ልክ የሚቆይ ግንኙነት ለመገንባት እንሰራለን።' } 
    }
  ];

  // Separate the Founder (c1) from other consultants
  const founder = CONSULTANTS.find(c => c.id === 'c1');
  const advisors = CONSULTANTS.filter(c => c.id !== 'c1');

  return (
    <div className="bg-brand-sand/20 dark:bg-brand-ink min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Intro Section */}
        <div className="max-w-5xl mx-auto mb-32 text-center">
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
          <section className="mb-40 reveal active">
            <div className="relative bg-brand-ink text-brand-sand rounded-[3rem] overflow-hidden shadow-2xl">
               {/* Background Texture */}
               <div className="absolute inset-0 bg-tibeb-pattern opacity-10 pointer-events-none"></div>
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

               <div className="flex flex-col lg:flex-row items-center">
                  
                  {/* Founder Image - Main Focus */}
                  <div className="w-full lg:w-1/2 relative h-[600px] lg:h-[700px] bg-black/20">
                     <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-105"
                        onError={(e) => { 
                          // Use a professional placeholder if specific image fails
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"; 
                        }}
                        loading="eager"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-transparent to-transparent opacity-60 lg:opacity-0 lg:bg-gradient-to-r lg:from-transparent lg:to-brand-ink"></div>
                  </div>

                  {/* Founder Content */}
                  <div className="w-full lg:w-1/2 p-12 lg:p-20 relative z-10 flex flex-col justify-center">
                     <div className="mb-8">
                        <span className="text-brand-accent font-black uppercase tracking-[0.3em] text-xs mb-4 block">Leadership</span>
                        <h2 className="font-serif text-5xl md:text-7xl mb-4 leading-none">{founder.name}</h2>
                        <p className="text-brand-sand/60 text-sm font-bold uppercase tracking-widest">{getLang(founder.role)}</p>
                     </div>

                     <div className="relative pl-8 border-l-2 border-brand-accent/30 mb-10">
                        <Quote className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-brand-ink text-brand-accent p-1" size={32} fill="currentColor" />
                        <p className="text-xl md:text-2xl font-light italic leading-relaxed text-brand-sand/90">
                           "We don't just process applications; we engineer life-changing opportunities for Ethiopia's brightest minds."
                        </p>
                     </div>

                     <p className="text-lg font-light text-brand-sand/60 leading-relaxed mb-10">
                        {getLang(founder.bio)}
                     </p>

                     <div className="flex items-center gap-6">
                        <div className="flex flex-col">
                           <span className="text-3xl font-serif text-brand-accent">10+</span>
                           <span className="text-[9px] uppercase tracking-widest opacity-60">Years Experience</span>
                        </div>
                        <div className="w-px h-10 bg-white/10"></div>
                        <div className="flex flex-col">
                           <span className="text-3xl font-serif text-brand-accent">100%</span>
                           <span className="text-[9px] uppercase tracking-widest opacity-60">Commitment</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </section>
        )}

        {/* Mission & Vision - REDESIGNED: Overlapping Flow */}
        <section className="mb-40 relative reveal active">
           {/* Decorative Line connecting them */}
           <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-ink/10 dark:bg-white/10 hidden md:block"></div>

           <div className="flex flex-col gap-12 md:gap-0">
              
              {/* Mission - Left Aligned */}
              <div className="w-full md:w-2/3 lg:w-7/12 relative z-10 self-start">
                 <div className="bg-brand-ink text-brand-sand p-12 md:p-16 rounded-[3rem] rounded-tl-none shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                    <Target size={48} className="text-brand-accent mb-8 relative z-10" />
                    <h2 className="font-serif text-4xl mb-6 relative z-10">{t('about.mission')}</h2>
                    <p className="text-lg font-light leading-relaxed opacity-80 relative z-10 border-l border-brand-accent/30 pl-6">
                      {t('about.mission_desc')}
                    </p>
                 </div>
              </div>

              {/* Vision - Right Aligned & Overlapping vertically on desktop */}
              <div className="w-full md:w-2/3 lg:w-7/12 relative z-20 self-end md:-mt-24">
                 <div className="bg-brand-primary text-white p-12 md:p-16 rounded-[3rem] rounded-br-none shadow-2xl relative overflow-hidden group border border-white/10">
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-[80px] -ml-16 -mb-16 transition-transform group-hover:scale-150"></div>
                    <Eye size={48} className="text-brand-sand mb-8 relative z-10" />
                    <h2 className="font-serif text-4xl mb-6 relative z-10">{t('about.vision')}</h2>
                    <p className="text-lg font-light leading-relaxed opacity-90 relative z-10 border-l border-brand-sand/30 pl-6">
                      {t('about.vision_desc')}
                    </p>
                 </div>
              </div>

           </div>
        </section>

        {/* Core Values - REDESIGNED: Bento Grid */}
        <div className="mb-32">
           <div className="text-center mb-20 reveal active">
              <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Our DNA</span>
              <h2 className="font-serif text-5xl md:text-6xl text-brand-ink dark:text-brand-sand mb-6">{t('about.values')}</h2>
              <p className="max-w-xl mx-auto text-brand-ink/50 dark:text-brand-sand/50 font-light">The principles that guide every decision, every application, and every success story.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Integrity - Large Square */}
              <div className="md:col-span-2 bg-white dark:bg-zinc-900 p-10 md:p-14 rounded-[2.5rem] shadow-lg border border-brand-ink/5 dark:border-white/5 reveal active hover:border-brand-accent/50 transition-colors group">
                 <div className="w-14 h-14 bg-brand-primary/10 text-brand-primary flex items-center justify-center rounded-2xl mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <ShieldCheck size={28} />
                 </div>
                 <h3 className="font-serif text-3xl mb-4 text-brand-ink dark:text-brand-sand">{getLang(values[0].title)}</h3>
                 <p className="text-brand-ink/60 dark:text-brand-sand/60 text-lg font-light leading-relaxed">{getLang(values[0].desc)}</p>
              </div>

              {/* Card 2: Excellence - Tall Vertical */}
              <div className="md:row-span-2 bg-brand-ink text-brand-sand p-10 md:p-14 rounded-[2.5rem] shadow-lg reveal active flex flex-col justify-between group overflow-hidden relative">
                 <div className="absolute inset-0 bg-tibeb-pattern opacity-10"></div>
                 <div>
                    <div className="w-14 h-14 bg-brand-accent/20 text-brand-accent flex items-center justify-center rounded-2xl mb-8">
                        <Award size={28} />
                    </div>
                    <h3 className="font-serif text-3xl mb-4">{getLang(values[1].title)}</h3>
                 </div>
                 <p className="text-brand-sand/60 text-lg font-light leading-relaxed relative z-10">{getLang(values[1].desc)}</p>
              </div>

              {/* Card 3: Respect - Standard */}
              <div className="bg-brand-sand/50 dark:bg-white/5 p-10 rounded-[2.5rem] reveal active hover:bg-brand-sand dark:hover:bg-white/10 transition-colors">
                 <div className="mb-6 text-brand-secondary">
                    <Star size={32} />
                 </div>
                 <h3 className="font-serif text-2xl mb-3 text-brand-ink dark:text-brand-sand">{getLang(values[2].title)}</h3>
                 <p className="text-sm font-light text-brand-ink/60 dark:text-brand-sand/60">{getLang(values[2].desc)}</p>
              </div>

              {/* Card 4: Accuracy - Standard */}
              <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-brand-ink/5 dark:border-white/5 reveal active hover:shadow-xl transition-all">
                 <div className="mb-6 text-brand-primary">
                    <CheckCircle size={32} />
                 </div>
                 <h3 className="font-serif text-2xl mb-3 text-brand-ink dark:text-brand-sand">{getLang(values[3].title)}</h3>
                 <p className="text-sm font-light text-brand-ink/60 dark:text-brand-sand/60">{getLang(values[3].desc)}</p>
              </div>

              {/* Card 5: Long-term - Wide Bottom */}
              <div className="md:col-span-3 bg-gradient-to-r from-brand-primary to-brand-primary/90 text-white p-10 md:p-12 rounded-[2.5rem] shadow-xl reveal active flex flex-col md:flex-row items-center gap-8">
                 <div className="w-16 h-16 bg-white/20 flex items-center justify-center rounded-full shrink-0">
                    <Zap size={32} />
                 </div>
                 <div>
                    <h3 className="font-serif text-2xl md:text-3xl mb-2">{getLang(values[4].title)}</h3>
                    <p className="text-white/80 font-light text-lg">{getLang(values[4].desc)}</p>
                 </div>
              </div>
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
                 <div className="premium-card aspect-[4/5] rounded-[2.5rem] mb-8 shadow-2xl group border border-brand-ink/10 dark:border-white/10 bg-brand-ink/5 overflow-hidden">
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
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-serif text-2xl text-brand-sand leading-tight mb-1">{c.name}</h3>
                      <p className="text-[9px] uppercase tracking-widest text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{getLang(c.role)}</p>
                   </div>
                 </div>

                 <div className="px-4">
                   <p className="text-[10px] font-black uppercase tracking-widest text-brand-ink/40 dark:text-brand-sand/40 mb-3">
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
