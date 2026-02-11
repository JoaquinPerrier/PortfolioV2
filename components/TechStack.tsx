"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiPrisma,
  SiDocker,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiJest,
  SiHtml5,
  SiCss3,
  SiGithubactions,
  SiTestinglibrary,
} from "react-icons/si";

const categories = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Testing",
    skills: [
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Testing Library", icon: SiTestinglibrary, color: "#E33332" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
    ],
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[128px]" />

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
            Inventory
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-heading mb-16"
        >
          The <span className="gradient-text">Tech Stack</span>
        </motion.h2>

        {/* Categories */}
        <div className="space-y-10">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + catIdx * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + catIdx * 0.1 + i * 0.05,
                    }}
                    className="glass-card glow-border p-4 flex flex-col items-center gap-3 group hover:bg-dark-700/50 transition-all duration-300 cursor-default"
                  >
                    <skill.icon
                      className="w-8 h-8 transition-all duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
