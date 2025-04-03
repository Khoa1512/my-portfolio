import { motion, useInView } from 'framer-motion';

import AboutSection from '@/components/AboutSection';
import Image from 'next/image';
import SkillSection from '@/components/SkillSection';

export const metadata = {
  title: 'About Me - Portfolio',
  description: 'Learn more about my background, education, and experience',
};

const page = () => {
  return (
    <main className='flex flex-col min-h-screen py-10'>
      <div className='container max-w-7xl 3xl:max-w-[1400px] mx-auto'>
        <h2 className='font-heading text-3xl md:text-4xl lg:text-5xl xl:text-3xl 3xl:text-7xl font-bold mb-6 md:mb-8 lg:mb-10 xl:mb-10 3xl:mb-16 mt-2 px-2'>
          My skills
        </h2>
        <section className='skill-section '>
          <SkillSection />
        </section>
      </div>
    </main>
  );
};

export default page;
