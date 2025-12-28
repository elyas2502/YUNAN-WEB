import React, { useState, useEffect } from 'react';
/* Added @ts-ignore to bypass false positive type error for react-router-dom exports */
// @ts-ignore
import { useParams, Link } from 'react-router-dom';
import { COUNTRIES, DESTINATION_DETAILS } from '../constants';
import { useAppContext } from '../contexts/AppContext';
import { LocalizedString } from '../types';
import { Check, Download, GraduationCap, FileText, Landmark, Info, ArrowLeft } from 'lucide-react';

const DestinationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useAppContext();
  const [activeTab, setActiveTab] = useState<'facts' | 'documents' | 'institutions'>('facts');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const country = COUNTRIES.find(c => c.id === id);
  const details = DESTINATION_DETAILS.find(d => d.id === id) || DESTINATION_DETAILS.find(d => d.id === 'default');

  if (!country || !details) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const getLang = (content: string | LocalizedString | undefined) => {
    if (!content) return '';
    if (typeof content === 'string') return content;
    return content[language] || content.EN;
  };

  return (
    <div className="bg-brand-sand/20 dark:bg-brand-ink min-h-screen">
      
      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={details.heroImage} 
            className="w-full h-full object-cover"
            alt={getLang(country.name)}
          />
          <div className="absolute inset-0 bg-brand-ink/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-sand/20 dark:from-brand-ink via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col justify-end pb-20">
          <Link to="/destinations" className="inline-flex items-center gap-2 text-brand-sand/60 hover:text-brand-accent mb-8 transition-colors text-xs uppercase tracking-widest font-bold">
             <ArrowLeft size={16} /> {t('dest.back')}
          </Link>
          <div className="max-w-4xl animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
               <span className="text-6xl">{country.flag}</span>
               <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[11px] bg-brand-ink/40 px-4 py-2 rounded-full backdrop-blur-sm">
                 {country.continent}
               </span>
            </div>
            <h1 className="font-serif text-5xl md:text-8xl text-brand-sand mb-8 leading-tight">
              {t('dest.study_in')} {getLang(country.name)}
            </h1>
            <p className="text-xl text-brand-sand/80 font-light max-w-2xl leading-relaxed">
              {getLang(details.intro)}
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-20 z-40 bg-brand-sand/80 dark:bg-brand-ink/80 backdrop-blur-xl border-y border-brand-ink/30 dark:border-white/30 shadow-sm">
        <div className="container mx-auto px-6 md:px-12 flex justify-center md:justify-start gap-2 py-4">
          {[
            { id: 'facts', label: { EN: 'Facts', AM: 'እውነታዎች' }, icon: Info },
            { id: 'documents', label: { EN: 'Documents', AM: 'ሰነዶች' }, icon: FileText },
            { id: 'institutions', label: { EN: 'Institutions', AM: 'ተቋማት' }, icon: Landmark },
          ].map((tab) => (
             <button
               key={tab.id}
               onClick={() => setActiveTab(tab.id as any)}
               className={`flex items-center gap-3 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                 activeTab === tab.id 
                   ? 'bg-brand-ink dark:bg-brand-sand text-brand-sand dark:text-brand-ink shadow-lg' 
                   : 'text-brand-ink/50 dark:text-brand-sand/50 hover:bg-brand-ink/5 dark:hover:bg-white/5'
               }`}
             >
               <tab.icon size={14} />
               {getLang(tab.label as LocalizedString)}
             </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-6 md:px-12 py-20 min-h-[500px]">
        
        {/* FACTS TAB */}
        {activeTab === 'facts' && (
          <div className="animate-fade-in-up">
             <div className="bg-white dark:bg-zinc-900 border border-brand-ink/30 dark:border-white/30 p-12 rounded-[2.5rem] shadow-xl">
                <h2 className="font-serif text-3xl text-brand-ink dark:text-brand-sand mb-12 flex items-center gap-4">
                   {t('dest.facts')}
                   <div className="h-px bg-brand-ink/30 dark:bg-white/30 flex-grow"></div>
                </h2>
                
                <div className="grid gap-8">
                   {details.facts.map((fact, idx) => (
                     <div key={fact.id} className="flex items-start gap-6 group">
                        <div className="w-12 h-12 bg-brand-sand dark:bg-white/5 text-brand-ink dark:text-brand-sand font-serif text-xl flex items-center justify-center rounded-xl group-hover:bg-brand-accent group-hover:text-brand-ink transition-colors shadow-sm">
                           {idx + 1}
                        </div>
                        <div className="pt-3">
                           <p className="text-lg text-brand-ink/80 dark:text-brand-sand/80 font-light leading-relaxed">
                              {getLang(fact.text)}
                           </p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        )}

        {/* DOCUMENTS TAB */}
        {activeTab === 'documents' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in-up">
             {[details.requirements.bachelors, details.requirements.masters].map((req, idx) => (
               <div key={idx} className="bg-white dark:bg-zinc-900 border border-brand-ink/30 dark:border-white/30 p-10 rounded-[2.5rem] shadow-xl flex flex-col">
                  <div className="flex justify-between items-start mb-10">
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-brand-primary/10 text-brand-primary dark:text-brand-accent flex items-center justify-center rounded-2xl">
                           <GraduationCap size={28} />
                        </div>
                        <h3 className="font-serif text-2xl text-brand-ink dark:text-brand-sand">{getLang(req.title)}</h3>
                     </div>
                     <button className="flex items-center gap-2 px-4 py-2 border border-brand-ink/30 dark:border-white/30 rounded-lg text-[10px] font-bold uppercase tracking-widest text-brand-ink/50 dark:text-brand-sand/50 hover:bg-brand-ink/5 transition-all">
                        <Download size={14} /> {t('dest.checklist')}
                     </button>
                  </div>

                  <div className="space-y-4 mb-10 flex-grow">
                     <p className="text-[10px] font-black uppercase tracking-widest text-brand-ink/40 dark:text-brand-sand/40 mb-6">{t('dest.req_docs')}</p>
                     {req.items.map((item, i) => (
                       <div key={i} className="flex items-center gap-4 p-4 bg-brand-sand/20 dark:bg-white/5 rounded-xl border border-transparent hover:border-brand-accent/30 transition-all">
                          <FileText size={18} className="text-brand-ink/40 dark:text-brand-sand/40" />
                          <span className="text-sm text-brand-ink/80 dark:text-brand-sand/80 font-medium">{getLang(item.name)}</span>
                          {item.required && <div className="ml-auto w-2 h-2 rounded-full bg-brand-emerald"></div>}
                       </div>
                     ))}
                  </div>

                  <Link to="/book" className="w-full bg-brand-ink dark:bg-brand-sand text-brand-sand dark:text-brand-ink py-5 font-bold uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-3 rounded-xl hover:scale-[1.02] transition-transform">
                     {t('dest.apply')} {getLang(req.title)}
                  </Link>
               </div>
             ))}
          </div>
        )}

        {/* INSTITUTIONS TAB (Placeholder for now) */}
        {activeTab === 'institutions' && (
           <div className="bg-brand-primary p-20 text-center rounded-[2.5rem] text-brand-sand shadow-2xl relative overflow-hidden animate-fade-in-up">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
              <Landmark size={64} className="mx-auto mb-8 opacity-80" />
              <h3 className="font-serif text-4xl mb-6">{t('dest.partners')}</h3>
              <p className="text-xl font-light opacity-80 max-w-2xl mx-auto mb-10">
                 {t('dest.partners_desc')}
              </p>
              <Link to="/book" className="bg-brand-accent text-brand-ink px-10 py-4 font-black uppercase text-[10px] tracking-[0.3em] inline-block shadow-xl hover:bg-white transition-all">
                 {t('dest.find_uni')}
              </Link>
           </div>
        )}

      </div>
    </div>
  );
};

export default DestinationDetail;