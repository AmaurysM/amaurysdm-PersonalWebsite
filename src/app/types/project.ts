export type ProjectCategory = "web" | "mobile" | "desktop" | "backend";

export type Project = {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  githubLink: string;
  otherLink?: string;
  isInternalLink?: boolean;
  showcaseLink?: string;
  category: ProjectCategory;
  featured?: boolean;
  image: string;
};