'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { allProjects } from '@/lib/data';
import { Calendar, User, LucideIcon, Github, ExternalLink } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Calendar: Calendar,
  User: User,
  GitHub: Github,
  ExternalLink: ExternalLink
};

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const renderIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName];
    if (!IconComponent) return null;

    return <IconComponent className='h-4 w-4 md:h-6 md:w-6' />;
  };

  return (
    <section className='pb-16 md:pb-24 lg:pb-24 xl:pb-24 3xl:pb-40'>
      <p className='text-muted-foreground mb-8 max-w-3xl text-base md:text-lg lg:text-lg xl:text-lg 3xl:text-2xl px-4 md:px-6 lg:px-6 xl:px-6 3xl:px-10'>
        Here's a collection of projects I've worked on that demonstrate my
        skills and experience in web development, UI/UX design, and
        problem-solving. Each project represents different challenges and
        learning opportunities.
      </p>

      <motion.div
        ref={ref}
        variants={container}
        initial='hidden'
        animate={isInView ? "show" : "hidden"}
        className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-8 3xl:gap-16 px-4 md:px-6 lg:px-6 xl:px-6 3xl:px-10'
      >
        {allProjects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <Card className='h-full flex flex-col overflow-hidden transition-all hover:shadow-lg'>
              <div className='relative h-60 lg:h-60 xl:h-60 3xl:h-[440px] w-full overflow-hidden'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='object-cover transition-transform hover:scale-105'
                />
              </div>
              <CardHeader>
                <CardTitle className='text-xl md:text-2xl lg:text-2xl xl:text-2xl 3xl:text-4xl'>
                  {project.title}
                </CardTitle>
                <CardDescription className='text-sm md:text-base lg:text-base xl:text-base 3xl:text-xl'>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className='mt-auto'>
                <div className='flex items-center gap-2 text-sm md:text-base lg:text-base xl:text-base 3xl:text-lg text-muted-foreground mb-2'>
                  <div className='flex items-center justify-center'>
                    {renderIcon("Calendar")}
                  </div>
                  <span className='font-semibold'>{project.date}</span>
                </div>
                <div className='flex items-center gap-2 text-sm md:text-base lg:text-base xl:text-base 3xl:text-lg text-muted-foreground'>
                  <div className='flex items-center justify-center'>
                    {renderIcon("User")}
                  </div>
                  <span className='font-semibold'>{project.role}</span>
                </div>
                <p className='md:text-base lg:text-base xl:text-base 3xl:text-xl text-muted-foreground line-clamp-3 my-4 '>
                  {project.longDescription}
                </p>
                <div className='flex flex-wrap gap-2 mt-6'>
                  {project.tags &&
                    project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className='px-2 py-1 bg-muted text-xs md:text-sm font-semibold rounded-full'
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </CardContent>
              <CardFooter className='flex justify-between'>
                <Button asChild variant='outline'>
                  <Link
                    href={project.githubUrl}
                    target='_blank'
                    className='font-semibold'
                  >
                    {renderIcon("GitHub")} Code
                  </Link>
                </Button>
                <Button asChild className='bg-[#7C3AED]'>
                  <Link href={project.liveUrl} target='_blank'>
                    {renderIcon("ExternalLink")} Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectSection;
