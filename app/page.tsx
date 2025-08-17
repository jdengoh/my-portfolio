import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
// import { Experience } from '@/components/Experience';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#121212]">
      <Navbar />
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <Hero />
        <About />
        <Projects />
        {/* <Experience /> */}
      </div>
      <div className="mb-50"></div>
    </main>
  );
}
