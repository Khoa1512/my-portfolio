import HomeAbout from '@/components/HomeAbout';
import HomeContact from '@/components/HomeContact';
import HomeHero from '@/components/HomeHero';
import HomeProject from '@/components/HomeProject';
import HomeSkill from '@/components/HomeSkill';


export default function Home() {
  return (
    <main className='flex flex-col min-h-screen'>
      <HomeHero/>
      <HomeAbout/>
      <HomeSkill/>
      <HomeProject/>
      <HomeContact/>
    </main>
  );
}
