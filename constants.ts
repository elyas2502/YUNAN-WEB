
import { 
  GraduationCap, Award, Stamp, Languages, FileText, 
  Map, Compass, Plane, Users, ShieldCheck, Zap, Globe, Search,
  CheckCircle2, Star, BookOpen, Headphones, PenTool, Lightbulb,
  Briefcase, GraduationCap as GradIcon, Landmark
} from 'lucide-react';
import { Service, Consultant, Country, Scholarship, Program } from './types';

export const COMPANY_INFO = {
  name: "Yunan Travel & Consultancy",
  nameAmh: "ዩናን የጉዞ እና የማማከር",
  shortName: "YUNAN",
  address: "Shiromeda, Addis Ababa",
  landmark: "300m from American Embassy Main Gate",
  phone: "+251 98 915 5761",
  phone2: "+251 91 123 4567",
  email: "hello@yunantravel.com",
  telegramUrl: "https://t.me/yunanmarket",
  instagramUrl: "https://instagram.com/yunantravel",
  linkedinUrl: "https://linkedin.com/company/yunantravel",
  facebookUrl: "https://facebook.com/yunantravel",
  hours: "Mon - Sat: 8:30 AM - 6:00 PM"
};

export const SERVICES: Service[] = [
  {
    id: 'study-abroad-consultation',
    title: { EN: 'Study Abroad Consultation', AM: 'ውጭ አገር የትምህርት ማማከር' },
    description: { EN: 'Complete guidance for students. We help select suitable universities and academic programs, manage admission requirements, and plan your educational journey.', AM: 'ተማሪዎችን የመርዳት ሙሉ መመሪያ። ተስማሚ ዩኒቨርሲቲዎችን እና የትምህርት ፕሮግራሞችን ለመምረጥ እና ጉዞዎን ደረጃ በደረጃ ለማቀድ እንረዳለን።' },
    icon: GraduationCap,
    details: [
      { EN: 'University Selection', AM: 'የዩኒቨርሲቲ ምርጫ' },
      { EN: 'Academic Path Mapping', AM: 'የትምህርት ጎዳና እቅድ' },
      { EN: 'Requirement Audit', AM: 'የመስፈርት ኦዲት' }
    ],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'test-prep',
    title: { EN: 'Standardized Test Prep', AM: 'የፈተና ዝግጅት' },
    description: { EN: 'Elite coaching for IELTS, TOEFL, SAT, and GRE with free mock tests for all our registered students.', AM: 'ለ IELTS፣ TOEFL፣ SAT እና GRE ከፍተኛ ጥራት ያለው ስልጠና ከነፃ የሙከራ ፈተናዎች ጋር።' },
    icon: BookOpen,
    details: [
      { EN: 'IELTS/TOEFL Intensive', AM: 'የእንግሊዝኛ ፈተና ስልጠና' },
      { EN: 'SAT/GRE Workshops', AM: 'የ SAT/GRE ወርክሾፖች' },
      { EN: 'Free Mock Tests', AM: 'ነፃ የሙከራ ፈተናዎች' }
    ],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'visa-assistance',
    title: { EN: 'Visa Assistance', AM: 'የቪዛ እርዳታ' },
    description: { EN: 'Professional guidance for students and travelers. Includes document preparation, application review, embassy appointment guidance, and interview preparation.', AM: 'ለተማሪዎች እና ተጓዦች የሚሰጥ የባለሙያ መመሪያ። የሰነድ ዝግጅትን፣ የቪዛ ማመልከቻ ግምገማን እና የኤምባሲ ዝግጅትን ያካትታል።' },
    icon: Stamp,
    details: [
      { EN: 'Document Verification', AM: 'የሰነድ ማረጋገጫ' },
      { EN: 'Embassy Prep', AM: 'የኤምባሲ ዝግጅት' },
      { EN: 'Mock Interviews', AM: 'የቃለ መጠይቅ ስልጠና' }
    ],
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=80'
  }
];

