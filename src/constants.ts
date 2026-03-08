import projectsData from '../projects.json';

export interface Project {
  id: string;
  title: string;
  location: string;
  type: 'Residential' | 'Commercial' | 'Mixed Use';
  status: 'Ongoing' | 'Upcoming' | 'Completed' | 'Consultancy';
  image: string;
  description: string;
  price?: string;
  unitsLeft?: number;
}

// THIS EXACT LINE IS WHAT REACT IS LOOKING FOR
export const projects = projectsData as Project[];

export const featuredProjects = projects.filter(p => p.id.startsWith('fp'));