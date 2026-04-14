"use client";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Services from "./components/services";
import Contact from "./contact/page";
export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div>
      <Hero />
        <About />
        <Skills/>     
        <Services />
        <Projects />
        <Contact/>
    </div>
  );
}
