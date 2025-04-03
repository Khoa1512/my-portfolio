'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HomeContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: (
        <Mail className='h-6 w-6 md:h-6 md:w-6 lg:h-6 lg:w-6 xl:h-6 xl:w-6 3xl:h-10 3xl:w-10 text-[#a855f7]' />
      ),
      title: 'Email',
      value: 'danggkhoaa1512@gmail.com',
    },
    {
      icon: (
        <Phone className='h-6 w-6 md:h-6 md:w-6 lg:h-6 lg:w-6 xl:h-6 xl:w-6 3xl:h-10 3xl:w-10 text-[#a855f7]' />
      ),
      title: 'Phone',
      value: '+84 344117735',
    },
  ];

  return (
    <section className='py-16 md:py-24 lg:py-24 xl:py-24 3xl:py-40'>
      <div className='container max-w-7xl 3xl:max-w-[1400px] mx-auto'>
        <div className='flex flex-col items-center text-center mb-12 md:mb-16 lg:mb-16 xl:mb-16 3xl:mb-24'>
          <h2 className='section-heading text-3xl md:text-4xl lg:text-4xl xl:text-4xl 3xl:text-7xl font-bold'>
            Get In Touch
          </h2>
          <div className='section-divider'></div>
          <p className='mt-4 lg:mt-4 xl:mt-4 3xl:mt-8 text-muted-foreground max-w-2xl lg:max-w-2xl xl:max-w-2xl 3xl:max-w-5xl text-base md:text-lg lg:text-lg xl:text-lg 3xl:text-2xl'>
            Feel free to reach out to me for any questions or opportunities.
            I'll get back to you as soon as possible.
          </p>
        </div>
        <div
          ref={ref}
          className='grid md:grid-cols-2 gap-8 lg:gap-8 xl:gap-8 3xl:gap-12 max-w-3xl lg:max-w-3xl xl:max-w-3xl 3xl:max-w-5xl mx-auto'
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className='p-6 lg:p-6 xl:p-6 3xl:p-10 flex items-start gap-4 lg:gap-4 xl:gap-4 3xl:gap-6'>
                  <div className='mt-1 lg:mt-1 xl:mt-1 3xl:mt-2'>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className='font-medium text-base md:text-lg lg:text-lg xl:text-lg 3xl:text-2xl'>
                      {info.title}
                    </h3>
                    <p className='text-muted-foreground text-sm md:text-base lg:text-base xl:text-base 3xl:text-xl'>
                      {info.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className='flex justify-center mt-10 lg:mt-10 xl:mt-10 3xl:mt-16'>
          <Button
            asChild
            size='lg'
            className='text-base md:text-lg lg:text-lg xl:text-lg 3xl:text-2xl 3xl:py-6 3xl:px-8'
          >
            <Link href='/contact'>
              Contact Me
              <ArrowRight className='ml-2 h-4 w-4 md:h-5 md:w-5 lg:h-5 lg:w-5 xl:h-5 xl:w-5 3xl:h-7 3xl:w-7' />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
