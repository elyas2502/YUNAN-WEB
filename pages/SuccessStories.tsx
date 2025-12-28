import React, { useEffect, useRef } from 'react';
import { Quote, MapPin, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
// @ts-ignore
import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { LocalizedString } from '../types';
import { FALLBACK_IMAGE } from '../constants';

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

const SuccessStories: React.FC = () => {
  const { language, t } = useAppContext();
  const observerRef = useRef<IntersectionObserver | null>(null);

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

  const getLang = (content: string | LocalizedString | undefined) => {
    if (!content) return '';
    if (typeof content === 'string') return content;
    return content[language] || content.EN;
  };

  return (
    <div className="bg-brand-sand/20 dark:bg-brand-ink min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="max-w-5xl mb-32 reveal active">
          <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">
            {t('nav.success')}
          </span>
          <h1 className="font-serif text-6xl md:text-[8rem] text-brand-ink dark:text-brand-sand mb-12 leading-[0.9]">
            {t('success.voices')} <br />
            <span className="italic font-light text-brand-primary dark:text-brand-accent">{t('success.victory')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-ink dark:text-brand-sand font-light leading-relaxed max-w-3xl">
            {t('success.desc')}
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 border-y border-brand-ink/20 dark:border-white/20 py-12 reveal active">
           {[
             { label: t('success.visas'), val: '1,200+' },
             { label: t('success.won'), val: '$50M+' },
             { label: t('success.reached'), val: '35+' },
             { label: t('success.rate'), val: '98%' },
           ].map((stat, idx) => (
             <div key={idx} className="text-center md:text-left">
                <h4 className="font-serif text-3xl md:text-5xl text-brand-ink dark:text-brand-sand mb-2">{stat.val}</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-ink/40 dark:text-brand-sand/40">{stat.label}</p>
             </div>
           ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {STORIES.map((story, index) => (
            <div 
              key={story.id} 
              className={`group reveal active flex flex-col ${index % 2 === 1 ? 'md:mt-20' : ''}`} // Staggered grid effect
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-10 shadow-2xl bg-brand-ink/5">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMAGE; }}
                />
                
                {/* Badge */}
                <div className="absolute top-6 left-6 bg-white/90 dark:bg-black/80 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 shadow-lg">
                   {story.category === 'Scholarship' ? (
                     <GraduationCap size={16} className="text-brand-accent" />
                   ) : (
                     <CheckCircle2 size={16} className="text-brand-emerald" />
                   )}
                   <span className="text-[10px] font-black uppercase tracking-widest text-brand-ink dark:text-brand-sand">
                     {story.category}
                   </span>
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-transparent to-transparent opacity-80"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-10 text-brand-sand">
                   <div className="flex items-center gap-3 mb-4 opacity-80">
                      <MapPin size={16} className="text-brand-accent" />
                      <span className="text-xs font-bold uppercase tracking-widest">{story.university}, {story.country}</span>
                   </div>
                   <h3 className="font-serif text-3xl md:text-4xl leading-tight">{story.name}</h3>
                   {story.award && (
                     <p className="text-brand-accent text-sm font-bold uppercase tracking-widest mt-2">{story.award}</p>
                   )}
                </div>
              </div>

              {/* Quote Section */}
              <div className="relative pl-12 border-l-2 border-brand-accent/30">
                 <Quote className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-brand-sand dark:bg-brand-ink text-brand-accent p-1" size={32} fill="currentColor" />
                 <p className="text-lg md:text-xl font-light text-brand-ink/70 dark:text-brand-sand/70 italic leading-relaxed">
                   "{getLang(story.quote)}"
                 </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-40 bg-brand-primary rounded-[4rem] p-16 md:p-32 text-center text-brand-sand relative overflow-hidden reveal active">
           <div className="absolute inset-0 bg-tibeb-pattern opacity-10"></div>
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="font-serif text-5xl md:text-7xl mb-10">{t('success.next')}</h2>
             <p className="text-xl opacity-80 mb-12 font-light">{t('success.next_desc')}</p>
             <Link to="/book" className="inline-flex items-center gap-4 bg-brand-accent text-brand-ink px-12 py-6 font-black uppercase tracking-[0.3em] text-xs hover:bg-white transition-all shadow-2xl hover:-translate-y-1">
               {t('success.start')} <ArrowRight size={18} />
             </Link>
           </div>
        </div>

      </div>
    </div>
  );
};

export default SuccessStories;