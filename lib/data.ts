export type SkillItem = {
  id: number;
  title: string;
  description: string;
  iconName: string;
  technologies: string[];
};

export const skills: SkillItem[] = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces",
    iconName: "Layout",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "SASS/SCSS",
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Building robust server-side applications",
    iconName: "Server",
    technologies: ["Node.js", "Express", "REST APIs", "GraphQL", "Python"],
  },
  {
    id: 3,
    title: "Database Management",
    description: "Working with various database systems",
    iconName: "Database",
    technologies: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Firebase",
      "Redis",
      "SQLite",
      "Supabase",
    ],
  },
  {
    id: 4,
    title: "Mobile Development",
    description: "Creating cross-platform mobile applications",
    iconName: "Smartphone",
    technologies: [
      "React Native",
      "Mobile-First Design",
      "Progressive Web Apps",
      "App Store Optimization",
    ],
  },
  {
    id: 5,
    title: "Programming Languages",
    description: "Proficient in multiple programming languages",
    iconName: "Code",
    technologies: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    id: 6,
    title: "Cloud Services",
    description: "Deploying and managing applications in the cloud",
    iconName: "Cloud",
    technologies: ["AWS", "Google Cloud", "Vercel", "Heroku", "Docker"],
  },
  {
    id: 7,
    title: "Security",
    description: "Implementing security best practices",
    iconName: "Shield",
    technologies: [
      "Authentication",
      "Authorization",
      "Data Encryption",
      "HTTPS",
      "Input Validation",
    ],
  },
  {
    id: 8,
    title: "DevOps",
    description: "Streamlining development and deployment processes",
    iconName: "Terminal",
    technologies: ["Git", "CI/CD", "GitHub Actions", "Docker"],
  },
  {
    id: 9,
    title: "Soft Skills",
    description: "Essential non-technical abilities",
    iconName: "Lightbulb",
    technologies: [
      "Problem Solving",
      "Communication",
      "Teamwork",
      "Time Management",
    ],
  },
];

export type ProjectItem = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  date: string;
  role: string;
};
export const allProjects: ProjectItem[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, and payment integration.",
    longDescription:
      "This project is a complete e-commerce solution built with Next.js and MongoDB. It features product listings, search functionality, shopping cart, user authentication, and Stripe payment integration. The admin dashboard allows for easy product and order management.",
    image: "/ecommerce.jpg",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB", "Redux"],
    liveUrl: "https://ecom-bice.vercel.app/",
    githubUrl: "#",
    date: "January 2023",
    role: "Full Stack Developer",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
    longDescription:
      "This task management application helps users organize their work and collaborate with team members. It includes features like task creation, assignment, due dates, priority levels, project grouping, and real-time updates. Firebase was used for the backend to enable real-time collaboration.",
    image: "/ecommerce.jpg",
    tags: ["React", "Firebase", "Material UI", "Redux", "Authentication"],
    liveUrl: "#",
    githubUrl: "#",
    date: "June 2023",
    role: "Frontend Developer",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website to showcase projects and skills with a modern design.",
    longDescription:
      "This portfolio website was designed to showcase my projects and skills in a visually appealing way. It features smooth animations, responsive design, and a contact form. The website was built with Next.js and styled with Tailwind CSS.",
    image: "/ecommerce.jpg",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "Responsive Design",
    ],
    liveUrl: "#",
    githubUrl: "#",
    date: "September 2023",
    role: "Designer & Developer",
  },
  {
    id: 4,
    title: "E-Commerce Website",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, and payment integration.",
    longDescription:
      "This project is a complete e-commerce solution built with Next.js and MongoDB. It features product listings, search functionality, shopping cart, user authentication, and Stripe payment integration. The admin dashboard allows for easy product and order management.",
    image: "/ecommerce.jpg",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    date: "January 2023",
    role: "Full Stack Developer",
  },
  {
    id: 5,
    title: "E-Commerce Website",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, and payment integration.",
    longDescription:
      "This project is a complete e-commerce solution built with Next.js and MongoDB. It features product listings, search functionality, shopping cart, user authentication, and Stripe payment integration. The admin dashboard allows for easy product and order management.",
    image: "/ecommerce.jpg",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    date: "January 2023",
    role: "Full Stack Developer",
  },
  {
    id: 6,
    title: "E-Commerce Website",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, and payment integration.",
    longDescription:
      "This project is a complete e-commerce solution built with Next.js and MongoDB. It features product listings, search functionality, shopping cart, user authentication, and Stripe payment integration. The admin dashboard allows for easy product and order management.",
    image: "/ecommerce.jpg",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    date: "January 2023",
    role: "Full Stack Developer",
  },
];

// Featured projects for home page
export const featuredProjects = allProjects.slice(0, 2);

// Featured skills for home page
export const featuredSkills = skills.slice(0, 3);
