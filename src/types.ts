export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tool';
  icon: string; // Name of Lucide icon
  color: string; // Tailwind accent color or hex representation
}

export interface AboutCard {
  title: string;
  subtitle: string;
  icon: string;
}
