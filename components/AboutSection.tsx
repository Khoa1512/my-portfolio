"use client";
import React, { useRef } from 'react'
import Image from 'next/image';
import { motion, useInView } from "framer-motion";
import { Calendar, GraduationCap, MapPin, Award, Briefcase, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';


const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className='py-8 md:py-12 lg:py-16 xl:py-16 3xl:py-24'>
      <div className='grid md:grid-cols-2 gap-12 items-start'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col justify-center'
        >
          <div className='relative w-full ml-4 max-w-md aspect-square rounded-2xl overflow-hidden border-4 border-background shadow-xl'>
            <Image
              src='/profile.jpg'
              alt='profile'
              fill
              className='object-cover'
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex flex-col gap-6 mt-6 md:mt-0'
        >
          <h2 className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl 3xl:text-5xl font-bold'>
            A passionate developer focused on creating impactful experiences
          </h2>
          <p className='text-muted-foreground text-base md:text-lg lg:text-lg xl:text-lg 3xl:text-xl leading-relaxed'>
            I'm currently a final-year Computer Science student with a passion
            for web and mobile development. I've spent the last few years
            building my skills across the full development stack, and I'm
            particularly interested in creating user-friendly, responsive, and
            accessible applications.
          </p>
          <p className='text-muted-foreground text-base md:text-lg lg:text-lg xl:text-lg 3xl:text-xl leading-relaxed'>
            My journey in programming began when I was in high school, and I've
            been improving my skills ever since. I enjoy learning new
            technologies and challenging myself with different projects.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 mb-8 mr-4'>
            <Card>
              <CardContent className='p-4 flex items-center gap-3'>
                <GraduationCap className='text-[#a855f7]' />
                <div>
                  <p className='text-sm font-medium'>Education</p>
                  <p className='text-sm text-muted-foreground'>
                    Ton Duc Thang University
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-4 flex items-center gap-3'>
                <Calendar className='text-[#a855f7]' />
                <div>
                  <p className='text-sm font-medium'>Experience</p>
                  <p className='text-sm text-muted-foreground'>2+ Years</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-4 flex items-center gap-3'>
                <MapPin className='text-[#a855f7]' />
                <div>
                  <p className='text-sm font-medium'>Location</p>
                  <p className='text-sm text-muted-foreground'>
                    Ho Chi Minh, Viet Nam
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-4 flex items-center gap-3'>
                <Briefcase className='text-[#a855f7]' />
                <div>
                  <p className='text-sm font-medium'>Availability</p>
                  <p className='text-sm text-muted-foreground'>
                    Seeking an internship
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue='Education' className='w-full pr-4'>
            <TabsList className='grid w-full grid-cols-3'>
              <TabsTrigger value='education'>Education</TabsTrigger>
              <TabsTrigger value='experience'>Experience</TabsTrigger>
              <TabsTrigger value='interests'>Interests</TabsTrigger>
            </TabsList>
            <TabsContent value='education' className='space-y-4 mt-4'>
              <div className='border-l-2 border-[#a855f7] pl-4 py-2'>
                <h3 className='text-lg font-semibold'>
                  Bachelor of Computer Science
                </h3>
                <p className='text-muted-foreground'>
                  Ton Duc Thang University • 2021 - 2025
                </p>
                <p className='mt-2'>
                  Specializing in Web Development and Software Engineering with
                  a focus on modern technologies.
                </p>
              </div>
            </TabsContent>
            <TabsContent value='experience' className='space-y-4 mt-4'>
              <div className='border-l-2  border-[#a855f7] pl-4 py-2'>
                <h3 className='text-lg font-semibold'>IT Project Developer</h3>
                <p className='text-muted-foreground'>
                  University Project • February 2025
                </p>
                <p className='mt-2'>
                  Developed a traffic navigation application using the A*
                  algorithm as part of the Information Technology Project
                  course. Focused on real-time mapping, intelligent routing, and
                  traffic monitoring.
                </p>
              </div>
              <div className='border-l-2 border-muted pl-4 py-2'>
                <h3 className='text-lg font-semibold'>
                  Freelance Web Developer
                </h3>
                <p className='text-muted-foreground'>
                  Self-employed • 2024 - Present
                </p>
                <p className='mt-2'>
                  Designed and developed a website for a client in Africa,
                  focused on browsing and purchasing yoga courses. Collaborated
                  with a senior-level developer to ensure high-quality user
                  experience and responsive design.
                </p>
              </div>
            </TabsContent>
            <TabsContent value='interests' className='space-y-4 mt-4'>
              <div className='flex items-start gap-3'>
                <Heart className='text-[#a855f7] mt-1' />
                <div>
                  <h3 className='text-lg font-semibold'>Web Development</h3>
                  <p className='text-muted-foreground'>
                    I enjoy exploring new web technologies and frameworks to
                    build better user experiences.
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <Heart className='text-[#a855f7] mt-1' />
                <div>
                  <h3 className='text-lg font-semibold'>Mobile Development</h3>
                  <p className='text-muted-foreground'>
                    I enjoy building mobile applications with modern frameworks,
                    focusing on performance and user experience.
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <Heart className='text-[#a855f7] mt-1' />
                <div>
                  <h3 className='text-lg font-semibold'>Open Source</h3>
                  <p className='text-muted-foreground'>
                    I contribute to open source projects and believe in the
                    power of community-driven development.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
      <div className='mt-16'>
        <h2 className='text-2xl font-bold mb-6 px-4'>My Philosophy</h2>
        <div className='grid md:grid-cols-3 gap-6 px-6'>
          <Card className='bg-[#fff1f2] bg-gradient-to-br from-[#fff1f2] to-[#ffe4e6]'>
            <CardContent className='p-6'>
              <Award className='h-10 w-10 text-[#e11d48] mb-4' />
              <h3 className='text-lg font-semibold mb-2'>Quality First</h3>
              <p className='text-muted-foreground'>
                I believe in delivering high-quality work that exceeds
                expectations. Every line of code I write is crafted with care
                and attention to detail.
              </p>
            </CardContent>
          </Card>
          <Card className='bg-gradient-to-br from-[#f5f3ff] to-[#ede9fe]'>
            <CardContent className='p-6'>
              <Briefcase className='h-10 w-10 text-[#9333ea] mb-4' />
              <h3 className='text-lg font-semibold mb-2'>
                Continuous Learning
              </h3>
              <p className='text-muted-foreground'>
                The tech industry evolves rapidly, and I'm committed to staying
                up-to-date with the latest technologies and best practices.
              </p>
            </CardContent>
          </Card>
          <Card className='bg-gradient-to-br from-[#eef2ff] to-[#e0e7ff]'>
            <CardContent className='p-6'>
              <Heart className='h-10 w-10 text-[#4f46e5] mb-4' />
              <h3 className='text-lg font-semibold mb-2'>
                User-Centered Design
              </h3>
              <p className='text-muted-foreground'>
                I focus on creating intuitive and accessible experiences that
                meet the needs of real users, not just technical requirements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
