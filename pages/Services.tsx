
import React, { useEffect, useRef } from 'react';
import { SERVICES, FALLBACK_IMAGE } from '../constants';
import { Check, ArrowRight, ShieldCheck, Globe, Quote, MapPin, GraduationCap, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
// @ts-ignore
import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { LocalizedString } from '../types';

interface SuccessStory {
  id: string;
  name: string;
  university: string;
  country: string;
  award?: string;
  image: string;
  quote: LocalizedString;
  category: 'Visa Approval' | 'Scholarship' | 'Admission';
}

const STORIES: SuccessStory[] = [
  {
    id: 's1',
    name: "Bethelhem Dessie",
    university: "Stanford University",
    country: "USA",
    award: "Full Ride Scholarship",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80",
    quote: {
      EN: "Mihret's guidance was pivotal. They didn't just help with forms; they helped me craft a narrative that truly represented my potential to the admissions committee.",
      AM: "የምህረት ምክር ወሳኝ ነበር። በቅጾች ብቻ አልረዱኝም፤ ለኮሚቴው አቅሜን በትክክል የሚገልጽ ታሪክ እንድገነባ አግዘውኛል።"
    },
    category: 'Scholarship'
  },
  {
    id: 's2',
    name: "Dawit Alemu",
    university: "Technical University of Munich",
    country: "Germany",
    award: "DAAD Scholar",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    quote: {
      EN: "Navigating the German visa system was daunting. The team at Mihret Bekalu Consultancy made it seamless, handling every document with precision.",
      AM: "የጀርመን ቪዛ አሰራር በጣም አስቸጋሪ ነበር። የምህረት በቃሉ አማካሪ ቡድን ግን ሂደቱን ቀላል እና ትክክለኛ አደረጉልኝ።"
    },
    category: 'Visa Approval'
  },
  {
    id: 's3',
    name: "Hanna Tadesse",
    university: "University of Cambridge",
    country: "UK",
    award: "Master's in Biotechnology",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    quote: {
      EN: "From mock interviews to scholarship essay editing, the support was world-class. I am now pursuing my dream at Cambridge thanks to their dedication.",
      AM: "ከቃለ መጠይቅ ዝግጅት እስከ ስኮላርሺፕ ድርሰት አርትዖት፣ ድጋፉ ዓለም አቀፍ ደረጃውን የጠበቀ ነበር። አሁን በካምብሪጅ ህልሜን እየኖርኩ ነው።"
    },
    category: 'Admission'
  },
  {
    id: 's4',
    name: "Samuel Kebede",
    university: "University of Toronto",
    country: "Canada",
    award: "Lester B. Pearson Scholar",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    quote: {
      EN: "They understood my financial constraints and matched me with fully funded opportunities I didn't even know existed.",
      AM: "የገንዘብ አቅሜን ተረድተው እኔ የማላውቃቸውን ሙሉ ወጪ የሚሸፍኑ እድሎች ጋር አገናኙኝ።"
    },
    category: 'Scholarship'
  },
  {
    id: 's5',
    name: "Lydia Abebe",
    university: "Sorbonne University",
    country: "France",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    quote: {
      EN: "Professional, honest, and incredibly knowledgeable about the Schengen visa process. I got my visa approved in record time.",
      AM: "ሙያዊ፣ ታማኝ እና ስለ ሼንገን ቪዛ ሂደት ጥልቅ እውቀት ያላቸው። ቪዛዬ በፍጥነት ተፈቀደልኝ።"
    },
    category: 'Visa Approval'
  },
  {
    id: 's6',
    name: "Yonas Girma",
    university: "KAIST",
    country: "South Korea",
    award: "GKS Scholarship",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    quote: {
      EN: "The cultural preparation they provided for my move to Korea was just as valuable as the application support.",
      AM: "ወደ ኮሪያ ለምሄደው ጉዞ የሰጡኝ የባህል ዝግጅት ልክ እንደ ማመልከቻ ድጋፉ ጠቃሚ ነበር።"
    },
    category: 'Scholarship'
  }
];

const Services: React.FC = () => {
  const { language, t } = useAppContext();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const getText = (content: string | LocalizedString) => {
    if (typeof content === 'string') return content;
    return content[language] || content.EN;
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = FALLBACK_IMAGE;
  };

  // Helper to generate optimized Unsplash URLs
  const getOptimizedUrl = (url: string, width: number, quality = 80) => {
    if (!url || !url.includes('images.unsplash.com')) return url;
    const baseUrl = url.split('?')[0];
    return `${baseUrl}?auto=format&fit=crop&w=${width}&q=${quality}`;
  };

  const getSrcSet = (url: string) => {
    if (!url || !url.includes('images.unsplash.com')) return undefined;
    return `
      ${getOptimizedUrl(url, 640)} 640w,
      ${getOptimizedUrl(url, 1024)} 1024w,
      ${getOptimizedUrl(url, 1500)} 1500w
    `;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Calculate scroll amount: roughly one card width + gap
      const cardWidth = scrollContainerRef.current.firstElementChild?.getBoundingClientRect().width || 350;
      const gap = 24; 
      const scrollAmount = cardWidth + gap;
      
      const targetScroll = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-brand-sand/20 dark:bg-brand-ink min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-24 reveal active">
          <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">
            {t('serv.title')}
          </span>
          <h1 className="font-serif text-6xl md:text-8xl text-brand-ink dark:text-brand-sand mb-10 leading-[1.1]">
            {t('serv.hero')} <span className="italic font-light text-brand-primary dark:text-brand-accent">{t('serv.hero_sub')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-ink dark:text-brand-sand font-normal leading-relaxed max-w-2xl">
            {language === 'AM' 
              ? 'በምሕረት በቃሉ የቪዛ ቅጽ እና አማካሪ ድርጅት ውስጥ አስተማማኝ እና ደንበኛ-ተኮር የቪዛ እና የጉዞ አገልግሎቶችን እንሰጣለን። ለትምህርት፣ ለሥራ፣ ለጉብኝት ወይም ቤተሰብን ለመጠየቅ ዓለም አቀፍ ግቦችዎን እንዲያሳኩ በእያንዳንዱ ደረጃ እንመራዎታለን። አቀራረባችን ሙያዊ፣ ጥንቃቄ የተሞላበት እና ለእያንዳንዱ ደንበኛ ፍላጎት የተመቻቸ ነው።'
              : 'At Mhiret Bekalu Visa Form and Consulting, we provide reliable and client-focused visa and travel services. We guide you through every step, helping you achieve your international goals—whether for study, work, tourism, or visiting family. Our approach is professional, careful, and tailored to each client’s needs.'}
          </p>
        </div>

        {/* Services List - Alternating Layout */}
        <div className="space-y-32">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 lg:gap-32 items-center py-16`}>
              
              {/* Background Theme Image (Blurred) - Optimized to fetch tiny image */}
              {service.image && (
                <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.03] dark:opacity-[0.05] pointer-events-none rounded-[4rem]">
                   <img 
                    src={getOptimizedUrl(service.image, 50, 20)} // Very small, low quality for blur
                    alt="" 
                    className="w-full h-full object-cover blur-[100px] scale-125" 
                    loading="lazy"
                    decoding="async"
                    aria-hidden="true"
                    onError={(e) => {e.currentTarget.style.display = 'none'}}
                   />
                </div>
              )}

              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group reveal z-10">
                <div className={`absolute -top-6 ${index % 2 === 0 ? '-left-6' : '-right-6'} w-full h-full border border-brand-accent/20 z-0`}></div>
                <div className="aspect-[4/3] relative overflow-hidden bg-white dark:bg-zinc-900 z-10 shadow-2xl rounded-sm">
                  {service.image ? (
                    <img 
                      src={getOptimizedUrl(service.image, 800)} 
                      srcSet={getSrcSet(service.image)}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      alt={getText(service.title)} 
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                      onError={handleImageError}
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
                   {t('serv.pillar')} 0{index + 1}
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-ink dark:text-brand-sand mb-10 leading-tight">
                  {getText(service.title)}
                </h2>
                <p className="text-brand-ink dark:text-brand-sand text-lg leading-relaxed mb-12 font-normal">
                  {getText(service.description)}
                </p>
                
                {/* Detail Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-4 bg-white/50 dark:bg-zinc-900/50 p-6 border border-brand-ink/30 dark:border-white/30 hover:border-brand-accent/40 transition-all group/detail backdrop-blur-sm">
                      <div className="w-1.5 h-1.5 bg-brand-accent rounded-full group-hover/detail:scale-150 transition-transform mt-2"></div>
                      <span className="text-brand-ink dark:text-brand-sand text-[11px] font-bold uppercase tracking-widest leading-relaxed">
                        {getText(detail)}
                      </span>
                    </div>
                  ))}
                </div>

                <Link to="/book" className="inline-flex items-center gap-6 text-brand-ink dark:text-brand-sand font-black text-[12px] uppercase tracking-[0.4em] group/btn hover:text-brand-primary dark:hover:text-brand-accent transition-colors">
                  {t('serv.initiate')} <ArrowRight size={24} className="group-hover/btn:translate-x-4 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* COMPACT SUCCESS STORIES CAROUSEL */}
        <div className="mt-32 mb-20 reveal active border-t border-brand-ink/10 dark:border-white/10 pt-20">
             <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                <div className="max-w-xl">
                   <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
                      {t('serv.stories')}
                   </span>
                   <h2 className="font-serif text-4xl text-brand-ink dark:text-brand-sand mb-4">
                      {t('serv.voices')}
                   </h2>
                   <p className="text-sm opacity-60 font-light leading-relaxed">
                      {t('serv.stories_desc')}
                   </p>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => scroll('left')} 
                    className="w-12 h-12 rounded-full border border-brand-ink/20 dark:border-white/20 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent hover:text-brand-ink transition-all active:scale-95"
                    aria-label="Previous testimonies"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={() => scroll('right')} 
                    className="w-12 h-12 rounded-full border border-brand-ink/20 dark:border-white/20 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent hover:text-brand-ink transition-all active:scale-95"
                    aria-label="Next testimonies"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
             </div>

             {/* Sliding Track */}
             <div 
               ref={scrollContainerRef}
               className="flex gap-6 overflow-x-auto pb-10 snap-x snap-mandatory no-scrollbar"
               style={{ scrollBehavior: 'smooth' }}
             >
                {STORIES.map((story) => (
                    <div 
                      key={story.id} 
                      className="snap-center shrink-0 w-[85vw] sm:w-[400px] bg-white dark:bg-zinc-900 border border-brand-ink/10 dark:border-white/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-1"
                    >
                       <div className="flex flex-col h-full">
                          <div className="relative h-48 overflow-hidden">
                             <img 
                               src={getOptimizedUrl(story.image, 400)}
                               alt={story.name}
                               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                             />
                             <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                                {story.category === 'Scholarship' ? (
                                  <GraduationCap size={12} className="text-brand-accent" />
                                ) : (
                                  <CheckCircle2 size={12} className="text-brand-emerald" />
                                )}
                                <span className="text-[8px] font-black uppercase tracking-widest text-brand-ink dark:text-brand-sand">
                                  {story.category}
                                </span>
                             </div>
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                             <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="font-serif text-lg leading-tight">{story.name}</h3>
                                <p className="text-[9px] uppercase tracking-widest opacity-80 mt-1">{story.university}</p>
                             </div>
                          </div>
                          
                          <div className="p-8 flex-grow flex flex-col justify-between bg-brand-sand/10 dark:bg-white/5">
                             <div className="relative pl-8 border-l-2 border-brand-accent/30 mb-6">
                                <Quote className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-brand-sand/10 dark:bg-zinc-900 text-brand-accent p-0.5 rounded-full" size={20} fill="currentColor" />
                                <p className="text-sm font-light text-brand-ink/70 dark:text-brand-sand/70 italic leading-relaxed line-clamp-4">
                                  "{getText(story.quote)}"
                                </p>
                             </div>
                             
                             <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-brand-ink/40 dark:text-brand-sand/40">
                                <MapPin size={12} /> {story.country}
                             </div>
                          </div>
                       </div>
                    </div>
                ))}
                
                {/* CTA Card at end of slide */}
                <div className="snap-center shrink-0 w-[85vw] sm:w-[300px] bg-brand-primary text-brand-sand rounded-3xl overflow-hidden shadow-xl flex flex-col items-center justify-center text-center p-8 relative group cursor-pointer" onClick={() => window.location.href = '/#/book'}>
                   <div className="absolute inset-0 bg-tibeb-pattern opacity-10"></div>
                   <div className="relative z-10">
                      <h3 className="font-serif text-2xl mb-4">{t('success.next')}</h3>
                      <p className="text-xs opacity-80 mb-8 font-light leading-relaxed">{t('success.next_desc')}</p>
                      <span className="w-12 h-12 bg-brand-accent text-brand-ink rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg">
                        <ArrowRight size={20} />
                      </span>
                   </div>
                </div>
             </div>
        </div>

        {/* Closing Call to Action */}
        <div className="mt-20 bg-brand-ink dark:bg-white/5 p-20 text-center rounded-[3rem] text-brand-sand shadow-2xl reveal z-10 relative overflow-hidden">
           <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="font-serif text-4xl md:text-6xl mb-8">{t('serv.guidance')}</h2>
              <p className="text-lg font-light opacity-60 mb-12">{t('serv.guidance_desc')}</p>
              <Link to="/book" className="bg-brand-accent text-brand-ink px-14 py-5 font-black uppercase tracking-[0.3em] text-xs hover:bg-brand-sand transition-all shadow-xl hover:-translate-y-1 inline-block">
                {t('nav.book')}
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
