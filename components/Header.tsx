'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useMobile } from '@/hooks/use-mobile';

function NavLinks({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "flex items-center gap-6 lg:gap-6 xl:gap-6 3xl:gap-12",
        className
      )}
    >
      <Link
        href='/'
        className={cn(
          "text-sm md:text-base lg:text-base xl:text-base 3xl:text-2xl font-medium transition-colors hover:text-[#a855f7]",
          pathname === "/" && "text-[#a354ee] font-semibold"
        )}
        onClick={onClick}
      >
        Home
      </Link>
      <Link
        href='/about'
        className={cn(
          "text-sm md:text-base lg:text-base xl:text-base 3xl:text-2xl font-medium transition-colors hover:text-[#a855f7]",
          pathname === "/about" && "text-[#a354ee] font-semibold"
        )}
        onClick={onClick}
      >
        About
      </Link>
      <Link
        href='/skills'
        className={cn(
          "text-sm md:text-base lg:text-base xl:text-base 3xl:text-2xl font-medium transition-colors hover:text-[#a855f7]",
          pathname === "/skills" && "text-[#a354ee] font-semibold"
        )}
        onClick={onClick}
      >
        Skills
      </Link>
      <Link
        href='/projects'
        className={cn(
          "text-sm md:text-base lg:text-base xl:text-base 3xl:text-2xl font-medium transition-colors hover:text-[#a855f7]",
          pathname === "/projects" && "text-[#a354ee] font-semibold"
        )}
        onClick={onClick}
      >
        Projects
      </Link>
      <Link
        href='/contact'
        className={cn(
          "text-sm md:text-base lg:text-base xl:text-base 3xl:text-2xl font-medium transition-colors hover:text-[#a855f7]",
          pathname === "/contact" && "text-[#a354ee] font-semibold"
        )}
        onClick={onClick}
      >
        Contact
      </Link>
    </div>
  );
}

const Header = () => {
  const pathname = usePathname();
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className='sticky top-0 z-50 w-full border-b px-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 md:h-18 lg:h-18 xl:h-18 3xl:h-32 items-center justify-between max-w-7xl xl:max-w-7xl 3xl:max-w-[1600px] mx-auto'>
        <Link
          href='/'
          className='font-heading text-xl md:text-2xl lg:text-2xl xl:text-2xl 3xl:text-5xl font-bold'
        >
          Portfolio
        </Link>
        {isMobile ? (
          <>
            <Button
              variant='ghost'
              size='icon'
              onClick={toggleMenu}
              className='h-10 w-10 md:h-10 md:w-10'
            >
              {isMenuOpen ? (
                <X className='h-6 w-6 md:h-6 md:w-6' />
              ) : (
                <Menu className='h-6 w-6 md:h-6 md:w-6' />
              )}
            </Button>
            {isMenuOpen && (
              <div className='absolute top-16 md:top-18 lg:top-18 xl:top-18 3xl:top-32 left-0 w-full bg-background border-b p-4 md:p-4 lg:p-4 xl:p-4 3xl:p-8 flex flex-col gap-2 md:gap-2 3xl:gap-4'>
                <NavLinks
                  className='flex flex-col gap-2 md:gap-2 3xl:gap-4'
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
            )}
          </>
        ) : (
          <nav className='flex gap-6 lg:gap-6 xl:gap-6 3xl:gap-10'>
            <NavLinks />
          </nav>
        )}
      </div>
    </header>
  );
};
export default Header;
