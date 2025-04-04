'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code,
  Database,
  Layout,
  Server,
  Smartphone,
  Cloud,
  Shield,
  Terminal,
  Lightbulb,
  LucideIcon,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { skills } from '@/lib/data';



// Ánh xạ tên icon sang component icon
const iconMap: Record<string, LucideIcon> = {
  Layout: Layout,
  Database: Database,
  Server: Server,
  Smartphone: Smartphone,
  Code: Code,
  Cloud: Cloud,
  Shield: Shield,
  Terminal: Terminal,
  Lightbulb: Lightbulb,
};

const SkillSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

  // Render icon component dựa trên tên icon
  const renderIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName];
    if (!IconComponent) return null;

    return (
      <IconComponent className='h-8 w-8 md:h-10 md:w-10 lg:h-10 lg:w-10 xl:h-10 xl:w-10 3xl:h-16 3xl:w-16 text-[#a855f7]' />
    );
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
        variants={container}
        initial='hidden'
        animate={isInView ? 'show' : 'hidden'}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-3 gap-6'
      >
        {skills.map((skill) => (
          <motion.div key={skill.id} variants={item}>
            <Card className='h-full transition-all hover:shadow-lg hover:-translate-y-1'>
              <CardHeader className='pb-2'>
                <div className='mb-2 mt-2'>{renderIcon(skill.iconName)}</div>
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
