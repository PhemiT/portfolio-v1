export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "Python"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Express.js", "NestJS", "Angular"]
  },
  {
    category: "Web3 & Blockchain",
    skills: ["Move (Sui Network)", "Motoko (Internet Computer)", "Smart Contracts"]
  },
  {
    category: "Databases & Storage",
    skills: ["MongoDB", "PostgreSQL", "Supabase", "SQL"]
  },
  {
    category: "Styling & UI",
    skills: ["TailwindCSS", "SCSS / SASS", "CSS Modules", "MUI", "Styled Components"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Git & GitHub", "Cloudflare", "Azure", "Docker", "REST APIs"]
  }
];

export const highlights = [
  { label: "Experience", value: "4+ Years" },
  { label: "Focus", value: "Fullstack & Web3" },
  { label: "Location", value: "Lagos, Nigeria" },
  { label: "Status", value: "Available for Hire" }
];
