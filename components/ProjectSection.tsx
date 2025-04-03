"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const ProjectSection = () => {
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
    <section className='pb-8'>
      <p className='text-muted-foreground mb-8 max-w-3xl px-4'>
        Here's a collection of projects I've worked on that demonstrate my
        skills and experience in web development, UI/UX design, and
        problem-solving. Each project represents different challenges and
        learning opportunities.
      </p>
    </section>
  );
};

export default ProjectSection;
