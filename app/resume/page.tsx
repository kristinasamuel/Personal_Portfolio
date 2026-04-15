import Link from "next/link";
import { IoMail, IoLocation, IoCall, IoLogoLinkedin } from "react-icons/io5";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Main Resume Card */}
        <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 p-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Kristina Samuel</h1>
            <p className="text-xl opacity-90 mb-4">Full Stack Developer</p>
            
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <IoLocation className="text-xl flex-shrink-0" />
                <span>H.NO B559, ShahTown, Bin Qasim, Malir, Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <IoMail className="text-xl flex-shrink-0" />
                <a href="mailto:Karistina97@gmail.com" className="hover:underline">Karistina97@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <IoCall className="text-xl flex-shrink-0" />
                <a href="tel:+923312808931" className="hover:underline">0331-2808931</a>
              </div>
              <div className="flex items-center gap-2">
                <IoLogoLinkedin className="text-xl flex-shrink-0" />
                <a href="https://linkedin.com/in/kristina-samuel" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Kristina Samuel
                </a>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-8 space-y-8">
            {/* Objective */}
            <section>
              <h2 className="text-2xl font-bold text-green-500 mb-4 border-b border-gray-700 pb-2">
                Objective
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Full Stack Developer with experience in Next.js, TypeScript, Python, and modern web technologies. 
                Skilled in building scalable applications, integrating APIs, and working with AI systems. 
                Hands-on experience with Docker and deployment.
              </p>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-2xl font-bold text-green-500 mb-4 border-b border-gray-700 pb-2">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Languages</h3>
                  <p className="text-gray-300 text-sm">HTML, CSS, TypeScript, Python</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Frameworks</h3>
                  <p className="text-gray-300 text-sm">Next.js, FastAPI, Firebase</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Tools</h3>
                  <p className="text-gray-300 text-sm">Git, GitHub, Docker, Vercel, Firebase</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">UI</h3>
                  <p className="text-gray-300 text-sm">Tailwind CSS, ShadCN UI</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg md:col-span-2">
                  <h3 className="font-semibold text-white mb-2">AI & Automation</h3>
                  <p className="text-gray-300 text-sm">Agentic AI SDK, n8n, Prompt Engineering</p>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-bold text-green-500 mb-4 border-b border-gray-700 pb-2">
                Projects
              </h2>
              <div className="space-y-3">
                <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-white mb-1">Portfolio Website</h3>
                  <p className="text-gray-300 text-sm">Built responsive portfolio using Next.js and Tailwind CSS.</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-white mb-1">E-commerce Website</h3>
                  <p className="text-gray-300 text-sm">Converted Figma design into responsive application with CMS.</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-white mb-1">Blog Platform</h3>
                  <p className="text-gray-300 text-sm">Developed blog using Next.js.</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-white mb-1">AI Chatbot</h3>
                  <p className="text-gray-300 text-sm">Built chatbot using Agentic AI SDK and integrated frontend.</p>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-2xl font-bold text-green-500 mb-4 border-b border-gray-700 pb-2">
                Experience
              </h2>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Full Stack Developer (Fresher)</h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Developed multiple web and AI-based projects, practiced backend integration, and deployment.
                </p>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold text-green-500 mb-4 border-b border-gray-700 pb-2">
                Education
              </h2>
              <div className="space-y-3">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-1">AI & Computing Program (Ongoing)</h3>
                  <p className="text-gray-400 text-sm">GIAIC</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-1">Intermediate</h3>
                  <p className="text-gray-400 text-sm">Madar-e-Millat College (2020)</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-1">Matriculation</h3>
                  <p className="text-gray-400 text-sm">TCF School (2017)</p>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-2xl font-bold text-green-500 mb-4 border-b border-gray-700 pb-2">
                Languages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-1">Urdu</h3>
                  <p className="text-gray-400 text-sm">Proficient</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-1">English</h3>
                  <p className="text-gray-400 text-sm">Basic Work Proficiency</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link href="/" className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg transition-colors shadow-lg">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
