
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Send, Instagram, Linkedin, Globe, Shield, Facebook, Phone, Mail, MapPin } from 'lucide-react';
/* Added @ts-ignore to bypass false positive type error for react-router-dom exports */
// @ts-ignore
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';
import { useAppContext } from '../contexts/AppContext';
import BrandLogo from './BrandLogo';
import AiAssistant from './AiAssistant';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, theme, toggleTheme, t } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
    { name: t('nav.destinations'), path: '/destinations' },
    { name: t('nav.scholarships'), path: '/scholarships' },
    { name: t('nav.programs'), path: '/programs' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-sand/30 dark:bg-brand-ink transition-colors duration-500">
      
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-white/95 dark:bg-brand-ink/95 backdrop-blur-xl py-4 border-b border-brand-ink/10 shadow-sm' 
            : 'bg-transparent py-7'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-3">
              <BrandLogo 
                className={`transition-all duration-500 ${isScrolled ? 'w-10 h-10' : 'w-14 h-14 md:w-16 md:h-16'}`}
                showText={false} 
                variant={isScrolled ? 'dark' : 'light'} 
              />
              <div className="flex flex-col text-left">
                <span 
                  className={`font-sans font-black tracking-tight uppercase leading-none transition-all duration-500 ${
                    isScrolled 
                      ? 'text-xl text-brand-ink dark:text-brand-sand' 
                      : 'text-2xl md:text-3xl text-brand-ink dark:text-brand-sand'
                  }`}
                >
                  {language === 'AM' ? 'ምሕረት በቃሉ' : 'Mhiret Bekalu'}
                </span>
                <span className={`uppercase font-bold tracking-[0.25em] text-brand-accent mt-0.5 transition-all duration-500 ${
                  isScrolled ? 'text-[8px]' : 'text-[9px] md:text-[10px]'
                }`}>
                  {language === 'AM' ? 'የቪዛ ቅጽ እና አማካሪ' : 'Visa Form & Consultancy'}
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-[9px] font-black uppercase tracking-[0.2em] transition-all relative py-1 ${
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

          <div className="hidden lg:flex items-center gap-3">
            <div className={`flex items-center gap-1 px-3 h-8 rounded-full border transition-all ${
              isScrolled 
                ? 'bg-brand-ink/5 dark:bg-brand-sand/10 border-brand-ink/30 dark:border-brand-sand/30' 
                : 'bg-black/20 backdrop-blur-md border-white/30'
            }`}>
               <button onClick={() => setLanguage('EN')} className={`text-[9px] font-black leading-none transition-all px-1 ${language === 'EN' ? 'text-brand-accent' : isScrolled ? 'text-brand-ink/60 dark:text-brand-sand/60 hover:text-brand-ink dark:hover:text-brand-sand' : 'text-brand-sand/60 hover:text-brand-sand'}`}>EN</button>
               
               <div className={`w-[1px] h-2.5 mx-0.5 ${isScrolled ? 'bg-brand-ink/20 dark:bg-brand-sand/20' : 'bg-brand-sand/30'}`}></div>
               
               <button onClick={() => setLanguage('AM')} className={`text-[9px] font-black leading-none transition-all px-1 ${language === 'AM' ? 'text-brand-accent' : isScrolled ? 'text-brand-ink/60 dark:text-brand-sand/60 hover:text-brand-ink dark:hover:text-brand-sand' : 'text-brand-sand/60 hover:text-brand-sand'}`}>አማ</button>
            </div>
            
            <button 
              onClick={toggleTheme} 
              className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all hover:scale-105 active:scale-95 ${
                isScrolled 
                  ? 'bg-brand-ink/5 dark:bg-brand-sand/10 border-brand-ink/30 dark:border-brand-sand/30 text-brand-ink/60 dark:text-brand-sand/60 hover:text-brand-ink dark:hover:text-brand-sand' 
                  : 'bg-black/20 backdrop-blur-md border-white/30 text-brand-sand/60 hover:text-brand-sand'
              }`}
            >
              {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
            </button>

            <Link to="/book" className={`ml-1 px-6 h-8 flex items-center justify-center rounded-full text-[9px] font-black uppercase tracking-widest transition-all shadow-lg hover:-translate-y-0.5 ${isScrolled ? 'bg-brand-ink dark:bg-brand-sand text-brand-sand dark:text-brand-ink hover:bg-brand-primary dark:hover:bg-brand-accent' : 'bg-brand-accent text-brand-ink hover:bg-brand-sand'}`}>
              {t('nav.book')}
            </Link>
          </div>

          <button className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-brand-ink dark:text-brand-sand' : 'text-brand-sand'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
           <div className="absolute top-full left-0 right-0 bg-brand-ink border-b border-white/30 p-6 flex flex-col gap-4 shadow-2xl lg:hidden animate-fade-in-up">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="text-brand-sand text-sm font-bold uppercase tracking-widest py-3 border-b border-white/30 hover:text-brand-accent"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-4 pt-4">
                <button onClick={() => setLanguage('EN')} className={`flex-1 py-3 rounded text-xs font-black uppercase ${language === 'EN' ? 'bg-brand-accent text-brand-ink' : 'bg-white/10 text-brand-sand'}`}>EN</button>
                <button onClick={() => setLanguage('AM')} className={`flex-1 py-3 rounded text-xs font-black uppercase ${language === 'AM' ? 'bg-brand-accent text-brand-ink' : 'bg-white/10 text-brand-sand'}`}>አማ</button>
              </div>
           </div>
        )}
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-brand-ink text-brand-sand pt-8 pb-4 border-t border-white/20">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pt-4">
            
            {/* Column 1: Brand & Info (Aligned Left) */}
            <div className="col-span-1 lg:col-span-1">
               <div className="flex items-center justify-start gap-4 mb-4">
                  <BrandLogo className="w-14 h-14" variant="light" showText={false} />
                  <div className="text-left">
                    <p className="font-sans text-xl md:text-2xl text-brand-sand font-black leading-none uppercase tracking-tight">
                      {language === 'AM' ? 'ምሕረት በቃሉ' : 'Mhiret Bekalu'}
                    </p>
                    <p className="text-brand-accent text-[8px] uppercase font-bold tracking-[0.2em] mt-1">
                      {language === 'AM' ? 'የቪዛ ቅጽ እና አማካሪ' : 'Visa Form & Consultancy'}
                    </p>
                  </div>
               </div>
               <p className="text-brand-sand/40 max-w-sm mb-4 leading-relaxed text-[10px] font-light text-left">
                 {t('footer.specialized')}
               </p>
               <div className="flex gap-2 justify-start">
                 <a href={COMPANY_INFO.facebookUrl} target="_blank" className="w-8 h-8 rounded-full border border-brand-sand/30 flex items-center justify-center text-brand-sand/60 hover:bg-brand-accent hover:border-brand-accent hover:text-brand-ink transition-all">
                   <Facebook size={12} />
                 </a>
                 <a href={COMPANY_INFO.instagramUrl} target="_blank" className="w-8 h-8 rounded-full border border-brand-sand/30 flex items-center justify-center text-brand-sand/60 hover:bg-brand-accent hover:border-brand-accent hover:text-brand-ink transition-all">
                   <Instagram size={12} />
                 </a>
                 <a href={COMPANY_INFO.telegramUrl} target="_blank" className="w-8 h-8 rounded-full border border-brand-sand/30 flex items-center justify-center text-brand-sand/60 hover:bg-brand-accent hover:border-brand-accent hover:text-brand-ink transition-all">
                   <Send size={12} />
                 </a>
                 <a href={COMPANY_INFO.linkedinUrl} target="_blank" className="w-8 h-8 rounded-full border border-brand-sand/30 flex items-center justify-center text-brand-sand/60 hover:bg-brand-accent hover:border-brand-accent hover:text-brand-ink transition-all">
                   <Linkedin size={12} />
                 </a>
               </div>
            </div>

            {/* Column 2: Contact Info */}
            <div className="col-span-1 lg:col-span-1">
               <h4 className="font-serif text-lg mb-6">{t('footer.headquarters')}</h4>
               <ul className="space-y-4">
                  <li className="flex items-start gap-3 opacity-60">
                     <MapPin size={16} className="mt-1 text-brand-accent" />
                     <span className="text-sm font-light leading-relaxed">{COMPANY_INFO.address}<br/>{COMPANY_INFO.landmark}</span>
                  </li>
                  <li className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                     <Phone size={16} className="text-brand-accent" />
                     <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm font-light">{COMPANY_INFO.phone}</a>
                  </li>
                  <li className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                     <Mail size={16} className="text-brand-accent" />
                     <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-light">{COMPANY_INFO.email}</a>
                  </li>
               </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div className="col-span-1 lg:col-span-1">
               <h4 className="font-serif text-lg mb-6">{t('footer.discover')}</h4>
               <ul className="space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                       <Link to={link.path} className="text-sm font-light opacity-60 hover:text-brand-accent hover:opacity-100 transition-all flex items-center gap-2">
                         <span className="w-1 h-1 rounded-full bg-brand-accent"></span>
                         {link.name}
                       </Link>
                    </li>
                  ))}
               </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="col-span-1 lg:col-span-1">
               <h4 className="font-serif text-lg mb-6">{t('footer.subscribe')}</h4>
               <p className="text-xs opacity-50 mb-4 font-light leading-relaxed">
                 {t('footer.subscribe_desc')}
               </p>
               <div className="relative">
                 <input 
                   type="email" 
                   placeholder={t('footer.email_placeholder')} 
                   className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-brand-accent transition-colors text-brand-sand"
                 />
                 <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-accent text-brand-ink p-1.5 rounded-lg hover:bg-white transition-colors">
                    <Send size={12} />
                 </button>
               </div>
            </div>

          </div>

          {/* Copyright Bar */}
          <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-[10px] uppercase tracking-widest opacity-40">
               © {new Date().getFullYear()} {COMPANY_INFO.name}. {t('footer.rights')}
             </p>
             <p className="text-[10px] opacity-30 font-light max-w-md text-center md:text-right hidden md:block">
               {t('footer.global_access')}
             </p>
          </div>
        </div>
      </footer>
      
      <AiAssistant />
    </div>
  );
};

export default Layout;
