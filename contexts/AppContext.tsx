
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
  'nav.success': { EN: 'Success Stories', AM: 'የስኬት ታሪኮች' },
  'nav.contact': { EN: 'Contact Us', AM: 'ያግኙን' },
  'nav.book': { EN: 'Book Session', AM: 'ቀጠሮ ይያዙ' },
  'nav.destinations': { EN: 'Destinations', AM: 'መዳረሻዎች' },
  
  // Home Page
  'hero.tag': { EN: "Mihret Bekalu | Visa Form and Consultancy", AM: "ምህረት በቃሉ | የቪዛ ቅጽ እና አማካሪ" },
  'hero.title': { EN: "Your Bridge", AM: "ወደ ዓለም" },
  'hero.accent': { EN: "To The World.", AM: "የሚያገናኝ ድልድይ።" },
  'hero.sub': { EN: "We don’t just process visas—we design pathways.", AM: "ቪዛ ብቻ አናሰራም - መንገድ እንቀይሳለን።" },
  'hero.desc': { EN: "We make the complex simple. With honesty and care, we guide you through every step of your journey. We find success where others find only problems.", AM: "ውስብስብ ሂደቶችን ቀላል እናደርጋለን። በታማኝነት እና በጥንቃቄ በእያንዳንዱ የጉዞዎ ደረጃ እንመራዎታለን። ሌሎች ችግር በሚያዩበት ቦታ እኛ መፍትሄ እናገኛለን።" },
  'hero.cta.consult': { EN: 'Consult Now', AM: 'አሁኑኑ ያማክሩ' },
  
  'home.pillars': { EN: 'Our Pillars of Excellence', AM: 'የላቀ አገልግሎታችን ምሰሶዎች' },
  'home.mastery': { EN: 'Mastery in Every Field.', AM: 'በሁሉም ዘርፍ ልህቀት።' },
  'home.dip_lane': { EN: 'How It Works?', AM: 'እንዴት እንደሚሰራ?' },
  'home.dip_desc': { EN: 'We turn complex global procedures into a streamlined roadmap for your success.', AM: 'ውስብስብ ዓለም አቀፍ ሂደቶችን ለስኬትዎ ወደሚያመች ቀለል ያለ ካርታ እንቀይራለን።' },
  'home.learn_more': { EN: 'Learn More', AM: 'ተጨማሪ እወቅ' },
  'home.ethical_leader': { EN: 'Ethical Leadership', AM: 'ስነ-ምግባራዊ መሪነት' },
  'home.future_quote': { EN: '"Defining the future of Ethiopian travel."', AM: '"የኢትዮጵያን የጉዞ የወደፊት ዕጣ ፈንታ መወሰን።"' },
  'home.us_specialist': { EN: 'US Embassy Specialist', AM: 'የአሜሪካ ኤምባሲ ስፔሻሊስት' },
  'home.ethical_guide': { EN: 'Ethical Guidance', AM: 'ስነ-ምግባራዊ መመሪያ' },
  'home.stage_label': { EN: 'Stage', AM: 'ደረጃ' },
  
  // Trust Section (Updated)
  'section.ethos': { EN: 'Mastery in Motion', AM: 'ተግባራዊ ልህቀት' },
  'section.integrity': { EN: 'Why Professionals', AM: 'ባለሙያዎች ለምን' },
  'section.trust': { EN: 'Trust Us.', AM: 'ያምናሉናል።' },
  'section.desc': { EN: "Our approach is built on deep expertise, ethical practice, and personalized strategy. Whether you're pursuing world class education or international travel, we provide authoritative guidance that ensures you move forward with confidence.", AM: "አቀራረባችን በጥልቅ እውቀት፣ በስነ-ምግባራዊ አሰራር እና በግላዊ ስትራቴጂ ላይ የተገነባ ነው። ለዓለም አቀፍ ደረጃ ትምህርትም ሆነ ለጉዞ፣ በራስ መተማመን ወደፊት እንዲራመዱ የሚያስችል ስልጣን ያለው መመሪያ እንሰጣለን።" },
  
  // Trust Points
  'trust.excellence': { EN: 'Proven Excellence', AM: 'የተረጋገጠ ልህቀት' },
  'trust.desc_excellence': { EN: 'A documented record of successful visa approvals and university placements.', AM: 'በተሳኩ የቪዛ ማጽደቆች እና የዩኒቨርሲቲ ምደባዎች የተረጋገጠ ታሪክ።' },
  'trust.ethical': { EN: 'Ethical & Transparent', AM: 'ስነ-ምግባራዊ እና ግልጽ' },
  'trust.desc_ethical': { EN: 'No registration fees. No hidden costs. Just honest, clear counsel.', AM: 'ምንም የምዝገባ ክፍያ የለም። ድብቅ ወጪዎች የሉም። ታማኝ እና ግልጽ ምክር ብቻ።' },
  'trust.insight': { EN: 'Strategic Insight', AM: 'ስትራቴጂካዊ ግንዛቤ' },
  'trust.desc_insight': { EN: 'We anticipate challenges, navigate regulations, and position your application for success.', AM: 'ተግዳሮቶችን አስቀድመን እንገምታለን፣ ደንቦችን እንረዳለን፣ እና ማመልከቻዎን ለስኬት እንዲበቃ እናዘጋጃለን።' },
  'trust.partnership': { EN: 'Dedicated Partnership', AM: 'ቁርጠኛ አጋርነት' },
  'trust.desc_partnership': { EN: 'From initial consultation to final approval, you receive focused, professional support.', AM: 'ከመጀመሪያው ምክክር እስከ መጨረሻው ፍቃድ፣ ትኩረት የተሰጠው እና ሙያዊ ድጋፍ ያገኛሉ።' },

  // Bottom CTA
  'home.cta_auth_title': { EN: 'Begin Your Application with Confidence', AM: 'ማመልከቻዎን በልበ ሙሉነት ይጀምሩ' },
  'home.cta_auth_desc': { EN: 'Partner with a consultancy that masters the details and honors your ambition.', AM: 'ዝርዝሮችን በሚገባ ከሚያውቅ እና ራዕይዎን ከሚያከብር አማካሪ ጋር ይስሩ።' },
  'home.cta_btn': { EN: 'Start Now', AM: 'አሁን ይጀምሩ' },

  // Footer
  'footer.specialized': { EN: 'Specialized advisory and travel consultancy located directly in front of the US Embassy in Addis Ababa.', AM: 'ልዩ የምክር እና የጉዞ አማካሪ አገልግሎት፣ አዲስ አበባ የሚገኘው የአሜሪካ ኤምባሲ ፊት ለፊት።' },
  'footer.headquarters': { EN: 'Office Location', AM: 'ቢሮ አድራሻ' },
  'footer.phone': { EN: 'Phone', AM: 'ስልክ' },
  'footer.email': { EN: 'Email', AM: 'ኢሜይል' },
  'footer.discover': { EN: 'Discover', AM: 'ይጎብኙ' },
  'footer.hours': { EN: 'Office Hours', AM: 'የስራ ሰዓት' },
  'footer.mon_fri': { EN: 'Monday - Friday', AM: 'ሰኞ - አርብ' },
  'footer.sat': { EN: 'Saturday', AM: 'ቅዳሜ' },
  'footer.sun': { EN: 'Sunday', AM: 'እሁድ' },
  'footer.closed': { EN: 'Closed', AM: 'ዝግ ነው' },
  'footer.terms_text': { EN: 'By accessing our services, you agree to our terms of service regarding visa processing and consultancy fees.', AM: 'አገልግሎቶቻችንን ሲጠቀሙ፣ የቪዛ ሂደት እና የአማካሪ ክፍያዎችን በሚመለከት በውሎቻችን ለመስማማት ይገደዳሉ።' },
  'footer.global_access': { EN: 'Global Access. Ethiopian Excellence. Professional Guidance You Can Trust.', AM: 'ዓለም አቀፍ ተደራሽነት። የኢትዮጵያ ልህቀት። የሚታመን ሙያዊ መመሪያ።' },
  'footer.rights': { EN: 'All Rights Reserved.', AM: 'መብቱ በህግ የተጠበቀ ነው።' },
  'footer.subscribe': { EN: 'Join Our Newsletter', AM: 'የጋዜጣችን ተከታይ ይሁኑ' },
  'footer.subscribe_desc': { EN: 'Receive scholarship alerts, visa updates, and travel news directly.', AM: 'የስኮላርሺፕ ማንቂያዎችን፣ የቪዛ መረጃዎችን እና የጉዞ ዜናዎችን በቀጥታ ያግኙ።' },
  'footer.email_placeholder': { EN: 'Your email address', AM: 'የኢሜይል አድራሻዎ' },
  'footer.subscribe_btn': { EN: 'Subscribe', AM: 'ይመዝገቡ' },

  // Contact
  'contact.visit_us': { EN: 'Visit Us', AM: 'ይጎብኙን' },
  'contact.title': { EN: 'Start Your', AM: 'ጀምር የእርስዎን' },
  'contact.subtitle': { EN: 'Global Journey.', AM: 'ዓለም አቀፍ ጉዞ።' },
  'contact.intro': { EN: 'We welcome students, professionals, and families across Ethiopia seeking trusted international guidance. Schedule a consultation to discuss your education, scholarship, or travel goals with our professional advisors.', AM: 'ታማኝ ዓለም አቀፍ መመሪያ የሚፈልጉ ተማሪዎችን፣ ባለሙያዎችን እና ቤተሰቦችን እንቀበላለን። የትምህርት፣ የስኮላርሺፕ ወይም የጉዞ ግቦችዎን ከሙያ አማካሪዎቻችን ጋር ለመወያየት ቀጠሮ ይያዙ።' },
  'contact.location': { EN: 'Office Location', AM: 'ቢሮ አድራሻ' },
  'contact.direct': { EN: 'Direct Lines', AM: 'ቀጥታ መስመሮች' },
  'contact.inquiry': { EN: 'Email Inquiry', AM: 'ኢሜይል ጥያቄ' },
  'contact.confidential': { EN: '100% Confidential', AM: '100% ሚስጥራዊ' },
  'contact.respect': { EN: 'Professional Respect', AM: 'ሙያዊ ክብር' },
  'contact.commitment': { EN: 'Client Commitment', AM: 'የደንበኛ ቁርጠኝነት' },
  'contact.comm_desc': { EN: 'Every inquiry is handled with confidentiality, accuracy, and respect for your international aspirations.', AM: 'እያንዳንዱ ጥያቄ በሚስጥራዊነት፣ በትክክለኛነት እና ለዓለም አቀፍ ምኞቶችዎ አክብሮት ባለው መልኩ ይስተናገዳል።' },

  // Book
  'book.booking': { EN: 'Consultation Booking', AM: 'የምክክር ቀጠሮ' },
  'book.plan': { EN: 'Plan Your', AM: 'ዕቅድ ያውጡ' },
  'book.move': { EN: 'Next Move.', AM: 'ቀጣይ እርምጃ።' },
  'book.name_label': { EN: 'Full Name', AM: 'ሙሉ ስም' },
  'book.phone_label': { EN: 'Phone Number', AM: 'ስልክ ቁጥር' },
  'book.date_label': { EN: 'Preferred Date', AM: 'ተመራጭ ቀን' },
  'book.cta_payment': { EN: 'Proceed to Payment', AM: 'ወደ ክፍያ ይቀጥሉ' },
  'book.cta_finalize': { EN: 'Finalize Booking', AM: 'ቀጠሮውን ያረጋግጡ' },
  'book.booking_seat': { EN: 'Booking Seat...', AM: 'ቦታ በመያዝ ላይ...' },
  'book.back': { EN: 'Back', AM: 'ተመለስ' },
  'book.summary': { EN: 'Booking Summary', AM: 'የቀጠሮ ማጠቃለያ' },
  'book.step': { EN: 'Step', AM: 'ደረጃ' },
  'book.of': { EN: 'of', AM: 'ከ' },
  'book.pillar': { EN: 'Selected Pillar', AM: 'የተመረጠው አገልግሎት' },
  'book.confidential': { EN: 'Confidential Session', AM: 'ሚስጥራዊ ቆይታ' },
  'book.zero_reg': { EN: 'Zero Registration Fee', AM: 'ምንም የምዝገባ ክፍያ የለም' },
  'book.confirmed': { EN: 'Confirmed!', AM: 'ተረጋግጧል!' },
  'book.success_msg': { EN: "Details have been sent to your email. We look forward to seeing you.", AM: "ዝርዝሩ በኢሜይልዎ ተልኳል። ለማየት በጉጉት እንጠብቃለን።" },
  'book.join_tg': { EN: 'Join Telegram', AM: 'ቴሌግራም ይቀላቀሉ' },
  'book.back_home': { EN: 'Back to Home', AM: 'ወደ መነሻ ይመለሱ' },
  'book.info_msg': { EN: 'You are booking a dedicated session. Payment instructions for your selected method will be provided after confirmation.', AM: 'ልዩ የምክክር ጊዜ እየያዙ ነው። የመረጡት የክፍያ ዘዴ ዝርዝር ቀጠሮውን ካረጋገጡ በኋላ ይላክልዎታል።' },
  'book.cash_office': { EN: 'Cash at Office', AM: 'በቢሮ በካሽ' },
  'book.service_includes': { EN: 'Includes:', AM: 'የሚያካትተው፡' },

  // About
  'about.story': { EN: 'The Mihret Bekalu Story', AM: 'የምህረት በቃሉ ታሪክ' },
  'about.title': { EN: 'Global Access.', AM: 'ዓለም አቀፍ ተደራሽነት።' },
  'about.subtitle': { EN: 'Ethiopian Excellence.', AM: 'የኢትዮጵያ ልህቀት።' },
  'about.desc1': { EN: 'Mihret Bekalu Travel and Consultancy was founded to bridge global opportunities with Ethiopian potential. The company was established with a clear mission: to provide Ethiopians with accurate, ethical, and professional access to international education and travel opportunities.', AM: 'ምህረት በቃሉ የጉዞ እና አማካሪ ድርጅት የተመሰረተው ዓለም አቀፍ እድሎችን ከኢትዮጵያ እምቅ አቅም ጋር ለማገናኘት ነው። ኩባንያው የተቋቋመው ግልጽ ተልዕኮ ይዞ ነው፡ ለኢትዮጵያውያን ትክክለኛ፣ ስነ-ምግባራዊ እና ሙያዊ የሆነ ዓለም አቀፍ የትምህርት እና የጉዞ እድሎችን ማመቻቸት።' },
  'about.desc2': { EN: 'We understand the challenges Ethiopian applicants face — documentation, eligibility clarity, and process complexity — and we provide solutions rooted in experience and research.', AM: 'የኢትዮጵያ አመልካቾች የሚገጥሟቸውን ተግዳሮቶች ማለትም የሰነድ አያያዝ፣ የብቁነት ግልጽነት እና የሂደት ውስብስብነትን እንረዳለን። በመሆኑም በልምድ እና በጥናት ላይ የተመሰረቱ መፍትሄዎችን እናቀርባለን።' },
  'about.mission': { EN: 'Our Mission', AM: 'ተልዕኳችን' },
  'about.mission_desc': { EN: 'To empower Ethiopians with reliable access to international education, scholarships, and travel opportunities through professional advisory services.', AM: 'በሙያዊ የምክር አገልግሎቶች አማካኝነት ኢትዮጵያውያን አስተማማኝ ዓለም አቀፍ የትምህርት፣ የስኮላርሺፕ እና የጉዞ እድሎችን እንዲያገኙ ማስቻል።' },
  'about.vision': { EN: 'Our Vision', AM: 'ራዕያችን' },
  'about.vision_desc': { EN: 'To become one of Ethiopia’s most trusted and internationally recognized travel and education consultancy firms.', AM: 'በኢትዮጵያ ውስጥ በጣም ታማኝ እና በዓለም አቀፍ ደረጃ ተቀባይነት ካላቸው የጉዞ እና የትምህርት አማካሪ ድርጅቶች አንዱ መሆን።' },
  'about.values': { EN: 'Our Core Values', AM: 'እሴቶቻችን' },
  'about.advisors': { EN: 'Meet Our Advisors', AM: 'አማካሪዎቻችንን ይወቁ' },
  'about.leadership': { EN: 'Our Leadership Team.', AM: 'የአመራር ቡድናችን።' },
  'about.leadership_desc': { EN: 'Our advisory team consists of experienced professionals committed to delivering accurate, ethical, and personalized guidance.', AM: 'የእኛ አማካሪ ቡድን ትክክለኛ፣ ስነ-ምግባራዊ እና ግላዊ መመሪያ ለመስጠት በቁርጠኝነት የሚሰሩ ልምድ ያላቸው ባለሙያዎችን ያቀፈ ነው።' },

  // Destinations
  'dest.network': { EN: 'Global Network', AM: 'ዓለም አቀፍ አውታረ መረብ' },
  'dest.count': { EN: '120+ Countries.', AM: '120+ ሀገራት።' },
  'dest.horizons': { EN: 'Limitless Horizons.', AM: 'ወሰን የለሽ አድማስ።' },
  'dest.desc': { EN: 'From the tech hubs of North America to the historical heart of Europe, our consultancy bridges Ethiopia with the globe.', AM: 'ከሰሜን አሜሪካ የቴክኖሎጂ ማዕከላት እስከ አውሮፓ ታሪካዊ ቦታዎች፣ ድርጅታችን ኢትዮጵያን ከዓለም ጋር ያገናኛል።' },
  'dest.regions': { EN: 'All Regions', AM: 'ሁሉም ክልሎች' },
  'dest.search': { EN: 'Search...', AM: 'ይፈልጉ...' },
  'dest.explore': { EN: 'Explore Requirements', AM: 'መስፈርቶችን ያስሱ' },
  'dest.no_match': { EN: 'No matching horizons found.', AM: 'የሚዛመድ ውጤት አልተገኘም።' },
  'dest.reset': { EN: 'Reset Search', AM: 'ፍለጋን ዳግም ያስጀምሩ' },
  'dest.back': { EN: 'Back to Destinations', AM: 'ወደ መዳረሻዎች ይመለሱ' },
  'dest.study_in': { EN: 'Study in', AM: 'ትምህርት በ' },
  'dest.facts': { EN: 'Key Facts for International Students', AM: 'ለዓለም አቀፍ ተማሪዎች ቁልፍ እውነታዎች' },
  'dest.req_docs': { EN: 'Required Documents:', AM: 'አስፈላጊ ሰነዶች፡' },
  'dest.checklist': { EN: 'Checklist', AM: 'ማረጋገጫ ዝርዝር' },
  'dest.apply': { EN: 'Apply for', AM: 'አመልክት ለ' },
  'dest.partners': { EN: 'Partner Institutions', AM: 'አጋር ተቋማት' },
  'dest.partners_desc': { EN: 'We work with top tier universities. Book a consultation to find the perfect match for your academic profile.', AM: 'ከከፍተኛ ደረጃ ዩኒቨርሲቲዎች ጋር እንሰራለን። ለትምህርት መገለጫዎ ትክክለኛውን ተቋም ለማግኘት ቀጠሮ ይያዙ።' },
  'dest.find_uni': { EN: 'Find My University', AM: 'ዩኒቨርሲቲ ይፈልጉልኝ' },

  // Services
  'serv.title': { EN: 'Our Services', AM: 'አገልግሎቶቻችን' },
  'serv.hero': { EN: 'Expert Consultancy', AM: 'የባለሙያ ምክክር' },
  'serv.hero_sub': { EN: 'for Every Journey.', AM: 'ለእያንዳንዱ ጉዞ።' },
  'serv.pillar': { EN: 'Pillar', AM: 'ምሰሶ' },
  'serv.initiate': { EN: 'Initiate Process', AM: 'ሂደቱን ያስጀምሩ' },
  'serv.stories': { EN: 'Success Stories', AM: 'የስኬት ታሪኮች' },
  'serv.voices': { EN: 'Voices of Victory.', AM: 'የድል ድምፆች።' },
  'serv.stories_desc': { EN: 'Real journeys. Real results. Meet the ambitious Ethiopians who turned their global aspirations into reality.', AM: 'እውነተኛ ጉዞዎች። እውነተኛ ውጤቶች። ዓለም አቀፍ ምኞታቸውን ወደ እውነታ የለወጡትን ኢትዮጵያውያን ይወቁ።' },
  'serv.guidance': { EN: 'Professional Guidance You Can Trust.', AM: 'የሚታመን ሙያዊ መመሪያ።' },
  'serv.guidance_desc': { EN: 'Our team ensures every client receives dependable guidance from consultation to completion.', AM: 'ቡድናችን እያንዳንዱ ደንበኛ ከምክክር እስከ ፍጻሜው ድረስ አስተማማኝ መመሪያ ማግኘቱን ያረጋግጣል።' },
  'serv.view_roadmap': { EN: 'View Detailed Roadmap', AM: 'ዝርዝር ካርታ ይመልከቱ' },

  // Programs & Scholarships
  'prog.elite': { EN: 'Elite', AM: 'ምርጥ' },
  'prog.tracks': { EN: 'Academic Tracks.', AM: 'የትምህርት መስመሮች።' },
  'prog.desc': { EN: 'Bridging Ethiopian potential with world class Undergraduate, Research, and Internship opportunities across 6 continents.', AM: 'የኢትዮጵያን አቅም በ6 አህጉራት ካሉ ዓለም አቀፍ የቅድመ ምረቃ፣ የምርምር እና የልምምድ እድሎች ጋር ማገናኘት።' },
  'prog.filter_type': { EN: 'Filter by Opportunity Type', AM: 'በእድል አይነት አጣራ' },
  'prog.filter_field': { EN: 'Filter by Academic Field', AM: 'በትምህርት ዘርፍ አጣራ' },
  'prog.custom': { EN: 'Custom Track?', AM: 'ልዩ ፍላጎት?' },
  'prog.custom_desc': { EN: 'We architect bespoke institutional paths for unique academic profiles.', AM: 'ለልዩ የትምህርት መገለጫዎች ብጁ የተቋም መስመሮችን እንነድፋለን።' },
  'prog.speak': { EN: 'Speak with Expert', AM: 'ባለሙያ ያነጋግሩ' },
  'prog.search': { EN: 'Search university, landmark theme or program...', AM: 'ዩኒቨርሲቲ ወይም ፕሮግራም ይፈልጉ...' },
  'prog.initiate': { EN: 'Initiate Application', AM: 'ማመልከቻ ያስጀምሩ' },
  'prog.no_match': { EN: 'No matching tracks found.', AM: 'ምንም ተዛማጅ መስመሮች አልተገኙም።' },
  'prog.reset': { EN: 'Reset Global Search', AM: 'ፍለጋን ዳግም ያስጀምሩ' },
  'prog.all': { EN: 'All Fields', AM: 'ሁሉም ዘርፎች' },

  'schol.global': { EN: 'Global Education Opportunities', AM: 'ዓለም አቀፍ የትምህርት እድሎች' },
  'schol.title': { EN: 'Scholarships & Internships.', AM: 'ስኮላርሺፕ እና ልምምዶች።' },
  'schol.search': { EN: 'Search programs...', AM: 'ፕሮግራሞችን ይፈልጉ...' },
  'schol.funding': { EN: 'Funding Status', AM: 'የድጋፍ ሁኔታ' },
  'schol.no_match': { EN: 'No matching scholarships found.', AM: 'ምንም ተዛማጅ ስኮላርሺፕ አልተገኘም።' },
  
  // Success Stories
  'success.voices': { EN: 'Voices of', AM: 'የድል' },
  'success.victory': { EN: 'Victory.', AM: 'ድምፆች።' },
  'success.desc': { EN: 'Real journeys. Real results. Meet the ambitious Ethiopians who turned their global aspirations into reality with our strategic guidance.', AM: 'እውነተኛ ጉዞዎች። እውነተኛ ውጤቶች። በስትራቴጂካዊ መመሪያችን ዓለም አቀፍ ምኞታቸውን ወደ እውነታ የለወጡትን ኢትዮጵያውያን ይወቁ።' },
  'success.visas': { EN: 'Visas Approved', AM: 'የተፈቀዱ ቪዛዎች' },
  'success.won': { EN: 'Scholarships Won', AM: 'የተገኙ ስኮላርሺፖች' },
  'success.reached': { EN: 'Countries Reached', AM: 'የተደረሰባቸው ሀገራት' },
  'success.rate': { EN: 'Success Rate', AM: 'የስኬት መጠን' },
  'success.next': { EN: 'Be the Next Story.', AM: 'ቀጣዩ ታሪክ እርስዎ ይሁኑ።' },
  'success.next_desc': { EN: 'Your journey to a global education begins with a single conversation. Let us draft your roadmap to success.', AM: 'ወደ ዓለም አቀፍ ትምህርት የሚያደርጉት ጉዞ በአንድ ንግግር ይጀምራል። የስኬት መንገድዎን እንንደፍ።' },
  'success.start': { EN: 'Start Application', AM: 'ማመልከቻ ይጀምሩ' },
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
