"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { HiExternalLink, HiCode } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Edundy — Educational Platform",
    description:
      "AI-powered educational application focused on school and academic management. Features automatic assignment generation and grading using AI, improving teaching efficiency. Built with a modern fullstack architecture and close collaboration with the product team.",
    tags: ["Next.js", "TypeScript", "React", "Node.js", "AI", "REST APIs"],
    category: "fullstack",
    featured: true,
  },
  {
    title: "Owner Built — Construction Management",
    description:
      "Process management platform for the construction industry, actively used in production. Includes complex business logic for projects, tasks, reports, and costs. Full REST API design with Prisma ORM and PostgreSQL.",
    tags: ["Next.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
    category: "fullstack",
    featured: true,
  },
  {
    title: "Mutual AMR — Institutional Migration",
    description:
      "Migration of institutional websites using Next.js, integrating legacy .NET systems. REST API integration with SQL Server databases, responsive and accessible user interfaces.",
    tags: ["Next.js", ".NET", "SQL Server", "REST APIs"],
    category: "frontend",
    featured: true,
  },
  {
    title: "E-commerce Frontend",
    description:
      "Complete frontend for an e-commerce application built with React. Features product listing, shopping cart, and checkout flow with responsive design.",
    tags: ["React", "JavaScript", "CSS", "SPA"],
    github: "https://github.com/JoaquinPerrier/ReactCH",
    category: "frontend",
    featured: false,
  },
  {
    title: "Trivia App Backend",
    description:
      "Backend API built with Node.js for creating and managing trivia games. RESTful architecture with data persistence and game logic.",
    tags: ["Node.js", "Express", "REST API", "JavaScript"],
    github: "https://github.com/JoaquinPerrier/nodeTriviApp",
    category: "backend",
    featured: false,
  },
  {
    title: "E-commerce Backend",
    description:
      "Complete backend for an e-commerce platform built with Node.js. Features product management, user authentication, and order processing.",
    tags: ["Node.js", "Express", "JavaScript", "REST API"],
    github:
      "https://github.com/JoaquinPerrier/CursoBackend/tree/main/TrabajoFinal",
    category: "backend",
    featured: false,
  },
  {
    title: "Stock Control System",
    description:
      "Inventory management application built with vanilla JavaScript. Complete CRUD operations for stock tracking and product management.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/DiegoNG90/Proyecto-Control-Stock",
    category: "frontend",
    featured: false,
  },
  {
    title: "UGames — Game Store",
    description:
      "Online gaming store with product catalog, search functionality, and modern UI design for browsing and purchasing games.",
    tags: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/DiegoNG90/Ugames",
    category: "frontend",
    featured: false,
  },
  {
    title: "Todo List App",
    description:
      "Task management application built with React. Features adding, completing, and deleting tasks with a clean and intuitive interface.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/JoaquinPerrier/toDoList",
    category: "frontend",
    featured: false,
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Featured", value: "featured" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Fullstack", value: "fullstack" },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-primary text-sm font-mono tracking-wider uppercase">
            Projects Showcase
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-heading mb-4"
        >
          Featured <span className="gradient-text">Creations</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subheading mb-10"
        >
          A selection of high-impact digital solutions, built with focus on
          scalability, performance, and exceptional user experience.
        </motion.p>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.value
                  ? "bg-primary text-black"
                  : "bg-dark-700 text-gray-400 hover:text-white border border-dark-500 hover:border-primary/50"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card glow-border overflow-hidden group hover:bg-dark-700/30 transition-all duration-300 flex flex-col"
              >
                {/* Card Header */}
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <HiCode className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-primary transition-colors"
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                      )}
                      {project.featured && (
                        <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                          Production
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-dark-700 text-gray-300 border border-dark-500"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-xs px-2 py-1 rounded-md bg-dark-700 text-primary border border-dark-500">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
