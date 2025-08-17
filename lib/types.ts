import { links } from './data';

export type SectionName = (typeof links)[number]['name'];

export interface TechItem {
  id: number;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: TechItem[];
  demoUrl?: string;
  githubUrl: string;
  featured: boolean;
}
