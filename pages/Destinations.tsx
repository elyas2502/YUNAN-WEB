
import React, { useMemo, useState } from 'react';
import { COUNTRIES, FALLBACK_IMAGE } from '../constants';
import { Continent, Country } from '../types';
import { useAppContext } from '../contexts/AppContext';
import { Search, Compass, ArrowRight } from 'lucide-react';
/* Added @ts-ignore to bypass false positive type error for react-router-dom exports */
// @ts-ignore
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';

const Destinations: React.FC = () => {
  const { language, t } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeContinent, setActiveContinent] = useState<Continent | 'All'>('All');

  const continents: Continent[] = ['Africa', 'Europe', 'Asia', 'North America', 'South America', 'Middle East', 'Oceania'];

  const filteredCountries = useMemo(() => {
    return COUNTRIES.filter(c => {
      const matchesSearch = c.name[language].toLowerCase().includes(searchTerm.toLowerCase());
      const matchesContinent = activeContinent === 'All' || c.continent === activeContinent;
      return matchesSearch && matchesContinent;
    });
  }, [searchTerm, activeContinent, language]);

  const groupedCountries = useMemo(() => {
    const groups: Record<Continent, Country[]> = {} as any;
    continents.forEach(cont => groups[cont] = []);
    
    filteredCountries.forEach(c => {
      if (groups[c.continent]) groups[c.continent].push(c);
    });
    
    return groups;
  }, [filteredCountries]);

  return (
    <div className="bg-brand-sand/20 dark:bg-brand-ink min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-4xl mb-24 reveal active">
          <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">
            {t('dest.network')}
          </span>
          <h1 className="font-serif text-6xl md:text-[7rem] text-brand-ink dark:text-brand-sand mb-8 leading-tight">
            {t('dest.count')} <br />
            <span className="italic font-light text-brand-primary dark:text-brand-accent">{t('dest.horizons')}</span>
          </h1>
          <p className="text-xl text-brand-ink/70 dark:text-brand-sand/70 font-light max-w-2xl leading-relaxed">
            {t('dest.desc')}
          </p>
        </div>

        {/* Filter Section */}
        <div className="relative z-10 bg-white/80 dark:bg-brand-ink/80 backdrop-blur-xl border border-brand-ink/30 dark:border-white/30 p-2 rounded-full shadow-xl mb-20 flex flex-col lg:flex-row gap-4 items-center justify-between reveal active">
          <div className="flex flex-wrap justify-center gap-1 px-2">
            <button 
              onClick={() => setActiveContinent('All')}
              className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeContinent === 'All' ? 'bg-brand-ink text-brand-sand dark:bg-brand-sand dark:text-brand-ink' : 'text-brand-ink/40 dark:text-brand-sand/40 hover:bg-brand-ink/5 dark:hover:bg-white/5'}`}
            >
              {t('dest.regions')}
            </button>
            {continents.map(c => (
              <button 
                key={c}
                onClick={() => setActiveContinent(c)}
                className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeContinent === c ? 'bg-brand-accent text-brand-ink' : 'text-brand-ink/40 dark:text-brand-sand/40 hover:bg-brand-ink/5 dark:hover:bg-white/5'}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-64 group pr-2">
            <input 
              type="text" 
              placeholder={t('dest.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-brand-sand/50 dark:bg-brand-ink/50 border-none py-2.5 pl-10 pr-4 text-xs rounded-full outline-none focus:ring-1 focus:ring-brand-accent transition-all dark:text-brand-sand placeholder:text-brand-ink/20 dark:placeholder:text-brand-sand/20"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-ink/20 dark:text-brand-sand/20" size={14} />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-32">
          {continents.map(cont => {
            const countries = groupedCountries[cont];
            if (countries.length === 0) return null;

            return (
              <section key={cont} className="reveal active">
                <div className="flex items-center gap-6 mb-12">
                   <h2 className="font-serif text-4xl md:text-5xl text-brand-ink dark:text-brand-sand">{cont}</h2>
                   <div className="flex-grow h-px bg-brand-ink/30 dark:bg-white/30"></div>
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-ink/30 dark:text-brand-sand/30">
                     {countries.length} Destinations
                   </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                   {countries.map(country => (
                     <div key={country.id} className="group relative bg-brand-ink/5 dark:bg-white/5 rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl reveal active">
                        <LazyImage
                          src={country.image || FALLBACK_IMAGE}
                          alt={country.name[language]}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                          wrapperClassName="absolute inset-0 w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                           <div className="flex items-center gap-4 mb-3">
                              <span className="text-3xl">{country.flag}</span>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">{country.continent}</span>
                           </div>
                           <h3 className="font-serif text-3xl text-brand-sand mb-6">{country.name[language]}</h3>
                           <Link 
                             to={`/destinations/${country.id}`}
                             className="flex items-center gap-4 text-brand-sand/50 group-hover:text-brand-accent transition-colors text-[10px] font-black uppercase tracking-widest"
                           >
                             {t('dest.explore')} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                           </Link>
                        </div>
                     </div>
                   ))}
                </div>
              </section>
            )
          })}
        </div>

        {filteredCountries.length === 0 && (
          <div className="py-60 text-center reveal active">
             <Compass size={80} className="mx-auto text-brand-ink/5 mb-8 animate-pulse" />
             <h3 className="font-serif text-3xl text-brand-ink/20">{t('dest.no_match')}</h3>
             <button onClick={() => {setSearchTerm(''); setActiveContinent('All');}} className="mt-8 text-brand-accent font-black uppercase tracking-widest text-[10px] hover:underline">{t('dest.reset')}</button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Destinations;
