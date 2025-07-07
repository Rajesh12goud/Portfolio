export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: 'completed' | 'coming-soon';
}

export interface Skill {
  name: string;
  level: number;
  category: 'backend' | 'frontend' | 'devops' | 'cloud';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}