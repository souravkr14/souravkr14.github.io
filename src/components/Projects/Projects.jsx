import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowUpRight } from "react-icons/fi";

const projects = [
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
  {
    title: "AI-PDF Intelligence",
    description:
      "RAG-based document intelligence system for semantic search & summarization.",
    highlights: [
      "Built embeddings-based RAG pipeline",
      "Semantic PDF search",
      "Automated summarization",
    ],
    tech: ["LangChain", "Vector DB", "RAG", "NLP"],
    link: "https://github.com/sourav-kr14/Chat-To-PDF",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-10 dark:bg-[#040816]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

      <div className="absolute left-[-200px] top-1/2 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[160px] opacity-20 animate-pulse"></div>

      <div className="relative container mx-auto px-6 md:w-[85%]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          {/* <span className="inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-300">
            Selected work
          </span> */}

          <h2 className="mt-6 text-4xl font-black sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Real-world builds focused on scalable architecture, AI workflows,
            and thoughtful product engineering.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_28px_80px_rgba(99,102,241,0.18)] dark:border-white/10 dark:bg-slate-900/45"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-fuchsia-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col">
                {/* Top */}
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-200/60 bg-indigo-100 text-indigo-600 transition duration-300 group-hover:scale-110 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
                    <FiArrowUpRight />
                  </span> */}
                </div>

                {/* Description */}
                <p className="mb-6 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mb-8 space-y-3">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300"
                    >
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/20 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-700 transition duration-300 hover:border-indigo-400/30 hover:bg-indigo-500 hover:text-white dark:border-white/10 dark:bg-slate-800/70 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex flex-wrap gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/70 px-5 text-sm font-medium text-slate-800 transition duration-300 hover:border-indigo-400/30 hover:bg-indigo-500 hover:text-white dark:border-white/10 dark:bg-slate-800/70 dark:text-slate-200"
                  >
                    <FiGithub />
                    Code
                  </a>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 text-sm font-medium text-white shadow-lg shadow-indigo-900/20 transition duration-300 hover:scale-[1.02] hover:from-indigo-400 hover:to-fuchsia-500"
                    >
                      Live Demo
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
