import ContactSection from '@/components/ContactSection';
import React from 'react'

export const metadata = {
  title: "Contact - Portfolio",
  description: "Get in touch with me for opportunities or inquiries",
};


const page = () => {
  return (
    <main className='flex flex-col min-h-screen py-10'>
      <div className='container max-w-7xl 3xl:max-w-[1400px] mx-auto'>
        <h2 className='font-heading text-2xl md:text-4xl lg:text-5xl xl:text-3xl 3xl:text-7xl font-bold mb-6 md:mb-8 lg:mb-10 xl:mb-10 3xl:mb-16 mt-2 px-2'>
          Contact Me
        </h2>
        <section className='contact-section '>
          <ContactSection />
        </section>
      </div>
    </main>
  );
}

export default page
