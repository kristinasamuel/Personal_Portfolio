export default function About() {
  return (
    <section id="about" className="bg-black text-white py-20">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-500 uppercase">About Me</h1>
        <p className="text-lg text-center leading-relaxed max-w-3xl mx-auto">
          I am Kristina, a passionate Frontend Developer and Agentic AI Developer focused on creating modern, interactive, and user-friendly web applications. I enjoy transforming ideas into polished digital experiences and building intelligent workflows and chatbots that solve real-world problems. Each project reflects my creativity, continuous learning, and dedication to delivering impactful solutions.
        </p>

        <div className="my-16">
          <h2 className="text-3xl font-bold text-center mb-8 uppercase">My Journey</h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto space-y-4 text-lg">
            <li>Started with the <strong>GIAIC program</strong>, learning full-stack and AI concepts.</li>
            <li>Built <strong>30+ projects</strong>, including e-commerce apps, dashboards, blogs, and AI chatbots.</li>
            <li>Completed multiple hackathons and real-world assignments.</li>
            <li>Currently expanding skills in <strong>Agentic AI development</strong>, automation workflows, AI-based tooling, and scalable frontend architecture.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
