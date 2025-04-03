import ProjectSection from '@/components/ProjectSection';
import React from 'react'

const page = () => {
  return (
    <main className='flex flex-col min-h-screen py-10'>
      <div className='container max-w-7xl 3xl:max-w-[1400px] mx-auto'>
        <h2 className='font-heading text-2xl md:text-3xl xl:text-3xl 3xl:text-7xl font-bold mb-6 md:mb-8 lg:mb-10 xl:mb-10 3xl:mb-16 mt-2 px-2'>
          My Projects
        </h2>
        <section className='contact-section '>
          <ProjectSection />
        </section>
      </div>
    </main>
  );
}

export default page
