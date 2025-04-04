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
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { allProjects } from '@/lib/data';

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
        animate={isInView ? 'show' : 'hidden'}
        className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-8 3xl:gap-16 px-4 md:px-6 lg:px-6 xl:px-6 3xl:px-10'
      >
        {allProjects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <Card className='h-full overflow-hidden transition-all hover:shadow-lg'>
              <div className='relative h-60 md:h-72 lg:h-60 xl:h-60 3xl:h-[440px] w-full overflow-hidden'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='object-cover transition-transform hover:scale-105'
                />
              </div>
              <CardHeader className='3xl:p-10'>
                <CardTitle className='text-xl md:text-2xl lg:text-2xl xl:text-2xl 3xl:text-4xl'>
                  {project.title}
                </CardTitle>
                <CardDescription className='text-base md:text-lg lg:text-lg xl:text-lg 3xl:text-2xl mt-2'>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className='lg:px-6 xl:px-6 3xl:px-10 lg:pb-6 xl:pb-6 3xl:pb-10'>
                <div className='flex flex-wrap gap-2 lg:gap-2 xl:gap-2 3xl:gap-3'>
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className='px-2 py-1 lg:px-2 lg:py-1 xl:px-2 xl:py-1 3xl:px-4 3xl:py-2 bg-muted text-xs md:text-sm lg:text-sm xl:text-sm 3xl:text-lg rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectSection;
