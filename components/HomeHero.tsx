'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

import { Button } from '@/components/ui/button';

const HomeHero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className='relative py-16 md:py-16 lg:py-28 xl:py-30 3xl:py-44 overflow-hidden'>
      <div className='container flex flex-col items-center text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 3xl:max-w-7xl mx-auto'
        >
          <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-6xl 3xl:text-8xl font-bold bg-gradient-to-r from-[#e11d48] via-[#9333ea] to-[#4f46e5] bg-clip-text text-transparent pb-2 md:pb-4'>
            Hello, I'm Tran Nam Dang Khoa
          </h1>
          <p className='mt-4 md:mt-6 text-lg md:text-xl lg:text-2xl xl:text-2xl 3xl:text-4xl text-muted-foreground max-w-4xl mx-auto'>
            Web Developer & Mobile Developer
          </p>
          <p className='mt-3 md:mt-4 text-base md:text-lg lg:text-xl xl:text-xl 3xl:text-3xl text-muted-foreground max-w-5xl mx-auto'>
            I create beautiful, responsive, and user-friendly websites and
            mobiles with modern technologies.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6 md:mt-8 lg:mt-10 xl:mt-10 3xl:mt-12 justify-center'>
            <Button
              asChild
              size='lg'
              className='text-base md:text-lg 3xl:text-xl 3xl:py-6 3xl:px-8'
            >
              <Link href='/projects'>View My Work</Link>
            </Button>
            <Button
              asChild
              variant='outline'
              size='lg'
              className='text-base md:text-lg 3xl:text-xl 3xl:py-6 3xl:px-8'
            >
              <Link href='/contact'>Contact Me</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className='absolute bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-10 3xl:bottom-16 left-1/2 transform -translate-x-1/2'
      >
        <Link
          href='#about-preview'
          className='flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors'
        >
          <span className='text-sm md:text-base lg:text-lg xl:text-lg 3xl:text-2xl mb-2 3xl:mb-4'>
            Scroll Down
          </span>
          <ArrowDown className='animate-[bounce_2s_ease-in-out_infinite] w-6 h-6 md:w-8 md:h-8 3xl:w-12 3xl:h-12' />
        </Link>
      </motion.div>
    </section>
  );
};

export default HomeHero;
