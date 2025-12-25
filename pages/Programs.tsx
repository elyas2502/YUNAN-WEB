
import React, { useState } from 'react';
// Removed unused ACADEMIC_TRACKS import which was causing an error
import { PROGRAMS, COUNTRIES } from '../constants';
// Added Globe to the lucide-react imports to resolve "Cannot find name 'Globe'"
import { Search, GraduationCap, MapPin, Clock, ArrowRight, Layers, CheckCircle, FlaskConical, Briefcase, GraduationCap as GradIcon, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { LocalizedString } from '../types';

const Programs: React.FC = () => {
  const { language, t } = useAppContext();
  const [fieldFilter, setFieldFilter] = useState<string>('All');
  const [typeFilter, setTypeFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const getLang = (content: string | LocalizedString) => {
    if (typeof content === 'string') return content;
    return content[language] || content.EN;
  };

  const fields = ['All', 'Medicine', 'Engineering', 'Business', 'Computer Science', 'Arts', 'Law', 'Social Sciences', 'Environmental', 'Archaeology'];
  const types = ['All', 'Undergraduate', 'Internship', 'Research', 'Postgraduate'];

  const filteredPrograms = PROGRAMS.filter(p => {
    const matchesField = fieldFilter === 'All' || p.field === fieldFilter;
    const matchesType = typeFilter === 'All' || p.type === typeFilter;
    const matchesSearch = searchTerm === '' || 
      getLang(p.title).toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.university.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesField && matchesType && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'Internship': return <Briefcase size={20} />;
      case 'Research': return <FlaskConical size={20} />;
      default: return <GradIcon size={20} />;
    }
  };

  return (
    <div className="bg-brand-sand/20 dark:bg-brand-ink min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-20 reveal active">
          <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">{t('nav.programs')}</span>
          <h1 className="font-serif text-6xl md:text-[7.5rem] text-brand-ink dark:text-brand-sand mb-8 leading-tight">The Academic <br /><span className="italic font-light text-brand-primary dark:text-brand-accent">Horizon.</span></h1>
          <p className="text-xl text-brand-ink/70 dark:text-brand-sand/70 font-light max-w-2xl">Bridging the gap between ambitious Ethiopian scholars and elite global institutions for Undergraduate, Research, and Internship roles.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1 space-y-12 reveal active">
            <div className="space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-widest text-brand-ink/40 dark:text-brand-sand/40">Filter by Type</h4>
              <div className="flex flex-col gap-2">
                {types.map(ty => (
                  <button 
                    key={ty} 
                    onClick={() => setTypeFilter(ty)}
                    className={`px-6 py-4 text-left text-[10px] font-black uppercase tracking-widest transition-all ${typeFilter === ty ? 'bg-brand-accent text-brand-ink shadow-lg' : 'bg-white/5 dark:bg-white/5 hover:bg-brand-ink/5 dark:hover:bg-white/10 dark:text-brand-sand'}`}
                  >
                    {ty}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-widest text-brand-ink/40 dark:text-brand-sand/40">Filter by Field</h4>
              <div className="flex flex-col gap-2">
                {fields.map(f => (
                  <button 
                    key={f} 
                    onClick={() => setFieldFilter(f)}
                    className={`px-6 py-4 text-left text-[10px] font-black uppercase tracking-widest transition-all ${fieldFilter === f ? 'bg-brand-ink dark:bg-brand-sand text-brand-sand dark:text-brand-ink shadow-lg' : 'hover:bg-brand-ink/5 dark:hover:bg-white/5 dark:text-brand-sand'}`}
                  >
                    {f === 'All' ? t('programs.all') : f}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-10 bg-brand-primary text-brand-sand shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
               <h5 className="font-serif text-2xl mb-4 relative z-10">Unique Profile?</h5>
               <p className="text-xs text-brand-sand/70 mb-8 font-light leading-relaxed relative z-10">Can't find your specific research field? Our consultants specialize in custom institutional matching for PhD and specialized internships.</p>
               <Link to="/book" className="text-[10px] font-black uppercase tracking-[0.4em] border-b-2 border-brand-accent pb-1 inline-block relative z-10 hover:text-brand-accent transition-colors">Contact Expert</Link>
            </div>
          </div>

          {/* Program Grid */}
          <div className="lg:col-span-3">
             <div className="mb-12 relative reveal active">
                <input 
                  type="text" 
                  placeholder="Search university or program title..."
                  className="w-full bg-white dark:bg-zinc-900 border-none p-8 pl-16 text-sm outline-none shadow-xl dark:text-brand-sand focus:ring-2 focus:ring-brand-accent transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-ink/20" size={24} />
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPrograms.map((p, i) => {
                  const country = COUNTRIES.find(c => c.id === p.countryId);
                  return (
                    <div key={p.id} className="reveal active bg-white dark:bg-zinc-900 border border-brand-ink/5 dark:border-white/5 p-12 hover:shadow-2xl transition-all group flex flex-col h-full" style={{ animationDelay: `${i * 0.05}s` }}>
                       <div className="flex justify-between items-start mb-10">
                          <div className="w-14 h-14 bg-brand-sand dark:bg-white/5 flex items-center justify-center text-brand-primary dark:text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-ink transition-all">
                             {getTypeIcon(p.type)}
                          </div>
                          <div className="flex flex-col items-end">
                            {country && <span className="text-3xl mb-1">{country.flag}</span>}
                            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-brand-ink/40 dark:text-brand-sand/40">{p.type}</span>
                          </div>
                       </div>
                       <h3 className="font-serif text-2xl text-brand-ink dark:text-brand-sand mb-4 group-hover:text-brand-primary transition-colors leading-snug">{getLang(p.title)}</h3>
                       <p className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6 font-bold">{p.university}</p>
                       <p className="text-sm font-light text-brand-ink/60 dark:text-brand-sand/50 leading-relaxed mb-10 flex-grow">{getLang(p.description)}</p>
                       
                       <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-brand-ink/30 dark:text-brand-sand/30 mb-10 border-t border-brand-ink/5 dark:border-white/5 pt-8">
                          <span className="flex items-center gap-3"><Clock size={16} strokeWidth={1} /> {getLang(p.duration)}</span>
                          <span className="flex items-center gap-3"><MapPin size={16} strokeWidth={1} /> {country ? getLang(country.name) : ''}</span>
                       </div>

                       <Link to="/book" className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-brand-ink dark:text-brand-sand group-hover:text-brand-accent transition-all">
                          Express Interest <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                       </Link>
                    </div>
                  );
                })}
             </div>
             
             {filteredPrograms.length === 0 && (
               <div className="text-center py-60 reveal active">
                  <Globe size={80} className="mx-auto text-brand-ink/5 mb-10 animate-pulse" />
                  <p className="font-serif text-4xl text-brand-ink/20">{t('scholarships.no_match')}</p>
                  <button onClick={() => {setFieldFilter('All'); setTypeFilter('All'); setSearchTerm('');}} className="mt-8 text-brand-accent font-black uppercase tracking-widest text-[10px] hover:underline">Reset Filters</button>
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
