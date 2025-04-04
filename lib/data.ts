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
    date: "January 2024",
    role: "Full Stack Developer",
  },
  {
    id: 2,
    title: "Osana Yoga Studio Website",
    description:
      "A modern yoga platform that allows users to explore various yoga categories and purchase suitable courses to enhance their wellness journey.",
    longDescription:
      "Yoga Bliss is a responsive web application designed to help users discover and engage with a wide range of yoga practices. The platform allows users to browse yoga categories such as Hatha, Vinyasa, Yin, and Meditation. Each category features curated courses that users can purchase and follow. The site includes user authentication via Clerk, a clean UI with shadcn/ui and TailwindCSS, and data management using Redux and MongoDB for course tracking and purchase history. Built with Next.js for a smooth and fast user experience.",
    image: "/yoga.png",
    tags: ["Next.js", "TailwindCSS", "shadcn/ui", "Clerk", "MongoDB", "Redux"],
    liveUrl: "https://yoga-lyart.vercel.app/",
    githubUrl: "#",
    date: "February 2024",
    role: "Fullstack Developer",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website to showcase projects and skills with a modern design.",
    longDescription:
      "This portfolio website was designed to showcase my projects and skills in a visually appealing way. It features smooth animations, responsive design, and a contact form. The website was built with Next.js and styled with Tailwind CSS.",
    image: "/portfolio.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
    liveUrl: "https://kelvindev-portfolio.vercel.app",
    githubUrl: "https://github.com/Khoa1512/my-portfolio",
    date: "April 2025",
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
