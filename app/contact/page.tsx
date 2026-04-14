import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si";

export default function Contact() {
  return (
    <div className="bg-black text-white ">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-500 uppercase">Contact Me</h1>
        <p className="text-lg text-center leading-relaxed max-w-3xl mx-auto mb-12">
          You can reach me through the following channels, or hire me directly on Upwork or Fiverr.
        </p>
        <div className="flex justify-center mb-6">
          <a
            href="https://github.com/kristinasamuel"
            className="text-white hover:text-green-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-10 h-10 mx-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/kristina-linkedin"
            className="text-white hover:text-green-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-10 h-10 mx-4" />
          </a>
          <a
            href="mailto:kristina97@gmail.com"
            className="text-white hover:text-green-500"
          >
            <FaEnvelope className="w-10 h-10 mx-4" />
          </a>
        </div>
        <div className="flex justify-center mb-12">
            <a href="https://www.upwork.com/freelancers/~010de4f8aa422702be?mp_source=share" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded text-lg mx-2">
                <SiUpwork className="w-6 h-6 mr-2" />
                Upwork
            </a>
            <a href="https://www.fiverr.com/s/YR5BG3d" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded text-lg mx-2">
                <SiFiverr className="w-6 h-6 mr-2" />
                Fiverr
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Address</h2>
            <p className="mb-4">
              Block H, No. 54, Steel Town, Bin Qasim, Malir, Karachi, Pakistan
            </p>
            <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.897368815597!2d67.32399231499999!3d24.86733838405104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33a7e7ff08a6f%3A0x26e86b5a32a68453!2sSteel%20Town%2C%20Bin%20Qasim%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1678886568000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" id="name" className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
