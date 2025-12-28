import React, { useState, useEffect, useMemo } from 'react';
import { SCHOLARSHIPS, FALLBACK_IMAGE } from '../constants';
import { Calendar, Search, MapPin, Globe, GraduationCap, Briefcase, FlaskConical, BookOpen, ArrowRight } from 'lucide-react';
// @ts-ignore
import { useSearchParams, Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { LocalizedString, OpportunityCategory } from '../types';

const Scholarships: React.FC = () => {
  const { language, t } = useAppContext();
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState<OpportunityCategory | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) setFilter(cat as OpportunityCategory);
  }, [searchParams]);

  const getLang = (content: string | LocalizedString | undefined) => {
    if (!content) return '';
    if (typeof content === 'string') return content;
    return content[language] || content.EN;
  };

  const categories: {id: OpportunityCategory | 'All', label: {EN: string, AM: string}, icon: any}[] = [
    { id: 'All', label: { EN: 'All Opportunities', AM: 'ሁሉም እድሎች' }, icon: Globe },
    { id: 'PhD', label: { EN: 'PhD Programs', AM: 'ፒኤችዲ' }, icon: FlaskConical },
    { id: 'Masters', label: { EN: 'Master’s Degrees', AM: 'ማስተርስ' }, icon: BookOpen },
    { id: 'Undergraduate', label: { EN: 'Undergraduate', AM: 'ቅድመ ምረቃ' }, icon: GraduationCap },
    { id: 'Internship', label: { EN: 'Internships', AM: 'ልምምድ' }, icon: Briefcase },
  ];

  const filteredScholarships = useMemo(() => {
    return SCHOLARSHIPS.filter(s => {
      const matchesFilter = filter === 'All' || s.category === filter;
      const matchesSearch = searchTerm === '' || 
        getLang(s.title).toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.provider.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchTerm, language]);

  return (
    <div className="bg-brand-sand/30 dark:bg-brand-ink min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-6 md:px-12 mb-24">
        <div className="max-w-4xl reveal active">
          <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[11px] mb-8 block">
            {language === 'AM' ? 'ዓለም አቀፍ የትምህርት ዕድሎች' : 'Global Education Opportunities'}
          </span>
          <h1 className="font-serif text-6xl md:text-[7rem] text-brand-ink dark:text-brand-sand mb-10 leading-[0.9]">
            {language === 'AM' ? 'የጥናት እና የልምምድ ዕድሎች' : 'Scholarships & Internships.'}
          </h1>
          <p className="text-xl md:text-2xl text-brand-ink/70 dark:text-brand-sand/70 font-light leading-relaxed max-w-2xl">
            {language === 'AM' 
              ? 'ለኢትዮጵያውያን ተማሪዎች የተዘጋጁ ምርጥ ዓለም አቀፍ የገንዘብ ድጋፎች።' 
              : 'Access elite international funding curated for high-potential Ethiopian scholars. No registration fees, just pure opportunity.'}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-6 md:px-12 mb-20">
        <div className="bg-white dark:bg-zinc-900 border border-brand-ink/5 dark:border-white/5 p-8 shadow-2xl reveal active rounded-[2.5rem]">
          <div className="flex flex-col gap-10">
            <div className="relative w-full group">
              <input 
                type="text" 
                placeholder={language === 'AM' ? 'ዕድሎችን ይፈልጉ...' : 'Search programs...'}
                className="w-full bg-brand-sand/30 dark:bg-brand-ink/50 border-none py-6 pl-16 pr-8 text-lg focus:ring-2 focus:ring-brand-accent transition-all dark:text-brand-sand outline-none rounded-2xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-ink/30 dark:text-brand-sand/30" size={28} />
            </div>

            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`flex items-center gap-4 px-8 py-4 text-[10px] font-black uppercase tracking-widest transition-all rounded-xl border ${
                    filter === cat.id 
                      ? 'bg-brand-ink dark:bg-brand-sand text-brand-sand dark:text-brand-ink border-brand-ink dark:border-brand-sand shadow-xl' 
                      : 'bg-transparent border-brand-ink/10 dark:border-white/10 text-brand-ink/40 dark:text-brand-sand/40 hover:border-brand-accent'
                  }`}
                >
                  <cat.icon size={16} />
                  {getLang(cat.label)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-40">
          {filteredScholarships.map((s, i) => (
            <article key={s.id} className="group flex flex-col h-full bg-white dark:bg-zinc-900 border border-brand-ink/5 dark:border-white/5 hover:shadow-2xl transition-all duration-700 reveal active rounded-[2.5rem] overflow-hidden" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={s.image || FALLBACK_IMAGE} 
                  alt={getLang(s.title)} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-brand-accent text-brand-ink px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-full">
                    {getLang(s.level)}
                  </span>
                </div>
              </div>

              <div className="p-10 flex-grow flex flex-col">
                <div className="flex items-center gap-6 text-[9px] text-brand-ink/40 dark:text-brand-sand/40 mb-6 font-black uppercase tracking-widest">
                  <span className="flex items-center gap-2"><MapPin size={12} className="text-brand-secondary" /> {s.location}</span>
                  <span className="flex items-center gap-2"><Globe size={12} className="text-brand-accent" /> {s.provider}</span>
                </div>
                
                <h3 className="font-serif text-3xl text-brand-ink dark:text-brand-sand mb-6 leading-tight">
                  {getLang(s.title)}
                </h3>
                
                <p className="text-brand-ink/60 dark:text-brand-sand/50 text-sm font-light leading-relaxed mb-8 flex-grow">
                  {getLang(s.description)}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {s.tags.map(tag => (
                    <span key={tag} className="text-[8px] font-bold uppercase tracking-widest px-3 py-1 bg-brand-sand dark:bg-white/5 text-brand-ink/50 dark:text-brand-sand/50 rounded-lg">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-8 border-t border-brand-ink/5 dark:border-white/5 flex items-center justify-between">
                   <div className="flex flex-col">
                      <span className="text-[9px] font-black uppercase tracking-widest text-brand-ink/30 dark:text-brand-sand/30">Funding Status</span>
                      <span className="text-xs font-bold text-brand-emerald">{getLang(s.type)}</span>
                   </div>
                   <Link to="/book" className="w-12 h-12 bg-brand-ink dark:bg-brand-sand text-brand-sand dark:text-brand-ink flex items-center justify-center rounded-xl group-hover:bg-brand-accent group-hover:text-brand-ink transition-all">
                      <ArrowRight size={20} />
                   </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredScholarships.length === 0 && (
          <div className="text-center py-40">
            <h3 className="font-serif text-3xl text-brand-ink/20">No matching scholarships found.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scholarships;