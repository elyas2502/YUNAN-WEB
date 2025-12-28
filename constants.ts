
import { 
  GraduationCap, Award, Stamp, Languages, FileText, 
  Map, Compass, Plane, Users, ShieldCheck, Zap, Globe, Search,
  CheckCircle2, Star, BookOpen, Headphones, PenTool, Lightbulb,
  FlaskConical, Briefcase, Landmark, School, HeartPulse, Building2,
  Globe2, Palmtree, Landmark as Monument, Map as MapIcon, GraduationCap as SchoolIcon, Calendar
} from 'lucide-react';
import { Service, Consultant, Country, Scholarship, Program, Continent, DestinationDetailData } from './types';

export const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=500&q=60";

export const COMPANY_INFO = {
  name: "Mihret Bekalu Visa Form and Consultancy",
  nameAmh: "ምሕረት በቃሉ የቪዛ ቅጽ እና አማካሪ",
  shortName: "MIHRET",
  address: "Shiromeda, Addis Ababa, Ethiopia",
  landmark: "Directly in front of US Embassy Main Gate",
  phone: "+251 91 144 5566",
  phone2: "+251 98 915 5761",
  email: "mihretbekalu@gmail.com",
  telegramUrl: "https://t.me/mihrettravel",
  instagramUrl: "https://instagram.com/mihrettravel",
  linkedinUrl: "https://linkedin.com/company/mihrettravel",
  facebookUrl: "https://facebook.com/mihrettravel",
  hours: "Mon - Sat: 8:30 AM - 6:30 PM"
};

