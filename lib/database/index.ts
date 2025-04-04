export type SkillItem = {
  title: string;
  description: string;
  iconName: string;
  technologies: string[];
};

export const skills: SkillItem[] = [
  {
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces',
    iconName: 'Layout',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Material UI',
      'Bootstrap',
      'SASS/SCSS',
    ],
  },
  {
    title: 'Backend Development',
    description: 'Building robust server-side applications',
    iconName: 'Server',
    technologies: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Python'],
  },
  {
    title: 'Database Management',
    description: 'Working with various database systems',
    iconName: 'Database',
    technologies: [
      'MongoDB',
      'MySQL',
      'PostgreSQL',
      'Firebase',
      'Redis',
      'SQLite',
      'Supabase',
    ],
  },
  {
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile applications',
    iconName: 'Smartphone',
    technologies: [
      'React Native',
      'Mobile-First Design',
      'Progressive Web Apps',
      'App Store Optimization',
    ],
  },
  {
    title: 'Programming Languages',
    description: 'Proficient in multiple programming languages',
    iconName: 'Code',
    technologies: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
  },
  {
    title: 'Cloud Services',
    description: 'Deploying and managing applications in the cloud',
    iconName: 'Cloud',
    technologies: ['AWS', 'Google Cloud', 'Vercel', 'Heroku', 'Docker'],
  },
  {
    title: 'Security',
    description: 'Implementing security best practices',
    iconName: 'Shield',
    technologies: [
      'Authentication',
      'Authorization',
      'Data Encryption',
      'HTTPS',
      'Input Validation',
    ],
  },
  {
    title: 'DevOps',
    description: 'Streamlining development and deployment processes',
    iconName: 'Terminal',
    technologies: ['Git', 'CI/CD', 'GitHub Actions', 'Docker'],
  },
  {
    title: 'Soft Skills',
    description: 'Essential non-technical abilities',
    iconName: 'Lightbulb',
    technologies: [
      'Problem Solving',
      'Communication',
      'Teamwork',
      'Time Management',
    ],
  },
];

export type ProjectItem = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
};

export const featuredProjects: ProjectItem[] = [
  {
    title: 'E-Commerce Website',
    description:
      'A full-featured e-commerce platform with product listings, cart functionality, and payment integration.',
    image: '/ecommerce.jpg',
    tags: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    link: 'https://example.com/ecommerce',
    github: 'https://github.com/example/ecommerce',
  },
  {
    title: 'Task Management App',
    description:
      'A productivity application for managing tasks, projects, and deadlines with team collaboration features.',
    image: '/ecommerce.jpg',
    tags: ['React', 'Firebase', 'Material UI'],
    link: 'https://example.com/taskmanager',
    github: 'https://github.com/example/taskmanager',
  },
];

export const allProjects: ProjectItem[] = [
  ...featuredProjects,
  {
    title: 'Portfolio Website',
    description:
      'A responsive portfolio website to showcase my projects and skills.',
    image: '/portfolio.jpg',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://example.com/portfolio',
    github: 'https://github.com/example/portfolio',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather application with location-based forecasts.',
    image: '/weather.jpg',
    tags: ['React', 'OpenWeather API', 'CSS'],
    link: 'https://example.com/weather',
    github: 'https://github.com/example/weather',
  },
];
