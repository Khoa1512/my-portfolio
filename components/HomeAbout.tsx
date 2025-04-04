'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HomeAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section
      id='about-preview'
      className='py-16 md:py-24 lg:py-28 xl:py-28 3xl:py-40 gradient-about'
    >
      <div className='container max-w-7xl 3xl:max-w-[1400px] mx-auto'>
        <div className='flex flex-col items-center text-center mb-12 md:mb-16 lg:mb-16 xl:mb-16 3xl:mb-24'>
          <h2 className='section-heading text-3xl md:text-4xl lg:text-2xl xl:text-2xl 3xl:text-7xl font-bold'>
            About Me
          </h2>
          <div className='section-divider'></div>
        </div>
        <div className='grid md:grid-cols-2 gap-8 lg:gap-8 xl:gap-8 3xl:gap-20 items-center'>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className='flex justify-center'
          >
            <div className='relative w-64 h-64 md:w-72 md:h-72 lg:w-72 lg:h-72 xl:w-72 xl:h-72 3xl:w-[480px] 3xl:h-[480px] rounded-full overflow-hidden border-2 border-background shadow-xl'>
              <Image
                src='/profile.jpg'
                alt='Profile'
                fill
                className='object-cover'
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='pr-4 lg:pr-4 xl:pr-4 3xl:pr-8'
          >
            <h3 className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl 3xl:text-6xl font-bold mb-4 md:mb-6 lg:mb-6 xl:mb-6 3xl:mb-10'>
              A senior student majoring in Computer Science
            </h3>
            <p className='text-muted-foreground mb-6 md:mb-8 lg:mb-8 xl:mb-8 3xl:mb-12 text-base md:text-lg lg:text-lg xl:text-lg 3xl:text-3xl'>
              I am a passionate web and mobile developer with a strong
              foundation in modern web and mobile technologies. Currently in my
              final year of Computer Science, I am eager to apply my skills and
              knowledge in a professional environment.
            </p>
            <Button
              asChild
              className='text-base md:text-lg lg:text-lg xl:text-lg 3xl:text-2xl px-6 py-3 3xl:px-10 3xl:py-5'
            >
              <Link href='/about'>
                Learn More About Me
                <ArrowRight className='ml-2 h-4 w-4 md:h-5 md:w-5 lg:h-5 lg:w-5 xl:h-5 xl:w-5 3xl:h-7 3xl:w-7' />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
