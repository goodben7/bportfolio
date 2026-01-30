import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Distinction } from "@/components/sections/distinction";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Distinction />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
