"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-dark-500/50 bg-dark-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <span className="text-primary font-bold text-sm">JP</span>
            </div>
            <span className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Joaquín Perrier. All rights
              reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/JoaquinPerrier"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/joaquin-perrier"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="mailto:joaquinperrier@hotmail.com"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <HiMail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
