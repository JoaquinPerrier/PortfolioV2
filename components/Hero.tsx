"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiDownload, HiArrowDown } from "react-icons/hi";
import gsap from "gsap";

const codeLines = [
  { num: "01", content: 'const developer = {' },
  { num: "02", content: "  name: 'Joaquín Perrier'," },
  { num: "03", content: "  role: 'Fullstack Developer'," },
  {
    num: "04",
    content: "  stack: ['Next.js', 'TypeScript', 'Node.js'],",
  },
  { num: "05", content: "  passionate: true," },
  { num: "06", content: '  motto: "Build with Purpose"' },
  { num: "07", content: "};" },
  { num: "08", content: "developer.buildAmazingThings();" },
];

export default function Hero() {
  const codeRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!codeRef.current) return;

    const lines = codeRef.current.querySelectorAll(".code-line");
    gsap.fromTo(
      lines,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.15,
        delay: 1.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left side - Text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-primary text-sm font-medium">
                WELCOME TO MY UNIVERSE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Crafting{" "}
              <span className="gradient-text">Digital</span>
              <br />
              Masterpieces
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-400 text-lg sm:text-xl max-w-xl mb-8 leading-relaxed"
            >
              I&apos;m{" "}
              <span className="text-white font-semibold">Joaquín Perrier</span>,
              a professional{" "}
              <span className="text-primary">Fullstack Developer</span>{" "}
              dedicated to building high-performance, user-centric web
              applications.
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <a
                href="https://github.com/JoaquinPerrier"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-dark-700 border border-dark-500 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-200"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/joaquin-perrier"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-dark-700 border border-dark-500 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-200"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="group px-6 py-3 bg-primary hover:bg-primary-light text-black font-semibold rounded-xl transition-all duration-200 flex items-center gap-2"
              >
                Let&apos;s Collaborate
                <HiArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="/JoaquinPerrier-FullstackDeveloperEN.pdf"
                target="_blank"
                className="px-6 py-3 border border-dark-500 hover:border-primary/50 text-gray-300 hover:text-primary rounded-xl transition-all duration-200 flex items-center gap-2"
              >
                <HiDownload className="w-4 h-4" />
                Get Resume
              </a>
            </motion.div>
          </div>

          {/* Right side - Code Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="glass-card orange-glow p-6 w-full max-w-md">
              {/* Code header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-gray-500 font-mono">
                  Portfolio.ts
                </span>
              </div>

              {/* Code content */}
              <div ref={codeRef} className="font-mono text-sm space-y-1">
                {codeLines.map((line, i) => (
                  <div
                    key={i}
                    className="code-line flex gap-4 opacity-0"
                  >
                    <span className="text-gray-600 select-none w-6 text-right">
                      {line.num}
                    </span>
                    <span className="text-gray-300">
                      {line.content.includes("const") ? (
                        <>
                          <span className="text-purple-400">const </span>
                          <span className="text-blue-300">
                            {line.content.replace("const ", "").replace(" = {", "")}
                          </span>
                          <span className="text-white"> = {"{"}</span>
                        </>
                      ) : line.content.includes("name:") ? (
                        <>
                          <span className="text-gray-300">{"  "}</span>
                          <span className="text-blue-300">name</span>
                          <span className="text-white">: </span>
                          <span className="text-primary">&apos;Joaquín Perrier&apos;</span>
                          <span className="text-white">,</span>
                        </>
                      ) : line.content.includes("role:") ? (
                        <>
                          <span className="text-gray-300">{"  "}</span>
                          <span className="text-blue-300">role</span>
                          <span className="text-white">: </span>
                          <span className="text-primary">
                            &apos;Fullstack Developer&apos;
                          </span>
                          <span className="text-white">,</span>
                        </>
                      ) : line.content.includes("stack:") ? (
                        <>
                          <span className="text-gray-300">{"  "}</span>
                          <span className="text-blue-300">stack</span>
                          <span className="text-white">: [</span>
                          <span className="text-green-400">
                            &apos;Next.js&apos;
                          </span>
                          <span className="text-white">, </span>
                          <span className="text-green-400">&apos;TS&apos;</span>
                          <span className="text-white">, </span>
                          <span className="text-green-400">
                            &apos;Node&apos;
                          </span>
                          <span className="text-white">],</span>
                        </>
                      ) : line.content.includes("passionate:") ? (
                        <>
                          <span className="text-gray-300">{"  "}</span>
                          <span className="text-blue-300">passionate</span>
                          <span className="text-white">: </span>
                          <span className="text-yellow-400">true</span>
                          <span className="text-white">,</span>
                        </>
                      ) : line.content.includes("motto:") ? (
                        <>
                          <span className="text-gray-300">{"  "}</span>
                          <span className="text-blue-300">motto</span>
                          <span className="text-white">: </span>
                          <span className="text-primary">
                            &quot;Build with Purpose&quot;
                          </span>
                        </>
                      ) : line.content.includes("};") ? (
                        <span className="text-white">{"}"}</span>
                      ) : line.content.includes("developer.") ? (
                        <>
                          <span className="text-blue-300">developer</span>
                          <span className="text-white">.</span>
                          <span className="text-yellow-300">
                            buildAmazingThings
                          </span>
                          <span className="text-white">();</span>
                        </>
                      ) : (
                        line.content
                      )}
                    </span>
                  </div>
                ))}
                {/* Blinking cursor */}
                <div className="flex gap-4 mt-1">
                  <span className="text-gray-600 select-none w-6 text-right">
                    09
                  </span>
                  <span className="w-2 h-5 bg-primary animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <HiArrowDown className="w-4 h-4 text-primary" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
