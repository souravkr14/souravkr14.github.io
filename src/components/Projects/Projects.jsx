import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "RevHive",
    description:
      "Scalable social media platform built with Java microservices, secure authentication, real-time messaging, and cloud-native deployment using Docker and Kubernetes.",
    highlights: [
      "Built scalable Spring Boot microservices",
      "Implemented API Gateway & service discovery",
      "Containerized services using Docker & Kubernetes",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Kafka",
      "Docker",
      "Kubernetes",
      "Azure",
    ],
    link: "https://github.com/orgs/Rev-Hive/repositories",
  },
  {
    title: "AI Resume Builder",
    description:
      "AI-powered resume generation platform with modular backend architecture and fast PDF rendering.",
    highlights: [
      "Reduced PDF generation time by 60%",
      "Designed scalable backend architecture",
      "Optimized MongoDB schema",
    ],
    tech: ["React", "Node.js", "MongoDB", "AI"],
    link: "https://github.com/sourav-kr14/ai-resume-builder",
  },
  {
    title: "AI Disease Prediction",
    description:
      "ML-based system delivering real-time disease predictions via deployed API.",
    highlights: [
      "Optimized ML models (RF, SVM, NB)",
      "Built real-time Flask API",
      "Accurate symptom-based predictions",
    ],
    tech: ["Python", "Flask", "ML", "Pandas"],
    link: "https://github.com/sourav-kr14/AI-Powered-Disease-Prediction-System",
    liveLink: "https://ai-powered-disease-prediction-syste.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-12 sm:py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            Real-world builds focused on scalable architecture, AI workflows,
            and thoughtful product engineering.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/15 sm:p-7"
            >
              <div>
                {/* Top index and action link */}
                <div className="flex items-center justify-between pb-4">
                  <span className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-500">
                    0{index + 1}
                  </span>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} repository`}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200/80 bg-white/80 text-slate-600 transition hover:border-indigo-400 hover:text-indigo-600 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-400 dark:hover:border-white/20 dark:hover:text-white"
                  >
                    <FiArrowUpRight size={15} />
                  </a>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4 dark:border-white/[0.06]">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-200/70 bg-slate-50/80 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-600 dark:border-white/[0.06] dark:bg-white/[0.02] dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-7 flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 px-4 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-white/20 dark:hover:text-white"
                >
                  <FiGithub size={14} />
                  <span>Code</span>
                </a>

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-600 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
