'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code,
  Database,
  Layout,
  Palette,
  Server,
  Smartphone,
  Globe,
  Cloud,
  Shield,
  Terminal,
  Cpu,
  Lightbulb,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const SkillSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    {
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces',
      icon: <Layout className='h-8 w-8 text-[#a855f7]' />,
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
      icon: <Server className='h-8 w-8 text-[#a855f7]' />,
      technologies: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Python'],
    },
    {
      title: 'Database Management',
      description: 'Working with various database systems',
      icon: <Database className='h-8 w-8 text-[#a855f7]' />,
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
      icon: <Smartphone className='h-8 w-8 text-[#a855f7]' />,
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
      icon: <Code className='h-8 w-8 text-[#a855f7]' />,
      technologies: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
    },
    {
      title: 'Cloud Services',
      description: 'Deploying and managing applications in the cloud',
      icon: <Cloud className='h-8 w-8 text-[#a855f7]' />,
      technologies: ['AWS', 'Google Cloud', 'Vercel', 'Heroku', 'Docker'],
    },
    {
      title: 'Security',
      description: 'Implementing security best practices',
      icon: <Shield className='h-8 w-8 text-[#a855f7]' />,
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
      icon: <Terminal className='h-8 w-8 text-[#a855f7]' />,
      technologies: ['Git', 'CI/CD', 'GitHub Actions', 'Docker'],
    },
    {
      title: 'Soft Skills',
      description: 'Essential non-technical abilities',
      icon: <Lightbulb className='h-8 w-8 text-[#a855f7]' />,
      technologies: [
        'Problem Solving',
        'Communication',
        'Teamwork',
        'Time Management',
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className='py-8 xl:px-10 lg:px-10'>
      <p className='text-muted-foreground mb-8 max-w-3xl'>
        As a final year Computer Science student, I've developed a diverse skill
        set that allows me to work on all aspects of web development. Here's a
        comprehensive overview of my technical abilities and the technologies I
        work with.
      </p>
      <motion.div
        ref={ref}
        initial={{ opacity: 0.1 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0.1 }}
        transition={{ duration: 0.3 }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-3 gap-6'
      >
        {skills.map((skill, index) => (
          <motion.div key={index} variants={item}>
            <Card className='h-full transition-all hover:shadow-lg hover:-translate-y-1'>
              <CardHeader className='pb-2'>
                <div className='mb-2 mt-2'>{skill.icon}</div>
                <CardTitle>{skill.title}</CardTitle>
                <CardDescription>{skill.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex flex-wrap gap-2'>
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='px-2 py-1 bg-muted text-xs rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillSection;
