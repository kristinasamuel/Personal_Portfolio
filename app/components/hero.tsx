"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si";

export default function Hero() {
  return (
    <section className="text-white bg-black">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center justify-center min-h-screen">
        <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-500">
            Hi, I&apos;m Kristina
          </h1>
          <div className="sm:text-3xl text-2xl mb-4 text-green-500">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Web Developer",
                  "Agentic AI Developer",
                  "AI Automation ",
                  "n8n Workflow ",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="mb-8 leading-relaxed">
            I create modern, responsive, and interactive web applications,
            combining clean design, smooth animations, and AI-driven
            automation. My work reflects creativity, hands-on experience, and a
            passion for building impactful digital solutions.
          </p>
          <div className="flex justify-center md:justify-start mb-8">
            <a
              href="https://github.com/kristinasamuel"
              className="text-white hover:text-green-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-8 h-8 mx-2" />
            </a>
            <a
              href="https://www.linkedin.com/in/kristina-linkedin"
              className="text-white hover:text-green-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-8 h-8 mx-2" />
            </a>
            <a
              href="mailto:kristina97@gmail.com"
              className="text-white hover:text-green-500"
            >
              <FaEnvelope className="w-8 h-8 mx-2" />
            </a>
          </div>
          <div className="flex justify-center md:justify-start">
            <a href="/contact">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Contact Me
              </button>
            </a>
          </div>
          <div className="flex justify-center md:justify-start mt-6">
            <a href="https://www.upwork.com/freelancers/~010de4f8aa422702be?mp_source=share" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded text-lg mx-2">
                <SiUpwork className="w-6 h-6 mr-2" />
                Upwork
            </a>
            <a href="https://www.fiverr.com/s/YR5BG3d" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded text-lg mx-2">
                <SiFiverr className="w-6 h-6 mr-2" />
                Fiverr
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            alt="Kristina Samuel"
            src="/images/G Image.png"
            width={330}
            height={330}
            priority={true}
            quality={85}
            sizes="(max-width: 768px) 280px, 330px"
            className="rounded-lg object-cover max-w-[280px] md:max-w-[330px]"
          />
        </div>
      </div>
    </section>
  );
}