export const COUNTRIES: Country[] = [
  // --- AFRICA ---
  { id: 'et', name: { EN: 'Ethiopia', AM: 'ኢትዮጵያ' }, flag: '🇪🇹', continent: 'Africa', image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800&q=80' },
  { id: 'ke', name: { EN: 'Kenya', AM: 'ኬንያ' }, flag: '🇰🇪', continent: 'Africa', image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=800&q=80' },
  { id: 'ug', name: { EN: 'Uganda', AM: 'ኡጋንዳ' }, flag: '🇺🇬', continent: 'Africa', image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=800&q=80' },
  { id: 'rw', name: { EN: 'Rwanda', AM: 'ሩዋንዳ' }, flag: '🇷🇼', continent: 'Africa', image: 'https://images.unsplash.com/photo-1589146914041-3e4e73a70444?auto=format&fit=crop&w=800&q=80' },
  { id: 'tz', name: { EN: 'Tanzania', AM: 'ታንዛኒያ' }, flag: '🇹🇿', continent: 'Africa', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80' },
  { id: 'za', name: { EN: 'South Africa', AM: 'ደቡብ አፍሪካ' }, flag: '🇿🇦', continent: 'Africa', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80' },
  { id: 'eg', name: { EN: 'Egypt', AM: 'ግብፅ' }, flag: '🇪🇬', continent: 'Africa', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a7447?auto=format&fit=crop&w=800&q=80' },
  { id: 'ma', name: { EN: 'Morocco', AM: 'ሞሮኮ' }, flag: '🇲🇦', continent: 'Africa', image: 'https://images.unsplash.com/photo-1539020140153-e479b7c2b3df?auto=format&fit=crop&w=800&q=80' },

  // --- NORTH AMERICA ---
  { id: 'usa', name: { EN: 'USA', AM: 'አሜሪካ' }, flag: '🇺🇸', continent: 'North America', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80' },
  { id: 'ca', name: { EN: 'Canada', AM: 'ካናዳ' }, flag: '🇨🇦', continent: 'North America', image: 'https://images.unsplash.com/photo-1503614472-8c97d45fb41d?auto=format&fit=crop&w=800&q=80' },
  { id: 'mx', name: { EN: 'Mexico', AM: 'ሜክሲኮ' }, flag: '🇲🇽', continent: 'North America', image: 'https://images.unsplash.com/photo-1518105779142-d975b22f1b0a?auto=format&fit=crop&w=800&q=80' },
  { id: 'jm', name: { EN: 'Jamaica', AM: 'ጃማይካ' }, flag: '🇯🇲', continent: 'North America', image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=800&q=80' },
  { id: 'cr', name: { EN: 'Costa Rica', AM: 'ኮስታ ሪካ' }, flag: '🇨🇷', continent: 'North America', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80' },
  { id: 'cu', name: { EN: 'Cuba', AM: 'ኩባ' }, flag: '🇨🇺', continent: 'North America', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80' },

  // --- SOUTH AMERICA ---
  { id: 'br', name: { EN: 'Brazil', AM: 'ብራዚል' }, flag: '🇧🇷', continent: 'South America', image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80' },
  { id: 'ar', name: { EN: 'Argentina', AM: 'አርጀንቲና' }, flag: '🇦🇷', continent: 'South America', image: 'https://images.unsplash.com/photo-1518105779142-d975b22f1b0a?auto=format&fit=crop&w=800&q=80' },
  { id: 'pe', name: { EN: 'Peru', AM: 'ፔሩ' }, flag: '🇵🇪', continent: 'South America', image: 'https://images.unsplash.com/photo-1524312644410-d00fd3ef2ec4?auto=format&fit=crop&w=800&q=80' },
  { id: 'cl', name: { EN: 'Chile', AM: 'ቺሊ' }, flag: '🇨🇱', continent: 'South America', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80' },
  { id: 'co', name: { EN: 'Colombia', AM: 'ኮሎምቢያ' }, flag: '🇨🇴', continent: 'South America', image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=800&q=80' },

  // --- EUROPE ---
  { id: 'uk', name: { EN: 'UK', AM: 'እንግሊዝ' }, flag: '🇬🇧', continent: 'Europe', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80' },
  { id: 'fr', name: { EN: 'France', AM: 'ፈረንሳይ' }, flag: '🇫🇷', continent: 'Europe', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80' },
  { id: 'it', name: { EN: 'Italy', AM: 'ጣሊያን' }, flag: '🇮🇹', continent: 'Europe', image: 'https://images.unsplash.com/photo-1490644659564-827c1768ac1b?auto=format&fit=crop&w=800&q=80' },
  { id: 'es', name: { EN: 'Spain', AM: 'ስፔን' }, flag: '🇪🇸', continent: 'Europe', image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80' },
  { id: 'de', name: { EN: 'Germany', AM: 'ጀርመን' }, flag: '🇩🇪', continent: 'Europe', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80' },

  // --- ASIA ---
  { id: 'cn', name: { EN: 'China', AM: 'ቻይና' }, flag: '🇨🇳', continent: 'Asia', image: 'https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?auto=format&fit=crop&w=800&q=80' },
  { id: 'jp', name: { EN: 'Japan', AM: 'ጃፓን' }, flag: '🇯🇵', continent: 'Asia', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80' },
  { id: 'in', name: { EN: 'India', AM: 'ህንድ' }, flag: '🇮🇳', continent: 'Asia', image: 'https://images.unsplash.com/photo-1524492707160-353c1240ad24?auto=format&fit=crop&w=800&q=80' },
  { id: 'th', name: { EN: 'Thailand', AM: 'ታይላንድ' }, flag: '🇹🇭', continent: 'Asia', image: 'https://images.unsplash.com/photo-1528181304800-2f140819ad9c?auto=format&fit=crop&w=800&q=80' },
  { id: 'sg', name: { EN: 'Singapore', AM: 'ሲንጋፖር' }, flag: '🇸🇬', continent: 'Asia', image: 'https://images.unsplash.com/photo-1525625232767-12b80424b1d9?auto=format&fit=crop&w=800&q=80' },

  // --- MIDDLE EAST ---
  { id: 'ae', name: { EN: 'UAE', AM: 'ዩኤኢ' }, flag: '🇦🇪', continent: 'Middle East', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80' },
  { id: 'jo', name: { EN: 'Jordan', AM: 'ዮርዳኖስ' }, flag: '🇯🇴', continent: 'Middle East', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80' },
  { id: 'il', name: { EN: 'Israel', AM: 'እስራኤል' }, flag: '🇮🇱', continent: 'Middle East', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80' },
  { id: 'om', name: { EN: 'Oman', AM: 'ኦማን' }, flag: '🇴🇲', continent: 'Middle East', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80' },

  // --- OCEANIA ---
  { id: 'au', name: { EN: 'Australia', AM: 'አውስትራሊያ' }, flag: '🇦🇺', continent: 'Oceania', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80' },
  { id: 'nz', name: { EN: 'New Zealand', AM: 'ኒውዚላንድ' }, flag: '🇳🇿', continent: 'Oceania', image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80' },
  { id: 'fj', name: { EN: 'Fiji', AM: 'ፊጂ' }, flag: '🇫🇯', continent: 'Oceania', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80' },
];

export const SCHOLARSHIPS: Scholarship[] = [
  {
    id: 'fulbright',
    title: { EN: 'Fulbright Scholarship', AM: 'የፉልብራይት ስኮላርሺፕ' },
    provider: 'US Government',
    location: 'USA',
    type: { EN: 'Fully Funded', AM: 'ሙሉ ወጪ የሚሸፈን' },
    level: { EN: 'Masters / PhD', AM: 'ማስተርስ / ፒኤችዲ' },
    description: { EN: 'One of the most prestigious international scholarship programs supporting graduate study in the United States.', AM: 'በአሜሪካ ውስጥ የድህረ ምረቃ ጥናትን የሚደግፍ በዓለም ላይ ካሉ ታዋቂ የስኮላርሺፕ ፕሮግራሞች አንዱ።' },
    category: 'Masters',
    tags: ['USA', 'Elite'],
    url: 'https://eca.state.gov/fulbright',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chevening',
    title: { EN: 'Chevening Scholarships', AM: 'የቼቭኒንግ ስኮላርሺፕ' },
    provider: 'UK Government',
    location: 'UK',
    type: { EN: 'Fully Funded', AM: 'ሙሉ ወጪ የሚሸፈን' },
    level: { EN: 'Masters', AM: 'ማስተርስ' },
    description: { EN: 'The UK government’s international awards program for leadership excellence.', AM: 'ለአመራር ብቃት የሚሰጥ የዩኬ መንግሥት ዓለም አቀፍ ስኮላርሺፕ።' },
    category: 'Masters',
    tags: ['UK', 'Leadership'],
    url: 'https://www.chevening.org',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'daad',
    title: { EN: 'DAAD Scholarships', AM: 'የ DAAD ስኮላርሺፕ' },
    provider: 'German Government',
    location: 'Germany',
    type: { EN: 'Fully Funded', AM: 'ሙሉ ወጪ የሚሸፈን' },
    level: { EN: 'Masters / PhD', AM: 'ማስተርስ / ፒኤችዲ' },
    description: { EN: 'Scholarships for international students to pursue postgraduate study in Germany.', AM: 'በጀርመን ትምህርት ለመቀጠል ለሚፈልጉ ተማሪዎች የሚሰጥ ድጋፍ።' },
    category: 'PhD',
    tags: ['Germany', 'Research'],
    url: 'https://www.daad.de',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80'
  }
];

export const PROGRAMS: Program[] = [
  // INTERNSHIPS
  {
    id: 'et-heritage',
    title: { EN: 'Heritage Conservation Internship', AM: 'የቅርስ ጥበቃ ልምምድ' },
    field: 'Archaeology',
    type: 'Internship',
    countryId: 'et',
    university: 'Authority for Research and Conservation of Cultural Heritage',
    duration: { EN: '3-6 Months', AM: '3-6 ወራት' },
    description: { EN: 'Hands-on experience in Lalibela rock churches preservation.', AM: 'በላሊበላ አብያተ ክርስቲያናት ጥበቃ ላይ የሚሰጥ ተግባራዊ ስልጠና።' }
  },
  {
    id: 'ke-wildlife',
    title: { EN: 'Wildlife Management Internship', AM: 'የዱር እንስሳት ጥበቃ ልምምድ' },
    field: 'Environmental',
    type: 'Internship',
    countryId: 'ke',
    university: 'Maasai Mara Wildlife Conservancies Association',
    duration: { EN: '4 Months', AM: '4 ወራት' },
    description: { EN: 'Practical experience in safari ecosystem management.', AM: 'በሳፋሪ ስነ-ምህዳር አስተዳደር ላይ የሚሰጥ ተግባራዊ ልምምድ።' }
  },
  // UNDERGRADUATE
  {
    id: 'mx-arch-undergrad',
    title: { EN: 'BSc in Archaeology', AM: 'የአርኪዮሎጂ የመጀመሪያ ዲግሪ' },
    field: 'Archaeology',
    type: 'Undergraduate',
    countryId: 'mx',
    university: 'National Autonomous University of Mexico',
    duration: { EN: '4 Years', AM: '4 ዓመት' },
    description: { EN: 'Focus on Mesoamerican civilizations and Chichen Itza excavation.', AM: 'በሜሶአሜሪካ ስልጣኔዎች እና በቺቼን ኢዛ ቁፋሮ ላይ ያተኮረ ትምህርት።' }
  },
  {
    id: 'th-culture-undergrad',
    title: { EN: 'BA in Cultural Heritage', AM: 'የባህል ቅርስ የመጀመሪያ ዲግሪ' },
    field: 'Arts',
    type: 'Undergraduate',
    countryId: 'th',
    university: 'Chulalongkorn University',
    duration: { EN: '4 Years', AM: '4 ዓመት' },
    description: { EN: 'Study of Southeast Asian temple architecture and history.', AM: 'ደቡብ ምስራቅ እስያ ቤተ-መቅደሶች አርክቴክቸር እና ታሪክ ጥናት።' }
  },
  // RESEARCH
  {
    id: 'usa-immigration-research',
    title: { EN: 'Immigration History Research', AM: 'የስደት ታሪክ ምርምር' },
    field: 'Social Sciences',
    type: 'Research',
    countryId: 'usa',
    university: 'New York University (NYU)',
    duration: { EN: '1-2 Years', AM: '1-2 ዓመት' },
    description: { EN: 'Advanced study of US immigration patterns and history.', AM: 'የአሜሪካ የስደት ታሪክ እና ሁኔታዎች ላይ የሚደረግ ጥልቅ ምርምር።' }
  },
  {
    id: 'cn-great-wall-research',
    title: { EN: 'Great Wall Structural Analysis', AM: 'የታላቁ የቻይና ግንብ ምርምር' },
    field: 'Engineering',
    type: 'Research',
    countryId: 'cn',
    university: 'Tsinghua University',
    duration: { EN: '2 Years', AM: '2 ዓመት' },
    description: { EN: 'Structural engineering research on ancient defensive systems.', AM: 'በጥንታዊ የመከላከያ ስርዓቶች ላይ የሚደረግ የመዋቅር ኢንጂነሪንግ ምርምር።' }
  }
];

export const CONSULTANTS: Consultant[] = [
  {
    id: 'yonas-alemu',
    name: 'Yonas Alemu',
    role: { EN: 'Lead Consultant', AM: 'ዋና አማካሪ' },
    bio: { EN: 'Expert in European admissions with 10+ years of global experience.', AM: 'በአውሮፓ ምዝገባ ላይ የ 10 ዓመት ልምድ ያላቸው ባለሙያ።' },
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'
  }
];

/**
 * Global search platforms for scholarships and masters programs.
 * Added to resolve import error in Scholarships page.
 */
export const SEARCH_PLATFORMS = [
  { 
    name: 'FindAMasters', 
    url: 'https://www.findamasters.com', 
    desc: 'The world\'s leading database of Masters degrees and scholarships.' 
  },
  { 
    name: 'ScholarshipPortal', 
    url: 'https://www.scholarshipportal.com', 
    desc: 'The best place to find scholarships and grants to study abroad.' 
  },
  { 
    name: 'ResearchGate', 
    url: 'https://www.researchgate.net', 
    desc: 'Connect with the scientific community and find research positions.' 
  },
  { 
    name: 'DAAD Database', 
    url: 'https://www.daad.de', 
    desc: 'The official database for studying and researching in Germany.' 
  }
];
