
import React, { useState, useEffect } from 'react';
import { SCHOLARSHIPS, SEARCH_PLATFORMS } from '../constants';
import { Calendar, ArrowUpRight, Search, MapPin, Layers, CheckCircle, ExternalLink } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { LocalizedString, OpportunityCategory } from '../types';

const Scholarships: React.FC = () => {
  const { language, t } = useAppContext();
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState<OpportunityCategory | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const cat = searchParams.get('cat');
    const search = searchParams.get('search');
    if (cat) setFilter(cat as OpportunityCategory);
    if (search) setSearchTerm(search);
  }, [searchParams]);

  const getLang = (content: string | LocalizedString | undefined) => {
    if (!content) return '';
    if (typeof content === 'string') return content;
    return content[language] || content.EN;
  };

  const categories: (OpportunityCategory | 'All')[] = [
    'All', 'Undergraduate', 'Masters', 'PhD', 'Internship', 'Research', 'Short Course'
  ];

  const filteredScholarships = SCHOLARSHIPS.filter(s => {
    const matchesFilter = filter === 'All' || s.category === filter;
    const matchesSearch = searchTerm === '' || 
      getLang(s.title).toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-brand-sand/30 dark:bg-brand-ink min-h-screen pt-40 pb-20">
      
      <div className="container mx-auto px-6 md:px-12 mb-20 text-center">
        <span className="text-brand-secondary font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block animate-fade-in-up">
          {t('scholarships.elite')}
        </span>
        <h1 className="font-serif text-5xl md:text-8xl text-brand-ink dark:text-brand-sand mb-8 animate-fade-in-up">
          {t('scholarships.title')}
        </h1>
        <p className="text-xl text-brand-ink/70 dark:text-brand-sand/70 font-light max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Explore 14+ elite international funding opportunities curated specifically for high-potential Ethiopian talent.
        </p>
      </div>

      {/* Modern Filter Interface */}
      <div className="container mx-auto px-6 md:px-12 mb-20">
        <div className="bg-white dark:bg-zinc-900 border border-brand-ink/5 dark:border-white/5 p-4 shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="relative w-full lg:w-96 group">
              <input 
                type="text" 
                placeholder={t('scholarships.find')} 
                className="w-full bg-brand-sand/50 dark:bg-brand-ink/50 border-none py-4 pl-14 pr-4 text-sm focus:ring-2 focus:ring-brand-accent transition-all dark:text-brand-sand outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-ink/30 dark:text-brand-sand/30 group-focus-within:text-brand-accent transition-colors" size={20} />
            </div>

            <div className="flex flex-wrap justify-center gap-2 w-full lg:w-auto overflow-x-auto no-scrollbar py-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-8 py-4 text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                    filter === cat 
                      ? 'bg-brand-ink dark:bg-brand-sand text-brand-sand dark:text-brand-ink shadow-lg' 
                      : 'text-brand-ink/40 dark:text-brand-sand/40 hover:bg-brand-ink/5 dark:hover:bg-white/5'
                  }`}
                >
                  {cat === 'All' ? (language === 'AM' ? 'ሁሉም' : 'All') : cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-40">
          {filteredScholarships.map((s, i) => (
            <article key={s.id} className="group flex flex-col h-full bg-white dark:bg-zinc-900 overflow-hidden border border-brand-ink/5 dark:border-white/5 hover:shadow-2xl transition-all duration-500 reveal active" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={s.image} 
                  alt={getLang(s.title)} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-brand-accent text-brand-ink px-5 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {getLang(s.level)}
                  </span>
                </div>
              </div>

              <div className="p-10 flex-grow flex flex-col">
                <div className="flex items-center gap-6 text-[10px] text-brand-ink/50 dark:text-brand-sand/50 mb-8 font-black uppercase tracking-widest">
                  <span className="flex items-center gap-2"><MapPin size={12} className="text-brand-secondary" /> {s.location}</span>
                  {s.deadline && <span className="flex items-center gap-2"><Calendar size={12} className="text-brand-primary dark:text-brand-accent" /> {getLang(s.deadline)}</span>}
                </div>
                
                <h3 className="font-serif text-3xl text-brand-ink dark:text-brand-sand mb-4 leading-tight group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
                  {getLang(s.title)}
                </h3>
                
                <p className="text-brand-ink/70 dark:text-brand-sand/60 text-sm font-light leading-relaxed mb-8 line-clamp-3">
                  {getLang(s.description)}
                </p>
                
                <div className="mt-auto space-y-4">
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full bg-brand-sand dark:bg-white/5 p-4 text-[10px] font-black uppercase tracking-widest text-brand-ink dark:text-brand-sand hover:bg-brand-accent hover:text-brand-ink transition-all">
                    Official Application <ExternalLink size={14} />
                  </a>
                  <Link to="/book" className="flex items-center justify-center w-full border border-brand-ink/10 dark:border-white/10 p-4 text-[10px] font-black uppercase tracking-widest text-brand-ink dark:text-brand-sand hover:border-brand-accent transition-all">
                    Our Consultation Path
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Search Platforms Section - Fills the empty feel */}
        <div className="mt-60 bg-brand-ink p-16 md:p-32 relative overflow-hidden reveal active">
          <div className="absolute inset-0 bg-tibeb-pattern opacity-10 scale-[2]"></div>
          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">Resource Hub</span>
              <h3 className="font-serif text-4xl md:text-7xl text-brand-sand mb-8 leading-tight">Elite Search Platforms</h3>
              <p className="text-brand-sand/50 font-light text-lg">Direct access to the world's largest databases for postgraduate study and global funding.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SEARCH_PLATFORMS.map((p, i) => (
                <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="group bg-white/5 border border-white/10 p-10 hover:bg-brand-accent hover:border-brand-accent transition-all">
                   <h5 className="font-serif text-2xl text-brand-sand group-hover:text-brand-ink mb-4">{p.name}</h5>
                   <p className="text-brand-sand/40 group-hover:text-brand-ink/60 text-xs font-bold uppercase tracking-widest mb-8">{p.desc}</p>
                   <ArrowUpRight size={24} className="text-brand-accent group-hover:text-brand-ink transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
