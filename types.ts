export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl?: string;
}

export interface Skill {
  name: string;
}

export interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string;
  type: 'work' | 'education' | 'certification';
}

// FIX: Add Testimonial interface for the new testimonials data.
export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}
