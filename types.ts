
import { LucideIcon } from 'lucide-react';

export interface LocalizedString {
  EN: string;
  AM: string;
}

export interface Service {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: LucideIcon;
  details: LocalizedString[];
  image?: string;
}

export interface Consultant {
  id: string;
  name: string;
  role: LocalizedString;
  bio: LocalizedString;
  image: string;
}

export type Continent = 'Africa' | 'Asia' | 'Europe' | 'North America' | 'South America' | 'Oceania' | 'Middle East';

export interface Country {
  name: LocalizedString;
  flag: string;
  image?: string;
  id: string;
  continent: Continent;
  theme?: string;
}

export interface DestinationGroup {
  continent: Continent;
  countries: Country[];
}

export type OpportunityCategory = 'Masters' | 'PhD' | 'Undergraduate' | 'Internship' | 'Fellowship' | 'Short Course' | 'Research' | 'Professional';

export interface Scholarship {
  id: string;
  title: LocalizedString;
  provider: string; 
  location: string;
  type: LocalizedString; 
  level: LocalizedString;
  description: LocalizedString;
  deadline?: LocalizedString;
  image?: string;
  category: OpportunityCategory;
  tags: string[]; 
  url?: string;
}

export interface Program {
  id: string;
  title: LocalizedString;
  field: 'Medicine' | 'Engineering' | 'Business' | 'Computer Science' | 'Arts' | 'Law' | 'Social Sciences' | 'Environmental' | 'Archaeology' | 'Tourism' | 'History' | 'Science' | 'Mathematics';
  type: 'Undergraduate' | 'Internship' | 'Research' | 'Masters' | 'PhD' | 'Professional';
  countryId: string;
  university: string;
  logo?: string;
  duration: LocalizedString;
  description: LocalizedString;
}

// --- NEW TYPES FOR DESTINATION DETAIL ---

export interface DestinationFact {
  id: string;
  text: LocalizedString;
}

export interface DocumentItem {
  name: LocalizedString;
  required: boolean;
}

export interface DegreeRequirement {
  title: LocalizedString;
  items: DocumentItem[];
}

export interface DestinationDetailData {
  id: string; // Matches Country ID
  heroImage: string;
  intro: LocalizedString;
  facts: DestinationFact[];
  requirements: {
    bachelors: DegreeRequirement;
    masters: DegreeRequirement;
    phd?: DegreeRequirement;
  };
}
