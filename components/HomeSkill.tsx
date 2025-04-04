'use client';
import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react';
import { ArrowRight, Database, Layout, Server } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';
import Link from 'next/link';

const HomeSkill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featuredSkills = [
    {
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces',
      icon: (
        <Layout className='h-8 w-8 md:h-10 md:w-10 lg:h-10 lg:w-10 xl:h-10 xl:w-10 3xl:h-16 3xl:w-16 text-[#a855f7]' />
      ),
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Backend Development',
      description: 'Building robust server-side applications',
      icon: (
        <Server className='h-8 w-8 md:h-10 md:w-10 lg:h-10 lg:w-10 xl:h-10 xl:w-10 3xl:h-16 3xl:w-16 text-[#a855f7]' />
      ),
      technologies: ['Node.js', 'Express', 'REST APIs'],
    },
    {
      title: 'Database Management',
      description: 'Working with various database systems',
      icon: (
        <Database className='h-8 w-8 md:h-10 md:w-10 lg:h-10 lg:w-10 xl:h-10 xl:w-10 3xl:h-16 3xl:w-16 text-[#a855f7]' />
      ),
      technologies: ['MongoDB', 'MySQL', 'PostgreSQL'],
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
    <section className='py-16 md:py-24 lg:py-24 xl:py-24 3xl:py-40'>
      <div className='container max-w-7xl 3xl:max-w-[1400px] mx-auto'>
        <div className='flex flex-col items-center text-center mb-12 md:mb-16 lg:mb-16 xl:mb-16 3xl:mb-24'>
          <h2 className='section-heading text-3xl md:text-4xl lg:text-4xl xl:text-4xl 3xl:text-7xl font-bold'>
            My Skills
          </h2>
          <div className='section-divider'></div>
          <p className='mt-4 lg:mt-4 xl:mt-4 3xl:mt-8 text-muted-foreground max-w-2xl lg:max-w-2xl xl:max-w-2xl 3xl:max-w-5xl text-base md:text-lg lg:text-lg xl:text-lg 3xl:text-2xl'>
            I have experience with a wide range of technologies and tools that
            allow me to create comprehensive web and mobile solutions.
          </p>
        </div>
        <motion.div
          ref={ref}
          variants={container}
          initial='hidden'
          animate={isInView ? 'show' : 'hidden'}
          className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 xl:gap-6 xl:px-6 3xl:gap-12 mb-10 lg:mb-10 xl:mb-10 3xl:mb-16 px-4'
        >
          {featuredSkills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <Card className='h-full transition-all hover:shadow-lg hover:-translate-y-1 p-4 md:p-6 lg:p-6 xl:p-6 3xl:p-10'>
                <CardHeader className='pd-2 lg:pb-2 xl:pb-2 3xl:pb-6'>
                  <div className='mb-2 lg:mb-2 xl:mb-2 3xl:mb-6 mt-2 lg:mt-2 xl:mt-2 3xl:mt-6'>
                    {skill.icon}
                  </div>
                  <CardTitle className='text-xl md:text-2xl lg:text-2xl xl:text-2xl 3xl:text-5xl'>
                    {skill.title}
                  </CardTitle>
                  <CardDescription className='text-base md:text-lg lg:text-lg xl:text-lg 3xl:text-2xl mt-2'>
                    {skill.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className='mt-auto'>
                  <div className='flex flex-wrap gap-2 lg:gap-2 xl:gap-2 3xl:gap-4'>
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className='px-2 py-1 lg:px-2 lg:py-1 xl:px-2 xl:py-1 3xl:px-4 3xl:py-2 bg-muted font-semibold text-xs md:text-sm lg:text-sm xl:text-sm 3xl:text-lg rounded-full'
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
        <div className='flex justify-center'>
          <Button
            asChild
            className='text-base md:text-lg lg:text-lg xl:text-lg 3xl:text-2xl px-6 py-3 3xl:px-10 3xl:py-5'
          >
            <Link href='/skills'>
              View All Skills
              <ArrowRight className='ml-2 h-4 w-4 md:h-5 md:w-5 lg:h-5 lg:w-5 xl:h-5 xl:w-5 3xl:h-7 3xl:w-7' />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeSkill;
