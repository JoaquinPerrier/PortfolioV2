"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiBriefcase } from "react-icons/hi";

const experiences = [
  {
    period: "2025 – 2026",
    role: "Full Stack Developer",
    company: "Edundy",
    location: "Remote - USA",
    description: [
      "Development of an educational application focused on school and academic management.",
      "Responsible for frontend development using React, Next.js, and TypeScript, and collaboration on backend tasks with Node.js and REST APIs.",
      "Integration of Artificial Intelligence solutions for the automatic generation of assignments and grading of work, optimizing teaching time.",
      "Close collaboration with the product team, focusing on usability, performance, and code maintainability.",
    ],
    tags: ["React", "Next.js", "TypeScript", "Node.js", "AI Integration"],
    current: true,
  },
  {
    period: "2024 – 2026",
    role: "Full Stack Developer",
    company: "Owner Built",
    location: "Remote - USA",
    description: [
      "Development of a process management platform for the construction industry, actively used by multiple users in production environments.",
      "Design and implementation of REST APIs using Node.js, Prisma, and PostgreSQL.",
      "Full stack architecture development with Next.js and TypeScript.",
      "Modeling and implementation of complex business logic (projects, tasks, reports, costs).",
      "Performance optimization, code maintainability, and user experience improvements.",
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Node.js"],
    current: false,
  },
  {
    period: "2023 – 2025",
    role: "Frontend Developer / Full Stack Support",
    company: "Mutual AMR",
    location: "Rosario, Argentina",
    description: [
      "Participation in the migration of institutional websites using Next.js, integrating legacy .NET systems.",
      "Consumption and integration of REST APIs with SQL Server databases.",
      "Development of responsive and accessible user interfaces.",
      "Collaboration with infrastructure teams for deployments and maintenance.",
    ],
    tags: ["Next.js", ".NET", "SQL Server", "REST APIs"],
    current: false,
  },
  {
    period: "2022 – 2023",
    role: "Backend Developer",
    company: "Endava",
    location: "Rosario, Argentina",
    description: [
      "Development of REST APIs with Node.js for production systems.",
      "Implementation of authentication and authorization using JWT.",
      "Query optimization and performance improvements in Firestore.",
      "Work under quality standards, best practices, and team collaboration.",
    ],
    tags: ["Node.js", "JWT", "Firestore", "REST APIs"],
    current: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[128px]" />

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
            Built with Passion
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-heading mb-16"
        >
          Professional <span className="gradient-text">Journey</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 top-1">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      exp.current
                        ? "bg-primary border-primary shadow-lg shadow-primary/50"
                        : "bg-dark-800 border-primary/50"
                    }`}
                  />
                </div>

                {/* Period tag */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm text-primary font-mono bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    {exp.period}
                  </span>
                  {exp.current && (
                    <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full border border-green-400/20">
                      Present
                    </span>
                  )}
                </div>

                {/* Card */}
                <div className="glass-card glow-border p-6 hover:bg-dark-700/30 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400">
                        <HiBriefcase className="w-4 h-4 text-primary/70" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, j) => (
                      <li
                        key={j}
                        className="text-gray-400 text-sm leading-relaxed flex gap-2"
                      >
                        <span className="text-primary mt-1.5 shrink-0">
                          ▹
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-dark-700 text-gray-300 border border-dark-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
