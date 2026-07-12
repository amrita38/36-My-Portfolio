import { Project, Skill, AboutCard } from './types';

export const aboutCards: AboutCard[] = [
  {
    title: "Student",
    subtitle: "Diploma in CSE at Behragora Polytechnic",
    icon: "GraduationCap"
  },
  {
    title: "MERN Developer",
    subtitle: "Full-stack web developer with MongoDB, Express, React, Node",
    icon: "Code2"
  },
  {
    title: "Problem Solver",
    subtitle: "Constantly engineering clean answers to real-world tasks",
    icon: "BrainCircuit"
  },
  {
    title: "Fast Learner",
    subtitle: "Continuous tech adapter ready to contribute",
    icon: "Zap"
  }
];

export const skillsData: Skill[] = [
  // Frontend
  { name: "HTML", category: "frontend", icon: "FileCode2", color: "from-orange-500 to-amber-600" },
  { name: "CSS", category: "frontend", icon: "Palette", color: "from-blue-500 to-indigo-600" },
  { name: "Tailwind CSS", category: "frontend", icon: "Wind", color: "from-cyan-400 to-teal-500" },
  { name: "JavaScript", category: "frontend", icon: "FileJson", color: "from-yellow-400 to-amber-500" },
  { name: "TypeScript", category: "frontend", icon: "Shield", color: "from-blue-600 to-indigo-700" },
  { name: "React", category: "frontend", icon: "Atom", color: "from-cyan-500 to-blue-500" },
  { name: "Next.js", category: "frontend", icon: "Layers", color: "from-zinc-300 to-zinc-600" },
  
  // Backend & DB
  { name: "Node.js", category: "backend", icon: "Cpu", color: "from-green-500 to-emerald-600" },
  { name: "Express.js", category: "backend", icon: "Terminal", color: "from-zinc-400 to-zinc-700" },
  { name: "MongoDB", category: "database", icon: "Database", color: "from-emerald-600 to-green-700" },
  { name: "Prisma", category: "backend", icon: "Link2", color: "from-indigo-500 to-purple-600" },
  { name: "SQL", category: "database", icon: "Table2", color: "from-sky-500 to-indigo-600" },
  
  // Tools
  { name: "Git", category: "tool", icon: "GitBranch", color: "from-orange-600 to-red-700" },
  { name: "GitHub", category: "tool", icon: "Github", color: "from-neutral-700 to-neutral-950" },
  { name: "Postman", category: "tool", icon: "Mail", color: "from-orange-400 to-amber-600" },
  { name: "VS Code", category: "tool", icon: "Laptop", color: "from-blue-500 to-sky-600" }
];

export const projectsData: Project[] = [
  {
    id: "1",
    name: "WebLance",
    description: "Modern freelance platform connecting clients and developers with a responsive dashboard and clean UI.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com/amrita38",
    live: "#"
  },
  {
    id: "2",
    name: "Todo App",
    description: "Task management application with authentication, CRUD operations, filters, and responsive design.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/amrita38",
    live: "#"
  },
  {
    id: "3",
    name: "Netflix Clone",
    description: "Netflix-inspired movie streaming interface with responsive UI and dynamic movie browsing.",
    stack: ["React", "Tailwind CSS", "API"],
    github: "https://github.com/amrita38",
    live: "#"
  }
];
