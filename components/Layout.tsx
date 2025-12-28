import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Send, Instagram, Linkedin, Globe, Shield, Facebook, Phone, Mail, MapPin } from 'lucide-react';
/* Added @ts-ignore to bypass false positive type error for react-router-dom exports */
// @ts-ignore
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';
import { useAppContext } from '../contexts/AppContext';
import BrandLogo from './BrandLogo';

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
    { name: t('nav.destinations'), path: '/destinations' },
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
            ? 'bg-white/95 dark:bg-brand-ink/95 backdrop-blur-xl py-4 border-b border-brand-ink/5 shadow-sm' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-4 group">
            <div className="flex items-center gap-4">
              <BrandLogo 
                className="w-14 h-14 md:w-16 md:h-16" 
                showText={false} 
                variant={isScrolled ? 'dark' : 'light'} 
              />
              <div className="flex flex-col text-left">
                <span className={`font-sans text-2xl md:text-4xl font-black tracking-tight uppercase leading-none ${isScrolled ? 'text-brand-ink dark:text-brand-sand' : 'text-brand-sand'}`}>
                  {language === 'AM' ? 'ምሕረት በቀሉ' : 'Mihret Bekalu'}
                </span>
                <span className="text-[7px] md:text-[9px] uppercase font-bold tracking-[0.25em] text-brand-accent mt-1.5">
                  {language === 'AM' ? 'የቪዛ ቅጽ እና አማካሪ' : 'Visa Form and Consultancy'}
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center space-x-10">
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

          <div className="hidden lg:flex items-center gap-4">
            <div className={`flex items-center gap-3 px-5 h-10 rounded-full border transition-all ${
              isScrolled 
                ? 'bg-brand-ink/5 dark:bg-brand-sand/10 border-brand-ink/10 dark:border-brand-sand/10' 
                : 'bg-black/20 backdrop-blur-md border-white/10'
            }`}>
               <button onClick={() => setLanguage('EN')} className={`text-[11px] font-black leading-none transition-all ${language === 'EN' ? 'text-brand-accent' : isScrolled ? 'text-brand-ink/60 dark:text-brand-sand/60 hover:text-brand-ink dark:hover:text-brand-sand' : 'text-brand-sand/60 hover:text-brand-sand'}`}>EN</button>
               <span className={`text-[10px] leading-none pb-0.5 ${isScrolled ? 'text-brand-ink/20 dark:text-brand-sand/20' : 'text-brand-sand/20'}`}>|</span>
               <button onClick={() => setLanguage('AM')} className={`text-[11px] font-black leading-none transition-all ${language === 'AM' ? 'text-brand-accent' : isScrolled ? 'text-brand-ink/60 dark:text-brand-sand/60 hover:text-brand-ink dark:hover:text-brand-sand' : 'text-brand-sand/60 hover:text-brand-sand'}`}>አማ</button>
            </div>
            
            <button 
              onClick={toggleTheme} 
              className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all hover:scale-105 active:scale-95 ${
                isScrolled 
                  ? 'bg-brand-ink/5 dark:bg-brand-sand/10 border-brand-ink/10 dark:border-brand-sand/10 text-brand-ink/60 dark:text-brand-sand/60 hover:text-brand-ink dark:hover:text-brand-sand' 
                  : 'bg-black/20 backdrop-blur-md border-white/10 text-brand-sand/60 hover:text-brand-sand'
              }`}
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <Link to="/book" className={`ml-2 px-8 h-10 flex items-center justify-center rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-xl hover:-translate-y-0.5 ${isScrolled ? 'bg-brand-ink dark:bg-brand-sand text-brand-sand dark:text-brand-ink hover:bg-brand-primary dark:hover:bg-brand-accent' : 'bg-brand-accent text-brand-ink hover:bg-brand-sand'}`}>
              {t('nav.book')}
            </Link>
          </div>

          <button className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-brand-ink dark:text-brand-sand' : 'text-brand-sand'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-brand-ink text-brand-sand py-40 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
            
            {/* Column 1: Brand & Info (Reordered Logo to Right) */}
            <div className="col-span-1 lg:col-span-1">
               <div className="flex items-center justify-end gap-6 mb-10">
                  <div className="text-right">
                    <p className="font-serif text-3xl md:text-4xl text-brand-sand uppercase tracking-tighter">Mihret Bekalu</p>
                    <p className="text-brand-accent text-[8px] uppercase font-bold tracking-widest mt-1">Visa Form and Consultancy</p>
                  </div>
                  <BrandLogo className="w-20 h-20" variant="light" showText={false} />
               </div>
               <p className="text-brand-sand/40 max-w-sm mb-8 leading-relaxed text-sm font-light text-right ml-auto">
                 Specialized advisory and travel consultancy located directly in front of the US Embassy in Addis Ababa.
               </p>
               <div className="flex gap-4 justify-end">
                 <a href={COMPANY_INFO.facebookUrl} target="_blank" className="w-10 h-10 rounded-full border border-brand-sand/10 flex items-center justify-center text-brand-sand/60 hover:bg-brand-accent hover:border-brand-accent hover:text-brand-ink transition-all">
                   <Facebook size={16} />
                 </a>
                 <a href={COMPANY_INFO.instagramUrl} target="_blank" className="w-10 h-10 rounded-full border border-brand-sand/10 flex items-center justify-center text-brand-sand/60 hover:bg-brand-accent hover:border-brand-accent hover:text-brand-ink transition-all">
                   <Instagram size={16} />
                 </a>
                 <a href={COMPANY_INFO.telegramUrl} target="_blank" className="w-10 h-10 rounded-full border border-brand-sand/10 flex items-center justify-center text-brand-sand/60 hover:bg-brand-accent hover:border-brand-accent hover:text-brand-ink transition-all">
                   <Send size={16} />
                 </a>
                 <a href={COMPANY_INFO.linkedinUrl} target="_blank" className="w-10 h-10 rounded-full border border-brand-sand/10 flex items-center justify-center text-brand-sand/60 hover:bg-brand-accent hover:border-brand-accent hover:text-brand-ink transition-all">
                   <Linkedin size={16} />
                 </a>
               </div>
            </div>

            {/* Column 2: Contact Info */}
            <div>
              <h4 className="font-serif text-xl text-brand-sand mb-8">Contact Us</h4>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <MapPin size={20} className="text-brand-accent shrink-0 mt-1" />
                  <div className="text-sm font-light text-brand-sand/60">
                    <p className="text-brand-sand mb-1 font-bold uppercase text-[10px] tracking-widest">Headquarters</p>
                    <p>{COMPANY_INFO.address}</p>
                    <p className="text-[10px] opacity-50 mt-1">{COMPANY_INFO.landmark}</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <Phone size={20} className="text-brand-accent shrink-0 mt-1" />
                  <div className="text-sm font-light text-brand-sand/60">
                    <p className="text-brand-sand mb-1 font-bold uppercase text-[10px] tracking-widest">Phone</p>
                    <p>{COMPANY_INFO.phone}</p>
                    <p>{COMPANY_INFO.phone2}</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <Mail size={20} className="text-brand-accent shrink-0 mt-1" />
                  <div className="text-sm font-light text-brand-sand/60">
                     <p className="text-brand-sand mb-1 font-bold uppercase text-[10px] tracking-widest">Email</p>
                     <p>{COMPANY_INFO.email}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h4 className="font-serif text-xl text-brand-sand mb-8">Discover</h4>
              <ul className="space-y-4 text-sm font-light text-brand-sand/60">
                <li><Link to="/services" className="hover:text-brand-accent transition-colors">Our Services</Link></li>
                <li><Link to="/scholarships" className="hover:text-brand-accent transition-colors">Scholarship Listings</Link></li>
                <li><Link to="/destinations" className="hover:text-brand-accent transition-colors">Global Destinations</Link></li>
                <li><Link to="/programs" className="hover:text-brand-accent transition-colors">Academic Programs</Link></li>
                <li><Link to="/about" className="hover:text-brand-accent transition-colors">Our Story</Link></li>
                <li><Link to="/book" className="hover:text-brand-accent transition-colors">Book Consultation</Link></li>
              </ul>
            </div>

             {/* Column 4: Hours & Legal */}
            <div>
              <h4 className="font-serif text-xl text-brand-sand mb-8">Office Hours</h4>
              <div className="p-6 border border-white/5 bg-white/5 rounded-2xl mb-6">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-2">Monday - Saturday</p>
                 <p className="text-sm text-brand-sand/80 font-light">8:30 AM - 6:30 PM</p>
                 <div className="h-px bg-white/10 my-4"></div>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-2">Sunday</p>
                 <p className="text-sm text-brand-sand/80 font-light">Closed</p>
              </div>
              <p className="text-[10px] text-brand-sand/30 leading-relaxed">
                By accessing our services, you agree to our terms of service regarding visa processing and consultancy fees.
              </p>
            </div>

          </div>
          <div className="pt-20 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.5em] text-white/20 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
               <p className="text-brand-accent font-serif text-lg normal-case tracking-normal mb-2">{language === 'AM' ? COMPANY_INFO.nameAmh : COMPANY_INFO.name}</p>
               <p className="text-[9px]">Global Access. Ethiopian Excellence. Professional Guidance You Can Trust.</p>
            </div>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;