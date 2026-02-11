"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiCode, HiBriefcase, HiGlobe, HiAcademicCap } from "react-icons/hi";

const stats = [
  {
    icon: HiBriefcase,
    value: "4+",
    label: "Years Experience",
  },
  {
    icon: HiCode,
    value: "10+",
    label: "Projects Delivered",
  },
  {
    icon: HiGlobe,
    value: "3",
    label: "Countries Worked",
  },
  {
    icon: HiAcademicCap,
    value: "15+",
    label: "Tech Mastered",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative">
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
            Discovery
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-heading mb-12"
        >
          About <span className="gradient-text">The Architect</span>
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m{" "}
              <span className="text-white font-semibold">
                Joaquín Perrier
              </span>
              , a dedicated Fullstack Developer from{" "}
              <span className="text-primary">Rosario, Argentina</span>,
              specializing in TypeScript and crafting responsive, user-centric
              interfaces with React and Next.js.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              I build full-stack applications using Next.js, Node.js, and
              Prisma—leveraging type-safe ORMs to integrate robust database
              layers seamlessly into my applications. From process management
              platforms for the construction industry to AI-powered educational
              tools, I deliver scalable solutions that exceed expectations.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Currently pursuing Information Systems Engineering at UTN while
              working with international teams. Passionate about continuous
              learning, I stay at the forefront of emerging technologies to
              deliver maintainable solutions.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "PostgreSQL",
                "Prisma",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="glass-card glow-border p-5 text-center group hover:bg-dark-700/50 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
