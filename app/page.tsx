import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ParticlesBackground from "@/components/ParticlesBackground";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <TechStack />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Contact />
    </>
  );
}
