import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Hero } from '@/components/sections/hero';
import { Showcase } from '@/components/sections/showcase';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Showcase />
      <Contact />
    </>
  );
}
