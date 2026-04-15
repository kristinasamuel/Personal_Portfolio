
const skills = {
    "Frontend": ["Next.js", "Tailwind CSS", "ShadCN UI", "HTML5", "CSS3"],
    "Backend / APIs": ["FastAPI", "Firebase", "Sanity"],
    "AI & Automation": ["Agentic AI SDK", "Gemini CLI", "Claude AI", "Qwen AI", "MCP", "n8n", "Python"],
    "Tools & Deployment": ["UV", "GitHub", "Vercel", "Docker"],
    "Frameworks": ["Streamlit", "Chainlit"]
  };

export default function Skills() {
    return (
        <section id="skills" className="bg-black text-white py-20">
            <div className="container mx-auto p-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-green-500 uppercase">Skills & Technologies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-4 text-green-500">{category}</h3>
                        <ul className="list-disc list-inside">
                        {items.map(skill => <li key={skill}>{skill}</li>)}
                        </ul>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
