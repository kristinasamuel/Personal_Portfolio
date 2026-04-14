"use client";
import { FaCode, FaRobot, FaPaintBrush, FaBullhorn } from 'react-icons/fa';

const services = [
  {
    title: "Frontend Developer",
    description: "Building responsive and dynamic user interfaces with modern frameworks.",
    icon: <FaCode className="w-12 h-12 text-green-500" />,
  },
  {
    title: "AI Automation",
    description: "Creating intelligent automation solutions to streamline your workflows.",
    icon: <FaRobot className="w-12 h-12 text-green-500" />,
  },
  {
    title: "Agentic AI Developer",
    description: "Developing and implementing agent-based AI systems.",
    icon: <FaBullhorn className="w-12 h-12 text-green-500" />,
  },
  {
    title: "Figma to Code",
    description: "Translating your Figma designs into pixel-perfect, clean code.",
    icon: <FaPaintBrush className="w-12 h-12 text-green-500" />,
  },
];

export default function Services() {
  return (
    <section className="text-white bg-black py-20">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-500">My Services</h2>
          <p className="text-lg text-gray-400 mt-2">What I can do for you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 text-center">{service.title}</h3>
              <p className="text-gray-400 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
