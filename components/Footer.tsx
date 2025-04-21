import Link from 'next/link';
import { Github, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='w-full border-t bg-background py-6 px-4 lg:py-8 xl:py-10 3xl:py-14 3xl:px-8'>
      <div className='container max-w-7xl xl:max-w-[1200px] 3xl:max-w-[1600px] 4xl:max-w-[1800px] mx-auto flex flex-col items-center justify-between gap-4 md:flex-row md:gap-6 lg:gap-8 3xl:gap-12'>
        <p className='text-center text-sm md:text-sm lg:text-sm xl:text-base 3xl:text-xl leading-loose text-muted-foreground md:text-left'>
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <div className='flex items-center gap-4 lg:gap-5 xl:gap-6 3xl:gap-10'>
          <Link
            href='https://github.com/Khoa1512'
            target='_blank'
            rel='noreferrer'
          >
            <Github className='h-5 w-5 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 3xl:h-10 3xl:w-10 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110' />
            <span className='sr-only'>GitHub</span>
          </Link>
          <Link
            href='https://www.facebook.com/khoaaa152/'
            target='_blank'
            rel='noreferrer'
          >
            <Facebook className='h-5 w-5 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 3xl:h-10 3xl:w-10 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110' />
            <span className='sr-only'>Facebook</span>
          </Link>
          <Link
            href='https://www.linkedin.com/in/kelvindev1512/'
            target='_blank'
            rel='noreferrer'
          >
            <Linkedin className='h-5 w-5 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 3xl:h-10 3xl:w-10 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110' />
            <span className='sr-only'>LinkedIn</span>
          </Link>
          <Link href='mailto:dangkhoa1512.work@gmail.com'>
            <Mail className='h-5 w-5 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 3xl:h-10 3xl:w-10 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110' />
            <span className='sr-only'>Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
