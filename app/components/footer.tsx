import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4">
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
        <p>© Kristina. All rights reserved.</p>
      </div>
    </footer>
  );
}
