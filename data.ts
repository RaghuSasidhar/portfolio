import type { Project, Skill, ExperienceItem, Testimonial } from './types';

export const projects: Project[] = [
  {
    title: 'Simple Calculator',
    description: 'A web-based calculator built with fundamental web technologies, capable of performing basic arithmetic operations. A great exercise in handling user input and DOM manipulation.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&q=80',
    projectUrl: '#',
  },
  {
    title: 'Number Guessing Game',
    description: 'An interactive game where the user tries to guess a randomly generated number within a certain number of attempts. This project focuses on logic, state management, and user feedback.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: 'https://images.unsplash.com/photo-1635070049035-5532d56f5255?w=600&q=80',
    projectUrl: '#',
  },
];

export const skillsByCategory: { category: string, skills: Skill[] }[] = [
    {
        category: 'Languages & Core Technologies',
        skills: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }, { name: 'Python' }, { name: 'C/C++' }, { name: 'Excel' }]
    },
    {
        category: 'Areas of Interest',
        skills: [{ name: 'Machine Learning' }, { name: 'Artificial Intelligence (AI)' }, { name: 'Cloud Computing' }]
    },
];

export const experience: ExperienceItem[] = [
  {
    date: 'July 2024 - 2028 (Expected)',
    title: 'Bachelor of Technology - BTech',
    company: 'NRI Institute of Technology, Vijayawada',
    description: 'Pursuing a degree in Computer Science Engineering with a focus on Artificial Intelligence and Machine Learning.',
    type: 'education',
  },
  {
    date: 'June 2022 - June 2024',
    title: 'Intermediate, MPC',
    company: 'siddhartha junior college',
    description: 'Completed intermediate education with a focus on Mathematics, Physics, and Chemistry.',
    type: 'education',
  },
  {
    date: 'March 2021 - April 2022',
    title: 'SSC',
    company: 'Kumar [E.M] school',
    description: 'Completed Secondary School Certificate education.',
    type: 'education',
  },
   {
    date: 'Certification',
    title: 'Introduction to HTML',
    company: 'Training',
    description: 'Gained foundational knowledge of HTML for structuring web content.',
    type: 'certification',
  },
  {
    date: 'Certification',
    title: 'Python for Beginners: Variables and Strings',
    company: 'Training',
    description: 'Learned the basics of Python programming, including variables and string manipulation.',
    type: 'certification',
  },
  {
      date: 'Certification',
      title: 'Python for Beginners: Data Structures',
      company: 'Training',
      description: 'Explored fundamental data structures in Python to organize and manage data effectively.',
      type: 'certification',
  },
  {
    date: 'Certification',
    title: 'Presentation Skills',
    company: 'Training',
    description: 'Developed skills for effective and engaging presentations.',
    type: 'certification',
  },
  {
    date: 'Certification',
    title: 'Placement Prep',
    company: 'Training',
    description: 'Underwent training for placement interviews and professional readiness.',
    type: 'certification',
  },
];

// FIX: Add and export testimonials data to resolve the import error in Testimonials.tsx.
export const testimonials: Testimonial[] = [
    {
        quote: "Working with Raghu was a pleasure. His dedication and problem-solving skills are top-notch. He delivered an excellent product on time.",
        name: "Jane Doe",
        company: "Tech Solutions Inc."
    },
    {
        quote: "Raghu is a quick learner and a great team player. His passion for technology is evident in the quality of his work.",
        name: "John Smith",
        company: "Innovate Co."
    },
    {
        quote: "An incredibly talented developer. Raghu's attention to detail and creative approach were instrumental to our project's success.",
        name: "Emily White",
        company: "Creative Minds"
    }
];
