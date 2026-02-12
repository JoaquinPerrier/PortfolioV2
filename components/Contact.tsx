"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker, HiCheck, HiExclamation } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

// Get your free access key at https://web3forms.com/
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          from_name: "Portfolio Contact Form",
          subject: `New message from ${formState.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />

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
            Communication
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-heading mb-4"
        >
          Let&apos;s <span className="gradient-text">Connect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subheading mb-12"
        >
          Have a project in mind or just want to say hi? I&apos;m always open to
          discussing new opportunities and creative ideas.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                I&apos;ll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-500 rounded-xl text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-500 rounded-xl text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-500 rounded-xl text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 bg-primary hover:bg-primary-light text-black font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <HiCheck className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : status === "error" ? (
                    <>
                      <HiExclamation className="w-5 h-5" />
                      Error — Try Again
                    </>
                  ) : (
                    <>
                      <HiMail className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {status === "success" && (
                  <p className="text-green-400 text-sm text-center mt-2">
                    Thanks! I&apos;ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm text-center mt-2">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Direct Contact */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-4">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:joaquinperrier@hotmail.com"
                  className="flex items-center gap-4 text-gray-400 hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                    <HiMail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-white group-hover:text-primary transition-colors">
                      joaquinperrier@hotmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+543462669057"
                  className="flex items-center gap-4 text-gray-400 hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                    <HiPhone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="text-white group-hover:text-primary transition-colors">
                      +54 3462 669057
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-400">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <HiLocationMarker className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="text-white">
                      Rosario, Santa Fe, Argentina
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Presence */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-4">
                Social Presence
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/JoaquinPerrier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-dark-700 border border-dark-500 hover:border-primary/50 hover:bg-dark-600 transition-all group"
                >
                  <FaGithub className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    GitHub
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/joaquin-perrier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-dark-700 border border-dark-500 hover:border-primary/50 hover:bg-dark-600 transition-all group"
                >
                  <FaLinkedinIn className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>

            {/* Languages */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-4">Languages</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Spanish</span>
                  <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    Native
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">English</span>
                  <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    Upper-Intermediate (FCE)
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
