import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Services from "./components/services";
import Contact from "./contact/page";

export default function Home() {
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
