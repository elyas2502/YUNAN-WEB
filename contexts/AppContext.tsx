
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'EN' | 'AM';
type Theme = 'light' | 'dark';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (key: string) => string;
}

const translations: Record<string, { EN: string; AM: string }> = {
  // Navigation
  'nav.home': { EN: 'Home', AM: 'መነሻ' },
  'nav.about': { EN: 'About Us', AM: 'ስለ እኛ' },
  'nav.services': { EN: 'Services', AM: 'አገልግሎቶች' },
  'nav.scholarships': { EN: 'Scholarships', AM: 'ስኮላርሺፕ' },
  'nav.programs': { EN: 'Programs', AM: 'ትምህርቶች' },
  'nav.contact': { EN: 'Contact', AM: 'ያግኙን' },
  'nav.book': { EN: 'Book Session', AM: 'ቀጠሮ ይያዙ' },
  'nav.destinations': { EN: 'Destinations', AM: 'መዳረሻዎች' },
  
  // Home Page
  'hero.tag': { EN: "Excellence in Global Placement", AM: "በዓለም አቀፍ ምደባ የላቀ ብቃት" },
  'hero.title': { EN: "The Art of", AM: "የጥበብ" },
  'hero.accent': { EN: "Global Reach.", AM: "ዓለም አቀፍ ተደራሽነት።" },
  'hero.desc': { EN: "Ethical guidance for world-class education and international travel. Proven success since day one. Zero registration fees.", AM: "ለዓለም አቀፍ ትምህርት እና ለጉዞ የሚሆን የሥነ-ምግባር መመሪያ። ከመጀመሪያው ቀን ጀምሮ የተረጋገጠ ስኬት። ምንም የምዝገባ ክፍያ የለም።" },
  'hero.cta.consult': { EN: 'Consult Now', AM: 'አሁኑኑ ያማክሩ' },
  
  'section.ethos': { EN: 'Our Ethos', AM: 'የእኛ እሴቶች' },
  'section.integrity': { EN: 'Absolute Integrity.', AM: 'ፍጹም ታማኝነት።' },
  'section.trust': { EN: 'Unmatched Trust', AM: 'አቻ የሌለው እምነት' },
  
  // Footer
  'footer.resources': { EN: 'Resources', AM: 'መረጃዎች' },
  'footer.connect': { EN: 'Connect', AM: 'ይገናኙ' },
  'footer.privacy': { EN: 'Privacy', AM: 'ግላዊነት' },
  'footer.terms': { EN: 'Terms', AM: 'ውሎች' },

  // Contact
  'contact.visit_us': { EN: 'Visit Us', AM: 'ይጎብኙን' },

  // Book
  'book.booking': { EN: 'Consultation Booking', AM: 'የምክክር ቀጠሮ' },
  'book.confirmed': { EN: 'Confirmed!', AM: 'ተረጋግጧል!' },
  'book.success_msg': { EN: "Details have been sent to your email. We look forward to seeing you.", AM: "ዝርዝሩ በኢሜይልዎ ተልኳል። ለማየት በጉጉት እንጠብቃለን።" },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const t = (key: string): string => {
    if (!translations[key]) return key;
    return translations[key][language];
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, toggleTheme, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within an AppProvider');
  return context;
};
