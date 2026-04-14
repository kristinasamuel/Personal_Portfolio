import Image from "next/image";
import Link from "next/link";

export type Project = {
  name: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink?: string;
  techStack: string[];
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={75}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.name}</h3>
        <div className="flex flex-wrap mb-4">
            {project.techStack.map((tech, index) => (
                <span key={index} className="bg-green-900 text-green-300 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">
                    {tech}
                </span>
            ))}
        </div>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex justify-between">
          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <span className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded cursor-pointer">
              Live Demo
            </span>
          </Link>
          {project.githubLink && (
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <span className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded cursor-pointer">
                GitHub
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
