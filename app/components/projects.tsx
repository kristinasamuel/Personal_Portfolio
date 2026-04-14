import ProjectCard, { Project } from "./project-card";

const projects: Project[] = [
    {
        name: "Personal Portfolio Website",
        description: "Responsive personal portfolio showcasing skills, projects, animations, and clean UI design.",
        image: "/images/personal_portfolio.jpg",
        liveLink: "https://assignment-01-portfolio.vercel.app/",
        githubLink: "https://github.com/kristinasamuel",
        techStack: ["Next.js", "TailwindCSS", "ShadCN UI"],
      },
      {
        name: "Funiro E-commerce Website",
        description: "Figma-to-code e-commerce store with dynamic product sections and a fully responsive layout.",
        image: "/images/furniture_2.png",
        liveLink: "https://marketplace-builder-hackathon-2025-e-commerce-website.vercel.app/",
        githubLink: "https://github.com/kristinasamuel",
        techStack: ["Next.js", "TailwindCSS", "Sanity CMS"],
      },
      {
        name: "Blog Website",
        description: "Responsive blog platform with post cards, category sections, and clean reading UI.",
        image: "/images/Food-Blog.jpeg",
        liveLink: "https://milestone-3-assignment-1.vercel.app/",
        githubLink: "https://github.com/kristinasamuel",
        techStack: ["Next.js", "TailwindCSS","chatbot"],
      },
      {
        name: "Vanar Chain Project",
        description: "2-day company task — responsive landing page with modern UI blocks and animations.",
        image: "/images/vanar.png",
        liveLink: "https://vanar-chain.vercel.app/",
        githubLink: "https://github.com/kristinasamuel",
        techStack: ["Next.js", "TailwindCSS"],
      },
      {
        name: "RoboAlert (Firebase Studio Project)",
        description: "Full Firebase project featuring dynamic backend, hosting, user authentication, and deployment.",
        image: "/images/robo.png",
        liveLink: "https://studio--studio-1552111972-e22bb.us-central1.hosted.app/",
        githubLink: "https://github.com/kristinasamuel",
        techStack: ["Firebase", "Firestore", "Hosting", "Auth"],
      },
      {
        name: "AI Chatbot Project",
        description: "Interactive AI chatbot powered by UV + Agentic AI SDK, connected to a Next.js frontend.",
        image: "/images/chatbot.jpg",
        liveLink: "#",
        githubLink: "https://github.com/kristinasamuel",
        techStack: ["Python", "Agentic AI SDK", "FastAPI", "Next.js"],
      },
      {
  name: "Chatbot workflow",
  description: "Agentic AI chatbots built with n8n workflows, featuring AI agents powered by Gemini API, simple memory, and triggers on chat start.",
  image: "/images/chatbot_n8n.png",
  liveLink: "#",
  githubLink: "https://github.com/kristinasamuel",
  techStack: ["n8n", "Gemini API", "AI Agents"],
},
{
  name: "Finance Tracker App",
  description: "A personal finance tracker built using Gemini CLI and UV Python, featuring expense management, analytics, and a Streamlit-based dashboard.",
  image: "/images/finance.png",
  liveLink: "https://personal-finance-tracker.streamlit.app/",
  githubLink: "https://github.com/kristinasamuel",
  techStack: ["UV", "Python", "Gemini CLI", "Streamlit"],
},
{
  name: "Prodexa - AI-Powered Task Management System",
  description: "A modern full-stack task management application with AI chatbot integration. Features task CRUD operations, priority levels, secure Clerk authentication, and real-time task synchronization. Manage tasks through natural conversation with an AI chatbot powered by Google Gemini.",
  image: "/images/prodexa.png",
  liveLink: "https://prodexa-task-management.vercel.app/",
  githubLink: "https://github.com/kristinasamuel",
  techStack: ["Next.js 16+", "TypeScript", "Tailwind CSS 4", "FastAPI", "PostgreSQL", "Clerk Auth", "Google Gemini AI"],
}
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white ">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-500 uppercase">Explore My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