export const SERVICES: Service[] = [
  {
    id: 'visa-application-support',
    title: { EN: 'Visa Application Support', AM: 'የቪዛ ማመልከቻ ድጋፍ' },
    description: { 
      EN: 'We provide complete support for your visa application, ensuring all forms are accurately completed and documents meet embassy requirements. Our process helps reduce mistakes, shorten delays, and increase the chance of approval.',
      AM: 'ቅጾች በትክክል መሞላታቸውን እና ሰነዶች የኤምባሲ መስፈርቶችን ማሟላታቸውን በማረጋገጥ ለቪዛ ማመልከቻዎ ሙሉ ድጋፍ እንሰጣለን። ሂደታችን ስህተቶችን ለመቀነስ፣ መዘግየቶችን ለማሳጠር እና የመፈቀድ እድልን ለመጨመር ይረዳል።'
    },
    icon: FileText,
    details: [
      { EN: 'Accurate form completion', AM: 'ትክክለኛ የቅጽ አሞላል' },
      { EN: 'Embassy requirement check', AM: 'የኤምባሲ መስፈርቶች ማረጋገጫ' },
      { EN: 'Error reduction strategy', AM: 'ስህተትን የመቀነስ ስልት' },
      { EN: 'Approval chance optimization', AM: 'የመፈቀድ እድልን ማሳደግ' }
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'visa-form-prep',
    title: { EN: 'Visa Form Preparation & Review', AM: 'የቪዛ ቅጽ ዝግጅት እና ግምገማ' },
    description: {
      EN: 'Our team carefully prepares and reviews every application form. We check for accuracy, completeness, and compliance with current immigration rules, giving you confidence that your application meets all necessary standards.',
      AM: 'ቡድናችን እያንዳንዱን የማመልከቻ ቅጽ በጥንቃቄ ያዘጋጃል እና ይገመግማል። ትክክለኛነትን፣ ሙሉነትን እና የወቅቱን የኢሚግሬሽን ህጎች ተገዢነት እንፈትሻለን።'
    },
    icon: CheckCircle2,
    details: [
      { EN: 'Detailed accuracy check', AM: 'ዝርዝር የትክክለኛነት ፍተሻ' },
      { EN: 'Completeness verification', AM: 'ሙሉነትን ማረጋገጥ' },
      { EN: 'Immigration rule compliance', AM: 'የኢሚግሬሽን ህግ ተገዢነት' },
      { EN: 'Standard assurance', AM: 'የጥራት ማረጋገጫ' }
    ],
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'consultation-advice',
    title: { EN: 'Consultation & Advice', AM: 'ምክክር እና መመሪያ' },
    description: {
      EN: 'We offer clear, personalized guidance based on your travel purpose. This includes assessing eligibility, advising on required documents, explaining procedures, and helping you plan timelines so your application proceeds smoothly.',
      AM: 'በጉዞ አላማዎ ላይ በመመስረት ግልጽ እና ግላዊ መመሪያ እንሰጣለን። ብቁነትን መገምገም፣ በሰነዶች ላይ ምክር መስጠት እና ሂደቶችን ማብራራትን ያካትታል።'
    },
    icon: Lightbulb,
    details: [
      { EN: 'Eligibility assessment', AM: 'የብቁነት ግምገማ' },
      { EN: 'Document advisory', AM: 'የሰነድ ምክር' },
      { EN: 'Procedure explanation', AM: 'የሂደት ማብራሪያ' },
      { EN: 'Timeline planning', AM: 'የጊዜ ሰሌዳ ዕቅድ' }
    ],
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'embassy-guidance',
    title: { EN: 'Embassy Appointment Guidance', AM: 'የኤምባሲ ቀጠሮ መመሪያ' },
    description: {
      EN: 'Follow the steps carefully to book your embassy appointment. We guide you through the embassy protocols and prepare you for a successful interview.',
      AM: 'የኤምባሲ ቀጠሮ ለመያዝ ደረጃዎቹን በጥንቃቄ ይከተሉ። የኤምባሲ ፕሮቶኮሎችን እንመራዎታለን እና ለስኬታማ ቃለ መጠይቅ እናዘጋጅዎታለን።'
    },
    icon: Calendar,
    details: [
      { EN: 'Interview preparation', AM: 'የቃለ መጠይቅ ዝግጅት' },
      { EN: 'Expectation setting', AM: 'ምን እንደሚጠበቅ ማወቅ' },
      { EN: 'Confidence building strategies', AM: 'በራስ መተማመንን የመገንባት ስልቶች' },
      { EN: 'Professional approach tips', AM: 'የሙያዊ አቀራረብ ምክሮች' }
    ],
    image: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'document-check',
    title: { EN: 'Document Check & Compliance', AM: 'የሰነድ ማረጋገጫ እና ተገዢነት' },
    description: {
      EN: 'All documents are carefully verified for correctness, authenticity, and compliance with visa rules. This careful review reduces the chance of errors, delays, or rejections.',
      AM: 'ሁሉም ሰነዶች ለትክክለኛነት እና ለቪዛ ህጎች ተገዢነት በጥንቃቄ ይረጋገጣሉ። ይህ ጥንቃቄ ስህተቶችን እና መዘግየቶችን ይቀንሳል።'
    },
    icon: ShieldCheck,
    details: [
      { EN: 'Correctness verification', AM: 'ትክክለኛነትን ማረጋገጥ' },
      { EN: 'Authenticity check', AM: 'ኦሪጅናልነትን ማረጋገጥ' },
      { EN: 'Rule compliance review', AM: 'የህግ ተገዢነት ክለሳ' },
      { EN: 'Rejection risk reduction', AM: 'የውድቅ መደረግ ስጋትን መቀነስ' }
    ],
    image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'personal-support',
    title: { EN: 'Personal Support', AM: 'የግል ድጋፍ' },
    description: {
      EN: 'Each client receives dedicated support throughout the process. We prioritize clear communication, privacy, and timely updates, ensuring a smooth, stress free experience from start to finish.',
      AM: 'እያንዳንዱ ደንበኛ በሂደቱ ውስጥ ልዩ ድጋፍ ያገኛል። ግልጽ ግንኙነትን፣ ግላዊነትን እና ወቅታዊ መረጃዎችን ቅድሚያ እንሰጣለን።'
    },
    icon: Headphones,
    details: [
      { EN: 'Dedicated client support', AM: 'ልዩ የደንበኛ ድጋፍ' },
      { EN: 'Clear communication', AM: 'ግልጽ ግንኙነት' },
      { EN: 'Privacy protection', AM: 'የግላዊነት ጥበቃ' },
      { EN: 'Timely updates', AM: 'ወቅታዊ መረጃዎች' }
    ],
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=60'
  }
];

export const SCHOLARSHIPS: Scholarship[] = [
  // ... (Scholarship data remains unchanged)
  // --- PHD PROGRAMS ---
  {
    id: 'erasmus-phd',
    title: { EN: 'Erasmus Mundus Joint Doctorates', AM: 'የኢራስመስ ሙንደስ የጋራ ዶክትሬት ፕሮግራም' },
    provider: 'European Union',
    location: 'Europe',
    type: { EN: 'Fully Funded', AM: 'ሙሉ ወጪ የሚሸፈን' },
    level: { EN: 'PhD', AM: 'ፒኤችዲ' },
    description: { 
      EN: 'Fully funded PhD programs delivered by a consortium of top European universities. Candidates study in multiple countries with world class labs.', 
      AM: 'በከፍተኛ የአውሮፓ ዩኒቨርሲቲዎች የሚሰጥ ሙሉ ወጪ የሚሸፈን የፒኤችዲ ፕሮግራም። በተለያዩ ሀገራት ምርምር ለማካሄድ ያስችላል።' 
    },
    category: 'PhD',
    tags: ['Research', 'EU', 'Innovation'],
    url: 'https://erasmus-plus.ec.europa.eu',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 'marie-curie',
    title: { EN: 'Marie Skłodowska-Curie Doctoral Networks', AM: 'የማሪ ስክሎዶውስካ-ኩሪ የዶክትሬት ኔትወርክ' },
    provider: 'European Commission',
    location: 'Europe',
    type: { EN: 'Full Salary', AM: 'ሙሉ ደመወዝ' },
    level: { EN: 'PhD', AM: 'ፒኤችዲ' },
    description: { 
      EN: 'Focuses on advanced research training and innovation. PhD candidates are employed researchers with competitive salaries.', 
      AM: 'በላቀ የምርምር ስልጠና እና ፈጠራ ላይ ያተኩራል። ተማሪዎች እንደ ተቀጣሪ ተመራማሪ ሆነው ደመወዝ ይከፈላቸዋል።' 
    },
    category: 'PhD',
    tags: ['Science', 'Employment', 'EU'],
    url: 'https://marie-sklodowska-curie-actions.ec.europa.eu',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 'commonwealth-phd',
    title: { EN: 'Commonwealth PhD Scholarships', AM: 'የኮመንዌልዝ ፒኤችዲ ስኮላርሺፕ' },
    provider: 'UK Government',
    location: 'United Kingdom',
    type: { EN: 'Fully Funded', AM: 'ሙሉ ወጪ የሚሸፈን' },
    level: { EN: 'PhD', AM: 'ፒኤችዲ' },
    description: {
      EN: 'Supports high quality doctoral research in the UK for students from developing countries. Covers all expenses.',
      AM: 'ከታዳጊ ሀገራት ለሚመጡ ተማሪዎች በእንግሊዝ ሀገር ለሚደረግ የዶክትሬት ጥናት ሙሉ ድጋፍ ይሰጣል።'
    },
    category: 'PhD',
    tags: ['UK', 'Development', 'Research'],
    url: 'https://cscuk.fcdo.gov.uk',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 'fulbright-phd',
    title: { EN: 'Fulbright Foreign Student Program', AM: 'የፉልብራይት የውጭ ተማሪዎች ፕሮግራም' },
    provider: 'USA Government',
    location: 'USA',
    type: { EN: 'Fully Funded', AM: 'ሙሉ ወጪ የሚሸፈን' },
    level: { EN: 'PhD', AM: 'ፒኤችዲ' },
    description: {
      EN: 'Full funding for doctoral study and research in the United States. Promotes cultural exchange and academic excellence.',
      AM: 'በአሜሪካ ለሚደረግ የዶክትሬት ጥናት እና ምርምር ሙሉ ወጪ የሚሸፈንበት ታዋቂ ፕሮግራም።'
    },
    category: 'PhD',
    tags: ['USA', 'Leadership', 'Culture'],
    url: 'https://foreign.fulbrightonline.org',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 'daad-phd',
    title: { EN: 'DAAD PhD Programs', AM: 'የDAAD ፒኤችዲ ፕሮግራሞች' },
    provider: 'German Government',
    location: 'Germany',
    type: { EN: 'Fully Funded', AM: 'ሙሉ ወጪ የሚሸፈን' },
    level: { EN: 'PhD', AM: 'ፒኤችዲ' },
    description: {
      EN: 'DAAD supports international doctoral candidates with funded opportunities in Germany. Emphasizes research excellence.',
      AM: 'በጀርመን ለሚደረግ የዶክትሬት ጥናት የሚሰጥ የገንዘብ ድጋፍ። በጥናት እና ምርምር ላይ ያተኮረ።'
    },
    category: 'PhD',
    tags: ['Germany', 'Research', 'Innovation'],
    url: 'https://www.daad.de',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 'mext-phd',
    title: { EN: 'MEXT PhD Scholarships', AM: 'የMEXT ፒኤችዲ ስኮላርሺፕ' },
    provider: 'Japanese Government',
    location: 'Japan',
    type: { EN: 'Fully Funded', AM: 'ሙሉ ወጪ የሚሸፈን' },
    level: { EN: 'PhD', AM: 'ፒኤችዲ' },
    description: {
      EN: 'Offers scholarships for PhD study in Japan, covering tuition, stipends, and language training.',
      AM: 'በጃፓን ለሚደረግ የዶክትሬት ጥናት የሚሰጥ ሙሉ ስኮላርሺፕ። የትምህርት ክፍያ እና የመኖሪያ ወጪን ይሸፍናል።'
    },
    category: 'PhD',
    tags: ['Japan', 'Research', 'Culture'],
    url: 'https://www.studyinjapan.go.jp',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=500&q=60'
  },

  // --- MASTERS PROGRAMS ---
  {
    id: 'erasmus-masters',
    title: { EN: 'Erasmus Mundus Joint Master Degrees', AM: 'የኢራስመስ ሙንደስ የጋራ ማስተርስ ዲግሪ' },
    provider: 'European Union',
    location: 'Europe',
    type: { EN: 'Fully Funded', AM: 'ሙሉ ወጪ የሚሸፈን' },
    level: { EN: 'Masters', AM: 'ማስተርስ' },
    description: { 
      EN: 'Prestigious Master’s programs allowing study in two or more European countries. Covers tuition, allowances, and travel.', 
      AM: 'በሁለት ወይም ከዚያ በላይ የአውሮፓ ሀገራት ትምህርትን የሚሰጥ ከፍተኛ ደረጃ ያለው ፕሮግራም። የትምህርት ቤት፣ የመኖሪያ እና የጉዞ ወጪን ይሸፍናል።' 
    },
    category: 'Masters',
    tags: ['Multicultural', 'EU', 'Funding'],
    url: 'https://erasmus-plus.ec.europa.eu',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 'chevening',
    title: { EN: 'Chevening Scholarships', AM: 'የቺቪኒንግ ስኮላርሺፕ' },
    provider: 'UK Government',
    location: 'United Kingdom',
    type: { EN: 'Fully Funded', AM: 'ሙሉ ወጪ የሚሸፈን' },
    level: { EN: 'Masters', AM: 'ማስተርስ' },
    description: { 
      EN: 'UK government’s flagship scholarship for future leaders. Funds one year Master’s programs at any UK university.', 
      AM: 'ለወደፊት መሪዎች የሚሰጥ የእንግሊዝ መንግስት ዋና ስኮላርሺፕ። በማንኛውም የእንግሊዝ ዩኒቨርሲቲ የአንድ ዓመት የማስተርስ ትምህርትን ይሸፍናል።' 
    },
    category: 'Masters',
    tags: ['UK', 'Leadership', 'Networking'],
    url: 'https://www.chevening.org',
    image: 'https://images.unsplash.com/photo-1526304640152-d4619684e484?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 'swedish-institute',
    title: { EN: 'Swedish Institute Scholarships', AM: 'የስዊድን ኢንስቲትዩት ስኮላርሺፕ' },
    provider: 'Swedish Government',
    location: 'Sweden',
    type: { EN: 'Fully Funded', AM: 'ሙሉ ወጪ የሚሸፈን' },
    level: { EN: 'Masters', AM: 'ማስተርስ' },
    description: { 
      EN: 'Fully funded Master’s scholarships for global professionals. Emphasizes innovation, sustainability, and leadership.', 
      AM: 'ለአለም አቀፍ ባለሙያዎች የሚሰጥ ሙሉ ወጪው የተሸፈነ የማስተርስ ስኮላርሺፕ። በፈጠራ እና ዘላቂነት ላይ ያተኩራል።' 
    },
    category: 'Masters',
    tags: ['Sweden', 'Sustainability', 'Innovation'],
    url: 'https://si.se',
    image: 'https://images.unsplash.com/photo-1509339022327-1e1e25360a41?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 'australia-awards',
    title: { EN: 'Australia Awards Scholarships', AM: 'የአውስትራሊያ አዋርድስ ስኮላርሺፕ' },
    provider: 'Australian Government',
    location: 'Australia',
    type: { EN: 'Fully Funded', AM: 'ሙሉ ወጪ የሚሸፈን' },
    level: { EN: 'Masters', AM: 'ማስተርስ' },
    description: {
      EN: 'Supports Master’s study in priority development fields. Builds long term partnerships and leadership skills.',
      AM: 'በልማት ዘርፎች ለማስተርስ ጥናት የሚሰጥ ድጋፍ። የረጅም ጊዜ አጋርነትን እና የመሪነት ክህሎትን ይገነባል።'
    },
    category: 'Masters',
    tags: ['Australia', 'Development', 'Indo-Pacific'],
    url: 'https://www.dfat.gov.au',
    image: 'https://images.unsplash.com/photo-1523482580638-015d95566639?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 'kaist-grad',
    title: { EN: 'KAIST Graduate Programs', AM: 'የKAIST የድህረ ምረቃ ፕሮግራም' },
    provider: 'KAIST',
    location: 'South Korea',
    type: { EN: 'Fully Funded', AM: 'ሙሉ ወጪ የሚሸፈን' },
    level: { EN: 'Masters', AM: 'ማስተርስ' },
    description: {
      EN: 'Fully funded Master’s programs in science and technology. Students benefit from cutting edge research facilities.',
      AM: 'በሳይንስ እና ቴክኖሎጂ ዘርፍ ሙሉ ወጪ የሚሸፈን የማስተርስ ፕሮግራም። ዘመናዊ የምርምር ተቋማትን ያካትታል።'
    },
    category: 'Masters',
    tags: ['Korea', 'Technology', 'Science'],
    url: 'https://admission.kaist.ac.kr',
    image: 'https://images.unsplash.com/photo-1555431189-0fabf2667795?auto=format&fit=crop&w=500&q=60'
  },

  // --- UNDERGRADUATE PROGRAMS ---
  {
    id: 'study-in-germany',
    title: { EN: 'Study in Germany (Tuition Free)', AM: 'በጀርመን ነጻ ትምህርት' },
    provider: 'Public Universities',
    location: 'Germany',
    type: { EN: 'Tuition Free', AM: 'ከክፍያ ነጻ' },
    level: { EN: 'Undergraduate', AM: 'ቅድመ ምረቃ' },
    description: {
      EN: 'Germany offers tuition free or very low cost undergraduate education at public universities with strong academic standards.',
      AM: 'ጀርመን በመንግስት ዩኒቨርሲቲዎች ከክፍያ ነጻ ወይም በዝቅተኛ ወጪ ጥራት ያለው ትምህርት ትሰጣለች።'
    },
    category: 'Undergraduate',
    tags: ['Germany', 'Public Education', 'Engineering'],
    url: 'https://www.study-in-germany.de',
    image: 'https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 'ucas-uk',
    title: { EN: 'UCAS Undergraduate', AM: 'የUCAS ቅድመ ምረቃ' },
    provider: 'UK Universities',
    location: 'United Kingdom',
    type: { EN: 'Admission Platform', AM: 'የመግቢያ መድረክ' },
    level: { EN: 'Undergraduate', AM: 'ቅድመ ምረቃ' },
    description: {
      EN: 'Centralized admission platform for UK universities. Apply to multiple top ranked institutions with one application.',
      AM: 'ለእንግሊዝ ዩኒቨርሲቲዎች ማዕከላዊ የማመልከቻ መድረክ። በአንድ ጊዜ ለብዙ ተቋማት ለማመልከት ያስችላል።'
    },
    category: 'Undergraduate',
    tags: ['UK', 'Admissions', 'Standardized'],
    url: 'https://www.ucas.com',
    image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 'common-app',
    title: { EN: 'Common Application', AM: 'የCommon App መድረክ' },
    provider: 'US Universities',
    location: 'USA',
    type: { EN: 'Admission Platform', AM: 'የመግቢያ መድረክ' },
    level: { EN: 'Undergraduate', AM: 'ቅድመ ምረቃ' },
    description: {
      EN: 'The Common App simplifies undergraduate applications to hundreds of US universities. Apply efficiently showcasing your achievements.',
      AM: 'ለአሜሪካ ዩኒቨርሲቲዎች ማመልከቻን የሚያቀል መድረክ።'
    },
    category: 'Undergraduate',
    tags: ['USA', 'Admissions', 'Standardized'],
    url: 'https://www.commonapp.org',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 'turkiye-undergrad',
    title: { EN: 'Türkiye Scholarships', AM: 'የቱርክ መንግስት ስኮላርሺፕ' },
    provider: 'Government of Turkey',
    location: 'Turkey',
    type: { EN: 'Fully Funded', AM: 'ሙሉ ወጪ የሚሸፈን' },
    level: { EN: 'Undergraduate', AM: 'ቅድመ ምረቃ' },
    description: { 
      EN: 'Provides full funding for undergraduate study in Turkey, including tuition, accommodation, stipends, and insurance.', 
      AM: 'ትምህርት ቤት፣ መኖሪያ ቤት፣ ወርሃዊ አበል እና የጤና መድህን የሚያካትት ሙሉ ስኮላርሺፕ።' 
    },
    category: 'Undergraduate',
    tags: ['Turkey', 'Diversity', 'Comprehensive'],
    url: 'https://www.turkiyeburslari.gov.tr',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=60'
  },

  // --- INTERNSHIPS ---
  {
    id: 'un-internships',
    title: { EN: 'United Nations Internships', AM: 'የተባበሩት መንግስታት የልምምድ እድል' },
    provider: 'United Nations',
    location: 'Global',
    type: { EN: 'Professional Experience', AM: 'የሙያ ልምድ' },
    level: { EN: 'Internship', AM: 'ልምምድ' },
    description: { 
      EN: 'UN internships offer hands on experience in international development, diplomacy, and humanitarian assistance.', 
      AM: 'በተባበሩት መንግስታት ድርጅት ውስጥ በዲፕሎማሲ እና ሰብአዊ እርዳታ ዘርፍ የተግባር ልምድ ለማግኘት የሚያስችል እድል።' 
    },
    category: 'Internship',
    tags: ['Diplomacy', 'Global', 'Humanitarian'],
    url: 'https://careers.un.org',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 'world-bank-internship',
    title: { EN: 'World Bank Internship', AM: 'የአለም ባንክ ልምምድ' },
    provider: 'World Bank Group',
    location: 'USA / Global',
    type: { EN: 'Paid Internship', AM: 'የሚከፈልበት ልምምድ' },
    level: { EN: 'Internship', AM: 'ልምምድ' },
    description: {
      EN: 'Paid internships for students pursuing development related studies. Interns work on real world projects aimed at poverty reduction.',
      AM: 'ለልማት ተማሪዎች የሚሰጥ የሚከፈልበት የልምምድ ዕድል። ድህነትን በመቀነስ ረገድ በሚሰሩ ፕሮጀክቶች ላይ መሳተፍ።'
    },
    category: 'Internship',
    tags: ['Development', 'Economics', 'Finance'],
    url: 'https://www.worldbank.org/en/about/careers',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 'cern-internship',
    title: { EN: 'CERN Internships', AM: 'የሰርን (CERN) የልምምድ እድል' },
    provider: 'CERN',
    location: 'Switzerland',
    type: { EN: 'Research Intern', AM: 'የምርምር ልምምድ' },
    level: { EN: 'Internship', AM: 'ልምምድ' },
    description: { 
      EN: 'CERN provides internships in physics, engineering, IT, and administration. Work with leading global scientists.', 
      AM: 'በፊዚክስ፣ በምህንድስና እና በኢንፎርሜሽን ቴክኖሎጂ ዘርፎች ከታወቁ ሳይንቲስቶች ጋር አብሮ ለመስራት የሚያስችል እድል።' 
    },
    category: 'Internship',
    tags: ['Physics', 'IT', 'Science'],
    url: 'https://careers.cern',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 'daad-rise',
    title: { EN: 'DAAD RISE Internships', AM: 'የDAAD RISE ልምምድ' },
    provider: 'DAAD',
    location: 'Germany',
    type: { EN: 'Research Intern', AM: 'የምርምር ልምምድ' },
    level: { EN: 'Internship', AM: 'ልምምድ' },
    description: {
      EN: 'RISE offers paid summer research internships for undergraduate students in science and engineering at German universities.',
      AM: 'በሳይንስ እና ምህንድስና ለሚማሩ ተማሪዎች በጀርመን ዩኒቨርሲቲዎች የሚሰጥ የክረምት የምርምር ልምምድ።'
    },
    category: 'Internship',
    tags: ['Germany', 'Science', 'Engineering'],
    url: 'https://www.daad.de/rise',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 'tech-internships',
    title: { EN: 'Big Tech Internships', AM: 'የቴክኖሎጂ ኩባንያዎች ልምምድ' },
    provider: 'Google, Microsoft, Amazon',
    location: 'Global',
    type: { EN: 'Paid Internship', AM: 'የሚከፈልበት ልምምድ' },
    level: { EN: 'Internship', AM: 'ልምምድ' },
    description: {
      EN: 'Global tech companies offer competitive, paid internships for students and recent graduates, providing real world experience.',
      AM: 'ታላላቅ የቴክኖሎጂ ኩባንያዎች ለተማሪዎች እና ለተመራቂዎች የሚሰጡት ዓለም አቀፍ የልምምድ ዕድል።'
    },
    category: 'Internship',
    tags: ['Tech', 'Coding', 'Innovation'],
    url: 'https://careers.google.com',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=60'
  }
];

export const COUNTRIES: Country[] = [
  // ... (Countries data remains unchanged)
  // --- EXISTING COUNTRIES (OPTIMIZED) ---
  { id: 'uk', continent: 'Europe', flag: '🇬🇧', name: { EN: 'United Kingdom', AM: 'እንግሊዝ' }, image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=60' },
  { id: 'us', continent: 'North America', flag: '🇺🇸', name: { EN: 'USA', AM: 'አሜሪካ' }, image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=500&q=60' },
  { id: 'de', continent: 'Europe', flag: '🇩🇪', name: { EN: 'Germany', AM: 'ጀርመን' }, image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=500&q=60' },
  { id: 'ca', continent: 'North America', flag: '🇨🇦', name: { EN: 'Canada', AM: 'ካናዳ' }, image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=500&q=60' },
  { id: 'fr', continent: 'Europe', flag: '🇫🇷', name: { EN: 'France', AM: 'ፈረንሳይ' }, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=60' },
  { id: 'it', continent: 'Europe', flag: '🇮🇹', name: { EN: 'Italy', AM: 'ጣሊያን' }, image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=500&q=60' },
  { id: 'nl', continent: 'Europe', flag: '🇳🇱', name: { EN: 'Netherlands', AM: 'ኔዘርላንድ' }, image: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=500&q=60' },
  { id: 'se', continent: 'Europe', flag: '🇸🇪', name: { EN: 'Sweden', AM: 'ስዊድን' }, image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=500&q=60' },
  { id: 'no', continent: 'Europe', flag: '🇳🇴', name: { EN: 'Norway', AM: 'ኖርዌይ' }, image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=500&q=60' },
  { id: 'ch', continent: 'Europe', flag: '🇨🇭', name: { EN: 'Switzerland', AM: 'ስዊዘርላንድ' }, image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=500&q=60' },
  { id: 'es', continent: 'Europe', flag: '🇪🇸', name: { EN: 'Spain', AM: 'ስፔን' }, image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=500&q=60' },
  { id: 'pl', continent: 'Europe', flag: '🇵🇱', name: { EN: 'Poland', AM: 'ፖላንድ' }, image: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=500&q=60' },
  { id: 'be', continent: 'Europe', flag: '🇧🇪', name: { EN: 'Belgium', AM: 'ቤልጂየም' }, image: 'https://images.unsplash.com/photo-1496545167527-02421394541e?auto=format&fit=crop&w=500&q=60' },
  { id: 'tr', continent: 'Europe', flag: '🇹🇷', name: { EN: 'Turkey', AM: 'ቱርክ' }, image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=60' },
  { id: 'jp', continent: 'Asia', flag: '🇯🇵', name: { EN: 'Japan', AM: 'ጃፓን' }, image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=500&q=60' },
  { id: 'kr', continent: 'Asia', flag: '🇰🇷', name: { EN: 'South Korea', AM: 'ደቡብ ኮሪያ' }, image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=500&q=60' },
  { id: 'cn', continent: 'Asia', flag: '🇨🇳', name: { EN: 'China', AM: 'ቻይና' }, image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=500&q=60' },
  { id: 'in', continent: 'Asia', flag: '🇮🇳', name: { EN: 'India', AM: 'ህንድ' }, image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=500&q=60' },
  { id: 'sg', continent: 'Asia', flag: '🇸🇬', name: { EN: 'Singapore', AM: 'ሲንጋፖር' }, image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=500&q=60' },
  { id: 'ae', continent: 'Middle East', flag: '🇦🇪', name: { EN: 'UAE', AM: 'ኤምሬትስ' }, image: 'https://images.unsplash.com/photo-1512453979798-5ea904ac66de?auto=format&fit=crop&w=500&q=60' },
  { id: 'sa', continent: 'Middle East', flag: '🇸🇦', name: { EN: 'Saudi Arabia', AM: 'ሳውዲ አረቢያ' }, image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=500&q=60' },
  { id: 'qa', continent: 'Middle East', flag: '🇶🇦', name: { EN: 'Qatar', AM: 'ኳታር' }, image: 'https://images.unsplash.com/photo-1575351881847-b3bf188d9d0a?auto=format&fit=crop&w=500&q=60' },
  { id: 'th', continent: 'Asia', flag: '🇹🇭', name: { EN: 'Thailand', AM: 'ታይላንድ' }, image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=500&q=60' },
  { id: 'br', continent: 'South America', flag: '🇧🇷', name: { EN: 'Brazil', AM: 'ብራዚል' }, image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=500&q=60' },
  { id: 'ar', continent: 'South America', flag: '🇦🇷', name: { EN: 'Argentina', AM: 'አርጀንቲና' }, image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=500&q=60' },
  { id: 'za', continent: 'Africa', flag: '🇿🇦', name: { EN: 'South Africa', AM: 'ደቡብ አፍሪካ' }, image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=500&q=60' },
  { id: 'ke', continent: 'Africa', flag: '🇰🇪', name: { EN: 'Kenya', AM: 'ኬንያ' }, image: 'https://images.unsplash.com/photo-1489396160835-779603f9905d?auto=format&fit=crop&w=500&q=60' },
  { id: 'eg', continent: 'Africa', flag: '🇪🇬', name: { EN: 'Egypt', AM: 'ግብፅ' }, image: 'https://images.unsplash.com/photo-1539650116455-251d9a0d6340?auto=format&fit=crop&w=500&q=60' },
  { id: 'au', continent: 'Oceania', flag: '🇦🇺', name: { EN: 'Australia', AM: 'አውስትራሊያ' }, image: 'https://images.unsplash.com/photo-1523482580638-015d95566639?auto=format&fit=crop&w=500&q=60' },
  { id: 'nz', continent: 'Oceania', flag: '🇳🇿', name: { EN: 'New Zealand', AM: 'ኒው ዚላንድ' }, image: 'https://images.unsplash.com/photo-1469521669194-babb45f835d7?auto=format&fit=crop&w=500&q=60' },
  { id: 'ru', continent: 'Europe', flag: '🇷🇺', name: { EN: 'Russia', AM: 'ሩሲያ' }, image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=500&q=60' },
  { id: 'ie', continent: 'Europe', flag: '🇮🇪', name: { EN: 'Ireland', AM: 'አየርላንድ' }, image: 'https://images.unsplash.com/photo-1590089415225-401cd6f9e475?auto=format&fit=crop&w=500&q=60' },
  
  // --- NEW COUNTRIES ---
  { id: 'pt', continent: 'Europe', flag: '🇵🇹', name: { EN: 'Portugal', AM: 'ፖርቹጋል' }, image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd81?auto=format&fit=crop&w=500&q=60' },
  { id: 'at', continent: 'Europe', flag: '🇦🇹', name: { EN: 'Austria', AM: 'ኦስትሪያ' }, image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=500&q=60' },
  { id: 'gr', continent: 'Europe', flag: '🇬🇷', name: { EN: 'Greece', AM: 'ግሪክ' }, image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=500&q=60' },
  { id: 'dk', continent: 'Europe', flag: '🇩🇰', name: { EN: 'Denmark', AM: 'ዴንማርክ' }, image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=500&q=60' },
  { id: 'fi', continent: 'Europe', flag: '🇫🇮', name: { EN: 'Finland', AM: 'ፊንላንድ' }, image: 'https://images.unsplash.com/photo-1534346589587-a0e1041a4a40?auto=format&fit=crop&w=500&q=60' },
  { id: 'cz', continent: 'Europe', flag: '🇨🇿', name: { EN: 'Czech Republic', AM: 'ቼክ ሪፐብሊክ' }, image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=500&q=60' },
  { id: 'hu', continent: 'Europe', flag: '🇭🇺', name: { EN: 'Hungary', AM: 'ሃንጋሪ' }, image: 'https://images.unsplash.com/photo-1565426873118-a17ed65d7429?auto=format&fit=crop&w=500&q=60' },
  { id: 'ro', continent: 'Europe', flag: '🇷🇴', name: { EN: 'Romania', AM: 'ሮማኒያ' }, image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=500&q=60' },
  { id: 'is', continent: 'Europe', flag: '🇮🇱', name: { EN: 'Iceland', AM: 'አይስላንድ' }, image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=500&q=60' },
  { id: 'cy', continent: 'Europe', flag: '🇨🇾', name: { EN: 'Cyprus', AM: 'ቆጵሮስ' }, image: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&w=500&q=60' },
  { id: 'my', continent: 'Asia', flag: '🇲🇾', name: { EN: 'Malaysia', AM: 'ማሌዢያ' }, image: 'https://images.unsplash.com/photo-1596422846543-75c6a197da74?auto=format&fit=crop&w=500&q=60' },
  { id: 'id', continent: 'Asia', flag: '🇮🇳', name: { EN: 'Indonesia', AM: 'ኢንዶኔዢያ' }, image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=500&q=60' },
  { id: 'vn', continent: 'Asia', flag: '🇻🇳', name: { EN: 'Vietnam', AM: 'ቬትናም' }, image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=500&q=60' },
  { id: 'ph', continent: 'Asia', flag: '🇵🇱', name: { EN: 'Philippines', AM: 'ፊሊፒንስ' }, image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=500&q=60' },
  { id: 'pk', continent: 'Asia', flag: '🇵🇰', name: { EN: 'Pakistan', AM: 'ፓኪስታን' }, image: 'https://images.unsplash.com/photo-1589405629342-127c5938743e?auto=format&fit=crop&w=500&q=60' },
  { id: 'mx', continent: 'North America', flag: '🇲🇽', name: { EN: 'Mexico', AM: 'ሜክሲኮ' }, image: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=500&q=60' },
  { id: 'co', continent: 'South America', flag: '🇨🇴', name: { EN: 'Colombia', AM: 'ኮሎምቢያ' }, image: 'https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=500&q=60' },
  { id: 'cl', continent: 'South America', flag: '🇨🇱', name: { EN: 'Chile', AM: 'ቺሊ' }, image: 'https://images.unsplash.com/photo-1533038661966-2311685b8004?auto=format&fit=crop&w=500&q=60' },
  { id: 'pe', continent: 'South America', flag: '🇵🇪', name: { EN: 'Peru', AM: 'ፔሩ' }, image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=500&q=60' },
  { id: 'ng', continent: 'Africa', flag: '🇳🇬', name: { EN: 'Nigeria', AM: 'ናይጄሪያ' }, image: 'https://images.unsplash.com/photo-1618255909187-b95cb9426f0c?auto=format&fit=crop&w=500&q=60' },
  { id: 'gh', continent: 'Africa', flag: '🇬🇭', name: { EN: 'Ghana', AM: 'ጋና' }, image: 'https://images.unsplash.com/photo-1543788303-3453b320e640?auto=format&fit=crop&w=500&q=60' },
  { id: 'tz', continent: 'Africa', flag: '🇹🇿', name: { EN: 'Tanzania', AM: 'ታንዛኒያ' }, image: 'https://images.unsplash.com/photo-1532054042869-c4098e53f3e1?auto=format&fit=crop&w=500&q=60' },
  { id: 'ug', continent: 'Africa', flag: '🇺🇬', name: { EN: 'Uganda', AM: 'ዩጋንዳ' }, image: 'https://images.unsplash.com/photo-1555060855-827c11f774d0?auto=format&fit=crop&w=500&q=60' },
  { id: 'rw', continent: 'Africa', flag: '🇷🇼', name: { EN: 'Rwanda', AM: 'ሩዋንዳ' }, image: 'https://images.unsplash.com/photo-1635368388484-935105db0961?auto=format&fit=crop&w=500&q=60' },
  { id: 'ma', continent: 'Africa', flag: '🇲🇦', name: { EN: 'Morocco', AM: 'ሞሮኮ' }, image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=500&q=60' },
  { id: 'jo', continent: 'Middle East', flag: '🇯🇴', name: { EN: 'Jordan', AM: 'ዮርዳኖስ' }, image: 'https://images.unsplash.com/photo-1563290078-43644f23b285?auto=format&fit=crop&w=500&q=60' },
  { id: 'om', continent: 'Middle East', flag: '🇴🇲', name: { EN: 'Oman', AM: 'ኦማን' }, image: 'https://images.unsplash.com/photo-1578509312291-583595eb21a5?auto=format&fit=crop&w=500&q=60' },
  { id: 'kw', continent: 'Middle East', flag: '🇰🇼', name: { EN: 'Kuwait', AM: 'ኩዌት' }, image: 'https://images.unsplash.com/photo-1589139265261-0b5c13b3036c?auto=format&fit=crop&w=500&q=60' },
  { id: 'bh', continent: 'Middle East', flag: '🇧🇭', name: { EN: 'Bahrain', AM: 'ባህሬን' }, image: 'https://images.unsplash.com/photo-1576402830887-a22c54641695?auto=format&fit=crop&w=500&q=60' },
  { id: 'il', continent: 'Middle East', flag: '🇮🇱', name: { EN: 'Israel', AM: 'እስራኤል' }, image: 'https://images.unsplash.com/photo-1542178229-37365697d4c1?auto=format&fit=crop&w=500&q=60' }
];

export const CONSULTANTS: Consultant[] = [
  {
    id: 'c1',
    name: 'Mihret Bekalu',
    role: { EN: 'Founder & Lead Visa Consultant', AM: 'መስራች እና ዋና የቪዛ አማካሪ' },
    bio: { 
      EN: 'Mihret Bekalu is the Founder and Lead Visa Consultant at Mihret Bekalu Travel and Consultancy. He provides professional guidance on U.S. and European visa applications, supporting students and professionals in achieving their international education and travel goals.', 
      AM: 'ምሕረት በቃሉ የምሕረት በቃሉ የጉዞ እና አማካሪ ድርጅት መስራች እና ዋና የቪዛ አማካሪ ነው። ተማሪዎች እና ባለሙያዎች ዓለም አቀፍ የትምህርት እና የጉዞ ግቦቻቸውን እንዲያሳኩ በመደገፍ በአሜሪካ እና በአውሮፓ የቪዛ ማመልከቻዎች ላይ ሙያዊ መመሪያ ይሰጣል።'
    },
    // Updated image path
    image: '/assets/images/mihret-bekalu-profile.jpg' 
  },
  {
    id: 'c2',
    name: 'Dr. Samuel Tadesse',
    role: { EN: 'Scholarship Strategist', AM: 'የስኮላርሺፕ ስትራቴጂስት' },
    bio: { 
      EN: 'Former admissions officer specializing in securing fully funded scholarships for high-achieving students.', 
      AM: 'ለከፍተኛ ውጤት ተማሪዎች ሙሉ ስኮላርሺፕ በማመቻቸት ላይ ያተኮረ የቀድሞ የመግቢያ ኦፊሰር።' 
    },
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'c3',
    name: 'Elsa Gebre',
    role: { EN: 'Application Specialist', AM: 'የማመልከቻ ስፔሻሊስት' },
    bio: { 
      EN: 'Focuses on essay writing, interview preparation, and document verification for maximum approval success.', 
      AM: 'ለከፍተኛ ተቀባይነት በድርሰት አጻጻፍ፣ ቃለ መጠይቅ ዝግጅት እና የሰነድ ማረጋገጫ ላይ ታተኩራለች።' 
    },
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'c4',
    name: 'Yared Alemu',
    role: { EN: 'European Region Expert', AM: 'የአውሮፓ ክልል ባለሙያ' },
    bio: { 
      EN: 'Specialized knowledge of Schengen visa requirements and university systems in Germany, France, and Scandinavia.', 
      AM: 'ስለ ሼንገን ቪዛ መስፈርቶች እና በጀርመን፣ ፈረንሳይ እና ስካንዲኔቪያ ስላሉ የዩኒቨርሲቲ ስርዓቶች ልዩ እውቀት ያለው።' 
    },
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=60'
  }
];

export const PROGRAMS: Program[] = [
  // --- Computer Science & IT Programs ---
  {
    id: 'cs-stanford',
    title: { EN: 'Master of Computer Science', AM: 'የኮምፒውተር ሳይንስ ማስተርስ' },
    field: 'Computer Science',
    type: 'Masters',
    countryId: 'us',
    university: 'Stanford University',
    logo: 'https://logo.clearbit.com/stanford.edu',
    duration: { EN: '1.5–2 years', AM: '1.5–2 ዓመታት' },
    description: { EN: 'Focus on Advanced CS topics like AI, systems, software engineering.', AM: 'በላቁ የኮምፒውተር ሳይንስ፣ AI እና ሶፍትዌር ምህንድስና ላይ ያተኮረ።' }
  },
  {
    id: 'cs-oxford',
    title: { EN: 'BSc Computer Science', AM: 'የኮምፒውተር ሳይንስ የመጀመሪያ ዲግሪ' },
    field: 'Computer Science',
    type: 'Undergraduate',
    countryId: 'uk',
    university: 'University of Oxford',
    logo: 'https://logo.clearbit.com/ox.ac.uk',
    duration: { EN: '3 years', AM: '3 ዓመታት' },
    description: { EN: 'Fundamental computing theory, programming, algorithms.', AM: 'የኮምፒውተር ቲዎሪ፣ ፕሮግራሚንግ እና አልጎሪዝም መሰረታዊ ትምህርቶች።' }
  },
  {
    id: 'ai-imperial',
    title: { EN: 'MSc Artificial Intelligence', AM: 'የአርቴፊሻል ኢንተለጀንስ ማስተርስ' },
    field: 'Computer Science',
    type: 'Masters',
    countryId: 'uk',
    university: 'Imperial College London',
    logo: 'https://logo.clearbit.com/imperial.ac.uk',
    duration: { EN: '1 year', AM: '1 ዓመት' },
    description: { EN: 'Machine learning, robotics, intelligent systems.', AM: 'ማሽን ለርኒንግ፣ ሮቦቲክስ እና ኢንተለጀንት ሲስተምስ።' }
  },
  {
    id: 'se-cmu',
    title: { EN: 'BSc Software Engineering', AM: 'የሶፍትዌር ምህንድስና የመጀመሪያ ዲግሪ' },
    field: 'Computer Science',
    type: 'Undergraduate',
    countryId: 'us',
    university: 'Carnegie Mellon University',
    logo: 'https://logo.clearbit.com/cmu.edu',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Software development, engineering principles, project work.', AM: 'ሶፍትዌር ልማት፣ የምህንድስና መርሆዎች እና የፕሮጀክት ስራ።' }
  },
  {
    id: 'ds-eth',
    title: { EN: 'MSc Data Science', AM: 'የዳታ ሳይንስ ማስተርስ' },
    field: 'Computer Science',
    type: 'Masters',
    countryId: 'ch',
    university: 'ETH Zurich',
    logo: 'https://logo.clearbit.com/ethz.ch',
    duration: { EN: '1.5–2 years', AM: '1.5–2 ዓመታት' },
    description: { EN: 'Big data, statistics, machine learning.', AM: 'ቢግ ዳታ፣ ስታቲስቲክስ እና ማሽን ለርኒንግ።' }
  },

  // --- Business & Management Programs ---
  {
    id: 'mba-harvard',
    title: { EN: 'MBA', AM: 'ኤምቢኤ (MBA)' },
    field: 'Business',
    type: 'Masters',
    countryId: 'us',
    university: 'Harvard Business School',
    logo: 'https://logo.clearbit.com/harvard.edu',
    duration: { EN: '2 years', AM: '2 ዓመታት' },
    description: { EN: 'Leadership, strategy, finance, entrepreneurship.', AM: 'አመራር፣ ስትራቴጂ፣ ፋይናንስ እና ፈጠራ።' }
  },
  {
    id: 'bba-wharton',
    title: { EN: 'BBA', AM: 'የቢዝነስ አስተዳደር የመጀመሪያ ዲግሪ' },
    field: 'Business',
    type: 'Undergraduate',
    countryId: 'us',
    university: 'University of Pennsylvania (Wharton)',
    logo: 'https://logo.clearbit.com/upenn.edu',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Business fundamentals, analytics, entrepreneurship.', AM: 'የቢዝነስ መሰረታዊ፣ ትንታኔ እና ፈጠራ።' }
  },
  {
    id: 'msc-lse',
    title: { EN: 'MSc Management', AM: 'የማኔጅመንት ማስተርስ' },
    field: 'Business',
    type: 'Masters',
    countryId: 'uk',
    university: 'LSE',
    logo: 'https://logo.clearbit.com/lse.ac.uk',
    duration: { EN: '1 year', AM: '1 ዓመት' },
    description: { EN: 'Organizational management, economics, finance.', AM: 'የድርጅት አመራር፣ ኢኮኖሚክስ እና ፋይናንስ።' }
  },
  {
    id: 'emba-insead',
    title: { EN: 'Executive MBA', AM: 'ኤክስኪዩቲቭ ኤምቢኤ' },
    field: 'Business',
    type: 'Masters',
    countryId: 'fr',
    university: 'INSEAD',
    logo: 'https://logo.clearbit.com/insead.edu',
    duration: { EN: '1 year', AM: '1 ዓመት' },
    description: { EN: 'Leadership for experienced professionals.', AM: 'ልምድ ላላቸው ባለሙያዎች የአመራር ክህሎት።' }
  },
  {
    id: 'ib-sydney',
    title: { EN: 'BSc International Business', AM: 'ዓለም አቀፍ ቢዝነስ የመጀመሪያ ዲግሪ' },
    field: 'Business',
    type: 'Undergraduate',
    countryId: 'au',
    university: 'University of Sydney',
    logo: 'https://logo.clearbit.com/sydney.edu.au',
    duration: { EN: '3 years', AM: '3 ዓመታት' },
    description: { EN: 'Global business strategy and market analysis.', AM: 'ዓለም አቀፍ የቢዝነስ ስትራቴጂ እና የገበያ ትንተና።' }
  },

  // --- Engineering Programs ---
  {
    id: 'me-cambridge',
    title: { EN: 'BEng Mechanical Engineering', AM: 'ሜካኒካል ምህንድስና የመጀመሪያ ዲግሪ' },
    field: 'Engineering',
    type: 'Undergraduate',
    countryId: 'uk',
    university: 'University of Cambridge',
    logo: 'https://logo.clearbit.com/cam.ac.uk',
    duration: { EN: '3–4 years', AM: '3–4 ዓመታት' },
    description: { EN: 'Mechanics, thermodynamics, machine design.', AM: 'መካኒክስ፣ ቴርሞዳይናሚክስ እና ማሽን ዲዛይን።' }
  },
  {
    id: 'ee-mit',
    title: { EN: 'MEng Electrical Engineering', AM: 'ኤሌክትሪካል ምህንድስና ማስተርስ' },
    field: 'Engineering',
    type: 'Masters',
    countryId: 'us',
    university: 'MIT',
    logo: 'https://logo.clearbit.com/mit.edu',
    duration: { EN: '2 years', AM: '2 ዓመታት' },
    description: { EN: 'Circuits, electronics, signal processing.', AM: 'ሰርኪዩት፣ ኤሌክትሮኒክስ እና ሲግናል ፕሮሰሲንግ።' }
  },
  {
    id: 'ce-toronto',
    title: { EN: 'BEng Civil Engineering', AM: 'ሲቪል ምህንድስና የመጀመሪያ ዲግሪ' },
    field: 'Engineering',
    type: 'Undergraduate',
    countryId: 'ca',
    university: 'University of Toronto',
    logo: 'https://logo.clearbit.com/utoronto.ca',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Structural design, infrastructure engineering.', AM: 'የመዋቅር ንድፍ እና የመሰረተ ልማት ምህንድስና።' }
  },
  {
    id: 'che-berkeley',
    title: { EN: 'MSc Chemical Engineering', AM: 'ኬሚካል ምህንድስና ማስተርስ' },
    field: 'Engineering',
    type: 'Masters',
    countryId: 'us',
    university: 'UC Berkeley',
    logo: 'https://logo.clearbit.com/berkeley.edu',
    duration: { EN: '2 years', AM: '2 ዓመታት' },
    description: { EN: 'Process design, materials, reaction engineering.', AM: 'የሂደት ንድፍ፣ ማቴሪያሎች እና ሪአክሽን ምህንድስና።' }
  },
  {
    id: 'ae-gatech',
    title: { EN: 'BEng Aerospace Engineering', AM: 'ኤሮስፔስ ምህንድስና የመጀመሪያ ዲግሪ' },
    field: 'Engineering',
    type: 'Undergraduate',
    countryId: 'us',
    university: 'Georgia Tech',
    logo: 'https://logo.clearbit.com/gatech.edu',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Flight mechanics, propulsion, design.', AM: 'የበረራ መካኒክስ፣ ፕሮፐልሽን እና ዲዛይን።' }
  },

  // --- Health & Medicine Programs ---
  {
    id: 'md-jhu',
    title: { EN: 'Doctor of Medicine (MD)', AM: 'የህክምና ዶክትሬት (MD)' },
    field: 'Medicine',
    type: 'Professional', 
    countryId: 'us',
    university: 'Johns Hopkins School of Medicine',
    logo: 'https://logo.clearbit.com/jhu.edu',
    duration: { EN: '4 years + residency', AM: '4 ዓመታት + ሬዚደንሲ' },
    description: { EN: 'Clinical practice, medical research.', AM: 'የህክምና ልምምድ እና የህክምና ምርምር።' }
  },
  {
    id: 'nursing-ubc',
    title: { EN: 'BSc Nursing', AM: 'የነርሲንግ የመጀመሪያ ዲግሪ' },
    field: 'Medicine',
    type: 'Undergraduate',
    countryId: 'ca',
    university: 'University of British Columbia',
    logo: 'https://logo.clearbit.com/ubc.ca',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Patient care, clinical skills, health sciences.', AM: 'የታካሚ እንክብካቤ፣ የክሊኒካል ክህሎቶች እና የጤና ሳይንስ።' }
  },
  {
    id: 'mph-michigan',
    title: { EN: 'MSc Public Health', AM: 'የህብረተሰብ ጤና ማስተርስ' },
    field: 'Medicine',
    type: 'Masters',
    countryId: 'us',
    university: 'University of Michigan',
    logo: 'https://logo.clearbit.com/umich.edu',
    duration: { EN: '2 years', AM: '2 ዓመታት' },
    description: { EN: 'Community health, epidemiology.', AM: 'የማህበረሰብ ጤና እና ኤፒዲሚዮሎጂ።' }
  },
  {
    id: 'pharmd-monash',
    title: { EN: 'PharmD', AM: 'የፋርማሲ ዶክትሬት' },
    field: 'Medicine',
    type: 'Professional',
    countryId: 'au',
    university: 'Monash University',
    logo: 'https://logo.clearbit.com/monash.edu',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Pharmacy practice, medication therapy.', AM: 'የፋርማሲ ልምምድ እና የመድሃኒት ህክምና።' }
  },
  {
    id: 'biomed-melb',
    title: { EN: 'BSc Biomedical Science', AM: 'ባዮሜዲካል ሳይንስ የመጀመሪያ ዲግሪ' },
    field: 'Science',
    type: 'Undergraduate',
    countryId: 'au',
    university: 'University of Melbourne',
    logo: 'https://logo.clearbit.com/unimelb.edu.au',
    duration: { EN: '3 years', AM: '3 ዓመታት' },
    description: { EN: 'Biology, research methods in molecular science.', AM: 'ባዮሎጂ እና ሞለኪውላር ሳይንስ የምርምር ዘዴዎች።' }
  },

  // --- Arts, Humanities & Social Sciences Programs ---
  {
    id: 'psych-ucla',
    title: { EN: 'BA Psychology', AM: 'የስነ-ልቦና የመጀመሪያ ዲግሪ' },
    field: 'Social Sciences',
    type: 'Undergraduate',
    countryId: 'us',
    university: 'UCLA',
    logo: 'https://logo.clearbit.com/ucla.edu',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Human behavior, research methods.', AM: 'የሰው ልጅ ባህሪ እና የምርምር ዘዴዎች።' }
  },
  {
    id: 'ir-soas',
    title: { EN: 'BA International Relations', AM: 'ዓለም አቀፍ ግንኙነት የመጀመሪያ ዲግሪ' },
    field: 'Social Sciences',
    type: 'Undergraduate',
    countryId: 'uk',
    university: 'SOAS University of London',
    logo: 'https://logo.clearbit.com/soas.ac.uk',
    duration: { EN: '3 years', AM: '3 ዓመታት' },
    description: { EN: 'Politics, global affairs, diplomacy.', AM: 'ፖለቲካ፣ ዓለም አቀፍ ጉዳዮች እና ዲፕሎማሲ።' }
  },
  {
    id: 'bfa-risd',
    title: { EN: 'BFA Illustration', AM: 'የስዕል ጥበብ የመጀመሪያ ዲግሪ' },
    field: 'Arts',
    type: 'Undergraduate',
    countryId: 'us',
    university: 'Rhode Island School of Design',
    logo: 'https://logo.clearbit.com/risd.edu',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Visual storytelling and design innovation.', AM: 'የእይታ ታሪክ አተረጓጎም እና የንድፍ ፈጠራ።' }
  },
  {
    id: 'ma-history-edinburgh',
    title: { EN: 'MA History', AM: 'የታሪክ ማስተርስ' },
    field: 'History',
    type: 'Masters',
    countryId: 'uk',
    university: 'University of Edinburgh',
    logo: 'https://logo.clearbit.com/ed.ac.uk',
    duration: { EN: '1–2 years', AM: '1–2 ዓመታት' },
    description: { EN: 'Historical research, cultural studies.', AM: 'ታሪካዊ ምርምር እና የባህል ጥናቶች።' }
  },
  {
    id: 'econ-lse',
    title: { EN: 'BA Economics', AM: 'የኢኮኖሚክስ የመጀመሪያ ዲግሪ' },
    field: 'Social Sciences',
    type: 'Undergraduate',
    countryId: 'uk',
    university: 'London School of Economics',
    logo: 'https://logo.clearbit.com/lse.ac.uk',
    duration: { EN: '3 years', AM: '3 ዓመታት' },
    description: { EN: 'Economic theory, analytics, policy.', AM: 'የኢኮኖሚክስ ቲዎሪ፣ ትንታኔ እና ፖሊሲ።' }
  },

  // --- NEW ARTS PROGRAMS ---
  {
    id: 'arts-oxford',
    title: { EN: 'Bachelor of Fine Arts (BFA)', AM: 'የስነ-ጥበብ የመጀመሪያ ዲግሪ' },
    field: 'Arts',
    type: 'Undergraduate',
    countryId: 'uk',
    university: 'University of Oxford',
    logo: 'https://logo.clearbit.com/ox.ac.uk',
    duration: { EN: '3 years', AM: '3 ዓመታት' },
    description: { EN: 'Focuses on studio practice, art history, and critical theory.', AM: 'በስቱዲዮ ልምምድ፣ የጥበብ ታሪክ እና ሂሳዊ ቲዎሪ ላይ ያተኩራል።' }
  },
  {
    id: 'arts-ual',
    title: { EN: 'MA Visual Arts', AM: 'የእይታ ጥበባት ማስተርስ' },
    field: 'Arts',
    type: 'Masters',
    countryId: 'uk',
    university: 'University of the Arts London',
    logo: 'https://logo.clearbit.com/arts.ac.uk',
    duration: { EN: '1-2 years', AM: '1-2 ዓመታት' },
    description: { EN: 'Offers pathways in photography, painting, and sculpture.', AM: 'በፎቶግራፍ፣ በስዕል እና በቅርጻ ቅርጽ ላይ ያተኮረ።' }
  },
  {
    id: 'arts-aau',
    title: { EN: 'BA Theatre Arts', AM: 'የቲያትር ጥበብ የመጀመሪያ ዲግሪ' },
    field: 'Arts',
    type: 'Undergraduate',
    countryId: 'za', // Proxy for Africa
    university: 'Addis Ababa University',
    logo: 'https://logo.clearbit.com/aau.edu.et',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Emphasizes Ethiopian cultural expression and performance.', AM: 'የኢትዮጵያን ባህላዊ አገላለጽ እና አፈጻጸም ያጎላል።' }
  },
  {
    id: 'arts-stanford',
    title: { EN: 'Art Practice Program', AM: 'የጥበብ ልምምድ ፕሮግራም' },
    field: 'Arts',
    type: 'Undergraduate',
    countryId: 'us',
    university: 'Stanford University',
    logo: 'https://logo.clearbit.com/stanford.edu',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Combines studio work with digital media and theory.', AM: 'የስቱዲዮ ስራን ከዲጂታል ሚዲያ እና ቲዎሪ ጋር ያዋህዳል።' }
  },

  // --- NEW LAW PROGRAMS ---
  {
    id: 'law-harvard',
    title: { EN: 'Juris Doctor (JD)', AM: 'የህግ ዶክትሬት (JD)' },
    field: 'Law',
    type: 'Professional',
    countryId: 'us',
    university: 'Harvard Law School',
    logo: 'https://logo.clearbit.com/harvard.edu',
    duration: { EN: '3 years', AM: '3 ዓመታት' },
    description: { EN: 'Offers unmatched legal training and global influence.', AM: 'ተወዳዳሪ የሌለው የህግ ስልጠና እና ዓለም አቀፍ ተጽእኖ ይሰጣል።' }
  },
  {
    id: 'law-cambridge',
    title: { EN: 'BA in Law (Tripos)', AM: 'የህግ የመጀመሪያ ዲግሪ' },
    field: 'Law',
    type: 'Undergraduate',
    countryId: 'uk',
    university: 'University of Cambridge',
    logo: 'https://logo.clearbit.com/cam.ac.uk',
    duration: { EN: '3 years', AM: '3 ዓመታት' },
    description: { EN: 'Focuses on UK and EU law with strong theoretical grounding.', AM: 'በእንግሊዝ እና በአውሮፓ ህብረት ህግ ላይ ያተኮረ ጠንካራ ቲዎሬቲካል መሰረት።' }
  },
  {
    id: 'law-oxford',
    title: { EN: 'Bachelor of Civil Law (BCL)', AM: 'የሲቪል ህግ ባችለር' },
    field: 'Law',
    type: 'Masters', // BCL at Oxford is a masters level
    countryId: 'uk',
    university: 'University of Oxford',
    logo: 'https://logo.clearbit.com/ox.ac.uk',
    duration: { EN: '1 year', AM: '1 ዓመት' },
    description: { EN: 'Prestigious postgraduate law degree with global recognition.', AM: 'ዓለም አቀፍ እውቅና ያለው ከፍተኛ የድህረ ምረቃ የህግ ዲግሪ።' }
  },
  {
    id: 'law-aau',
    title: { EN: 'LLB in Law', AM: 'የህግ የመጀመሪያ ዲግሪ (LLB)' },
    field: 'Law',
    type: 'Undergraduate',
    countryId: 'za', // Proxy for Africa
    university: 'Addis Ababa University',
    logo: 'https://logo.clearbit.com/aau.edu.et',
    duration: { EN: '4-5 years', AM: '4-5 ዓመታት' },
    description: { EN: 'Covers Ethiopian legal systems and international law.', AM: 'የኢትዮጵያ የህግ ስርዓቶችን እና ዓለም አቀፍ ህግን ይሸፍናል።' }
  },
  {
    id: 'law-yale',
    title: { EN: 'JD Program', AM: 'የJD ፕሮግራም' },
    field: 'Law',
    type: 'Professional',
    countryId: 'us',
    university: 'Yale Law School',
    logo: 'https://logo.clearbit.com/yale.edu',
    duration: { EN: '3 years', AM: '3 ዓመታት' },
    description: { EN: 'Known for constitutional law and public interest focus.', AM: 'በህገ-መንግስታዊ ህግ እና በህዝብ ጥቅም ላይ ባለው ትኩረት ይታወቃል።' }
  },

  // --- NEW SOCIAL SCIENCES PROGRAMS ---
  {
    id: 'ss-lse',
    title: { EN: 'BSc International Relations', AM: 'ዓለም አቀፍ ግንኙነት የመጀመሪያ ዲግሪ' },
    field: 'Social Sciences',
    type: 'Undergraduate',
    countryId: 'uk',
    university: 'London School of Economics (LSE)',
    logo: 'https://logo.clearbit.com/lse.ac.uk',
    duration: { EN: '3 years', AM: '3 ዓመታት' },
    description: { EN: 'A leader in political science and global affairs.', AM: 'በፖለቲካ ሳይንስ እና በዓለም አቀፍ ጉዳዮች መሪ።' }
  },
  {
    id: 'ss-stanford',
    title: { EN: 'BA Sociology', AM: 'የሶሺዮሎጂ የመጀመሪያ ዲግሪ' },
    field: 'Social Sciences',
    type: 'Undergraduate',
    countryId: 'us',
    university: 'Stanford University',
    logo: 'https://logo.clearbit.com/stanford.edu',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Emphasizes social theory, inequality, and data analysis.', AM: 'ማህበራዊ ቲዎሪን፣ ኢ-ፍትሃዊነትን እና የመረጃ ትንተናን ያጎላል።' }
  },
  {
    id: 'ss-oxford',
    title: { EN: 'BA PPE', AM: 'ፖለቲካ፣ ፍልስፍና እና ኢኮኖሚክስ' },
    field: 'Social Sciences',
    type: 'Undergraduate',
    countryId: 'uk',
    university: 'University of Oxford',
    logo: 'https://logo.clearbit.com/ox.ac.uk',
    duration: { EN: '3 years', AM: '3 ዓመታት' },
    description: { EN: 'Influential interdisciplinary program shaping global leaders.', AM: 'ዓለም አቀፍ መሪዎችን የሚቀርጽ ተጽእኖ ፈጣሪ ፕሮግራም።' }
  },
  {
    id: 'ss-aau',
    title: { EN: 'BA Social Work', AM: 'የማህበራዊ ስራ የመጀመሪያ ዲግሪ' },
    field: 'Social Sciences',
    type: 'Undergraduate',
    countryId: 'za', // Proxy for Africa
    university: 'Addis Ababa University',
    logo: 'https://logo.clearbit.com/aau.edu.et',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Focuses on community development and social justice.', AM: 'በማህበረሰብ ልማት እና ማህበራዊ ፍትህ ላይ ያተኩራል።' }
  },
  {
    id: 'ss-chicago',
    title: { EN: 'BA Political Science', AM: 'የፖለቲካ ሳይንስ የመጀመሪያ ዲግሪ' },
    field: 'Social Sciences',
    type: 'Undergraduate',
    countryId: 'us',
    university: 'University of Chicago',
    logo: 'https://logo.clearbit.com/uchicago.edu',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Known for rigorous theory and empirical research.', AM: 'በጥብቅ ቲዎሪ እና በተጨባጭ ምርምር ይታወቃል።' }
  },

  // --- NEW ENVIRONMENTAL PROGRAMS ---
  {
    id: 'env-berkeley',
    title: { EN: 'BS Environmental Science', AM: 'የአካባቢ ሳይንስ የመጀመሪያ ዲግሪ' },
    field: 'Environmental',
    type: 'Undergraduate',
    countryId: 'us',
    university: 'UC Berkeley',
    logo: 'https://logo.clearbit.com/berkeley.edu',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Combines ecology, policy, and sustainability.', AM: 'ኢኮሎጂን፣ ፖሊሲን እና ዘላቂነትን ያዋህዳል።' }
  },
  {
    id: 'env-harvard',
    title: { EN: 'Environmental Science & Public Policy', AM: 'የአካባቢ ሳይንስ እና የህዝብ ፖሊሲ' },
    field: 'Environmental',
    type: 'Undergraduate',
    countryId: 'us',
    university: 'Harvard University',
    logo: 'https://logo.clearbit.com/harvard.edu',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Integrates science with policy and ethics.', AM: 'ሳይንስን ከፖሊሲ እና ስነ-ምግባር ጋር ያዋህዳል።' }
  },
  {
    id: 'env-stanford',
    title: { EN: 'Earth Systems Program', AM: 'የምድር ስርዓቶች ፕሮግራም' },
    field: 'Environmental',
    type: 'Undergraduate',
    countryId: 'us',
    university: 'Stanford University',
    logo: 'https://logo.clearbit.com/stanford.edu',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Interdisciplinary approach to climate and sustainability.', AM: 'ለአየር ንብረት እና ዘላቂነት ሁለገብ አቀራረብ።' }
  },
  {
    id: 'env-aau',
    title: { EN: 'MSc Environmental Science', AM: 'የአካባቢ ሳይንስ ማስተርስ' },
    field: 'Environmental',
    type: 'Masters',
    countryId: 'za', // Proxy for Africa
    university: 'Addis Ababa University',
    logo: 'https://logo.clearbit.com/aau.edu.et',
    duration: { EN: '2 years', AM: '2 ዓመታት' },
    description: { EN: 'Focuses on Ethiopian ecosystems and resource management.', AM: 'በኢትዮጵያ ስነ-ምህዳር እና የሀብት አስተዳደር ላይ ያተኩራል።' }
  },
  {
    id: 'env-wageningen',
    title: { EN: 'MSc Environmental Sciences', AM: 'የአካባቢ ሳይንስ ማስተርስ' },
    field: 'Environmental',
    type: 'Masters',
    countryId: 'nl',
    university: 'University of Wageningen',
    logo: 'https://logo.clearbit.com/wur.nl',
    duration: { EN: '2 years', AM: '2 ዓመታት' },
    description: { EN: 'Globally ranked for agricultural and environmental research.', AM: 'በግብርና እና አካባቢ ምርምር ዓለም አቀፍ ደረጃ ያለው።' }
  },

  // --- NEW ARCHAEOLOGY PROGRAMS ---
  {
    id: 'arch-cambridge',
    title: { EN: 'BA Archaeology', AM: 'የአርኪኦሎጂ የመጀመሪያ ዲግሪ' },
    field: 'Archaeology',
    type: 'Undergraduate',
    countryId: 'uk',
    university: 'University of Cambridge',
    logo: 'https://logo.clearbit.com/cam.ac.uk',
    duration: { EN: '3 years', AM: '3 ዓመታት' },
    description: { EN: 'Covers human evolution, ancient civilizations, and fieldwork.', AM: 'የሰው ልጅ ዝግመተ ለውጥን፣ የጥንት ስልጣኔዎችን እና የመስክ ስራን ይሸፍናል።' }
  },
  {
    id: 'arch-oxford',
    title: { EN: 'MSc Archaeological Science', AM: 'የአርኪኦሎጂካል ሳይንስ ማስተርስ' },
    field: 'Archaeology',
    type: 'Masters',
    countryId: 'uk',
    university: 'University of Oxford',
    logo: 'https://logo.clearbit.com/ox.ac.uk',
    duration: { EN: '1 year', AM: '1 ዓመት' },
    description: { EN: 'Focuses on dating, materials analysis, and bioarchaeology.', AM: 'በጊዜ መለኪያ፣ ቁስ ትንተና እና ባዮአርኪኦሎጂ ላይ ያተኩራል።' }
  },
  {
    id: 'arch-ucl',
    title: { EN: 'MA Public Archaeology', AM: 'የህዝብ አርኪኦሎጂ ማስተርስ' },
    field: 'Archaeology',
    type: 'Masters',
    countryId: 'uk',
    university: 'UCL',
    logo: 'https://logo.clearbit.com/ucl.ac.uk',
    duration: { EN: '1 year', AM: '1 ዓመት' },
    description: { EN: 'Explores heritage, museums, and community engagement.', AM: 'ቅርስን፣ ሙዚየሞችን እና የማህበረሰብ ተሳትፎን ይዳስሳል።' }
  },
  {
    id: 'arch-aau',
    title: { EN: 'BA Archaeology & Heritage', AM: 'አርኪኦሎጂ እና ቅርስ አስተዳደር' },
    field: 'Archaeology',
    type: 'Undergraduate',
    countryId: 'za', // Proxy for Africa
    university: 'Addis Ababa University',
    logo: 'https://logo.clearbit.com/aau.edu.et',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Specializes in Ethiopian and African heritage.', AM: 'በኢትዮጵያ እና አፍሪካ ቅርሶች ላይ ያተኩራል።' }
  },
  {
    id: 'arch-leiden',
    title: { EN: 'MA Archaeology', AM: 'የአርኪኦሎጂ ማስተርስ' },
    field: 'Archaeology',
    type: 'Masters',
    countryId: 'nl',
    university: 'University of Leiden',
    logo: 'https://logo.clearbit.com/universiteitleiden.nl',
    duration: { EN: '1-2 years', AM: '1-2 ዓመታት' },
    description: { EN: 'Offers tracks in Mediterranean, Near Eastern, and global archaeology.', AM: 'በሜዲትራኒያን፣ በመካከለኛው ምስራቅ እና በዓለም አቀፍ አርኪኦሎጂ ላይ ያተኩራል።' }
  },

  // --- NEW HISTORY PROGRAMS ---
  {
    id: 'hist-oxford',
    title: { EN: 'BA History', AM: 'የታሪክ የመጀመሪያ ዲግሪ' },
    field: 'History',
    type: 'Undergraduate',
    countryId: 'uk',
    university: 'University of Oxford',
    logo: 'https://logo.clearbit.com/ox.ac.uk',
    duration: { EN: '3 years', AM: '3 ዓመታት' },
    description: { EN: 'Covers medieval to modern global history.', AM: 'ከመካከለኛው ዘመን እስከ ዘመናዊው ዓለም ታሪክን ይሸፍናል።' }
  },
  {
    id: 'hist-harvard',
    title: { EN: 'BA History and Literature', AM: 'የታሪክ እና ስነ-ጽሁፍ የመጀመሪያ ዲግሪ' },
    field: 'History',
    type: 'Undergraduate',
    countryId: 'us',
    university: 'Harvard University',
    logo: 'https://logo.clearbit.com/harvard.edu',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Interdisciplinary study of historical narratives and texts.', AM: 'የታሪካዊ ትረካዎች እና ጽሑፎች ሁለገብ ጥናት።' }
  },
  {
    id: 'hist-cambridge',
    title: { EN: 'BA History', AM: 'የታሪክ የመጀመሪያ ዲግሪ' },
    field: 'History',
    type: 'Undergraduate',
    countryId: 'uk',
    university: 'University of Cambridge',
    logo: 'https://logo.clearbit.com/cam.ac.uk',
    duration: { EN: '3 years', AM: '3 ዓመታት' },
    description: { EN: 'Offers thematic and regional specializations.', AM: 'ጭብጣዊ እና ክልላዊ ስፔሻላይዜሽኖችን ያቀርባል።' }
  },
  {
    id: 'hist-aau',
    title: { EN: 'BA History', AM: 'የታሪክ የመጀመሪያ ዲግሪ' },
    field: 'History',
    type: 'Undergraduate',
    countryId: 'za', // Proxy for Africa
    university: 'Addis Ababa University',
    logo: 'https://logo.clearbit.com/aau.edu.et',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Focuses on Ethiopian and African historical development.', AM: 'በኢትዮጵያ እና አፍሪካ ታሪካዊ እድገት ላይ ያተኩራል።' }
  },
  {
    id: 'hist-chicago',
    title: { EN: 'BA History', AM: 'የታሪክ የመጀመሪያ ዲግሪ' },
    field: 'History',
    type: 'Undergraduate',
    countryId: 'us',
    university: 'University of Chicago',
    logo: 'https://logo.clearbit.com/uchicago.edu',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Known for critical historiography and archival research.', AM: 'በሂሳዊ ታሪክ አጻጻፍ እና በማህደር ጥናት ይታወቃል።' }
  },

  // --- NEW SCIENCE PROGRAMS ---
  {
    id: 'sci-mit',
    title: { EN: 'BS Physics', AM: 'የፊዚክስ የመጀመሪያ ዲግሪ' },
    field: 'Science',
    type: 'Undergraduate',
    countryId: 'us',
    university: 'MIT',
    logo: 'https://logo.clearbit.com/mit.edu',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Cutting-edge research in quantum, astro, and theoretical physics.', AM: 'በኳንተም፣ አስትሮ እና ቲዎሬቲካል ፊዚክስ ዘመናዊ ምርምር።' }
  },
  {
    id: 'sci-stanford',
    title: { EN: 'BS Biology', AM: 'የባዮሎጂ የመጀመሪያ ዲግሪ' },
    field: 'Science',
    type: 'Undergraduate',
    countryId: 'us',
    university: 'Stanford University',
    logo: 'https://logo.clearbit.com/stanford.edu',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Emphasizes molecular biology, ecology, and evolution.', AM: 'ሞለኪውላር ባዮሎጂን፣ ኢኮሎጂን እና ዝግመተ ለውጥን ያጎላል።' }
  },
  {
    id: 'sci-harvard',
    title: { EN: 'BA Chemistry', AM: 'የኬሚስትሪ የመጀመሪያ ዲግሪ' },
    field: 'Science',
    type: 'Undergraduate',
    countryId: 'us',
    university: 'Harvard University',
    logo: 'https://logo.clearbit.com/harvard.edu',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Strong lab training and interdisciplinary research.', AM: 'ጠንካራ የላብራቶሪ ስልጠና እና ሁለገብ ምርምር።' }
  },
  {
    id: 'sci-aau',
    title: { EN: 'BSc Natural Sciences', AM: 'የተፈጥሮ ሳይንስ የመጀመሪያ ዲግሪ' },
    field: 'Science',
    type: 'Undergraduate',
    countryId: 'za', // Proxy for Africa
    university: 'Addis Ababa University',
    logo: 'https://logo.clearbit.com/aau.edu.et',
    duration: { EN: '3-4 years', AM: '3-4 ዓመታት' },
    description: { EN: 'Offers tracks in physics, chemistry, and biology.', AM: 'በፊዚክስ፣ ኬሚስትሪ እና ባዮሎጂ ዘርፎች ትምህርት ይሰጣል።' }
  },
  {
    id: 'sci-toronto',
    title: { EN: 'BSc Computer Science', AM: 'የኮምፒውተር ሳይንስ የመጀመሪያ ዲግሪ' },
    field: 'Science',
    type: 'Undergraduate',
    countryId: 'ca',
    university: 'University of Toronto',
    logo: 'https://logo.clearbit.com/utoronto.ca',
    duration: { EN: '4 years', AM: '4 ዓመታት' },
    description: { EN: 'Leading program in AI, software, and data science.', AM: 'በAI፣ ሶፍትዌር እና ዳታ ሳይንስ መሪ ፕሮግራም።' }
  }
];

export const DESTINATION_DETAILS: DestinationDetailData[] = [
  // ... (rest of the file remains unchanged)
  {
    id: 'default',
    heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    intro: { EN: 'Explore opportunities in this destination.', AM: 'በዚህ መዳረሻ ያሉ እድሎችን ያስሱ።' },
    facts: [
      { id: 'df1', text: { EN: 'Vibrant international student community.', AM: 'ደማቅ ዓለም አቀፍ የተማሪ ማህበረሰብ።' } },
      { id: 'df2', text: { EN: 'Post-graduation work opportunities available.', AM: 'ከምረቃ በኋላ የስራ እድሎች አሉ።' } }
    ],
    requirements: {
      bachelors: {
        title: { EN: 'Bachelor\'s Requirements', AM: 'የመጀመሪያ ዲግሪ መስፈርቶች' },
        items: [
          { name: { EN: 'High School Transcript', AM: 'የሁለተኛ ደረጃ ትራንስክሪፕት' }, required: true },
          { name: { EN: 'Passport', AM: 'ፓስፖርት' }, required: true }
        ]
      },
      masters: {
        title: { EN: 'Master\'s Requirements', AM: 'የማስተርስ መስፈርቶች' },
        items: [
          { name: { EN: 'Bachelor\'s Degree', AM: 'የመጀመሪያ ዲግሪ' }, required: true },
          { name: { EN: 'CV/Resume', AM: 'CV/Resume' }, required: true }
        ]
      }
    }
  },
  {
    id: 'us',
    heroImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80',
    intro: { 
      EN: 'The USA hosts the largest number of international students worldwide, offering diverse educational programs and cutting-edge research opportunities.',
      AM: 'አሜሪካ በዓለም ላይ ትልቁን ቁጥር ያላቸው ዓለም አቀፍ ተማሪዎችን ታስተናግዳለች፤ የተለያዩ የትምህርት ፕሮግራሞችን እና ዘመናዊ የምርምር እድሎችን ትሰጣለች።'
    },
    facts: [
      { id: 'f1', text: { EN: 'Over 4,000 accredited universities.', AM: 'ከ4,000 በላይ እውቅና ያላቸው ዩኒቨርሲቲዎች።' } },
      { id: 'f2', text: { EN: 'OPT allows 1-3 years of work after graduation.', AM: 'OPT ከምረቃ በኋላ ከ1-3 ዓመታት ለመስራት ይፈቅዳል።' } },
      { id: 'f3', text: { EN: 'Flexible curriculum with major/minor options.', AM: 'ተለዋዋጭ ስርዓተ ትምህርት ከዋና/ንዑስ አማራጮች ጋር።' } }
    ],
    requirements: {
      bachelors: {
        title: { EN: 'Undergraduate Admission', AM: 'የቅድመ ምረቃ መግቢያ' },
        items: [
          { name: { EN: 'High School Transcript', AM: 'የሁለተኛ ደረጃ ትራንስክሪፕት' }, required: true },
          { name: { EN: 'SAT/ACT Scores', AM: 'SAT/ACT ውጤቶች' }, required: false },
          { name: { EN: 'English Proficiency (TOEFL/IELTS)', AM: 'የእንግሊዝኛ ችሎታ (TOEFL/IELTS)' }, required: true },
          { name: { EN: 'Personal Essay', AM: 'የግል ድርሰት' }, required: true },
          { name: { EN: 'Letters of Recommendation', AM: 'የምክር ደብዳቤዎች' }, required: true }
        ]
      },
      masters: {
        title: { EN: 'Graduate Admission', AM: 'የድህረ ምረቃ መግቢያ' },
        items: [
          { name: { EN: 'Bachelor\'s Degree', AM: 'የመጀመሪያ ዲግሪ' }, required: true },
          { name: { EN: 'GRE/GMAT Scores', AM: 'GRE/GMAT ውጤቶች' }, required: false },
          { name: { EN: 'Statement of Purpose', AM: 'የዓላማ መግለጫ' }, required: true },
          { name: { EN: 'Resume/CV', AM: 'Resume/CV' }, required: true },
          { name: { EN: '3 Letters of Recommendation', AM: '3 የምክር ደብዳቤዎች' }, required: true }
        ]
      }
    }
  },
  {
    id: 'uk',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    intro: {
      EN: 'Home to some of the world\'s oldest and most prestigious universities, the UK offers shorter degree programs and a rich cultural experience.',
      AM: 'የዓለማችን አንጋፋ እና ታዋቂ ዩኒቨርሲቲዎች መገኛ የሆነችው እንግሊዝ፣ አጭር የዲግሪ ፕሮግራሞችን እና የበለጸገ ባህላዊ ልምድን ትሰጣለች።'
    },
    facts: [
      { id: 'f1', text: { EN: 'Master\'s degrees are typically 1 year.', AM: 'የማስተርስ ዲግሪዎች ብዙውን ጊዜ 1 ዓመት ናቸው።' } },
      { id: 'f2', text: { EN: 'Graduate Route visa allows 2 years work post-study.', AM: 'የድህረ ምረቃ ቪዛ ከትምህርት በኋላ 2 ዓመታት ለመስራት ይፈቅዳል።' } },
      { id: 'f3', text: { EN: 'Free healthcare via NHS surcharge.', AM: 'በ NHS ተጨማሪ ክፍያ ነጻ የጤና አገልግሎት።' } }
    ],
    requirements: {
      bachelors: {
        title: { EN: 'Undergraduate Admission', AM: 'የቅድመ ምረቃ መግቢያ' },
        items: [
          { name: { EN: 'UCAS Application', AM: 'የUCAS ማመልከቻ' }, required: true },
          { name: { EN: 'A-Levels or Foundation Year', AM: 'A-Levels ወይም Foundation Year' }, required: true },
          { name: { EN: 'IELTS UKVI', AM: 'IELTS UKVI' }, required: true },
          { name: { EN: 'Personal Statement', AM: 'የግል መግለጫ' }, required: true }
        ]
      },
      masters: {
        title: { EN: 'Postgraduate Admission', AM: 'የድህረ ምረቃ መግቢያ' },
        items: [
          { name: { EN: 'Bachelor\'s Degree (Honors)', AM: 'የመጀመሪያ ዲግሪ (Honors)' }, required: true },
          { name: { EN: 'Personal Statement', AM: 'የግል መግለጫ' }, required: true },
          { name: { EN: 'Academic References', AM: 'የአካዳሚክ ማጣቀሻዎች' }, required: true },
          { name: { EN: 'IELTS', AM: 'IELTS' }, required: true }
        ]
      }
    }
  }
];
