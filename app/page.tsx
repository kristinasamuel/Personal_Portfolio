"use client";
import dynamic from "next/dynamic";
import Hero from "./components/hero";

const About = dynamic(() => import("./components/about"), { loading: () => <LoadingSkeleton /> });
const Skills = dynamic(() => import("./components/skills"), { loading: () => <LoadingSkeleton /> });
const Services = dynamic(() => import("./components/services"), { loading: () => <LoadingSkeleton /> });
const Projects = dynamic(() => import("./components/projects"), { loading: () => <LoadingSkeleton /> });
const Contact = dynamic(() => import("./contact/page"), { loading: () => <LoadingSkeleton /> });

function LoadingSkeleton() {
  return <div className="bg-black text-white py-20"><div className="container mx-auto p-8"><div className="animate-pulse bg-gray-800 h-12 rounded-lg w-64 mx-auto mb-8"></div><div className="animate-pulse bg-gray-800 h-4 rounded w-full max-w-3xl mx-auto"></div></div></div>;
}

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
