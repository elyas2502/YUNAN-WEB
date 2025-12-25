
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
  
  // Home Page
  'hero.tag': { EN: "Excellence in Global Placement", AM: "በዓለም አቀፍ ምደባ የላቀ ብቃት" },
  'hero.title': { EN: "The Art of", AM: "የጥበብ" },
  'hero.accent': { EN: "Global Reach.", AM: "ዓለም አቀፍ ተደራሽነት።" },
  'hero.desc': { EN: "Ethical guidance for world-class education and international travel. Proven success since day one. Zero registration fees.", AM: "ለዓለም አቀፍ ትምህርት እና ለጉዞ የሚሆን የሥነ-ምግባር መመሪያ። ከመጀመሪያው ቀን ጀምሮ የተረጋገጠ ስኬት። ምንም የምዝገባ ክፍያ የለም።" },
  'hero.cta.consult': { EN: 'Consult Now', AM: 'አሁኑኑ ያማክሩ' },
  'hero.cta.hub': { EN: 'Scholarship Hub', AM: 'የስኮላርሺፕ ማዕከል' },
  
  'section.domain': { EN: 'Our Domain', AM: 'የእኛ የሥራ መስክ' },
  'section.precision': { EN: 'Precision Services.', AM: 'ጥራት ያላቸው አገልግሎቶች።' },
  'section.destinations': { EN: 'Destinations', AM: 'መድረሻዎች' },
  'section.footprint': { EN: 'Global Footprint.', AM: 'ዓለም አቀፍ ተደራሽነት።' },
  'section.ethos': { EN: 'Our Ethos', AM: 'የእኛ እሴቶች' },
  'section.integrity': { EN: 'Absolute Integrity.', AM: 'ፍጹም ታማኝነት።' },
  'section.trust': { EN: 'Unmatched Trust', AM: 'አቻ የሌለው እምነት' },
  'section.precision_stat': { EN: '92% Precision', AM: '92% ስኬት' },
  'section.alliance': { EN: 'Global Alliance', AM: 'ዓለም አቀፍ ትስስር' },
  
  // Programs
  'programs.browse': { EN: 'Browse Programs', AM: 'ትምህርቶችን ይፈልጉ' },
  'programs.filter': { EN: 'Filter by Field', AM: 'በትምህርት አይነት ይለዩ' },
  'programs.all': { EN: 'All Fields', AM: 'ሁሉም አይነቶች' },
  'programs.duration': { EN: 'Duration', AM: 'የቆይታ ጊዜ' },
  'programs.apply': { EN: 'Apply Interest', AM: 'ፍላጎትዎን ያሳውቁ' },

  // Services Page
  'services.header': { EN: 'The Pillars of', AM: 'የስኬት' },
  'services.accent': { EN: 'Global Success.', AM: 'ምሰሶዎች።' },
  'services.desc': { EN: 'We simplify the complexity of international transitions. From academic placement to visa strategy, every milestone is managed with absolute precision.', AM: 'ዓለም አቀፍ የዝውውር ሂደቶችን ቀላል እናደርጋለን። ከዩኒቨርሲቲ ምደባ እስከ ቪዛ ስትራቴጂ እያንዳንዱ እርምጃ በጥንቃቄ ይመራል።' },
  'services.no_reg': { EN: 'No Registration Fees', AM: 'ምንም የምዝገባ ክፍያ የለም' },
  'services.free_mock': { EN: 'Free Mock Tests', AM: 'ነፃ የሙከራ ፈተናዎች' },
  'services.initiate': { EN: 'Initiate Process', AM: 'ሂደቱን ይጀምሩ' },
  'services.advantage': { EN: 'The Yunan Advantage', AM: 'የዩናን ጥቅሞች' },
  'services.pillar': { EN: 'Pillar', AM: 'ምሰሶ' },

  // Scholarship Page
  'scholarships.elite': { EN: 'Elite Opportunities', AM: 'ልዩ ዕድሎች' },
  'scholarships.title': { EN: 'Global Scholars', AM: 'ዓለም አቀፍ ተማሪዎች' },
  'scholarships.desc': { EN: 'Your dream of world-class education starts here. We curate only the most impactful programs for ambitious Ethiopian talent.', AM: 'የዓለም አቀፍ ትምህርት ሕልምዎ እዚህ ይጀምራል። ለታታሪ ኢትዮጵያውያን ተማሪዎች በጣም ተፅእኖ ያላቸውን ፕሮግራሞች እንመርጣለን።' },
  'scholarships.find': { EN: 'Find a program...', AM: 'ፕሮግራም ይፈልጉ...' },
  'scholarships.reset': { EN: 'Reset Filters', AM: 'ማጣሪያዎችን ያጽዱ' },
  'scholarships.no_match': { EN: 'No programs matching your criteria.', AM: 'ከእርስዎ ፍላጎት ጋር የሚዛመድ ፕሮግራም አልተገኘም።' },
  'scholarships.check': { EN: 'Check Eligibility', AM: 'ብቁ መሆንዎን ያረጋግጡ' },
  'scholarships.key_programs': { EN: 'Key Programs', AM: 'ዋና ፕሮግራሞች' },

  // Book Page
  'book.booking': { EN: 'Consultation Booking', AM: 'የምክክር ቀጠሮ' },
  'book.plan': { EN: 'Plan Your', AM: 'እቅድዎን' },
  'book.move': { EN: 'Global Move.', AM: 'ያዘጋጁ።' },
  'book.step': { EN: 'Step', AM: 'ደረጃ' },
  'book.of': { EN: 'of', AM: 'ከ' },
  'book.name_label': { EN: 'Full Name', AM: 'ሙሉ ስም' },
  'book.phone_label': { EN: 'Mobile Number', AM: 'የስልክ ቁጥር' },
  'book.date_label': { EN: 'Preferred Date', AM: 'የሚመረጡት ቀን' },
  'book.cta_payment': { EN: 'Choose Payment Method', AM: 'የክፍያ ዘዴ ይምረጡ' },
  'book.cta_finalize': { EN: 'Finalize Appointment', AM: 'ቀጠሮውን ያጠናቅቁ' },
  'book.booking_seat': { EN: 'Booking your seat...', AM: 'ቀጠሮዎን በመያዝ ላይ...' },
  'book.summary': { EN: 'Summary', AM: 'ማጠቃለያ' },
  'book.pillar': { EN: 'Selected Pillar', AM: 'የተመረጠው አገልግሎት' },
  'book.confidential': { EN: 'Confidential Guidance', AM: 'ምስጢራዊ መመሪያ' },
  'book.zero_reg': { EN: 'Zero Registration Fees', AM: 'ምንም የምዝገባ ክፍያ የለም' },
  'book.back': { EN: 'Back', AM: 'ተመለስ' },
  'book.confirmed': { EN: 'Confirmed!', AM: 'ተረጋግጧል!' },
  'book.success_msg': { EN: "Excellence is on its way. We've sent details to your email. Join our Telegram for priority support.", AM: "ስኬት በቅርብ ነው። ዝርዝሩን በኢሜይልዎ ልከናል። ለቅድሚያ ድጋፍ ቴሌግራማችንን ይቀላቀሉ።" },
  'book.join_tg': { EN: 'Join Telegram', AM: 'ቴሌግራም ይቀላቀሉ' },
  'book.back_home': { EN: 'Back to Home', AM: 'ወደ መነሻ' },

  // Contact Page
  'contact.connect': { EN: 'Direct Connect', AM: 'ቀጥተኛ ግንኙነት' },
  'contact.start': { EN: 'Start Your', AM: 'ንግግርዎን' },
  'contact.conversation': { EN: 'Conversation.', AM: 'ይጀምሩ።' },
  'contact.channels': { EN: 'Official Channels', AM: 'ኦፊሴላዊ ማህበራዊ ገጾች' },
  'contact.address': { EN: 'Address', AM: 'አድራሻ' },
  'contact.phone': { EN: 'Phone', AM: 'ስልክ' },
  'contact.call_us': { EN: 'Call Us', AM: 'ይደውሉልን' },
  'contact.write_us': { EN: 'Write Us', AM: 'ይጻፉልን' },
  'contact.visit_us': { EN: 'Visit Us', AM: 'ይጎብኙን' },

  // Footer
  'footer.resources': { EN: 'Resources', AM: 'መረጃዎች' },
  'footer.connect': { EN: 'Connect', AM: 'ይገናኙ' },
  'footer.privacy': { EN: 'Privacy', AM: 'ግላዊነት' },
  'footer.terms': { EN: 'Terms', AM: 'ውሎች' },
  'footer.rights': { EN: 'International Standards.', AM: 'ዓለም አቀፍ ደረጃዎች።' },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

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
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
