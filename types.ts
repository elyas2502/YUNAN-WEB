
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
  image: string;
  id: string;
  continent: Continent;
}

export type OpportunityCategory = 'Masters' | 'PhD' | 'Undergraduate' | 'Internship' | 'Fellowship' | 'Short Course' | 'Research';

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
  availablePrograms?: string[];
  url?: string;
}

export interface Program {
  id: string;
  title: LocalizedString;
  field: 'Medicine' | 'Engineering' | 'Business' | 'Computer Science' | 'Arts' | 'Law' | 'Social Sciences' | 'Environmental' | 'Archaeology';
  type: 'Undergraduate' | 'Internship' | 'Research' | 'Postgraduate';
  countryId: string;
  university: string;
  duration: LocalizedString;
  description: LocalizedString;
}
