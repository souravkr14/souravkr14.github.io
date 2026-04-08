import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

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
    <section className="relative pb-28 bg-white dark:bg-black overflow-hidden">
      {/* BG GRID */}
      <div className="absolute inset-0 opacity-30 bg-grid-pattern" />

      {/* GLOW */}
      <div className="absolute left-[-200px] top-1/3 w-[500px] h-[500px] bg-indigo-500 blur-[160px] opacity-20" />

      <div className="relative container mx-auto px-6 md:w-[85%]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <p className="mt-6 text-gray-500 max-w-xl mx-auto">
            Real-world systems combining scalable backend architecture and
            modern frontend engineering.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="group relative p-8 rounded-[2rem]
              bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl
              border border-white/20 dark:border-slate-800
              shadow-2xl hover:-translate-y-3 transition duration-500"
            >
              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-[2rem] transition"></div>

              <div className="relative">
                {/* TITLE */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-500 transition">
                  {project.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-500 mb-6">{project.description}</p>

                {/* HIGHLIGHTS */}
                <ul className="space-y-2 text-sm mb-6">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2"></span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-lg
                      bg-white/60 dark:bg-slate-800/60
                      border border-white/20 dark:border-slate-700
                      hover:bg-indigo-500 hover:text-white
                      transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg
                    bg-gray-100 dark:bg-slate-800
                    hover:bg-indigo-500 hover:text-white
                    transition"
                  >
                    <FiGithub /> Code
                  </a>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg
                      bg-indigo-500 text-white
                      hover:bg-indigo-600 transition"
                    >
                      Live <FiExternalLink />
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
