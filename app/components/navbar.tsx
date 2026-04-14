"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold uppercase">
          Kristina ...
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-green-500">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-500">
            About
          </Link>
          <Link href="/skills" className="hover:text-green-500">
            Skills
          </Link>
          <Link href="/projects" className="hover:text-green-500">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-green-500">
            Contact
          </Link>
          <Link href="/resume" className="hover:text-green-500">
            Resume
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <Link href="/" onClick={handleLinkClick} className="block py-2 px-4 hover:bg-gray-700">
            Home
          </Link>
          <Link href="/about" onClick={handleLinkClick} className="block py-2 px-4 hover:bg-gray-700">
            About
          </Link>
          <Link href="/skills" onClick={handleLinkClick} className="block py-2 px-4 hover:bg-gray-700">
            Skills
          </Link>
          <Link href="/projects" onClick={handleLinkClick} className="block py-2 px-4 hover:bg-gray-700">
            Projects
          </Link>
          <Link href="/contact" onClick={handleLinkClick} className="block py-2 px-4 hover:bg-gray-700">
            Contact
          </Link>
          <Link href="/resume" onClick={handleLinkClick} className="block py-2 px-4 hover:bg-gray-700">
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
}
