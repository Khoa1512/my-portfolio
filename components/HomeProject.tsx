'use client';
import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { featuredProjects } from '@/lib/data';

const HomeProject = () => {
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
    <section className='py-16 md:py-24 lg:py-24 xl:py-24 3xl:py-40 gradient-projects'>
      <div className='container max-w-7xl 3xl:max-w-[1400px] mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-heading text-3xl md:text-4xl lg:text-4xl xl:text-4xl 3xl:text-7xl font-bold'>
            Featured Projects
          </h2>
          {/* <div className='mt-2 h-1 w-20 bg-primary rounder-[9999px]'></div> */}
          <p className='text-muted-foreground mt-4 lg:mt-4 xl:mt-4 3xl:mt-8 max-w-2xl lg:max-w-2xl xl:max-w-2xl 3xl:max-w-5xl text-base md:text-lg lg:text-lg xl:text-lg 3xl:text-2xl'>
            Here are some of my recent projects that showcase my skills and
            experience.
          </p>
        </div>
        <motion.div
          ref={ref}
          variants={container}
          initial='hidden'
          animate={isInView ? 'show' : 'hidden'}
          className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 xl:gap-8 3xl:gap-16 mb-10 lg:mb-10 xl:mb-10 3xl:mb-16 mt-10 lg:mt-10 xl:mt-10 3xl:mt-16 px-14'
        >
          {featuredProjects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className='h-full flex flex-col overflow-hidden transition-all hover:shadow-lg'>
                <div className='relative h-60 md:h-72 lg:h-60 xl:h-60 3xl:h-[440px] w-full overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover transition-transform hover:scale-105'
                  />
                </div>
                <div className='flex flex-col flex-grow'>
                  <CardHeader className='min-h-[120px] md:min-h-[140px] lg:min-h-[140px] xl:min-h-[140px] 3xl:min-h-[180px]'>
                    <CardTitle className='text-xl md:text-2xl lg:text-2xl xl:text-2xl 3xl:text-4xl'>
                      {project.title}
                    </CardTitle>
                    <CardDescription className='text-sm md:text-base lg:text-base xl:text-base 3xl:text-xl mt-2 line-clamp-3'>
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='pt-4 lg:px-6 xl:px-6 3xl:px-10 lg:pb-6 xl:pb-6 3xl:pb-10 mt-auto'>
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
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className='flex justify-center'>
          <Button
            asChild
            className='text-base md:text-lg lg:text-lg xl:text-lg 3xl:text-2xl px-6 py-3 3xl:px-10 3xl:py-5'
          >
            <Link href='/projects'>
              View All Projects
              <ArrowRight className='ml-2 h-4 w-4 md:h-5 md:w-5 lg:h-5 lg:w-5 xl:h-5 xl:w-5 3xl:h-7 3xl:w-7' />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeProject;
