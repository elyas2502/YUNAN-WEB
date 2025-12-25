
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Send, Instagram, Linkedin, Globe, Compass } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';
import { useAppContext } from '../contexts/AppContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, theme, toggleTheme, t } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.scholarships'), path: '/scholarships' },
    { name: t('nav.programs'), path: '/programs' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-sand/30 dark:bg-brand-ink transition-colors duration-500">
      
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-brand-ink/95 backdrop-blur-xl py-4 border-b border-brand-ink/5' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-14 h-14 bg-brand-ink dark:bg-brand-accent text-brand-sand dark:text-brand-ink flex items-center justify-center transition-transform group-hover:scale-110 shadow-xl relative overflow-hidden">
               <div className="absolute inset-0 bg-brand-primary opacity-20 group-hover:opacity-10 transition-opacity"></div>
               <svg viewBox="0 0 100 100" className="w-10 h-10 fill-current relative z-10">
                 <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="opacity-30" />
                 <path d="M30 30 L50 60 L70 30 M50 60 L50 85" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                 <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
               </svg>
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-2xl font-black tracking-tighter transition-colors ${isScrolled ? 'text-brand-ink dark:text-brand-sand' : 'text-brand-sand'}`}>
                {COMPANY_INFO.shortName}
              </span>
              <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-brand-accent drop-shadow-sm">World Consultancy</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all relative py-1 ${
                  location.pathname === link.path 
                    ? 'text-brand-accent' 
                    : isScrolled ? 'text-brand-ink/70 dark:text-brand-sand/70 hover:text-brand-ink dark:hover:text-brand-sand' : 'text-brand-sand/70 hover:text-brand-sand'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-accent transition-all ${location.pathname === link.path ? 'w-full' : 'w-0'}`}></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-3">
               <button onClick={() => setLanguage('EN')} className={`text-[11px] font-black transition-all ${language === 'EN' ? 'text-brand-accent' : 'opacity-20 hover:opacity-100 dark:text-brand-sand'}`}>EN</button>
               <span className="opacity-10 text-[10px]">|</span>
               <button onClick={() => setLanguage('AM')} className={`text-[11px] font-black transition-all ${language === 'AM' ? 'text-brand-accent' : 'opacity-20 hover:opacity-100 dark:text-brand-sand'}`}>አማ</button>
            </div>
            <button onClick={toggleTheme} className={`transition-colors p-2 rounded-full hover:bg-brand-ink/10 dark:hover:bg-brand-sand/10 ${isScrolled ? 'text-brand-ink/50 dark:text-brand-sand/50' : 'text-brand-sand/60'}`}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <Link to="/book" className={`px-8 py-3.5 text-[10px] font-black uppercase tracking-widest transition-all shadow-xl hover:-translate-y-0.5 ${isScrolled ? 'bg-brand-ink dark:bg-brand-sand text-brand-sand dark:text-brand-ink hover:bg-brand-primary dark:hover:bg-brand-accent' : 'bg-brand-accent text-brand-ink hover:bg-brand-sand'}`}>
              {t('nav.book')}
            </Link>
          </div>

          <button className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-brand-ink dark:text-brand-sand' : 'text-brand-sand'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brand-ink z-[150] transition-transform duration-700 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         <div className="p-12 flex flex-col h-full justify-center space-y-12">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-5xl text-brand-sand/40 hover:text-brand-accent transition-colors">
                {link.name}
              </Link>
            ))}
            <Link to="/book" onClick={() => setIsMobileMenuOpen(false)} className="bg-brand-accent text-brand-ink px-12 py-6 text-center font-bold uppercase tracking-widest text-xs">
              {t('hero.cta.consult')}
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-sand/20 uppercase tracking-[0.5em] text-[10px] font-bold mt-12">Close</button>
         </div>
      </div>

      <main className="flex-grow">{children}</main>

      <footer className="bg-brand-ink text-brand-sand py-40 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
            <div className="col-span-1 lg:col-span-2">
               <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                    <svg viewBox="0 0 100 100" className="w-8 h-8 fill-brand-accent">
                       <path d="M30 30 L50 60 L70 30 M50 60 L50 85" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                       <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <h2 className="font-serif text-4xl">{COMPANY_INFO.name}</h2>
               </div>
               <p className="text-brand-sand/40 max-w-sm mb-12 leading-relaxed text-lg font-light">
                 {language === 'EN' 
                   ? 'Your premium bridge between academic potential and global institutional excellence.'
                   : 'በአካዳሚክ ተሰጥኦ እና በዓለም አቀፍ የተቋማት የላቀ ብቃት መካከል ያለዎ ልዩ ድልድይ።'}
               </p>
               <div className="flex gap-8">
                 <a href={COMPANY_INFO.telegramUrl} className="text-brand-sand/60 hover:text-brand-accent transition-colors"><Send size={24} /></a>
                 <a href={COMPANY_INFO.instagramUrl} className="text-brand-sand/60 hover:text-brand-accent transition-colors"><Instagram size={24} /></a>
                 <a href={COMPANY_INFO.linkedinUrl} className="text-brand-sand/60 hover:text-brand-accent transition-colors"><Linkedin size={24} /></a>
               </div>
            </div>
            <div>
               <h4 className="text-[11px] font-black uppercase tracking-[0.4em] mb-10 text-brand-accent">{t('footer.resources')}</h4>
               <ul className="space-y-6 text-brand-sand/40 text-sm font-medium">
                  {navLinks.map(l => (
                    <li key={l.path}><Link to={l.path} className="hover:text-brand-sand transition-colors">{l.name}</Link></li>
                  ))}
               </ul>
            </div>
            <div>
               <h4 className="text-[11px] font-black uppercase tracking-[0.4em] mb-10 text-brand-accent">{t('footer.connect')}</h4>
               <ul className="space-y-6 text-brand-sand/40 text-sm font-light">
                  <li className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase font-bold text-white/20">{t('contact.call_us')}</span>
                    {COMPANY_INFO.phone}
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase font-bold text-white/20">{t('contact.write_us')}</span>
                    {COMPANY_INFO.email}
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase font-bold text-white/20">{t('contact.visit_us')}</span>
                    {COMPANY_INFO.address}
                  </li>
               </ul>
            </div>
          </div>
          <div className="pt-20 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.5em] text-white/20 flex flex-col md:flex-row justify-between gap-8">
            <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. {t('footer.rights')}</p>
            <div className="flex gap-12">
               <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
               <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
